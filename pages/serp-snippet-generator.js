"use client";

import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function SerpSnippetGenerator() {
  const [url, setUrl] = useState("");
  const [urlText, setUrlText] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeTab, setActiveTab] = useState("url");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setUrlText("");
    setError("");
    setLoading(true);

    try {
      const headers = {
        Authorization: CONSTANTS.API_TOKEN,
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}chat/serp-fetch`,
        { url },
        { headers }
      );

      if (response.data && response.data.title) {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setUrlText(url);
      } else {
        setError("Failed to fetch meta tags. Check the URL and try again.");
      }
    } catch (err) {
      setError("API error. Please try again later.");
    }

    setLoading(false);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!title && !description && !urlText) {
      setError("Please enter title, description, and URL.");
    }
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
    <div className="serp-container">
      <h1 className="serp-title">🔍 SERP Snippet Generator</h1>
      <p className="serp-subtext">
        See how your page appears in Google search and optimize SERP snippets.
      </p>

      <div className="serp-tabs">
        <button
          className={`serp-tab ${activeTab === "url" ? "active" : ""}`}
          onClick={() => setActiveTab("url")}
        >
          From URL
        </button>
        <button
          className={`serp-tab ${activeTab === "text" ? "active" : ""}`}
          onClick={() => setActiveTab("text")}
        >
          From Text
        </button>
      </div>

      {activeTab === "url" && (
        <form onSubmit={handleSubmit} className="serp-form">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="serp-input"
          />
          <button className="serp-button" type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>
      )}

      {activeTab === "text" && (
        <form onSubmit={handleTextSubmit} className="serp-form">
          <input
            type="text"
            placeholder="Page Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="serp-input"
          />
          <textarea
            placeholder="Meta Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="serp-textarea"
          />
          <input
            type="text"
            placeholder="URL"
            value={urlText}
            onChange={(e) => setUrlText(e.target.value)}
            className="serp-input"
          />
          <button className="serp-button" type="submit">
            Analyze
          </button>
        </form>
      )}

      {(title || description || urlText) && (
        <div className="serp-result">
          <h3>Desktop Snippet</h3>
          <div className="serp-snippet">
            <a href={urlText} target="_blank" rel="noopener noreferrer">
              {urlText}
            </a>
            <div className="serp-snippet-title">{title}</div>
            <div className="serp-snippet-desc">{description}</div>
            <div className="serp-meta-info">
              Characters: {description.length} | Pixels: {Math.round(description.length * 5.5)}
            </div>
          </div>

          <h3>Mobile Snippet</h3>
          <div className="serp-snippet">
            <a href={urlText} target="_blank" rel="noopener noreferrer">
              {urlText}
            </a>
            <div className="serp-snippet-title">{title}</div>
            <div className="serp-snippet-desc">{description}</div>
          </div>
        </div>
      )}

      {error && <div className="serp-error">{error}</div>}

      <style jsx>{`
        .serp-container {
          background: #fff;
          max-width: 720px;
          margin: 3rem auto;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          font-family: "Segoe UI", sans-serif;
        }
        .serp-title {
          font-size: 26px;
          font-weight: 600;
          color: #004aad;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .serp-subtext {
          font-size: 15px;
          color: #666;
          text-align: center;
          margin-bottom: 2rem;
        }
        .serp-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .serp-tab {
          padding: 0.6rem 1.2rem;
          font-size: 15px;
          border: 1px solid #ccc;
          border-radius: 10px;
          cursor: pointer;
          background: #fff;
          color: #333;
        }
        .serp-tab.active {
          background-color: #e9f0ff;
          color: #004aad;
          border-color: #004aad;
        }
        .serp-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .serp-input,
        .serp-textarea {
          padding: 0.9rem 1rem;
          font-size: 15px;
          border: 1px solid #ccc;
          border-radius: 10px;
          outline: none;
        }
        .serp-textarea {
          resize: vertical;
          height: 100px;
        }
        .serp-button {
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
        .serp-button:hover {
          background-color: #003b8e;
        }
        .serp-result {
        margin-top: 2.5rem;
        }

        .serp-result h3 {
        font-size: 17px;
        margin-top: 1.8rem;
        color: #333;
        }

        .serp-snippet {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 0.9rem 1.2rem;
        margin-top: 0.8rem;
        background: #fafafa;
        font-size: 14px;
        line-height: 1.5;
        }

        .serp-snippet + h3 {
        margin-top: 2.2rem;
        }

        .serp-snippet a {
        color: #006621;
        font-size: 13px;
        display: block;
        margin-bottom: 4px;
        word-break: break-word;
        }

        .serp-snippet-title {
        font-size: 16px;
        color: #1a0dab;
        margin-bottom: 4px;
        font-weight: 500;
        }

        .serp-snippet-desc {
        color: #545454;
        font-size: 13.5px;
        }

        .serp-meta-info {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
        }

        .serp-error {
          margin-top: 1.5rem;
          background: #fef2f2;
          border-left: 4px solid #dc2626;
          padding: 1rem;
          border-radius: 10px;
          color: #7f1d1d;
        }
      `}</style>
    </div>
    </div>
  );
}
