// pages/api/admin/check-cannibalization.js
import { getSiteInventory } from "@/lib/siteInventory";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const {
    topic,
    primaryKeyword,
    secondaryKeywords,
    proposedSlug,
    targetIntent = "Commercial",
    pageType = "Service",
    customApiKey,
    selectedModel = "claude-3-5-sonnet-20241022"
  } = req.body;

  if (!topic || !primaryKeyword) {
    return res.status(400).json({ error: "Topic and Primary Keyword are required." });
  }

  const apiKey = (customApiKey && customApiKey.trim()) || process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY;

  // Retrieve website catalog
  const inventory = getSiteInventory();

  // Find quick local matches to highlight
  const queryTerms = `${topic} ${primaryKeyword} ${secondaryKeywords || ""}`.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  const localMatches = inventory
    .map(page => {
      let score = 0;
      const combined = `${page.url} ${page.title} ${page.desc}`.toLowerCase();
      queryTerms.forEach(term => {
        if (combined.includes(term)) score += 1;
      });
      return { ...page, score };
    })
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15);

  const inventorySummaryForClaude = localMatches.length > 0 
    ? localMatches.map(m => `- URL: ${m.url} | Title: "${m.title}" | Desc: "${m.desc}"`).join("\n")
    : inventory.slice(0, 20).map(m => `- URL: ${m.url} | Title: "${m.title}"`).join("\n");

  const promptContent = `You are a World-Class Technical SEO Director and Google Search Console (GSC) Expert analyzing potential Keyword Cannibalization for the website SIB Infotech (sibinfotech.com).

Here is the proposed new page that an admin wants to create:
- **Topic / Concept:** ${topic}
- **Target Primary Keyword:** ${primaryKeyword}
- **Secondary / LSI Keywords:** ${secondaryKeywords || "None provided"}
- **Proposed URL Slug:** ${proposedSlug || "Not decided"}
- **Target Search Intent:** ${targetIntent}
- **Proposed Page Type:** ${pageType}

Here are the most relevant EXISTING URLs currently live on this website:
${inventorySummaryForClaude}

Your goal:
1. Analyze if creating this new page will cause **KEYWORD CANNIBALIZATION** against existing pages in Google Search Console (where multiple URLs fight for the same query cluster, leading to fluctuating rank, split impressions, and diluted CTR).
2. Determine risk level: HIGH_RISK, MODERATE_RISK, LOW_RISK, or SAFE_TO_PUBLISH.
3. If cannibalization is detected, explain EXACTLY why GSC will create an issue and provide concrete alternatives:
   - What the admin should build instead (e.g. unique angle, long-tail differentiation, informational cluster, or updating an existing page).
   - Recommended alternative primary keyword & secondary keywords.
   - Recommended alternative Page Title & Meta Description.
   - Recommended URL slug.
   - Recommended content outline/structure with clear intent separation.
   - Recommended internal linking & canonical tag strategy.

Respond strictly in valid JSON format with the following JSON schema:
{
  "verdict": "HIGH_RISK" | "MODERATE_RISK" | "LOW_RISK" | "SAFE_TO_PUBLISH",
  "riskScore": number between 0 and 100 (where 0 is completely unique/safe, 100 is duplicate/direct collision),
  "summaryHeadline": "A clear, punchy executive verdict summary",
  "isCannibalizationLikely": boolean,
  "competingUrls": [
    {
      "url": "existing url path",
      "title": "existing title",
      "overlapReason": "specific explanation of how this existing URL conflicts with the proposed page"
    }
  ],
  "gscImpactExplanation": "Detailed explanation of what Google Search Console algorithms (clustering, canonicalization, query deduplication) will do if this page is published as planned.",
  "recommendedAction": "DO_NOT_PUBLISH_NEW_PAGE" | "DIFFERENTIATE_INTENT" | "MERGE_INTO_EXISTING" | "SAFE_TO_PROCEED_WITH_RECOMMENDATIONS",
  "actionExplanation": "Step-by-step guidance on what to do instead.",
  "alternativeStrategy": {
    "recommendedAngle": "Unique angle or focus that avoids conflict",
    "recommendedPrimaryKeyword": "New non-competing primary keyword",
    "recommendedSecondaryKeywords": ["keyword 1", "keyword 2", "keyword 3"],
    "recommendedTitle": "Suggested 55-60 character Meta Title",
    "recommendedMetaDescription": "Suggested 145-155 character Meta Description",
    "recommendedSlug": "/suggested-slug",
    "targetIntent": "Specific search intent to target",
    "contentOutline": [
      "Section 1 / H2 focus",
      "Section 2 / H2 focus",
      "Section 3 / H2 focus",
      "Section 4 / H2 focus"
    ],
    "internalLinkingAdvice": "How to link between this new page and the existing competing pillar page",
    "canonicalAdvice": "Self-referencing canonical vs pointing to parent"
  }
}`;

  if (!apiKey && process.env.GEMINI_API_KEY) {
    // No Claude key configured (env or UI) — use Gemini as a real backend
    // instead of falling straight to the algorithmic simulation below.
    try {
      const { data } = await callGemini({
        model: MODEL_FLASH,
        system: "You are an expert Technical SEO and Google Search Console auditor specializing in keyword cannibalization detection and search intent differentiation. Always return pure JSON with no markdown backticks or commentary.",
        prompt: promptContent,
        json: true,
        temperature: 0.2,
      });
      return res.status(200).json({ ...data, modelUsed: `gemini (${MODEL_FLASH})` });
    } catch (err) {
      console.error("Gemini cannibalization check failed, falling back to simulation:", err);
      // fall through to the algorithmic simulation below
    }
  }

  if (!apiKey) {
    // If no API key provided in env or UI, generate a high-quality algorithmic simulation so the UI is directly usable
    const isDirectMatch = localMatches.some(m =>
      m.title.toLowerCase().includes(primaryKeyword.toLowerCase()) || 
      m.url.toLowerCase().includes(primaryKeyword.toLowerCase().replace(/\s+/g, "-"))
    );

    const simulatedRisk = isDirectMatch ? 85 : (localMatches.length > 0 ? 55 : 15);
    const simulatedVerdict = simulatedRisk >= 75 ? "HIGH_RISK" : (simulatedRisk >= 45 ? "MODERATE_RISK" : "SAFE_TO_PUBLISH");

    const fallbackResponse = {
      verdict: simulatedVerdict,
      riskScore: simulatedRisk,
      summaryHeadline: simulatedVerdict === "HIGH_RISK" 
        ? `High Cannibalization Risk: Conflicting page exists in site index`
        : (simulatedVerdict === "MODERATE_RISK" 
            ? `Moderate Risk: Potential query overlap with existing services`
            : `Safe to Publish: Unique topic angle detected`),
      isCannibalizationLikely: simulatedRisk >= 50,
      competingUrls: localMatches.slice(0, 3).map(m => ({
        url: m.url,
        title: m.title,
        overlapReason: `Existing page targets similar keywords around '${m.title.split("|")[0].trim()}'.`
      })),
      gscImpactExplanation: `Publishing '${primaryKeyword}' as a ${pageType} with ${targetIntent} intent when pages like ${localMatches[0]?.url || "/services"} already exist will cause Google to split impressions across both URLs, resulting in position oscillation between page 1 and page 3 in Search Console.`,
      recommendedAction: simulatedVerdict === "HIGH_RISK" ? "DIFFERENTIATE_INTENT" : "SAFE_TO_PROCEED_WITH_RECOMMENDATIONS",
      actionExplanation: simulatedVerdict === "HIGH_RISK"
        ? `Pivot the page away from generic commercial keywords to a specialized long-tail, use-case specific, or informational guide angle.`
        : `Ensure clear internal links to the parent pillar and maintain self-canonical tag.`,
      alternativeStrategy: {
        recommendedAngle: `Specialized industry / workflow angle for ${topic}`,
        recommendedPrimaryKeyword: `${primaryKeyword} for Enterprise & High-Growth Brands`,
        recommendedSecondaryKeywords: [
          `${primaryKeyword} case studies`,
          `${primaryKeyword} implementation strategy`,
          `${primaryKeyword} ROI framework`
        ],
        recommendedTitle: `${topic}: Actionable Strategy & Best Practices | SIB Infotech`,
        recommendedMetaDescription: `Discover proven strategies for ${topic}. Learn how to optimize and scale with actionable insights from SIB Infotech experts.`,
        recommendedSlug: `/${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-guide`,
        targetIntent: "Informational & Problem-Solving",
        contentOutline: [
          `Understanding ${topic} in 2026`,
          `Key Differences and Core Capabilities`,
          `Step-by-Step Implementation Framework`,
          `Common Pitfalls & How to Avoid GSC Query Cannibalization`,
          `Conclusion & Expert Consultation Call to Action`
        ],
        internalLinkingAdvice: `Place an in-content contextual link in the first 200 words pointing to your main pillar page (${localMatches[0]?.url || "/search-engine-optimization-seo-services"}).`,
        canonicalAdvice: `Use a self-referencing canonical tag to establish this page's distinct indexation.`
      },
      _note: "Running in Smart Simulation Mode. For deep Claude 3.5 Sonnet analysis, enter your Anthropic API Key in the settings tab or configure ANTHROPIC_API_KEY."
    };

    return res.status(200).json(fallbackResponse);
  }

  try {
    const claudePayload = {
      model: selectedModel || "claude-3-5-sonnet-20241022",
      max_tokens: 2500,
      temperature: 0.2,
      system: "You are an expert Technical SEO and Google Search Console auditor specializing in keyword cannibalization detection and search intent differentiation. Always return pure JSON with no markdown backticks or commentary.",
      messages: [
        {
          role: "user",
          content: promptContent
        }
      ]
    };

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(claudePayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Claude API Error:", errorText);
      return res.status(response.status).json({
        error: `Claude API returned error (${response.status}): ${errorText}`
      });
    }

    const data = await response.json();
    const rawContent = data.content?.[0]?.text || "";

    // Parse JSON safely from Claude's response
    let parsedResult;
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResult = JSON.parse(jsonMatch[0]);
      } else {
        parsedResult = JSON.parse(rawContent);
      }
    } catch (parseErr) {
      console.error("JSON parsing error on Claude output:", rawContent);
      return res.status(500).json({
        error: "Failed to parse JSON response from Claude AI.",
        raw: rawContent
      });
    }

    return res.status(200).json({
      ...parsedResult,
      modelUsed: selectedModel,
      rawUsage: data.usage
    });
  } catch (error) {
    console.error("Server error calling Claude API:", error);
    return res.status(500).json({
      error: "Internal server error occurred while processing Claude AI request.",
      details: error.message
    });
  }
}
