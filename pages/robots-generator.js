import { useState } from "react";

export default function RobotsGenerator() {
  const [userAgents, setUserAgents] = useState([]);
  const [disallow, setDisallow] = useState("");
  const [allow, setAllow] = useState("");
  const [crawlDelay, setCrawlDelay] = useState("");
  const [sitemaps, setSitemaps] = useState("");
  const [generated, setGenerated] = useState("");

  const botOptions = ["*", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider"];

  const handleCheckbox = (bot) => {
    setUserAgents((prev) =>
      prev.includes(bot) ? prev.filter((b) => b !== bot) : [...prev, bot]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const disallowPaths = disallow.split("\n").map((d) => d.trim()).filter(Boolean);
    const allowPaths = allow.split("\n").map((a) => a.trim()).filter(Boolean);
    const sitemapUrls = sitemaps.split("\n").map((s) => s.trim()).filter(Boolean);

    const lines = [];

    userAgents.forEach((agent) => {
      lines.push(`User-agent: ${agent}`);
      disallowPaths.forEach((path) => lines.push(`Disallow: ${path}`));
      allowPaths.forEach((path) => lines.push(`Allow: ${path}`));
      if (crawlDelay) lines.push(`Crawl-delay: ${crawlDelay}`);
      lines.push("");
    });

    sitemapUrls.forEach((url) => lines.push(`Sitemap: ${url}`));

    setGenerated(lines.join("\n"));
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
      <div style={{
        maxWidth: "720px",
        margin: "3rem auto",
        background: "white",
        padding: "2.5rem",
        borderRadius: "16px",
        boxShadow: "0 6px 24px rgba(0,0,0,0.06)"
      }}>
        <h1 style={{ fontSize: "28px", fontWeight: 600, color: "#004aad", textAlign: "center", marginBottom: "0.5rem" }}>
          🤖 Robots.txt Generator
        </h1>
        <p style={{ fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "2rem" }}>
          Customize and generate your robots.txt file.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Select User-agents</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "0.5rem" }}>
              {botOptions.map((bot) => (
                <label key={bot} style={{ fontSize: "14px" }}>
                  <input
                    type="checkbox"
                    checked={userAgents.includes(bot)}
                    onChange={() => handleCheckbox(bot)}
                    style={{ marginRight: "6px" }}
                  />
                  {bot}
                </label>
              ))}
            </div>
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Disallow paths (one per line)</label>
            <textarea rows={3} value={disallow} onChange={(e) => setDisallow(e.target.value)} style={textareaStyle} />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Allow paths (one per line)</label>
            <textarea rows={3} value={allow} onChange={(e) => setAllow(e.target.value)} style={textareaStyle} />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Crawl-delay (optional)</label>
            <input type="number" value={crawlDelay} onChange={(e) => setCrawlDelay(e.target.value)} style={inputStyle} />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Sitemap URLs (one per line)</label>
            <textarea rows={2} value={sitemaps} onChange={(e) => setSitemaps(e.target.value)} style={textareaStyle} />
          </div>

          <button type="submit" style={buttonPrimary}>Generate robots.txt</button>
        </form>

        {generated && (
          <div style={{ marginTop: "2rem" }}>
            <h5 style={{ fontSize: "16px", fontWeight: 600 }}>Generated robots.txt</h5>
            <textarea readOnly rows={10} value={generated} style={textareaStyle} />
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(generated)}`}
              download="robots.txt"
              style={buttonDownload}
            >
              ⬇️ Download robots.txt
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  fontWeight: 500,
  fontSize: "14px",
  display: "block",
  marginBottom: "0.4rem",
};

const formGroup = {
  marginBottom: "1rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.7rem",
  fontSize: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  width: "100%",
  padding: "0.8rem",
  fontSize: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontFamily: "monospace",
};

const buttonPrimary = {
  width: "100%",
  backgroundColor: "#004aad",
  color: "white",
  border: "none",
  padding: "0.8rem",
  fontSize: "15px",
  fontWeight: 500,
  borderRadius: "10px",
  cursor: "pointer",
};

const buttonDownload = {
  display: "inline-block",
  marginTop: "1rem",
  padding: "0.6rem 1rem",
  backgroundColor: "#22c55e",
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  borderRadius: "8px",
  fontSize: "14px",
};
