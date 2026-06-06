/**
 * Detect and auto-fix broken mobile/tablet layouts (overflow, tiny text, grid blowout).
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { pathToFileURL } from "node:url";
import { launchBrowser } from "./puppeteer-launch.mjs";
import { applyMapStylesToCss, auditMapLoadBehavior, ensureMapEagerLoading } from "./map-embed.mjs";
import { slugDir } from "./paths.mjs";

export const MOBILE_SAFETY_MARKER = "/* mobile-layout-autofix */";
export const MAP_LAYOUT_MARKER = "/* map-layout-autofix */";

function getMapLayoutCss() {
  return `${MAP_LAYOUT_MARKER}
@media (max-width: 767px) {
  .map-slot:has(> .map-embed--fill),
  .map-slot:has(> .map-embed[data-map-embed]) {
    aspect-ratio: 16 / 9;
    height: auto !important;
    min-height: 280px;
    width: 100%;
  }
  .map-shell:has(> .map-slot) {
    min-height: 0 !important;
    height: auto !important;
    aspect-ratio: unset !important;
  }
}
@media (min-width: 768px) {
  .map-shell:has(> .map-slot) {
    display: flex;
    flex-direction: column;
  }
  .map-shell > .map-slot,
  .visit-grid > .visit-map-slot.map-slot {
    flex: 1 1 auto;
    height: 100% !important;
    aspect-ratio: unset !important;
    min-height: 280px;
    align-self: stretch;
  }
}
.map-slot > .map-embed.map-embed--fill,
.map-slot > .map-embed[data-map-embed] {
  position: absolute !important;
  inset: 0 !important;
  height: 100% !important;
  margin: 0 !important;
  aspect-ratio: unset !important;
}
`;
}

