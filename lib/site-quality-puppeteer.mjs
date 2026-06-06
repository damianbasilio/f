/**
 * Puppeteer checks: above-fold CTA + mobile readability at 390×844.
 */
import { launchBrowser } from "./puppeteer-launch.mjs";

const CTA_PATTERN = /\b(book|reserve|order|call|contact|get a quote|buy|shop|schedule|appointment)\b/i;

const ADDRESS_RE = /\b(street|ave|blvd|suite|st\.)\b|\b\d{5}\b/i;
const BOOKING_ABOVE_FOLD_RE =
  /calendly|acuity|acuityscheduling|booksy|square\.site\/appointments|\bbook\b|\bappointment\b/i;

/**
 * @param {string} url
 * @returns {Promise<{
 *   ctaAboveFold: boolean,
 *   addressAboveFold: boolean,
 *   bookingAboveFold: boolean,
 *   visibleTextStart: string,
 *   heroContrastRisk: boolean,
 *   horizontalScroll: boolean,
 *   textTooSmall: boolean,
 *   tapTargetsTooSmall: boolean,
 *   smallTapTargetCount: number,
 *   nonResponsiveImages: boolean,
 *   error: string | null,
 * }>}
 */
export async function runBrowserChecks(url) {
  /** @type {import('puppeteer').Browser | null} */
  let browser = null;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35_000 });
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 10_000 }).catch(() => {});

    const desktopChecks = await page.evaluate(
      (ctaPattern, addressPattern, bookingPattern) => {
        const ctaRe = new RegExp(ctaPattern, "i");
        const addressRe = new RegExp(addressPattern, "i");
        const bookingRe = new RegExp(bookingPattern, "i");

        const isVisible = (el) => {
          const style = window.getComputedStyle(el);
          if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) {
            return false;
          }
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        };

        const aboveFold = (el) => {
          const rect = el.getBoundingClientRect();
          return rect.top < 800 && rect.bottom > 0;
        };

        const ctaAboveFold = [...document.querySelectorAll("a, button")].some((el) => {
          if (!isVisible(el) || !aboveFold(el)) return false;
          const text = (el.textContent || "").replace(/\s+/g, " ").trim();
          return ctaRe.test(text);
        });

        let addressAboveFold = false;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const t = walker.currentNode.textContent?.trim();
          if (!t || !addressRe.test(t)) continue;
          const el = walker.currentNode.parentElement;
          if (!el || !isVisible(el) || !aboveFold(el)) continue;
          addressAboveFold = true;
          break;
        }

        const bookingAboveFold = [...document.querySelectorAll("a, button, form, iframe")].some((el) => {
          if (!isVisible(el) || !aboveFold(el)) return false;
          const href = el.getAttribute("href") || el.getAttribute("src") || "";
          const text = (el.textContent || "").replace(/\s+/g, " ").trim();
          return bookingRe.test(href) || bookingRe.test(text);
        });

        const visibleChunks = [];
        const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (textWalker.nextNode()) {
          const t = textWalker.currentNode.textContent?.replace(/\s+/g, " ").trim();
          if (!t) continue;
          const el = textWalker.currentNode.parentElement;
          if (!el || !isVisible(el)) continue;
          visibleChunks.push(t);
          if (visibleChunks.join(" ").length >= 220) break;
        }
        const visibleTextStart = visibleChunks.join(" ").slice(0, 220);

        const heroSelectors = [
          '[class*="hero" i]',
          '[id*="hero" i]',
          '[class*="banner" i]',
          "header",
          '[class*="jumbotron" i]',
        ];
        const heroEls = heroSelectors.flatMap((sel) => [...document.querySelectorAll(sel)]).slice(0, 6);

        const hasOverlay = (root) => {
          const nodes = [root, ...root.querySelectorAll("*")];
          return nodes.some((el) => {
            const style = window.getComputedStyle(el);
            const bg = style.background || style.backgroundImage || "";
            if (/rgba\s*\([^)]*,\s*0?\.\d+|rgba\s*\([^)]*,\s*0\s*\)/i.test(bg)) return true;
            if (/linear-gradient/i.test(bg) && /rgba|transparent|0\.\d/i.test(bg)) return true;
            const bgColor = style.backgroundColor;
            if (/rgba\s*\([^)]*,\s*0?\.\d+/i.test(bgColor)) return true;
            return false;
          });
        };

        const heroContrastRisk = heroEls.some((el) => {
          if (!isVisible(el)) return false;
          const style = window.getComputedStyle(el);
          const bgImg = style.backgroundImage;
          if (!bgImg || bgImg === "none" || !/url\(/i.test(bgImg)) return false;
          return !hasOverlay(el);
        });

        return { ctaAboveFold, addressAboveFold, bookingAboveFold, visibleTextStart, heroContrastRisk };
      },
      CTA_PATTERN.source,
      ADDRESS_RE.source,
      BOOKING_ABOVE_FOLD_RE.source
    );

    await page.setViewport({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));

    const mobile = await page.evaluate(() => {
      const horizontalScroll = document.body.scrollWidth > window.innerWidth + 1;

      let textTooSmall = false;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const text = walker.currentNode.textContent?.trim();
        if (!text) continue;
        const el = walker.currentNode.parentElement;
        if (!el) continue;
        const style = window.getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) {
          continue;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        const fontSize = parseFloat(style.fontSize);
        if (fontSize > 0 && fontSize < 12) {
          textTooSmall = true;
          break;
        }
      }

      const interactive = [...document.querySelectorAll("a, button")].filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 || rect.height > 0;
      });
      const smallTapTargets = interactive.filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.height < 44 || rect.width < 44;
      });
      const tapTargetsTooSmall = smallTapTargets.length > 3;

      const nonResponsiveImages = [...document.querySelectorAll("img")].some((img) => {
        if (img.srcset?.trim()) return false;
        const style = window.getComputedStyle(img);
        const maxWidth = style.maxWidth;
        if (maxWidth === "100%" || maxWidth.endsWith("%")) return false;
        const maxPx = parseFloat(maxWidth);
        if (!Number.isNaN(maxPx) && maxPx <= window.innerWidth) return false;
        return img.naturalWidth > 800;
      });

      return {
        horizontalScroll,
        textTooSmall,
        tapTargetsTooSmall,
        smallTapTargetCount: smallTapTargets.length,
        nonResponsiveImages,
      };
    });

    return { ...desktopChecks, ...mobile, error: null };
  } catch (err) {
    return {
      ctaAboveFold: false,
      addressAboveFold: false,
      bookingAboveFold: false,
      visibleTextStart: "",
      heroContrastRisk: false,
      horizontalScroll: false,
      textTooSmall: false,
      tapTargetsTooSmall: false,
      smallTapTargetCount: 0,
      nonResponsiveImages: false,
      error: err.message || String(err),
    };
  } finally {
    await browser?.close();
  }
}
