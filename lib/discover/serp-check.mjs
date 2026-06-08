/**
 * DataForSEO Google Organic SERP — Standard method (batch task_post → tasks_ready → task_get).
 */
import { resolveSerpBatchDeadlineMs, formatLocalTime } from "../schedule-time.mjs";

const TASK_POST = "https://api.dataforseo.com/v3/serp/google/organic/task_post";
const TASK_GET_REGULAR = "https://api.dataforseo.com/v3/serp/google/organic/task_get/regular";
const TASKS_READY = "https://api.dataforseo.com/v3/serp/google/organic/tasks_ready";

/** Wait before first tasks_ready poll (normal priority ~5–10 min turnaround). */
export const DEFAULT_SERP_INITIAL_WAIT_MS = Number(process.env.DISCOVER_SERP_INITIAL_WAIT_MS) || 600_000;
/** Poll tasks_ready interval between checks. */
export const DEFAULT_SERP_READY_POLL_MS = Number(process.env.DISCOVER_SERP_READY_POLL_MS) || 300_000;
/** Fallback max poll window when not in the 6–8 AM morning pipeline (default 2 hours). */
export const DEFAULT_SERP_BATCH_TIMEOUT_MS = Number(process.env.DISCOVER_SERP_BATCH_TIMEOUT_MS) || 7_200_000;
export const DEFAULT_SERP_BATCH_SIZE = Math.min(
  Number(process.env.DISCOVER_SERP_BATCH_SIZE) || 100,
  100
);

const FETCH_TIMEOUT_MS = 20_000;

/**
 * @param {string} login
 * @param {string} password
 */
function authHeader(login, password) {
  const token = Buffer.from(`${login}:${password}`).toString("base64");
  return `Basic ${token}`;
}

/**
 * Branded Google query — keep it simple (matches manual searches better than quoted name+city+state).
 * @param {string} name
 * @param {string} city
 * @param {string} [_state] ignored; kept for call-site compatibility
 */
export function buildSerpQuery(name, city, _state) {
  return [name, city].filter(Boolean).join(" ").trim();
}

/**
 * @param {object} task
 * @returns {{ rank: number, url: string, title: string }[]}
 */
export function parseOrganicResults(task) {
  const items = task?.result?.[0]?.items || [];
  /** @type {{ rank: number, url: string, title: string }[]} */
  const out = [];
  let rank = 0;

  for (const row of items) {
    if (row.type && row.type !== "organic") continue;
    if (!row.url) continue;
    rank += 1;
    out.push({
      rank,
      url: row.url,
      title: row.title || row.description || "",
    });
  }

  if (out.length) return out;

  for (const row of items) {
    if (!row.url || row.type === "paid") continue;
    rank += 1;
    out.push({
      rank,
      url: row.url,
      title: row.title || row.description || "",
    });
  }

  return out;
}

/**
 * @param {string} url
 * @param {RequestInit} init
 * @param {number} timeoutMs
 */
async function fetchWithTimeout(url, init = {}, timeoutMs = FETCH_TIMEOUT_MS) {
  const res = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(timeoutMs),
  });
  return res;
}

/**
 * @param {Response} res
 * @param {number} timeoutMs
 */
