/**
 * Auto-fix common QA gaps before design QA / qa-check (outreach gates).
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { slugDir } from "./paths.mjs";

function readBriefField(brief, re, fallback = "") {
  const m = brief.match(re);
  return m?.[1]?.trim() || fallback;
}

function buildFallbackCredibility(brief, lead) {
  const name = readBriefField(brief, /\*\*Name:\*\*\s*(.+)/i, lead?.name || "Local business");
  const city = readBriefField(brief, /\*\*Location:\*\*\s*([^,]+)/i, lead?.city || "your area");
  const score = lead?.review_score ? `${lead.review_score}/5 Rating` : "Trusted local business";
  const scoreLabel = lead?.review_score ? "CUSTOMER REVIEWS" : "COMMUNITY TRUST";

  return `<section class="bg-surface-container-lowest py-12 border-y border-surface-variant" id="credibility">
<div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="flex items-center gap-4 p-6 rounded-xl">
<span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">star</span>
<div>
<h4 class="font-headline-md text-body-lg">${score}</h4>
<p class="text-label-md text-on-surface-variant">${scoreLabel}</p>
</div>
</div>
<div class="flex items-center gap-4 p-6 rounded-xl">
<span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<div>
<h4 class="font-headline-md text-body-lg">Locally owned</h4>
<p class="text-label-md text-on-surface-variant">${name}</p>
</div>
</div>
<div class="flex items-center gap-4 p-6 rounded-xl">
<span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">location_on</span>
<div>
<h4 class="font-headline-md text-body-lg">${city} local</h4>
<p class="text-label-md text-on-surface-variant">Serving the community</p>
</div>
</div>
</div>
</section>`;
}

function tagCredibilitySection(doc) {
  const html = doc.toString();
  const commentMatch = html.match(/<!--\s*Credibility Bar\s*-->/i);
  if (commentMatch) {
    const idx = html.indexOf(commentMatch[0]) + commentMatch[0].length;
    const rest = html.slice(idx);
    const sectionMatch = rest.match(/<section\b([^>]*)>/i);
    if (sectionMatch && !/\bid=["']credibility["']/i.test(sectionMatch[0])) {
      const patched = rest.replace(
        sectionMatch[0],
        sectionMatch[0].replace("<section", '<section id="credibility"')
      );
      return parse(html.slice(0, idx) + patched, { comment: true });
    }
  }

  const sections = doc.querySelectorAll("section");
  for (const section of sections) {
    if (section.getAttribute("id") === "credibility") return doc;
    const text = section.text.toLowerCase();
    const looksLikeCredibility =
      /credibility|verified|locally owned|years|rating|insured|family owned|trusted/i.test(text) &&
      section.querySelector(".material-symbols-outlined, [data-icon]");
    if (looksLikeCredibility && section.querySelectorAll("div").length >= 2) {
      section.setAttribute("id", "credibility");
      return doc;
    }
  }

  return null;
}

function insertAfterHero(doc, htmlBlock) {
  const main = doc.querySelector("main") || doc.querySelector("body");
  if (!main) return false;

  const sections = main.querySelectorAll("section");
  const hero =
    sections.find((s) => /hero|min-h-\[|banner/i.test(s.classNames || s.getAttribute("class") || "")) ||
    sections[0];
  if (!hero) {
    main.insertAdjacentHTML("afterbegin", htmlBlock);
    return true;
  }
  hero.insertAdjacentHTML("afterend", htmlBlock);
  return true;
}

/**
 * @returns {{ fixed: boolean, change?: string }}
 */
export function applyQaAutofix(slug) {
  const dir = slugDir(slug);
  const htmlPath = path.join(dir, "index.html");
  if (!fs.existsSync(htmlPath)) return { fixed: false };

  let html = fs.readFileSync(htmlPath, "utf8");
  if (html.includes('id="credibility"') || html.includes("id='credibility'")) {
    return { fixed: false };
  }

  const briefPath = path.join(dir, "brief.md");
  const leadPath = path.join(dir, "lead.json");
  const brief = fs.existsSync(briefPath) ? fs.readFileSync(briefPath, "utf8") : "";
  const lead = fs.existsSync(leadPath) ? JSON.parse(fs.readFileSync(leadPath, "utf8")) : null;

  let doc = parse(html, { comment: true });
  const tagged = tagCredibilitySection(doc);

  if (tagged) {
    doc = tagged;
    let out = doc.toString();
    if (!/^<!DOCTYPE html>/i.test(out.trimStart())) out = "<!DOCTYPE html>\n" + out;
    fs.writeFileSync(htmlPath, out, "utf8");
    return { fixed: true, change: "tagged existing credibility section with id=\"credibility\"" };
  }

  const block = buildFallbackCredibility(brief, lead);
  if (!insertAfterHero(doc, block)) return { fixed: false };

  let out = doc.toString();
  if (!/^<!DOCTYPE html>/i.test(out.trimStart())) out = "<!DOCTYPE html>\n" + out;
  fs.writeFileSync(htmlPath, out, "utf8");
  return { fixed: true, change: "inserted fallback #credibility section" };
}