function stripLegacyMapEmbedCss(css) {
  return css.replace(
    /^\.map-embed\s*\{[\s\S]*?^\.map-embed iframe\s*\{[\s\S]*?\}\n+/m,
    ""
  );
}

function ensureMapLayoutStyles(slug) {
  const cssPath = slugDir(slug, "styles.css");
  if (!fs.existsSync(cssPath)) return false;

  let css = fs.readFileSync(cssPath, "utf8");
  const before = css;
  css = stripLegacyMapEmbedCss(css);
  css = applyMapStylesToCss(css);

  const mapBlock = getMapLayoutCss();
  if (css.includes(MAP_LAYOUT_MARKER)) {
    const start = css.indexOf(MAP_LAYOUT_MARKER);
    css = `${css.slice(0, start).trimEnd()}\n\n${mapBlock}\n`;
  } else {
    const marker = "/* end map-embed (outreach) */";
    if (css.includes(marker)) {
      const idx = css.indexOf(marker) + marker.length;
      css = `${css.slice(0, idx).trimEnd()}\n\n${mapBlock}\n${css.slice(idx)}`;
    } else {
      css = `${css.trimEnd()}\n\n${mapBlock}\n`;
    }
  }

  if (css === before) return false;
  fs.writeFileSync(cssPath, css, "utf8");
  return true;
}

function patchMapForMobile(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return { changed: false, changes: [] };

  let html = fs.readFileSync(htmlPath, "utf8");
  const changes = [];
  let doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  for (const slot of doc.querySelectorAll(".map-slot, [data-map-slot]")) {
    let cls = slot.getAttribute("class") || "";

    if (/\bflex\b/.test(cls) && /\bitems-center\b/.test(cls)) {
      cls = cls
        .replace(/\bflex\b/g, "")
        .replace(/\bitems-center\b/g, "")
        .replace(/\bjustify-center\b/g, "")
        .replace(/\s+/g, " ")
        .trim();
      changes.push("map-slot: removed flex centering");
    }

    if (/\bh-full\b/.test(cls) || /\bw-full\b/.test(cls)) {
      cls = cls.replace(/\bh-full\b/g, "").replace(/\bw-full\b/g, "").replace(/\s+/g, " ").trim();
      changes.push("map-slot: removed h-full (use aspect-ratio fill)");
    }

    if (!/\baspect-video\b/.test(cls) && !/\bmin-h-\[/.test(cls)) {
      cls = `${cls} aspect-video w-full`.trim();
    }

    slot.setAttribute("class", cls);

    const parent = slot.parentNode;
    if (parent?.tagName === "DIV") {
      let pCls = parent.getAttribute("class") || "";
      const childTags = parent.childNodes.filter((n) => n.nodeType === 1);
      const mostlyMap =
        childTags.length <= 2 &&
        childTags.every((n) => {
          if (n === slot) return true;
          const c = n.getAttribute?.("class") || "";
          if (/map-directions-overlay/.test(c)) return true;
          return Boolean(n.querySelector?.(".map-slot, [data-map-slot]"));
        });

      if (mostlyMap && /min-h-\[(?:400|500|600|700)px\]/.test(pCls)) {
        pCls = pCls
          .replace(/min-h-\[(?:400|500|600|700)px\]/g, "")
          .replace(/\s+/g, " ")
          .trim();
        if (!/\bmap-shell\b/.test(pCls)) pCls = `${pCls} map-shell w-full`.trim();
        parent.setAttribute("class", pCls);
        changes.push("map-shell: removed tall min-height wrapper");
      }
    }
  }

  if (changes.length === 0) return { changed: false, changes: [] };

  html = doc.toString();
  if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;
  fs.writeFileSync(htmlPath, html, "utf8");
  return { changed: true, changes: [...new Set(changes)] };
}

function patchMapEagerLoad(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return { changed: false, changes: [] };

  const html = fs.readFileSync(htmlPath, "utf8");
  const result = ensureMapEagerLoading(html);
  if (!result.changed) return { changed: false, changes: [] };

  fs.writeFileSync(htmlPath, result.html, "utf8");
  return { changed: true, changes: result.changes };
}

function diagnoseMapLoad(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return { mapLazyLoad: false, mapLoadIssues: [] };

  const issues = auditMapLoadBehavior(fs.readFileSync(htmlPath, "utf8"));
  return { mapLazyLoad: issues.length > 0, mapLoadIssues: issues };
}

async function diagnoseMapLayout(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath) || !fs.readFileSync(htmlPath, "utf8").includes("map-slot")) {
    return { mapLayoutGap: false, mapIssues: [] };
  }

  const url = pathToFileURL(htmlPath).href;
  /** @type {import('puppeteer').Browser | null} */
  let browser = null;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const mapIssues = [];

    for (const width of [390, 1280]) {
      await page.setViewport({ width, height: 900 });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });

      const batch = await page.evaluate((vpWidth) => {
        const issues = [];
        for (const slot of document.querySelectorAll(".map-slot, [data-map-slot]")) {
          const iframe = slot.querySelector("iframe");
          if (!iframe) continue;
          const slotR = slot.getBoundingClientRect();
          const iframeR = iframe.getBoundingClientRect();
          const parent = slot.parentElement;
          const parentR = parent?.getBoundingClientRect();
          const iframeGap = Math.round(slotR.height - iframeR.height);

          const pCls = parent?.getAttribute("class") || "";
          const childCount = parent
            ? [...parent.childNodes].filter((n) => n.nodeType === 1).length
            : 0;
          const isMapShell =
            /\bmap-shell\b/.test(pCls) ||
            /\bvisit-grid\b/.test(pCls) ||
            (/min-h-\[/.test(pCls) &&
              childCount <= 2 &&
              [...parent.children].every((n) => {
                const c = n.getAttribute?.("class") || "";
                return n === slot || /map-directions-overlay/.test(c);
              }));

          const parentGap =
            isMapShell && parentR ? Math.round(parentR.height - slotR.height) : 0;

          if (iframeGap > 24 || parentGap > 24) {
            issues.push({
              viewport: vpWidth,
              iframeGap,
              parentGap,
              slotH: Math.round(slotR.height),
              iframeH: Math.round(iframeR.height),
              parentH: parentR ? Math.round(parentR.height) : 0,
            });
          }
        }
        return issues;
      }, width);

      mapIssues.push(...batch);
    }

    return { mapLayoutGap: mapIssues.length > 0, mapIssues };
  } finally {
    await browser?.close();
  }
}

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 900 },
];

