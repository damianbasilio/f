/**
 * Automated QA for one slug or all live mockups.
 * Usage:
 *   node scripts/qa-check.mjs the-dhaba
 *   node scripts/qa-check.mjs --all
 */
import fs from "node:fs";
import path from "node:path";
import { listLiveSlugs } from "../lib/slugs.mjs";
import { hasUsableMapLocation } from "../lib/brief-fields.mjs";
import { pageHasGoogleMap, auditMapLoadBehavior } from "../lib/map-embed.mjs";
import { pageHasMockupNotice, pageHasLegacyMockupBanner } from "../lib/mockup-notice.mjs";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";

const arg = process.argv[2];
const outreach = process.argv.includes("--outreach");
const slugs =
  arg === "--all"
    ? listLiveSlugs()
    : arg && !arg.startsWith("-")
      ? [arg]
      : [];

if (slugs.length === 0) {
  console.error("Usage: node scripts/qa-check.mjs <slug>");
  console.error("       node scripts/qa-check.mjs --all");
  console.error("       node scripts/qa-check.mjs <slug> --outreach  (requires design skill passes)");
  process.exit(1);
}

const STOCK_RE = /unsplash|picsum|gettyimages|shutterstock|isteam\/stock|placehold\.co|placeholder\.com|googleusercontent\.com\/aida-public/i;

let totalErrors = 0;

