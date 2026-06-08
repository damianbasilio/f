/**
 * Apply Stitch dashboard export → public/index.html
 * Usage: npm run dashboard:apply
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../lib/load-env.mjs";

const exportPath = path.join(root, "public", "stitch", "export", "htmlcode.html");
const outPath = path.join(root, "public", "index.html");
const overridesPath = path.join(root, "public", "app-overrides.css");

if (!fs.existsSync(exportPath)) {
  console.error("Missing export — run: npm run stitch:dashboard");
  process.exit(1);
}

let html = fs.readFileSync(exportPath, "utf8");

html = html.replace(/<title>[^<]+<\/title>/, "<title>Facebook Leads</title>");

// Icon rail nav
html = html.replace(
  /<aside class="h-screen w-16[\s\S]*?<\/aside>/,
  `<aside class="h-screen w-16 fixed left-0 top-0 border-r border-outline-variant bg-surface-container-lowest flex flex-col items-center py-density-md z-50">
<div class="mb-8"><span class="font-display-lg text-display-lg text-primary-fixed-dim tracking-tighter scale-75 block">FL</span></div>
<nav class="flex flex-col gap-6 w-full" id="nav">
<button type="button" data-view="leads" class="nav-btn active w-full py-3 flex flex-col items-center text-primary-fixed-dim border-l-2 border-primary-fixed-dim bg-primary-fixed/10 transition-all" title="Leads"><span class="material-symbols-outlined">group</span></button>
<button type="button" data-view="review" class="nav-btn w-full py-3 flex flex-col items-center text-on-surface-variant opacity-60 hover:bg-surface-variant hover:text-primary-fixed transition-all" title="Review"><span class="material-symbols-outlined">rate_review</span></button>
<button type="button" data-view="search" class="nav-btn w-full py-3 flex flex-col items-center text-on-surface-variant opacity-60 hover:bg-surface-variant hover:text-primary-fixed transition-all" title="Search"><span class="material-symbols-outlined">travel_explore</span></button>
<button type="button" data-view="import" class="nav-btn w-full py-3 flex flex-col items-center text-on-surface-variant opacity-60 hover:bg-surface-variant hover:text-primary-fixed transition-all" title="Import"><span class="material-symbols-outlined">upload_file</span></button>
</nav>
</aside>`
);

// Header filter
html = html.replace(
  /placeholder="Search operational leads\.\.\." type="text"/,
  `id="leadFilter" placeholder="Filter leads…" type="search"`
);

// Replace entire main content (all 4 stitch sections) with wired version
html = html.replace(
  /<main class="ml-16 p-margin-desktop[\s\S]*?<\/main>/,
  `<main class="ml-16 p-margin-desktop space-y-16 max-w-[1340px] mx-auto pb-24">
<section class="scroll-mt-24 space-y-4" id="view-leads">
<div class="flex justify-between items-end flex-wrap gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg italic">The Discovery Queue</h2>
<p class="text-body-sm text-on-surface-variant mt-1">Every business in your pipeline</p>
</div>
<select id="leadStageFilter" class="bg-[#08090A] border border-outline-variant/50 rounded px-3 py-2 text-body-sm text-on-surface focus:border-primary-fixed-dim outline-none">
<option value="">All stages</option>
<option value="imported">Imported</option>
<option value="building">Creating design</option>
<option value="live">Preview live</option>
<option value="review_ready">Email ready</option>
<option value="sent">Sent</option>
<option value="failed">Failed</option>
</select>
</div>
<div class="glass-panel overflow-hidden" id="leadsTableWrap"><p class="p-8 text-center text-on-surface-variant text-body-sm">Loading leads…</p></div>
</section>

<section class="scroll-mt-24 space-y-4" id="view-review">
<div class="flex justify-between items-end flex-wrap gap-4">
<h2 class="font-headline-lg text-headline-lg italic">The Review Desk</h2>
<div class="flex items-center gap-3 flex-wrap">
<select id="batchSelect" class="bg-[#08090A] border border-outline-variant/50 rounded px-3 py-2 text-body-sm text-on-surface min-w-[200px] outline-none"></select>
<span class="font-mono-label text-mono-label text-primary-fixed-dim px-3 py-1 rounded-full border border-primary-fixed-dim/20 bg-primary-fixed/5" id="queueSummary"></span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<div class="lg:col-span-4 glass-panel p-2 max-h-[480px] overflow-y-auto"><ul class="space-y-2 list-none m-0 p-0" id="waitingList"></ul></div>
<div class="lg:col-span-8 glass-panel inner-glow-accent p-6 min-h-[400px]" id="reviewContent"><p class="text-on-surface-variant text-body-sm text-center py-12">Select a batch with emails to review.</p></div>
</div>
</section>

<section class="scroll-mt-24 space-y-4" id="view-search">
<h2 class="font-headline-lg text-headline-lg italic">Pipeline Ignition</h2>
<div class="grid lg:grid-cols-12 gap-gutter">
<form id="searchForm" class="lg:col-span-4 glass-panel p-6 space-y-5 h-fit">
<div class="space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant" for="maxSearches">Max searches</label>
<input id="maxSearches" type="number" min="1" max="50" value="5" class="w-full bg-[#08090A] border border-outline-variant/50 rounded px-3 py-2 text-body-sm text-on-surface outline-none"/></div>
<div class="space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant" for="serpBudget">SERP budget (USD)</label>
<input id="serpBudget" type="number" min="0" step="0.01" placeholder="optional" class="w-full bg-[#08090A] border border-outline-variant/50 rounded px-3 py-2 text-body-sm text-on-surface outline-none"/></div>
<button type="submit" id="searchBtn" class="w-full bg-primary-fixed-dim text-on-primary-fixed px-6 py-3 rounded font-mono-label shadow-[0_0_15px_rgba(0,219,233,0.3)] flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[18px]">rocket_launch</span>Start search</button>
</form>
<div class="lg:col-span-8 space-y-4">
<div id="searchIdle" class="glass-panel p-8 text-center"><span class="material-symbols-outlined text-4xl text-outline mb-3 block">radar</span><p class="text-on-surface-variant text-body-sm">No search running.</p></div>
<div id="searchProgress" class="glass-panel p-6 space-y-6" hidden>
<p class="font-mono-label text-primary-fixed-dim" id="searchJobLabel"></p>
<div id="progressSteps"></div>
<div class="bg-[#08090A] border border-outline-variant/30 rounded p-4 font-mono-label text-primary-fixed-dim/90 h-52 overflow-y-auto whitespace-pre-wrap" id="searchLog"></div>
</div>
</div>
</div>
</section>

<section class="scroll-mt-24 space-y-4" id="view-import">
<h2 class="font-headline-lg text-headline-lg italic">Lead Ingestion</h2>
<div class="glass-panel p-6 space-y-5 max-w-3xl">
<label class="font-label-caps text-label-caps text-on-surface-variant" for="json">JSON payload</label>
<textarea id="json" class="w-full min-h-[160px] bg-[#08090A] border border-outline-variant/50 rounded p-4 font-mono-label text-on-surface-variant outline-none resize-y" placeholder='[{"name":"…","facebook":"https://…"}]'></textarea>
<label class="glass-panel p-6 border-dashed border-outline-variant/50 flex flex-col items-center gap-3 cursor-pointer hover:bg-surface-variant/10 text-center">
<input type="file" id="file" accept=".json,application/json" class="hidden"/><span class="material-symbols-outlined text-3xl">cloud_upload</span><span class="text-body-sm font-semibold">Upload JSON</span>
</label>
<div class="flex items-center justify-between flex-wrap gap-4">
<p class="font-mono-label text-on-surface-variant italic m-0" id="importStatus">Ready.</p>
<div class="flex gap-3">
<button type="button" id="importBtn" class="bg-surface-container-high hover:bg-surface-variant px-5 py-2 rounded font-mono-label">Import leads</button>
<button type="button" id="runBtn" disabled class="bg-primary-fixed-dim text-on-primary-fixed px-5 py-2 rounded font-mono-label disabled:opacity-40">Run pipeline</button>
</div>
</div>
<div class="bg-[#08090A] border border-outline-variant/30 rounded p-4 font-mono-label text-emerald-400/90 h-40 overflow-y-auto whitespace-pre-wrap" id="importLog" hidden></div>
</div>
</section>
</main>`
);

html = html.replace(
  /System Status: Nominal/,
  ``
);
html = html.replace(
  /<span class="text-on-surface-variant" id="sidebarStatus">Ready<\/span>/,
  `<span class="text-on-surface-variant" id="sidebarStatus">Ready</span>`
);
html = html.replace(
  /<span class="text-on-surface-variant"><\/span>/,
  `<span class="text-on-surface-variant" id="sidebarStatus">Ready</span>`
);
// Footer status id
html = html.replace(
  /<span class="text-on-surface-variant">(\s*)<\/span>\s*<div class="h-4/,
  `<span class="text-on-surface-variant" id="sidebarStatus">Ready</span>
<div class="h-4`
);
if (!html.includes('id="sidebarStatus"')) {
  html = html.replace(
    "Worker 04: Active",
    `<span id="sidebarStatus">Ready</span>`
  );
}

html = html.replace("</head>", `<link rel="stylesheet" href="/app-overrides.css" />\n</head>`);
if (!html.includes("/app.js")) {
  html = html.replace("</body>", `<script src="/app.js" type="module"></script>\n</body>`);
}

fs.writeFileSync(outPath, html, "utf8");

fs.writeFileSync(
  overridesPath,
  `[hidden] { display: none !important; }
.nav-btn.active { opacity: 1 !important; color: #00dbe9 !important; border-left: 2px solid #00dbe9; background: rgba(0,219,233,0.08); }
.queue-item.ready { border-left: 2px solid #00dbe9; background: rgba(0,219,233,0.06); }
.queue-item.selected { outline: 1px solid rgba(0,219,233,0.35); }
.fbl-empty { padding: 2rem; text-align: center; color: #849495; }
`,
  "utf8"
);

console.log(`✓ Applied Stitch dashboard → ${outPath}`);
