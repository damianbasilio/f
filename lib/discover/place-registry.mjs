/**
 * Persistent place_id dedupe across discovery runs.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../load-env.mjs";

const REGISTRY_PATH = path.join(root, "data", "discover", "place-registry.json");

/**
 * @returns {{ version: number, updatedAt: string, places: Record<string, string> }}
 */
export function loadPlaceRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    return { version: 1, updatedAt: new Date().toISOString(), places: {} };
  }
  try {
    const data = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
    if (!data.places || typeof data.places !== "object") {
      return { version: 1, updatedAt: new Date().toISOString(), places: {} };
    }
    return data;
  } catch {
    return { version: 1, updatedAt: new Date().toISOString(), places: {} };
  }
}

/**
 * @param {{ version: number, updatedAt: string, places: Record<string, string> }} registry
 */
export function savePlaceRegistry(registry) {
  fs.mkdirSync(path.dirname(REGISTRY_PATH), { recursive: true });
  registry.updatedAt = new Date().toISOString();
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + "\n", "utf8");
}

/**
 * @param {string} placeId
 * @param {Record<string, string>} places
 */
export function isKnownPlace(placeId, places) {
  return Boolean(placeId && places[placeId]);
}

/**
 * @param {string} placeId
 * @param {Record<string, string>} places
 */
export function registerPlace(placeId, places) {
  if (placeId) places[placeId] = new Date().toISOString();
}
