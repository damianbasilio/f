import { parse } from "node-html-parser";
import { mapZoomForAddress, normalizeMapQuery, resolveMapAddress } from "./map-address.mjs";

const MAP_HOST_RE = /google\.com\/maps|maps\.google\.com/i;
const COORDINATE_QUERY_RE = /^-?\d+(?:\.\d+)?,\s*-?\d+(?:\.\d+)?$/;

export function isCoordinateQuery(query) {
  return COORDINATE_QUERY_RE.test(String(query).trim());
}

export function googleMapsEmbedUrl(address, { zoom } = {}) {
  const raw = String(address).trim();
  const query = isCoordinateQuery(raw) ? raw.replace(/\s+/g, "") : normalizeMapQuery(address) || raw;
  const q = encodeURIComponent(query);
  const z = zoom ?? (isCoordinateQuery(query) ? 16 : mapZoomForAddress(query));
  return `https://www.google.com/maps?q=${q}&hl=en&z=${z}&output=embed`;
}

export function googleMapsDirectionsUrl(address) {
  const query = normalizeMapQuery(address) || String(address).trim();
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export { resolveMapAddress, normalizeMapQuery, scoreAddressPrecision } from "./map-address.mjs";

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

export const MAP_PRECONNECT_ORIGINS = [
  "https://www.google.com",
  "https://maps.googleapis.com",
  "https://maps.gstatic.com",
];

export function buildMapIframeHtml({ address, businessName = "this business" }) {
  const embedUrl = googleMapsEmbedUrl(address);
  const title = escapeAttr(`Map showing location of ${businessName}`);
  return `<iframe title="${title}" loading="eager" fetchpriority="high" referrerpolicy="no-referrer-when-downgrade" src="${escapeAttr(embedUrl)}" allowfullscreen></iframe>`;
}

function ensureMapPreconnectInHead(head) {
  if (!head) return [];
  const added = [];
  for (const origin of MAP_PRECONNECT_ORIGINS) {
    if (head.querySelector(`link[rel="preconnect"][href="${origin}"]`)) continue;
    head.insertAdjacentHTML(
      "beforeend",
      `<link rel="preconnect" href="${origin}" crossorigin data-map-preconnect="outreach" />`
    );
    added.push(`preconnect ${origin}`);
  }
  return added;
}

/** Static audit: map should load on page load, not when scrolled into view. */
export function auditMapLoadBehavior(html) {
  if (!pageHasGoogleMap(html)) return [];

  const issues = [];
  const doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  for (const iframe of doc.querySelectorAll(
    'iframe[src*="google.com/maps"], iframe[src*="maps.google.com"]'
  )) {
    if ((iframe.getAttribute("loading") || "").toLowerCase() === "lazy") {
      issues.push('Google Maps iframe uses loading="lazy" (map waits until scroll)');
    }
  }

  const head = doc.querySelector("head");
  if (head) {
    for (const origin of MAP_PRECONNECT_ORIGINS) {
      if (!head.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        issues.push(`Missing preconnect for ${origin}`);
      }
    }
  }

  return issues;
}

/** Ensure map iframes load immediately and Google Maps origins are preconnected. */
export function ensureMapEagerLoading(html) {
  if (!pageHasGoogleMap(html)) return { html, changed: false, changes: [] };

  const hadDoctype = /^<!DOCTYPE html>/i.test(html.trimStart());
  const doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });
  const changes = [];
  let changed = false;

  for (const iframe of doc.querySelectorAll(
    'iframe[src*="google.com/maps"], iframe[src*="maps.google.com"]'
  )) {
    if ((iframe.getAttribute("loading") || "").toLowerCase() === "lazy") {
      iframe.setAttribute("loading", "eager");
      changes.push("map iframe: eager load (was lazy)");
      changed = true;
    }
    if (iframe.getAttribute("fetchpriority") !== "high") {
      iframe.setAttribute("fetchpriority", "high");
      changes.push("map iframe: fetchpriority high");
      changed = true;
    }
  }

  for (const hint of ensureMapPreconnectInHead(doc.querySelector("head"))) {
    changes.push(hint);
    changed = true;
  }

  if (!changed) return { html, changed: false, changes: [] };

  let out = doc.toString();
  if (hadDoctype && !/^<!DOCTYPE html>/i.test(out.trimStart())) {
    out = "<!DOCTYPE html>\n" + out;
  }
  return { html: out, changed: true, changes: [...new Set(changes)] };
}

