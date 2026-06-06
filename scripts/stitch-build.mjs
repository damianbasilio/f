/**
 * Usage: node scripts/stitch-build.mjs <slug>
 */
import { buildSlug } from "../lib/stitch-build-one.mjs";
import { loadEnv, requireStitchKey } from "../lib/load-env.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/stitch-build.mjs <slug>");
  process.exit(1);
}

requireStitchKey();
loadEnv();

try {
  await buildSlug(slug);
  console.log("\nNext: npm run images:apply --", slug);
} catch (err) {
  console.error(err.message || err);
  process.exit(1);
}
