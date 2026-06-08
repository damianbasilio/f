/**
 * Full Stitch rebuild for one slug (re-enrich → new design). Post-build is separate.
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, getStitchApiKeys } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import { enrichLead } from "./lead-enrichment.mjs";
import { buildSlug } from "./stitch-build-one.mjs";
import { setStatusStage } from "./status-update.mjs";

const STITCH_ARTIFACTS = [
  "design.html",
  "phase1-response.json",
  "phase2-response.json",
  "design-system-response.json",
  "single-attempt-prompt.md",
  "recovery-prompt.md",
  "site-prompt.md",
  "screen-id.txt",
  "project-id.txt",
  "DESIGN.md",
];

/** Drop prior Stitch output so a failed/partial rebuild cannot reuse old HTML. */
export function clearStitchBuildArtifacts(slug) {
  const stitchDir = slugDir(slug, "stitch");
  const exportDir = path.join(stitchDir, "export");
  if (fs.existsSync(exportDir)) fs.rmSync(exportDir, { recursive: true, force: true });

  for (const name of STITCH_ARTIFACTS) {
    const p = path.join(stitchDir, name);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }
}

const QA_STAGES = [
  "design-qa/craft",
  "design-qa/emil",
  "design-qa/taste",
  "design-qa/audit",
  "design-qa/harden",
  "design-qa/polish",
  "site-eval",
];

export function clearQaArtifactsForRebuild(slug, { clearOutreach = false } = {}) {
  clearStitchBuildArtifacts(slug);

  const qaDir = slugDir(slug, "design-qa");
  if (fs.existsSync(qaDir)) fs.rmSync(qaDir, { recursive: true, force: true });

  for (const name of ["pipeline-summary.json", ...(clearOutreach ? ["outreach.md"] : [])]) {
    const p = slugDir(slug, name);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  const brandPath = slugDir(slug, "stitch", "brand-extract.json");
  if (fs.existsSync(brandPath)) fs.unlinkSync(brandPath);

  for (const stage of QA_STAGES) {
    setStatusStage(slug, stage, "pending");
  }
  setStatusStage(slug, "stitch", "pending");
  setStatusStage(slug, "outreach", "pending");
}

/**
 * @param {string} slug
 * @param {{ clearOutreach?: boolean }} [opts]
 */
export async function rebuildSlugFromStitch(slug, { clearOutreach = false } = {}) {
  loadEnv();

  const leadPath = slugDir(slug, "lead.json");
  const verifyPath = slugDir(slug, "verification.json");
  if (!fs.existsSync(leadPath) || !fs.existsSync(verifyPath)) {
    throw new Error(`Missing lead.json or verification.json for ${slug}`);
  }

  clearQaArtifactsForRebuild(slug, { clearOutreach });
  setStatusStage(slug, "stitch", "active");

  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const verify = JSON.parse(fs.readFileSync(verifyPath, "utf8"));
  await enrichLead(slug, lead, verify);

  if (!getStitchApiKeys().length) throw new Error("No Stitch API keys configured");

  await buildSlug(slug, { rebuild: true });
}
