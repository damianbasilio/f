/**
 * Groq chat completions with free-tier rate-limit safety.
 * @see https://console.groq.com/docs/rate-limits
 *
 * Outreach drafts measure ~1,800-2,000 tokens/request (prompt + completion).
 * At 6K TPM that allows ~2.4 requests/minute (~25s spacing).
 */
import { loadEnv } from "./load-env.mjs";

/** Default model — override with GROQ_MODEL in .env */
export const DEFAULT_GROQ_MODEL = "llama-3.1-8b-instant";

/** Measured tokens per outreach draft (used for TPM spacing and pre-flight checks). */
export const OUTREACH_EST_TOKENS = 1900;

/** Per-model free-tier limits (Developer plan base). */
export const GROQ_MODEL_LIMITS = {
  "qwen/qwen3-32b": { rpm: 60, tpm: 6000, rpd: 1000, tpd: 500000, estTokens: OUTREACH_EST_TOKENS },
  "llama-3.3-70b-versatile": { rpm: 30, tpm: 12000, rpd: 1000, tpd: 100000, estTokens: OUTREACH_EST_TOKENS },
  "llama-3.1-8b-instant": { rpm: 30, tpm: 6000, rpd: 14400, tpd: 500000, estTokens: OUTREACH_EST_TOKENS },
  "meta-llama/llama-4-scout-17b-16e-instruct": { rpm: 30, tpm: 30000, rpd: 1000, tpd: 500000, estTokens: OUTREACH_EST_TOKENS },
};

/** Use 95% of TPM/RPM — outreach runs are steady, not bursty. */
const RATE_SAFETY = 0.95;

/**
 * Default spacing for 6K TPM models at ~1.9K tokens/request.
 */
export const DEFAULT_GROQ_COOLDOWN_MS = 25000;

let lastRequestAt = 0;
/** Rolling 60s token window for TPM tracking. */
let tokenWindowStart = 0;
let tokensUsedInWindow = 0;

export function getModelLimits(model) {
  return GROQ_MODEL_LIMITS[model] || { rpm: 30, tpm: 6000, rpd: 1000, tpd: 100000, estTokens: OUTREACH_EST_TOKENS };
}

/** Minimum ms between requests from RPM and TPM (whichever is stricter). */
export function computeMinCooldownMs(model, estTokens = OUTREACH_EST_TOKENS) {
  const limits = getModelLimits(model);
  const tokens = estTokens || limits.estTokens || OUTREACH_EST_TOKENS;
  const rpmGap = Math.ceil(60000 / (limits.rpm * RATE_SAFETY));
  const tpmBudget = limits.tpm * RATE_SAFETY;
  const tpmReqPerMin = tpmBudget / tokens;
  const tpmGap = Math.ceil(60000 / tpmReqPerMin);
  return Math.max(rpmGap, tpmGap);
}

function resolveLimits(model) {
  const base = getModelLimits(model);
  const envTpm = Number(process.env.GROQ_TPM);
  const envEst = Number(process.env.GROQ_EST_TOKENS);
  return {
    ...base,
    tpm: Number.isFinite(envTpm) && envTpm > 0 ? envTpm : base.tpm,
    estTokens: Number.isFinite(envEst) && envEst > 0 ? envEst : base.estTokens,
  };
}

export function getGroqConfig() {
  loadEnv();
  const apiKey = process.env.GROQ_API_KEY?.trim() || "";
  const model = process.env.GROQ_MODEL?.trim() || DEFAULT_GROQ_MODEL;
  const limits = resolveLimits(model);
  const computedCooldown = computeMinCooldownMs(model, limits.estTokens);
  const recommendedCooldown = Math.max(computedCooldown, DEFAULT_GROQ_COOLDOWN_MS);
  const envCooldown = Number(process.env.GROQ_COOLDOWN_MS);
  const cooldownMs =
    Number.isFinite(envCooldown) && envCooldown > 0 ? envCooldown : recommendedCooldown;
  const maxRetries = Number(process.env.GROQ_MAX_RETRIES || 3);
  return {
    apiKey,
    model,
    limits,
    recommendedCooldownMs: recommendedCooldown,
    cooldownMs,
    maxRetries: Number.isFinite(maxRetries) && maxRetries > 0 ? maxRetries : 3,
    enabled: Boolean(apiKey),
  };
}

