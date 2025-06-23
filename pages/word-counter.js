"use client";

import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function WordCounterTool() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Fix added

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMetrics(null);
    setLoading(true);

    try {
      const headers = {
        Authorization: CONSTANTS.API_TOKEN,
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}chat/word-counter`,
        { text, url },
        { headers }
      );

      if (response.data.success) {
        setMetrics(response.data.metrics);
      } else {
        setError(response.data.message || "Analysis failed.");
      }
    } catch (err) {
      console.error("API Error:", err.message);
      setError("API error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
    <div className="tool-wrapper">
      <h1 className="tool-heading">📝 Word Counter Tool</h1>
      <form onSubmit={handleSubmit} className="tool-form">
        <input
          type="text"
          placeholder="Enter URL (e.g., https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="tool-input"
        />
        <div className="tool-or">— OR —</div>
        <textarea
          placeholder="Paste or type your content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="tool-textarea"
        ></textarea>
        <button type="submit" className="tool-button" disabled={loading}>
          {loading ? "Analyzing..." : "Check"}
        </button>
      </form>

      {error && <div className="tool-error">{error}</div>}

      {metrics && (
        <div className="tool-result">
          <div>
            <p><strong>Character total:</strong> {metrics.charCount}</p>
            <p><strong>Character total without spaces:</strong> {metrics.charCountNoSpace}</p>
            <p><strong>Word total:</strong> {metrics.wordCount}</p>
            <p><strong>Sentence total:</strong> {metrics.sentenceCount}</p>
          </div>
          <div>
            <p><strong>Paragraph total:</strong> {metrics.paragraphCount}</p>
            <p><strong>Words per sentence (avg):</strong> {metrics.avgWordsPerSentence}</p>
            <p><strong>Estimated reading time:</strong> {metrics.readingTime} min</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .tool-wrapper {
          max-width: 900px;
          margin: 3rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          font-family: "Segoe UI", sans-serif;
        }
        .tool-heading {
          text-align: center;
          font-size: 24px;
          margin-bottom: 1.5rem;
          color: #004aad;
        }
        .tool-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .tool-input,
        .tool-textarea {
          padding: 0.9rem 1rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 15px;
          resize: vertical;
        }
        .tool-or {
          text-align: center;
          color: #888;
        }
        .tool-button {
          background-color: #004aad;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 0.85rem;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s ease;
        }
        .tool-button:hover {
          background-color: #004aad;
        }
        .tool-error {
          background: #fef2f2;
          color: #991b1b;
          padding: 1rem;
          border-left: 5px solid #dc2626;
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .tool-result {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 12px;
        }
        .tool-result > div {
          flex: 1;
          min-width: 250px;
        }
        .tool-result p {
          margin: 0.5rem 0;
          font-size: 15px;
        }
        strong {
          color: #333;
        }
      `}</style>
    </div>
    </div>
  );
}
