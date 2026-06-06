/**
 * Derive URL-safe slug from business name + city.
 * @param {string} name
 * @param {string} city
 */
export function deriveSlug(name, city = "") {
  const parts = [name, city]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return parts || "business";
}

/**
 * @param {unknown} raw
 * @returns {object[]}
 */
export function parseLeadArray(raw) {
  let data = raw;
  if (typeof raw === "string") {
    data = JSON.parse(raw);
  }
  if (!Array.isArray(data)) {
    throw new Error("JSON must be an array of lead objects");
  }
  if (data.length === 0) {
    throw new Error("Lead array is empty");
  }
  return data.map((item, i) => validateLead(item, i));
}

/**
 * @param {object} lead
 * @param {number} index
 */
export function validateLead(lead, index = 0) {
  if (!lead || typeof lead !== "object") {
    throw new Error(`Lead at index ${index} is not an object`);
  }
  if (!lead.name || typeof lead.name !== "string") {
    throw new Error(`Lead at index ${index} missing "name"`);
  }
  const fb = lead.facebook || lead.url || "";
  if (!fb || !/facebook\.com/i.test(String(fb))) {
    throw new Error(`Lead "${lead.name}" missing Facebook URL (facebook or url field)`);
  }
  if (!lead.emails || !String(lead.emails).includes("@")) {
    throw new Error(`Lead "${lead.name}" missing valid "emails" field`);
  }
  return {
    name: String(lead.name).trim(),
    street: String(lead.street || "").trim(),
    city: String(lead.city || "").trim(),
    country: String(lead.country || "").trim(),
    country_code: String(lead.country_code || "US").trim(),
    url: String(lead.url || lead.facebook || "").trim(),
    facebook: String(lead.facebook || lead.url || "").trim(),
    phone_number: String(lead.phone_number || "").trim(),
    review_score: lead.review_score != null ? Number(lead.review_score) : null,
    google_maps_url: String(lead.google_maps_url || "").trim(),
    emails: String(lead.emails).trim(),
    google_first_url: String(lead.google_first_url || "").trim(),
    business_category: String(lead.business_category || "local_business").trim(),
    published: String(lead.published || "").trim(),
  };
}

/**
 * @param {object} lead
 */
export function leadToLocation(lead) {
  const parts = [lead.street, lead.city, lead.country].filter(Boolean);
  return parts.join(", ") || lead.city || "United States";
}

/**
 * @param {object} lead
 */
export function leadMetaPath(slug) {
  return `${slug}/lead.json`;
}
