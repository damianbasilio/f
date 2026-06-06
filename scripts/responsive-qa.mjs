/**
 * Multi-viewport responsive QA for a built mockup.
 * Usage: node scripts/responsive-qa.mjs <slug>
 */
import { runResponsiveQa } from "../lib/responsive-qa.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/responsive-qa.mjs <slug>");
  process.exit(1);
}

const result = await runResponsiveQa(slug);
console.log(`\n── ${slug} responsive QA ──`);
console.log(`Result: ${result.ok ? "PASS" : "FAIL"}`);
if (result.errors.length) console.log("Errors:", result.errors.join("; "));
if (result.warnings.length) console.log("Warnings:", result.warnings.join("; "));
if (result.reportPath) console.log(`Report: ${result.reportPath}`);
process.exit(result.ok ? 0 : 1);
