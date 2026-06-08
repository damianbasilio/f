/**
 * Test each STITCH_API_KEYS entry. Usage: node scripts/test-stitch-keys.mjs
 */
import { loadEnv, getStitchApiKeys } from "../lib/load-env.mjs";
import { StitchToolClient } from "@google/stitch-sdk";

loadEnv();
const keys = getStitchApiKeys();
if (!keys.length) {
  console.error("No STITCH_API_KEY(S) in .env");
  process.exit(1);
}

console.log(`Testing ${keys.length} Stitch API key(s)…\n`);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const preview = `${key.slice(0, 10)}…${key.slice(-6)}`;
  const client = new StitchToolClient({ apiKey: key });
  try {
    await client.callTool("list_projects", {});
    console.log(`Key ${i + 1}/${keys.length} (${preview}): OK`);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.log(`Key ${i + 1}/${keys.length} (${preview}): FAIL`);
    console.log(`  ${msg.slice(0, 200)}`);
  } finally {
    await client.close().catch(() => {});
  }
}
