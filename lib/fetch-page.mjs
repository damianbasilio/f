/**
 * Browser-like HTTP fetch for live site scraping (avoids 403 from bot User-Agents).
 */
import { isFacebookUrl } from "./facebook-detect.mjs";

const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const FIREFOX_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * @param {string} url
 * @param {Record<string, string>} [extra]
 */
function browserHeaders(url, extra = {}) {
  let referer;
  try {
    const u = new URL(url);
    referer = `${u.protocol}//${u.host}/`;
  } catch {
    referer = undefined;
  }

  return {
    "User-Agent": CHROME_UA,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    "Upgrade-Insecure-Requests": "1",
    ...(referer ? { Referer: referer } : {}),
    ...extra,
  };
}

/**
 * @param {string} url
 * @param {{ timeoutMs?: number, attempts?: number, headers?: Record<string, string> }} [opts]
 * @returns {Promise<Response>}
 */
export async function fetchPage(url, opts = {}) {
  const attempts = opts.attempts ?? 3;
  const timeoutMs = opts.timeoutMs ?? 25_000;
  const userAgents = [CHROME_UA, CHROME_UA, FIREFOX_UA];
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      const headers = browserHeaders(url, {
        ...opts.headers,
        "User-Agent": userAgents[i] ?? CHROME_UA,
      });

      const res = await fetch(url, {
        headers,
        redirect: "follow",
        signal: AbortSignal.timeout(timeoutMs),
      });

      if ((res.status === 403 || res.status === 429 || res.status === 503) && i < attempts - 1) {
        lastError = new Error(`Fetch failed ${res.status}: ${url}`);
        await sleep(400 + i * 800);
        continue;
      }

      return res;
    } catch (err) {
      lastError = err;
      if (i < attempts - 1) await sleep(300 + i * 500);
    }
  }

  throw lastError ?? new Error(`Fetch failed: ${url}`);
}

/**
 * @param {string} url
 * @returns {string[]}
 */
function urlFetchVariants(url) {
  const variants = [url];
  if (!isFacebookUrl(url)) return variants;
  try {
    const u = new URL(url);
    if (u.hostname.startsWith("m.")) {
      const www = new URL(url);
      www.hostname = u.hostname.replace(/^m\./, "www.");
      variants.push(www.href);
    } else if (u.hostname.startsWith("www.")) {
      const m = new URL(url);
      m.hostname = u.hostname.replace(/^www\./, "m.");
      variants.push(m.href);
    }
  } catch {
    /* keep original */
  }
  return [...new Set(variants)];
}

/**
 * @param {string} url
 * @param {{ timeoutMs?: number, attempts?: number, headers?: Record<string, string> }} [opts]
 * @returns {Promise<string>}
 */
export async function fetchHtml(url, opts = {}) {
  let lastError;
  const variants = urlFetchVariants(url);
  for (let i = 0; i < variants.length; i++) {
    const candidate = variants[i];
    try {
      const res = await fetchPage(candidate, opts);
      const text = await res.text();
      if (!res.ok) {
        if (isFacebookUrl(candidate) && text.length > 800 && /<html|og:title/i.test(text)) {
          return text;
        }
        lastError = new Error(`Fetch failed ${res.status}: ${candidate}`);
        if ((res.status === 403 || res.status === 429 || res.status === 503) && i < variants.length - 1) {
          continue;
        }
        throw lastError;
      }
      return text;
    } catch (err) {
      lastError = err;
      const retryable = /Fetch failed (403|429|503)/.test(err.message || "");
      if (retryable && i < variants.length - 1) continue;
      if (i < variants.length - 1) continue;
      throw err;
    }
  }
  throw lastError ?? new Error(`Fetch failed: ${url}`);
}

export { CHROME_UA as BROWSER_USER_AGENT };
