/**
 * Audit and auto-fix mobile layout on all live mockups.
 * Usage: node scripts/mobile-layout-audit.mjs [slug...]
 */
import { listLiveSlugs, parseSlugs } from "../lib/slugs.mjs";
import { runMobileLayoutFix, writeMobileLayoutReport } from "../lib/mobile-layout-fix.mjs";
import { runResponsiveQa } from "../lib/responsive-qa.mjs";

const slugs = parseSlugs(process.argv).length ? parseSlugs(process.argv) : listLiveSlugs();

console.log(`Mobile layout audit: ${slugs.length} mockup(s)\n`);

let pass = 0;
let fail = 0;

for (const slug of slugs) {
  process.stdout.write(`── ${slug} ──\n`);
  const result = await runMobileLayoutFix(slug);
  writeMobileLayoutReport(slug, result);

  const responsive = await runResponsiveQa(slug);
  if (result.ok && responsive.ok) {
    console.log(`  ✓ pass (${result.changes.length ? result.changes.join("; ") : "no changes needed"})`);
    pass++;
  } else {
    console.log(`  ✗ still failing`);
    if (result.changes.length) console.log(`    autofix: ${result.changes.join("; ")}`);
    console.log(`    layout: ${result.diagnosis?.viewports?.filter((v) => v.overflow || v.tinyText).map((v) => v.name).join(", ") || "?"}`);
    console.log(`    responsive: ${responsive.errors.join("; ") || "unknown"}`);
    fail++;
  }
}

console.log(`\nDone: ${pass} pass, ${fail} fail`);
process.exit(fail ? 1 : 0);
