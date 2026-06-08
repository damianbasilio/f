/**

 * End-to-end: batch discover (Places + SERP) → per-lead pipeline after SERP results.

 * Usage: node scripts/discover-to-pipeline.mjs [--max-searches N] [--serp-budget USD] [--dry-run]

 */

import { loadEnv } from "../lib/load-env.mjs";

import { runDiscoverToPipelineStream } from "../lib/discover-to-pipeline-stream.mjs";



loadEnv();



const args = process.argv.slice(2);

const dryRun = args.includes("--dry-run");

const noShuffle = args.includes("--no-shuffle");

const skipStitch = args.includes("--skip-stitch");

const skipActivity = args.includes("--skip-activity");

const queriesFileIdx = args.indexOf("--queries-file");

const maxSearchesIdx = args.indexOf("--max-searches");

const serpBudgetIdx = args.indexOf("--serp-budget");



const maxSearches =

  maxSearchesIdx !== -1 && args[maxSearchesIdx + 1] ? Number(args[maxSearchesIdx + 1]) : undefined;

const serpBudgetUsd =

  serpBudgetIdx !== -1 && args[serpBudgetIdx + 1] ? Number(args[serpBudgetIdx + 1]) : undefined;



try {

  await runDiscoverToPipelineStream({

    dryRun,

    noShuffle,

    skipStitch,

    skipActivity,

    queriesFile: queriesFileIdx !== -1 ? args[queriesFileIdx + 1] : process.env.DISCOVER_QUERIES_FILE,

    maxSearches,

    serpBudgetUsd,

  });

} catch (err) {

  console.error(`\n✗ Pipeline failed: ${err.message}`);

  process.exit(1);

}

