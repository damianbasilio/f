/**
 * Per-slug pipeline: verify → enrich → stitch → post-build → review queue.
 * Each slug advances through stages independently (no batch barrier between steps).
 */
import fs from "node:fs";
import path from "node:path";
import { getStitchApiKeys } from "./load-env.mjs";
import { verifyAndScrapeFacebook } from "./facebook-verify.mjs";
import { enrichLead } from "./lead-enrichment.mjs";
import { writeFbStitchPrompt } from "./stitch-prompt-fb.mjs";
import { buildSlug } from "./stitch-build-one.mjs";
import { postBuildQueue } from "./post-build-queue.mjs";
import { enqueueReview } from "./outreach-queues.mjs";
import { kickGroqDraftWorker } from "./groq-draft-worker.mjs";
import { slugDir } from "./paths.mjs";
import { isDuplicateFbLead, lookupFbLead, registerFbLead } from "./fb-lead-registry.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";

export function canEnqueueForReview(slug, slugStatus) {
  if (slugStatus?.postBuild === "pass" || slugStatus?.postBuild === "pass-with-warnings") return true;
  if (slugStatus?.stitch !== "pass") return false;
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return false;
  const evalPath = slugDir(slug, "design-qa", "site-eval.md");
  if (!fs.existsSync(evalPath)) return false;
  return /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(evalPath, "utf8"));
}

/**
 * Facebook verify + brief enrich + stitch prompt.
 * @returns {{ outcome: "passed"|"skipped"|"failed", slugStatus: object }}
 */
export async function runSlugPreflight(slug, batchNum) {
  console.log(`\n══ ${slug} ══`);
  const dir = slugDir(slug);
  const leadPath = path.join(dir, "lead.json");

  if (!fs.existsSync(leadPath)) {
    console.error(`  ✗ missing lead.json — run import-leads first`);
    return {
      outcome: "failed",
      slugStatus: { step: "import", status: "fail", reason: "missing lead.json" },
    };
  }

  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const fbUrl = lead.facebook || lead.url;
  const assetsDir = path.join(dir, "assets");

  if (isDuplicateFbLead(fbUrl, slug)) {
    const existing = lookupFbLead(fbUrl);
    console.log(`  ○ SKIP — duplicate Facebook page (registered as ${existing?.slug})`);
    return {
      outcome: "skipped",
      slugStatus: {
        step: "registry",
        status: "skip",
        reason: "duplicate_facebook_page",
        existingSlug: existing?.slug,
      },
    };
  }

  if (!lookupFbLead(fbUrl)) {
    registerFbLead(fbUrl, { slug, batchId: batchNum });
  }

  console.log(`  verifying Facebook profile…`);
  const verify = await verifyAndScrapeFacebook(fbUrl, lead, slug, assetsDir);
  fs.writeFileSync(path.join(dir, "verification.json"), JSON.stringify(verify, null, 2) + "\n", "utf8");

  if (verify.status === "skip") {
    console.log(`  ○ SKIP — ${verify.reason} (${verify.fbWebsiteUrl || "no url"})`);
    return {
      outcome: "skipped",
      slugStatus: { step: "verify", status: "skip", reason: verify.reason },
    };
  }

  if (verify.status === "error") {
    console.error(`  ✗ verify error: ${verify.error}`);
    return {
      outcome: "failed",
      slugStatus: { step: "verify", status: "fail", reason: verify.error },
    };
  }

  console.log(`  ✓ PASS — ${verify.reason}`);

  try {
    console.log(`  enriching brief…`);
    await enrichLead(slug, lead, verify);
    console.log(`  ✓ brief.md + prompt-input.json`);

    writeFbStitchPrompt(slug);
    console.log(`  ✓ stitch prompt`);
  } catch (err) {
    console.error(`  ✗ enrich/prompt: ${err.message}`);
    return {
      outcome: "failed",
      slugStatus: { step: "enrich", status: "fail", reason: err.message },
    };
  }

  return {
    outcome: "passed",
    slugStatus: { step: "enrich", status: "pass" },
  };
}

/**
 * Full per-slug flow. Worker is a Stitch pool bundle when stitch is enabled.
 * @param {string} slug
 * @param {{ stitch?, callTool?, close? } | null} worker
 * @param {{ batchNum: string|number, skipStitch?: boolean }} ctx
 */
export async function runSlugPipeline(slug, worker, { batchNum, skipStitch = false }) {
  const pre = await runSlugPreflight(slug, batchNum);

  if (pre.outcome !== "passed") {
    return { preflight: pre, stitch: "skip" };
  }

  const stitchEnabled = !skipStitch && getStitchApiKeys().length > 0;
  if (!stitchEnabled) {
    return { preflight: pre, stitch: "skip" };
  }

  await buildSlug(slug, worker);
  const postBuild = await postBuildQueue(slug, { outreach: false, batchNum: String(batchNum) });

  const slugStatus = {
    ...pre.slugStatus,
    stitch: "pass",
    postBuild: postBuild.ok ? "pass" : "fail",
    deploy: postBuild.summary?.deploy || "—",
  };

  if (canEnqueueForReview(slug, slugStatus)) {
    if (slugStatus.postBuild !== "pass") {
      console.log(`  ○ review enqueue (site built; post-build had non-blocking QA issues)`);
    }
    enqueueReview(batchNum, slug);
    kickGroqDraftWorker();
    console.log(`  ✓ enqueued for review ${slug}`);
    slugStatus.outreach = "queued";
  }

  syncSlugPipelineStatus(slug, {
    stitch: "done",
    summary: postBuild.summary,
  });

  return { preflight: pre, stitch: "pass", postBuild, slugStatus };
}
