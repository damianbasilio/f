/**
 * After Stitch build: apply FB images, re-run QA until placeholders are gone.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { root } from "./load-env.mjs";
import { imagesManifestFilled } from "./pipeline-summary.mjs";
import { runDesignQa } from "./design-qa.mjs";
import { runSiteEval } from "./site-eval.mjs";
import { runResponsiveQa } from "./responsive-qa.mjs";
import { slugDir } from "./paths.mjs";
import { applyQaAutofix } from "./qa-autofix.mjs";

const scriptsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "scripts");

export function htmlHasPlaceholderImages(html) {
  return /googleusercontent\.com\/aida-public/i.test(html);
}

function runScript(name, args) {
  const res = spawnSync(process.execPath, [path.join(scriptsDir, name), ...args], {
    cwd: root,
    encoding: "utf8",
  });
  return { ok: res.status === 0, stdout: res.stdout || "", stderr: res.stderr || "" };
}

function readQaResults(slug) {
  const dir = slugDir(slug);
  const reportPath = path.join(dir, "design-qa", "report.md");
  const evalPath = path.join(dir, "design-qa", "site-eval.md");
  let designQa = "—";
  let siteEval = "—";
  let responsiveQa = "—";
  if (fs.existsSync(reportPath)) {
    designQa = /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(reportPath, "utf8")) ? "pass" : "fail";
  }
  if (fs.existsSync(evalPath)) {
    siteEval = /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(evalPath, "utf8")) ? "pass" : "fail";
  }
  const responsivePath = path.join(dir, "design-qa", "responsive-qa.md");
  if (fs.existsSync(responsivePath)) {
    responsiveQa = /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(responsivePath, "utf8")) ? "pass" : "fail";
  }
  return { designQa, siteEval, responsiveQa };
}

/**
 * Apply images (when manifest ready), then re-run design QA + site eval until pass or max retries.
 * @returns {{ designQa: string, siteEval: string, responsiveQa: string, placeholders: boolean }}
 */
export async function finalizePostBuild(slug) {
  const dir = slugDir(slug);
  const htmlPath = path.join(dir, "index.html");
  const maxRetries = Math.max(0, Number(process.env.POST_BUILD_MAX_RETRIES) || 3);

  let designQa = "—";
  let siteEval = "—";
  let responsiveQa = "—";
  let placeholders = false;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const autofix = applyQaAutofix(slug);
    if (autofix.fixed) console.log(`  ✓ qa-autofix: ${autofix.change}`);

    const html = fs.readFileSync(htmlPath, "utf8");
    placeholders = htmlHasPlaceholderImages(html);

    if (placeholders && imagesManifestFilled(dir)) {
      const img = runScript("apply-images.mjs", [slug]);
      if (img.ok) {
        console.log(`  ✓ images:apply${attempt > 0 ? ` (retry ${attempt})` : ""}`);
      } else {
        console.log(`  ✗ images:apply${attempt > 0 ? ` (retry ${attempt})` : ""}`);
        if (img.stderr.trim()) console.log(`    ${img.stderr.trim().split("\n")[0]}`);
      }
    } else if (placeholders && !imagesManifestFilled(dir)) {
      console.log("  ○ images:apply skipped — manifest has no filled slots yet");
      break;
    } else if (attempt === 0 && imagesManifestFilled(dir)) {
      const img = runScript("apply-images.mjs", [slug]);
      if (img.ok) console.log("  ✓ images:apply");
    }

    console.log("  ↻ design QA + site eval + responsive…");
    runDesignQa(slug);
    await runSiteEval(slug);
    const resp = await runResponsiveQa(slug);
    if (!resp.ok) {
      console.log(`  ○ responsive-qa: ${resp.errors.slice(0, 2).join("; ") || "issues found"}`);
    } else {
      console.log("  ✓ responsive-qa pass");
    }
    ({ designQa, siteEval, responsiveQa } = readQaResults(slug));

    placeholders = htmlHasPlaceholderImages(fs.readFileSync(htmlPath, "utf8"));
    if (!placeholders && siteEval === "pass" && designQa === "pass" && responsiveQa === "pass") break;
    if (!placeholders && siteEval === "pass" && designQa === "pass") break;
    if (attempt < maxRetries && placeholders && imagesManifestFilled(dir)) continue;
    break;
  }

  return { designQa, siteEval, responsiveQa, placeholders };
}
