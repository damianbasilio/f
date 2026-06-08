import fs from "node:fs";
import path from "node:path";

const EXT_BY_MIME = {
  "text/html": ".html",
  "text/css": ".css",
  "text/javascript": ".js",
  "application/javascript": ".js",
  "application/x-typescript": ".ts",
  "text/typescript": ".ts",
  "text/tsx": ".tsx",
  "application/typescript": ".ts",
  "text/x-java-source": ".java",
  "text/markdown": ".md",
  "text/plain": ".txt",
  "application/json": ".json",
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
};

/**
 * Walk a Stitch API response and collect every File blob (downloadUrl or base64).
 */
export function collectDownloadables(root, prefix = "") {
  const out = [];
  walk(root, prefix, out);
  return out;
}

function walk(node, prefix, out) {
  if (node == null) return;

  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, `${prefix}[${i}]`, out));
    return;
  }

  if (typeof node !== "object") return;

  if (node.downloadUrl || node.fileContentBase64) {
    out.push({ fieldPath: prefix || "file", file: node });
    return;
  }

  for (const [key, value] of Object.entries(node)) {
    if (value == null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      continue;
    }
    const next = prefix ? `${prefix}.${key}` : key;
    walk(value, next, out);
  }
}

/**
 * Collect markdown / token strings that aren't File objects.
 */
export function collectTextArtifacts(root) {
  const out = [];
  if (root?.theme?.designMd) {
    out.push({ fieldPath: "theme.designMd", content: root.theme.designMd, ext: ".md" });
  }
  if (root?.designSystem?.designTokens) {
    out.push({
      fieldPath: "designSystem.designTokens",
      content: root.designSystem.designTokens,
      ext: ".json",
    });
  }
  for (const comp of root?.outputComponents ?? []) {
    if (comp?.text) {
      out.push({ fieldPath: "outputComponents.text", content: comp.text, ext: ".md" });
    }
    if (comp?.designSystem?.designSystem?.designTokens) {
      out.push({
        fieldPath: "outputComponents.designSystem.designTokens",
        content: comp.designSystem.designSystem.designTokens,
        ext: ".json",
      });
    }
  }
  return out;
}

export function pickScreenFromGenerate(raw) {
  const screens = [];
  for (const comp of raw?.outputComponents ?? []) {
    for (const s of comp?.design?.screens ?? []) {
      screens.push(s);
    }
  }
  return screens[0] ?? null;
}

export function pickDesignSystemText(raw) {
  const parts = [];
  for (const comp of raw?.outputComponents ?? []) {
    if (comp?.text?.trim()) parts.push(comp.text.trim());
  }
  const screen = pickScreenFromGenerate(raw);
  if (screen?.theme?.designMd?.trim()) parts.push(screen.theme.designMd.trim());
  return parts.join("\n\n---\n\n");
}

export function screenHasHtml(screen) {
  if (!screen) return false;
  const mode = screen?.screenMetadata?.displayMode;
  if (mode === "MARKDOWN" || mode === "STICKY_NOTE") return false;
  return Boolean(screen?.htmlCode?.downloadUrl || screen?.htmlCode?.fileContentBase64);
}

export function isHtmlDocument(text) {
  if (!text || typeof text !== "string") return false;
  const t = text.trim();
  return /^<!DOCTYPE html/i.test(t) || /^<html[\s>]/i.test(t);
}

export function guessExtension(file, fieldPath) {
  if (file?.name) {
    const fromName = path.extname(file.name);
    if (fromName) return fromName;
  }
  if (file?.mimeType && EXT_BY_MIME[file.mimeType]) return EXT_BY_MIME[file.mimeType];

  const lower = fieldPath.toLowerCase();
  if (lower.includes("htmlcode") || lower.endsWith(".html")) return ".html";
  if (lower.includes("screenshot") || lower.includes("thumbnail")) return ".png";
  if (lower.includes("figma")) return ".fig";
  if (lower.includes("css")) return ".css";
  if (lower.includes("tsx")) return ".tsx";
  if (lower.includes("typescript") || lower.endsWith(".ts")) return ".ts";
  if (lower.includes("java")) return ".java";
  if (lower.includes("designmd") || lower.includes("design.md")) return ".md";
  if (lower.includes("json") || lower.includes("tokens")) return ".json";
  return ".bin";
}

export function safeFileName(fieldPath, ext) {
  const base = fieldPath
    .replace(/\[(\d+)\]/g, "-$1")
    .replace(/\./g, "-")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  const name = base || "file";
  return name.endsWith(ext) ? name : `${name}${ext}`;
}

