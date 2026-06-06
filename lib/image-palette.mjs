/**
 * Extract dominant colors from image buffer (simple bucket sampling).
 * @param {Buffer} buf
 * @returns {string[]}
 */
export function extractPaletteFromBuffer(buf) {
  if (!buf || buf.length < 100) {
    return ["#2C2C2C", "#8B6914", "#F5F0E8"];
  }

  const buckets = new Map();
  const step = Math.max(3, Math.floor(buf.length / 3000));

  for (let i = 0; i < buf.length - 3; i += step) {
    const r = buf[i];
    const g = buf[i + 1];
    const b = buf[i + 2];
    if (r === undefined || g === undefined || b === undefined) continue;
    if (r > 250 && g > 250 && b > 250) continue;
    if (r < 8 && g < 8 && b < 8) continue;
    const rq = (r >> 4) << 4;
    const gq = (g >> 4) << 4;
    const bq = (b >> 4) << 4;
    const key = `${rq},${gq},${bq}`;
    buckets.set(key, (buckets.get(key) || 0) + 1);
  }

  const sorted = [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([k]) => {
      const [r, g, b] = k.split(",").map(Number);
      return rgbToHex(r, g, b);
    });

  const unique = [...new Set(sorted)];
  if (unique.length >= 3) return unique.slice(0, 6);
  return ["#2C2C2C", "#6B5344", "#F5F0E8", ...unique].slice(0, 6);
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * @param {string} heroPath
 * @returns {Promise<string[]>}
 */
export async function extractPaletteFromFile(heroPath) {
  const fs = await import("node:fs");
  if (!fs.existsSync(heroPath)) return ["#2C2C2C", "#8B6914", "#F5F0E8"];
  const buf = fs.readFileSync(heroPath);
  return extractPaletteFromBuffer(buf);
}