export function requireGroqKey() {
  const cfg = getGroqConfig();
  if (!cfg.enabled) {
    console.error(
      "Missing GROQ_API_KEY.\n" +
        "1. Get a key at https://console.groq.com/keys\n" +
        "2. Add GROQ_API_KEY=... to .env\n" +
        "3. Re-run this command"
    );
    process.exit(1);
  }
  return cfg;
}

async function sleep(ms) {
  await new Promise((r) => setTimeout(r, ms));
}

function resetTokenWindowIfExpired(now = Date.now()) {
  if (!tokenWindowStart || now - tokenWindowStart >= 60000) {
    tokenWindowStart = now;
    tokensUsedInWindow = 0;
  }
}

async function waitForRateLimit(cfg, estimatedTokens) {
  const now = Date.now();
  resetTokenWindowIfExpired(now);

  const est = estimatedTokens || cfg.limits.estTokens || OUTREACH_EST_TOKENS;
  const tpmLimit = cfg.limits.tpm;
  const tpmBudget = tpmLimit * RATE_SAFETY;

  while (tokensUsedInWindow + est > tpmBudget) {
    const waitMs = tokenWindowStart + 60000 - Date.now() + 250;
    if (waitMs <= 0) {
      resetTokenWindowIfExpired();
      break;
    }
    console.warn(
      `  Groq TPM window full (${tokensUsedInWindow}/${Math.floor(tpmBudget)} of ${tpmLimit} TPM) — waiting ${Math.ceil(waitMs / 1000)}s`
    );
    await sleep(waitMs);
    resetTokenWindowIfExpired();
  }

  const elapsed = now - lastRequestAt;
  if (elapsed < cfg.cooldownMs) {
    await sleep(cfg.cooldownMs - elapsed);
  }
}

function recordTokenUsage(totalTokens) {
  resetTokenWindowIfExpired();
  tokensUsedInWindow += totalTokens;
}

/**
 * @param {object} body
 * @param {{ apiKey: string, model: string, cooldownMs: number, maxRetries: number, limits: object }} cfg
 */
export async function groqChatCompletion(body, cfg = getGroqConfig()) {
  let attempt = 0;
  let lastError = null;
  const estTokens = cfg.limits?.estTokens || OUTREACH_EST_TOKENS;
  let requestBody = { ...body };

  while (attempt <= cfg.maxRetries) {
    await waitForRateLimit(cfg, estTokens);
    lastRequestAt = Date.now();

    const temperature = requestBody.temperature ?? cfg.temperature ?? 0.75;
    const { temperature: _drop, ...restBody } = requestBody;

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: cfg.model,
        temperature,
        max_tokens: 900,
        response_format: { type: "json_object" },
        ...restBody,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("Groq returned empty completion");
      recordTokenUsage(data.usage?.total_tokens || estTokens);
      return { content, headers: Object.fromEntries(res.headers.entries()), usage: data.usage };
    }

    const errText = await res.text();
    lastError = new Error(`Groq HTTP ${res.status}: ${errText.slice(0, 400)}`);

    const jsonFailed = res.status === 400 && /json_validate_failed|invalid_request_error/.test(errText);
    if (jsonFailed && attempt < cfg.maxRetries) {
      console.warn(`  Groq JSON validation failed — retrying with lower temperature (attempt ${attempt + 1}/${cfg.maxRetries})`);
      requestBody = { ...requestBody, temperature: 0.35 };
      attempt++;
      continue;
    }

    if (res.status === 429 && attempt < cfg.maxRetries) {
      const retryAfterSec = Number(res.headers.get("retry-after") || 0);
      const resetTokens = res.headers.get("x-ratelimit-reset-tokens") || "";
      const tokenWait = parseDurationMs(resetTokens);
      const waitMs = Math.max(retryAfterSec * 1000, tokenWait, cfg.cooldownMs * 2, 15000);
      console.warn(`  Groq rate limit — waiting ${Math.ceil(waitMs / 1000)}s (attempt ${attempt + 1}/${cfg.maxRetries})`);
      await sleep(waitMs);
      tokensUsedInWindow = 0;
      tokenWindowStart = Date.now();
      attempt++;
      continue;
    }

    throw lastError;
  }

  throw lastError || new Error("Groq request failed");
}

/** Parse headers like "7.66s" or "2m59.56s" */
function parseDurationMs(s) {
  if (!s) return 0;
  const m = String(s).match(/^(\d+)m([\d.]+)s$/);
  if (m) return (Number(m[1]) * 60 + Number(m[2])) * 1000;
  const sec = String(s).match(/^([\d.]+)s$/);
  if (sec) return Number(sec[1]) * 1000;
  return 0;
}
