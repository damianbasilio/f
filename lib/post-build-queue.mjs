/**
 * Per-slug downstream work after a successful Stitch build.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { root } from "./load-env.mjs";
import { writePipelineSummary, readBlockersFromReport } from "./pipeline-summary.mjs";
import { hasUsableMapLocation, resolveMapQuery } from "./brief-fields.mjs";
import { injectGoogleMap, applyMapStylesToCss } from "./map-embed.mjs";
import { slugDir } from "./paths.mjs";
import { finalizePostBuild } from "./post-build-finalize.mjs";
import { deployPreviewSlug, isGitDeployEnabled } from "./github-deploy.mjs";
import { rebuildSlugFromStitch } from "./rebuild-from-stitch.mjs";
import {
  readQaRebuildAttempts,
  writeQaRebuildAttempts,
  getMaxQaAutoRebuildAttempts,
  isQaAutoRebuildEnabled,
} from "./qa-rebuild-attempts.mjs";
import { setStatusStage } from "./status-update.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";

const scriptsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "scripts");

function runScript(name, args) {
  const res = spawnSync(process.execPath, [path.join(scriptsDir, name), ...args], {
    cwd: root,
    encoding: "utf8",
  });
  return { ok: res.status === 0, stdout: res.stdout || "", stderr: res.stderr || "" };
}

/**
 * Map inject, images:apply + QA retries, qa:check, GitHub Pages deploy.
 * @param {{ outreach?: boolean, forceDeploy?: boolean, skipAutoRebuild?: boolean, batchNum?: string }} [opts]
 * @returns {{ slug, ok: boolean, summary: object, blockers: array }}
 */
async function runPostBuildOnce(slug, { outreach = false, forceDeploy = false } = {}) {
  const dir = slugDir(slug);
  const row = {
    slug,
    stitch: "pass",
    designQa: "—",
    siteEval: "—",
    qaCheck: "fail",
    deploy: "skip",
    outreachDraft: "skip",
    blockers: [],
    status: "pass",
  };

  if (!fs.existsSync(path.join(dir, "index.html"))) {
    row.stitch = "fail";
    row.blockers.push({ file: `${slug}/index.html`, message: "Missing index.html after build" });
    row.status = "fail";
    writePipelineSummary(slug, row);
    return { slug, ok: false, summary: row, blockers: row.blockers };
  }

  console.log(`\n── post-build: ${slug} ──`);

  const htmlPath = path.join(dir, "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");

  const briefPath = path.join(dir, "brief.md");
  if (fs.existsSync(briefPath)) {
    const briefText = fs.readFileSync(briefPath, "utf8");
    const address = resolveMapQuery(briefText);
    if (hasUsableMapLocation(briefText)) {
      const businessName = briefText.match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || slug;
      const mapResult = injectGoogleMap(html, {
        address,
        businessName,
        brief: briefText,
      });
      const out = mapResult.html.startsWith("<!DOCTYPE") ? mapResult.html : `<!DOCTYPE html>\n${mapResult.html}`;
      fs.writeFileSync(htmlPath, out, "utf8");
      const cssPath = path.join(dir, "styles.css");
      if (fs.existsSync(cssPath)) {
        fs.writeFileSync(cssPath, applyMapStylesToCss(fs.readFileSync(cssPath, "utf8")), "utf8");
      }
      console.log(`  ✓ map:inject (${mapResult.placement}, ${mapResult.mapSource})`);
    }
  }

  const finalized = await finalizePostBuild(slug);
  row.designQa = finalized.designQa;
  row.siteEval = finalized.siteEval;
  if (finalized.placeholders) {
    row.blockers.push({
      file: `${slug}/index.html`,
      message: "Stitch AI placeholder images still present after images:apply retries",
    });
  }

  const qaArgs = outreach ? [slug, "--outreach"] : [slug];
  const qa = runScript("qa-check.mjs", qaArgs);
  row.qaCheck = qa.ok ? "pass" : "fail";
  if (!qa.ok) {
    for (const line of (qa.stdout + qa.stderr).split("\n")) {
      if (line.includes("✗")) row.blockers.push({ file: `${slug}/qa-check`, message: line.replace(/^\s*✗\s*/, "") });
    }
  }
  console.log(`  ${qa.ok ? "✓" : "✗"} qa:check`);

  if (row.blockers.length === 0) {
    row.blockers = readBlockersFromReport(slug);
  }

  if (row.designQa === "fail" || row.siteEval === "fail" || row.qaCheck === "fail") {
    row.status = "fail";
    if (row.designQa === "fail") console.log("  ○ post-build blocked: design QA did not pass (see design-qa/report.md)");
    if (row.siteEval === "fail") console.log("  ○ post-build blocked: site eval failed");
    if (row.qaCheck === "fail") console.log("  ○ post-build blocked: qa:check failed");
  }

  const shouldDeploy = isGitDeployEnabled() && (row.status === "pass" || forceDeploy);
  if (shouldDeploy) {
    if (forceDeploy && row.status !== "pass") {
      console.log("  ↻ deploy: pushing mockup despite QA warnings (retry/rebuild)");
    }
    try {
      const deploy = await deployPreviewSlug(slug);
      if (deploy.deployed) {
        row.deploy = deploy.live?.ok ? "live" : "pushed";
      } else {
        row.deploy = "skip";
        if (deploy.skipped) console.log(`  ○ deploy: ${deploy.skipped}`);
        if (forceDeploy) {
          row.blockers.push({ file: `${slug}/deploy`, message: deploy.skipped || "deploy skipped" });
          row.status = "fail";
        }
      }
    } catch (err) {
      row.deploy = "fail";
      row.blockers.push({ file: `${slug}/deploy`, message: err.message });
      row.status = "fail";
      console.error(`  ✗ deploy: ${err.message}`);
    }
  }

  writePipelineSummary(slug, {
    stitch: row.stitch,
    designQa: row.designQa,
    siteEval: row.siteEval,
    qaCheck: row.qaCheck,
    deploy: row.deploy,
    outreachDraft: row.outreachDraft,
    blockers: row.blockers,
  });

  return { slug, ok: row.status === "pass", summary: row, blockers: row.blockers };
}

export async function postBuildQueue(slug, opts = {}) {
  let result = await runPostBuildOnce(slug, opts);

  if (result.ok || opts.skipAutoRebuild || !isQaAutoRebuildEnabled()) {
    syncSlugPipelineStatus(slug, { stitch: "done", summary: result.summary });
    return result;
  }

  const max = getMaxQaAutoRebuildAttempts();
  let attempts = readQaRebuildAttempts(slug);

  while (!result.ok && attempts < max) {
    attempts++;
    const reason = result.blockers?.[0]?.message || "QA failed";
    writeQaRebuildAttempts(slug, attempts, { reason });
    console.log(`\n↻ QA auto-rebuild ${attempts}/${max} for ${slug} — ${reason}`);

    try {
      await rebuildSlugFromStitch(slug, { clearOutreach: Boolean(opts.outreach) });
      result = await runPostBuildOnce(slug, { ...opts, forceDeploy: true });
    } catch (err) {
      console.error(`  ✗ QA auto-rebuild stitch failed: ${err.message}`);
      setStatusStage(slug, "stitch", "fail");
      break;
    }
  }

  if (!result.ok && attempts >= max) {
    console.log(`  ○ QA auto-rebuild: max attempts (${max}) reached for ${slug}`);
  }

  syncSlugPipelineStatus(slug, {
    stitch: result.ok ? "done" : undefined,
    summary: result.summary,
  });

  return result;
}
