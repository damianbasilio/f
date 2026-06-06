/**
 * Write {slug}/brief.compact.md from full brief.md.
 * Usage: node scripts/brief-compact.mjs slug-a [slug-b...]
 */
import { parseSlugs } from "../lib/slugs.mjs";
import { writeBriefCompact } from "../lib/brief-compact.mjs";

const slugs = parseSlugs(process.argv, 2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/brief-compact.mjs <slug...|batch.txt>");
  process.exit(1);
}

for (const slug of slugs) {
  const out = writeBriefCompact(slug);
  if (out) console.log(`Wrote ${out}`);
  else console.warn(`Skip ${slug}: no brief.md`);
}
