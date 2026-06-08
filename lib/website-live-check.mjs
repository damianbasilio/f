/**
 * Fast HTTP check — is a URL reachable (not down / DNS dead)?
 */

const DEFAULT_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/**
 * @param {string} url
 * @param {object} [opts]
 * @param {number} [opts.timeoutMs]
 * @returns {Promise<{ live: boolean, status?: number, reason?: string }>}
 */
export async function isWebsiteLive(url, opts = {}) {
  const timeoutMs = opts.timeoutMs ?? (Number(process.env.WEBSITE_CHECK_TIMEOUT_MS) || 8000);
  if (!url || !/^https?:\/\//i.test(url)) {
    return { live: false, reason: "invalid_url" };
  }

  const init = {
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
    headers: { "User-Agent": DEFAULT_UA },
  };

  try {
    let res = await fetch(url, { ...init, method: "HEAD" });
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      res = await fetch(url, { ...init, method: "GET" });
    }
    if (res.ok || (res.status >= 300 && res.status < 400)) {
      return { live: true, status: res.status };
    }
    if (res.status >= 500) {
      return { live: false, status: res.status, reason: "server_error" };
    }
    if (res.status === 404 || res.status === 410) {
      return { live: false, status: res.status, reason: "not_found" };
    }
    // 401/403/etc. — site responds; treat as live (may block bots)
    if (res.status >= 400) {
      return { live: true, status: res.status, reason: "http_responds" };
    }
    return { live: false, status: res.status, reason: "http_error" };
  } catch (err) {
    const name = err?.name || "";
    if (name === "TimeoutError" || name === "AbortError") {
      return { live: false, reason: "timeout" };
    }
    return { live: false, reason: "network_error" };
  }
}
