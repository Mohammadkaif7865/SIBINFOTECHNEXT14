import { useState } from "react";

export default function RobotsTxtTester() {
  const [site, setSite] = useState("");
  const [checkUrl, setCheckUrl] = useState("");
  const [result, setResult] = useState(null);
  const [robotsUrl, setRobotsUrl] = useState("");
  const [robotsContent, setRobotsContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setRobotsUrl("");
    setRobotsContent("");
    setLoading(true);

    try {
      if (!site || !checkUrl) {
        setError("Please enter both domain and a page URL to check.");
        setLoading(false);
        return;
      }

      const testPath = new URL(checkUrl).pathname || "/";

      const robotsUrl = site.endsWith("/") ? `${site}robots.txt` : `${site}/robots.txt`;
      const res = await fetch(robotsUrl);
      const content = await res.text();

      if (!res.ok || !content) {
        throw new Error("Could not fetch robots.txt");
      }

      const lines = content.split("\n");
      let collect = false;
      const rules = [];

      for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith("#")) continue;

        if (line.toLowerCase().startsWith("user-agent:")) {
          collect = line.toLowerCase().includes("*");
        } else if (collect && (line.toLowerCase().startsWith("disallow:") || line.toLowerCase().startsWith("allow:"))) {
          const type = line.toLowerCase().startsWith("disallow:") ? "disallow" : "allow";
          const rule = line.split(":")[1].trim();
          rules.push({ type, rule });
        }
      }

      let finalStatus = "Allowed";
      for (let rule of rules) {
        if (rule.rule !== "" && testPath.startsWith(rule.rule)) {
          finalStatus = rule.type === "disallow" ? "Blocked" : "Allowed";
        }
      }

      setRobotsUrl(robotsUrl);
      setRobotsContent(content);
      setResult({
        testUrl: checkUrl,
        status: finalStatus === "Blocked" ? "Blocked by robots.txt" : "Accessible to all bots",
      });
    } catch (err) {
      setError("Could not retrieve or parse robots.txt.");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "3rem auto",
          background: "white",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: 600, color: "#004aad", textAlign: "center", marginBottom: "0.5rem" }}>
          🤖 Robots.txt Tester
        </h1>
        <p style={{ fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "2rem" }}>
          Check if a specific page is accessible to bots based on the site's robots.txt rules.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Website Domain (e.g., https://example.com)</label>
            <input
              type="text"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="https://example.com"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Page URL to test (e.g., https://example.com/private)</label>
            <input
              type="text"
              value={checkUrl}
              onChange={(e) => setCheckUrl(e.target.value)}
              placeholder="https://example.com/page"
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? "Checking..." : "Check Robots.txt"}
          </button>
        </form>

        {error && (
          <div style={errorBox}>
            {error}
          </div>
        )}

        {result && (
          <div style={{ marginTop: "2rem" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "0.5rem" }}>🔍 Results</h4>
            <p><strong>URL:</strong> {result.testUrl}</p>
            <p><strong>Bot Access:</strong> {result.status}</p>
            <p><strong>Robots.txt URL:</strong> <a href={robotsUrl} target="_blank" rel="noreferrer">{robotsUrl}</a></p>

            <h6 style={{ marginTop: "1.2rem", marginBottom: "0.5rem", fontWeight: 600 }}>📄 robots.txt content:</h6>
            <pre style={{ backgroundColor: "#f9fafb", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", fontSize: "13px", whiteSpace: "pre-wrap" }}>
              {robotsContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.9rem 1rem",
  fontSize: "15px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#004aad",
  color: "white",
  padding: "0.75rem 1.5rem",
  fontSize: "15px",
  fontWeight: 500,
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "0.4rem",
  display: "inline-block",
  color: "#333",
};

const errorBox = {
  backgroundColor: "#ffeef0",
  borderLeft: "4px solid #dc2626",
  padding: "1rem",
  borderRadius: "10px",
  marginTop: "1.5rem",
  fontSize: "14px",
  color: "#7f1d1d",
};
