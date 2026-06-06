import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { MOCKUPS_DIR, ROOT_DIRS } from "./constants.mjs";
import { slugDir } from "./paths.mjs";

/**
 * Parse slug list from CLI args or a batch file (one slug per line, # comments ok).
 */
export function parseSlugs(argv, startIndex = 2) {
  const args = argv.slice(startIndex).filter(Boolean);
  if (args.length === 0) return [];

  if (args.length === 1 && (args[0].endsWith(".txt") || args[0].includes("/") || args[0].includes("\\"))) {
    const filePath = path.isAbsolute(args[0]) ? args[0] : path.join(root, args[0]);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Batch file not found: ${filePath}`);
    }
    return fs
      .readFileSync(filePath, "utf8")
      .split("\n")
      .map((line) => line.replace(/#.*/, "").trim())
      .filter(Boolean);
  }

  return args;
}

export function listLiveSlugs() {
  const previewRoot = path.join(root, MOCKUPS_DIR);
  if (!fs.existsSync(previewRoot)) return [];
  return fs
    .readdirSync(previewRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name)
    .filter((slug) => fs.existsSync(slugDir(slug, "index.html")))
    .sort();
}

export function readBriefField(brief, re, fallback = "") {
  const m = brief.match(re);
  return m ? m[1].trim() : fallback;
}
