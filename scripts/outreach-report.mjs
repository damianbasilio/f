/**
 * Merge batch outreach emails into outreach-report-N.md for review.
 * Usage: node scripts/outreach-report.mjs --batch N
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";

const batchIdx = process.argv.indexOf("--batch");
const batchNum = batchIdx !== -1 && process.argv[batchIdx + 1] ? process.argv[batchIdx + 1] : null;

if (!batchNum) {
  console.error("Usage: node scripts/outreach-report.mjs --batch N");
  process.exit(1);
}

const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
const statusPath = path.join(batchDir, "status.json");
const slugsPath = path.join(batchDir, "slugs.txt");

let slugs = [];
if (fs.existsSync(statusPath)) {
  const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
  slugs = status.passed || [];
} else if (fs.existsSync(slugsPath)) {
  slugs = fs.readFileSync(slugsPath, "utf8").split(/\r?\n/).filter(Boolean);
}

const approved = [];
const sections = [
  `# Outreach report — batch ${batchNum}`,
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "> Review all emails below. Nothing sends until you run `npm run outreach:send -- --file data/batches/batch-" +
    batchNum +
    "/approved.txt --send`",
  "",
  "---",
  "",
];

for (const slug of slugs) {
  const outreachPath = slugDir(slug, "outreach.md");
  if (!fs.existsSync(outreachPath)) continue;
  approved.push(slug);
  const content = fs.readFileSync(outreachPath, "utf8");
  sections.push(`## ${slug}`, "", "```", content.split("\n---\n")[0].trim(), "```", "", "---", "");
}

fs.writeFileSync(path.join(batchDir, "approved.txt"), approved.join("\n") + "\n", "utf8");

const reportPath = path.join(root, `outreach-report-${batchNum}.md`);
fs.writeFileSync(reportPath, sections.join("\n"), "utf8");
console.log(`Wrote ${reportPath} (${approved.length} email(s))`);
console.log(`Approved slugs: data/batches/batch-${batchNum}/approved.txt`);
