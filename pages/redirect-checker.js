import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function RedirectChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");
    setLoading(true);

    try {
      const formattedUrl = url.match(/^https?:\/\//) ? url : `http://${url}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: CONSTANTS.API_TOKEN,
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}chat/redirect-checker`,
        { url: formattedUrl },
        { headers }
      );

      setResult(response.data);
    } catch (err) {
      setError("Failed to fetch redirect chain. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
      <div style={{ maxWidth: "720px", margin: "3rem auto", background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 6px 24px rgba(0,0,0,0.06)" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 600, color: "#004aad", textAlign: "center", marginBottom: "0.5rem" }}>🔀 Redirect Checker</h1>
        <p style={{ fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "2rem" }}>
          Check the full redirect chain for any URL to diagnose redirection issues.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            style={{
              width: "100%",
              padding: "0.9rem 1rem",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              marginBottom: "1rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: "#004aad",
              color: "white",
              padding: "0.75rem 1.5rem",
              fontSize: "15px",
              fontWeight: 500,
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {loading ? "Checking..." : "Check Redirects"}
          </button>
        </form>

        {error && (
          <div style={{
            backgroundColor: "#ffeef0",
            borderLeft: "4px solid #dc2626",
            padding: "1rem",
            borderRadius: "10px",
            marginTop: "1.5rem",
            fontSize: "14px",
            color: "#7f1d1d"
          }}>
            {error}
          </div>
        )}

        {result && (
          <>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#0b0b3b", color: "white" }}>
                  <th style={thStyle}>URL</th>
                  <th style={thStyle}>Status Code</th>
                  <th style={thStyle}>Redirect Note</th>
                </tr>
              </thead>
              <tbody>
                {result.chain.map((step, i) => (
                  <tr key={i}>
                    <td style={tdStyle}>{step.url}</td>
                    <td style={tdStyle}>
                      <span style={badgeStyle}>{step.status_code}</span>
                    </td>
                    <td style={tdStyle}>{step.redirect_note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{
              backgroundColor: "#ecf8ff",
              borderLeft: "4px solid #1d4ed8",
              padding: "1rem",
              borderRadius: "10px",
              marginTop: "1.5rem",
              fontSize: "14px",
              color: "#003e7f",
              lineHeight: "1.6"
            }}>
              <strong>Final URL:</strong> {result.final_url}
              <br />
              <strong>Final Status Code:</strong> {result.final_status_code}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const thStyle = {
  padding: "0.75rem",
  border: "1px solid #dee2e6",
  fontSize: "14px",
  textAlign: "left",
};

const tdStyle = {
  padding: "0.75rem",
  border: "1px solid #dee2e6",
  fontSize: "14px",
};

const badgeStyle = {
  backgroundColor: "#22c55e",
  color: "white",
  padding: "0.4rem 0.7rem",
  fontSize: "13px",
  borderRadius: "6px",
  fontWeight: "600",
};
