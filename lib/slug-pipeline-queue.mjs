/**
 * Dynamic slug pipeline — workers pull slugs as they arrive (no batch barrier).
 */
import { getStitchApiKeys, getStitchPoolConcurrency, getPipelineConcurrency } from "./load-env.mjs";
import { createStitchWorker } from "./stitch-pool.mjs";
import { isStitchCreditError, findNextKeyIndex, logCreditFailover } from "./stitch-credit-error.mjs";
import { allocateStitchKeyIndex } from "./stitch-key-rotation.mjs";
import { runSlugPipeline } from "./pipeline-slug.mjs";

/**
 * @param {{ batchNum: string|number, skipStitch?: boolean, recordSlugResult: Function, recordPoolFailure: Function, recordStitchRetry: Function }} ctx
 */
export function createSlugPipelineQueue(ctx) {
  const { batchNum, skipStitch = false, recordSlugResult, recordPoolFailure, recordStitchRetry } =
    ctx;
  const keys = getStitchApiKeys();
  const stitchEnabled = !skipStitch && keys.length > 0;
  const concurrency = stitchEnabled
    ? getStitchPoolConcurrency(999)
    : getPipelineConcurrency(999);

  const queue = [];
  let closed = false;
  let active = 0;
  /** @type {(() => void)[]} */
  const doneWaiters = [];
  const exhausted = new Set();

  function maybeResolve() {
    if (closed && active === 0 && queue.length === 0) {
      for (const resolve of doneWaiters.splice(0)) resolve();
    }
  }

  async function runSlugWithWorker(slug, bundle, keyIndex) {
    try {
      const result = await runSlugPipeline(slug, bundle, { batchNum, skipStitch });
      recordSlugResult(slug, result);
      return { ok: true };
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      if (stitchEnabled && isStitchCreditError(err)) {
        exhausted.add(keyIndex);
        const nextIndex = findNextKeyIndex(exhausted, keys.length, keyIndex + 1);
        if (nextIndex === null) {
          recordStitchRetry(slug, err.message);
          console.warn(`  ○ ${slug} — all Stitch keys exhausted; marked for retry (lead kept)`);
          return { ok: false, fatal: true };
        }
        logCreditFailover(keyIndex, keys.length, slug);
        if (bundle?.close) await bundle.close();
        const nextBundle = createStitchWorker(keys[nextIndex]);
        return runSlugWithWorker(slug, nextBundle, nextIndex);
      }
      recordPoolFailure(slug, err.message);
      return { ok: false };
    }
  }

  async function stitchWorker(workerSlot) {
    let keyIndex = stitchEnabled ? allocateStitchKeyIndex(keys.length, exhausted) : null;
    if (stitchEnabled && keyIndex === null) return;

    let bundle = stitchEnabled ? createStitchWorker(keys[keyIndex]) : null;

    try {
      while (true) {
        const slug = queue.shift();
        if (!slug) {
          if (closed) break;
          await new Promise((r) => setTimeout(r, 200));
          continue;
        }

        if (stitchEnabled) {
          const outcome = await runSlugWithWorker(slug, bundle, keyIndex);
          if (outcome.fatal) break;
          keyIndex = findNextKeyIndex(exhausted, keys.length, keyIndex);
          if (keyIndex === null) {
            console.error(`\n✗ All Stitch API keys exhausted — remaining slugs queued will stall.`);
            queue.unshift(slug);
            break;
          }
        } else {
          try {
            const result = await runSlugPipeline(slug, null, { batchNum, skipStitch: true });
            recordSlugResult(slug, result);
          } catch (err) {
            recordPoolFailure(slug, err instanceof Error ? err.message : String(err));
          }
        }
      }
    } finally {
      if (bundle?.close) await bundle.close();
      active--;
      maybeResolve();
      if (!closed || queue.length > 0) pump();
    }
  }

  function pump() {
    while (active < concurrency && (queue.length > 0 || !closed)) {
      if (active >= concurrency) break;
      active++;
      stitchWorker(active - 1);
    }
  }

  return {
    concurrency,
    stitchEnabled,
    /** @param {string} slug */
    enqueue(slug) {
      queue.push(slug);
      pump();
    },
    close() {
      closed = true;
      pump();
      maybeResolve();
    },
    drain() {
      if (closed && active === 0 && queue.length === 0) return Promise.resolve();
      return new Promise((resolve) => {
        doneWaiters.push(resolve);
        maybeResolve();
      });
    },
    get pending() {
      return queue.length + active;
    },
  };
}

export function logPipelineQueueStart(queue) {
  if (queue.stitchEnabled) {
    console.log(
      `Pipeline queue: ${queue.concurrency} worker(s) — slugs enter verify→stitch→post-build as soon as imported.\n`
    );
  } else {
    console.log(`Pipeline queue: ${queue.concurrency} preflight worker(s).\n`);
  }
}
