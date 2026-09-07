// scripts/fix-short-blogs.mjs
import fs from "node:fs";
import path from "node:path";
import { readBlog, fetchImage, writeBlog } from "./lib/blog-api.mjs";

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}

loadEnv();

const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";
const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_KEY) {
  console.error("GEMINI_API_KEY is missing in .env.local");
  process.exit(1);
}

const MODELS = [
  "gemini-3.7-flash",
  "gemini-3.5-flash",
  "gemini-3.8-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-flash-latest",
  "gemini-flash-lite-latest",
  "gemini-pro-latest",
];

async function generateFullArticle({ title, currentIntro, metaDescription, slug }) {
  const prompt = `You are a premier senior digital marketing technologist and lead strategist writing for SIB Infotech (a top Google Premier Partner and award-winning digital marketing agency).

You need to expand a short blog post into a world-class, exhaustive, authoritative, deeply technical, and actionable **2,000 to 3,000 words** long-form industry guide.

Title: "${title}"
Slug: "${slug}"
Meta Description: "${metaDescription || ""}"
Current Opening Intro:
"${currentIntro}"

================================================================================
CRITICAL EDITORIAL & SEO REQUIREMENTS:
================================================================================
1. **LENGTH & DEPTH (MANDATORY)**:
   - Must be between **2,000 and 3,000 words** of detailed, non-fluff, actionable technical and strategic content.
   - Deeply analyze the real-world mechanics, technical architecture, data, algorithms, and practical applications.

2. **PRESERVE THE PREMISE**:
   - Seamlessly integrate the existing opening intro into the article opening without discarding its core thesis.

3. **KEYWORD CANNIBALIZATION SAFETY**:
   - This blog post is an INFORMATIONAL guide.
   - Do NOT target primary commercial terms in H1/H2 (e.g. do not try to rank this post as "best SEO agency in Mumbai").
   - Instead, naturally link commercial keywords to their canonical SIB Infotech service pages per the cluster rules:
     * SEO Services / Agency -> \`<a href="/seo-company-mumbai">SEO services</a>\`
     * PPC / Google Ads -> \`<a href="/google-ads-management-services">Google Ads management services</a>\`
     * Digital Marketing -> \`<a href="/digital-marketing-services">digital marketing services</a>\`
     * Technical SEO -> \`<a href="/technical-seo-services">technical SEO services</a>\`
     * GEO / AI Search -> \`<a href="/generative-engine-optimization">Generative Engine Optimization (GEO)</a>\`
     * Web Design -> \`<a href="/website-designing-services">custom website designing services</a>\`
     * Web Development -> \`<a href="/website-development-services">web development solutions</a>\`

4. **INTERNAL & OUTBOUND CITATIONS**:
   - **Internal links**: Include 3–5 contextual internal links to relevant SIB Infotech service pages or core pillars.
   - **Outbound links**: Include 2–4 authoritative, non-competing external source citations (e.g., Google Search Central, W3C standards, official platform developer docs, or academic research) formatted as \`<a href="https://..." target="_blank" rel="noopener noreferrer">Source Name</a>\`.

5. **RICH UI / UX COMPONENTS (HTML FORMATTING)**:
   - **Executive Summary / Key Takeaways Card**: Place right below the opening 2 paragraphs.
     \`\`\`html
     <div style="background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%); border: 1px solid #dbeafe; border-left: 5px solid #2563eb; border-radius: 12px; padding: 24px 28px; margin: 32px 0;">
       <h3 style="color: #1e3a8a; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">Executive Summary & Key Takeaways</h3>
       <ul style="margin-bottom: 0;">
         <li><strong>Key Point 1:</strong> ...</li>
         <li><strong>Key Point 2:</strong> ...</li>
         <li><strong>Key Point 3:</strong> ...</li>
       </ul>
     </div>
     \`\`\`
   - **Detailed Headings**: Structure logically with 5–8 main \`<h2>\` sections and several detailed \`<h3>\` subsections.
   - **Responsive Benchmark / Comparison Table**: Include at least one well-crafted HTML table comparing metrics, tools, models, or workflows.
   - **Pro-Tip / Strategy Callouts**: Highlight high-value advice in modern blockquotes or styled alert boxes.
   - **Step-by-Step Strategic Framework**: Actionable checklist or step-by-step roadmap for practitioners.

6. **OUTPUT FORMAT**:
   - Return ONLY clean, valid raw HTML (no markdown fences like \\\`\\\`\\\`html, just direct HTML starting with the lead paragraphs). Ensure high editorial standards.`;

  let lastErr = null;
  for (const model of MODELS) {
    try {
      const url = `${GEMINI_ENDPOINT}/${model}:generateContent?key=${GEMINI_KEY}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 8192,
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Model ${model} returned HTTP ${res.status}: ${text}`);
      }

      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) throw new Error(`Empty response from ${model}`);

      // Strip markdown code fences if any
      let cleanedHtml = rawText.trim();
      if (cleanedHtml.startsWith("```html")) {
        cleanedHtml = cleanedHtml.replace(/^```html\s*/i, "").replace(/\s*```$/, "");
      } else if (cleanedHtml.startsWith("```")) {
        cleanedHtml = cleanedHtml.replace(/^```\s*/, "").replace(/\s*```$/, "");
      }

      return cleanedHtml.trim();
    } catch (err) {
      console.warn(`Attempt with ${model} failed: ${err.message}`);
      lastErr = err;
    }
  }

  throw lastErr || new Error("Failed to generate article from all models");
}

