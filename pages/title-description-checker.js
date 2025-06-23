"use client";

import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function TitleMetaChecker() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setScore(null);
    setError("");
    setLoading(true);

    try {
      const headers = {
        Authorization: CONSTANTS.API_TOKEN,
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}chat/title-meta-check`,
        { url, keyword },
        { headers }
      );

      if (response.data.success) {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setScore(response.data.score);
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("API error. Please try again later.");
    }

    setLoading(false);
  };

  const getPixelWidth = (text) => Math.round(text.length * 7.5);

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
    <div className="checker-wrapper">
      <h1 className="checker-heading">🔍 Title & Meta Description Checker</h1>
      <form onSubmit={handleSubmit} className="checker-form">
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="checker-input"
          required
        />
        <input
          type="text"
          placeholder="Target keyword (optional)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="checker-input"
        />
        <button className="checker-button" type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {error && <div className="checker-error">{error}</div>}

      {(title || description) && (
        <div className="checker-result">
          <div className="checker-left">
            <h3>Page Title</h3>
            <textarea className="checker-input" readOnly rows="3" value={title} />
            <p>Characters: {title.length} | Pixels: {getPixelWidth(title)}</p>

            <h3>Meta Description</h3>
            <textarea className="checker-input" readOnly rows="4" value={description} />
            <p>
              Characters: {description.length} | Pixels: {getPixelWidth(description)}
            </p>

            <h3>Desktop Snippet Preview</h3>
            <div className="checker-snippet">
              <p className="checker-url">{url}</p>
              <div className="checker-title">{title}</div>
              <div className="checker-desc">{description}</div>
            </div>
          </div>
          <div className="checker-right">
            <h4>Snippet Score</h4>
            <div className={`checker-score ${score >= 70 ? "good" : "bad"}`}>
              {score}/100
            </div>
            <p className="checker-note">
              Score is based on length, keyword usage, and completeness.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .checker-wrapper {
            max-width: 960px;
            margin: 3rem auto;
            padding: 2rem;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
            font-family: "Segoe UI", sans-serif;
            }

            .checker-heading {
            font-size: 24px;
            text-align: center;
            color: #004aad;
            margin-bottom: 2rem;
            }

            .checker-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            }

            .checker-input {
            padding: 0.9rem 1rem;
            font-size: 15px;
            border: 1px solid #ccc;
            border-radius: 10px;
            outline: none;
            width: 100%;
            }
            textarea.checker-input {
            resize: vertical;
            }

            .checker-button {
            background-color: #004aad;
            color: #fff;
            font-weight: 500;
            padding: 0.85rem;
            font-size: 16px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s ease;
            }
            .checker-button:hover {
            background-color: #004aad;
            }

            .checker-error {
            background: #fef2f2;
            color: #991b1b;
            padding: 1rem;
            border-left: 4px solid #dc2626;
            border-radius: 10px;
            margin-bottom: 1rem;
            }

            .checker-result {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 2rem;
            }

            .checker-left {
            flex: 2;
            min-width: 300px;
            }
            .checker-left h3 {
            font-size: 15px;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            }

            .checker-right {
            flex: 1;
            min-width: 240px;
            text-align: center;
            }
            .checker-right h4 {
            font-size: 15px;
            margin-bottom: 1rem;
            }

            .checker-snippet {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 1rem;
            background: #f9f9f9;
            }
            .checker-url {
            color: #006621;
            font-size: 13px;
            margin-bottom: 4px;
            }
            .checker-title {
            color: #1a0dab;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
            }
            .checker-desc {
            color: #545454;
            font-size: 14px;
            line-height: 1.4;
            }

            .checker-score {
            width: 110px;
            height: 110px;
            margin: 0 auto;
            border-radius: 50%;
            border: 8px solid #ccc;
            font-size: 22px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            }
            .checker-score.good {
            border-color: #28a745;
            color: #28a745;
            }
            .checker-score.bad {
            border-color: #dc3545;
            color: #dc3545;
            }

            .checker-note {
            margin-top: 1rem;
            font-size: 14px;
            color: #666;
            }

            @media (max-width: 768px) {
                .checker-result {
                    flex-direction: column;
                }
                .checker-score {
                    margin-top: 1rem;
                }
            }
      `}</style>
    </div>
    </div>
  );
}
