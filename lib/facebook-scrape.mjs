/**
 * Scrape public Facebook page HTML for business content, post images, and brand signals.
 */

import { fetchHtml } from "./fetch-page.mjs";

const FB_PLATFORM_COLORS = new Set([
  "#1877f2",
  "#0866ff",
  "#42a5f5",
  "#e4e6eb",
  "#f0f2f5",
  "#ffffff",
  "#000000",
  "#1c1e21",
  "#65676b",
]);

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
 *   colors: string[],
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
  const colors = extractBusinessColors(html, ogImage);

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
    colors,
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

function extractBusinessColors(html, ogImage) {
  const colors = new Set();
  for (const m of html.matchAll(/#([0-9a-fA-F]{3,8})\b/g)) {
    const hex = normalizeHex(`#${m[1]}`);
    if (hex && !FB_PLATFORM_COLORS.has(hex.toLowerCase())) colors.add(hex);
  }
  const list = [...colors];
  if (list.length >= 2) return list.slice(0, 8);
  if (ogImage) return inferColorsFromImageUrl(ogImage);
  return list;
}

function normalizeHex(hex) {
  if (!hex) return null;
  let h = hex.toLowerCase();
  if (h.length === 4) {
    h = `#${h[1]}${h[1]}${h[2]}${h[2]}${h[3]}${h[3]}`;
  }
  return /^#[0-9a-f]{6}$/.test(h) ? h : null;
}

/** Heuristic palette hints from CDN image URL tokens (no image decode). */
function inferColorsFromImageUrl(url) {
  const lower = url.toLowerCase();
  if (/red|maroon|crimson|burgundy/.test(lower)) return ["#8B1A1A", "#C41E3A", "#F5E6D3"];
  if (/green|olive|sage|forest/.test(lower)) return ["#2D5016", "#4A7C2C", "#F4F1EA"];
  if (/blue|navy|azure/.test(lower)) return ["#1A3A5C", "#2E6DA4", "#E8EEF4"];
  if (/gold|amber|yellow|honey/.test(lower)) return ["#B8860B", "#D4A017", "#FFF8E7"];
  if (/brown|coffee|chocolate|wood/.test(lower)) return ["#5C3D2E", "#8B5A3C", "#F5EDE4"];
  if (/pink|rose|blush/.test(lower)) return ["#9E3A5C", "#C75B7A", "#FFF0F3"];
  return ["#2C2C2C", "#8B6914", "#F5F0E8"];
}

/**
 * Brand extract compatible with extractBrandFromUrl output.
 * @param {string} url
 */
export async function extractBrandFromFacebook(url) {
  const page = await scrapeFacebookPage(url);
  const colors = page.colors.length ? page.colors : inferColorsFromImageUrl(page.ogImage || "");
  const fontList = ["system-ui", "Segoe UI", "Helvetica Neue"];
  const contentSummary = [page.title, page.description].filter(Boolean).join(" — ").slice(0, 280);
  const primary = colors[0] || "#2C2C2C";
  const secondary = colors[1] || "#8B6914";
  const accent = colors[2] || "#F5F0E8";

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
    colors,
    allColorsDetected: colors,
    platformDefaultsFiltered: [],
    fonts: fontList,
    notes: [
      "facebook-only",
      page.postImages.length ? `${page.postImages.length} post images scraped` : "no post images found",
      page.colors.length ? "colors from page HTML" : "colors inferred from post imagery — verify visually",
    ],
    primaryColor: primary,
    secondaryColor: secondary,
    accentColor: accent,
    neutralColors: colors.filter((c) => /^#[89a-f]/i.test(c)).slice(0, 2),
    paletteSummary: `Facebook page imagery — ${colors.slice(0, 3).join(", ") || "derive from post photos"}`,
    typographySummary: "Clean sans-serif — professional local business",
    cssVariables: [
      "/* Facebook-derived palette */",
      `:root {`,
      `  --brand-primary: ${primary};`,
      `  --brand-secondary: ${secondary};`,
      `  --brand-accent: ${accent};`,
      `  --font-primary: ${fontList[0]}, sans-serif;`,
      `}`,
    ].join("\n"),
    stitchGuidance: `Facebook-only business at ${url}. Use scraped post photos (${page.postImages.length}) for hero and gallery slots — no stock imagery. Match palette to food/brand photos: ${colors.slice(0, 3).join(", ")}.`,
    facebookPage: page,
  };
}
