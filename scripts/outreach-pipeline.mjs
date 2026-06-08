/**
 * PM2 entry for the daily outreach scheduler.
 * Logs immediately so PM2 always has a startup line before heavy imports load.
 */
console.log(
  `[outreach-pipeline] entry pid=${process.pid} ${new Date().toISOString()}`
);

const { runDailyPipelineCli } = await import("../lib/daily-pipeline.mjs");
runDailyPipelineCli();
