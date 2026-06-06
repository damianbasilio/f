/**
 * Deep Facebook profile scrape — About tab fields + feed post text.
 */

const CAPTION_SKIP =
  /^(see more about|learn more|commenting has been turned off|page ·|· \d|$)/i;
const CAPTION_NOISE =
  /^(page ·|· \d[\d,]* (?:likes|talking|were here|followers|following|posts|reviews))/i;

/**
 * @param {string} text
 */
export function isProfileFieldNoise(text) {
  if (!text || text.length < 8) return true;
  if (/^[\w.+-]+@[\w.-]+\.\w+/i.test(text)) return true;
  if (/\b\d{1,6}\s+[\w.'-]+(?:\s+[\w.'-]+){0,4}\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Dr|Drive|Ln|Lane)\b.*,\s*[^,]+,\s*[A-Z]{2}\b/i.test(text))
    return true;
  if (/100% recommend|\(\d+\s+reviews?\)/i.test(text)) return true;
  if (/^Page ·/i.test(text)) return true;
  if (/privacy and legal info|page transparency|work and education/i.test(text)) return true;
  return false;
}

/**
 * @param {string} s
 */
export function decodeFbString(s) {
  if (!s) return "";
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "")
    .replace(/\\t/g, " ")
    .replace(/\\u([\dA-Fa-f]{4})/g, (_, c) => String.fromCharCode(parseInt(c, 16)))
    .replace(/\\"/g, '"')
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&")
    .trim();
}

/**
 * @param {string} html
 * @param {{ maxPosts?: number, maxLen?: number }} [opts]
 */
export function extractPostsFromHtml(html, opts = {}) {
  const maxPosts = opts.maxPosts ?? 15;
  const maxLen = opts.maxLen ?? 800;
  /** @type {string[]} */
  const captions = [];
  const seen = new Set();

  const add = (raw) => {
    const text = decodeFbString(raw).replace(/\s+/g, " ").trim();
    if (text.length < 20 || text.length > maxLen) return;
    if (CAPTION_SKIP.test(text) || CAPTION_NOISE.test(text)) return;
    if (isProfileFieldNoise(text)) return;
    if (/^https?:\/\//i.test(text)) return;
    if (/facebook\.com/i.test(text) && text.length < 80) return;
    const key = text.slice(0, 120);
    if (seen.has(key)) return;
    seen.add(key);
    captions.push(text);
  };

  for (const m of html.matchAll(/"message":\s*\{"text":"((?:\\.|[^"\\]){20,2000})"/g)) {
    add(m[1]);
    if (captions.length >= maxPosts) break;
  }

  for (const m of html.matchAll(/"story":\s*\{"message":\s*\{"text":"((?:\\.|[^"\\]){20,2000})"/g)) {
    add(m[1]);
    if (captions.length >= maxPosts) break;
  }

  for (const m of html.matchAll(/"text":"((?:\\.|[^"\\]){30,2000})"/g)) {
    add(m[1]);
    if (captions.length >= maxPosts) break;
  }

  return captions.slice(0, maxPosts);
}

/**
 * @param {string} aboutHtml
 */
