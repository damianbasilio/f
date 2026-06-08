/**
 * Google Places API (New) — Text Search with Enterprise field mask.
 */

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.addressComponents",
  "places.nationalPhoneNumber",
  "places.rating",
  "places.userRatingCount",
  "places.googleMapsUri",
  "places.websiteUri",
  "places.types",
].join(",");

const PLACES_URL = "https://places.googleapis.com/v1/places:searchText";

/**
 * @param {string} textQuery
 * @param {string} apiKey
 * @param {object} [opts]
 * @param {number} [opts.maxPages] extra pages after the first (each page = 1 API request, up to 20 places)
 */
export async function searchPlaces(textQuery, apiKey, opts = {}) {
  const maxPages = Math.max(1, Math.min(opts.maxPages ?? 1, 3));
  /** @type {object[]} */
  const all = [];

  let pageToken;
  let pagesFetched = 0;
  for (let page = 0; page < maxPages; page++) {
    /** @type {Record<string, unknown>} */
    const body = {
      textQuery,
      pageSize: 20,
      includePureServiceAreaBusinesses: true,
    };
    if (pageToken) body.pageToken = pageToken;

    const res = await fetch(PLACES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg = data.error?.message || data.message || res.statusText;
      throw new Error(`Places API ${res.status}: ${msg}`);
    }

    all.push(...(data.places || []));
    pagesFetched += 1;
    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }

  return { places: all, pagesFetched: pagesFetched || 1 };
}

/**
 * @param {number} ms
 */
export function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
