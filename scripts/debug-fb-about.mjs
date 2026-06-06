/**
 * Probe About-page DOM for website field only.
 * Usage: node scripts/debug-fb-about.mjs <facebook-url> [extra-url...]
 */
import puppeteer from "puppeteer";

function aboutPageUrl(facebookUrl) {
  const u = new URL(facebookUrl);
  u.hash = "";
  u.search = "";
  const path = u.pathname.replace(/\/+$/, "");
  if (/\/about$/i.test(path)) return u.href;
  if (/\/people\/[^/]+\/\d+$/i.test(path)) return `${u.origin}${path}/about`;
  return `${u.origin}${path}/about`;
}

const seed = process.argv[2] || "https://m.facebook.com/RusticScruffGrooming/";
const tryUrls = process.argv.length > 2
  ? process.argv.slice(2)
  : [seed, aboutPageUrl(seed), seed.replace(/\/+$/, "") + "/?sk=about"];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setUserAgent(
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
);

for (const target of tryUrls) {
  console.log("\n==========", target, "==========");
  await page.goto(target, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.waitForNetworkIdle({ idleTime: 800, timeout: 15_000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 1500));

  const html = await page.content();
  const rows = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("span, div")) {
      const t = (el.textContent || "").trim();
      if (!/^website$/i.test(t)) continue;
      let p = el.parentElement;
      for (let i = 0; i < 8 && p; i++, p = p.parentElement) {
        const a = p.querySelector("a[href]");
        if (a?.href) {
          out.push({ href: a.href, text: (a.textContent || "").trim().slice(0, 80) });
          break;
        }
      }
    }
    return out;
  });

  console.log("Website rows:", rows.length ? "" : "(none)");
  for (const r of rows) console.log(" ", r.href, "|", r.text);
  console.log("businessfinder:", html.includes("businessfinder"));
  console.log("abc3340:", html.includes("abc3340"));
}

await browser.close();
