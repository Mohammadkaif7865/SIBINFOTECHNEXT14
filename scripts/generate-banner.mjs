// scripts/generate-banner.mjs
// Renders a branded 1600x900 hero image for blog posts that have no usable
// featured image and no salvageable fallback (banner_image, etc).
import sharp from "sharp";
import fs from "node:fs";

function wrapText(text, maxCharsPerLine) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxCharsPerLine) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function generateBanner(title, outPath) {
  const lines = wrapText(title, 28).slice(0, 4);
  const lineHeight = 76;
  const totalTextHeight = lines.length * lineHeight;
  const startY = 450 - totalTextHeight / 2 + lineHeight * 0.75;

  const tspans = lines
    .map((line, i) => `<tspan x="130" y="${startY + i * lineHeight}">${escapeXml(line)}</tspan>`)
    .join("");

  const svg = `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="55%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <circle cx="1440" cy="120" r="200" fill="#ffffff" opacity="0.05"/>
  <circle cx="1300" cy="780" r="260" fill="#ffffff" opacity="0.04"/>
  <line x1="130" y1="140" x2="230" y2="140" stroke="#93c5fd" stroke-width="4"/>
  <text x="130" y="115" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#bfdbfe" letter-spacing="2">SIB INFOTECH</text>
  <text font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800" fill="#ffffff">${tspans}</text>
</svg>`.trim();

  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(outPath);
  return outPath;
}

if (process.argv[1]?.includes("generate-banner")) {
  const title = process.argv[2];
  const outPath = process.argv[3];
  if (!title || !outPath) {
    console.error("Usage: node scripts/generate-banner.mjs \"Title\" out.jpg");
    process.exit(1);
  }
  generateBanner(title, outPath).then(() => console.log(`Wrote ${outPath}`));
}
