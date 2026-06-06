/**
 * Detect Stitch API credit / quota exhaustion for key failover.
 */

const CREDIT_MESSAGE_PATTERNS = [
  /\bout of credits?\b/i,
  /\bno credits?\b/i,
  /\binsufficient credits?\b/i,
  /\bcredit balance\b/i,
  /\bquota exceeded\b/i,
  /\bexceeded.*\bquota\b/i,
  /\bresource.?exhausted\b/i,
  /RESOURCE_EXHAUSTED/i,
  /\bbilling\b/i,
  /\bpayment required\b/i,
  /\busage limit\b/i,
  /\bplan limit\b/i,
];

const CREDIT_CODE_PATTERNS = [/QUOTA_EXCEEDED/i, /RESOURCE_EXHAUSTED/i, /BILLING/i, /INSUFFICIENT_CREDITS/i];

function collectErrorStrings(error, depth = 0) {
  if (!error || depth > 4) return [];
  const parts = [];
  if (typeof error === "string") {
    parts.push(error);
    return parts;
  }
  if (error instanceof Error) {
    parts.push(error.message, error.name);
    if (error.code) parts.push(String(error.code));
  } else if (typeof error === "object") {
    for (const k of ["message", "code", "status", "statusText", "reason", "detail"]) {
      if (error[k]) parts.push(String(error[k]));
    }
  }
  try {
    parts.push(JSON.stringify(error));
  } catch {
    /* ignore circular */
  }
  if (error.cause) parts.push(...collectErrorStrings(error.cause, depth + 1));
  if (error.error) parts.push(...collectErrorStrings(error.error, depth + 1));
  return parts;
}

/**
 * @param {unknown} error
 * @returns {boolean}
 */
export function isStitchCreditError(error) {
  const blob = collectErrorStrings(error).join(" ");
  if (!blob.trim()) return false;

  if (CREDIT_MESSAGE_PATTERNS.some((re) => re.test(blob))) return true;
  if (CREDIT_CODE_PATTERNS.some((re) => re.test(blob))) return true;

  // HTTP 402 Payment Required, or 403/429 with explicit quota wording
  if (/\b402\b/.test(blob) && /payment|billing|credit/i.test(blob)) return true;
  if (/\b(403|429)\b/.test(blob) && /\b(quota|credit|billing)\b/i.test(blob)) return true;

  return false;
}

/**
 * @param {Set<number>} exhaustedKeyIndices
 * @param {number} preferStart first index to try
 * @param {number} keyCount
 * @returns {number|null}
 */
export function findNextKeyIndex(exhaustedKeyIndices, keyCount, preferStart = 0) {
  if (keyCount < 1) return null;
  for (let i = 0; i < keyCount; i++) {
    const idx = (preferStart + i) % keyCount;
    if (!exhaustedKeyIndices.has(idx)) return idx;
  }
  return null;
}

/**
 * @param {number} keyIndex 0-based
 * @param {number} keyCount
 * @param {string} slug
 */
export function logCreditFailover(keyIndex, keyCount, slug) {
  console.warn(
    `\n⚠ Stitch API key ${keyIndex + 1}/${keyCount} appears out of credits` +
      (slug ? ` — retrying ${slug} with next key` : " — switching to next key") +
      ".\n"
  );
}