export function extractAboutFromHtml(aboutHtml) {
  /** @type {Record<string, string>} */
  const fields = {};

  const pickJson = (keys) => {
    for (const key of keys) {
      const re = new RegExp(`"${key}":"((?:\\\\.|[^"\\\\]){0,4000})"`, "i");
      const m = aboutHtml.match(re)?.[1];
      if (m) {
        const val = decodeFbString(m);
        if (val.length >= 3) return val;
      }
    }
    return null;
  };

  const intro =
    pickJson(["page_about", "about", "bio", "description", "short_description", "page_description"]) ||
    null;
  if (intro) fields.intro = intro;

  const category = pickJson(["category", "page_category", "pageCategories"]);
  if (category) fields.category = category;

  const address =
    pickJson(["single_line_address", "formatted_address", "street", "full_address"]) || null;
  if (address) fields.address = address;

  const phone = pickJson(["phone", "phone_number", "formatted_phone_number"]);
  if (phone) fields.phone = phone.replace(/[^\d+().\s-]/g, "").trim() || phone;

  const email = pickJson(["email", "public_email"]);
  if (email) fields.email = email;

  const hours =
    pickJson(["hours", "opening_hours", "store_hours"]) ||
    extractHoursBlob(aboutHtml);
  if (hours) fields.hours = hours;

  const likes = aboutHtml.match(/"likes":(\d+)/i)?.[1];
  if (likes) fields.likes = likes;

  const followers = aboutHtml.match(/"followers":(\d+)/i)?.[1];
  if (followers) fields.followers = followers;

  const rating = aboutHtml.match(/"overall_star_rating":([\d.]+)/i)?.[1];
  if (rating) fields.rating = rating;

  const ratingCount = aboutHtml.match(/"rating_count":(\d+)/i)?.[1];
  if (ratingCount) fields.ratingCount = ratingCount;

  const priceRange = pickJson(["price_range", "priceRange"]);
  if (priceRange) fields.priceRange = priceRange;

  return fields;
}

/**
 * @param {string} html
 */
function extractHoursBlob(html) {
  const m = html.match(/"hours":\{((?:\\.|[^}]){20,2000})\}/i);
  if (!m) return null;
  const raw = m[1];
  const days = [];
  for (const day of ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]) {
    const re = new RegExp(`"${day}":\\s*"((?:\\\\.|[^"\\\\])*)"`, "i");
    const val = raw.match(re)?.[1];
    if (val) days.push(`${day}: ${decodeFbString(val)}`);
  }
  return days.length ? days.join("; ") : null;
}

/**
 * Labeled rows on About tab (Hours, Address, Intro, etc.)
 * @param {import('puppeteer').Page} page
 */
export async function extractAboutFromDom(page) {
  return page.evaluate(() => {
    /** @type {Record<string, string>} */
    const fields = {};
    const labelRe =
      /^(about|hours|address|phone|email|price range|ratings?|services|products|category|mission|founded|opening hours|impressum|website)$/i;

    /** @param {string} label @param {string} value */
    const set = (label, value) => {
      const v = (value || "").trim();
      if (!v || v.length < 2 || v.length > 2000) return;
      if (/^[\w.+-]+@/.test(v)) return;
      if (/privacy and legal info|page transparency/i.test(v)) return;
      const key = label.toLowerCase().replace(/\s+/g, "_");
      if (!fields[key] || fields[key].length < v.length) fields[key] = v;
    };

    for (const el of document.querySelectorAll("span, div, h2, h3, dt")) {
      const labelText = (el.textContent || "").trim();
      if (!labelText || labelText.length > 40) continue;
      const labelLine = labelText.split("\n")[0].trim();
      if (!labelRe.test(labelLine)) continue;
      if (labelLine.toLowerCase() === "about") continue;

      let container = el.parentElement;
      for (let i = 0; i < 6 && container; i++, container = container.parentElement) {
        const links = [...container.querySelectorAll("a[href]")];
        const texts = [...container.querySelectorAll("span, div, p")]
          .map((n) => (n.textContent || "").trim())
          .filter((t) => t && t !== labelLine && t.length > 2 && t.length < 1500);

        if (labelLine.toLowerCase() === "website") continue;

        if (texts.length) {
          const value = texts
            .filter((t) => !labelRe.test(t.split("\n")[0]))
            .sort((a, b) => b.length - a.length)[0];
          if (value) {
            set(labelLine, value);
            break;
          }
        }

        if (links.length && /phone|email|address/i.test(labelLine)) {
          const link = links.find((a) => a.href && !/facebook\.com/i.test(a.href));
          if (link) {
            set(labelLine, (link.textContent || link.href).trim());
            break;
          }
        }
      }
    }

    // Intro block — often under "About" heading or first long paragraph on About tab
    for (const el of document.querySelectorAll('[data-pagelet*="About"] span, [data-pagelet*="About"] div')) {
      const t = (el.textContent || "").trim();
      if (t.length >= 80 && t.length <= 2000 && !/^(about|hours|address)$/i.test(t)) {
        set("intro", t);
        break;
      }
    }

    return fields;
  });
}

