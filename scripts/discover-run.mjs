/**

 * Lead discovery — Google Places Text Search + DataForSEO SERP prefilter.

 * Usage: node scripts/discover-run.mjs [--dry-run] [--max-searches N] [--serp-budget USD]

 */

import { loadEnv } from "../lib/load-env.mjs";

import { runDiscover } from "../lib/discover/discover-run-core.mjs";



loadEnv();



const args = process.argv.slice(2);

const dryRun = args.includes("--dry-run");

const noShuffle = args.includes("--no-shuffle");

const queriesFileIdx = args.indexOf("--queries-file");

const maxSearchesIdx = args.indexOf("--max-searches");

const serpBudgetIdx = args.indexOf("--serp-budget");



if (!dryRun) {

  if (!process.env.GOOGLE_PLACES_API_KEY) {

    console.error("Missing GOOGLE_PLACES_API_KEY in .env");

    process.exit(1);

  }

  if (!process.env.DATAFORSEO_LOGIN || !process.env.DATAFORSEO_PASSWORD) {

    console.error("Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env");

    process.exit(1);

  }

}



const maxSearches =

  maxSearchesIdx !== -1 && args[maxSearchesIdx + 1]

    ? Number(args[maxSearchesIdx + 1])

    : undefined;

const serpBudgetUsd =

  serpBudgetIdx !== -1 && args[serpBudgetIdx + 1]

    ? Number(args[serpBudgetIdx + 1])

    : undefined;



await runDiscover({

  dryRun,

  noShuffle,

  queriesFile: queriesFileIdx !== -1 ? args[queriesFileIdx + 1] : undefined,

  maxSearches,

  serpBudgetUsd,

});

