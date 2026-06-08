/**
 * Hostnames and URL patterns for third-party directories / listings — not owned business sites.
 * Used by Facebook verification to PASS leads whose FB "website" is only a listing page.
 */

/** @type {RegExp[]} — matched against hostname (lowercase) */
export const DIRECTORY_HOST_PATTERNS = [
  // Social, link-in-bio, short links
  /(?:^|\.)facebook\.com$/i,
  /(?:^|\.)fb\.com$/i,
  /(?:^|\.)instagram\.com$/i,
  /(?:^|\.)linktr\.ee$/i,
  /(?:^|\.)bit\.ly$/i,
  /(?:^|\.)goo\.gl$/i,
  /(?:^|\.)tiktok\.com$/i,

  // Major review / local marketplaces
  /(?:^|\.)yelp\.com$/i,
  /(?:^|\.)tripadvisor\.com$/i,
  /(?:^|\.)foursquare\.com$/i,
  /(?:^|\.)nextdoor\.com$/i,
  /(?:^|\.)bbb\.org$/i,
  /(?:^|\.)angi\.com$/i,
  /(?:^|\.)homeadvisor\.com$/i,
  /(?:^|\.)thumbtack\.com$/i,
  /(?:^|\.)porch\.com$/i,
  /(?:^|\.)bark\.com$/i,
  /(?:^|\.)expertise\.com$/i,
  /(?:^|\.)clutch\.co$/i,
  /(?:^|\.)alignable\.com$/i,

  // Yellow pages / phone book family
  /(?:^|\.)yellowpages\.com$/i,
  /(?:^|\.)superpages\.com$/i,
  /(?:^|\.)whitepages\.com$/i,
  /(?:^|\.)dexknows\.com$/i,
  /(?:^|\.)citysearch\.com$/i,
  /(?:^|\.)anywho\.com$/i,
  /(?:^|\.)411\.com$/i,
  /(?:^|\.)411\.info$/i,
  /(?:^|\.)b2byellowpages\.com$/i,

  // Data aggregators & local SEO directories
  /(?:^|\.)manta\.com$/i,
  /(?:^|\.)merchantcircle\.com$/i,
  /(?:^|\.)chamberofcommerce\.com$/i,
  /(?:^|\.)local\.com$/i,
  /(?:^|\.)mapquest\.com$/i,
  /(?:^|\.)showmelocal\.com$/i,
  /(?:^|\.)hotfrog\.com$/i,
  /(?:^|\.)brownbook\.net$/i,
  /(?:^|\.)cylex\.(?:us|ca|co\.uk)$/i,
  /(?:^|\.)tuugo\.(?:us|co|info)$/i,
  /(?:^|\.)n49\.com$/i,
  /(?:^|\.)ezlocal\.com$/i,
  /(?:^|\.)iglobal\.co$/i,
  /(?:^|\.)finduslocal\.com$/i,
  /(?:^|\.)ibegin\.com$/i,
  /(?:^|\.)judysbook\.com$/i,
  /(?:^|\.)kudzu\.com$/i,
  /(?:^|\.)insiderpages\.com$/i,
  /(?:^|\.)localstack\.com$/i,
  /(?:^|\.)opendi\.(?:us|com)$/i,
  /(?:^|\.)enrollbusiness\.com$/i,
  /(?:^|\.)loc8nearme\.com$/i,
  /(?:^|\.)locu\.com$/i,
  /(?:^|\.)singleplatform\.com$/i,
  /(?:^|\.)whereorg\.com$/i,
  /(?:^|\.)locanto\.(?:com|us)$/i,
  /(?:^|\.)oodle\.com$/i,
  /(?:^|\.)usplaces\.com$/i,
  /(?:^|\.)citysquares\.com$/i,
  /(?:^|\.)hubbiz\.com$/i,
  /(?:^|\.)fyple\.(?:com|biz)$/i,
  /(?:^|\.)tupalo\.com$/i,
  /(?:^|\.)localmint\.com$/i,
  /(?:^|\.)localdatabase\.com$/i,
  /(?:^|\.)infobel\.com$/i,
  /(?:^|\.)kompass\.com$/i,
  /(?:^|\.)dandb\.com$/i,
  /(?:^|\.)broadly\.com$/i,
  /(?:^|\.)neustarlocaleze\.com$/i,
  /(?:^|\.)localpages\.com$/i,
  /(?:^|\.)us-info\.com$/i,
  /(?:^|\.)uscompanies\.org$/i,
  /(?:^|\.)us-business\.info$/i,
  /(?:^|\.)bizapedia\.com$/i,
  /(?:^|\.)corporationwiki\.com$/i,
  /(?:^|\.)company-histories\.com$/i,
  /(?:^|\.)buildzoom\.com$/i,
  /(?:^|\.)houzz\.com$/i,
  /(?:^|\.)lawyers\.com$/i,
  /(?:^|\.)avvo\.com$/i,
  /(?:^|\.)healthgrades\.com$/i,
  /(?:^|\.)vitals\.com$/i,
  /(?:^|\.)webmd\.com$/i,
  /(?:^|\.)zocdoc\.com$/i,
  /(?:^|\.)ratemds\.com$/i,
  /(?:^|\.)realself\.com$/i,

  // Restaurant / menu directories
  /(?:^|\.)zomato\.com$/i,
  /(?:^|\.)menuism\.com$/i,
  /(?:^|\.)allmenus\.com$/i,
  /(?:^|\.)menupages\.com$/i,
  /(?:^|\.)restaurantji\.com$/i,
  /(?:^|\.)restaurant\.com$/i,
  /(?:^|\.)menuwithprice\.com$/i,
  /(?:^|\.)fastfoodmenuprices\.com$/i,

  // Delivery / marketplace store pages (not owned sites)
  /(?:^|\.)doordash\.com$/i,
  /(?:^|\.)ubereats\.com$/i,
  /(?:^|\.)grubhub\.com$/i,
  /(?:^|\.)seamless\.com$/i,
  /(?:^|\.)postmates\.com$/i,
  /(?:^|\.)slice\.life$/i,

  // Maps providers
  /(?:^|\.)waze\.com$/i,
  /(?:^|\.)here\.com$/i,
  /(?:^|\.)tomtom\.com$/i,
  /(?:^|\.)maps\.apple\.com$/i,

  // Local news / media business finders (subdomains vary by market)
  /businessfinder\./i,
  /bizdirectory\./i,
  /businessdirectory\./i,
  /localfinder\./i,
  /(?:^|\.)patch\.com$/i,
  /(?:^|\.)bizjournals\.com$/i,
  /(?:^|\.)communityimpact\.com$/i,
  /(?:^|\.)qualitybusinessawards\.com$/i,
  /(?:^|\.)way\.com$/i,
];

