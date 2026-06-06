import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function loadEnv() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const m = trimmed.match(/^([A-Z_]+)=(.*)$/);
    if (m && (!process.env[m[1]] || m[1] === "GIT_USER_NAME" || m[1] === "GIT_USER_EMAIL")) {
      let val = m[2].trim().replace(/^["']|["']$/g, "");
      val = val.replace(/\s+#.*$/, "").trim();
      process.env[m[1]] = val;
    }
  }
}

/** Comma-separated STITCH_API_KEYS or single STITCH_API_KEY. */
export function getStitchApiKeys() {
  loadEnv();
  const multi = process.env.STITCH_API_KEYS?.trim();
  if (multi) {
    const keys = multi
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    if (keys.length) return keys;
  }
  const single = process.env.STITCH_API_KEY?.trim();
  return single ? [single] : [];
}

export function getStitchPoolConcurrency(slugCount) {
  const keys = getStitchApiKeys();
  if (!keys.length) return 0;
  const envCap = Number(process.env.STITCH_CONCURRENCY);
  const cap =
    Number.isFinite(envCap) && envCap > 0 ? Math.min(envCap, keys.length) : keys.length;
  return Math.min(slugCount, keys.length, cap);
}

export function requireStitchKey() {
  const keys = getStitchApiKeys();
  if (!keys.length) {
    console.error(
      "Missing Stitch API key.\n" +
        "1. Copy .env.example to .env\n" +
        "2. Set STITCH_API_KEY or STITCH_API_KEYS (comma-separated, e.g. up to 6 for parallel builds)\n" +
        "3. Re-run this command"
    );
    process.exit(1);
  }
}

export function requireStitchKeys() {
  requireStitchKey();
}

export { root };
