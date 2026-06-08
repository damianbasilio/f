/**
 * Smoke-test generate_screen_from_text on each key. Usage: node scripts/test-stitch-generate.mjs
 */
import { loadEnv, getStitchApiKeys } from "../lib/load-env.mjs";
import { Stitch, StitchToolClient } from "@google/stitch-sdk";

loadEnv();
const keys = getStitchApiKeys();

console.log(`Testing generate_screen_from_text on ${keys.length} key(s)…\n`);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const preview = `${key.slice(0, 10)}…${key.slice(-6)}`;
  const client = new StitchToolClient({ apiKey: key });
  const stitch = new Stitch(client);
  try {
    const project = await stitch.createProject(`key-test-${Date.now()}-${i}`);
    const projectId = project.projectId ?? project.id;
    const result = await client.callTool("generate_screen_from_text", {
      projectId,
      prompt: "Minimal landing page for a local dog groomer. Single hero section only.",
      deviceType: "DESKTOP",
    });
    const hasScreen = JSON.stringify(result).includes("screen") || JSON.stringify(result).includes("html");
    console.log(`Key ${i + 1}/${keys.length} (${preview}): OK${hasScreen ? "" : " (response received)"}`);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.log(`Key ${i + 1}/${keys.length} (${preview}): FAIL`);
    console.log(`  ${msg.slice(0, 250)}`);
  } finally {
    await client.close().catch(() => {});
  }
}
