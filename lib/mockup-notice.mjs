import fs from "node:fs";
import { parse } from "node-html-parser";
import { slugDir } from "./paths.mjs";

export const MOCKUP_NOTICE_MARKER = "/* mockup-notice (outreach) */";
export const MOCKUP_NOTICE_MARKER_END = "/* end mockup-notice (outreach) */";

export const MOCKUP_NOTICE_HTML = `<div class="mockup-notice" id="mockup-notice" role="dialog" aria-modal="true" aria-labelledby="mockup-notice-title">
  <div class="mockup-notice__backdrop" aria-hidden="true"></div>
  <div class="mockup-notice__panel">
    <p class="mockup-notice__eyebrow">Preview</p>
    <h2 class="mockup-notice__title" id="mockup-notice-title">Concept website</h2>
    <p class="mockup-notice__body">This is a concept preview only. Not affiliated with <strong data-business-name></strong>.</p>
    <span class="mockup-notice__ack-wrap" id="mockup-notice-ack-wrap">
      <span class="mockup-notice__ack-ring" aria-hidden="true"></span>
      <button type="button" class="mockup-notice__ack" id="mockup-notice-ack">Got it</button>
    </span>
  </div>
</div>`;

export const SKIP_LINK_HTML = `<a class="skip-link" href="#main">Skip to content</a>`;

export const MOCKUP_NOTICE_CSS = `${MOCKUP_NOTICE_MARKER}
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
  top: 0.5rem;
}
.form-notice {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.75rem;
}
body.mockup-notice-open {
  overflow: hidden;
}
.mockup-notice {
  position: fixed;
  inset: 0;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right))
    max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  opacity: 1;
  transition: opacity 0.25s ease;
}
.mockup-notice.is-closing {
  opacity: 0;
  pointer-events: none;
}
.mockup-notice__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.mockup-notice__panel {
  position: relative;
  z-index: 1;
  width: min(100%, 22rem);
  padding: 1.5rem;
  border-radius: 14px;
  background: #1a1a1a;
  color: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  text-align: center;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}
.mockup-notice__eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}
.mockup-notice__title {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
}
.mockup-notice__body {
  margin: 0 0 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.82);
}
.mockup-notice__body strong {
  color: #fff;
  font-weight: 600;
}
@property --mockup-ack-gap {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.mockup-notice__ack-wrap {
  position: relative;
  display: inline-flex;
  border-radius: 999px;
}
.mockup-notice__ack-ring {
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: conic-gradient(
    from -90deg,
    transparent 0deg,
    transparent var(--mockup-ack-gap),
    #fff var(--mockup-ack-gap),
    #fff 360deg
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.mockup-notice__ack-wrap.is-timing .mockup-notice__ack-ring {
  animation: mockup-ack-ring 3s linear forwards;
}
@keyframes mockup-ack-ring {
  from {
    --mockup-ack-gap: 0deg;
  }
  to {
    --mockup-ack-gap: 360deg;
  }
}
.mockup-notice__ack {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7rem;
  padding: 0.65rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: #fff;
  color: #111;
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.mockup-notice__ack:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}
.mockup-notice__ack:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
${MOCKUP_NOTICE_MARKER_END}
`;

export const MOCKUP_NOTICE_SCRIPT = `function initMockupNotice() {
  const dialog = document.getElementById("mockup-notice");
  if (!dialog) return;

  const nameEl = dialog.querySelector("[data-business-name]");
  const title = document.querySelector("meta[name='x-business-name']");
  if (nameEl && title) nameEl.textContent = title.content;

  const ack = dialog.querySelector(".mockup-notice__ack");
  const ackWrap = dialog.querySelector(".mockup-notice__ack-wrap");
  const ackRing = dialog.querySelector(".mockup-notice__ack-ring");
  let closed = false;

  function closeNotice() {
    if (closed) return;
    closed = true;
    ackWrap?.classList.remove("is-timing");
    dialog.classList.add("is-closing");
    document.body.classList.remove("mockup-notice-open");
    window.setTimeout(() => dialog.remove(), 280);
  }

  document.body.classList.add("mockup-notice-open");
  ack?.addEventListener("click", closeNotice);
  ack?.focus();
  ackWrap?.classList.add("is-timing");
  ackRing?.addEventListener("animationend", closeNotice, { once: true });
  window.setTimeout(closeNotice, 3100);
}

initMockupNotice();`;