export const MAP_CSS_MARKER_START = "/* map-embed (outreach) */";
export const MAP_CSS_MARKER_END = "/* end map-embed (outreach) */";

export function buildMapDirectionsOverlayHtml(address, { onDark = false } = {}) {
  const directionsUrl = googleMapsDirectionsUrl(address);
  const darkClass = onDark ? " map-directions-overlay--on-dark" : "";
  return `<a class="map-directions-overlay${darkClass}" href="${escapeAttr(directionsUrl)}" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" aria-hidden="true">directions</span><span>Directions</span></a>`;
}

/** @deprecated Use overlay inside .map-slot; kept for fallback append-only injection */
export function buildMapDirectionsHtml(address) {
  return buildMapDirectionsOverlayHtml(address);
}

export function buildMapEmbedHtml({ address, businessName = "this business" }) {
  return `<div class="map-embed map-embed--fill" data-map-embed>
  ${buildMapIframeHtml({ address, businessName })}
</div>`;
}

function findVisitRoot(body) {
  const byId =
    body.querySelector("#visit") ||
    body.querySelector("#location") ||
    body.querySelector("#directions");
  if (byId) return byId;

  for (const h of body.querySelectorAll("h1, h2, h3")) {
    const text = (h.text || "").trim();
    if (/visit|find us|our location|get directions|plan your visit/i.test(text)) {
      const section = h.closest("section");
      if (section) return section;
    }
  }

  const mapIcon = body.querySelector('[data-icon="map"]');
  if (mapIcon) {
    const section = mapIcon.closest("section");
    if (section) return section;
  }

  const loc = body.querySelector("[data-location]");
  if (loc) {
    const section = loc.closest("section");
    if (section) return section;
  }

  return null;
}

