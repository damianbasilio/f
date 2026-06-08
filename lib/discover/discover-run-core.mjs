/**
 * Lead discovery core — Google Places + batch SERP (unchanged flow).
 * Optional onCandidate: called per lead after SERP batch results (and GBP direct at SERP phase start).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../load-env.mjs";
import { buildSearchGrid, loadJsonArray, shuffleGrid } from "./grid.mjs";
import { searchPlaces, delay } from "./places-search.mjs";
import {
  buildSerpQuery,
  runSerpBatch,
  DEFAULT_SERP_INITIAL_WAIT_MS,
  DEFAULT_SERP_READY_POLL_MS,
  DEFAULT_SERP_BATCH_TIMEOUT_MS,
} from "./serp-check.mjs";
import { evaluateSerpForLead } from "./serp-evaluate.mjs";
import {
  passesWebsitePrefilter,
  extractFacebookUrl,
  classifyDiscoveryWebsite,
} from "./filters.mjs";
import { normalizeCandidate } from "./normalize-lead.mjs";
import { parsePlaceAddress, parseCityGrid } from "./parse-address.mjs";
import { createBudgetTracker } from "./budget.mjs";
import {
  loadPlaceRegistry,
  savePlaceRegistry,
  isKnownPlace,
  registerPlace,
} from "./place-registry.mjs";
import { lookupFbLead, ensureFbLeadRegistry } from "../fb-lead-registry.mjs";

/**
 * @param {object} opts
 * @param {boolean} [opts.dryRun]
 * @param {boolean} [opts.noShuffle]
 * @param {string} [opts.queriesFile]
 * @param {number} [opts.maxSearches]
 * @param {number} [opts.serpBudgetUsd]
 * @param {(candidate: object) => void | Promise<void>} [opts.onCandidate] — per-lead after SERP phase
 */
