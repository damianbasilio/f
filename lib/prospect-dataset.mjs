import fs from "node:fs";
import path from "node:path";
import { normalizeSiteKey } from "./normalize-site-key.mjs";
import { isFacebookUrl } from "./facebook-detect.mjs";

/**
 * @typedef {{ title?: string, website?: string, location?: { lat?: number, lng?: number } }} QueueItem
 */

/**
 * @param {string} filePath
 * @returns {QueueItem[]}
 */
export function loadQueue(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Queue file not found: ${filePath}`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error(`Queue file must be a JSON array: ${filePath}`);
  }
  return data;
}

/**
 * @param {unknown} item
 * @returns {string|null}
 */
export function itemWebsite(item) {
  const website = item?.website;
  if (typeof website !== "string") return null;
  const trimmed = website.trim();
  if (!trimmed.startsWith("http")) return null;
  return trimmed;
}

/**
 * Walk queue from front; collect up to `count` scannable items.
 * Items without a valid http website are left in remaining (not consumed).
 *
 * @param {QueueItem[]} queue
 * @param {number} count
 * @returns {{ batch: QueueItem[], remaining: QueueItem[] }}
 */
export function takeBatch(queue, count) {
  /** @type {QueueItem[]} */
  const batch = [];
  /** @type {QueueItem[]} */
  const remaining = [];

  for (const item of queue) {
    const website = itemWebsite(item);
    if (batch.length < count && website) {
      batch.push(item);
    } else {
      remaining.push(item);
    }
  }

  return { batch, remaining };
}

/**
 * @param {QueueItem[]} batch
 * @returns {string[]}
 */
export function batchUrls(batch) {
  return batch.map((item) => itemWebsite(item)).filter(Boolean);
}

/**
 * @param {QueueItem[]} queue
 * @param {string[]} websites
 * @returns {QueueItem[]}
 */
export function dequeueByWebsites(queue, websites) {
  const keys = new Set(
    websites.map((url) => normalizeSiteKey(url)).filter(Boolean)
  );
  return queue.filter((item) => {
    const url = itemWebsite(item);
    if (!url) return true;
    const key = normalizeSiteKey(url);
    return !key || !keys.has(key);
  });
}

/**
 * @param {string} filePath
 * @param {QueueItem[]} items
 */
export function writeQueue(filePath, items) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(items, null, 2)}\n`, "utf8");
  fs.renameSync(tmp, filePath);
}

/**
 * @param {QueueItem[]} batch
 * @param {Array<{ url: string, facebookPage?: object | null }>} [funnelResults]
 * @returns {Record<string, object>}
 */
export function buildBatchMeta(batch, funnelResults = []) {
  const fbByUrl = new Map();
  for (const r of funnelResults) {
    if (r.facebookPage) fbByUrl.set(r.url, r.facebookPage);
  }

  /** @type {Record<string, object>} */
  const meta = {};
  for (const item of batch) {
    const website = itemWebsite(item);
    if (!website) continue;
    const loc = item.location;
    const hasCoords =
      loc &&
      typeof loc.lat === "number" &&
      typeof loc.lng === "number" &&
      Number.isFinite(loc.lat) &&
      Number.isFinite(loc.lng);
    const facebook = isFacebookUrl(website);
    const scraped = facebook ? fbByUrl.get(website) : null;
    meta[website] = {
      title: typeof item.title === "string" ? item.title.trim() : "",
      location: hasCoords ? { lat: loc.lat, lng: loc.lng } : null,
      isFacebook: facebook,
      facebookOnly: facebook,
      ...(facebook && scraped
        ? {
            facebookPage: {
              title: scraped.title,
              description: scraped.description,
              phone: scraped.phone,
              email: scraped.email,
              address: scraped.address,
              category: scraped.category,
              ogImage: scraped.ogImage,
              postImages: scraped.postImages || [],
              colors: scraped.colors || [],
            },
          }
        : {}),
    };
  }
  return meta;
}
