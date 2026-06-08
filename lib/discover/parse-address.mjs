/**
 * Parse Google Places addressComponents into lead address fields.
 */

/**
 * @param {object[]} components
 * @param {string} type
 */
function findComponent(components, type) {
  if (!Array.isArray(components)) return null;
  for (const c of components) {
    if (Array.isArray(c.types) && c.types.includes(type)) {
      return c.longText || c.shortText || c.long_name || c.short_name || "";
    }
  }
  return null;
}

/**
 * Prefer shortText (e.g. MT) over longText (Montana) for US states.
 * @param {object[]} components
 * @param {string} type
 */
function findComponentShort(components, type) {
  if (!Array.isArray(components)) return null;
  for (const c of components) {
    if (Array.isArray(c.types) && c.types.includes(type)) {
      return c.shortText || c.short_name || c.longText || c.long_name || "";
    }
  }
  return null;
}

/**
 * @param {object} place
 * @returns {{ street: string, city: string, state: string, zip: string, country: string, country_code: string }}
 */
export function parsePlaceAddress(place) {
  const components = place.addressComponents || place.address_components || [];
  const streetNumber = findComponent(components, "street_number") || "";
  const route = findComponent(components, "route") || "";
  const city =
    findComponent(components, "locality") ||
    findComponent(components, "postal_town") ||
    findComponent(components, "sublocality") ||
    "";
  const state = findComponentShort(components, "administrative_area_level_1") || "";
  const zip = findComponent(components, "postal_code") || "";
  const country = findComponent(components, "country") || "United States";
  const countryCode = findComponent(components, "country") || "US";

  let countryCodeShort = "US";
  for (const c of components) {
    if (Array.isArray(c.types) && c.types.includes("country")) {
      countryCodeShort = c.shortText || c.short_name || "US";
    }
  }

  const street = [streetNumber, route].filter(Boolean).join(" ").trim();

  return {
    street,
    city,
    state,
    zip,
    country: state && zip ? `${state} ${zip}` : state || zip || country,
    country_code: countryCodeShort,
  };
}

/**
 * Parse "City ST" or "City ST ZIP" from grid city string when components missing.
 * @param {string} cityGrid
 */
export function parseCityGrid(cityGrid) {
  const m = cityGrid.trim().match(/^(.+?)\s+([A-Z]{2})(?:\s+(\d{5}))?$/i);
  if (!m) return { city: cityGrid.trim(), state: "" };
  return { city: m[1].trim(), state: m[2].toUpperCase() };
}
