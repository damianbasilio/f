/**
 * Debug: website extraction from About tab only.
 * Usage: node scripts/debug-fb-website.mjs [facebook-url]
 */
import puppeteer from "puppeteer";
import { extractWebsiteFromPage } from "../lib/facebook-verify.mjs";
import { classifyWebsiteUrl } from "../lib/vertical-profiles.mjs";

const url = process.argv[2] || "https://m.facebook.com/RusticScruffGrooming/";
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setUserAgent(
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
);

console.log("Profile:", url);
console.log("(website check uses About tab only — not feed posts)\n");

await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
const extracted = await extractWebsiteFromPage(page, url);

console.log("=== Website field (About only) ===");
console.log(extracted || "(none)", "->", classifyWebsiteUrl(extracted));

await browser.close();
