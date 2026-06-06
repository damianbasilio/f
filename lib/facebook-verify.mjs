/**
 * Facebook profile verification — Website field is sole gate for owned-domain check.
 */
import { launchBrowser } from "./puppeteer-launch.mjs";
import { classifyWebsiteUrl } from "./vertical-profiles.mjs";
import { parseFacebookHtml } from "./facebook-scrape.mjs";
import {
  extractPostsFromHtml,
  extractAboutFromHtml,
  extractAboutFromDom,
  mergeAboutFields,
  buildProfileSummary,
  pickBestIntro,
} from "./facebook-deep-scrape.mjs";

const SKIP_IMG =
  /emoji|static\.xx|safe_image|rsrc\.php|pixel\.gif|facebook_2x|\/icons\/|profile_pic_small|hads-ak-prn/i;

/**
 * @typedef {{
 *   status: "pass"|"skip"|"error",
 *   reason: string,
 *   fbWebsiteUrl: string|null,
 *   fbWebsiteClass: "none"|"directory"|"owned",
 *   googleFirstUrl: string|null,
 *   facebookUrl: string,
 *   pageData?: object,
 *   postImages?: string[],
 *   postCaptions?: string[],
 *   profileAbout?: Record<string, string>,
 *   profileSummary?: string,
 *   localImages?: string[],
 *   error?: string,
 * }} VerifyResult
 */

/**
 * Full Puppeteer pass: verify website + scrape profile + download images.
 * @param {string} facebookUrl
 * @param {object} lead
 * @param {string} slug
 * @param {string} assetsDir
 */
export async function verifyAndScrapeFacebook(facebookUrl, lead, slug, assetsDir) {
  /** @type {import('puppeteer').Browser|null} */
  let browser = null;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );
    await page.setViewport({ width: 1280, height: 900 });

    const imageUrls = new Set();

    page.on("response", (res) => {
      const u = res.url();
      if (/scontent|fbcdn\.net/i.test(u) && !SKIP_IMG.test(u)) {
        if (/\.(?:jpg|jpeg|png|webp)/i.test(u) || /stp=|_nc_cat=/i.test(u)) {
          imageUrls.add(cleanUrl(u));
        }
      }
    });

    await page.goto(facebookUrl, { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.waitForNetworkIdle({ idleTime: 800, timeout: 15_000 }).catch(() => {});

    for (let i = 0; i < 12; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await new Promise((r) => setTimeout(r, 1200));
    }

    const html = await page.content();
    const finalUrl = page.url();
    const pageData = parseFacebookHtml(html, facebookUrl, finalUrl);
    const postCaptions = extractPostsFromHtml(html, { maxPosts: 15, maxLen: 800 });

    const about = await loadAboutPageForWebsite(page, facebookUrl);
    const fbWebsiteUrl = extractWebsiteFromAbout(about.html, about.labelLinks);
    const fbWebsiteClass = classifyWebsiteUrl(fbWebsiteUrl);

    const aboutFromHtml = extractAboutFromHtml(about.html);
    const aboutFromMainHtml = extractAboutFromHtml(html);
    const aboutFromDom = await extractAboutFromDom(page);
    const profileAbout = mergeAboutFields(
      mergeAboutFields(aboutFromHtml, aboutFromMainHtml),
      aboutFromDom
    );
    const bestIntro = pickBestIntro(pageData, profileAbout, postCaptions);
    if (bestIntro) {
      pageData.description = bestIntro;
      profileAbout.intro = bestIntro;
    }
    if (profileAbout.address) pageData.address = profileAbout.address;
    if (profileAbout.phone) pageData.phone = profileAbout.phone;
    if (profileAbout.email) pageData.email = profileAbout.email;
    if (profileAbout.category) pageData.category = profileAbout.category;
    if (profileAbout.hours) pageData.hours = profileAbout.hours;
    pageData.profileAbout = profileAbout;

    const profileSummary = buildProfileSummary(pageData, profileAbout, postCaptions);

    /** @type {VerifyResult} */
    const result = {
      status: "pass",
      reason: "fb_website_field_empty",
      fbWebsiteUrl,
      fbWebsiteClass,
      googleFirstUrl: lead.google_first_url || null,
      facebookUrl,
      pageData,
      postImages: rankImages([...imageUrls, ...(pageData.postImages || [])]),
      postCaptions,
      profileAbout,
      profileSummary,
      localImages: [],
    };

    if (fbWebsiteClass === "owned") {
      result.status = "skip";
      result.reason = "fb_website_owned_domain";
      return result;
    }

    if (fbWebsiteClass === "directory") {
      result.reason = "fb_website_is_directory";
    }

    result.localImages = await downloadFbImages(result.postImages, assetsDir, lead.name, facebookUrl);
    return result;
  } catch (err) {
    return {
      status: "error",
      reason: "scrape_error",
      fbWebsiteUrl: null,
      fbWebsiteClass: "none",
      googleFirstUrl: lead.google_first_url || null,
      facebookUrl,
      postImages: [],
      postCaptions: [],
      profileAbout: {},
      profileSummary: "",
      localImages: [],
      error: err.message,
    };
  } finally {
    await browser?.close();
  }
}

/**
 * About-tab URLs — people profiles use ?sk=about; pages use /about.
 * @param {string} facebookUrl
 */
function aboutPageUrls(facebookUrl) {
  const u = new URL(facebookUrl);
  u.hash = "";
  u.search = "";
  const path = u.pathname.replace(/\/+$/, "");
  if (/\/people\/[^/]+\/\d+$/i.test(path)) {
    return [`${u.origin}${path}/?sk=about`, `${u.origin}${path}/about`];
  }
  return [`${u.origin}${path}/about`, `${u.origin}${path}/?sk=about`];
}