for (const slug of slugs) {
  const dir = slugDir(slug);
  const htmlPath = path.join(dir, "index.html");
  const cssPath = path.join(dir, "styles.css");
  const manifestPath = path.join(dir, "assets", "manifest.json");
  const briefPath = path.join(dir, "brief.md");
  const statusPath = path.join(dir, "status.md");

  console.log(`\n── ${slug} ──`);
  const errors = [];
  const warnings = [];

  if (fs.existsSync(briefPath)) {
    const brief = fs.readFileSync(briefPath, "utf8");
    if (!/\*\*Gate:\*\*\s*PASS/i.test(brief.match(/## Email verification[\s\S]*?(?=##|$)/i)?.[0] || "")) {
      errors.push("brief.md email verification gate is not PASS");
    }
    if (!/\*\*Gate:\*\*\s*PASS/i.test(brief.match(/## Activity verification[\s\S]*?(?=##|$)/i)?.[0] || "")) {
      errors.push("brief.md activity verification gate is not PASS");
    }
    if (!brief.includes("## Activity verification")) {
      errors.push("brief.md missing Activity verification section");
    }
    if (!brief.includes("## Human approval")) {
      errors.push("brief.md missing Human approval section");
    } else if (!/\*\*Gate:\*\*\s*PASS/i.test(brief.match(/## Human approval[\s\S]*?(?=##|$)/i)?.[0] || "")) {
      errors.push("brief.md Human approval gate is not PASS (Damian must approve website quality)");
    }
    if (!brief.includes("## Site quality gate")) {
      errors.push("brief.md missing Site quality gate section");
    }
    if (hasUsableMapLocation(brief) && fs.existsSync(htmlPath) && !pageHasGoogleMap(fs.readFileSync(htmlPath, "utf8"))) {
      errors.push("brief has address but index.html has no Google Maps embed (run npm run map:sync -- " + slug + ")");
    }
  } else {
    errors.push("Missing brief.md");
  }

  if (outreach && fs.existsSync(statusPath)) {
    const status = fs.readFileSync(statusPath, "utf8");
    for (const key of ["design-qa/craft", "design-qa/emil", "design-qa/taste", "design-qa/audit", "design-qa/harden", "design-qa/polish"]) {
      const row = status.match(new RegExp(`\\|\\s*${key.replace("/", "\\/")}\\s*\\|\\s*(\\w+)\\s*\\|`, "i"));
      const val = row?.[1]?.toLowerCase();
      if (!val || !["done", "pass"].includes(val)) {
        errors.push(`status.md: ${key} not done (required for outreach)`);
      }
    }
    const siteEvalPath = path.join(dir, "design-qa", "site-eval.md");
    if (!fs.existsSync(siteEvalPath)) {
      errors.push("missing design-qa/site-eval.md (run npm run site:eval -- " + slug + ")");
    } else if (!/\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(siteEvalPath, "utf8"))) {
      errors.push("site-eval did not PASS — fix broken links/images before outreach");
    }
    const responsivePath = path.join(dir, "design-qa", "responsive-qa.md");
    if (!fs.existsSync(responsivePath)) {
      warnings.push("missing design-qa/responsive-qa.md (run npm run responsive:qa -- " + slug + ")");
    } else if (!/\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(responsivePath, "utf8"))) {
      warnings.push("responsive-qa did not PASS — check mobile overflow/tap targets");
    }
  } else if (fs.existsSync(statusPath)) {
    const status = fs.readFileSync(statusPath, "utf8");
    for (const key of ["design-qa/craft", "design-qa/emil", "design-qa/taste", "design-qa/audit", "design-qa/harden", "design-qa/polish"]) {
      const row = status.match(new RegExp(`\\|\\s*${key.replace("/", "\\/")}\\s*\\|\\s*(\\w+)\\s*\\|`, "i"));
      if (!row || row[1].toLowerCase() !== "done") {
        warnings.push(`${key} still pending (run design skills before outreach)`);
      }
    }
  }

  if (!fs.existsSync(htmlPath)) {
    errors.push("Missing index.html");
    report(errors, warnings);
    totalErrors += errors.length;
    continue;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";

  for (const ref of html.matchAll(/\.\.\/shared\/([^"']+)/g)) {
    const asset = ref[1];
    if (!fs.existsSync(path.join(root, "shared", asset))) {
      errors.push(`index.html references ../shared/${asset} but shared/${asset} is missing`);
    }
  }

  if (STOCK_RE.test(html)) errors.push("Stock/placeholder image URL detected in index.html");
  if (!pageHasMockupNotice(html)) errors.push("Missing mockup notice popup");
  if (pageHasLegacyMockupBanner(html)) errors.push("Legacy top mockup banner still present (run mockup-notice migration)");
  if (!html.includes('class="skip-link"') && !html.includes("skip-link")) errors.push("Missing skip link");
  if (!html.includes('id="credibility"') && !html.includes('id=\'credibility\'')) {
    errors.push("Missing #credibility section");
  }
  if (html.includes("<form") && !html.includes("form-notice")) {
    errors.push("Form present but missing form-notice");
  }
  if (html.includes('method="post"') || html.includes("method='post'")) {
    errors.push("Form uses POST — should be preview-only");
  }

  const srcs = [...html.matchAll(/\bsrc=["']([^"']+)["']/gi)].map((m) => m[1]);
  const dupes = srcs.filter((s, i) => srcs.indexOf(s) !== i);
  if (dupes.length) errors.push(`Duplicate img src: ${[...new Set(dupes)].join(", ")}`);

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  for (const tag of imgs) {
    if (!/\balt=["'][^"']+["']/i.test(tag[0])) errors.push("Image missing alt text");
  }

  const textOnly = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ");
  if (textOnly.includes("—")) errors.push("Em dash found in page copy");

  if (pageHasGoogleMap(html)) {
    for (const issue of auditMapLoadBehavior(html)) {
      errors.push(`Map: ${issue} (run npm run mobile-layout:audit -- ${slug})`);
    }
  }

  if (css && !css.includes("prefers-reduced-motion")) {
    errors.push("styles.css missing prefers-reduced-motion rule");
  }

  if (/cdn\.tailwindcss\.com/i.test(html)) {
    warnings.push("Tailwind CDN detected (Stitch export limitation — accepted in shipped mockups)");
  }
  if (/Material\+Symbols/i.test(html)) {
    warnings.push("Material Symbols icon font (Stitch export limitation — accepted in shipped mockups)");
  }
  if (/★★★★|4\.9\s*\/\s*5|#1 rated/i.test(html)) errors.push("Fake star ratings or unverifiable superlatives");

  if (!fs.existsSync(manifestPath)) {
    errors.push("Missing assets/manifest.json (image pipeline not started)");
  } else {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      if (!manifest.noPhotos) {
        const slots = Object.keys(manifest.images || manifest);
        const realSlots = slots.filter((k) => !["source", "notes"].includes(k));
        if (realSlots.length === 0) errors.push("manifest.json has no image slots filled");
      }
    } catch {
      errors.push("assets/manifest.json is invalid JSON");
    }
  }

  if (!fs.existsSync(path.join(dir, "assets", "sources.txt"))) {
    errors.push("Missing assets/sources.txt");
  }

  report(errors, warnings);
  totalErrors += errors.length;
}

console.log(totalErrors === 0 ? "\n✓ All checks passed" : `\n✗ ${totalErrors} issue(s) total`);
process.exit(totalErrors === 0 ? 0 : 1);

function report(errors, warnings = []) {
  if (errors.length === 0 && warnings.length === 0) {
    console.log("  ✓ pass");
  } else {
    for (const e of errors) console.log(`  ✗ ${e}`);
    for (const w of warnings) console.log(`  ⚠ ${w}`);
  }
}
