import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { injectGoogleMap, MAP_CSS_SNIPPET } from "./map-embed.mjs";
import { slugDir } from "./paths.mjs";

const MOCKUP_BANNER = `<div class="mockup-banner" role="note">Concept website preview. Not affiliated with <strong data-business-name></strong>.</div>`;
const SKIP_LINK = `<a class="skip-link" href="#main">Skip to content</a>`;
const FORM_NOTICE = `<p class="form-notice" id="form-notice">Preview only. This form does not send messages. Call or email the business directly.</p>`;

const SITE_SCRIPT = `(() => {
  function syncMockupBannerLayout() {
    const banner = document.querySelector(".mockup-banner");
    if (!banner) return;
    document.documentElement.style.setProperty(
      "--mockup-banner-height",
      banner.offsetHeight + "px"
    );
  }

  syncMockupBannerLayout();
  window.addEventListener("resize", syncMockupBannerLayout);

  const banner = document.querySelector(".mockup-banner strong[data-business-name]");
  const title = document.querySelector("meta[name='x-business-name']");
  if (banner && title) banner.textContent = title.content;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const open = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const notice = document.getElementById("form-notice");
      if (notice) {
        notice.textContent = "Preview only. This form does not send messages.";
        notice.hidden = false;
      }
    });
  });
})();
`;

const SITE_CSS_EXTRA = `
:root {
  --mockup-banner-height: 2.25rem;
}
.mockup-banner {
  position: sticky;
  top: 0;
  z-index: 10001;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  text-align: center;
  background: #1a1a1a;
  color: #f5f5f5;
  border-bottom: 1px solid #333;
}
.has-mockup-banner nav[class*="fixed"],
.has-mockup-banner nav[class*="sticky"],
.has-mockup-banner header[class*="fixed"],
.has-mockup-banner header[class*="sticky"],
body:has(.mockup-banner) nav[class*="fixed"],
body:has(.mockup-banner) nav[class*="sticky"],
body:has(.mockup-banner) header[class*="fixed"],
body:has(.mockup-banner) header[class*="sticky"] {
  top: var(--mockup-banner-height) !important;
}
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 10002;
  padding: 0.5rem 1rem;
  background: #fff;
  color: #111;
}
.skip-link:focus {
  left: 0.5rem;
  top: calc(var(--mockup-banner-height) + 0.5rem);
}
.form-notice {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.75rem;
}
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

  const bodyClass = body.getAttribute("class") || "";
  if (!bodyClass.includes("has-mockup-banner")) {
    body.setAttribute("class", `${bodyClass} has-mockup-banner`.trim());
  }

  body.insertAdjacentHTML("afterbegin", SKIP_LINK + MOCKUP_BANNER);

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
