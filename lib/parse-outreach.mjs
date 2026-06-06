import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";

import { MOCKUP_BASE } from "./constants.mjs";

const MOCKUP_URL_RE = new RegExp(`${MOCKUP_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/[^\\s)]+`, "i");
const BODY_DIVIDER_RE = /\r?\n---+\s*(?:\r?\n|$)/;

/** Canonical plain-text signature — flows as closing lines, not a detached block (Gmail hides detached sender-matched footers). */
export const OUTREACH_SIGNATURE = `Thanks,
Damian Basilio
Freelance Web Developer
dam.basilio@gmail.com`;

const SIGNATURE_STRIP_RE = /\n*(?:Thanks,?\s*\n*)?Damian Basilio[\s\S]*$/i;

/** True when all three signature lines are present (order-independent). */
export function hasOutreachSignature(text) {
  const t = text || "";
  return (
    /Damian Basilio/i.test(t) &&
    /Freelance Web Developer/i.test(t) &&
    /dam\.basilio@gmail\.com/i.test(t)
  );
}

/** Body + canonical signature (dedupes any trailing sign-off block). */
export function ensureSignature(text) {
  const trimmed = (text || "").trimEnd();
  const withoutSig = trimmed.replace(SIGNATURE_STRIP_RE, "").trimEnd();
  return `${withoutSig}\n\n${OUTREACH_SIGNATURE}`;
}

/** Extract email from plain or markdown mailto link. */
export function parseToField(raw) {
  const trimmed = (raw || "").trim();
  if (!trimmed) return "";
  const mailto = trimmed.match(/\[([^\]]+)\]\(mailto:([^)]+)\)/i);
  if (mailto) return mailto[2].trim();
  const bareMailto = trimmed.match(/^mailto:(.+)$/i);
  if (bareMailto) return bareMailto[1].trim();
  return trimmed.replace(/^<|>$/g, "");
}

/** Email body from outreach.md (after Subject, before verification divider). */
export function extractEmailBody(content) {
  const subjectMatch = content.match(/\*\*Subject:\*\*\s*.+/i);
  if (!subjectMatch) throw new Error("outreach.md: missing **Subject:**");

  const afterSubject = content.slice(subjectMatch.index + subjectMatch[0].length);
  const dividerIdx = afterSubject.search(BODY_DIVIDER_RE);
  const body = (dividerIdx === -1 ? afterSubject : afterSubject.slice(0, dividerIdx)).trim();
  if (!body) throw new Error("outreach.md: empty email body");
  return body;
}

/**
 * Parse {slug}/outreach.md into send payload fields.
 * @param {string} slug
 * @returns {{ to: string, subject: string, text: string, mockupUrl: string }}
 */
export function parseOutreachMd(slug) {
  const outreachPath = slugDir(slug, "outreach.md");
  if (!fs.existsSync(outreachPath)) {
    throw new Error(`Missing ${slug}/outreach.md — run npm run outreach:draft -- ${slug}`);
  }

  const content = fs.readFileSync(outreachPath, "utf8");
  const toMatch = content.match(/\*\*To:\*\*\s*(.+)/i);
  const subjectMatch = content.match(/\*\*Subject:\*\*\s*(.+)/i);

  const to = parseToField(toMatch?.[1] || "");
  const subject = (subjectMatch?.[1] || "").trim();

  if (!to) throw new Error(`${slug}/outreach.md: missing or empty **To:**`);
  if (!subject) throw new Error(`${slug}/outreach.md: missing or empty **Subject:**`);

  const body = extractEmailBody(content);
  const fullText = ensureSignature(body);

  if (!hasOutreachSignature(fullText)) {
    throw new Error(`${slug}/outreach.md: signature missing after ensureSignature — check parse-outreach.mjs`);
  }

  const mockupMatch = fullText.match(MOCKUP_URL_RE) || content.match(MOCKUP_URL_RE);
  const mockupUrl = mockupMatch ? mockupMatch[0].replace(/[.,;]+$/, "") : "";

  if (!mockupUrl) {
    throw new Error(`${slug}/outreach.md: no mockup URL (${MOCKUP_BASE}/...) found`);
  }

  return { to, subject, text: fullText, mockupUrl };
}
