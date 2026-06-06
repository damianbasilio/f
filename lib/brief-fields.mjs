/**
 * Parse business address and map location from brief.md fields.
 */
export function parseBusinessAddress(brief) {
  const loc = brief.match(/\*\*Location:\*\*\s*(.+)/i)?.[1]?.trim();
  if (!loc) return null;
  if (/^tbd$/i.test(loc)) return null;
  if (loc.length < 10) return null;
  return loc;
}

/**
 * @param {string} brief
 * @returns {{ lat: number, lng: number } | null}
 */
export function parseBusinessCoordinates(brief) {
  const m = brief.match(/\*\*Coordinates:\*\*\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/i);
  if (!m) return null;
  const lat = Number(m[1]);
  const lng = Number(m[2]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;
  return { lat, lng };
}

/**
 * @param {{ lat: number, lng: number }} coords
 * @returns {string}
 */
export function formatCoordinateQuery(coords) {
  return `${coords.lat},${coords.lng}`;
}

/**
 * Map embed query: coordinates take precedence over text address.
 * @param {string} brief
 * @returns {string | null}
 */
export function resolveMapQuery(brief) {
  const coords = parseBusinessCoordinates(brief);
  if (coords) return formatCoordinateQuery(coords);
  return parseBusinessAddress(brief);
}

export function hasUsableAddress(brief) {
  return parseBusinessAddress(brief) !== null;
}

export function hasUsableMapLocation(brief) {
  return resolveMapQuery(brief) !== null;
}
