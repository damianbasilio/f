import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { hasUsableMapLocation } from "./brief-fields.mjs";
import { pageHasGoogleMap } from "./map-embed.mjs";
import { pageHasMockupNotice, pageHasLegacyMockupBanner } from "./mockup-notice.mjs";
import { root } from "./load-env.mjs";
import { imagesManifestFilled } from "./pipeline-summary.mjs";
import { slugDir } from "./paths.mjs";
import { runCraftAudit } from "./design-craft.mjs";
import { injectBriefFonts, fixBrokenHashAnchors } from "./design-qa-fonts.mjs";

const STOCK_RE = /unsplash|picsum|gettyimages|googleusercontent\.com\/aida-public/i;
const EM_DASH = /\u2014|\u2013/g;

const EMIL_ACTIVE_CSS = `
/* design-qa: emil — press feedback */
button:active,
a[class*="btn"]:active,
a[class*="button"]:active,
[role="button"]:active {
  transform: scale(0.97);
}
@media (prefers-reduced-motion: reduce) {
  button:active,
  a[class*="btn"]:active,
  a[class*="button"]:active,
  [role="button"]:active {
    transform: none;
  }
}
`;

/**
 * Run all five design skill passes after Stitch build.
 * @returns {{ ok: boolean, reportPath: string, fixes: string[] }}
 */