async function readJson(res, timeoutMs = FETCH_TIMEOUT_MS) {
  let timer;
  const body = Promise.race([
    res.json(),
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error("SERP response read timeout")), timeoutMs);
    }),
  ]);
  try {
    return await body;
  } finally {
    clearTimeout(timer);
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * @param {string} login
 * @param {string} password
 * @param {string} url
 * @param {RequestInit} init
 */
async function apiJson(login, password, url, init = {}) {
  const res = await fetchWithTimeout(url, {
    ...init,
    headers: {
      Authorization: authHeader(login, password),
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const body = await readJson(res).catch(() => ({}));
  if (!res.ok) {
    throw new Error(`DataForSEO ${url} ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  }
  return body;
}

/**
 * @typedef {{ tag: string, keyword: string }} SerpJob
 * @typedef {{ ok: true, organicResults: { rank: number, url: string, title: string }[] } | { ok: false, error: string }} SerpJobResult
 */

/**
 * POST up to 100 SERP tasks in one request.
 * @param {SerpJob[]} jobs
 * @returns {Promise<Map<string, { taskId: string, keyword: string } | { error: string }>>}
 */
export async function submitSerpBatch(jobs, login, password, opts = {}) {
  const batchSize = opts.batchSize ?? DEFAULT_SERP_BATCH_SIZE;
  const priority = opts.priority ?? 1;
  /** @type {Map<string, { taskId: string, keyword: string } | { error: string }>} */
  const out = new Map();

  for (let i = 0; i < jobs.length; i += batchSize) {
    const chunk = jobs.slice(i, i + batchSize);
    const payload = chunk.map(({ keyword, tag }) => ({
      keyword,
      tag,
      location_code: 2840,
      language_code: "en",
      depth: 10,
      priority,
    }));

    const body = await apiJson(login, password, TASK_POST, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    for (const { task, job } of parseTaskPostRows(body, chunk)) {
      const { tag, keyword } = job;
      const taskId = task?.id;
      const code = task?.status_code;
      if (taskId && (code === 20100 || code === 20000)) {
        out.set(tag, { taskId, keyword });
      } else {
        out.set(tag, {
          error: task?.status_message || `task_post failed (${code ?? "unknown"})`,
        });
      }
    }
  }

  return out;
}

/**
 * @param {object} body
 * @param {SerpJob[]} chunk
 */
function parseTaskPostRows(body, chunk) {
  const tasks = body.tasks || [];
  if (tasks.length === chunk.length && tasks.every((t) => t?.id)) {
    return tasks.map((task, i) => ({ task, job: chunk[i] }));
  }
  const nested = tasks[0]?.result;
  if (Array.isArray(nested) && nested.length === chunk.length) {
    return nested.map((task, i) => ({ task, job: chunk[i] }));
  }
  throw new Error(
    `DataForSEO task_post returned ${tasks.length} tasks for ${chunk.length} inputs`
  );
}

/**
 * @returns {Promise<{ id: string, tag?: string }[]>}
 */
export async function fetchTasksReady(login, password) {
  const body = await apiJson(login, password, TASKS_READY, { method: "GET" });
  /** @type {{ id: string, tag?: string }[]} */
  const ready = [];

  for (const wrapper of body.tasks || []) {
    if (wrapper.status_code >= 40000) continue;
    for (const row of wrapper.result || []) {
      if (row?.id) ready.push({ id: row.id, tag: row.tag });
    }
  }

  return ready;
}

/**
 * @param {string} taskId
 */
export async function fetchSerpTaskResults(taskId, login, password) {
  const body = await apiJson(login, password, `${TASK_GET_REGULAR}/${taskId}`, { method: "GET" });
  const task = body.tasks?.[0];
  if (!task) throw new Error("task_get returned no task");
  if (task.status_code === 20000) return parseOrganicResults(task);
  if (task.status_code >= 40000) {
    throw new Error(`task_get failed: ${task.status_message || task.status_code}`);
  }
  throw new Error(`task_get unexpected status: ${task.status_message || task.status_code}`);
}

/**
 * Batch Standard SERP: task_post → wait → tasks_ready → task_get per ready id.
 * @param {SerpJob[]} jobs
 * @param {object} [opts]
 * @param {(msg: string) => void} [opts.log]
 * @returns {Promise<{ results: Map<string, SerpJobResult>, submitted: number, postErrors: number }>}
 */
export async function runSerpBatch(jobs, login, password, opts = {}) {
  const log = opts.log || (() => {});
  /** @type {Map<string, SerpJobResult>} */
  const results = new Map();

  if (!jobs.length) return { results, submitted: 0, postErrors: 0 };

  const submitted = await submitSerpBatch(jobs, login, password, opts);
  /** @type {Map<string, string>} taskId → tag */
  const pending = new Map();

  for (const [tag, entry] of submitted) {
    if ("error" in entry) {
      results.set(tag, { ok: false, error: entry.error });
      continue;
    }
    pending.set(entry.taskId, tag);
  }

  const posted = pending.size;
  const failedPost = results.size;
  log(`  Submitted ${posted} SERP task(s) in batch${failedPost ? ` (${failedPost} post errors)` : ""}`);

  if (!posted) return { results, submitted: 0, postErrors: failedPost };

  const initialWaitMs = opts.initialWaitMs ?? DEFAULT_SERP_INITIAL_WAIT_MS;
  const readyPollMs = opts.readyPollMs ?? DEFAULT_SERP_READY_POLL_MS;
  const submittedAt = Date.now();
  const deadline =
    opts.batchDeadlineMs ??
    (opts.alignWithMorningSend !== false
      ? resolveSerpBatchDeadlineMs(submittedAt)
      : submittedAt + (opts.batchTimeoutMs ?? DEFAULT_SERP_BATCH_TIMEOUT_MS));
  const totalWindowMin = Math.round((deadline - submittedAt) / 60_000);

  log(
    `  Waiting ${Math.round(initialWaitMs / 60_000)} min before first check, then every ${Math.round(readyPollMs / 60_000)} min (deadline ${formatLocalTime(new Date(deadline))}, ~${totalWindowMin} min window)…`
  );
  await sleep(initialWaitMs);

  let checkNum = 0;

  while (pending.size > 0 && Date.now() < deadline) {
    checkNum += 1;
    const elapsedMin = Math.round((Date.now() - submittedAt) / 60_000);
    const pendingBefore = pending.size;

    const ready = await fetchTasksReady(login, password);
    let matchedReady = 0;
    let processed = 0;

    for (const row of ready) {
      const tag = pending.get(row.id);
      if (!tag) continue;
      matchedReady += 1;

      try {
        const organicResults = await fetchSerpTaskResults(row.id, login, password);
        const entry = { ok: true, organicResults };
        results.set(tag, entry);
        if (opts.onTaskResult) {
          await opts.onTaskResult(tag, entry);
        }
      } catch (err) {
        const entry = { ok: false, error: err.message };
        results.set(tag, entry);
        if (opts.onTaskResult) {
          await opts.onTaskResult(tag, entry);
        }
      }
      pending.delete(row.id);
      processed += 1;
    }

    const stillPending = pending.size;
    log(
      `  SERP check #${checkNum} (${elapsedMin} min): ${matchedReady} ready, ${processed} processed, ${stillPending} still pending (of ${pendingBefore} before check)`
    );

    if (stillPending === 0) break;

    const remainingMs = deadline - Date.now();
    if (remainingMs <= 0) break;

    const waitMs = Math.min(readyPollMs, remainingMs);
    log(`  … next check in ${Math.round(waitMs / 60_000)} min`);
    await sleep(waitMs);
  }

  if (pending.size > 0) {
    const timedOut = pending.size;
    log(
      `  SERP batch window ended (${totalWindowMin} min, deadline ${formatLocalTime(new Date(deadline))}) — ${timedOut} task(s) still not ready, marking timed out`
    );
    for (const [, tag] of pending) {
      const entry = { ok: false, error: "SERP batch timeout — task not ready" };
      results.set(tag, entry);
      if (opts.onTaskResult) {
        await opts.onTaskResult(tag, entry);
      }
    }
    pending.clear();
  }

  return { results, submitted: posted, postErrors: failedPost };
}

/** @deprecated Use runSerpBatch — kept for single-query callers. */
export async function fetchSerpOrganicResults(query, login, password, opts = {}) {
  const tag = opts.tag || "single";
  const { results: batch } = await runSerpBatch([{ tag, keyword: query }], login, password, {
    ...opts,
    initialWaitMs: opts.initialWaitMs ?? 120_000,
    batchTimeoutMs: opts.batchTimeoutMs ?? DEFAULT_SERP_BATCH_TIMEOUT_MS,
  });
  const result = batch.get(tag);
  if (!result) throw new Error("SERP batch returned no result");
  if (!result.ok) throw new Error(result.error);
  return result.organicResults;
}

/**
 * @param {string} query
 * @param {string} login
 * @param {string} password
 * @param {object} [opts]
 * @returns {Promise<string|null>}
 */
export async function fetchFirstOrganicUrl(query, login, password, opts = {}) {
  const results = await fetchSerpOrganicResults(query, login, password, opts);
  return results[0]?.url || null;
}