/**
 * @param {import('puppeteer').Page} page
 * @param {string} facebookUrl
 */
async function loadAboutPageForWebsite(page, facebookUrl) {
  let lastHtml = "";
  let lastLinks = [];

  for (const url of aboutPageUrls(facebookUrl)) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.waitForNetworkIdle({ idleTime: 800, timeout: 15_000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 1500));

    lastHtml = await page.content();
    lastLinks = await findWebsiteLabelLinks(page);
    if (lastLinks.length) {
      return { aboutUrl: url, html: lastHtml, labelLinks: lastLinks };
    }
  }

  return { aboutUrl: page.url(), html: lastHtml, labelLinks: lastLinks };
}

/**
 * Find links in the About section Website row only (not feed posts).
 * @param {import('puppeteer').Page} page
 */
async function findWebsiteLabelLinks(page) {
  return page.evaluate(() => {
    const out = [];
    const seen = new Set();
    for (const el of document.querySelectorAll("span, div")) {
      const t = (el.textContent || "").trim();
      if (!/^website$/i.test(t)) continue;
      let p = el.parentElement;
      for (let i = 0; i < 8 && p; i++, p = p.parentElement) {
        const a = p.querySelector("a[href]");
        if (a?.href && !seen.has(a.href)) {
          seen.add(a.href);
          out.push(a.href);
          break;
        }
      }
    }
    return out;
  });
}

/**
 * Website field only — sourced from About tab, never from feed posts.
 * @param {string} aboutHtml
 * @param {string[]} labelLinks
 */
function extractWebsiteFromAbout(aboutHtml, labelLinks) {
  /** @type {{ url: string, tier: number }[]} */
  const candidates = [];

  for (const href of labelLinks) {
    pushWebsiteCandidate(candidates, href, 5);
  }

  const websiteJson = aboutHtml.match(/"website":"(https?:\\\/\\\/[^"]+)"/i)?.[1]?.replace(/\\\//g, "/");
  if (websiteJson) pushWebsiteCandidate(candidates, websiteJson, 4);

  return pickBestWebsite(candidates);
}

/** @deprecated Use About-tab extraction via verifyAndScrapeFacebook */
async function extractWebsiteFromPage(page, facebookUrl) {
  const about = await loadAboutPageForWebsite(page, facebookUrl);
  return extractWebsiteFromAbout(about.html, about.labelLinks);
}

/** @param {{ url: string, tier: number }[]} list @param {string|null|undefined} raw @param {number} tier */
function pushWebsiteCandidate(list, raw, tier) {
  const url = resolveFbRedirect(raw);
  if (!url || !/^https?:\/\//i.test(url)) return;
  try {
    const host = new URL(url).hostname;
    if (/facebook|fbcdn|instagram|fb\.com/i.test(host)) return;
  } catch {
    return;
  }
  if (!list.some((c) => c.url === url)) list.push({ url, tier });
}

/** @param {string|null|undefined} raw */
function resolveFbRedirect(raw) {
  if (!raw || typeof raw !== "string") return null;
  let href = raw.replace(/&amp;/g, "&").replace(/\\\//g, "/");
  try {
    href = decodeURIComponent(href.replace(/\\u0025/g, "%"));
  } catch {
    /* keep href */
  }
  try {
    const u = new URL(href);
    if (/l\.facebook\.com$/i.test(u.hostname) && u.searchParams.has("u")) {
      return decodeURIComponent(u.searchParams.get("u") || "");
    }
  } catch {
    /* not a URL */
  }
  return href;
}

/** @param {{ url: string, tier: number }[]} candidates */
function pickBestWebsite(candidates) {
  let best = null;
  let bestScore = -1;
  for (const { url, tier } of candidates) {
    const cls = classifyWebsiteUrl(url);
    const classRank = cls === "owned" ? 2 : cls === "directory" ? 1 : 0;
    const score = tier * 10 + classRank;
    if (score > bestScore) {
      bestScore = score;
      best = url;
    }
  }
  return best;
}

function cleanUrl(u) {
  return u.replace(/\\u0026/g, "&").replace(/&amp;/g, "&").replace(/\\\//g, "/");
}

function rankImages(urls) {
  return [...new Set(urls)]
    .filter((u) => u.startsWith("http"))
    .sort((a, b) => score(b) - score(a))
    .slice(0, 24);
}

function score(u) {
  let s = 0;
  if (/scontent/.test(u)) s += 5;
  if (/960x|1080x|720x|2048x/.test(u)) s += 4;
  if (/profile|avatar|icon|logo/i.test(u)) s -= 8;
  return s;
}

const MIN_BYTES = 8000;

/**
 * @param {string[]} urls
 * @param {string} assetsDir
 * @param {string} businessName
 * @param {string} referer
 */
async function downloadFbImages(urls, assetsDir, businessName, referer) {
  const fs = await import("node:fs");
  const path = await import("node:path");
  fs.mkdirSync(assetsDir, { recursive: true });

  const localPaths = [];
  let attempt = 0;

  for (const url of urls) {
    if (localPaths.length >= 12) break;
    attempt++;
    const dest = path.join(assetsDir, `fb-${attempt}.jpg`);
    try {
      const r = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: referer,
        },
        redirect: "follow",
      });
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < MIN_BYTES) continue;
      fs.writeFileSync(dest, buf);
      localPaths.push(`assets/fb-${attempt}.jpg`);
    } catch {
      /* try next */
    }
  }

  return localPaths;
}

export { extractWebsiteFromPage, classifyWebsiteUrl };
