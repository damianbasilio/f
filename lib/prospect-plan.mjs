import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";

const HISTORY_MAX = 15;
const HISTORY_AVOID = 5;

/**
 * @param {number} count
 * @param {string} mockupsRoot
 */
export function buildPlan(count, mockupsRoot = root) {
  const taxonomyPath = path.join(mockupsRoot, "data", "prospect-taxonomy.json");
  const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, "utf8"));

  const historyPath = path.join(mockupsRoot, "data", "research-history.json");
  let history = { entries: [] };
  if (fs.existsSync(historyPath)) {
    history = JSON.parse(fs.readFileSync(historyPath, "utf8"));
  }

  const recent = history.entries.slice(-HISTORY_AVOID);
  const recentVerticals = new Set(recent.map((e) => e.vertical));
  const recentStates = new Set(recent.map((e) => e.state));

  const usedVerticals = new Set();
  const usedStates = new Set();
  const plan = [];

  const regions = shuffle([...taxonomy.regions]);
  let regionIdx = 0;

  for (let i = 0; i < count; i++) {
    let picked = null;
    let attempts = 0;

    while (!picked && attempts < 200) {
      attempts++;
      const region = regions[regionIdx % regions.length];
      regionIdx++;
      const state = pickState(region, usedStates, recentStates);
      if (!state) continue;

      const vertical = pickVertical(taxonomy.verticals, usedVerticals, recentVerticals);
      if (!vertical) continue;

      const template = taxonomy.queryTemplates[plan.length % taxonomy.queryTemplates.length];
      const query = template
        .replace("{vertical}", vertical)
        .replace("{state}", state.name)
        .replace("{region}", region.name);

      picked = {
        region: region.name,
        state: state.name,
        stateCode: state.code,
        vertical,
        query,
      };
      usedVerticals.add(vertical);
      usedStates.add(state.name);
    }

    if (!picked) {
      throw new Error(`Could not build plan row ${i + 1} — expand taxonomy or clear history`);
    }
    plan.push(picked);
  }

  return { plan, generatedAt: new Date().toISOString() };
}

function pickState(region, usedStates, recentStates) {
  const pool = shuffle(
    region.states.filter((s) => !usedStates.has(s.name) && !recentStates.has(s.name))
  );
  if (pool.length) return pool[0];
  return shuffle(region.states.filter((s) => !usedStates.has(s.name)))[0] || null;
}

function pickVertical(verticals, usedVerticals, recentVerticals) {
  const pool = shuffle(
    verticals.filter((v) => !usedVerticals.has(v) && !recentVerticals.has(v))
  );
  if (pool.length) return pool[0];
  return shuffle(verticals.filter((v) => !usedVerticals.has(v)))[0] || null;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * @param {{ plan: { region: string, state: string, stateCode: string, vertical: string, query: string }[] }} planResult
 * @param {string} mockupsRoot
 */
export function commitPlan(planResult, mockupsRoot = root) {
  const historyPath = path.join(mockupsRoot, "data", "research-history.json");
  let history = { entries: [] };
  if (fs.existsSync(historyPath)) {
    history = JSON.parse(fs.readFileSync(historyPath, "utf8"));
  }

  const date = new Date().toISOString().slice(0, 10);
  for (const row of planResult.plan) {
    history.entries.push({
      date,
      region: row.region,
      state: row.state,
      vertical: row.vertical,
      query: row.query,
    });
  }

  if (history.entries.length > HISTORY_MAX) {
    history.entries = history.entries.slice(-HISTORY_MAX);
  }

  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), "utf8");
}

export function formatPlanMarkdown(planResult) {
  const lines = [
    `# Research plan (${planResult.plan.length} searches)`,
    "",
    `Generated: ${planResult.generatedAt}`,
    "",
    "| # | Region | State | Vertical | Search query |",
    "| - | ------ | ----- | -------- | ------------- |",
  ];
  planResult.plan.forEach((row, i) => {
    lines.push(`| ${i + 1} | ${row.region} | ${row.state} | ${row.vertical} | ${row.query} |`);
  });
  lines.push("", "Find **3× target N** unique business URLs, then `npm run prospect:funnel -- --file batches/url-pool.txt`");
  return lines.join("\n");
}
