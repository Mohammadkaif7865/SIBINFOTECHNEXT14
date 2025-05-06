"use client";
import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function RobotsSitemapValidator() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setResults(null);

    try {
      const sanitizedUrl = url.trim().replace(/\/+$/, "");
      const res = await axios.post(`${CONSTANTS.API_URL}robotsSitemapCheck`, { url: sanitizedUrl });
      setResults(res.data);
    } catch (err) {
      console.error("Error checking files:", err);
      setError(err?.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Robots.txt & Sitemap Validator</h1>
      <p className="text-center mb-4">
        Check if your site’s <code>robots.txt</code> and <code>sitemap.xml</code> are properly configured.
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter full website URL (e.g. https://example.com)"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Checking..." : "Validate"}
          </button>
        </div>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      {results && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Validation Results</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>robots.txt:</strong>{" "}
                {results.robotsExists ? (
                  <>
                    ✅ Found at{" "}
                    <a href={results.robotsUrl} target="_blank" rel="noopener noreferrer">
                      {results.robotsUrl}
                    </a>{" "}
                    <span className="badge bg-success">HTTP {results.robotsStatus}</span>
                  </>
                ) : (
                  <>
                    ❌ Not Found{" "}
                    <span className="badge bg-danger">HTTP {results.robotsStatus}</span>
                  </>
                )}
              </li>
              <li className="list-group-item">
                <strong>sitemap.xml:</strong>{" "}
                {results.sitemapExists ? (
                  <>
                    ✅ Found at{" "}
                    <a href={results.sitemapUrl} target="_blank" rel="noopener noreferrer">
                      {results.sitemapUrl}
                    </a>{" "}
                    <span className="badge bg-success">HTTP {results.sitemapStatus}</span>
                  </>
                ) : (
                  <>
                    ❌ Not Found{" "}
                    <span className="badge bg-danger">HTTP {results.sitemapStatus}</span>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}

      {results?.robotsContent && (
        <div className="mb-4">
          <h6>📄 robots.txt Content</h6>
          <pre className="bg-light p-3 border rounded" style={{ whiteSpace: "pre-wrap" }}>
            {results.robotsContent}
          </pre>
        </div>
      )}

      {results?.sitemapContent && (
        <div className="mb-4">
          <h6>📄 sitemap.xml Content</h6>
          <pre className="bg-light p-3 border rounded" style={{ whiteSpace: "pre-wrap" }}>
            {results.sitemapContent}
          </pre>
        </div>
      )}

      {/* Recommendations */}
      {results && (
        <>
          {!results.robotsExists && (
            <div className="alert alert-warning">
              <strong>robots.txt is missing.</strong> This file helps search engines understand what to crawl or not.
              <br />
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/robots/intro"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          )}

          {!results.sitemapExists && (
            <div className="alert alert-warning">
              <strong>sitemap.xml is missing.</strong> A sitemap helps search engines discover your content.
              <br />
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
