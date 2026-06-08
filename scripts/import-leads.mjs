/**
 * Import JSON leads → slugs + lead.json per folder.
 * Usage: node scripts/import-leads.mjs <path-to.json> [--batch N]
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../lib/load-env.mjs";
import { parseLeadArray, deriveSlug, validateLead } from "../lib/lead-import.mjs";
import { slugDir } from "../lib/paths.mjs";
import { ensureFbLeadRegistry, lookupFbLead, registerFbLead } from "../lib/fb-lead-registry.mjs";

const args = process.argv.slice(2);
const fileArg = args.find((a) => !a.startsWith("--"));
const batchIdx = args.indexOf("--batch");
const batchNum = batchIdx !== -1 && args[batchIdx + 1] ? Number(args[batchIdx + 1]) : Date.now();

if (!fileArg) {
  console.error("Usage: node scripts/import-leads.mjs <leads.json> [--batch N]");
  process.exit(1);
}

const importPath = path.isAbsolute(fileArg) ? fileArg : path.join(root, fileArg);
const raw = fs.readFileSync(importPath, "utf8");
const leads = parseLeadArray(raw);

const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
fs.mkdirSync(batchDir, { recursive: true });

ensureFbLeadRegistry();

const slugs = [];
const usedSlugs = new Set();
/** @type {{ name: string, facebookUrl: string, existingSlug: string, existingBatch: number|string }[]} */
const skippedDuplicates = [];

for (const lead of leads) {
  validateLead(lead);
  const fbUrl = lead.facebook || lead.url;
  const existing = lookupFbLead(fbUrl);
  if (existing) {
    skippedDuplicates.push({
      name: lead.name,
      facebookUrl: fbUrl,
      existingSlug: existing.slug,
      existingBatch: existing.batchId,
    });
    console.log(`  ○ duplicate — ${lead.name} (already ${existing.slug}, batch ${existing.batchId})`);
    continue;
  }

  let slug = deriveSlug(lead.name, lead.city);
  let n = 2;
  while (usedSlugs.has(slug)) {
    slug = `${deriveSlug(lead.name, lead.city)}-${n++}`;
  }
  usedSlugs.add(slug);
  slugs.push(slug);

  registerFbLead(fbUrl, { slug, batchId: batchNum });

  const dir = slugDir(slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "lead.json"), JSON.stringify(lead, null, 2) + "\n", "utf8");
}

fs.writeFileSync(path.join(batchDir, "slugs.txt"), slugs.join("\n") + "\n", "utf8");
fs.writeFileSync(
  path.join(batchDir, "meta.json"),
  JSON.stringify(
    {
      batchId: batchNum,
      importPath: fileArg,
      importedAt: new Date().toISOString(),
      count: slugs.length,
      skippedDuplicates: skippedDuplicates.length,
      slugs,
      duplicates: skippedDuplicates,
    },
    null,
    2
  ) + "\n",
  "utf8"
);

fs.copyFileSync(importPath, path.join(root, "data", "imports", `import-${batchNum}.json`));

console.log(`Imported ${slugs.length} lead(s) → batch-${batchNum}${skippedDuplicates.length ? ` (${skippedDuplicates.length} duplicate FB page(s) skipped)` : ""}`);
for (const s of slugs) console.log(`  ${s}`);
console.log(`\nSlugs file: data/batches/batch-${batchNum}/slugs.txt`);
console.log(`Next: npm run pipeline:run -- data/batches/batch-${batchNum}/slugs.txt`);