export async function fixSingleBlog(identifier) {
  console.log(`\n========================================`);
  console.log(`Processing: ${identifier}`);
  console.log(`========================================`);

  const safeSlug = String(identifier).replace(/[^a-zA-Z0-9_-]/g, "_");
  const tmpDir = path.join(process.cwd(), "scratch", "blog_tmp", safeSlug);
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  // 1. Read existing blog
  const record = await readBlog(identifier);
  console.log(`[1/4] Fetched blog "${record.name}" (ID: ${record.id})`);
  console.log(`Current description length: ${(record.description || "").length} chars`);

  // 2. Fetch current image to preserve it
  const imageFile = await fetchImage(record, tmpDir);
  console.log(`[2/4] Preserved featured image: ${imageFile ? imageFile.filename : "No image"}`);

  // 3. Generate expanded content (2000-3000 words)
  console.log(`[3/4] Generating 2,000-3,000 words guide with internal/outbound links...`);
  const expandedHtml = await generateFullArticle({
    title: record.name,
    currentIntro: record.description,
    metaDescription: record.meta_description,
    slug: record.slug,
  });
  const wordCount = Math.round(expandedHtml.split(/\s+/).filter(Boolean).length);
  console.log(`Generated HTML length: ${expandedHtml.length} characters (~${wordCount} words)`);

  // 4. Update the record
  record.description = expandedHtml;
  console.log(`[4/4] Writing update to SIB Infotech live API...`);
  const result = await writeBlog(record, imageFile, tmpDir);
  console.log(`Write result:`, result);

  if (result?.error) {
    throw new Error(`Write failed: ${result?.message || JSON.stringify(result)}`);
  }

  // 5. Verify update
  const updated = await readBlog(record.id);
  console.log(`Verification: new description length is ${(updated.description || "").length} chars`);
  console.log(`✅ Successfully updated ${record.slug} (ID ${record.id}) in live database!`);

  return updated;
}

// If run directly
if (process.argv[1]?.includes("fix-short-blogs")) {
  const targetSlug = process.argv[2] || "url-blocked-by-robots-txt-causes,-fixes,-and-seo-impact";
  fixSingleBlog(targetSlug)
    .then(() => {
      console.log("\nDone!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("\nError:", err);
      process.exit(1);
    });
}
