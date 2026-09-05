// lib/gemini.js
// Server-only Gemini client. NEVER import this from client-side code —
// it reads GEMINI_API_KEY from process.env and must only run in
// pages/api/** or getServerSideProps.

const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";

// "-latest" aliases always point at Google's current recommended model for
// that tier, so this doesn't need to be re-pinned every time a dated model
// (e.g. gemini-2.5-flash) is retired. Override via env if a specific
// account needs a pinned version instead.
export const MODEL_FLASH = process.env.GEMINI_MODEL_FLASH || "gemini-3.7-flash";
export const MODEL_PRO = process.env.GEMINI_MODEL_PRO || "gemini-3.5-flash";

export const FALLBACK_MODELS = [
  "gemini-3.7-flash",
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
];

export function getGeminiKey() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not configured on the server.");
  return key;
}

function extractJson(text) {
  if (!text) throw new Error("Empty Gemini response.");
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf("{");
  const startArr = candidate.indexOf("[");
  let sliceStart = start;
  if (startArr !== -1 && (start === -1 || startArr < start)) sliceStart = startArr;
  if (sliceStart === -1) throw new Error("No JSON object found in Gemini response.");

  const opener = candidate[sliceStart];
  const closer = opener === "[" ? "]" : "}";
  let depth = 0;
  let end = -1;
  for (let i = sliceStart; i < candidate.length; i++) {
    if (candidate[i] === opener) depth++;
    else if (candidate[i] === closer) {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const jsonStr = end !== -1 ? candidate.slice(sliceStart, end + 1) : candidate.slice(sliceStart);
  return JSON.parse(jsonStr);
}

/**
 * Calls Gemini's generateContent endpoint with automatic multi-model fallback on rate-limits (429) or model unavailability.
 * @param {object} opts
 * @param {string} opts.model
 * @param {string} [opts.system] system instruction text
 * @param {string} opts.prompt user prompt text
 * @param {boolean} [opts.json=true] request/parse structured JSON output
 * @param {number} [opts.temperature=0.4]
 * @param {number} [opts.maxOutputTokens=8192]
 */
export async function callGemini({
  model = MODEL_FLASH,
  system,
  prompt,
  json = true,
  temperature = 0.4,
  maxOutputTokens = 8192,
}) {
  const key = getGeminiKey();

  // Deduplicate models sequence starting with the preferred model
  const modelQueue = Array.from(new Set([model, MODEL_PRO, MODEL_FLASH, ...FALLBACK_MODELS])).filter(Boolean);

  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature,
      maxOutputTokens,
      ...(json ? { responseMimeType: "application/json" } : {}),
    },
  };
  if (system) body.systemInstruction = { parts: [{ text: system }] };

  let lastError;

  for (const currentModel of modelQueue) {
    const url = `${GEMINI_ENDPOINT}/${currentModel}:generateContent?key=${key}`;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 90_000);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        // If 429, 404, or 503, try next candidate model in the queue
        if (res.status === 429 || res.status === 404 || res.status === 503 || res.status >= 500) {
          console.warn(`[Gemini] Model ${currentModel} returned ${res.status}. Falling back to next model...`);
          lastError = new Error(`Gemini ${currentModel} (${res.status}): ${errText.slice(0, 300)}`);
          continue;
        }
        throw new Error(`Gemini API error ${res.status}: ${errText.slice(0, 500)}`);
      }

      const data = await res.json();
      const candidate = data?.candidates?.[0];
      if (candidate?.finishReason === "SAFETY") {
        throw new Error("Gemini blocked this content for safety reasons.");
      }
      const text = candidate?.content?.parts?.map((p) => p.text || "").join("") || "";

      if (!json) return { text, raw: data, modelUsed: currentModel };
      return { data: extractJson(text), text, raw: data, modelUsed: currentModel };
    } catch (err) {
      lastError = err;
      if (err.name === "AbortError") {
        console.warn(`[Gemini] Model ${currentModel} timed out. Trying next model...`);
        continue;
      }
      if (err.message?.includes("blocked this content") || err.message?.includes("API error 400")) {
        throw err;
      }
    }
  }

  throw lastError || new Error("All Gemini model endpoints failed.");
}
