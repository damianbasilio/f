/**
 * Track Google search quota and DataForSEO SERP spend during a discovery run.
 */

export const SERP_COST_USD = 0.0006;

/**
 * @param {object} [opts]
 * @param {number} [opts.maxGoogleSearches]
 * @param {number} [opts.serpBudgetUsd]
 */
export function createBudgetTracker(opts = {}) {
  const maxGoogleSearches = opts.maxGoogleSearches ?? 1000;
  const serpBudgetUsd = opts.serpBudgetUsd ?? 1.0;

  return {
    maxGoogleSearches,
    serpBudgetUsd,
    googleSearchesUsed: 0,
    serpChecksUsed: 0,
    serpSpendUsd: 0,

    canSearchGoogle() {
      return this.googleSearchesUsed < this.maxGoogleSearches;
    },

    recordGoogleSearch() {
      this.googleSearchesUsed += 1;
    },

    canSerpCheck() {
      return this.serpSpendUsd + SERP_COST_USD <= this.serpBudgetUsd + 1e-9;
    },

    recordSerpCheck() {
      this.serpChecksUsed += 1;
      this.serpSpendUsd += SERP_COST_USD;
    },

    toStats() {
      return {
        maxGoogleSearches: this.maxGoogleSearches,
        googleSearchesUsed: this.googleSearchesUsed,
        serpBudgetUsd: this.serpBudgetUsd,
        serpChecksUsed: this.serpChecksUsed,
        serpSpendUsd: Number(this.serpSpendUsd.toFixed(4)),
      };
    },
  };
}
