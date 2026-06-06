/**
 * Deploy one preview slug to GitHub Pages (commit + push + wait for live URL).
 * Usage: node scripts/github-deploy.mjs <slug>
 */
import { deployPreviewSlug } from "../lib/github-deploy.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/github-deploy.mjs <slug>");
  process.exit(1);
}

try {
  const result = await deployPreviewSlug(slug);
  if (!result.deployed) {
    console.log(`Skipped: ${result.skipped || "unknown"}`);
    process.exit(result.skipped ? 0 : 1);
  }
  process.exit(result.live?.ok ? 0 : 1);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
