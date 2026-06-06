/**
 * Usage: node scripts/stitch-setup.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, requireStitchKey, root } from "../lib/load-env.mjs";

const envPath = path.join(root, ".env");
const examplePath = path.join(root, ".env.example");

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(examplePath)) {
    fs.copyFileSync(examplePath, envPath);
    console.log("Created .env from .env.example — paste STITCH_API_KEY, then re-run.");
    process.exit(0);
  }
}

requireStitchKey();
loadEnv();

try {
  await import("@google/stitch-sdk");
} catch {
  console.error("Run: npm install");
  process.exit(1);
}

const { stitch } = await import("@google/stitch-sdk");

try {
  const projects = await stitch.projects();
  console.log("Stitch connected.");
  console.log(`Projects in account: ${projects?.length ?? 0}`);
} catch (e) {
  console.error("Stitch auth failed:", e.message);
  process.exit(1);
}