export const SITE_SCRIPT = `(() => {
  ${MOCKUP_NOTICE_SCRIPT}

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

export function pageHasMockupNotice(html) {
  return html.includes('id="mockup-notice"') || html.includes("mockup-notice");
}

export function pageHasLegacyMockupBanner(html) {
  return html.includes("mockup-banner");
}

export function applyMockupNoticeCss(css) {
  const legacyBannerRe =
    /:root\s*\{\s*--mockup-banner-height:[\s\S]*?\}\s*\.mockup-banner[\s\S]*?body:has\(\.mockup-banner\) header\[class\*="sticky"\]\s*\{[\s\S]*?\}\s*/g;
  let out = css.replace(legacyBannerRe, "");

  const blockRe = new RegExp(
    `${MOCKUP_NOTICE_MARKER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${MOCKUP_NOTICE_MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n?`,
    "g"
  );
  out = out.replace(blockRe, "");

  const marker = "/* Outreach mockup chrome */";
  if (out.includes(marker)) {
    return out.replace(marker, `${MOCKUP_NOTICE_CSS}\n${marker}`);
  }
  return `${MOCKUP_NOTICE_CSS}\n${out}`;
}

export function patchSiteScript(js) {
  let out = js;

  out = out.replace(
    /function syncMockupBannerLayout\(\)\s*\{[\s\S]*?\}\s*syncMockupBannerLayout\(\);\s*window\.addEventListener\("resize",\s*syncMockupBannerLayout\);\s*/g,
    ""
  );

  out = out.replace(
    /const banner = document\.querySelector\("\.mockup-banner strong\[data-business-name\]"\);\s*const title = document\.querySelector\("meta\[name='x-business-name'\]"\);\s*if \(banner && title\) banner\.textContent = title\.content;\s*/g,
    ""
  );

  // Repair prior bad insert that split `(() => {` into `(() =>` + `{`
  out = out.replace(
    /\(\(\) =>\s*\n\s*(function initMockupNotice\(\)[\s\S]*?initMockupNotice\(\);\s*)\n\s*\{/,
    "(() => {\n  $1"
  );

  const noticeFnRe = /function initMockupNotice\(\)\s*\{[\s\S]*?\}\s*\n\s*initMockupNotice\(\);/;
  if (noticeFnRe.test(out)) {
    out = out.replace(noticeFnRe, MOCKUP_NOTICE_SCRIPT.trim());
  } else if (!out.includes("initMockupNotice")) {
    out = `${out.trimEnd()}\n\n(() => {\n  ${MOCKUP_NOTICE_SCRIPT}\n})();\n`;
  }

  return out;
}

export function applyMockupNoticeHtml(html) {
  let doc = parse(html.replace(/^<!DOCTYPE html>\s*/i, ""), { comment: true });
  const body = doc.querySelector("body");
  if (!body) return { html, changed: false };

  let changed = false;

  for (const banner of body.querySelectorAll(".mockup-banner")) {
    banner.remove();
    changed = true;
  }

  let bodyClass = body.getAttribute("class") || "";
  if (/\bhas-mockup-banner\b/.test(bodyClass)) {
    bodyClass = bodyClass.replace(/\bhas-mockup-banner\b/g, "").replace(/\s+/g, " ").trim();
    body.setAttribute("class", bodyClass);
    changed = true;
  }

  if (!body.querySelector(".skip-link")) {
    body.insertAdjacentHTML("afterbegin", SKIP_LINK_HTML);
    changed = true;
  }

  if (!body.querySelector("#mockup-notice")) {
    const scriptTag = body.querySelector('script[src="script.js"]');
    if (scriptTag) {
      scriptTag.insertAdjacentHTML("beforebegin", MOCKUP_NOTICE_HTML);
    } else {
      body.insertAdjacentHTML("beforeend", MOCKUP_NOTICE_HTML);
    }
    changed = true;
  } else {
    let notice = body.querySelector("#mockup-notice");
    const scriptTag = body.querySelector('script[src="script.js"]');
    if (notice && scriptTag) {
      const children = body.childNodes.filter((n) => n.nodeType === 1);
      const noticeIdx = children.indexOf(notice);
      const scriptIdx = children.indexOf(scriptTag);
      if (noticeIdx > scriptIdx) {
        scriptTag.insertAdjacentHTML("beforebegin", notice.outerHTML);
        notice.remove();
        changed = true;
        notice = body.querySelector("#mockup-notice");
      }
    }
    if (notice && !notice.querySelector(".mockup-notice__ack-wrap")) {
      const ack = notice.querySelector(".mockup-notice__ack");
      if (ack) {
        const wrap = parse(
          '<span class="mockup-notice__ack-wrap" id="mockup-notice-ack-wrap"><span class="mockup-notice__ack-ring" aria-hidden="true"></span></span>',
          { comment: true }
        ).firstChild;
        ack.remove();
        wrap.appendChild(ack);
        notice.querySelector(".mockup-notice__panel")?.appendChild(wrap);
        changed = true;
      }
    } else if (notice?.querySelector(".mockup-notice__ack-wrap") && !notice.querySelector(".mockup-notice__ack-ring")) {
      const wrap = notice.querySelector(".mockup-notice__ack-wrap");
      wrap.insertAdjacentHTML(
        "afterbegin",
        '<span class="mockup-notice__ack-ring" aria-hidden="true"></span>'
      );
      changed = true;
    }
  }

  if (!changed) return { html, changed: false };

  let out = doc.toString();
  if (/^<!DOCTYPE html>/i.test(html.trimStart()) && !/^<!DOCTYPE html>/i.test(out.trimStart())) {
    out = "<!DOCTYPE html>\n" + out;
  }
  return { html: out, changed: true };
}

/**
 * Migrate banner → modal popup for one slug.
 * @returns {{ changed: boolean, changes: string[] }}
 */
export function applyMockupNotice(slug) {
  const htmlPath = slugDir(slug, "index.html");
  const cssPath = slugDir(slug, "styles.css");
  const scriptPath = slugDir(slug, "script.js");
  const changes = [];

  if (fs.existsSync(htmlPath)) {
    const before = fs.readFileSync(htmlPath, "utf8");
    const { html, changed } = applyMockupNoticeHtml(before);
    if (changed) {
      fs.writeFileSync(htmlPath, html, "utf8");
      changes.push("html: mockup notice modal");
    }
  }

  if (fs.existsSync(cssPath)) {
    const before = fs.readFileSync(cssPath, "utf8");
    const after = applyMockupNoticeCss(before);
    if (after !== before) {
      fs.writeFileSync(cssPath, after, "utf8");
      changes.push("css: mockup notice styles");
    }
  }

  if (fs.existsSync(scriptPath)) {
    const before = fs.readFileSync(scriptPath, "utf8");
    const after = patchSiteScript(before);
    if (after !== before) {
      fs.writeFileSync(scriptPath, after, "utf8");
      changes.push("script: mockup notice auto-dismiss");
    }
  }

  return { changed: changes.length > 0, changes };
}
