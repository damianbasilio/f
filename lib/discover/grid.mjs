/**
 * Generate city × category search queries for Google Places Text Search.
 */

/**
 * @param {string[]} cities
 * @param {string[]} categories
 * @returns {{ query: string, city: string, category: string }[]}
 */
export function buildSearchGrid(cities, categories) {
  const out = [];
  for (const city of cities) {
    for (const category of categories) {
      out.push({
        query: `${category} in ${city}`,
        city: city.trim(),
        category: category.trim(),
      });
    }
  }
  return out;
}

/**
 * Categories where GBP often lists Facebook as the website field (auto-pass, no SERP).
 * Runs first each session — still shuffled among themselves for variety.
 */
const GBP_FACEBOOK_PRIORITY_CATEGORIES = new Set([
  "pet groomer",
  "mobile pet grooming",
  "dog walker",
  "pet sitting",
  "food truck",
  "bbq restaurant",
  "catering",
  "food truck catering",
  "mobile car wash",
  "mobile mechanic",
  "mobile detailing",
  "towing service",
  "roadside assistance",
  "hair salon",
  "nail salon",
  "barber shop",
  "tanning salon",
  "massage therapist",
  "personal trainer",
  "photographer",
  "florist",
  "bakery",
  "restaurant",
]);

/**
 * Shuffle grid but run high-GBP-Facebook categories first (each group shuffled).
 * @template T extends { category?: string }
 * @param {T[]} items
 * @returns {T[]}
 */
export function shuffleGrid(items) {
  const priority = [];
  const rest = [];
  for (const item of items) {
    const cat = String(item.category || "").trim().toLowerCase();
    if (GBP_FACEBOOK_PRIORITY_CATEGORIES.has(cat)) priority.push(item);
    else rest.push(item);
  }
  return [...shuffleArray(priority), ...shuffleArray(rest)];
}

/**
 * @template T
 * @param {T[]} items
 * @returns {T[]}
 */
function shuffleArray(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * @param {string} filePath
 * @param {import("node:fs")} fs
 */
export function loadJsonArray(filePath, fs) {
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Error(`Expected non-empty JSON array: ${filePath}`);
  }
  return raw.map((item) => String(item).trim()).filter(Boolean);
}
