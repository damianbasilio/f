/**
 * Strip emojis and fix oversized Stitch spacing tokens on buttons/CTAs.
 */
import fs from "node:fs";
import path from "node:path";
import { slugDir } from "./paths.mjs";

const EMOJI_RE =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu;

const CONTENT_MARKER = "/* site-content-fix */";
const CONTENT_CSS = `
${CONTENT_MARKER}
button, a[class*="rounded"], input[type="submit"] {
  line-height: 1.25;
}
button[class*="px-xl"], a[class*="px-xl"][class*="rounded"],
button[class*="py-lg"], a[class*="py-lg"][class*="rounded"],
button[class*="py-xl"], a[class*="py-xl"][class*="rounded"] {
  padding: 0.75rem 1.5rem !important;
}
`;

function stripEmojis(text) {
  return text.replace(EMOJI_RE, "").replace(/\s{2,}/g, " ").trim();
}

function stripEmojisFromHtml(html) {
  let count = 0;
  const cleaned = html.replace(/>([^<]+)</g, (match, text) => {
    if (!EMOJI_RE.test(text)) return match;
    EMOJI_RE.lastIndex = 0;
    const next = stripEmojis(text);
    count++;
    return next ? `>${next}<` : "><";
  });
  const attrs = cleaned.replace(
    /\b(alt|title|aria-label|placeholder|content)=("([^"]*)"|'([^']*)')/gi,
    (match, attr, _q, d1, d2) => {
      const val = d1 ?? d2 ?? "";
      if (!EMOJI_RE.test(val)) return match;
      EMOJI_RE.lastIndex = 0;
      count++;
      const next = stripEmojis(val);
      const quote = match.includes('"') ? '"' : "'";
      return `${attr}=${quote}${next}${quote}`;
    }
  );
  return { html: attrs, count };
}

function fixOversizedButtonPadding(html) {
  let count = 0;
  const next = html.replace(/(<(?:button|a)\b[^>]*\bclass=")([^"]+)(")/gi, (match, pre, cls, post) => {
    if (!/\b(?:px|py)-(xl|lg)\b/.test(cls)) return match;
    const patched = cls
      .replace(/\bpx-xl\b/g, "px-6")
      .replace(/\bpx-lg\b/g, "px-6")
      .replace(/\bpy-xl\b/g, "py-3")
      .replace(/\bpy-lg\b/g, "py-3");
    if (patched === cls) return match;
    count++;
    return `${pre}${patched}${post}`;
  });
  return { html: next, count };
}

function ensureContentFixCss(slug) {
  const cssPath = path.join(slugDir(slug), "styles.css");
  if (!fs.existsSync(cssPath)) return false;
  let css = fs.readFileSync(cssPath, "utf8");
  if (css.includes(CONTENT_MARKER)) return false;
  fs.writeFileSync(cssPath, `${css.trimEnd()}\n${CONTENT_CSS}\n`, "utf8");
  return true;
}

/**
 * @returns {{ fixed: boolean, changes: string[] }}
 */
export function applySiteContentFix(slug) {
  const htmlPath = path.join(slugDir(slug), "index.html");
  if (!fs.existsSync(htmlPath)) return { fixed: false, changes: [] };

  const changes = [];
  let html = fs.readFileSync(htmlPath, "utf8");

  const emoji = stripEmojisFromHtml(html);
  if (emoji.count > 0) {
    html = emoji.html;
    changes.push(`removed ${emoji.count} emoji text node(s)`);
  }

  const buttons = fixOversizedButtonPadding(html);
  if (buttons.count > 0) {
    html = buttons.html;
    changes.push(`normalized padding on ${buttons.count} button/CTA(s)`);
  }

  if (changes.length > 0) {
    if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;
    fs.writeFileSync(htmlPath, html, "utf8");
  }

  if (ensureContentFixCss(slug)) changes.push("added button sizing safety CSS");

  if (changes.length === 0) return { fixed: false, changes: [] };
  return { fixed: true, changes };
}
