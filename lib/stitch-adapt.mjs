import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { injectGoogleMap, MAP_CSS_SNIPPET } from "./map-embed.mjs";
import {
  MOCKUP_NOTICE_HTML,
  MOCKUP_NOTICE_CSS,
  SITE_SCRIPT,
  SKIP_LINK_HTML,
} from "./mockup-notice.mjs";
import { slugDir } from "./paths.mjs";

const FORM_NOTICE = `<p class="form-notice" id="form-notice">Preview only. This form does not send messages. Call or email the business directly.</p>`;

const SITE_CSS_EXTRA = `
${MOCKUP_NOTICE_CSS}
.map-embed {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 280px;
  margin-top: 1.25rem;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e5e5;
}
.map-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
${MAP_CSS_SNIPPET}
p.map-directions {
  display: none !important;
}
.visit-address {
  margin: 0.5rem 0 0;
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
`;

/**
 * Turn Stitch design.html into a deployable site: index.html + styles.css + script.js
 */
export function adaptStitchExport(
  html,
  { businessName = "this business", slug = "site", businessAddress = null } = {}
) {
  const doc = parse(html, { comment: true });

  const styles = [];
  for (const node of doc.querySelectorAll("style")) {
    styles.push(node.text);
    node.remove();
  }

  const scripts = [];
  for (const node of doc.querySelectorAll("script")) {
    if (node.getAttribute("src")) continue;
    if (node.getAttribute("id") === "tailwind-config") continue;
    const body = node.text.trim();
    if (body) scripts.push(body);
    node.remove();
  }

  let head = doc.querySelector("head");
  if (!head) {
    head = parse("<head></head>").firstChild;
    doc.querySelector("html")?.prepend(head);
  }

  if (!head.querySelector('meta[name="viewport"]')) {
    head.insertAdjacentHTML(
      "afterbegin",
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    );
  }

  if (!head.querySelector('meta[name="x-business-name"]')) {
    head.insertAdjacentHTML(
      "beforeend",
      `<meta name="x-business-name" content="${escapeAttr(businessName)}" />`
    );
  }

  if (businessAddress && !head.querySelector('meta[name="x-business-address"]')) {
    head.insertAdjacentHTML(
      "beforeend",
      `<meta name="x-business-address" content="${escapeAttr(businessAddress)}" />`
    );
  }

  head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="styles.css" />');

  let body = doc.querySelector("body");
  if (!body) {
    body = parse("<body></body>").firstChild;
    doc.querySelector("html")?.appendChild(body);
  }

  if (!body.getAttribute("id")) body.setAttribute("id", "main");

  body.insertAdjacentHTML("afterbegin", SKIP_LINK_HTML);
  body.insertAdjacentHTML("beforeend", MOCKUP_NOTICE_HTML);

  for (const form of body.querySelectorAll("form")) {
    if (!form.querySelector(".form-notice")) {
      form.insertAdjacentHTML("beforeend", FORM_NOTICE);
    }
  }

  body.insertAdjacentHTML("beforeend", '<script src="script.js" defer></script>');

  const stylesCss =
    styles.join("\n\n") +
    "\n\n/* Outreach mockup chrome */\n" +
    SITE_CSS_EXTRA;

  const scriptJs = [...scripts, SITE_SCRIPT].join("\n\n");

  let indexHtml = "<!DOCTYPE html>\n" + doc.toString();

  if (businessAddress) {
    const mapResult = injectGoogleMap(indexHtml, { address: businessAddress, businessName });
    indexHtml = normalizeDoctype(mapResult.html);
  }

  return { indexHtml, stylesCss, scriptJs };
}

function normalizeDoctype(html) {
  const body = html.replace(/<!DOCTYPE html>\s*/gi, "").trim();
  return `<!DOCTYPE html>\n${body}`;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

export function writeSite(root, slug, files, meta = {}) {
  const dir = slugDir(slug);
  fs.mkdirSync(path.join(dir, "assets"), { recursive: true });
  fs.mkdirSync(path.join(dir, "stitch"), { recursive: true });

  fs.writeFileSync(path.join(dir, "index.html"), files.indexHtml, "utf8");
  fs.writeFileSync(path.join(dir, "styles.css"), files.stylesCss, "utf8");
  fs.writeFileSync(path.join(dir, "script.js"), files.scriptJs, "utf8");

  if (!fs.existsSync(path.join(dir, "assets", "sources.txt"))) {
    fs.writeFileSync(
      path.join(dir, "assets", "sources.txt"),
      "Real business photos to be added during adapt stage.\n",
      "utf8"
    );
  }

  const manifestPath = path.join(dir, "assets", "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    const example = path.join(root, "templates", "manifest.example.json");
    if (fs.existsSync(example)) {
      fs.copyFileSync(example, manifestPath);
    }
  }

  return dir;
}
