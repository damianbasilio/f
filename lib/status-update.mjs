import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";

/**
 * Set a pipeline stage row in {slug}/status.md.
 * @param {string} slug
 * @param {string} stageKey e.g. "outreach-sent"
 * @param {string} value e.g. "done"
 */
export function setStatusStage(slug, stageKey, value) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return false;

  let text = fs.readFileSync(statusPath, "utf8");
  const escaped = stageKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(\\|\\s*${escaped}\\s*\\|\\s*)\\S+(\\s*\\|)`, "i");

  if (!re.test(text)) {
    const tableEnd = text.indexOf("\n\n**Notes");
    const row = `| ${stageKey} | ${value} |\n`;
    if (tableEnd >= 0) {
      text = text.slice(0, tableEnd) + row + text.slice(tableEnd);
    } else {
      text = text.trimEnd() + `\n| ${stageKey} | ${value} |\n`;
    }
  } else {
    text = text.replace(re, `$1${value}$2`);
  }

  fs.writeFileSync(statusPath, text, "utf8");
  return true;
}

/**
 * @param {string} slug
 * @param {string} stageKey
 * @returns {string|null}
 */
export function getStatusStage(slug, stageKey) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return null;
  const text = fs.readFileSync(statusPath, "utf8");
  const escaped = stageKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = text.match(new RegExp(`\\|\\s*${escaped}\\s*\\|\\s*(\\S+)\\s*\\|`, "i"));
  return m ? m[1].trim() : null;
}

/**
 * Append or update a **Sent at:** line in Notes.
 */
export function appendSentNote(slug, isoTimestamp) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return;

  let text = fs.readFileSync(statusPath, "utf8");
  const sentLine = `**Sent at:** ${isoTimestamp}`;

  if (/\*\*Sent at:\*\*/i.test(text)) {
    text = text.replace(/\*\*Sent at:\*\*\s*.+/i, sentLine);
  } else if (/\*\*Notes:\*\*/i.test(text)) {
    text = text.replace(/(\*\*Notes:\*\*[^\n]*)/i, `$1 ${sentLine}`);
  } else {
    text = text.trimEnd() + `\n\n${sentLine}\n`;
  }

  fs.writeFileSync(statusPath, text, "utf8");
}