/** @type {RegExp[]} — matched against full URL (lowercase) */
export const DIRECTORY_URL_PATTERNS = [
  /google\.com\/maps/i,
  /maps\.google/i,
  /goo\.gl\/maps/i,
  /bing\.com\/(?:local|maps)/i,
  /yahoo\.com\/local/i,
  /search\.yahoo\.com\/local/i,
  /apple\.com\/maps/i,
  /wikipedia\.org\/wiki/i,
  /doordash\.com\/store\//i,
  /ubereats\.com\/store\//i,
  /grubhub\.com\/restaurant\//i,
  /yelp\.com\/biz\//i,
  /tripadvisor\.com\/(?:Restaurant|Attraction|Hotel)_Review/i,
  /facebook\.com\/(?:pages|people|profile|pg|marketplace|groups)/i,
  /nextdoor\.com\/(?:pages|biz)/i,
  /chamberofcommerce\.com\/(?:business-directory|biz)/i,
  /manta\.com\/(?:c|mb)/i,
  /businessfinder\./i,
  /\/business-directory\//i,
  /\/business-listings?\//i,
  /\/local-business\//i,
  /\/company-profile\//i,
  /\/biz\/[^/]+\/[^/]+(?:\/|$)/i,
  /\/(?:contests?|promotions?|giveaways?|sweepstakes)\//i,
  /\/station\//i,
  // Do not treat utm_* query params as directory — GBP website links almost always include them.
];

/**
 * @param {string} url
 * @returns {boolean}
 */
export function isDirectoryListing(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!/^https?:\/\//i.test(trimmed)) return false;
  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.toLowerCase();
    const full = parsed.href.toLowerCase();
    if (DIRECTORY_HOST_PATTERNS.some((re) => re.test(host))) return true;
    if (DIRECTORY_URL_PATTERNS.some((re) => re.test(full))) return true;
    return false;
  } catch {
    return DIRECTORY_URL_PATTERNS.some((re) => re.test(trimmed.toLowerCase()));
  }
}
