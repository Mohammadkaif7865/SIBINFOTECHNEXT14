/**
 * Write helper for the SIB Infotech blog API.
 *
 * Why this exists, and why it uses curl rather than fetch:
 *
 *   POST /api/blog/edit is the only write route. Its handler sets the `image`
 *   column from an uploaded file on EVERY write — there is no "leave it alone"
 *   option. Sending `image` as a JSON string, as a multipart text field, or
 *   omitting it entirely all result in the column being set to "". The only way
 *   to keep a post's image is to re-upload the actual file with each edit.
 *
 *   That makes every write a multipart request carrying ~100KB of image plus up
 *   to ~20KB of HTML. Node's built-in fetch (undici) fails on these against
 *   Cloudflare with ECONNRESET / UND_ERR_SOCKET, intermittently and at the TLS
 *   layer. curl handles the same request reliably, so writes shell out to curl
 *   using a config file (avoids argv length limits and quoting problems with
 *   large HTML bodies). Reads still use fetch — they are small and reliable.
 */

import { writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

/** Fields never sent back — server-managed. */
const SKIP_FIELDS = new Set(["category_name", "author_name", "updatedAt", "createdAt"]);

export async function readBlog(slug) {
  const res = await fetch(`${API}blog/single/${slug}?slug=1`, {
    headers: { "Content-Type": "application/json", Authorization: TOKEN },
  });
  if (!res.ok) throw new Error(`read ${slug}: HTTP ${res.status}`);
  const json = await res.json();
  const blog = json.blog?.[0];
  if (!blog) throw new Error(`read ${slug}: no record`);
  return blog;
}

/**
 * Downloads a post's current image so it can be re-uploaded with the edit.
 * Returns null when the record has no image, or the file no longer exists —
 * some records point at files that were removed years ago.
 */
export async function fetchImage(record, tmpDir) {
  if (!record.image) return null;
  const url = API + record.image;
  const res = await fetch(url);
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (!buf.length) return null;

  if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });
  const filename = record.image.split("/").pop();
  const path = join(tmpDir, filename);
  writeFileSync(path, buf);
  return { path, filename, bytes: buf.length, type: res.headers.get("content-type") || "image/jpeg" };
}

function escapeForCurlConfig(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/**
 * curl treats backslash as an escape character inside quoted config values, so
 * a Windows path like C:\Users\... breaks parsing ("unknown config option").
 * curl on Windows accepts forward slashes, so normalise every path we emit.
 */
function curlPath(p) {
  return String(p).replace(/\\/g, "/");
}

/**
 * Writes a full record via POST /api/blog/edit.
 *
 * `record` must be the COMPLETE row with any edits already applied — the
 * endpoint's merge behaviour is unverified, so we always send everything.
 * `image` is attached as a real file part when `imageFile` is supplied;
 * without it the server will blank the column.
 */
export function writeBlog(record, imageFile, tmpDir) {
  if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });

  const lines = [];
  for (const [key, value] of Object.entries(record)) {
    if (key === "image" || SKIP_FIELDS.has(key)) continue;
    if (value === null || value === undefined) continue;

    const str = String(value);

    // A curl config value is a single quoted line, so anything containing a
    // newline or a quote has to be passed by file instead. `description` and
    // `schema_jsonld` both do — schema_jsonld is pretty-printed JSON, and
    // inlining it silently broke config parsing for every line after it.
    const needsFile = /[\n\r"]/.test(str) || str.length > 500;

    if (needsFile) {
      const fieldPath = join(tmpDir, `_field_${key}.txt`);
      writeFileSync(fieldPath, str, "utf8");
      lines.push(`form = "${key}=<${curlPath(fieldPath)}"`);
      continue;
    }
    lines.push(`form = "${key}=${escapeForCurlConfig(str)}"`);
  }

  if (imageFile) {
    lines.push(
      `form = "image=@${curlPath(imageFile.path)};type=${imageFile.type};filename=${imageFile.filename}"`,
    );
  }

  const cfgPath = join(tmpDir, "_curl.cfg");
  writeFileSync(cfgPath, lines.join("\n") + "\n", "utf8");

  // Uploads through Cloudflare fail intermittently at the transport layer
  // (curl 55 / 56), more often with larger images. Retry the whole request.
  const attempts = 5;
  let last = null;

  for (let i = 1; i <= attempts; i++) {
    const run = spawnSync(
      "curl",
      [
        "-s", "-4",
        // HTTP/2 uploads of this size fail against Cloudflare with curl exit 55
        // ("failed sending data"). Forcing HTTP/1.1 makes them reliable.
        "--http1.1",
        "--max-time", "180",
        "-X", "POST",
        "-H", `Authorization: ${TOKEN}`,
        "-K", curlPath(cfgPath),
        `${API}blog/edit`,
      ],
      { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
    );

    if (run.status === 0 && run.stdout) {
      try {
        return JSON.parse(run.stdout);
      } catch {
        return { raw: run.stdout.slice(0, 300) };
      }
    }

    last = `curl exit ${run.status}${run.stderr ? `: ${run.stderr.trim().slice(0, 160)}` : ""}`;
    if (i < attempts) {
      process.stdout.write(`      transport failure (${last}), retry ${i}/${attempts - 1}\n`);
      // Blocking sleep: keeps writeBlog synchronous for callers.
      spawnSync(process.execPath, ["-e", `setTimeout(()=>{},${i * 2500})`]);
    }
  }

  return { error: true, message: `upload failed after ${attempts} attempts — ${last}` };
}

/** Field names whose values differ between two records. */
export function diffFields(before, after, ignore = ["updatedAt"]) {
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  const changed = [];
  for (const k of keys) {
    if (ignore.includes(k)) continue;
    if (JSON.stringify(before[k]) !== JSON.stringify(after[k])) changed.push(k);
  }
  return changed;
}

export function wordCount(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}
