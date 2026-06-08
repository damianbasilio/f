/**
 * Generate Stitch design for the Facebook Leads admin dashboard.
 * Usage: npm run stitch:dashboard
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, requireStitchKey, root, getStitchApiKeys } from "../lib/load-env.mjs";
import {
  pickDesignSystemText,
  pickScreenFromGenerate,
  pullScreenExport,
  saveDesignSystem,
  screenHasHtml,
  waitForScreenHtml,
} from "../lib/stitch-export.mjs";
import { generateWithTimeout } from "../lib/stitch-generate-guard.mjs";
import { createStitchWorker } from "../lib/stitch-pool.mjs";

requireStitchKey();
loadEnv();

const stitchDir = path.join(root, "public", "stitch");
const exportDir = path.join(stitchDir, "export");
const promptPath = path.join(stitchDir, "prompt.md");

if (!fs.existsSync(promptPath)) {
  console.error(`Missing ${promptPath}`);
  process.exit(1);
}

const promptFile = fs.readFileSync(promptPath, "utf8");
const promptMatch = promptFile.match(/## Prompt \(paste into Stitch\)\s+([\s\S]*?)\n---/);
const designPrompt = promptMatch ? promptMatch[1].trim() : promptFile;

const htmlDirective = `

OUTPUT NOW: Deliver the complete HTML document with all CSS. Real UI mockup showing all four functional areas with sample data. No DESIGN.md-only response. No JavaScript.`;

const fullPrompt = designPrompt + htmlDirective;

fs.mkdirSync(stitchDir, { recursive: true });

const apiKey = getStitchApiKeys()[0];
const { stitch, callTool, close } = createStitchWorker(apiKey);
const logPath = path.join(stitchDir, "generate-log.jsonl");

console.log("Creating Stitch project: Facebook Leads Dashboard v3…");
const project = await stitch.createProject(`Facebook Leads — Dashboard v3 ${Date.now()}`);
const projectId = project.id ?? project.projectId ?? String(project);
fs.writeFileSync(path.join(stitchDir, "project-id.txt"), projectId, "utf8");

console.log("Generating dashboard (4-page minimal)…");
const phase1 = await generateWithTimeout(
  callTool,
  "generate_screen_from_text",
  { projectId, prompt: fullPrompt, deviceType: "DESKTOP" },
  { slug: "dashboard", phase: "dashboard-v3-full", logPath }
);

if (!phase1.ok) {
  console.error("Stitch generation failed:", phase1.error?.message);
  process.exit(1);
}

saveDesignSystem(stitchDir, pickDesignSystemText(phase1.result), phase1.result);
fs.writeFileSync(
  path.join(stitchDir, "phase1-response.json"),
  JSON.stringify(phase1.result, null, 2) + "\n",
  "utf8"
);

let screen = pickScreenFromGenerate(phase1.result);
let screenId = screen?.id ?? screen?.name?.split("/screens/")[1];

if (!screenHasHtml(screen)) {
  console.log("Phase 2: requesting HTML build…");
  const designMd = pickDesignSystemText(phase1.result);
  const phase2Prompt = `Build the complete HTML + CSS now. Four separate app-view pages (only Leads visible). Vanilla CSS, light/dark mode, professional minimal. No JavaScript.

${designMd.slice(0, 8000)}`;

  const phase2 = await generateWithTimeout(
    callTool,
    "generate_screen_from_text",
    { projectId, prompt: phase2Prompt, deviceType: "DESKTOP" },
    { slug: "dashboard", phase: "dashboard-v2-html", logPath }
  );

  if (!phase2.ok) {
    console.error("Phase 2 failed:", phase2.error?.message);
    process.exit(1);
  }

  screen = pickScreenFromGenerate(phase2.result);
  screenId = screen?.id ?? screen?.name?.split("/screens/")[1];
  fs.writeFileSync(
    path.join(stitchDir, "phase2-response.json"),
    JSON.stringify(phase2.result, null, 2) + "\n",
    "utf8"
  );
}

if (!screenId) {
  console.error("No screen returned.");
  process.exit(1);
}

fs.writeFileSync(path.join(stitchDir, "screen-id.txt"), screenId, "utf8");

console.log(`Waiting for screen HTML (${screenId})…`);
const raw = await waitForScreenHtml(callTool, projectId, screenId);
const { htmlPath, saved } = await pullScreenExport(raw, exportDir);

console.log(`\n✓ Export: ${exportDir}/`);
if (htmlPath) console.log(`  HTML: ${htmlPath}`);
console.log(`  Run: npm run dashboard:apply`);

await close();
