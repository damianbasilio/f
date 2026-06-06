/**
 * Generate Stitch design only (no adapt). Uses two-phase flow + full export pull.
 * Prefer: npm run stitch:build
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, requireStitchKey, root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";
import {
  buildSiteGeneratePrompt,
  pickDesignSystemText,
  pickScreenFromGenerate,
  pullScreenExport,
  saveDesignSystem,
  screenHasHtml,
  waitForScreenHtml,
} from "../lib/stitch-export.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/stitch-generate.mjs <slug>");
  process.exit(1);
}

requireStitchKey();
loadEnv();

const promptPath = slugDir(slug, "stitch", "prompt.md");
if (!fs.existsSync(promptPath)) {
  console.error(`Missing ${promptPath}. Run: npm run stitch:prompt -- ${slug}`);
  process.exit(1);
}

const promptFile = fs.readFileSync(promptPath, "utf8");
const promptMatch = promptFile.match(/## Prompt \(paste into Stitch\)\s+([\s\S]*?)\n---/);
const designPrompt = promptMatch ? promptMatch[1].trim() : promptFile;

const briefPath = slugDir(slug, "brief.md");
const brief = fs.existsSync(briefPath) ? fs.readFileSync(briefPath, "utf8") : "";
const businessName = brief.match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || slug;

const { stitch } = await import("@google/stitch-sdk");
const callTool = (name, args) => stitch.callTool(name, args);

const stitchDir = slugDir(slug, "stitch");
const exportDir = path.join(stitchDir, "export");
fs.mkdirSync(stitchDir, { recursive: true });

const project = await stitch.createProject(`Outreach — ${slug}`);
const projectId = project.id ?? project.projectId ?? String(project);
fs.writeFileSync(path.join(stitchDir, "project-id.txt"), projectId, "utf8");

console.log("Phase 1: design system…");
const phase1 = await callTool("generate_screen_from_text", {
  projectId,
  prompt: designPrompt,
  deviceType: "DESKTOP",
});
saveDesignSystem(stitchDir, pickDesignSystemText(phase1), phase1);

let screen = pickScreenFromGenerate(phase1);
let screenId = screen?.id ?? screen?.name?.split("/screens/")[1];

if (!screenHasHtml(screen)) {
  console.log("Phase 2: build website…");
  const designMd = pickDesignSystemText(phase1);
  const sitePrompt = buildSiteGeneratePrompt({ businessName, designMd });
  const phase2 = await callTool("generate_screen_from_text", {
    projectId,
    prompt: sitePrompt,
    deviceType: "DESKTOP",
  });
  screen = pickScreenFromGenerate(phase2);
  screenId = screen?.id ?? screen?.name?.split("/screens/")[1];
}

if (!screenId) {
  console.error("No screen returned. Check stitch/phase1-response.json");
  process.exit(1);
}

fs.writeFileSync(path.join(stitchDir, "screen-id.txt"), screenId, "utf8");

const raw = await waitForScreenHtml(callTool, projectId, screenId);
await pullScreenExport(raw, exportDir);
console.log(`Export saved under ${exportDir}/`);
