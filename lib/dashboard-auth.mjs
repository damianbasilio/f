import crypto from "node:crypto";
import { loadEnv } from "./load-env.mjs";

export const SESSION_COOKIE = "fl_dashboard_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_PASSWORD_LEN = 256;
const LOGIN_MAX_ATTEMPTS = 8;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_LOCKOUT_MS = 15 * 60 * 1000;

/** @type {Map<string, { attempts: number; windowStart: number; lockedUntil?: number }>} */
const loginAttemptsByIp = new Map();

let sessionSecret = null;

export function requireDashboardAuthConfig() {
  loadEnv();
  const password = process.env.DASHBOARD_PASSWORD?.trim();
  if (!password) {
    console.error(
      "Missing DASHBOARD_PASSWORD in .env — required for dashboard access.\n" +
        "Add a strong password, e.g. openssl rand -base64 24"
    );
    process.exit(1);
  }
  const secret = process.env.DASHBOARD_SESSION_SECRET?.trim();
  if (secret) {
    sessionSecret = secret;
  } else {
    sessionSecret = crypto.randomBytes(32).toString("hex");
    console.warn(
      "[dashboard-auth] DASHBOARD_SESSION_SECRET not set — using ephemeral secret; sessions expire on server restart"
    );
  }
}

function getSessionSecret() {
  if (!sessionSecret) requireDashboardAuthConfig();
  return sessionSecret;
}

function getPassword() {
  loadEnv();
  return process.env.DASHBOARD_PASSWORD?.trim() || "";
}

function timingSafeEqualStrings(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyPassword(input) {
  if (typeof input !== "string" || !input || input.length > MAX_PASSWORD_LEN) return false;
  const expected = getPassword();
  if (!expected) return false;
  return timingSafeEqualStrings(input, expected);
}

function signPayload(body) {
  return crypto.createHmac("sha256", getSessionSecret()).update(body).digest("base64url");
}

export function createSessionToken() {
  const payload = {
    v: 1,
    exp: Date.now() + SESSION_TTL_MS,
    nonce: crypto.randomBytes(16).toString("hex"),
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${signPayload(body)}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== "string") return false;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = signPayload(body);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) return false;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (payload.v !== 1 || typeof payload.exp !== "number") return false;
    if (Date.now() > payload.exp) return false;
    return true;
  } catch {
    return false;
  }
}

export function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq <= 0) continue;
    const key = part.slice(0, eq).trim();
    const val = part.slice(eq + 1).trim();
    try {
      out[key] = decodeURIComponent(val);
    } catch {
      out[key] = val;
    }
  }
  return out;
}

export function isAuthenticated(req) {
  const cookies = parseCookies(req.headers.cookie);
  return verifySessionToken(cookies[SESSION_COOKIE]);
}

function cookieOptions(req) {
  const secure = process.env.NODE_ENV === "production" || Boolean(req.secure);
  return {
    httpOnly: true,
    secure,
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_TTL_MS,
  };
}

export function setSessionCookie(res, req) {
  res.cookie(SESSION_COOKIE, createSessionToken(), cookieOptions(req));
}

export function clearSessionCookie(res, req) {
  res.clearCookie(SESSION_COOKIE, { ...cookieOptions(req), maxAge: 0 });
}

function clientIp(req) {
  return req.ip || req.socket?.remoteAddress || "unknown";
}

function checkLoginRateLimit(ip) {
  const now = Date.now();
  let entry = loginAttemptsByIp.get(ip);
  if (!entry) {
    entry = { attempts: 0, windowStart: now };
    loginAttemptsByIp.set(ip, entry);
  }
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.lockedUntil - now) / 1000) };
  }
  if (now - entry.windowStart > LOGIN_WINDOW_MS) {
    entry.attempts = 0;
    entry.windowStart = now;
    entry.lockedUntil = undefined;
  }
  if (entry.attempts >= LOGIN_MAX_ATTEMPTS) {
    entry.lockedUntil = now + LOGIN_LOCKOUT_MS;
    return { allowed: false, retryAfterSec: Math.ceil(LOGIN_LOCKOUT_MS / 1000) };
  }
  return { allowed: true };
}

function recordFailedLogin(ip) {
  const entry = loginAttemptsByIp.get(ip) || { attempts: 0, windowStart: Date.now() };
  entry.attempts += 1;
  loginAttemptsByIp.set(ip, entry);
}

function clearLoginAttempts(ip) {
  loginAttemptsByIp.delete(ip);
}

export function createAuthMiddleware() {
  return (req, res, next) => {
    if (isAuthenticated(req)) return next();
    if (req.path.startsWith("/api/")) {
      return res.status(401).json({ error: "Authentication required" });
    }
    const nextPath = encodeURIComponent(req.originalUrl || "/");
    return res.redirect(302, `/login?next=${nextPath}`);
  };
}

export function handleLogin(req, res) {
  const ip = clientIp(req);
  const limit = checkLoginRateLimit(ip);
  if (!limit.allowed) {
    return res.status(429).json({
      error: "Too many login attempts. Try again later.",
      retryAfterSec: limit.retryAfterSec,
    });
  }

  const password = req.body?.password;
  if (!verifyPassword(password)) {
    recordFailedLogin(ip);
    return res.status(401).json({ error: "Invalid password" });
  }

  clearLoginAttempts(ip);
  setSessionCookie(res, req);
  res.json({ ok: true });
}

export function handleLogout(_req, res) {
  clearSessionCookie(res, _req);
  res.json({ ok: true });
}

export function safeNextPath(next) {
  if (!next || typeof next !== "string") return "/";
  let decoded = next;
  try {
    decoded = decodeURIComponent(next);
  } catch {
    return "/";
  }
  if (!decoded.startsWith("/") || decoded.startsWith("//")) return "/";
  return decoded;
}
