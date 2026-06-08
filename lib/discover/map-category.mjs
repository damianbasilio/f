/**
 * Map Google Places types to business_category slug for import.
 */

const TYPE_MAP = [
  [/pet_groom|pet_groomer|dog_groom|animal_groom|veterinary_care/i, "pet_groomer"],
  [/towing|tow_truck/i, "towing_service"],
  [/plumber|plumbing/i, "plumber"],
  [/electrician|electrical/i, "electrician"],
  [/general_contractor|roofing|hvac|painter|landscap|handyman|home_goods_store/i, "handyman"],
  [/restaurant|food|cafe|bakery|bar|meal/i, "restaurant"],
  [/gym|fitness|yoga|crossfit/i, "fitness"],
  [/hair_care|beauty_salon|barber|nail_salon|spa/i, "salon"],
  [/lawyer|attorney|legal/i, "lawyer"],
  [/dentist|dental|doctor|physician|clinic|medical/i, "dental"],
  [/car_repair|auto_repair|automotive/i, "auto_repair"],
  [/store|shop|retail/i, "local_business"],
];

/**
 * @param {string[]} types
 * @param {string} [searchCategory]
 */
export function mapCategory(types, searchCategory = "") {
  const combined = [...(types || []), searchCategory].join(" ");
  for (const [re, slug] of TYPE_MAP) {
    if (re.test(combined)) return slug;
  }
  if (searchCategory) {
    return searchCategory.toLowerCase().replace(/\s+/g, "_").slice(0, 40);
  }
  return "local_business";
}