export function getMobileSafetyCss() {
  return `${MOBILE_SAFETY_MARKER}
html { overflow-x: clip; }
body { overflow-x: clip; max-width: 100%; }
img, video, svg, picture { max-width: 100%; height: auto; }
.map-slot iframe, .map-embed iframe, .map-embed--fill iframe {
  height: 100% !important;
  max-width: none !important;
  width: 100% !important;
}
main, section, header, footer, nav, article, form { max-width: 100%; }
.grid, .flex, [class*="grid"], [class*="flex"] { min-width: 0; max-width: 100%; }
.grid > *, .flex > *, [class*="col-span"] { min-width: 0; }
section, header, main, .split-hero-container, [class*="hero"] { overflow-x: clip; }
.absolute[class*="-right-"], .absolute[class*="-left-"], .absolute[class*="-top-"] {
  max-width: 100vw;
  pointer-events: none;
}
.mockup-notice { max-width: 100%; box-sizing: border-box; }
.full-width, [class*="full-width"], .w-screen, [class*="w-screen"] {
  width: 100% !important;
  max-width: 100% !important;
}
footer, nav.full-width, header.full-width { overflow-x: clip; box-sizing: border-box; }
@media (max-width: 1023px) {
  [class*="scale-105"], [class*="scale-110"], [class*="scale-125"], [class*="hover:scale"] {
    transform: none !important;
  }
  .grid[class*="md:grid-cols-12"], .grid[class*="md:grid-cols-6"] {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
  .grid[class*="md:grid-cols-12"] > [class*="md:col-span"],
  .grid[class*="md:grid-cols-6"] > [class*="md:col-span"] {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  [class*="px-margin-desktop"] {
    padding-left: max(1rem, env(safe-area-inset-left)) !important;
    padding-right: max(1rem, env(safe-area-inset-right)) !important;
  }
}
@media (max-width: 767px) {
  header nav.flex, nav.flex.justify-between, header > nav {
    gap: 0.5rem !important;
    min-width: 0 !important;
  }
  header nav.flex > :first-child,
  nav.flex > :first-child {
    min-width: 0 !important;
    flex: 1 1 auto !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }
  header nav .nav-actions-mobile,
  nav .nav-actions-mobile {
    flex-shrink: 0 !important;
    gap: 0.5rem !important;
  }
  header nav .nav-menu-toggle,
  nav .nav-menu-toggle,
  nav button[id*="menu-toggle"],
  nav [data-nav-toggle] {
    flex-shrink: 0 !important;
  }
  nav:has(.nav-menu-toggle) .nav-cta-mobile-hide,
  nav:has([data-nav-toggle]) .nav-cta-mobile-hide,
  nav:has(#mobile-menu-toggle) .nav-cta-mobile-hide {
    display: none !important;
  }
  nav:has(.nav-menu-toggle) .nav-actions-mobile > :not(.nav-menu-toggle):not([data-nav-toggle]),
  nav:has(#mobile-menu-toggle) .nav-actions-mobile > :not(#mobile-menu-toggle) {
    display: none !important;
  }
  :where(p, span, li, a, label, small, button, input, textarea, h4, h5, h6) {
    font-size: max(12px, 1em);
  }
  [class*="text-[10px]"], [class*="text-[11px]"] {
    font-size: 12px !important;
    line-height: 1.3 !important;
  }
  [class*="-right-10"], [class*="-left-10"], [class*="-right-12"], [class*="-left-12"] {
    display: none !important;
  }
  .material-symbols-outlined[class*="200px"], [class*="text-[200px]"] {
    font-size: 4rem !important;
    line-height: 1 !important;
    max-width: 100%;
  }
}
`;
}

