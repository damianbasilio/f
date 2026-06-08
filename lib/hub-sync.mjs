/**
 * Regenerate hub cards in root index.html from live mockup folders.
 */
import fs from "node:fs";
import path from "node:path";
import { listLiveSlugs, readBriefField } from "./slugs.mjs";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import { MOCKUPS_DIR } from "./constants.mjs";

const START = "<!-- hub:sync:start -->";
const END = "<!-- hub:sync:end -->";

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

/**
 * @param {{ excludeSlugs?: Set<string> | string[] }} [opts]
 * @returns {{ ok: boolean, count: number, slugs: string[], error?: string }}
 */
export function syncHubIndex(opts = {}) {
  const hubPath = path.join(root, "index.html");
  if (!fs.existsSync(hubPath)) {
    return { ok: false, count: 0, slugs: [], error: "index.html not found" };
  }

  let html = fs.readFileSync(hubPath, "utf8");
  if (!html.includes(START) || !html.includes(END)) {
    return { ok: false, count: 0, slugs: [], error: "index.html missing hub:sync markers" };
  }

  const exclude = opts.excludeSlugs instanceof Set ? opts.excludeSlugs : new Set(opts.excludeSlugs || []);
  const slugs = listLiveSlugs().filter((slug) => !exclude.has(slug));

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
    slugs.length > 0 ? `${START}\n${cards.join("\n")}\n        ${END}` : `${START}\n        ${END}`;

  html = html.replace(new RegExp(`${escapeMarker(START)}[\\s\\S]*?${escapeMarker(END)}`), block);
  fs.writeFileSync(hubPath, html, "utf8");
  return { ok: true, count: slugs.length, slugs };
}
