/**
 * Regenerate hub cards from live mockup folders (those with index.html).
 * Usage: node scripts/hub-sync.mjs
 */
import { syncHubIndex } from "../lib/hub-sync.mjs";

const fromEnv = process.env.HUB_EXCLUDE_SLUGS?.trim();
const fromArg = process.argv.find((a) => a.startsWith("--exclude="))?.slice("--exclude=".length);
const excludeRaw = fromEnv || fromArg || "";

const result = syncHubIndex({
  excludeSlugs: excludeRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
});

if (!result.ok) {
  console.error(result.error || "Hub sync failed");
  process.exit(1);
}

console.log(`Hub synced: ${result.count} mockup(s) — ${result.slugs.join(", ") || "(none)"}`);