export async function runDiscover(opts = {}) {
  const dryRun = opts.dryRun ?? false;
  const noShuffle = opts.noShuffle ?? false;
  const onCandidate = opts.onCandidate;

  const maxSearches =
    opts.maxSearches ?? (Number(process.env.DISCOVER_MAX_GOOGLE_SEARCHES) || 1000);
  const serpBudgetUsd = opts.serpBudgetUsd ?? (Number(process.env.DISCOVER_SERP_BUDGET_USD) || 1.0);
  const googleDelayMs = Number(process.env.DISCOVER_GOOGLE_DELAY_MS) || 300;
  const placesMaxPages = Math.max(1, Math.min(Number(process.env.DISCOVER_PLACES_PAGES) || 1, 3));

  const configDir = path.join(root, "data", "discover", "config");
  const outputDir = path.join(root, "data", "discover", "output");

  const cities = loadJsonArray(path.join(configDir, "cities.json"), fs);
  const categories = loadJsonArray(path.join(configDir, "categories.json"), fs);
  ensureFbLeadRegistry();

  /** @type {{ query: string, city: string, category: string }[]} */
  let grid;
  if (opts.queriesFile) {
    const qPath = path.isAbsolute(opts.queriesFile)
      ? opts.queriesFile
      : path.join(root, opts.queriesFile);
    grid = JSON.parse(fs.readFileSync(qPath, "utf8"));
    if (!Array.isArray(grid) || !grid.length) {
      throw new Error(`queries file must be a non-empty JSON array: ${qPath}`);
    }
  } else {
    grid = buildSearchGrid(cities, categories);
    if (!noShuffle) grid = shuffleGrid(grid);
  }

  const budget = createBudgetTracker({ maxGoogleSearches: maxSearches, serpBudgetUsd });
  const registry = loadPlaceRegistry();

  const stats = {
    startedAt: new Date().toISOString(),
    dryRun,
    gridSize: grid.length,
    rawPlaces: 0,
    newPlaces: 0,
    skippedKnownPlace: 0,
    websiteSurvivors: 0,
    websiteRejected: 0,
    serpChecked: 0,
    serpSkippedBudget: 0,
    gbpFacebookDirect: 0,
    serpRejected: 0,
    serpErrors: 0,
    serpTimeouts: 0,
    serpBatchSubmitted: 0,
    skippedExistingFb: 0,
    finalCandidates: 0,
    shuffled: !opts.queriesFile && !noShuffle,
    queriesFile: opts.queriesFile || null,
  };

  /** @type {object[]} */
  const candidates = [];
  const pendingSerp = new Map();
  const websiteFilterLog = { rejected: [], survivors: [] };

  async function emitCandidate(candidate, label) {
    candidates.push(candidate);
    stats.finalCandidates += 1;
    if (onCandidate) {
      await onCandidate(candidate);
    }
    console.log(`✓ ${candidate.city} (${label})`);
  }

  console.log(`\nLead discovery — ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(
    `  Grid: ${grid.length} searches${opts.queriesFile ? " (fixed queries file)" : ` (${cities.length} cities × ${categories.length} categories)`}`
  );
  console.log(
    `  Order: ${opts.queriesFile ? "fixed (queries file)" : noShuffle ? "fixed (config order)" : "shuffled (random each run)"}`
  );
  console.log(
    `  Caps: ${maxSearches} Google searches, $${serpBudgetUsd} SERP budget, batch SERP (first check ${DEFAULT_SERP_INITIAL_WAIT_MS / 60_000} min, poll every ${DEFAULT_SERP_READY_POLL_MS / 60_000} min, until 8 AM or ${DEFAULT_SERP_BATCH_TIMEOUT_MS / 60_000} min)`
  );
  if (placesMaxPages > 1) {
    console.log(`  Places pages per search: ${placesMaxPages} (up to ${placesMaxPages * 20} results)`);
  }
  if (onCandidate) {
    console.log(
      `  Downstream: GBP Facebook → pipeline immediately; SERP leads → pipeline as each result arrives`
    );
  }
  console.log("");

  for (const ctx of grid) {
    if (!budget.canSearchGoogle()) {
      console.log(`  ○ Google search cap reached (${budget.maxGoogleSearches})`);
      break;
    }

    if (dryRun) {
      console.log(`  [dry-run] ${ctx.query}`);
      budget.recordGoogleSearch();
      continue;
    }

    console.log(`  → ${ctx.query}`);
    let places;
    try {
      const pagesUsed = await searchPlaces(ctx.query, process.env.GOOGLE_PLACES_API_KEY, {
        maxPages: placesMaxPages,
      });
      places = pagesUsed.places;
      for (let i = 0; i < pagesUsed.pagesFetched; i++) budget.recordGoogleSearch();
      stats.rawPlaces += places.length;
    } catch (err) {
      console.error(`    ✗ Places error: ${err.message}`);
      continue;
    }

    await delay(googleDelayMs);

    for (const place of places) {
      const placeId = place.id || "";
      if (!placeId) continue;

      if (isKnownPlace(placeId, registry.places)) {
        stats.skippedKnownPlace += 1;
        continue;
      }

      registerPlace(placeId, registry.places);
      stats.newPlaces += 1;

      const websiteUri = place.websiteUri || "";
      const classification = classifyDiscoveryWebsite(websiteUri);
      const entry = {
        name: place.displayName?.text || "",
        place_id: placeId,
        websiteUri: websiteUri || null,
        classification,
        discovery_query: ctx.query,
      };

      if (!passesWebsitePrefilter(websiteUri)) {
        stats.websiteRejected += 1;
        websiteFilterLog.rejected.push(entry);
        continue;
      }

      stats.websiteSurvivors += 1;
      websiteFilterLog.survivors.push(entry);
      pendingSerp.set(placeId, { place, ctx, websiteUri });
    }
  }

  if (!dryRun && pendingSerp.size > 0) {
    const gbpFbCount = [...pendingSerp.values()].filter(({ websiteUri }) =>
      extractFacebookUrl(websiteUri)
    ).length;
    const serpCount = pendingSerp.size - gbpFbCount;

    if (gbpFbCount) {
      console.log(`\n  ${gbpFbCount} GBP Facebook (skip SERP)…`);
    }
    if (serpCount) {
      console.log(`\n  SERP batch: ${serpCount} website survivor(s) (DataForSEO Standard, normal priority)…`);
    }
    console.log("");

    /** @type {{ tag: string, keyword: string, place: object, ctx: object, websiteUri: string, name: string }[]} */
    const serpJobs = [];

    for (const [placeId, { place, ctx, websiteUri }] of pendingSerp) {
      const name = place.displayName?.text || "";
      const fbFromGbp = extractFacebookUrl(websiteUri);

      if (fbFromGbp) {
        stats.gbpFacebookDirect += 1;

        if (lookupFbLead(fbFromGbp)) {
          console.log(`    … GBP FB "${name}" skip (already in pipeline)`);
          stats.skippedExistingFb += 1;
          continue;
        }

        const candidate = normalizeCandidate(place, ctx, {
          googleFirstUrl: fbFromGbp,
          facebook: fbFromGbp,
        });
        if (onCandidate) {
          console.log(`    … GBP FB "${name}" → pipeline`);
          await emitCandidate(candidate, "gbp_facebook_confirmed");
        } else {
          process.stdout.write(`    … GBP FB "${name}" `);
          candidates.push(candidate);
          stats.finalCandidates += 1;
          console.log(`✓ ${candidate.city} (gbp_facebook_confirmed)`);
        }
        continue;
      }

      if (!budget.canSerpCheck()) {
        stats.serpSkippedBudget += 1;
        continue;
      }

      const addr = parsePlaceAddress(place);
      const gridCity = parseCityGrid(ctx.city);
      const city = addr.city || gridCity.city;
      const state = addr.state || gridCity.state;
      const serpQuery = buildSerpQuery(name, city, state);

      serpJobs.push({ tag: placeId, keyword: serpQuery, place, ctx, websiteUri, name });
      budget.recordSerpCheck();
    }

    /** @type {Map<string, object>} */
    const serpJobByTag = new Map(serpJobs.map((j) => [j.tag, j]));

    async function processSerpJobResult(job, result) {
      const { place, ctx, websiteUri, name } = job;
      process.stdout.write(`    … SERP "${name}" `);

      if (!result) {
        stats.serpErrors += 1;
        console.log("✗ no batch result");
        return;
      }
      if (!result.ok) {
        if (/timeout|not ready/i.test(result.error)) stats.serpTimeouts += 1;
        else stats.serpErrors += 1;
        console.log(`✗ ${result.error}`);
        return;
      }

      stats.serpChecked += 1;

      const evaluation = evaluateSerpForLead({
        businessName: name,
        websiteUri,
        organicResults: result.organicResults,
      });

      if (!evaluation.pass) {
        stats.serpRejected += 1;
        console.log(`skip (${evaluation.reason})`);
        return;
      }

      const facebook = evaluation.facebook || extractFacebookUrl(websiteUri) || "";
      if (!facebook) {
        stats.serpRejected += 1;
        console.log("skip (no facebook)");
        return;
      }

      if (lookupFbLead(facebook)) {
        stats.skippedExistingFb += 1;
        console.log("skip (already in pipeline)");
        return;
      }

      const candidate = normalizeCandidate(place, ctx, {
        googleFirstUrl: evaluation.googleFirstUrl || "",
        facebook,
      });

      await emitCandidate(candidate, evaluation.reason);
    }

    if (serpJobs.length > 0) {
      const processedTags = new Set();

      const { results: serpResults, submitted, postErrors } = await runSerpBatch(
        serpJobs.map(({ tag, keyword }) => ({ tag, keyword })),
        process.env.DATAFORSEO_LOGIN,
        process.env.DATAFORSEO_PASSWORD,
        {
          log: (msg) => console.log(msg),
          initialWaitMs: DEFAULT_SERP_INITIAL_WAIT_MS,
          readyPollMs: DEFAULT_SERP_READY_POLL_MS,
          batchTimeoutMs: DEFAULT_SERP_BATCH_TIMEOUT_MS,
          onTaskResult: onCandidate
            ? async (tag, result) => {
                if (processedTags.has(tag)) return;
                processedTags.add(tag);
                const job = serpJobByTag.get(tag);
                if (job) await processSerpJobResult(job, result);
              }
            : undefined,
        }
      );
      stats.serpBatchSubmitted = submitted;
      if (postErrors) stats.serpErrors += postErrors;

      if (!onCandidate) {
        for (const job of serpJobs) {
          await processSerpJobResult(job, serpResults.get(job.tag));
        }
      } else {
        for (const job of serpJobs) {
          if (processedTags.has(job.tag)) continue;
          await processSerpJobResult(job, serpResults.get(job.tag));
        }
      }
    }

  }

  if (!dryRun) savePlaceRegistry(registry);

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const runStats = {
    ...stats,
    finishedAt: new Date().toISOString(),
    budget: budget.toStats(),
  };

  fs.mkdirSync(outputDir, { recursive: true });

  let candidatesPath = null;
  if (!dryRun) {
    candidatesPath = path.join(outputDir, `candidates-${timestamp}.json`);
    fs.writeFileSync(candidatesPath, JSON.stringify(candidates, null, 2) + "\n", "utf8");
    console.log(`\n  Wrote ${candidates.length} candidates → ${path.relative(root, candidatesPath)}`);
  }

  const runPath = path.join(outputDir, `run-${timestamp}.json`);
  fs.writeFileSync(runPath, JSON.stringify(runStats, null, 2) + "\n", "utf8");

  if (!dryRun) {
    const filterPath = path.join(outputDir, `website-filter-${timestamp}.json`);
    fs.writeFileSync(
      filterPath,
      JSON.stringify(
        {
          rejected: websiteFilterLog.rejected,
          survivors: websiteFilterLog.survivors,
          rejectedCount: websiteFilterLog.rejected.length,
          survivorCount: websiteFilterLog.survivors.length,
          finishedAt: new Date().toISOString(),
        },
        null,
        2
      ) + "\n",
      "utf8"
    );
    console.log(`  Website filter → ${path.relative(root, filterPath)}`);
  }

  console.log(`\n  Stats → ${path.relative(root, runPath)}`);
  console.log(`  Raw: ${stats.rawPlaces} | New: ${stats.newPlaces} | Website survivors: ${stats.websiteSurvivors}`);
  console.log(`  SERP checked: ${stats.serpChecked} | Batch submitted: ${stats.serpBatchSubmitted} | Final: ${stats.finalCandidates}`);
  if (stats.serpTimeouts) console.log(`  SERP batch timeouts (skipped): ${stats.serpTimeouts}`);
  if (stats.gbpFacebookDirect) console.log(`  GBP Facebook (no SERP): ${stats.gbpFacebookDirect}`);
  if (stats.skippedExistingFb) console.log(`  Skipped (already in pipeline): ${stats.skippedExistingFb}`);
  if (!dryRun) {
    console.log(`  Spend: $${budget.serpSpendUsd.toFixed(4)} SERP | ${budget.googleSearchesUsed} Google searches\n`);
  } else {
    console.log(`  Would run ${budget.googleSearchesUsed} Google searches\n`);
  }

  return { stats: runStats, candidates, runPath, candidatesPath };
}