function ensureMobileSafetyStyles(slug) {
  const cssPath = slugDir(slug, "styles.css");
  if (!fs.existsSync(cssPath)) return false;

  let css = fs.readFileSync(cssPath, "utf8");
  const newBlock = getMobileSafetyCss();

  if (css.includes(MOBILE_SAFETY_MARKER)) {
    const start = css.indexOf(MOBILE_SAFETY_MARKER);
    const before = css.slice(0, start).trimEnd();
    const next = `${before}\n\n${newBlock}\n`;
    if (next === css) return false;
    fs.writeFileSync(cssPath, next, "utf8");
    return true;
  }

  css = `${css.trimEnd()}\n\n${newBlock}\n`;
  fs.writeFileSync(cssPath, css, "utf8");
  return true;
}

function findNavToggle(doc) {
  return (
    doc.getElementById("mobile-menu-toggle") ||
    doc.querySelector("[data-nav-toggle]") ||
    doc.querySelector('nav button[class*="md:hidden"], header nav button[class*="md:hidden"]')
  );
}

function patchNavForMobile(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return { changed: false, changes: [] };

  let html = fs.readFileSync(htmlPath, "utf8");
  const changes = [];
  let doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  const toggle = findNavToggle(doc);
  if (!toggle) return { changed: false, changes: [] };

  const nav = toggle.closest("nav") || doc.querySelector("header nav") || doc.querySelector("nav");
  if (!nav) return { changed: false, changes: [] };

  const navCls = nav.getAttribute("class") || "";
  if (!/\bmin-w-0\b/.test(navCls)) {
    nav.setAttribute("class", `${navCls} min-w-0 gap-2 md:gap-4`.trim());
    changes.push("nav min-width + tighter mobile gap");
  }

  const brand = nav.querySelector(":scope > div, :scope > a");
  if (brand) {
    const brandCls = brand.getAttribute("class") || "";
    if (!/\btruncate\b/.test(brandCls)) {
      brand.setAttribute(
        "class",
        `${brandCls} min-w-0 flex-1 truncate max-w-[58%] md:max-w-none`.trim()
      );
      changes.push("nav brand truncate on mobile");
    }
  }

  const toggleCls = toggle.getAttribute("class") || "";
  if (!/\bnav-menu-toggle\b/.test(toggleCls)) {
    toggle.setAttribute("class", `${toggleCls} nav-menu-toggle shrink-0`.trim());
  }
  if (!toggle.getAttribute("aria-label")) {
    toggle.setAttribute("aria-label", "Open menu");
    changes.push("nav toggle aria-label");
  }

  const actionsWrap = toggle.parentElement;
  if (actionsWrap) {
    const wrapCls = actionsWrap.getAttribute("class") || "";
    if (!/\bnav-actions-mobile\b/.test(wrapCls)) {
      actionsWrap.setAttribute("class", `${wrapCls} nav-actions-mobile shrink-0`.trim());
    }

    for (const el of actionsWrap.childNodes) {
      if (el === toggle || el.nodeType !== 1) continue;
      const text = (el.textContent || "").trim();
      const cls = el.getAttribute("class") || "";
      const isCta =
        el.getAttribute("href")?.startsWith("tel:") ||
        /call now|call us|phone/i.test(text);
      if (!isCta) continue;
      if (/\bhidden\b/.test(cls) && /\bmd:(?:inline-flex|flex|block)\b/.test(cls)) continue;
      if (/\bnav-cta-mobile-hide\b/.test(cls)) continue;
      el.setAttribute("class", `${cls} nav-cta-mobile-hide hidden md:inline-flex`.trim());
      changes.push("hide nav CTA on mobile (menu toggle present)");
    }
  }

  if (changes.length === 0) return { changed: false, changes: [] };

  html = doc.toString();
  if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;
  fs.writeFileSync(htmlPath, html, "utf8");
  return { changed: true, changes: [...new Set(changes)] };
}

