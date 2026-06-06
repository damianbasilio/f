/**
 * Initial / full repository deploy to GitHub Pages (main).
 * Usage: node scripts/github-deploy-all.mjs
 */
import { deployFullRepository } from "../lib/github-deploy.mjs";

try {
  const result = await deployFullRepository();
  if (!result.deployed) {
    console.log(`Skipped: ${result.skipped || "unknown"}`);
    process.exit(result.skipped ? 0 : 1);
  }
  console.log(`\n✓ Repository pushed (${result.files} files)`);
  if (result.live?.length) {
    for (const row of result.live) {
      console.log(`  ${row.ok ? "✓" : "⚠"} ${row.slug}: ${row.url}`);
    }
  }
  process.exit(0);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
