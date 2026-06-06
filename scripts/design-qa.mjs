/**
 * Run design skill passes (emil, taste, audit, harden, polish) on a built mockup.
 * Usage: node scripts/design-qa.mjs <slug>
 *
 * Also runs automatically at the end of stitch:build.
 */
import { runDesignQa } from "../lib/design-qa.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/design-qa.mjs <slug>");
  process.exit(1);
}

console.log(`\nDesign QA — ${slug}`);
console.log("Skills: emil-design-eng → design-taste-frontend → impeccable audit → harden → polish\n");

const result = runDesignQa(slug);

for (const fix of result.fixes) console.log(`  ✓ ${fix}`);
console.log(`\nReport: ${slug}/design-qa/report.md`);

if (!result.ok) {
  console.error("\n✗ Design QA found blockers — see report");
  process.exit(1);
}
console.log("\n✓ Design QA passed");
