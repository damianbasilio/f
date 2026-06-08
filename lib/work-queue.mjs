/**
 * Bounded async work queue — workers pull jobs as they free up.
 */

/**
 * @template T
 * @param {{ concurrency: number, worker: (item: T) => Promise<void> }} opts
 */
export function createWorkQueue({ concurrency, worker }) {
  /** @type {T[]} */
  const queue = [];
  let active = 0;
  let closed = false;
  /** @type {(() => void)[]} */
  const doneWaiters = [];

  function maybeResolve() {
    if (closed && active === 0 && queue.length === 0) {
      for (const resolve of doneWaiters.splice(0)) resolve();
    }
  }

  async function pump() {
    while (active < concurrency && queue.length > 0) {
      const item = queue.shift();
      active++;
      worker(item)
        .catch((err) => {
          console.error(`[work-queue] job error: ${err.message}`);
        })
        .finally(() => {
          active--;
          pump();
          maybeResolve();
        });
    }
  }

  return {
    /** @param {T} item */
    push(item) {
      queue.push(item);
      pump();
    },
    close() {
      closed = true;
      maybeResolve();
    },
    /** @returns {Promise<void>} */
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
