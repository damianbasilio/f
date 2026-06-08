import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";
import { loadEnv, root } from "./load-env.mjs";
import fs from "node:fs";
import { getStatusStage, setStatusStage, appendSentNote } from "./status-update.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";
import { ensureOutreachQaArtifacts } from "./ensure-outreach-qa.mjs";
import { slugDir } from "./paths.mjs";
import { ensureSignature, hasOutreachSignature, parseOutreachMd } from "./parse-outreach.mjs";

export { ensureSignature };

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

export function requireGmailEnv() {
  loadEnv();
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  if (!user || !pass) {
    console.error(
      "Missing Gmail credentials.\n" +
        "1. Enable 2-Step Verification on your Google account\n" +
        "2. Create an App password (Google Account → Security → App passwords)\n" +
        "3. Add to .env:\n" +
        "   GMAIL_USER=your@gmail.com\n" +
        "   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx"
    );
    process.exit(1);
  }
  const bcc = process.env.GMAIL_BCC?.trim() || "";
  return {
    user,
    pass: pass.replace(/\s/g, ""),
    bcc,
    replyTo: (process.env.GMAIL_REPLY_TO || user).trim(),
  };
}

export function isAlreadySent(slug) {
  const val = getStatusStage(slug, "outreach-sent");
  if (!val) return false;
  return /^done$/i.test(val) || /^\d{4}-\d{2}-\d{2}/.test(val);
}

export function hasSentAtNote(slug) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return false;
  return /\*\*Sent at:\*\*/.test(fs.readFileSync(statusPath, "utf8"));
}

export function isSlugSent(slug) {
  return isAlreadySent(slug) || hasSentAtNote(slug);
}

export function markSent(slug) {
  const iso = new Date().toISOString();
  setStatusStage(slug, "outreach-sent", "done");
  appendSentNote(slug, iso);
  return iso;
}

export function runOutreachQa(slug) {
  const qaPath = path.join(scriptsDir, "..", "scripts", "qa-check.mjs");
  const res = spawnSync(process.execPath, [qaPath, slug, "--outreach"], {
    cwd: root,
    encoding: "utf8",
  });
  return {
    ok: res.status === 0,
    stdout: res.stdout || "",
    stderr: res.stderr || "",
  };
}

/** Ensure QA reports exist, sync status.md, then run outreach QA. */
export function checkOutreachQa(slug) {
  ensureOutreachQaArtifacts(slug);
  return runOutreachQa(slug);
}

export async function checkLiveMockup(url) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (res.status >= 200 && res.status < 400) {
      return { ok: true, status: res.status };
    }
    const getRes = await fetch(url, { method: "GET", redirect: "follow" });
    const ok = getRes.status >= 200 && getRes.status < 400;
    return { ok, status: getRes.status };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export async function sendEmail({ to, subject, text }) {
  const cfg = requireGmailEnv();
  const body = ensureSignature(text);
  if (!hasOutreachSignature(body)) {
    throw new Error("Refusing to send: outreach signature block is missing");
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const mail = {
    from: `"Damian Basilio" <${cfg.user}>`,
    replyTo: cfg.replyTo,
    to,
    subject,
    text: body,
  };
  if (cfg.bcc) mail.bcc = cfg.bcc;

  const info = await transport.sendMail(mail);

  return info;
}

export function getSendDelayMs() {
  loadEnv();
  const n = Number(process.env.OUTREACH_SEND_DELAY_MS);
  return Number.isFinite(n) && n >= 0 ? n : 45000;
}

export function delayBetweenSends(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Send outreach for one slug (QA + live check + Gmail).
 * @returns {Promise<{ ok: boolean, result: string, reason?: string, sentAt?: string }>}
 */
export async function sendOutreachForSlug(slug, { force = false, skipLiveCheck = false } = {}) {
  let parsed;
  try {
    parsed = parseOutreachMd(slug);
  } catch (err) {
    return { ok: false, result: "fail", reason: err.message };
  }

  if (isAlreadySent(slug) && !force) {
    return { ok: false, result: "skipped", reason: "already sent (use --force to resend)" };
  }

  const qa = checkOutreachQa(slug);
  if (!qa.ok) {
    const tail = (qa.stdout + qa.stderr).split("\n").filter((l) => l.includes("✗")).slice(0, 3).join("; ");
    return { ok: false, result: "fail", reason: tail || "qa:check --outreach failed" };
  }

  if (!skipLiveCheck) {
    const live = await checkLiveMockup(parsed.mockupUrl);
    if (!live.ok) {
      const detail = live.error || `HTTP ${live.status}`;
      return {
        ok: false,
        result: "fail",
        reason: `mockup not live at ${parsed.mockupUrl} (${detail}) — push to GitHub Pages first`,
      };
    }
  }

  if (!hasOutreachSignature(parsed.text)) {
    return { ok: false, result: "fail", reason: "email body missing signature block before send" };
  }

  try {
    await sendEmail({ to: parsed.to, subject: parsed.subject, text: parsed.text });
    const sentAt = markSent(slug);
    return { ok: true, result: "sent", sentAt };
  } catch (err) {
    return { ok: false, result: "fail", reason: err.message };
  }
}
