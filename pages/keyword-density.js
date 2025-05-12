import { useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function KeywordDensity() {
  const [inputType, setInputType] = useState("url");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setError("");
    setResult(null);
    setLoading(true);

    try {
      let htmlContent = inputValue;
      if (inputType === "url") {
        const res = await axios.post(`${CONSTANTS.API_URL}fetch-html`, { url: inputValue });
        htmlContent = res.data.content;
      }

      const cleanedText = htmlContent
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .toLowerCase();

      const words = cleanedText.match(/\b\w+\b/g) || [];
      const totalWords = words.length;
      const frequency = {};

      words.forEach((word) => {
        if (word.length < 2) return;
        frequency[word] = (frequency[word] || 0) + 1;
      });

      const sorted = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .map(([word, count]) => ({
          word,
          count,
          density: ((count / totalWords) * 100).toFixed(2) + "%",
        }));

      setResult({ totalWords, keywords: sorted.slice(0, 50) });
    } catch (err) {
      setError("Failed to analyze.");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title h3 mb-4 text-center">
            🧠 Keyword Density Analyzer
          </h1>

          <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group">
              <button
                className={`btn ${
                  inputType === "url" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setInputType("url")}
              >
                Analyze URL
              </button>
              <button
                className={`btn ${
                  inputType === "text" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setInputType("text")}
              >
                Paste Text
              </button>
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="8"
              placeholder={
                inputType === "url"
                  ? "https://example.com"
                  : "Paste text or HTML here..."
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-success"
              onClick={handleAnalyze}
              disabled={loading || !inputValue}
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {result && (
            <div className="mt-5">
              <h5>Total Words: {result.totalWords}</h5>
              <div className="table-responsive mt-3">
                <table className="table table-bordered table-striped">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Keyword</th>
                      <th scope="col">Count</th>
                      <th scope="col">Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.keywords.map((kw, i) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
