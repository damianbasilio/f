/**
 * Outreach email draft validation — runs before outreach.md is written.
 */

const EMOJI_RE = /\p{Extended_Pictographic}/u;
const GREETING_LINE_RE = /^hi,?$/i;

function isUrlLine(text, mockupUrl) {
  const t = text.trim();
  return t === mockupUrl || /^https?:\/\//.test(t);
}

function checkParagraphSeparation(body) {
  const lines = String(body || "").split("\n");
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].trim() && lines[i + 1].trim()) {
      return "paragraphs must be separated by a blank line (two consecutive non-empty lines)";
    }
  }
  return null;
}

function checkNoEmojis(subject, body) {
  if (EMOJI_RE.test(subject || "")) return "subject must not contain emoji characters";
  if (EMOJI_RE.test(body || "")) return "body must not contain emoji characters";
  return null;
}

function checkSentences(text, { mockupUrl }) {
  const errors = [];
  const blocks = String(text || "")
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (isUrlLine(block, mockupUrl)) continue;

    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    for (const line of lines) {
      if (GREETING_LINE_RE.test(line)) continue;
      if (isUrlLine(line, mockupUrl)) continue;

      if (line.endsWith(",")) {
        errors.push(`incomplete sentence ending with comma: "${line.slice(0, 50)}${line.length > 50 ? "…" : ""}"`);
        continue;
      }

      if (!/[.!?]$/.test(line)) {
        errors.push(`line must end with . ? or !: "${line.slice(0, 50)}${line.length > 50 ? "…" : ""}"`);
        continue;
      }

      if (/\.\s+[a-z]/.test(line)) {
        errors.push(`possible mid-thought line break after period: "${line.slice(0, 50)}${line.length > 50 ? "…" : ""}"`);
      }

      const sentences = line.split(/(?<=[.!?])\s+/).filter(Boolean);
      for (const sentence of sentences) {
        const s = sentence.trim();
        if (!s) continue;
        if (s.endsWith(",")) {
          errors.push(`sentence ends with comma: "${s.slice(0, 50)}${s.length > 50 ? "…" : ""}"`);
        } else if (!/[.!?]$/.test(s)) {
          errors.push(`incomplete sentence: "${s.slice(0, 50)}${s.length > 50 ? "…" : ""}"`);
        }
      }
    }
  }

  return errors;
}

function checkUrlOnOwnLine(body, mockupUrl) {
  if (!mockupUrl) return "mockup URL is required";

  const lines = String(body || "").split("\n");
  const trimmed = lines.map((l) => l.trim());
  const idx = trimmed.findIndex((l) => l === mockupUrl);
  if (idx < 0) {
    return "mockup URL must appear on its own line in the body";
  }

  if (trimmed[idx] !== mockupUrl) {
    return "mockup URL line must contain only the URL";
  }
  if (idx > 0 && trimmed[idx - 1] !== "") {
    return "mockup URL must have a blank line before it";
  }
  if (idx < trimmed.length - 1 && trimmed[idx + 1] !== "") {
    return "mockup URL must have a blank line after it";
  }
  return null;
}

/**
 * @param {{ subject: string, body: string, mockupUrl: string }} draft
 * @returns {{ ok: boolean, errors: string[] }}
 */
export function validateOutreachDraft({ subject, body, mockupUrl }) {
  const errors = [];

  const para = checkParagraphSeparation(body);
  if (para) errors.push(para);

  const emoji = checkNoEmojis(subject, body);
  if (emoji) errors.push(emoji);

  errors.push(...checkSentences(body, { mockupUrl }));

  const url = checkUrlOnOwnLine(body, mockupUrl);
  if (url) errors.push(url);

  return { ok: errors.length === 0, errors };
}

/**
 * @param {object} copy — groq or template outreach copy
 */
export function validateOutreachCopy(copy) {
  if (copy.body) {
    return validateOutreachDraft({
      subject: copy.subject || "",
      body: copy.body,
      mockupUrl: copy.mockupUrl || "",
    });
  }

  const body = [
    copy.greeting,
    copy.compliment,
    copy.opportunity,
    copy.preview,
    copy.mockupUrl,
    copy.cta,
    copy.pricing,
  ]
    .filter(Boolean)
    .join("\n\n");

  return validateOutreachDraft({
    subject: copy.subject || "",
    body,
    mockupUrl: copy.mockupUrl || "",
  });
}
