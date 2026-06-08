/**

 * Rebuild one mockup from Stitch (re-enrich → new design → post-build).

 */

import fs from "node:fs";
import { loadEnv } from "./load-env.mjs";

import { slugDir } from "./paths.mjs";

import { postBuildQueue } from "./post-build-queue.mjs";

import { rebuildSlugFromStitch } from "./rebuild-from-stitch.mjs";

import { resetQaRebuildAttempts } from "./qa-rebuild-attempts.mjs";



export { clearStitchBuildArtifacts } from "./rebuild-from-stitch.mjs";



export async function rebuildMockupOne(slug) {

  loadEnv();



  if (!fs.existsSync(slugDir(slug, "lead.json")) || !fs.existsSync(slugDir(slug, "verification.json"))) {

    throw new Error(`Missing lead.json or verification.json for ${slug}`);

  }



  console.log(`[rebuild] ↻ ${slug}`);

  resetQaRebuildAttempts(slug);



  await rebuildSlugFromStitch(slug);

  const result = await postBuildQueue(slug, { outreach: false, forceDeploy: true });

  const deployed = result.summary?.deploy === "live" || result.summary?.deploy === "pushed";

  if (!result.ok && !deployed) {

    const msg = result.blockers?.[0]?.message || "Post-build failed";

    throw new Error(msg);

  }

  return result;

}