function patchMobileMargins(doc) {
  let count = 0;
  for (const el of doc.querySelectorAll("*")) {
    const cls = el.getAttribute("class") || "";
    if (!/\bpx-margin-desktop\b/.test(cls) || /\bpx-margin-mobile\b/.test(cls)) continue;
    el.setAttribute(
      "class",
      cls.replace(/\bpx-margin-desktop\b/g, "px-margin-mobile md:px-margin-desktop").replace(/\s+/g, " ").trim()
    );
    count++;
  }
  return count ? [`responsive horizontal margins (${count} blocks)`] : [];
}

function patchHtmlForMobile(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return { changed: false, changes: [] };

  let html = fs.readFileSync(htmlPath, "utf8");
  const changes = [];
  const before = html;

  html = html
    .replace(/text-\[200px\]/g, "text-7xl")
    .replace(/text-\[10px\]/g, "text-xs")
    .replace(/-right-10\b/g, "-right-2")
    .replace(/-left-10\b/g, "-left-2");

  if (html !== before) {
    if (before.includes("text-[200px]")) changes.push("reduced oversized decorative icon");
    if (before.includes("text-[10px]")) changes.push("bumped 10px label text");
    if (/-right-10|-left-10/.test(before)) changes.push("pulled in decorative absolute offsets");
    fs.writeFileSync(htmlPath, html, "utf8");
  }

  let doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  const body = doc.querySelector("body");
  if (body) {
    const cls = body.getAttribute("class") || "";
    if (!/\boverflow-x-(?:hidden|clip)\b/.test(cls)) {
      body.setAttribute("class", `${cls} overflow-x-clip`.trim());
      changes.push("body overflow-x-clip");
    }
  }

  for (const section of doc.querySelectorAll("section, header, main")) {
    const cls = section.getAttribute("class") || "";
    let hasDecorativeAbsolute = false;
    for (const el of section.querySelectorAll(".absolute, .material-symbols-outlined")) {
      const elCls = el.getAttribute("class") || "";
      if (/-right-|-left-|-top-/.test(elCls) || /text-\[200/.test(elCls)) {
        hasDecorativeAbsolute = true;
        break;
      }
    }
    if (hasDecorativeAbsolute && !/\boverflow-(?:hidden|x-clip|clip)\b/.test(cls)) {
      section.setAttribute("class", `${cls} overflow-hidden`.trim());
      changes.push("section overflow-hidden for decorative layers");
    }
  }

  if (changes.length === 0) {
    html = fs.readFileSync(htmlPath, "utf8");
    doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });
  }

  html = doc.toString();
  if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;
  if (changes.length > 0) fs.writeFileSync(htmlPath, html, "utf8");

  const marginChanges = patchMobileMargins(doc);
  if (marginChanges.length > 0) {
    html = doc.toString();
    if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;
    fs.writeFileSync(htmlPath, html, "utf8");
    changes.push(...marginChanges);
  }

  const navPatch = patchNavForMobile(slug);
  if (navPatch.changed) changes.push(...navPatch.changes);

  const mapPatch = patchMapForMobile(slug);
  if (mapPatch.changed) changes.push(...mapPatch.changes);

  const mapLoadPatch = patchMapEagerLoad(slug);
  if (mapLoadPatch.changed) changes.push(...mapLoadPatch.changes);

  if (changes.length === 0) return { changed: false, changes: [] };
  return { changed: true, changes: [...new Set(changes)] };
}

