/**
 * Re-download all Stitch export files for an existing project/screen.
 * Usage: node scripts/stitch-pull.mjs <slug> [screenId]
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, requireStitchKey, root } from "../lib/load-env.mjs";
import { pullScreenExport, waitForScreenHtml } from "../lib/stitch-export.mjs";
import { slugDir } from "../lib/paths.mjs";

const slug = process.argv[2];
const screenIdArg = process.argv[3];

if (!slug) {
  console.error("Usage: node scripts/stitch-pull.mjs <slug> [screenId]");
  process.exit(1);
}

requireStitchKey();
loadEnv();

const stitchDir = slugDir(slug, "stitch");
const projectIdPath = path.join(stitchDir, "project-id.txt");
const screenIdPath = path.join(stitchDir, "screen-id.txt");

if (!fs.existsSync(projectIdPath)) {
  console.error(`Missing ${projectIdPath}. Run stitch:build first.`);
  process.exit(1);
}

const projectId = fs.readFileSync(projectIdPath, "utf8").trim();
const screenId =
  screenIdArg ||
  (fs.existsSync(screenIdPath) ? fs.readFileSync(screenIdPath, "utf8").trim() : "");

if (!screenId) {
  console.error("No screen-id.txt and no screenId argument. Pass screenId explicitly.");
  process.exit(1);
}

const { stitch } = await import("@google/stitch-sdk");
const callTool = (name, args) => stitch.callTool(name, args);

console.log(`Pulling export for ${slug} (project ${projectId}, screen ${screenId})…`);
const raw = await waitForScreenHtml(callTool, projectId, screenId);
const exportDir = path.join(stitchDir, "export");
const result = await pullScreenExport(raw, exportDir);

console.log(`\nPulled ${result.saved.length} file(s) → ${exportDir}/`);
if (result.htmlPath) console.log(`HTML: ${result.htmlPath}`);
else console.warn("No htmlCode file found in export.");
