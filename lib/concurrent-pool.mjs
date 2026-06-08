/**
 * Generic bounded worker pool — each slug processed independently as workers free up.
 */

/**
 * @template T
 * @param {string[]} slugs
 * @param {(slug: string) => Promise<T>} fn
 * @param {{ concurrency?: number }} [opts]
 * @returns {Promise<Array<{ slug: string, ok: boolean, value?: T, error?: Error }>>}
 */
export async function runConcurrentPool(slugs, fn, { concurrency } = {}) {
  const limit = Math.max(1, Math.min(concurrency ?? 3, slugs.length || 1));
  const results = new Array(slugs.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const i = nextIndex++;
      if (i >= slugs.length) break;
      const slug = slugs[i];
      try {
        const value = await fn(slug);
        results[i] = { slug, ok: true, value };
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        results[i] = { slug, ok: false, error: err };
      }
    }
  }

  await Promise.all(Array.from({ length: limit }, () => worker()));
  return results;
}
