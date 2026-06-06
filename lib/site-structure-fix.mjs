/**
 * Repair common Stitch HTML structure bugs (unclosed hero, wrong section ids).
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { slugDir } from "./paths.mjs";

function isHeroLike(section) {
  const cls = section.getAttribute("class") || "";
  const id = section.getAttribute("id") || "";
  return /min-h-\[|hero|banner/i.test(cls) || id === "hero";
}

function removeEmptyAnchorSections(doc) {
  let removed = 0;
  for (const section of [...doc.querySelectorAll("section.anchor-target, section[class*='anchor-target']")]) {
    const text = section.text.replace(/\s+/g, "");
    const hasChildren = section.querySelector("img, h1, h2, p, div, form, button, a");
    if (!text && !hasChildren) {
      section.remove();
      removed++;
    }
  }
  return removed;
}

function fixCredibilityOnHeroWrapper(doc) {
  let fixed = 0;
  for (const section of doc.querySelectorAll("section")) {
    if (section.getAttribute("id") !== "credibility") continue;
    if (!isHeroLike(section)) continue;
    section.setAttribute("id", "hero");
    fixed++;
  }
  return fixed;
}

function tagCredibilitySubsection(doc) {
  const html = doc.toString();
  const commentMatch = html.match(/<!--\s*Credibility[^>]*-->/i);
  if (!commentMatch) return 0;

  const idx = html.indexOf(commentMatch[0]) + commentMatch[0].length;
  const rest = html.slice(idx);
  const sectionMatch = rest.match(/<section\b([^>]*)>/i);
  if (!sectionMatch) return 0;

  const sectionStart = idx + rest.indexOf(sectionMatch[0]);
  const sections = doc.querySelectorAll("section");
  for (const section of sections) {
    const pos = html.indexOf(section.outerHTML);
    if (pos !== sectionStart) continue;
    if (section.getAttribute("id") === "credibility") return 0;
    section.setAttribute("id", "credibility");
    return 1;
  }
  return 0;
}

/** Stack nested #credibility below hero copy instead of beside it (flex row bug). */
function fixHeroCredibilityLayout(doc) {
  const hero = doc.getElementById("hero");
  if (!hero) return 0;

  const cred = hero.querySelector("section#credibility");
  if (!cred) return 0;

  let heroCls = hero.getAttribute("class") || "";
  if (/\bitems-center\b/.test(heroCls) && !/\bflex-col\b/.test(heroCls)) {
    heroCls = heroCls
      .replace(/\bitems-center\b/g, "")
      .replace(/\bflex\b/, "flex flex-col items-stretch justify-end pb-4 md:justify-center")
      .replace(/\s+/g, " ")
      .trim();
  } else if (!/\bflex-col\b/.test(heroCls)) {
    heroCls = `${heroCls} flex-col items-stretch justify-end pb-4 md:justify-center`.replace(/\s+/g, " ").trim();
  }
  if (/min-h-\[\d+px\]/.test(heroCls) && !/\bmd:min-h-\[/.test(heroCls)) {
    heroCls = heroCls.replace(/min-h-\[(\d+)px\]/, "min-h-[70vh] md:min-h-[$1px]");
  }
  hero.setAttribute("class", heroCls);

  let credCls = cred.getAttribute("class") || "";
  if (/\b-mt-\d+\b/.test(credCls) && !/\bmd:-mt-/.test(credCls)) {
    credCls = credCls.replace(/\b-mt-(\d+)\b/, "mt-4 md:-mt-$1");
  }
  if (!/\bw-full\b/.test(credCls)) credCls = `${credCls} w-full`.trim();
  cred.setAttribute("class", credCls.replace(/\s+/g, " "));

  const card = cred.querySelector(".glass-card, [class*='rounded-2xl']");
  if (card) {
    let cardCls = card.getAttribute("class") || "";
    if (!/\bp-5\b/.test(cardCls) && /\bp-8\b/.test(cardCls)) {
      cardCls = cardCls.replace(/\bp-8\b/, "p-5 md:p-8");
      card.setAttribute("class", cardCls);
    }
  }

  return 1;
}

function closeHeroBeforeServices(html) {
  const marker = html.match(/<!--\s*Services Section/i);
  if (!marker) return { html, closed: 0 };

  const idx = html.indexOf(marker[0]);
  const before = html.slice(0, idx);
  const opens = (before.match(/<section\b/gi) || []).length;
  const closes = (before.match(/<\/section>/gi) || []).length;
  const missing = opens - closes;
  if (missing <= 0) return { html, closed: 0 };

  const insert = `${"</section>\n".repeat(missing)}`;
  return { html: before + insert + html.slice(idx), closed: missing };
}

/**
 * @returns {{ fixed: boolean, changes: string[] }}
 */
export function repairSiteStructure(slug) {
  const htmlPath = path.join(slugDir(slug), "index.html");
  if (!fs.existsSync(htmlPath)) return { fixed: false, changes: [] };

  const changes = [];
  let html = fs.readFileSync(htmlPath, "utf8");

  const closed = closeHeroBeforeServices(html);
  if (closed.closed > 0) {
    html = closed.html;
    changes.push(`closed ${closed.closed} unclosed section(s) before services`);
  }

  let doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  const removed = removeEmptyAnchorSections(doc);
  if (removed) changes.push(`removed ${removed} empty anchor section(s)`);

  const heroIdFix = fixCredibilityOnHeroWrapper(doc);
  if (heroIdFix) changes.push("moved id=credibility off hero wrapper to id=hero");

  const credTagged = tagCredibilitySubsection(doc);
  if (credTagged) changes.push("tagged credibility subsection with id=credibility");

  const heroLayout = fixHeroCredibilityLayout(doc);
  if (heroLayout) changes.push("stacked nested credibility below hero on mobile");

  html = doc.toString();
  if (!/^<!DOCTYPE html>/i.test(html.trimStart())) html = "<!DOCTYPE html>\n" + html;

  if (changes.length === 0) return { fixed: false, changes: [] };
  fs.writeFileSync(htmlPath, html, "utf8");
  return { fixed: true, changes };
}
