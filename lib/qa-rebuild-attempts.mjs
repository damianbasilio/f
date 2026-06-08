/**
 * Track automatic QA-triggered rebuild attempts per slug.
 */
import fs from "node:fs";
import { loadEnv } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";

const META_FILE = ".qa-auto-rebuild.json";

function metaPath(slug) {
  return slugDir(slug, META_FILE);
}

export function isQaAutoRebuildEnabled() {
  loadEnv();
  const flag = (process.env.QA_AUTO_REBUILD ?? "1").trim().toLowerCase();
  return !["0", "false", "no", "off"].includes(flag);
}

export function getMaxQaAutoRebuildAttempts() {
  loadEnv();
  const n = Number(process.env.QA_AUTO_REBUILD_MAX ?? 2);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 2;
}

export function readQaRebuildAttempts(slug) {
  const p = metaPath(slug);
  if (!fs.existsSync(p)) return 0;
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    return Number(data.attempts) || 0;
  } catch {
    return 0;
  }
}

export function writeQaRebuildAttempts(slug, attempts, { reason } = {}) {
  fs.writeFileSync(
    metaPath(slug),
    JSON.stringify(
      {
        attempts,
        updatedAt: new Date().toISOString(),
        lastReason: reason || null,
      },
      null,
      2
    ) + "\n",
    "utf8"
  );
}

export function resetQaRebuildAttempts(slug) {
  const p = metaPath(slug);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

export function canAutoRebuild(slug) {
  if (!isQaAutoRebuildEnabled()) return false;
  return readQaRebuildAttempts(slug) < getMaxQaAutoRebuildAttempts();
}
