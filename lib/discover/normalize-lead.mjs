/**
 * Normalize a Google Place + discovery context into a candidate lead object.
 */
import { parsePlaceAddress, parseCityGrid } from "./parse-address.mjs";
import { mapCategory } from "./map-category.mjs";
import { extractFacebookUrl } from "./filters.mjs";

/**
 * @param {object} place — Google Places API place object
 * @param {{ query: string, city: string, category: string }} context
 * @param {{ googleFirstUrl?: string, facebook?: string }} [serp]
 */
export function normalizeCandidate(place, context, serp = {}) {
  const addr = parsePlaceAddress(place);
  const gridCity = parseCityGrid(context.city);
  const city = addr.city || gridCity.city;
  const name = place.displayName?.text || place.name || "";

  const websiteUri = place.websiteUri || "";
  let facebook = serp.facebook || extractFacebookUrl(websiteUri) || "";
  const url = facebook || websiteUri || "";

  const placeId = place.id || place.place_id || "";
  const googleMapsUrl = place.googleMapsUri || place.google_maps_uri || "";

  return {
    name: String(name).trim(),
    street: addr.street,
    city,
    country: addr.country,
    country_code: addr.country_code || "US",
    url,
    facebook,
    phone_number: place.nationalPhoneNumber || place.formatted_phone_number || "",
    review_score: place.rating != null ? Number(place.rating) : null,
    google_maps_url: googleMapsUrl,
    google_first_url: serp.googleFirstUrl || "",
    business_category: mapCategory(place.types, context.category),
    published: new Date().toISOString(),
    place_id: placeId,
    discovery_query: context.query,
  };
}

/**
 * Strip discovery-only fields for import-ready output.
 * @param {object} lead
 */
export function toImportLead(lead) {
  const { place_id, discovery_query, ...rest } = lead;
  return rest;
}
