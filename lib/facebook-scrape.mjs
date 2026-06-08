/**
 * Scrape public Facebook page HTML for business content and post images.
 */

import { fetchHtml } from "./fetch-page.mjs";

/**
 * @typedef {{
 *   sourceUrl: string,
 *   finalUrl: string,
 *   title: string | null,
 *   description: string | null,
 *   ogImage: string | null,
 *   postImages: string[],
 *   phone: string | null,
 *   email: string | null,
 *   category: string | null,
 *   address: string | null,
 *   scrapedAt: string,
 *   error?: string,
 * }} FacebookPageData
 */

/**
 * @param {string} url
 * @returns {Promise<FacebookPageData>}
 */
export async function scrapeFacebookPage(url) {
  const html = await fetchHtml(url, { attempts: 3 });
  return parseFacebookHtml(html, url, url);
}

/**
 * @param {string} html
 * @param {string} sourceUrl
 * @param {string} finalUrl
 * @returns {FacebookPageData}
 */
export function parseFacebookHtml(html, sourceUrl, finalUrl = sourceUrl) {
  const meta = (prop) =>
    html.match(new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`, "i"))?.[1] ||
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${prop}["']`, "i"))?.[1];

  const nameMeta = (n) =>
    html.match(new RegExp(`<meta[^>]+name=["']${n}["'][^>]+content=["']([^"']+)["']`, "i"))?.[1];

  const title = decodeHtml(meta("og:title") || nameMeta("title") || html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]);
  const description = decodeHtml(meta("og:description") || nameMeta("description"));
  const ogImage = decodeHtml(meta("og:image"));

  const postImages = extractPostImages(html, ogImage);
  const phone = extractPhone(html);
  const email = extractEmail(html);
  const category = extractCategory(html);
  const address = extractAddress(html, description);

  return {
    sourceUrl,
    finalUrl,
    title: title?.trim() || null,
    description: description?.trim() || null,
    ogImage: ogImage || null,
    postImages,
    phone,
    email,
    category,
    address,
    scrapedAt: new Date().toISOString(),
  };
}

function decodeHtml(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\\u0026/g, "&")
    .replace(/\\u0027/g, "'")
    .replace(/\\"/g, '"');
}

function extractPostImages(html, ogImage) {
  const images = new Set();
  if (ogImage) images.add(ogImage);

  for (const m of html.matchAll(/https:\/\/scontent[^"'\s\\]+/g)) {
    let url = m[0].replace(/\\u0026/g, "&").replace(/&amp;/g, "&").replace(/\\\//g, "/");
    if (url.includes("emoji") || url.includes("static.xx")) continue;
    if (/\.(?:jpg|jpeg|png|webp)/i.test(url) || url.includes("stp=")) {
      images.add(url.split("&amp;")[0]);
    }
  }

  for (const m of html.matchAll(/property="og:image" content="([^"]+)"/g)) {
    images.add(decodeHtml(m[1]));
  }

  const list = [...images].filter((u) => u.startsWith("http"));
  if (ogImage) {
    const rest = list.filter((u) => u !== ogImage);
    return [ogImage, ...rest].slice(0, 16);
  }
  return list.slice(0, 16);
}

function extractPhone(html) {
  const tel = html.match(/href=["']tel:([^"']+)["']/i)?.[1];
  if (tel) return tel.replace(/\D/g, "").length >= 10 ? tel : null;
  const m = html.match(/\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/);
  return m?.[0] || null;
}

function extractEmail(html) {
  const mailto = html.match(/href=["']mailto:([^"']+)["']/i)?.[1];
  if (mailto) return mailto.split("?")[0];
  const m = html.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  return m?.[0] || null;
}

function extractCategory(html) {
  return (
    html.match(/"category":"([^"]+)"/i)?.[1]?.replace(/\\u0026/g, "&") ||
    html.match(/"page_category":"([^"]+)"/i)?.[1] ||
    null
  );
}

function extractAddress(html, description) {
  const fromJson =
    html.match(/"single_line_address":"([^"]+)"/i)?.[1]?.replace(/\\u0026/g, "&") ||
    html.match(/"formatted_address":"([^"]+)"/i)?.[1]?.replace(/\\u0026/g, "&");
  if (fromJson) return fromJson;

  const usAddr =
    description?.match(
      /\b\d{1,6}\s+[\w.'º½-]+(?:\s+[\w.'º½-]+){0,6}\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Dr|Drive|Ln|Lane|Way|Ct|Court)\b[^,\n]*,\s*[^,\n]+,\s*[A-Z]{2}\s+\d{5}/i
    )?.[0];
  return usAddr || null;
}

/**
 * Facebook source metadata for Stitch — copy and photos only; no color extraction.
 * @param {string} url
 */
export async function extractBrandFromFacebook(url) {
  const page = await scrapeFacebookPage(url);
  const contentSummary = [page.title, page.description].filter(Boolean).join(" — ").slice(0, 280);

  return {
    sourceUrl: url,
    extractedAt: page.scrapedAt,
    platform: "Facebook (no dedicated website)",
    facebookOnly: true,
    title: page.title,
    metaDescription: page.description,
    h1: page.title,
    contentSummary,
    ogImage: page.ogImage,
    postImages: page.postImages,
    phone: page.phone,
    email: page.email,
    category: page.category,
    address: page.address,
    notes: [
      "facebook-only",
      page.postImages.length ? `${page.postImages.length} post images scraped` : "no post images found",
    ],
    stitchGuidance: `Facebook-only at ${url}. Use post photos (${page.postImages.length}) for hero and gallery. Stitch chooses all colors and typography from business type and identity.`,
    facebookPage: page,
  };
}
