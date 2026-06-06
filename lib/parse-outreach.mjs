import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";

import { MOCKUP_BASE } from "./constants.mjs";

const MOCKUP_URL_RE = new RegExp(`${MOCKUP_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/[^\\s)]+`, "i");

/** Canonical plain-text signature for every send. */
export const OUTREACH_SIGNATURE = `Damian Basilio
Freelance Web Developer
dam.basilio@gmail.com`;

/** Body + signature (replaces any existing signature block in outreach.md). */
export function ensureSignature(text) {
  const trimmed = text.trimEnd();
  const withoutSig = trimmed.replace(/\n*Damian Basilio[\s\S]*$/i, "").trimEnd();
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

  const afterSubject = content.split(/\*\*Subject:\*\*/i)[1] || "";
  const bodyBlock = afterSubject.replace(/^[^\n]*\n?/, "").trim();
  // Full message through signature block, before verification `---` divider
  const text = bodyBlock.split(/\n---\n/)[0].trim();

  if (!text) throw new Error(`${slug}/outreach.md: empty email body`);

  const fullText = ensureSignature(text);

  const mockupMatch = fullText.match(MOCKUP_URL_RE) || content.match(MOCKUP_URL_RE);
  const mockupUrl = mockupMatch ? mockupMatch[0].replace(/[.,;]+$/, "") : "";

  if (!mockupUrl) {
    throw new Error(`${slug}/outreach.md: no mockup URL (${MOCKUP_BASE}/...) found`);
  }

  return { to, subject, text: fullText, mockupUrl };
}
