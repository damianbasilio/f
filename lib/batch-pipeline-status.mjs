/**
 * Shared batch status tracking for pipeline runs.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { isStitchCreditError } from "./stitch-credit-error.mjs";

/**
 * @param {string|number} batchNum
 */
export function createBatchPipelineStatus(batchNum) {
  const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
  fs.mkdirSync(batchDir, { recursive: true });

  const status = {
    batchId: batchNum,
    startedAt: new Date().toISOString(),
    slugs: {},
    passed: [],
    skipped: [],
    failed: [],
    retry: [],
  };

  function save() {
    status.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(batchDir, "status.json"), JSON.stringify(status, null, 2) + "\n", "utf8");
  }

  function recordSlugResult(slug, result) {
    const pre = result?.preflight;
    if (pre?.outcome === "skipped") {
      status.skipped.push(slug);
      status.slugs[slug] = pre.slugStatus;
      save();
      return;
    }
    if (pre?.outcome === "failed") {
      status.failed.push(slug);
      status.slugs[slug] = pre.slugStatus;
      save();
      return;
    }
    if (result.stitch === "skip") {
      status.passed.push(slug);
      status.slugs[slug] = pre.slugStatus;
      save();
      return;
    }
    if (result.stitch === "pass" && result.slugStatus) {
      status.slugs[slug] = result.slugStatus;
      const postBuildOk = result.slugStatus.postBuild === "pass";
      status.passed = status.passed.filter((s) => s !== slug);
      status.failed = status.failed.filter((s) => s !== slug);
      status.retry = (status.retry || []).filter((s) => s !== slug);
      if (postBuildOk) {
        status.passed.push(slug);
      } else {
        status.failed.push(slug);
      }
      save();
      return;
    }
    if (result.stitch === "fail") {
      status.passed = status.passed.filter((s) => s !== slug);
      status.failed.push(slug);
      status.slugs[slug] = {
        ...(pre?.slugStatus || status.slugs[slug] || {}),
        stitch: "fail",
        error: result?.error?.message || "Stitch/post-build failed",
      };
      save();
    }
  }

  function recordStitchRetry(slug, message) {
    if (status.skipped.includes(slug)) return;
    status.passed = status.passed.filter((s) => s !== slug);
    status.failed = status.failed.filter((s) => s !== slug);
    if (!status.retry.includes(slug)) status.retry.push(slug);
    status.slugs[slug] = {
      ...(status.slugs[slug] || { step: "enrich", status: "pass" }),
      stitch: "retry",
      error: message,
    };
    save();
  }

  function recordPoolFailure(slug, message) {
    if (status.failed.includes(slug) || status.skipped.includes(slug) || status.retry.includes(slug)) {
      return;
    }
    if (isStitchCreditError(new Error(message))) {
      recordStitchRetry(slug, message);
      return;
    }
    status.passed = status.passed.filter((s) => s !== slug);
    status.failed.push(slug);
    status.slugs[slug] = {
      ...(status.slugs[slug] || { step: "enrich", status: "pass" }),
      stitch: "fail",
      error: message,
    };
    save();
  }

  return { status, batchDir, save, recordSlugResult, recordPoolFailure, recordStitchRetry };
}
