/**
 * Bounded Stitch worker pool — one API key per concurrent worker.
 * On credit/quota errors, marks the key exhausted and retries the slug on the next key.
 */
import { Stitch, StitchToolClient } from "@google/stitch-sdk";
import { getStitchApiKeys, getStitchPoolConcurrency } from "./load-env.mjs";
import { isStitchCreditError, findNextKeyIndex, logCreditFailover } from "./stitch-credit-error.mjs";

export function createStitchWorker(apiKey) {
  const client = new StitchToolClient({ apiKey });
  const stitch = new Stitch(client);
  return {
    stitch,
    callTool: (name, args) => client.callTool(name, args),
    close: () => client.close().catch(() => {}),
  };
}

/**
 * Run one slug; on credit error, rotate worker to next non-exhausted key and retry.
 * @returns {Promise<{ bundle, keyIndex }>}
 */
async function runSlugWithCreditFailover(slug, fn, keys, exhausted, initialKeyIndex, initialBundle) {
  let keyIndex = initialKeyIndex;
  let bundle = initialBundle;
  let lastError;

  while (keyIndex !== null) {
    try {
      const value = await fn(slug, bundle);
      return { ok: true, value, bundle, keyIndex };
    } catch (error) {
      lastError = error;
      if (!isStitchCreditError(error)) {
        return { ok: false, error, bundle, keyIndex };
      }

      exhausted.add(keyIndex);
      const nextIndex = findNextKeyIndex(exhausted, keys.length, keyIndex + 1);
      if (nextIndex === null) {
        return {
          ok: false,
          error: lastError || new Error("All Stitch API keys are out of credits"),
          bundle,
          keyIndex,
        };
      }

      logCreditFailover(keyIndex, keys.length, slug);
      if (bundle?.close) await bundle.close();
      keyIndex = nextIndex;
      bundle = createStitchWorker(keys[keyIndex]);
    }
  }

  return {
    ok: false,
    error: lastError || new Error("All Stitch API keys are out of credits"),
    bundle,
    keyIndex: null,
  };
}

/**
 * Run fn(slug, worker) for each slug with at most `concurrency` parallel workers.
 * @returns {Promise<Array<{ slug, ok: boolean, value?, error? }>>}
 */
export async function runPool(slugs, fn, { concurrency } = {}) {
  const keys = getStitchApiKeys();
  if (!keys.length) throw new Error("No Stitch API keys configured");

  const limit = concurrency ?? getStitchPoolConcurrency(slugs.length);
  if (limit < 1) throw new Error("Pool concurrency must be >= 1");

  const exhausted = new Set();
  const results = new Array(slugs.length);
  let nextIndex = 0;

  async function worker(workerSlot) {
    let keyIndex = findNextKeyIndex(exhausted, keys.length, workerSlot % keys.length);
    if (keyIndex === null) return;

    let bundle = createStitchWorker(keys[keyIndex]);

    try {
      while (true) {
        const i = nextIndex++;
        if (i >= slugs.length) break;
        const slug = slugs[i];

        const outcome = await runSlugWithCreditFailover(slug, fn, keys, exhausted, keyIndex, bundle);
        bundle = outcome.bundle;
        keyIndex = outcome.keyIndex;

        if (outcome.ok) {
          results[i] = { slug, ok: true, value: outcome.value };
        } else {
          results[i] = { slug, ok: false, error: outcome.error };
        }

        if (keyIndex === null) {
          console.error(`\n✗ All Stitch API keys exhausted — remaining slugs will fail.`);
          break;
        }
      }
    } finally {
      if (bundle?.close) await bundle.close();
    }
  }

  await Promise.all(Array.from({ length: limit }, (_, i) => worker(i)));

  // Fail any slugs never started because all keys were exhausted early
  for (let i = 0; i < slugs.length; i++) {
    if (!results[i]) {
      results[i] = {
        slug: slugs[i],
        ok: false,
        error: new Error("Stitch build not started — all API keys out of credits"),
      };
    }
  }

  return results;
}

export function logPoolStart(slugs) {
  const keys = getStitchApiKeys();
  const concurrency = getStitchPoolConcurrency(slugs.length);
  if (keys.length > 1) {
    console.log(
      `\nStitch pool: ${concurrency} concurrent worker(s), ${keys.length} API key(s), ${slugs.length} slug(s).` +
        ` Credit failover enabled.`
    );
  } else {
    const delayMs = Number(process.env.STITCH_BUILD_DELAY_MS || 3000);
    console.log(
      `\nStitch sequential: 1 API key, ${slugs.length} slug(s)${delayMs > 0 ? `, ${delayMs}ms delay between builds` : ""}.`
    );
  }
}