/** @returns {Promise<{ viewports: Array<{ name: string, width: number, overflow: boolean, tinyText: boolean }> }>} */
export async function diagnoseLayout(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) throw new Error(`Missing ${htmlPath}`);

  const url = pathToFileURL(htmlPath).href;
  /** @type {import('puppeteer').Browser | null} */
  let browser = null;
  const viewports = [];

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();

    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
      await page.evaluate(() => window.scrollTo(0, 0));

      const result = await page.evaluate((vpName) => {
        const overflow =
          document.documentElement.scrollWidth > window.innerWidth + 2 ||
          document.body.scrollWidth > window.innerWidth + 2;

        let tinyText = false;
        let navToggleOffscreen = false;
        let navToggleDetail = null;
        let narrowContent = false;
        let narrowContentDetail = null;

        if (vpName === "mobile") {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) {
            const t = walker.currentNode.textContent?.trim();
            if (!t) continue;
            const el = walker.currentNode.parentElement;
            if (!el || el.closest(".skip-link, .mockup-notice")) continue;
            const style = getComputedStyle(el);
            if (style.display === "none" || style.visibility === "hidden") continue;
            const fs = parseFloat(style.fontSize);
            if (fs > 0 && fs < 12) {
              tinyText = true;
              break;
            }
          }

          const toggles = [
            document.getElementById("mobile-menu-toggle"),
            document.querySelector("[data-nav-toggle]"),
            ...document.querySelectorAll("nav button, header nav button"),
          ].filter(Boolean);

          const vw = window.innerWidth;
          const margin = 8;
          for (const btn of toggles) {
            const style = getComputedStyle(btn);
            if (style.display === "none" || style.visibility === "hidden") continue;
            const rect = btn.getBoundingClientRect();
            if (rect.width < 8 || rect.height < 8) continue;
            const isMenuBtn =
              btn.id === "mobile-menu-toggle" ||
              btn.hasAttribute("data-nav-toggle") ||
              /\bmd:hidden\b/.test(btn.className || "") ||
              btn.querySelector(".material-symbols-outlined");
            if (!isMenuBtn) continue;
            if (rect.right > vw - margin || rect.left < margin) {
              navToggleOffscreen = true;
              navToggleDetail = {
                right: Math.round(rect.right),
                left: Math.round(rect.left),
                viewport: vw,
              };
              break;
            }
          }
        }

        if (vpName === "mobile") {
          const vw = window.innerWidth;
          for (const el of document.querySelectorAll('[class*="px-margin-desktop"]')) {
            const cls = el.getAttribute("class") || "";
            if (cls.includes("px-margin-mobile")) continue;
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.width < vw - 40) {
              narrowContent = true;
              narrowContentDetail = {
                width: Math.round(rect.width),
                viewport: vw,
                cls: cls.slice(0, 72),
              };
              break;
            }
          }
        }

        return { overflow, tinyText, navToggleOffscreen, navToggleDetail, narrowContent, narrowContentDetail };
      }, vp.name);

      viewports.push({ name: vp.name, width: vp.width, ...result });
    }

    const navIssue = viewports.some((v) => v.navToggleOffscreen);
    const mapDiag = await diagnoseMapLayout(slug);
    const mapLoadDiag = diagnoseMapLoad(slug);
    return { viewports, navToggleOffscreen: navIssue, ...mapDiag, ...mapLoadDiag };
  } finally {
    await browser?.close();
  }
}

function hasLayoutIssues(diagnosis) {
  return (
    diagnosis.viewports.some(
      (v) => v.overflow || v.tinyText || v.navToggleOffscreen || v.narrowContent
    ) ||
    diagnosis.navToggleOffscreen ||
    diagnosis.mapLayoutGap ||
    diagnosis.mapLazyLoad
  );
}

/**
 * Apply CSS/HTML mobile fixes, optionally re-diagnose.
 * @returns {Promise<{ fixed: boolean, changes: string[], ok: boolean }>}
 */
export async function applyMobileLayoutAutofix(slug, { rediagnose = true } = {}) {
  const changes = [];

  if (ensureMobileSafetyStyles(slug)) changes.push("injected mobile safety CSS");
  if (ensureMapLayoutStyles(slug)) changes.push("refreshed map layout CSS");
  const htmlPatch = patchHtmlForMobile(slug);
  if (htmlPatch.changed) changes.push(...htmlPatch.changes);

  if (!rediagnose) {
    return { fixed: changes.length > 0, changes, ok: false };
  }

  const diagnosis = await diagnoseLayout(slug);
  const ok = !hasLayoutIssues(diagnosis);
  return { fixed: changes.length > 0, changes, ok, diagnosis };
}

