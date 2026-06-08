import fs from "node:fs";
import path from "node:path";
import { isStitchCreditError } from "./stitch-credit-error.mjs";

function appendGenerateLog(logPath, entry) {
  if (!logPath) return;
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.appendFileSync(logPath, JSON.stringify({ at: new Date().toISOString(), ...entry }) + "\n", "utf8");
}

function defaultTimeoutMs() {
  const n = Number(process.env.STITCH_GENERATE_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? n : 480000;
}

/**
 * Call Stitch generate_screen_from_text with a wall-clock timeout.
 * @returns {{ ok: boolean, result?: unknown, error?: Error, timedOut?: boolean }}
 */
export async function generateWithTimeout(
  callTool,
  name,
  args,
  { timeoutMs, slug, phase, logPath } = {}
) {
  const ms = timeoutMs ?? defaultTimeoutMs();
  let timer;
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Stitch ${name} timed out after ${ms}ms`)), ms);
  });

  try {
    const result = await Promise.race([callTool(name, args), timeoutPromise]);
    appendGenerateLog(logPath, { slug, phase, event: "ok", tool: name });
    return { ok: true, result, timedOut: false };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    if (isStitchCreditError(err)) {
      appendGenerateLog(logPath, {
        slug,
        phase,
        event: "credit_error",
        tool: name,
        message: err.message,
      });
      throw err;
    }
    const timedOut = /timed out/i.test(err.message);
    appendGenerateLog(logPath, {
      slug,
      phase,
      event: timedOut ? "timeout" : "error",
      tool: name,
      message: err.message,
    });
    console.warn(`  ⚠ ${phase || name}: ${err.message}`);
    return { ok: false, error: err, timedOut };
  } finally {
    clearTimeout(timer);
  }
}

export function maxPhase2Retries() {
  const n = Number(process.env.STITCH_GENERATE_MAX_RETRIES);
  return Number.isFinite(n) && n >= 0 ? n : 1;
}