function isMapPanelClass(className = "") {
  const hasPositioning = /(?:^|\s)(?:relative|absolute|overflow-hidden)(?:\s|$)/.test(className);
  const hasHeight = /(?:^|\s)(?:min-h-|h-\[|h-\d|h-full|aspect-)/.test(className);
  return hasPositioning && hasHeight;
}

function nodeContains(ancestor, node) {
  let n = node;
  while (n) {
    if (n === ancestor) return true;
    n = n.parentNode;
  }
  return false;
}

function climbToMapPanel(el) {
  let node = el;
  for (let depth = 0; depth < 8 && node; depth++) {
    if (node.tagName !== "DIV") {
      node = node.parentNode;
      continue;
    }
    const cls = node.getAttribute("class") || "";
    if (isMapPanelClass(cls)) return node;
    node = node.parentNode;
  }
  return null;
}

/**
 * Find the Stitch placeholder column where the live map should render.
 */
export function findMapPlaceholderHost(body) {
  const visit = findVisitRoot(body);
  if (!visit) return null;

  const explicit =
    visit.querySelector("[data-map-slot]") ||
    visit.querySelector(".map-placeholder") ||
    visit.querySelector("#map") ||
    visit.querySelector(".map-slot");
  if (explicit) return explicit;

  const emptySlot = visit.querySelector(".map-embed[data-map-embed]:empty");
  if (emptySlot) return emptySlot.parentNode || emptySlot;

  const locStub = visit.querySelector("[data-location]");
  if (locStub) {
    const panel = climbToMapPanel(locStub);
    if (panel && nodeContains(visit, panel)) return panel;
  }

  const mapIcon = visit.querySelector('[data-icon="map"]');
  if (mapIcon) {
    const panel = climbToMapPanel(mapIcon);
    if (panel && nodeContains(visit, panel)) return panel;
  }

  for (const panel of visit.querySelectorAll("div")) {
    const cls = panel.getAttribute("class") || "";
    if (!isMapPanelClass(cls)) continue;
    if (
      panel.querySelector('[data-icon="map"]') ||
      panel.querySelector("[data-location]") ||
      /interactive\s+map/i.test(panel.text || "")
    ) {
      return panel;
    }
  }

  return null;
}

function removeOrphanMapBlocks(visit, keepInside) {
  if (!visit) return 0;
  let removed = 0;
  for (const embed of [...visit.querySelectorAll(".map-embed")]) {
    if (keepInside && (keepInside === embed || nodeContains(keepInside, embed))) continue;
    const directions = embed.nextElementSibling;
    embed.remove();
    removed++;
    if (directions?.classList?.contains("map-directions")) {
      directions.remove();
      removed++;
    }
  }
  for (const directions of [...visit.querySelectorAll("p.map-directions, .map-directions")]) {
    if (keepInside && nodeContains(keepInside, directions)) continue;
    directions.remove();
    removed++;
  }
  return removed;
}

function ensureMapSlotClasses(host) {
  const cls = host.getAttribute("class") || "";
  const add = ["map-slot", "relative", "overflow-hidden"].filter((c) => !cls.includes(c));
  if (add.length) host.setAttribute("class", `${cls} ${add.join(" ")}`.trim());
}

function hostUsesDarkMapChrome(host) {
  const cls = host.getAttribute("class") || "";
  return /charcoal|void|ink-depth|impact-purple|deep-charcoal|bg-black|bg-tertiary|tertiary\b/i.test(cls);
}

function mountMapInHost(host, { address, businessName }) {
  ensureMapSlotClasses(host);
  const onDark = hostUsesDarkMapChrome(host);
  host.innerHTML =
    buildMapEmbedHtml({ address, businessName }) +
    buildMapDirectionsOverlayHtml(address, { onDark });
  removeLegacyDirectionsSiblings(host);
  return host.querySelector(".map-embed");
}

function findLegacyVisitMapGrid(visit) {
  return visit?.querySelector(".visit-grid, [class*='visit-grid']") || null;
}

/** Batch-1 style sites: map belongs inside .visit-grid (second column), not below the section. */
function mountLegacyVisitMap(visit, { address, businessName }) {
  const grid = findLegacyVisitMapGrid(visit);
  if (!grid) return false;

  for (const orphan of visit.querySelectorAll(":scope > .map-slot")) {
    orphan.remove();
  }

  let cell = grid.querySelector(":scope > .visit-map-slot[data-map-slot]");
  if (!cell) {
    grid.insertAdjacentHTML(
      "beforeend",
      `<div class="visit-map-slot map-slot relative overflow-hidden min-h-[280px]" data-map-slot aria-label="Map"></div>`
    );
    cell = grid.querySelector(":scope > .visit-map-slot");
  }
  mountMapInHost(cell, { address, businessName });
  return true;
}

function removeLegacyDirectionsSiblings(host) {
  const scope = host.closest("section") || host.parentNode;
  if (!scope) return;

  for (const el of [...scope.querySelectorAll("p.map-directions, .map-directions:not(.map-directions-overlay)")]) {
    if (nodeContains(host, el)) continue;
    el.remove();
  }

  let sib = host.nextElementSibling;
  while (sib && (sib.classList?.contains("map-directions") || sib.tagName === "P")) {
    const cls = sib.getAttribute("class") || "";
    if (!cls.includes("map-directions")) break;
    const next = sib.nextElementSibling;
    sib.remove();
    sib = next;
  }
}

/**
 * Ensure a Google Maps embed exists when address is known.
 * Returns { html, injected, updatedExisting, placement }.
 */
export function injectGoogleMap(html, { address, businessName = "this business", brief } = {}) {
  const resolved = resolveMapAddress({ brief, html });
  const mapAddress = resolved.address || address?.trim();
  if (!mapAddress) {
    return {
      html,
      injected: false,
      updatedExisting: false,
      placement: "none",
      mapAddress: null,
      mapSource: resolved.source,
    };
  }

  const doc = parse(html, { comment: true });
  const body = doc.querySelector("body");
  if (!body) {
    return {
      html,
      injected: false,
      updatedExisting: false,
      placement: "no-body",
      mapAddress,
      mapSource: resolved.source,
    };
  }

  const visit = findVisitRoot(body);
  const placeholderHost = findMapPlaceholderHost(body);
  const embedUrl = googleMapsEmbedUrl(mapAddress);
  let placement = "none";
  let injected = false;
  let updatedExisting = false;

  const existingIframe = body.querySelector('iframe[src*="google.com/maps"], iframe[src*="maps.google.com"]');

  if (placeholderHost) {
    const legacyGrid = visit && findLegacyVisitMapGrid(visit);
    if (legacyGrid && !nodeContains(legacyGrid, placeholderHost)) {
      removeOrphanMapBlocks(body, legacyGrid);
      mountLegacyVisitMap(visit, { address: mapAddress, businessName });
      placement = "legacy-visit-grid";
    } else {
      removeOrphanMapBlocks(body, placeholderHost);
      mountMapInHost(placeholderHost, { address: mapAddress, businessName });
      placement = "placeholder";
    }
    injected = true;
  } else if (existingIframe) {
    const retryHost = findMapPlaceholderHost(body);
    if (retryHost) {
      removeOrphanMapBlocks(body, retryHost);
      mountMapInHost(retryHost, { address: mapAddress, businessName });
      placement = "placeholder-relocated";
      injected = true;
    } else {
      const host = existingIframe.closest(".map-embed") || existingIframe.parentNode;
      existingIframe.setAttribute("src", embedUrl);
      existingIframe.setAttribute("title", `Map showing location of ${businessName}`);
      existingIframe.setAttribute("loading", "eager");
      existingIframe.setAttribute("fetchpriority", "high");
      existingIframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      existingIframe.setAttribute("allowfullscreen", "");
      if (host?.classList) {
        host.classList.add("map-embed--fill");
      }
      const slot = existingIframe.closest(".map-slot") || host?.parentNode;
      if (slot && !slot.querySelector(".map-directions-overlay")) {
        const onDark = hostUsesDarkMapChrome(slot);
        slot.insertAdjacentHTML("beforeend", buildMapDirectionsOverlayHtml(mapAddress, { onDark }));
        ensureMapSlotClasses(slot);
      }
      removeLegacyDirectionsSiblings(slot || host);
      placement = "updated-existing";
      updatedExisting = true;
    }
  } else {
    const mapSlot =
      body.querySelector("[data-map-embed]") ||
      body.querySelector(".map-embed") ||
      body.querySelector(".map-placeholder") ||
      body.querySelector("#map");

    if (mapSlot) {
      mapSlot.setAttribute("data-map-embed", "");
      mapSlot.classList.add("map-embed", "map-embed--fill");
      ensureMapSlotClasses(mapSlot);
      const onDark = hostUsesDarkMapChrome(mapSlot);
      mapSlot.innerHTML =
        `<div class="map-embed map-embed--fill" data-map-embed>${buildMapIframeHtml({ address: mapAddress, businessName })}</div>` +
        buildMapDirectionsOverlayHtml(mapAddress, { onDark });
      removeLegacyDirectionsSiblings(mapSlot);
      placement = "map-slot";
      injected = true;
    } else if (visit && mountLegacyVisitMap(visit, { address: mapAddress, businessName })) {
      removeOrphanMapBlocks(body, visit.querySelector(".visit-map-slot"));
      placement = "legacy-visit-grid";
      injected = true;
    } else {
      const target = visit || body.querySelector("#contact");
      if (target) {
        removeOrphanMapBlocks(target, null);
        const wrap = `<div class="map-slot relative overflow-hidden min-h-[280px]">${buildMapEmbedHtml({ address: mapAddress, businessName })}${buildMapDirectionsOverlayHtml(mapAddress)}</div>`;
        target.insertAdjacentHTML("beforeend", wrap);
        placement = "append-visit-tail";
        injected = true;
      } else {
        const footer = body.querySelector("footer");
        const section = `<section id="visit" class="visit-section" aria-labelledby="visit-heading">
  <h2 id="visit-heading">Visit us</h2>
  <p class="visit-address">${escapeAttr(mapAddress)}</p>
  <div class="map-slot relative overflow-hidden min-h-[280px]">${buildMapEmbedHtml({ address: mapAddress, businessName })}${buildMapDirectionsOverlayHtml(mapAddress)}</div>
</section>`;
        if (footer) footer.insertAdjacentHTML("beforebegin", section);
        else body.insertAdjacentHTML("beforeend", section);
        placement = "new-visit-section";
        injected = true;
      }
    }
  }

  if (injected || updatedExisting) {
    const head = doc.querySelector("head");
    if (head) {
      ensureMapPreconnectInHead(head);
      const meta = head.querySelector('meta[name="x-business-address"]');
      if (meta) meta.setAttribute("content", mapAddress);
      else {
        head.insertAdjacentHTML(
          "beforeend",
          `<meta name="x-business-address" content="${escapeAttr(mapAddress)}" />`
        );
      }
    }
  }

  const out = html.startsWith("<!DOCTYPE") ? doc.toString() : "<!DOCTYPE html>\n" + doc.toString();
  return {
    html: out.startsWith("<!DOCTYPE") ? out : "<!DOCTYPE html>\n" + out,
    injected: injected || updatedExisting,
    updatedExisting,
    placement,
    mapAddress,
    mapSource: resolved.source,
    mapPrecision: resolved.precision,
  };
}

export function pageHasGoogleMap(html) {
  return MAP_HOST_RE.test(html) && /<iframe\b/i.test(html);
}

export const MAP_CSS_SNIPPET = `${MAP_CSS_MARKER_START}
.map-slot {
  position: relative;
  min-height: 280px;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  background: #e8eaed;
}
.map-shell:has(> .map-slot) {
  min-height: 0 !important;
  height: auto !important;
  width: 100%;
}
.map-slot > .map-embed,
.map-embed.map-embed--fill {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0 !important;
  padding: 0;
  aspect-ratio: unset !important;
  min-height: 0 !important;
  border-radius: inherit;
  background: transparent !important;
  box-shadow: none;
}
.map-slot > .map-embed iframe,
.map-embed.map-embed--fill iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
.map-directions-overlay {
  position: absolute;
  z-index: 4;
  bottom: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem 0.45rem 0.65rem;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: rgba(18, 18, 18, 0.92);
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}
.map-directions-overlay .material-symbols-outlined {
  font-size: 1.125rem;
  line-height: 1;
}
.map-directions-overlay:hover {
  color: #111;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}
.map-directions-overlay:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.map-directions-overlay.map-directions-overlay--on-dark {
  color: rgba(255, 255, 255, 0.95);
  background: rgba(28, 28, 28, 0.9);
  border-color: rgba(255, 255, 255, 0.18);
}
.map-directions-overlay.map-directions-overlay--on-dark:hover {
  color: #fff;
  background: rgba(40, 40, 40, 0.96);
}
p.map-directions {
  display: none !important;
  margin: 0 !important;
}
.visit-grid > .visit-map-slot.map-slot {
  min-height: 280px;
  width: 100%;
}
@media (min-width: 768px) {
  .visit-grid:has(> .visit-map-slot) {
    grid-template-columns: minmax(220px, 1fr) minmax(260px, 1fr);
    align-items: stretch;
  }
  .visit-grid:has(> .visit-map-slot) > .visit-map-slot {
    grid-column: 2;
    grid-row: 1 / -1;
    min-height: 320px;
    height: 100% !important;
    aspect-ratio: unset !important;
    align-self: stretch;
  }
  .map-shell:has(> .map-slot) {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .map-shell > .map-slot {
    flex: 1 1 auto;
    height: 100% !important;
    aspect-ratio: unset !important;
    min-height: 280px;
    align-self: stretch;
  }
}
@media (max-width: 767px) {
  .map-shell:has(> .map-slot) {
    min-height: 0 !important;
    height: auto !important;
  }
}
${MAP_CSS_MARKER_END}
`;

/** Insert or replace marked map CSS block in styles.css */
export function applyMapStylesToCss(css) {
  const blockRe = /\/\* map-embed \(outreach\) \*\/[\s\S]*?\/\* end map-embed \(outreach\) \*\/\n?/g;
  let out = css.replace(blockRe, "");
  out = out.replace(
    /^\.map-slot\s*\{[\s\S]*?^\.map-slot > \.map-embed iframe\s*\{[\s\S]*?\}\n+/m,
    ""
  );
  out = out.replace(
    /\.map-directions \{\s*margin-top:[\s\S]*?\.map-directions a:focus-visible\s*\{[\s\S]*?\}\n?/g,
    ""
  );
  const marker = "/* Outreach mockup chrome */";
  if (out.includes(marker)) {
    return out.replace(marker, `${MAP_CSS_SNIPPET}\n${marker}`);
  }
  return `${MAP_CSS_SNIPPET}\n${out}`;
}