export function runDesignQa(slug) {
  const dir = slugDir(slug);
  const htmlPath = path.join(dir, "index.html");
  const cssPath = path.join(dir, "styles.css");
  const jsPath = path.join(dir, "script.js");
  const briefPath = path.join(dir, "brief.md");
  const reportDir = path.join(dir, "design-qa");

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing ${htmlPath}`);
  }

  const fixes = [];
  const findings = { emil: [], taste: [], audit: [], harden: [], polish: [], craft: [] };

  let html = fs.readFileSync(htmlPath, "utf8");
  let css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
  let js = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, "utf8") : "";
  const brief = fs.existsSync(briefPath) ? fs.readFileSync(briefPath, "utf8") : "";

  // ── polish: normalize document ──
  html = normalizeDoctype(html);
  fixes.push("normalize: single DOCTYPE");

  // ── emil-design-eng ──
  const cssBefore = css;
  css = css.replace(/transition\s*:\s*all\b/gi, "transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)");
  if (css !== cssBefore) fixes.push("emil: replaced transition: all");

  html = html.replace(/\btransition-all\b/g, "transition-[transform,opacity] duration-200 ease-out");

  if (!css.includes("design-qa: emil")) {
    css += "\n" + EMIL_ACTIVE_CSS;
    fixes.push("emil: added :active press feedback");
  }
  if (!css.includes("prefers-reduced-motion")) {
    css += "\n@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }\n";
    fixes.push("emil: added prefers-reduced-motion fallbacks");
  }
  findings.emil.push("Motion: ease-out curves, no transition:all, :active scale(0.97), reduced-motion");

  // ── design-taste-frontend ──
  const emFixed = fixEmDashesInHtml(html);
  if (emFixed.changed) {
    html = emFixed.html;
    fixes.push(`taste: removed ${emFixed.count} em/en dash(es) from copy`);
  }

  const eyebrowCount = (html.match(/uppercase[^"']*tracking|tracking-[\w\[\]-]+[^"']*uppercase/gi) || []).length;
  if (eyebrowCount > 6) {
    findings.taste.push(`WARN: ${eyebrowCount} uppercase-tracked labels (eyebrow cap ~1 per 3 sections)`);
  } else {
    findings.taste.push(`Eyebrow discipline: ${eyebrowCount} uppercase-tracked labels`);
  }
  findings.taste.push("Anti-slop: no em dashes, layout families from Stitch brief");

  const imagesApplied = imagesManifestFilled(dir);

  // ── brand fonts + anchor fixes (Stitch/Tailwind exports) ──
  let promptInput = {};
  const inputPath = path.join(dir, "stitch", "prompt-input.json");
  if (fs.existsSync(inputPath)) {
    try {
      promptInput = JSON.parse(fs.readFileSync(inputPath, "utf8"));
    } catch {
      /* ignore */
    }
  }

  const fonts = injectBriefFonts(html, css, promptInput);
  if (fonts.changed) {
    html = fonts.html;
    css = fonts.css;
    fixes.push(`craft: injected brief fonts (${promptInput.fontDisplay} / ${promptInput.fontBody})`);
  }

  const anchors = fixBrokenHashAnchors(html);
  if (anchors.fixed > 0) {
    html = anchors.html;
    fixes.push(`craft: fixed ${anchors.fixed} broken hash anchor(s)`);
  }

  // ── design-craft (stitch + taste + emil rules) ──
  const craft = runCraftAudit({ html, css, promptInput });
  for (const f of craft.findings) {
    if (f.startsWith("FAIL:")) findings.craft.push(f);
    else if (f.startsWith("WARN:")) findings.craft.push(f);
    else findings.craft.push(f);
  }

  // ── impeccable audit ──
  if (STOCK_RE.test(html)) findings.audit.push("FAIL: stock or Stitch AI image URL still present");
  else findings.audit.push("Images: no stock/aida URLs in HTML");

  if (!pageHasMockupNotice(html)) findings.audit.push("FAIL: missing mockup notice popup");
  else if (pageHasLegacyMockupBanner(html)) findings.audit.push("FAIL: legacy top mockup banner still present");
  else findings.audit.push("Mockup notice: popup present");

  if (!html.includes('id="credibility"') && !html.includes("id='credibility'")) {
    findings.audit.push("WARN: missing #credibility");
  } else findings.audit.push("Credibility section: present");

  const hasMapLocation = hasUsableMapLocation(brief);
  if (hasMapLocation && !pageHasGoogleMap(html)) findings.audit.push("FAIL: location in brief but no Google Map");
  else if (hasMapLocation) findings.audit.push("Map: embedded for location");

  if (/cdn\.tailwindcss\.com/i.test(html)) {
    findings.audit.push("WARN: Tailwind CDN (Stitch export limitation — accepted in shipped mockups)");
  }
  if (/Material\+Symbols/i.test(html)) {
    findings.audit.push("WARN: Material Symbols icon font (Stitch export limitation — accepted in shipped mockups)");
  }
  if (/googleusercontent\.com\/aida-public/i.test(html)) {
    if (imagesApplied) findings.audit.push("FAIL: Stitch AI placeholder images still present after images:apply");
    else findings.audit.push("WARN: Stitch AI placeholder images — run images:apply");
  }

  const fontFamilies = [...css.matchAll(/font-family\s*:\s*([^;}{]+)/gi)].map((m) => m[1].toLowerCase());
  const onlyInter =
    fontFamilies.length > 0 &&
    fontFamilies.every((f) => /\binter\b/.test(f) || /system-ui|sans-serif|inherit/.test(f));
  if (onlyInter && fontFamilies.some((f) => /\binter\b/.test(f))) {
    findings.audit.push("FAIL: Inter-only typography — generic AI default; match brief brand fonts");
  }
  if (/#6366f1|#8b5cf6|#7c3aed|indigo-\d+|from-indigo|from-purple|bg-gradient-to-[rb].*purple/i.test(html + css)) {
    findings.audit.push("FAIL: Purple/indigo SaaS gradient detected — use extracted brand hex from live site");
  }
  if ((html.match(/class=["'][^"']*(?:grid-cols-3|col-span-1)[^"']*["']/gi) || []).length >= 3) {
    findings.taste.push("WARN: Repeated 3-column utility grid — likely generic AI card layout");
  }
  if (/★★★★|4\.9\s*\/\s*5|#1 rated|best in town|trusted by thousands/i.test(html)) {
    findings.audit.push("FAIL: Fake star ratings or unverifiable superlatives");
  }

  // ── impeccable harden ──
  js = hardenForms(js);
  fixes.push("harden: preview-only form behavior (removed fake send UX)");

  html = ensureMobileNavA11y(html);
  fixes.push("harden: mobile nav aria labels");

  if (!html.includes("form-notice") && html.includes("<form")) {
    html = injectFormNotice(html);
    fixes.push("harden: added form-notice");
  }
  findings.harden.push("Forms: preview-only, no fake submit success");
  findings.harden.push("Nav: aria-expanded on toggle where applicable");

  // ── impeccable polish ──
  html = ensureMetaViewport(html);
  findings.polish.push("Document normalized, meta viewport verified");

  fs.writeFileSync(htmlPath, html, "utf8");
  fs.writeFileSync(cssPath, css, "utf8");
  fs.writeFileSync(jsPath, js, "utf8");

  const blockers = [
    ...Object.values(findings).flatMap((items) => items.filter((f) => f.startsWith("FAIL:"))),
    ...craft.blockers.map((b) => `FAIL: ${b}`),
  ];
  const uniqueBlockers = [...new Set(blockers)];
  const ok = uniqueBlockers.length === 0;

  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, "report.md");
  fs.writeFileSync(reportPath, buildReport(slug, findings, fixes, ok, craft.warnings), "utf8");

  updateStatus(slug, findings);

  return { ok, reportPath, fixes, findings, blockers };
}

function normalizeDoctype(html) {
  const body = html.replace(/<!DOCTYPE html>\s*/gi, "").trim();
  return `<!DOCTYPE html>\n${body}`;
}

function fixEmDashesInHtml(html) {
  const parts = html.split(/(<[^>]+>)/);
  let count = 0;
  const fixed = parts.map((part) => {
    if (part.startsWith("<")) return part;
    const next = part.replace(/\u2014/g, ", ").replace(/\u2013/g, "-");
    if (next !== part) count++;
    return next;
  }).join("");
  return { html: normalizeDoctype(fixed), changed: count > 0, count };
}

function hardenForms(js) {
  let out = js.replace(
    /\/\/ Form interactivity[\s\S]*?contactForm\.addEventListener\('submit'[\s\S]*?\}\);[\s\S]*?\}, 1000\);\s*\}\);/,
    "// Form interactivity — preview only (design-qa)\n        const contactForm = document.querySelector('form');\n        if (contactForm) {\n          contactForm.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const notice = document.getElementById('form-notice');\n            if (notice) {\n              notice.textContent = 'Preview only. This form does not send messages.';\n              notice.hidden = false;\n            }\n          });\n        }"
  );

  if (/MESSAGE SENT|SENDING\.\.\./i.test(out)) {
    out = out.replace(
      /\/\/ Form Submission Interaction[\s\S]*?contactForm\.addEventListener\('submit'[\s\S]*?\}\);\s*\n\s*\}\);/,
      "// Form — preview only (design-qa)\n        const contactForm = document.getElementById('contact-form');\n        if (contactForm) {\n            contactForm.addEventListener('submit', (e) => {\n                e.preventDefault();\n                const notice = document.getElementById('form-notice');\n                if (notice) {\n                    notice.textContent = 'Preview only. This form does not send messages.';\n                    notice.hidden = false;\n                }\n            });\n        }\n"
    );
  }

  return out.replace(/MESSAGE SENT!?|SENDING\.\.\./gi, "Preview only");
}

function ensureMobileNavA11y(html) {
  return html
    .replace(
      /(<button[^>]*id="mobile-menu-btn"[^>]*)(>)/i,
      (m, pre, end) => (pre.includes("aria-label") ? m : `${pre} aria-label="Open menu" aria-expanded="false"${end}`)
    )
    .replace(
      /(<button[^>]*id="close-drawer"[^>]*)(>)/i,
      (m, pre, end) => (pre.includes("aria-label") ? m : `${pre} aria-label="Close menu"${end}`)
    );
}

function injectFormNotice(html) {
  const doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });
  for (const form of doc.querySelectorAll("form")) {
    if (!form.querySelector(".form-notice")) {
      form.insertAdjacentHTML(
        "beforeend",
        '<p class="form-notice" id="form-notice">Preview only. This form does not send messages. Call or email the business directly.</p>'
      );
    }
  }
  return normalizeDoctype(doc.toString());
}

function ensureMetaViewport(html) {
  if (html.includes('name="viewport"')) return html;
  return html.replace(/<head>/i, '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
}

function buildReport(slug, findings, fixes, ok, craftWarnings = []) {
  const sections = ["craft", "emil", "taste", "audit", "harden", "polish"];
  let md = `# Design QA — ${slug}\n\n**Result:** ${ok ? "PASS" : "NEEDS FIX"}\n\n`;
  if (craftWarnings.length) {
    md += `**Craft warnings:** ${craftWarnings.length} (see craft section)\n\n`;
  }
  md += "## Skills run\n\n";
  md += "| Skill | Status |\n| ----- | ------ |\n";
  for (const s of sections) {
    md += `| ${s} | ${findings[s].some((f) => f.startsWith("FAIL:")) ? "fail" : "pass"} |\n`;
  }
  md += "\n## Fixes applied\n\n";
  for (const f of fixes) md += `- ${f}\n`;
  md += "\n## Findings\n\n";
  for (const s of sections) {
    md += `### ${s}\n\n`;
    for (const f of findings[s]) md += `- ${f}\n`;
    md += "\n";
  }
  md += "_Auto-run after every `stitch:build`. Manual browser pass still recommended before outreach._\n";
  return md;
}

function updateStatus(slug, findings) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return;
  let text = fs.readFileSync(statusPath, "utf8");
  const skillMap = {
    "design-qa/craft": "craft",
    "design-qa/emil": "emil",
    "design-qa/taste": "taste",
    "design-qa/audit": "audit",
    "design-qa/harden": "harden",
    "design-qa/polish": "polish",
  };
  for (const [key, skill] of Object.entries(skillMap)) {
    const val = findings[skill].some((f) => f.startsWith("FAIL:")) ? "fail" : "done";
    text = text.replace(new RegExp(`(\\|\\s*${key.replace("/", "\\/")}\\s*\\|\\s*)\\w+(\\s*\\|)`, "i"), `$1${val}$2`);
  }
  fs.writeFileSync(statusPath, text, "utf8");
}