/**
 * Fix loop: diagnose → patch → re-check (up to maxAttempts).
 */
export async function runMobileLayoutFix(slug, { maxAttempts = 2 } = {}) {
  const allChanges = [];
  if (ensureMapLayoutStyles(slug)) allChanges.push("refreshed map layout CSS");
  if (ensureMobileSafetyStyles(slug)) allChanges.push("injected mobile safety CSS");
  const initialHtmlPatch = patchHtmlForMobile(slug);
  if (initialHtmlPatch.changed) allChanges.push(...initialHtmlPatch.changes);

  for (let attempt = 0; attempt <= maxAttempts; attempt++) {
    const diagnosis = await diagnoseLayout(slug);
    if (!hasLayoutIssues(diagnosis)) {
      return { ok: true, changes: allChanges, diagnosis };
    }

    if (attempt === maxAttempts) {
      return { ok: false, changes: allChanges, diagnosis };
    }

    const fix = await applyMobileLayoutAutofix(slug, { rediagnose: false });
    allChanges.push(...fix.changes);
    if (fix.changes.length === 0) {
      return { ok: false, changes: allChanges, diagnosis };
    }
  }

  return { ok: false, changes: allChanges };
}

export function writeMobileLayoutReport(slug, { ok, diagnosis, changes }) {
  const reportDir = path.join(slugDir(slug), "design-qa");
  fs.mkdirSync(reportDir, { recursive: true });
  const errors = [];
  const warnings = [];

  for (const vp of diagnosis?.viewports || []) {
    if (vp.overflow) errors.push(`${vp.name}: horizontal overflow at ${vp.width}px`);
    if (vp.tinyText) errors.push(`${vp.name}: body text below 12px`);
    if (vp.navToggleOffscreen) {
      errors.push(
        `${vp.name}: mobile menu toggle off-screen (right=${vp.navToggleDetail?.right ?? "?"}, viewport=${vp.navToggleDetail?.viewport ?? vp.width})`
      );
    }
    if (vp.narrowContent) {
      errors.push(
        `${vp.name}: content not full width (${vp.narrowContentDetail?.width ?? "?"}px in ${vp.narrowContentDetail?.viewport ?? vp.width}px viewport)`
      );
    }
  }
  for (const m of diagnosis?.mapIssues || []) {
    const vp = m.viewport ? `${m.viewport}px` : "unknown";
    errors.push(
      `map @ ${vp}: empty gap under embed (parent gap ${m.parentGap}px, slot ${m.slotH}px vs iframe ${m.iframeH}px)`
    );
  }
  for (const issue of diagnosis?.mapLoadIssues || []) {
    errors.push(`map load: ${issue}`);
  }

  fs.writeFileSync(
    path.join(reportDir, "mobile-layout.md"),
    `# Mobile layout — ${slug}

**Result:** ${ok ? "PASS" : "FAIL"}

## Autofix applied
${changes?.length ? changes.map((c) => `- ${c}`).join("\n") : "- none"}

## Viewports
${(diagnosis?.viewports || [])
  .map(
    (v) =>
      `- ${v.name} (${v.width}px): overflow=${v.overflow ? "yes" : "no"}, tinyText=${v.tinyText ? "yes" : "no"}, navToggle=${v.navToggleOffscreen ? "OFF-SCREEN" : "ok"}, width=${v.narrowContent ? "NARROW" : "ok"}`
  )
  .join("\n")}

## Errors (${errors.length})
${errors.map((e) => `- ${e}`).join("\n") || "- none"}

${(diagnosis?.mapIssues || []).length ? `\n## Map layout\n${diagnosis.mapIssues.map((m) => `- parent gap ${m.parentGap}px, slot ${m.slotH}px, iframe ${m.iframeH}px`).join("\n")}\n` : ""}
_Auto-run in post-build. Fixes overflow-x, nav toggle, and map slot gaps._
`,
    "utf8"
  );

  return { ok, errors, warnings };
}
