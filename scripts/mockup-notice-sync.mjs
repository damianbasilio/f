/**
 * Migrate top banner → in-site mockup notice popup for one or all mockups.
 * Usage: node scripts/mockup-notice-sync.mjs [slug...]
 */
import { listLiveSlugs, parseSlugs } from "../lib/slugs.mjs";
import { applyMockupNotice } from "../lib/mockup-notice.mjs";

const slugs = parseSlugs(process.argv).length ? parseSlugs(process.argv) : listLiveSlugs();

console.log(`Mockup notice sync: ${slugs.length} mockup(s)\n`);

for (const slug of slugs) {
  const result = applyMockupNotice(slug);
  if (result.changed) {
    console.log(`  ✓ ${slug} — ${result.changes.join("; ")}`);
  } else {
    console.log(`  ○ ${slug} — already up to date`);
  }
}
