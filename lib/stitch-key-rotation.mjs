/**
 * Round-robin Stitch API key selection across runs (not always key 1).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { findNextKeyIndex } from "./stitch-credit-error.mjs";

const POINTER_PATH = path.join(root, "data", "stitch-key-pointer.json");

function readPointer() {
  if (!fs.existsSync(POINTER_PATH)) return 0;
  try {
    const data = JSON.parse(fs.readFileSync(POINTER_PATH, "utf8"));
    const n = Number(data.next);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writePointer(next) {
  fs.mkdirSync(path.dirname(POINTER_PATH), { recursive: true });
  fs.writeFileSync(
    POINTER_PATH,
    JSON.stringify({ next, updatedAt: new Date().toISOString() }, null, 2) + "\n",
    "utf8"
  );
}

/**
 * Pick the next API key index for a new slug/worker, spreading load across keys.
 * @param {number} keyCount
 * @param {Set<number>} [exhausted]
 * @returns {number|null}
 */
export function allocateStitchKeyIndex(keyCount, exhausted = new Set()) {
  if (keyCount < 1) return null;

  const preferStart = readPointer() % keyCount;
  const idx = findNextKeyIndex(exhausted, keyCount, preferStart);
  if (idx === null) return null;

  writePointer((idx + 1) % keyCount);
  return idx;
}
