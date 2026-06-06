/**
 * Multi-viewport polish checks via Puppeteer on local index.html.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { launchBrowser } from "./puppeteer-launch.mjs";
import { slugDir } from "./paths.mjs";

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 900 },
];

/**
 * @param {string} slug
 */
export async function runResponsiveQa(slug) {
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) throw new Error(`Missing ${htmlPath}`);

  const url = pathToFileURL(htmlPath).href;
  const errors = [];
  const warnings = [];
  const notes = [];

  /** @type {import('puppeteer').Browser | null} */
  let browser = null;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();

    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
      await page.evaluate(() => window.scrollTo(0, 0));

      const result = await page.evaluate((vpName) => {
        const horizontalScroll = document.documentElement.scrollWidth > window.innerWidth + 2;
        const bodyOverflow = document.body.scrollWidth > window.innerWidth + 2;

        const h1 = document.querySelector("h1");
        let h1Lines = 0;
        if (h1) {
          const rect = h1.getBoundingClientRect();
          const lineHeight = parseFloat(getComputedStyle(h1).lineHeight) || 32;
          h1Lines = Math.round(rect.height / lineHeight);
        }

        const heroTooTall =
          vpName === "mobile" &&
          (() => {
            const hero =
              document.querySelector('[class*="hero" i], [id*="hero" i], header + section, main > section');
            if (!hero) return false;
            const rect = hero.getBoundingClientRect();
            return rect.height > window.innerHeight * 1.15;
          })();

        let textTooSmall = false;
        if (vpName === "mobile") {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) {
            const t = walker.currentNode.textContent?.trim();
            if (!t) continue;
            const el = walker.currentNode.parentElement;
            if (!el) continue;
            const style = getComputedStyle(el);
            if (style.display === "none" || style.visibility === "hidden") continue;
            const fs = parseFloat(style.fontSize);
            if (fs > 0 && fs < 12) {
              textTooSmall = true;
              break;
            }
          }
        }

        const smallTargets =
          vpName === "mobile"
            ? [...document.querySelectorAll("a, button")].filter((el) => {
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0 && (r.height < 44 || r.width < 44);
              }).length
            : 0;

        const nav = document.querySelector("nav, header");
        let navOverflow = false;
        if (nav && vpName === "desktop") {
          navOverflow = nav.scrollWidth > nav.clientWidth + 2;
        }

        const ctaVisible = [...document.querySelectorAll("a, button")].some((el) => {
          const r = el.getBoundingClientRect();
          const text = (el.textContent || "").trim();
          return r.top < window.innerHeight && r.bottom > 0 && text.length > 2 && r.height >= 36;
        });

        return {
          horizontalScroll: horizontalScroll || bodyOverflow,
          h1Lines,
          heroTooTall,
          textTooSmall,
          smallTargets,
          navOverflow,
          ctaVisible,
        };
      }, vp.name);

      notes.push(
        `${vp.name} (${vp.width}×${vp.height}): scroll=${result.horizontalScroll ? "overflow" : "ok"}, h1≈${result.h1Lines} lines, smallTargets=${result.smallTargets}`
      );

      if (result.horizontalScroll) errors.push(`${vp.name}: horizontal overflow at ${vp.width}px`);
      if (result.h1Lines > 3) warnings.push(`${vp.name}: H1 may wrap to ${result.h1Lines} lines`);
      if (result.heroTooTall) warnings.push(`${vp.name}: hero taller than viewport — CTA may be below fold`);
      if (result.textTooSmall) errors.push(`${vp.name}: body text below 12px`);
      if (result.smallTargets > 4) warnings.push(`${vp.name}: ${result.smallTargets} tap targets under 44px`);
      if (vp.name === "desktop" && result.navOverflow) warnings.push("desktop: navigation overflows — should fit one line");
      if (vp.name === "mobile" && !result.ctaVisible) warnings.push("mobile: no obvious CTA/button visible in first screen");
    }

    const reportDir = path.join(slugDir(slug), "design-qa");
    fs.mkdirSync(reportDir, { recursive: true });
    const reportPath = path.join(reportDir, "responsive-qa.md");
    const ok = errors.length === 0;

    fs.writeFileSync(
      reportPath,
      `# Responsive QA — ${slug}

**Result:** ${ok ? "PASS" : "FAIL"}

## Viewports checked
${VIEWPORTS.map((v) => `- ${v.name}: ${v.width}×${v.height}`).join("\n")}

## Notes
${notes.map((n) => `- ${n}`).join("\n")}

## Errors (${errors.length})
${errors.map((e) => `- ${e}`).join("\n") || "- none"}

## Warnings (${warnings.length})
${warnings.map((w) => `- ${w}`).join("\n") || "- none"}

_Auto-run after build. Fix horizontal overflow and tiny text before deploy._
`,
      "utf8"
    );

    return { ok, errors, warnings, notes, reportPath };
  } catch (err) {
    return {
      ok: false,
      errors: [err.message],
      warnings: [],
      notes: [],
      reportPath: null,
    };
  } finally {
    await browser?.close();
  }
}
