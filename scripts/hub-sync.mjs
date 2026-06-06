/**
 * Regenerate hub cards from live mockup folders (those with index.html).
 * Usage: node scripts/hub-sync.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { listLiveSlugs, readBriefField } from "../lib/slugs.mjs";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";
import { MOCKUPS_DIR } from "../lib/constants.mjs";

const hubPath = path.join(root, "index.html");
const START = "<!-- hub:sync:start -->";
const END = "<!-- hub:sync:end -->";

function excludeSlugs() {
  const fromEnv = process.env.HUB_EXCLUDE_SLUGS?.trim();
  const fromArg = process.argv.find((a) => a.startsWith("--exclude="))?.slice("--exclude=".length);
  const raw = fromEnv || fromArg || "";
  return new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );
}

const slugs = listLiveSlugs().filter((slug) => !excludeSlugs().has(slug));
const cards = slugs.map((slug) => {
  const briefPath = slugDir(slug, "brief.md");
  let name = slug;
  let subtitle = slug;

  if (fs.existsSync(briefPath)) {
    const brief = fs.readFileSync(briefPath, "utf8");
    name = readBriefField(brief, /\*\*Name:\*\*\s*(.+)/i, slug);
    const location = readBriefField(brief, /\*\*Location:\*\*\s*(.+)/i, "");
    const vertical = readBriefField(
      brief,
      /\*\*Vertical:\*\*\s*(.+)/i,
      readBriefField(brief, /## Stitch generation brief[\s\S]*?\*\*Vertical:\*\*\s*(.+)/i, "")
    );
    const cityState = location.match(/,\s*([^,]+),\s*([A-Z]{2})/);
    if (cityState) {
      subtitle = `${cityState[1]}, ${cityState[2]}`;
      if (vertical) subtitle += ` · ${vertical}`;
    } else if (vertical) {
      subtitle = vertical;
    }
  }

  return `        <a class="card" href="${MOCKUPS_DIR}/${slug}/">
          <h2>${escapeHtml(name)}</h2>
          <p>${escapeHtml(subtitle)}</p>
        </a>`;
});

const block =
  slugs.length > 0
    ? `${START}\n${cards.join("\n")}\n        ${END}`
    : `${START}\n        ${END}`;

let html = fs.readFileSync(hubPath, "utf8");
if (!html.includes(START) || !html.includes(END)) {
  console.error("index.html missing hub:sync markers. Add <!-- hub:sync:start --> and <!-- hub:sync:end -->");
  process.exit(1);
}

html = html.replace(new RegExp(`${escapeMarker(START)}[\\s\\S]*?${escapeMarker(END)}`), block);
fs.writeFileSync(hubPath, html, "utf8");
console.log(`Hub synced: ${slugs.length} mockup(s) — ${slugs.join(", ") || "(none)"}`);

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeMarker(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