export async function downloadStitchFile(file, destPath) {
  if (file.fileContentBase64) {
    fs.writeFileSync(destPath, Buffer.from(file.fileContentBase64, "base64"));
    return destPath;
  }
  if (!file.downloadUrl) {
    throw new Error(`No downloadUrl or fileContentBase64 for ${destPath}`);
  }
  const res = await fetch(file.downloadUrl);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${file.downloadUrl}`);
  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
  return destPath;
}

export async function waitForScreenHtml(callTool, projectId, screenId, { attempts = 24, delayMs = 5000 } = {}) {
  let last = null;
  for (let i = 0; i < attempts; i++) {
    const raw = await callTool("get_screen", {
      projectId,
      screenId,
      name: `projects/${projectId}/screens/${screenId}`,
    });
    last = raw;
    if (screenHasHtml(raw)) return raw;
    const status = raw?.screenMetadata?.status;
    console.log(`Waiting for screen HTML (${i + 1}/${attempts})… status=${status ?? "unknown"}`);
    await new Promise((r) => setTimeout(r, delayMs));
  }
  return last;
}

/**
 * Download every file artifact from a get_screen (or generate) response into stitch/export/.
 */
export async function pullScreenExport(raw, exportDir) {
  fs.mkdirSync(exportDir, { recursive: true });

  const manifest = { pulledAt: new Date().toISOString(), files: [] };
  const saved = [];

  fs.writeFileSync(path.join(exportDir, "screen-response.json"), JSON.stringify(raw, null, 2) + "\n", "utf8");
  manifest.files.push("screen-response.json");

  for (const { fieldPath, file } of collectDownloadables(raw)) {
    const ext = guessExtension(file, fieldPath);
    const name = safeFileName(fieldPath, ext);
    const dest = path.join(exportDir, name);
    await downloadStitchFile(file, dest);
    manifest.files.push(name);
    saved.push({ fieldPath, path: dest, mimeType: file.mimeType ?? null });
    console.log(`  ↓ ${name} (${fieldPath})`);
  }

  for (const { fieldPath, content, ext } of collectTextArtifacts(raw)) {
    const name = safeFileName(fieldPath, ext);
    const dest = path.join(exportDir, name);
    fs.writeFileSync(dest, content, "utf8");
    manifest.files.push(name);
    saved.push({ fieldPath, path: dest, mimeType: "text/plain" });
    console.log(`  ↓ ${name} (${fieldPath}, inline text)`);
  }

  fs.writeFileSync(path.join(exportDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const htmlEntry =
    saved.find((f) => f.fieldPath.includes("htmlCode")) ??
    saved.find((f) => f.path.endsWith(".html"));

  return { saved, htmlPath: htmlEntry?.path ?? null, manifestPath: path.join(exportDir, "manifest.json") };
}

export function buildSiteGeneratePrompt({ businessName, phone, email, address, designMd = "" }) {
  const designNote = designMd
    ? `\nApply the design system already established in this project:\n${designMd.slice(0, 4000)}\n`
    : "";

  return `Build the complete DESKTOP landing page website for ${businessName} now.

${designNote}
This must be production-ready frontend code — a full semantic HTML document with CSS and JavaScript.
Do NOT output a DESIGN.md file, design system document, or markdown summary.
Do NOT scrape or copy the business's existing website — create a new mockup layout.

Required sections: header with phone, hero, #credibility, services/offerings, about, visit (#visit with empty map panel: \`<div class="map-slot relative overflow-hidden min-h-[400px]" data-map-slot aria-label="Map"></div>\` — no fake map image, no second map block), contact form, footer. **Vary layout, section order, and visual style** — do not reuse a generic local-business template.

Contact: ${phone || "see brief"} · ${email || "see brief"} · ${address || "see brief"}

Technical: responsive at 375px, mobile nav, smooth scroll, form validation UI (preview only), invent a distinctive color palette in styles.css (CSS custom properties), descriptive img alt tags, no lorem ipsum.`;
}

export function saveDesignSystem(stitchDir, designMd, raw) {
  if (!designMd?.trim()) return null;
  const designPath = path.join(stitchDir, "DESIGN.md");
  fs.writeFileSync(designPath, designMd.trim() + "\n", "utf8");
  console.log(`Saved design system: ${designPath}`);

  const dsPath = path.join(stitchDir, "design-system-response.json");
  fs.writeFileSync(dsPath, JSON.stringify(raw?.outputComponents ?? raw, null, 2) + "\n", "utf8");
  return designPath;
}
