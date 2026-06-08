/**
 * Keep preview/{slug}/status.md in sync with pipeline outcomes.
 */
import fs from "node:fs";
import { slugDir } from "./paths.mjs";
import { setStatusStage, getStatusStage } from "./status-update.mjs";

const DESIGN_QA_STAGES = [
  "design-qa/craft",
  "design-qa/emil",
  "design-qa/taste",
  "design-qa/audit",
  "design-qa/harden",
  "design-qa/polish",
];

function readPassFail(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const text = fs.readFileSync(filePath, "utf8");
  if (/\*\*Result:\*\*\s*PASS/i.test(text)) return "pass";
  if (/\*\*Result:\*\*\s*FAIL/i.test(text)) return "fail";
  return null;
}

/**
 * @param {string} slug
 * @param {{ stitch?: "pending"|"active"|"done"|"fail", summary?: object }} [opts]
 */
export function syncSlugPipelineStatus(slug, { stitch, summary } = {}) {
  if (stitch) {
    setStatusStage(slug, "stitch", stitch);
  } else {
    const current = getStatusStage(slug, "stitch");
    const hasSite = fs.existsSync(slugDir(slug, "index.html"));
    if (hasSite && current !== "done") {
      setStatusStage(slug, "stitch", "done");
    } else if (current === "pending" || current === "active") {
      const hasDesign = fs.existsSync(slugDir(slug, "stitch", "design.html"));
      setStatusStage(slug, "stitch", hasDesign ? "done" : "fail");
    }
  }

  const reportPath = slugDir(slug, "design-qa", "report.md");
  const designQa = summary?.designQa || readPassFail(reportPath);
  if (designQa === "pass" || designQa === "fail") {
    const stageValue = designQa === "pass" ? "done" : "fail";
    for (const stage of DESIGN_QA_STAGES) {
      setStatusStage(slug, stage, stageValue);
    }
  }

  const siteEval = summary?.siteEval || readPassFail(slugDir(slug, "design-qa", "site-eval.md"));
  if (siteEval === "pass" || siteEval === "fail") {
    setStatusStage(slug, "site-eval", siteEval === "pass" ? "done" : "fail");
  }

  const manifestPath = slugDir(slug, "assets", "manifest.json");
  if (fs.existsSync(manifestPath)) {
    setStatusStage(slug, "images", "done");
  }

  if (summary?.qaCheck === "pass") {
    setStatusStage(slug, "copy", "done");
  }

  normalizeLegacyPipelineStatus(slug);
}

/** Older post-build sync wrote "pass"; outreach QA requires "done". */
export function normalizeLegacyPipelineStatus(slug) {
  const reportPath = slugDir(slug, "design-qa", "report.md");
  const designPassed = readPassFail(reportPath) === "pass";
  for (const stage of DESIGN_QA_STAGES) {
    const current = getStatusStage(slug, stage);
    if (current === "pass" || (current === "pending" && designPassed)) {
      setStatusStage(slug, stage, "done");
    }
  }

  const siteEvalPath = slugDir(slug, "design-qa", "site-eval.md");
  const sitePassed = readPassFail(siteEvalPath) === "pass";
  const siteEval = getStatusStage(slug, "site-eval");
  if (siteEval === "pass" || (siteEval === "pending" && sitePassed)) {
    setStatusStage(slug, "site-eval", "done");
  }
}
