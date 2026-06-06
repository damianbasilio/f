/**
 * Post-build broken-things evaluation.
 * Usage: node scripts/site-eval.mjs <slug>
 */
import { runSiteEval } from "../lib/site-eval.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/site-eval.mjs <slug>");
  process.exit(1);
}

console.log(`\nSite evaluation — ${slug}\n`);
const result = await runSiteEval(slug);

for (const e of result.errors) console.log(`  ✗ ${e}`);
for (const w of result.warnings) console.log(`  ⚠ ${w}`);

console.log(`\nReport: ${slug}/design-qa/site-eval.md`);
process.exit(result.ok ? 0 : 1);
