import { parse } from "node-html-parser";
import {
  parseBusinessAddress,
  parseBusinessCoordinates,
  formatCoordinateQuery,
} from "./brief-fields.mjs";

const STREET_SUFFIX =
  /\b(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Boulevard|Dr|Drive|Ln|Lane|Way|Court|Ct|Hwy|Highway|Pkwy|Parkway|Plaza|Pl)\b/i;

const US_STREET_LINE =
  /\b\d{1,6}\s+(?:[NSEW]\.?\s+)?[\w.'º½-]+(?:\s+[\w.'º½-]+){0,6}\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Boulevard|Dr|Drive|Ln|Lane|Way|Court|Ct|Hwy|Highway|Pkwy|Parkway|Plaza|Pl)(?:\s*(?:#|Suite|Ste\.?|Unit)\s*[\w-]+)?/gi;

const US_FULL =
  /\b\d{1,6}\s+(?:[NSEW]\.?\s+)?[\w.'º½-]+(?:\s+[\w.'º½-]+){0,6}\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Boulevard|Dr|Drive|Ln|Lane|Way|Court|Ct|Hwy|Highway|Pkwy|Parkway|Plaza|Pl)(?:\s*(?:#|Suite|Ste\.?|Unit)\s*[\w-]+)?\s*,\s*[^,\n;]+,\s*[A-Z]{2}(?:\s+\d{5}(?:-\d{4})?)?/gi;

const CITY_STATE_ZIP =
  /\b([A-Za-z][A-Za-z\s.'-]{1,40}),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)\b/g;

const CITY_STATE =
  /\b([A-Za-z][A-Za-z\s.'-]{1,40}),\s*([A-Za-z]{2,20})(?:\s+(\d{5}(?:-\d{4})?))?\b/g;

const CANADA_FULL =
  /\b\d{1,6}\s+[\w.'º½-]+(?:\s+[\w.'º½-]+){0,4}\s+(?:Rd|Road|St|Street|Ave|Avenue|Blvd|Boulevard|Dr|Drive|Way|Lane|Ln)\s*,\s*[^,\n]+,\s*[A-Z]{2}\s+[A-Z]\d[A-Z]\s?\d[A-Z]\d\b/gi;

const STATE_NAMES = new Set([
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut",
  "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa",
  "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan",
  "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada",
  "new hampshire", "new jersey", "new mexico", "new york", "north carolina",
  "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island",
  "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont",
  "virginia", "washington", "west virginia", "wisconsin", "wyoming",
  "united states", "canada", "ontario", "quebec", "british columbia",
]);

function collapseWs(s) {
  return String(s).replace(/\s+/g, " ").trim();
}

function hasStreetNumber(s) {
  return /\b\d{1,6}\s+[A-Za-z]/.test(s);
}

function isNoiseFragment(s) {
  const t = s.toLowerCase();
  if (t.length < 6) return true;
  if (t.length > 120) return true;
  if (/^(preview|email|phone|hours|mon|tue|wed)/i.test(t)) return true;
  if (/^\(\d{3}\)/.test(t)) return true;
  if (/©|copyright|licensing|certified contractor|preview only|directions/i.test(t)) return true;
  if (/\d{1,2}:\d{2}\s*[ap]m/i.test(t)) return true;
  if (/location_on|contact_support|schedule/i.test(t)) return true;
  return false;
}

/**
 * Score how pin-friendly an address string is (higher = more precise).
 */
export function scoreAddressPrecision(address) {
  if (!address) return 0;
  if (/^-?\d+(?:\.\d+)?,\s*-?\d+(?:\.\d+)?$/.test(String(address).trim())) return 70;
  const s = collapseWs(address);
  let score = 0;
  if (hasStreetNumber(s)) score += 50;
  if (STREET_SUFFIX.test(s)) score += 25;
  if (/\b\d{5}(?:-\d{4})?\b/.test(s)) score += 15;
  if (/\b[A-Z]\d[A-Z]\s?\d[A-Z]\d\b/i.test(s)) score += 15;
  if (/,/.test(s)) score += 5;
  if (/\bcounty\b/i.test(s)) score += 12;
  if (/\b(suite|ste\.?|unit|#)\s*\w+/i.test(s)) score += 5;
  if (/\b(verify|statewide|homestead|region|—|–)\b/i.test(s)) score -= 20;
  if (/\([^)]{40,}\)/.test(s)) score -= 15;
  if (/^\s*[A-Za-z\s]+,\s*(?:[A-Z]{2}|[A-Za-z]+)\s*$/i.test(s.replace(/\([^)]*\)/g, "").trim()) && !hasStreetNumber(s)) {
    score -= 10;
  }
  if (/^(florida|arizona|california|texas|united states)\b/i.test(s) && !hasStreetNumber(s)) score -= 25;
  return score;
}

function expandVirginia(text) {
  return text.replace(/\bVirginia\b/gi, "VA");
}

function matchAll(re, text) {
  const flags = re.flags.includes("g") ? re.flags : re.flags + "g";
  const r = new RegExp(re.source, flags);
  return [...text.matchAll(r)].map((m) => collapseWs(m[0]));
}

/**
 * Pull plausible map query strings out of free text.
 */
export function extractAddressesFromText(text) {
  if (!text) return [];
  let normalized = expandVirginia(collapseWs(text.replace(/<br\s*\/?>/gi, ", ")));
  normalized = normalized.replace(
    /\b(Ave|Avenue|St|Street|Rd|Road|Blvd|Boulevard|Dr|Drive|Ln|Lane|Way|Court|Ct)\s+(?=[A-Z][a-z])/gi,
    "$1, "
  );
  const found = new Set();

  for (const m of matchAll(US_FULL, normalized)) found.add(m);
  for (const m of matchAll(CANADA_FULL, normalized)) found.add(m);
  for (const m of matchAll(US_STREET_LINE, normalized)) {
    const idx = normalized.indexOf(m);
    const tail = normalized.slice(idx, idx + m.length + 80);
    const full = tail.match(US_FULL)?.[0];
    found.add(full || m);
  }

  for (const m of [...normalized.matchAll(CITY_STATE_ZIP)]) {
    found.add(`${m[1]}, ${m[2]} ${m[3]}`);
  }

  for (const m of [...normalized.matchAll(CITY_STATE)]) {
    const city = m[1]?.trim();
    const region = m[2]?.trim();
    if (!city || !region) continue;
    if (STATE_NAMES.has(region.toLowerCase()) && !m[3]) {
      found.add(`${city}, ${region}`);
      continue;
    }
    if (region.length === 2) {
      found.add(m[3] ? `${city}, ${region} ${m[3]}` : `${city}, ${region}`);
    }
  }

  return [...found].filter((s) => !isNoiseFragment(s));
}

/**
 * Prefer street inside parentheses when the outer brief text is city-only noise.
 */
export function normalizeMapQuery(raw) {
  if (!raw) return null;
  let s = collapseWs(expandVirginia(raw));

  const parenChunks = [...s.matchAll(/\(([^)]+)\)/g)].map((m) => m[1]);
  for (const inner of parenChunks) {
    const innerCandidates = extractAddressesFromText(inner);
    const innerBest = pickBestCandidate(innerCandidates);
    const outerSans = collapseWs(s.replace(/\([^)]*\)/g, " "));
    if (innerBest && scoreAddressPrecision(innerBest) > scoreAddressPrecision(outerSans) + 8) {
      return innerBest;
    }
  }

  const extracted = extractAddressesFromText(s);
  const best = pickBestCandidate(extracted);
  if (best && scoreAddressPrecision(best) >= scoreAddressPrecision(s)) return best;

  if (hasStreetNumber(s)) {
    s = collapseWs(s.replace(/\s*\([^)]*\)\s*/g, " "));
    s = s.replace(/,\s*United States\b/i, "");
    s = s.replace(/,\s*Canada\b/i, "");
    return s;
  }

  s = collapseWs(s.replace(/\s*\([^)]*\)\s*/g, " "));
  s = s.replace(/\s*—\s*verify[^.]*$/i, "");
  s = s.replace(/,\s*United States\b/i, "");
  return s || null;
}

function pickBestCandidate(candidates) {
  let best = null;
  let bestScore = -1;
  for (const c of candidates) {
    const sc = scoreAddressPrecision(c);
    if (sc > bestScore) {
      bestScore = sc;
      best = c;
    }
  }
  return best;
}

function findVisitRoot(doc) {
  return (
    doc.querySelector("#visit") ||
    doc.querySelector("#location") ||
    doc.querySelector("#directions") ||
    null
  );
}

/**
 * Collect address candidates from rendered page HTML.
 */
export function extractAddressesFromHtml(html) {
  const doc = parse(html, { comment: true });
  const candidates = [];

  for (const el of doc.querySelectorAll("address")) {
    const text = collapseWs(el.innerHTML.replace(/<br\s*\/?>/gi, ", ").replace(/<[^>]+>/g, " "));
    if (text) candidates.push(text);
  }

  for (const el of doc.querySelectorAll("[data-location]")) {
    const v = el.getAttribute("data-location") || el.text;
    if (v?.trim()) candidates.push(v.trim());
  }

  const visit = findVisitRoot(doc);
  if (visit) {
    for (const h of visit.querySelectorAll("h2, h3, h4")) {
      const t = (h.text || "").trim();
      if (/^serving\s+/i.test(t)) candidates.push(t.replace(/^serving\s+/i, ""));
    }
    for (const icon of visit.querySelectorAll(
      '[data-icon="location_on"], [data-icon="map"], .material-symbols-outlined'
    )) {
      const label = (icon.text || icon.getAttribute("data-icon") || "").toLowerCase();
      if (!label.includes("location") && label !== "location_on" && label !== "map") continue;
      const row = icon.closest('[class*="flex"]') || icon.parentElement;
      if (!row) continue;
      const lines = [...row.querySelectorAll("p")]
        .map((p) => collapseWs(p.text))
        .filter(
          (t) =>
            t &&
            !/^(address|office|our location|pickup hours|get in touch|phone|email|hours)/i.test(t)
        );
      if (lines.length >= 2 && hasStreetNumber(lines[0])) {
        candidates.push(lines.join(", "));
      } else if (lines.length >= 1) {
        for (const line of lines) {
          if (!isNoiseFragment(line)) candidates.push(line);
        }
      }
    }
  }

  for (const a of doc.querySelectorAll('a[href*="maps.google"], a[href*="google.com/maps"]')) {
    const href = a.getAttribute("href") || "";
    const q = href.match(/[?&]q=([^&]+)/i)?.[1];
    if (q) candidates.push(decodeURIComponent(q.replace(/\+/g, " ")));
  }

  const normalized = [];
  for (const c of candidates) {
    for (const addr of extractAddressesFromText(c)) {
      if (!isNoiseFragment(addr)) normalized.push(addr);
    }
    const single = normalizeMapQuery(c);
    if (single && !isNoiseFragment(single)) normalized.push(single);
  }

  return [...new Set(normalized.filter(Boolean))];
}

/**
 * Choose the best map query: prefer a precise on-page address over a vague brief location.
 */
export function resolveMapAddress({ brief, html }) {
  const briefCoords = brief ? parseBusinessCoordinates(brief) : null;
  const coordNorm = briefCoords ? formatCoordinateQuery(briefCoords) : null;
  const briefRaw = brief ? parseBusinessAddress(brief) : null;
  const briefNorm = briefRaw ? normalizeMapQuery(briefRaw) : null;
  const htmlCandidates = (html ? extractAddressesFromHtml(html) : []).filter(
    (c) => scoreAddressPrecision(c) >= 12 && c.length <= 100
  );

  const ranked = [];
  if (coordNorm) {
    ranked.push({ value: coordNorm, source: "coordinates", score: scoreAddressPrecision(coordNorm) });
  }
  if (briefNorm) {
    ranked.push({ value: briefNorm, source: "brief", score: scoreAddressPrecision(briefNorm) });
  }
  for (const c of htmlCandidates) {
    ranked.push({ value: c, source: "html", score: scoreAddressPrecision(c) });
  }

  ranked.sort((a, b) => b.score - a.score);
  const briefScore = briefNorm ? scoreAddressPrecision(briefNorm) : 0;
  const htmlBest = ranked.find((r) => r.source === "html");

  let chosen = ranked[0] || null;
  if (htmlBest && htmlBest.score >= 40 && htmlBest.score > briefScore + 5) {
    chosen = htmlBest;
  } else if (htmlBest && briefScore < 35 && htmlBest.score >= 20 && htmlBest.score > briefScore) {
    chosen = htmlBest;
  } else if (htmlBest && briefScore <= 15 && htmlBest.score >= 12) {
    chosen = htmlBest;
  } else if (briefNorm && briefScore >= (htmlBest?.score ?? 0)) {
    chosen = ranked.find((r) => r.source === "brief") || chosen;
  }

  let address = chosen?.value || coordNorm || briefNorm || htmlBest?.value || null;
  address = enrichWithRegionState(address, briefRaw);
  if (address) address = collapseWs(address);

  return {
    address,
    source: chosen?.source || (coordNorm ? "coordinates" : briefNorm ? "brief" : "none"),
    precision: address ? scoreAddressPrecision(address) : 0,
    briefAddress: briefRaw,
    htmlAddress: htmlBest?.value || null,
  };
}

function enrichWithRegionState(address, briefRaw) {
  if (!address) return null;
  if (/,?\s*[A-Z]{2}\s+\d{5}(?:-\d{4})?\b/.test(address)) return address;
  if (/,?\s*[A-Z]{2}\b/.test(address)) return address;
  const briefText = briefRaw || "";
  const stateFromBrief =
    briefText.match(/\b(Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)\b/i)?.[1];
  if (/county$/i.test(address) && stateFromBrief) {
    return `${address}, ${stateFromBrief}`;
  }
  if (
    scoreAddressPrecision(address) < 30 &&
    stateFromBrief &&
    !address.toLowerCase().includes(stateFromBrief.toLowerCase())
  ) {
    return `${address}, ${stateFromBrief}`;
  }
  return address;
}

export function mapZoomForAddress(address) {
  const score = scoreAddressPrecision(address);
  if (score >= 65) return 17;
  if (score >= 40) return 16;
  if (score >= 25) return 15;
  return 14;
}
