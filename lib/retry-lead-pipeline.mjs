/**
 * Re-run a failed lead through the full pipeline — clears stale QA/filter results first.
 */
import fs from "node:fs";
import path from "node:path";
import { root, loadEnv } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import { verifyAndScrapeFacebook } from "./facebook-verify.mjs";
import { enrichLead } from "./lead-enrichment.mjs";
import { writeFbStitchPrompt } from "./stitch-prompt-fb.mjs";
import { postBuildQueue } from "./post-build-queue.mjs";
import { rebuildSlugFromStitch, clearQaArtifactsForRebuild } from "./rebuild-from-stitch.mjs";
import { resetQaRebuildAttempts } from "./qa-rebuild-attempts.mjs";
import { resetLeadQueuesForRetry, enqueueReview } from "./outreach-queues.mjs";
import { isSlugSent } from "./outreach-send.mjs";
import { setStatusStage } from "./status-update.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";
import { kickGroqDraftWorker } from "./groq-draft-worker.mjs";

const RESET_STAGES = [
  "stitch",
  "images",
  "copy",
  "design-qa/craft",
  "design-qa/emil",
  "design-qa/taste",
  "design-qa/audit",
  "design-qa/harden",
  "design-qa/polish",
  "site-eval",
  "outreach",
  "outreach-sent",
];

function findBatchForSlug(slug) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return null;

  let latest = null;
  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const slugsPath = path.join(batchesDir, d, "slugs.txt");
    if (fs.existsSync(slugsPath) && fs.readFileSync(slugsPath, "utf8").includes(slug)) {
      latest = batchNum;
      continue;
    }
    const statusPath = path.join(batchesDir, d, "status.json");
    if (fs.existsSync(statusPath)) {
      try {
        const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
        if (
          status.slugs?.[slug] ||
          status.passed?.includes(slug) ||
          status.failed?.includes(slug) ||
          status.skipped?.includes(slug)
        ) {
          latest = batchNum;
        }
      } catch {
        /* ignore */
      }
    }
  }
  return latest;
}

function clearFailureArtifacts(slug) {
  clearQaArtifactsForRebuild(slug, { clearOutreach: true });
}

function resetStatusStages(slug) {
  for (const stage of RESET_STAGES) {
    setStatusStage(slug, stage, "pending");
  }
}

function updateBatchStatus(batchNum, slug, { ok, error, postBuild }) {
  const statusPath = path.join(root, "data", "batches", `batch-${batchNum}`, "status.json");
  if (!fs.existsSync(statusPath)) return;

  try {
    const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
    status.failed = (status.failed || []).filter((s) => s !== slug);
    status.slugs = status.slugs || {};

    const postBuildPass = postBuild === "pass" || postBuild === "pass-with-warnings";
    if (ok && postBuildPass) {
      status.passed = [...(status.passed || []).filter((s) => s !== slug), slug];
      status.failed = (status.failed || []).filter((s) => s !== slug);
      status.slugs[slug] = {
        ...(status.slugs[slug] || {}),
        step: "retry",
        status: "pass",
        stitch: "pass",
        postBuild,
      };
    } else {
      status.failed = [...(status.failed || []).filter((s) => s !== slug), slug];
      status.passed = (status.passed || []).filter((s) => s !== slug);
      status.slugs[slug] = {
        ...(status.slugs[slug] || {}),
        step: "retry",
        status: "fail",
        stitch: ok ? "pass" : "fail",
        postBuild: postBuild || "fail",
        error,
      };
    }

    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2) + "\n", "utf8");
  } catch {
    /* ignore */
  }
}

function canEnqueueForReview(slug, postBuildOk) {
  if (postBuildOk) return true;
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return false;
  const evalPath = slugDir(slug, "design-qa", "site-eval.md");
  if (!fs.existsSync(evalPath)) return false;
  return /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(evalPath, "utf8"));
}

/**
 * @param {string} slug
 * @param {{ batchNum?: string }} [opts]
 */
export async function retryLeadPipeline(slug, { batchNum: providedBatch } = {}) {
  loadEnv();

  if (isSlugSent(slug)) throw new Error("Lead already sent — cannot retry");

  const batchNum = providedBatch || findBatchForSlug(slug);
  if (!batchNum) throw new Error("No batch found for this lead");

  const leadPath = slugDir(slug, "lead.json");
  if (!fs.existsSync(leadPath)) throw new Error("Missing lead.json");

  console.log(`[retry] ↻ ${slug} (batch ${batchNum})`);

  resetQaRebuildAttempts(slug);
  clearFailureArtifacts(slug);
  resetStatusStages(slug);
  resetLeadQueuesForRetry(batchNum, slug);

  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const fbUrl = lead.facebook || lead.url;
  const assetsDir = slugDir(slug, "assets");

  console.log(`[retry]   re-verifying Facebook…`);
  const verify = await verifyAndScrapeFacebook(fbUrl, lead, slug, assetsDir);
  fs.writeFileSync(slugDir(slug, "verification.json"), JSON.stringify(verify, null, 2) + "\n", "utf8");

  if (verify.status === "skip") throw new Error(`Filtered out: ${verify.reason}`);
  if (verify.status === "error") throw new Error(verify.error || "Facebook verification failed");

  await enrichLead(slug, lead, verify);
  writeFbStitchPrompt(slug);

  await rebuildSlugFromStitch(slug, { clearOutreach: true });
  const result = await postBuildQueue(slug, {
    outreach: false,
    forceDeploy: true,
    batchNum,
  });
  const deployed = result.summary?.deploy === "live" || result.summary?.deploy === "pushed";

  const postBuildLabel = result.ok ? "pass" : deployed ? "pass-with-warnings" : "fail";
  updateBatchStatus(batchNum, slug, {
    ok: result.ok || deployed,
    postBuild: postBuildLabel,
    error: result.ok ? undefined : result.blockers?.[0]?.message,
  });

  syncSlugPipelineStatus(slug, {
    stitch: result.ok || deployed ? "done" : "fail",
    summary: result.summary,
  });

  if (canEnqueueForReview(slug, result.ok)) {
    enqueueReview(batchNum, slug);
    kickGroqDraftWorker();
    console.log(`[retry]   ✓ enqueued for review (draft worker started)`);
  } else {
    console.log(`[retry]   ○ not enqueued for review (post-build did not pass)`);
  }

  if (!result.ok && !deployed) {
    throw new Error(result.blockers?.[0]?.message || "Post-build failed");
  }

  if (!result.ok && deployed) {
    console.log(`[retry]   ○ QA warnings remain — mockup deployed to GitHub`);
  }

  return { ok: true, slug, batchNum, postBuild: result, deployed };
}

export { findBatchForSlug };