/**
 * @param {Record<string, string>} a
 * @param {Record<string, string>} b
 */
export function mergeAboutFields(a, b) {
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (!v) continue;
    if (!out[k] || out[k].length < v.length) out[k] = v;
  }
  return out;
}

/**
 * Best intro line from og description, about JSON, or descriptive post text.
 * @param {object} pageData
 * @param {Record<string, string>} about
 * @param {string[]} postCaptions
 */
export function pickBestIntro(pageData, about, postCaptions) {
  const candidates = [
    about.intro,
    pageData.description,
    pageData.title,
    ...postCaptions.filter((c) => c.length >= 35 && !isProfileFieldNoise(c)),
  ].filter(Boolean);

  return candidates.sort((a, b) => b.length - a.length)[0] || null;
}

/**
 * @param {object} pageData
 * @param {Record<string, string>} about
 * @param {string[]} postCaptions
 */
export function buildProfileSummary(pageData, about, postCaptions) {
  const lines = [];
  const intro = pickBestIntro(pageData, about, postCaptions);
  if (intro) lines.push(intro);
  if (about.category || pageData.category) lines.push(`Category: ${about.category || pageData.category}`);
  if (about.hours) lines.push(`Hours: ${about.hours}`);
  if (about.address || pageData.address) lines.push(`Address: ${about.address || pageData.address}`);
  if (about.phone || pageData.phone) lines.push(`Phone: ${about.phone || pageData.phone}`);
  if (about.email || pageData.email) lines.push(`Email: ${about.email || pageData.email}`);
  if (about.rating) {
    lines.push(
      `Rating: ${about.rating}${about.ratingCount ? ` (${about.ratingCount} reviews on Facebook)` : ""}`
    );
  }
  if (about.likes) lines.push(`Facebook likes: ${about.likes}`);
  if (about.priceRange) lines.push(`Price range: ${about.priceRange}`);

  if (postCaptions.length) {
    const posts = postCaptions.filter((c) => !isProfileFieldNoise(c));
    if (posts.length) {
      lines.push("", "Recent posts from their Facebook page:");
      posts.slice(0, 12).forEach((c, i) => lines.push(`${i + 1}. ${c}`));
    }
  }

  return lines.join("\n").trim();
}

/**
 * Derive service bullets from posts + category when generic defaults aren't enough.
 * @param {string[]} postCaptions
 * @param {string[]} defaults
 * @param {number} count
 */
export function deriveServiceBullets(postCaptions, defaults, count = 3) {
  const bullets = [];
  const seen = new Set();

  for (const caption of postCaptions) {
    const lower = caption.toLowerCase();
    if (lower.length < 25) continue;
    // Lines that read like service offers
    const chunks = caption.split(/[.!?•\n]/).map((s) => s.trim()).filter((s) => s.length >= 15 && s.length <= 120);
    for (const chunk of chunks) {
      const key = chunk.slice(0, 50).toLowerCase();
      if (seen.has(key)) continue;
      if (/special|offer|service|we do|call us|open|menu|repair|install|clean|groom|tow|delivery/i.test(chunk)) {
        seen.add(key);
        bullets.push(chunk.charAt(0).toUpperCase() + chunk.slice(1));
        if (bullets.length >= count) return bullets;
      }
    }
  }

  for (const d of defaults) {
    if (bullets.length >= count) break;
    bullets.push(d);
  }
  return bullets.slice(0, count);
}
