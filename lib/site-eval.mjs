/**
 * Post-build evaluation: broken links, dead images, missing anchors, structural issues.
 * Runs after design:qa. Usage: node scripts/site-eval.mjs <slug>
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { root } from "../lib/load-env.mjs";
import { pageHasMockupNotice, pageHasLegacyMockupBanner } from "./mockup-notice.mjs";
import { slugDir } from "./paths.mjs";

export async function runSiteEval(slug) {
  const dir = slugDir(slug);
  const htmlPath = path.join(dir, "index.html");
  const cssPath = path.join(dir, "styles.css");
  const jsPath = path.join(dir, "script.js");

  if (!fs.existsSync(htmlPath)) throw new Error(`Missing ${htmlPath}`);

  const html = fs.readFileSync(htmlPath, "utf8");
  const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
  const js = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, "utf8") : "";
  const doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });

  const errors = [];
  const warnings = [];
  const fixes = [];

  if ((html.match(/<!DOCTYPE html>/gi) || []).length > 1) {
    errors.push("Multiple DOCTYPE declarations");
  }

  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]));
  for (const a of doc.querySelectorAll('a[href^="#"]')) {
    const href = a.getAttribute("href");
    if (!href || href === "#") continue;
    const id = href.slice(1);
    if (!ids.has(id) && !doc.querySelector(`[name="${id}"]`)) {
      warnings.push(`Broken anchor: ${href}`);
    }
  }

  const imgSrcs = [...doc.querySelectorAll("img")].map((img) => img.getAttribute("src")).filter(Boolean);
  const uniqueSrcs = [...new Set(imgSrcs)];
  if (uniqueSrcs.length !== imgSrcs.length) {
    warnings.push("Duplicate image URLs on page");
  }

  for (const src of uniqueSrcs.slice(0, 15)) {
    if (src.startsWith("data:")) continue;
    try {
      const url = src.startsWith("http") ? src : `http://localhost/${src}`;
      if (src.startsWith("http")) {
        const res = await fetch(src, { method: "HEAD", redirect: "follow" });
        if (!res.ok) errors.push(`Image failed (${res.status}): ${src.slice(0, 80)}…`);
      }
    } catch {
      warnings.push(`Could not verify image: ${src.slice(0, 60)}…`);
    }
  }

  if (/googleusercontent\.com\/aida-public/i.test(html)) {
    errors.push("Stitch AI placeholder images still present — run images:apply");
  }

  if (!pageHasMockupNotice(html)) errors.push("Missing mockup notice popup");
  if (pageHasLegacyMockupBanner(html)) errors.push("Legacy top mockup banner still present");
  if (!html.includes("form-notice") && html.includes("<form")) warnings.push("Form missing preview notice");

  if (js.includes("MESSAGE SENT") || js.includes("SENDING...")) {
    errors.push("Form still simulates real send — run design:qa");
  }

  if (!css.includes("prefers-reduced-motion")) warnings.push("CSS missing prefers-reduced-motion");

  const reportDir = path.join(dir, "design-qa");
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, "site-eval.md");
  const ok = errors.length === 0;

  fs.writeFileSync(
    reportPath,
    `# Site evaluation — ${slug}

**Result:** ${ok ? "PASS" : "FAIL"}

## Errors (${errors.length})

${errors.map((e) => `- ${e}`).join("\n") || "- none"}

## Warnings (${warnings.length})

${warnings.map((w) => `- ${w}`).join("\n") || "- none"}

_Run after every build. Fix errors before images/outreach._
`,
    "utf8"
  );

  updateStatus(slug, ok);

  return { ok, errors, warnings, fixes, reportPath };
}

function updateStatus(slug, ok) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return;
  let text = fs.readFileSync(statusPath, "utf8");
  const val = ok ? "done" : "fail";
  if (text.includes("| site-eval |")) {
    text = text.replace(/\|\s*site-eval\s*\|\s*\w+\s*\|/i, `| site-eval | ${val} |`);
  } else {
    text = text.replace(
      /\|\s*design-qa\/polish\s*\|\s*\w+\s*\|/i,
      (m) => `${m}\n| site-eval | ${val} |`
    );
  }
  fs.writeFileSync(statusPath, text, "utf8");
}
