/**
 * Run design QA + site eval on an existing mockup when reports are missing.
 * Does not rebuild from Stitch.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import { runDesignQa } from "./design-qa.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";

const scriptsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "scripts");

function runScript(name, args) {
  return spawnSync(process.execPath, [path.join(scriptsDir, name), ...args], {
    cwd: root,
    encoding: "utf8",
  });
}

/**
 * @param {string} slug
 * @returns {boolean} whether any QA step ran
 */
export function ensureOutreachQaArtifacts(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return false;

  let ran = false;
  const reportPath = slugDir(slug, "design-qa", "report.md");
  const evalPath = slugDir(slug, "design-qa", "site-eval.md");

  if (!fs.existsSync(reportPath)) {
    runDesignQa(slug);
    ran = true;
  }
  if (!fs.existsSync(evalPath)) {
    runScript("site-eval.mjs", [slug]);
    ran = true;
  }

  if (fs.existsSync(slugDir(slug, "index.html"))) {
    syncSlugPipelineStatus(slug, { stitch: "done" });
  } else {
    syncSlugPipelineStatus(slug);
  }

  return ran;
}
