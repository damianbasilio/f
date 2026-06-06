/**
 * Inject brief brand fonts when Stitch export defaults to Inter/Tailwind.
 */
export function injectBriefFonts(html, css, promptInput = {}) {
  const display = promptInput.fontDisplay?.trim();
  const body = promptInput.fontBody?.trim();
  if (!display || !body) return { html, css, changed: false };

  let changed = false;
  let outHtml = html;
  let outCss = css;

  const fontsParam = promptInput.googleFonts?.trim();
  const fontsUrl = fontsParam
    ? `https://fonts.googleapis.com/css2?family=${fontsParam}&display=swap`
    : null;

  if (fontsUrl && !outHtml.includes("fonts.googleapis.com")) {
    outHtml = outHtml.replace(/<head([^>]*)>/i, `<head$1>\n<link rel="stylesheet" href="${fontsUrl}" />\n`);
    changed = true;
  }

  const marker = "design-qa: brief brand fonts";
  if (!outCss.includes(marker)) {
    outCss += `
/* ${marker} */
:root {
  --font-display: '${display.replace(/'/g, "\\'")}', Georgia, serif;
  --font-body: '${body.replace(/'/g, "\\'")}', system-ui, sans-serif;
}
html, body {
  font-family: var(--font-body);
}
h1, h2, h3, h4, h5, h6,
.font-display, [class*="font-display"], [class*="headline"] {
  font-family: var(--font-display);
}
p, li, span, a, button, input, textarea, label, nav {
  font-family: var(--font-body);
}
`;
    changed = true;
  }

  return { html: outHtml, css: outCss, changed };
}

/**
 * Add missing id attributes for in-page hash links.
 */
export function fixBrokenHashAnchors(html) {
  const doc = html.match(/^[\s\S]*$/);
  if (!doc) return { html, fixed: 0 };

  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]));
  const hrefs = [...html.matchAll(/href=["']#([^"'#]+)["']/gi)].map((m) => m[1]);
  let out = html;
  let fixed = 0;

  for (const id of hrefs) {
    if (ids.has(id)) continue;
    const re = new RegExp(
      `<section\\b([^>]*class=["'][^"']*${id}[^"']*["'][^>]*)>`,
      "i"
    );
    if (re.test(out)) {
      out = out.replace(re, `<section id="${id}"$1>`);
      ids.add(id);
      fixed++;
      continue;
    }
    const genericRe = new RegExp(
      `<(section|div|main)\\b((?:(?!id=)[^>])*)>\\s*(?:<!--[^>]*-->)?\\s*<[^>]+>[^<]*${id.replace(/-/g, "[\\s-]")}`,
      "i"
    );
    if (genericRe.test(out)) {
      out = out.replace(
        new RegExp(`<section\\b((?:(?!id=)[^>])*)>`, "i"),
        (m, attrs, offset) => {
          const before = out.slice(Math.max(0, offset - 200), offset);
          if (new RegExp(id, "i").test(before)) return `<section id="${id}"${attrs}>`;
          return m;
        }
      );
    }
    // Fallback: first section after nav link text match
    const navLinkRe = new RegExp(`<a[^>]+href=["']#${id}["'][^>]*>([^<]+)</a>`, "i");
    const navMatch = out.match(navLinkRe);
    if (navMatch && !ids.has(id)) {
      const label = navMatch[1].trim().slice(0, 40);
      if (label) {
        const labelRe = new RegExp(`(<section\\b(?:(?!id=)[^>])*>[\\s\\S]{0,400}${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "i");
        if (labelRe.test(out)) {
          out = out.replace(labelRe, (block) => block.replace("<section", `<section id="${id}"`));
          ids.add(id);
          fixed++;
        }
      }
    }
    if (!ids.has(id)) {
      out = out.replace(
        /(<main[^>]*>)/i,
        `$1\n<section id="${id}" class="anchor-target" aria-label="${id.replace(/-/g, " ")}"></section>`
      );
      ids.add(id);
      fixed++;
    }
  }

  return { html: out, fixed };
}
