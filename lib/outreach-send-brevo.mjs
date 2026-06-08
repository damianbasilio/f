/**
 * Brevo transactional email sender — on standby.
 * To switch: move sendEmail/requireBrevoEnv/ensureSignature/hasOutreachSignature from here
 * into lib/outreach-send.mjs (or import sendEmail from this file).
 */
import { loadEnv } from "./load-env.mjs";

const BREVO_SEND_URL = "https://api.brevo.com/v3/smtp/email";

export function requireBrevoEnv() {
  loadEnv();
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const fromEmail = process.env.OUTREACH_FROM_EMAIL?.trim();
  const fromName = process.env.OUTREACH_FROM_NAME?.trim();

  const missing = [];
  if (!apiKey) missing.push("BREVO_API_KEY");
  if (!fromEmail) missing.push("OUTREACH_FROM_EMAIL");
  if (!fromName) missing.push("OUTREACH_FROM_NAME");

  if (missing.length) {
    throw new Error(
      `Missing required Brevo outreach env: ${missing.join(", ")}. Add them to .env (see .env.example).`
    );
  }

  const replyTo = (process.env.OUTREACH_REPLY_TO?.trim() || fromEmail).trim();
  const bcc = process.env.OUTREACH_BCC?.trim() || "";

  return { apiKey, fromEmail, fromName, replyTo, bcc };
}

function getSignatureStripRe(fromName) {
  const escaped = fromName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\n*(?:Thanks,?\\s*\\n*)?${escaped}[\\s\\S]*$`, "i");
}

function buildOutreachSignature(fromName, fromEmail) {
  return `Thanks,\n${fromName}\nFreelance Web Developer\n${fromEmail}`;
}

export function ensureSignature(text) {
  loadEnv();
  const fromName = process.env.OUTREACH_FROM_NAME?.trim();
  const fromEmail = process.env.OUTREACH_FROM_EMAIL?.trim();
  if (!fromName || !fromEmail) {
    throw new Error("Missing OUTREACH_FROM_NAME or OUTREACH_FROM_EMAIL for signature");
  }

  const trimmed = (text || "").trimEnd();
  const withoutSig = trimmed.replace(getSignatureStripRe(fromName), "").trimEnd();
  return `${withoutSig}\n\n${buildOutreachSignature(fromName, fromEmail)}`;
}

export function hasOutreachSignature(text) {
  loadEnv();
  const fromName = process.env.OUTREACH_FROM_NAME?.trim() || "";
  const fromEmail = process.env.OUTREACH_FROM_EMAIL?.trim() || "";
  const t = text || "";
  if (!fromName || !fromEmail) return false;

  const nameRe = new RegExp(fromName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const emailRe = new RegExp(fromEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  return nameRe.test(t) && /Freelance Web Developer/i.test(t) && emailRe.test(t);
}

export async function sendEmail({ to, subject, text }) {
  const cfg = requireBrevoEnv();
  const body = ensureSignature(text);
  if (!hasOutreachSignature(body)) {
    throw new Error("Refusing to send: outreach signature block is missing");
  }

  const payload = {
    sender: { name: cfg.fromName, email: cfg.fromEmail },
    to: [{ email: to }],
    subject,
    textContent: body,
    replyTo: { email: cfg.replyTo },
  };
  if (cfg.bcc) {
    payload.bcc = [{ email: cfg.bcc }];
  }

  const res = await fetch(BREVO_SEND_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": cfg.apiKey,
    },
    body: JSON.stringify(payload),
  });

  const raw = await res.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = raw;
  }

  if (!res.ok) {
    const detail = typeof data === "string" ? data : JSON.stringify(data);
    throw new Error(`Brevo API error (${res.status}): ${detail}`);
  }

  const messageId = data?.messageId;
  if (messageId) console.log(messageId);

  return { messageId };
}
