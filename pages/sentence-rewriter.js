import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function SentenceRewriter() {
  const [sentence, setSentence] = useState("");
  const [tone, setTone] = useState("Professional");
  const [style, setStyle] = useState("nochange");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    setError("");
    setLoading(true);

    try {
      const headers = {
        Authorization: CONSTANTS.API_TOKEN,
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}chat/sentence-rewriter`,
        { sentence, tone, style },
        { headers }
      );

      if (response.data.success) {
        setResult(response.data.rewritten);
      } else {
        setError("Failed to rewrite sentence. Please try again.");
      }
    } catch (err) {
      setError("API error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
    <div className="rewriter-container">
      <h1 className="rewriter-title">🖋️ Sentence Rewriter Tool</h1>
      <p className="rewriter-subtext">
        Instantly rewrite your sentence in the tone and structure you prefer.
      </p>

      <form onSubmit={handleSubmit} className="rewriter-form">
        <label className="rewriter-label">Sentence to rewrite</label>
        <textarea
          className="rewriter-textarea"
          rows={3}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          required
        ></textarea>

        <label className="rewriter-label">Writing Tone</label>
        <select
          className="rewriter-select"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Professional</option>
          <option>Conversational</option>
          <option>Persuasive</option>
          <option>Friendly</option>
          <option>Neutral</option>
        </select>

        <label className="rewriter-label">Structure Option</label>
        <div className="rewriter-radio-group">
          <label>
            <input
              type="radio"
              name="style"
              value="nochange"
              checked={style === "nochange"}
              onChange={() => setStyle("nochange")}
            />{" "}
            No change
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="shorten"
              checked={style === "shorten"}
              onChange={() => setStyle("shorten")}
            />{" "}
            Shorten
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="expand"
              checked={style === "expand"}
              onChange={() => setStyle("expand")}
            />{" "}
            Expand
          </label>
        </div>

        <button className="rewriter-button" type="submit" disabled={loading}>
          {loading ? "Rewriting..." : "Rewrite Sentence"}
        </button>
      </form>

      {result && (
        <div className="rewriter-alert">
          <strong>Rewritten Sentence:</strong>
          <div className="rewriter-result">{result}</div>
        </div>
      )}

      {error && <div className="rewriter-error">{error}</div>}

      <style jsx>{`
        .rewriter-container {
          background: #fff;
          max-width: 720px;
          margin: 3rem auto;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          font-family: "Segoe UI", sans-serif;
        }
        .rewriter-title {
          font-size: 26px;
          font-weight: 600;
          color: #004aad;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .rewriter-subtext {
          font-size: 15px;
          color: #666;
          text-align: center;
          margin-bottom: 2rem;
        }
        .rewriter-label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          margin-top: 1.2rem;
          font-size: 15px;
        }
        .rewriter-textarea {
          width: 100%;
          padding: 1rem;
          font-size: 15px;
          border: 1px solid #ccc;
          border-radius: 10px;
          resize: vertical;
          line-height: 1.5;
        }
        .rewriter-select {
          width: 100%;
          padding: 0.7rem;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 15px;
        }
        .rewriter-radio-group {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.5rem;
          font-size: 14px;
        }
        .rewriter-button {
          margin-top: 1.8rem;
          width: 100%;
          background-color: #004aad;
          color: white;
          padding: 0.85rem;
          font-size: 16px;
          font-weight: 500;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .rewriter-button:hover {
          background-color: #003b8e;
        }
        .rewriter-alert {
          background: #ecfdf5;
          border-left: 4px solid #10b981;
          padding: 1rem 1.25rem;
          margin-top: 2rem;
          border-radius: 10px;
          font-size: 15px;
        }
        .rewriter-result {
          margin-top: 0.5rem;
          white-space: pre-wrap;
          color: #065f46;
        }
        .rewriter-error {
          background: #fef2f2;
          border-left: 4px solid #dc2626;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          margin-top: 2rem;
          color: #7f1d1d;
          font-size: 15px;
        }
      `}</style>
    </div>
    </div>
  );
}
