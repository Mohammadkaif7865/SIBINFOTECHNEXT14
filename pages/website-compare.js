import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function CompetitorComparison() {
  const [siteA, setSiteA] = useState("");
  const [siteB, setSiteB] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const apiKey = CONSTANTS.NEXT_PUBLIC_PAGESPEED_API_KEY;

  const fetchKeywordDensity = async (url) => {
    try {
      const res = await axios.post(`${CONSTANTS.API_URL}fetch-html`, { url });
      const html = res.data.content || "";
      const cleaned = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .toLowerCase();

      const words = cleaned.match(/\b\w+\b/g) || [];
      const totalWords = words.length;
      const freq = {};

      words.forEach((w) => {
        if (w.length > 2) freq[w] = (freq[w] || 0) + 1;
      });

      return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, count]) => ({
          word,
          count,
          density: ((count / totalWords) * 100).toFixed(2) + "%",
        }));
    } catch {
      return [];
    }
  };

  const fetchPageSpeed = async (url) => {
    try {
      const [mobileRes, desktopRes] = await Promise.all([
        axios.get(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
            url
          )}&strategy=mobile&key=${apiKey}`
        ),
        axios.get(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
            url
          )}&strategy=desktop&key=${apiKey}`
        ),
      ]);

      const extractVitals = (res) => {
        const audits = res.data.lighthouseResult.audits;
        return {
          score: Math.round(
            res.data.lighthouseResult.categories.performance.score * 100
          ),
          fcp: audits["first-contentful-paint"]?.displayValue,
          lcp: audits["largest-contentful-paint"]?.displayValue,
          cls: audits["cumulative-layout-shift"]?.displayValue,
          tbt: audits["total-blocking-time"]?.displayValue,
          si: audits["speed-index"]?.displayValue,
        };
      };

      return {
        mobile: extractVitals(mobileRes),
        desktop: extractVitals(desktopRes),
      };
    } catch {
      return { mobile: {}, desktop: {} };
    }
  };

  const handleCompare = async () => {
    if (!siteA.startsWith("http") || !siteB.startsWith("http")) {
      setError("Both URLs must start with http or https");
      return;
    }

    setError("");
    setLoading(true);
    setResults(null);

    const [aSpeed, bSpeed] = await Promise.all([
      fetchPageSpeed(siteA),
      fetchPageSpeed(siteB),
    ]);
    const [aKeywords, bKeywords] = await Promise.all([
      fetchKeywordDensity(siteA),
      fetchKeywordDensity(siteB),
    ]);

    setResults({
      a: { speed: aSpeed, keywords: aKeywords },
      b: { speed: bSpeed, keywords: bKeywords },
    });

    setLoading(false);
  };

  const getBadge = (score) => {
    if (!score) return null;
    if (score >= 90)
      return <span className="badge bg-success ms-2">Excellent</span>;
    if (score >= 50)
      return <span className="badge bg-warning text-dark ms-2">Average</span>;
    return <span className="badge bg-danger ms-2">Poor</span>;
  };

  const renderVitals = (v) => (
    <ul className="list-unstyled small mb-0">
      <li>
        <strong>First Contentful Paint:</strong> {v.fcp || "N/A"}
      </li>
      <li>
        <strong>Largest Contentful Paint:</strong> {v.lcp || "N/A"}
      </li>
      <li>
        <strong>Speed Index:</strong> {v.si || "N/A"}
      </li>
      <li>
        <strong>Total Blocking Time:</strong> {v.tbt || "N/A"}
      </li>
      <li>
        <strong>Layout Shift:</strong> {v.cls || "N/A"}
      </li>
    </ul>
  );

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        🔍 Competitor Website Comparison Tool
      </h1>
      <p className="text-center text-muted mb-4">
        Compare performance, keyword density & core web vitals between two URLs.
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-10">
          <div className="card shadow-sm p-4">
            <div className="row g-3">
              <div className="col-md-5">
                <input
                  type="url"
                  className="form-control"
                  placeholder="Your Website (https://yoursite.com)"
                  value={siteA}
                  onChange={(e) => setSiteA(e.target.value)}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="url"
                  className="form-control"
                  placeholder="Competitor Website (https://theirsite.com)"
                  value={siteB}
                  onChange={(e) => setSiteB(e.target.value)}
                />
              </div>
              <div className="col-md-2 d-grid">
                <button
                  className="btn btn-primary"
                  onClick={handleCompare}
                  disabled={loading}
                >
                  {loading ? "Comparing..." : "Compare"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {results && (
        <div className="row mt-4">
          {["a", "b"].map((key, i) => {
            const site = results[key];
            const url = key === "a" ? siteA : siteB;
            const label = i === 0 ? "🔵 Your Site" : "🔴 Competitor";
            return (
              <div className="col-md-6" key={key}>
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <p className="small text-muted">{url}</p>

                    <h6 className="mt-3">
                      Mobile Speed: {site.speed.mobile.score || 0}/100{" "}
                      {getBadge(site.speed.mobile.score)}
                    </h6>
                    {renderVitals(site.speed.mobile)}

                    <h6 className="mt-4">
                      Desktop Speed: {site.speed.desktop.score || 0}/100{" "}
                      {getBadge(site.speed.desktop.score)}
                    </h6>
                    {renderVitals(site.speed.desktop)}

                    <div className="mt-4">
                      <h6 className="fw-bold mb-2">Top Keywords</h6>
                      <div
                        className="table-responsive"
                        style={{ maxHeight: 200, overflowY: "auto" }}
                      >
                        <table className="table table-sm table-bordered">
                          <thead className="table-light sticky-top">
                            <tr>
                              <th>Word</th>
                              <th>Count</th>
                              <th>Density</th>
                            </tr>
                          </thead>
                          <tbody>
                            {site.keywords.map((kw, i) => (
                              <tr key={i}>
                                <td>{kw.word}</td>
                                <td>{kw.count}</td>
                                <td>{kw.density}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
