import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaChartSimple,
  FaCopy,
  FaCheck,
  FaFileCsv,
  FaMagnifyingGlass,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function KeywordDensityChecker() {
  const [text, setText] = useState(
    `Search Engine Optimization (SEO) is essential for driving organic web traffic to your business website. A strong SEO strategy involves technical SEO audits, on-page optimization, content creation, and high-quality link building. By optimizing meta title tags, meta descriptions, and page headings, your website can rank higher on Google search results pages. SIB Infotech provides comprehensive SEO services in India to boost your keyword rankings, increase conversion rates, and maximize ROI.`
  );
  const [ngram, setNgram] = useState(1);
  const [ignoreStopWords, setIgnoreStopWords] = useState(true);
  const [minWordLength, setMinWordLength] = useState(3);
  const [searchFilter, setSearchFilter] = useState("");

  const stopWords = useMemo(
    () =>
      new Set([
        "a", "an", "the", "and", "or", "but", "about", "above", "after", "along",
        "amid", "among", "as", "at", "by", "for", "from", "in", "into", "of",
        "off", "on", "onto", "out", "over", "to", "under", "with", "is", "are",
        "was", "were", "be", "been", "being", "have", "has", "had", "do", "does",
        "did", "can", "could", "should", "would", "will", "this", "that", "these",
        "those", "your", "my", "our", "their", "its", "it", "you", "we", "they",
      ]),
    []
  );

  // Text Analysis Logic
  const analysis = useMemo(() => {
    if (!text.trim()) {
      return { totalWords: 0, uniqueWords: 0, readingTime: 0, list: [] };
    }

    // Clean text and extract raw words
    const cleanText = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    const words = cleanText.split(/\s+/).filter((w) => w.length >= minWordLength);
    const totalWords = words.length;

    if (totalWords === 0) {
      return { totalWords: 0, uniqueWords: 0, readingTime: 0, list: [] };
    }

    const readingTime = Math.ceil(totalWords / 200); // 200 wpm average
    const freqMap = {};

    if (ngram === 1) {
      words.forEach((w) => {
        if (ignoreStopWords && stopWords.has(w)) return;
        freqMap[w] = (freqMap[w] || 0) + 1;
      });
    } else if (ngram === 2) {
      for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        if (ignoreStopWords && (stopWords.has(w1) || stopWords.has(w2))) continue;
        const phrase = `${w1} ${w2}`;
        freqMap[phrase] = (freqMap[phrase] || 0) + 1;
      }
    } else {
      // 3-gram
      for (let i = 0; i < words.length - 2; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const w3 = words[i + 2];
        if (ignoreStopWords && (stopWords.has(w1) || stopWords.has(w3))) continue;
        const phrase = `${w1} ${w2} ${w3}`;
        freqMap[phrase] = (freqMap[phrase] || 0) + 1;
      }
    }

    const uniqueWords = Object.keys(freqMap).length;

    const list = Object.entries(freqMap)
      .map(([kw, count]) => {
        const density = ((count / totalWords) * 100).toFixed(2);
        let status = "Optimal";
        let statusClass = "bg-success";

        if (density > 3.5) {
          status = "Stuffing Warning";
          statusClass = "bg-danger";
        } else if (density < 0.8) {
          status = "Low Density";
          statusClass = "bg-warning text-dark";
        }

        return { kw, count, density: Number(density), status, statusClass };
      })
      .sort((a, b) => b.count - a.count);

    return { totalWords, uniqueWords, readingTime, list };
  }, [text, ngram, ignoreStopWords, minWordLength, stopWords]);

  const filteredList = analysis.list.filter((item) =>
    item.kw.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const exportToCsv = () => {
    if (analysis.list.length === 0) return;
    let csvContent = "data:text/csv;charset=utf-8,Keyword,Count,Density Percentage,Status\n";
    analysis.list.forEach((row) => {
      csvContent += `"${row.kw}",${row.count},${row.density}%,${row.status}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "keyword_density_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Keyword density report exported as CSV!");
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sibinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free SEO Tools",
        item: "https://www.sibinfotech.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Keyword Density Checker",
        item: "https://www.sibinfotech.com/tools/keyword-density-checker",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Keyword Density Checker Tool",
    url: "https://www.sibinfotech.com/tools/keyword-density-checker",
    applicationCategory: "SEO Tool",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const metaTags = (
    <>
      <title>Free Keyword Density Checker Tool | On-Page SEO Analyzer | SIB Infotech</title>
      <meta
        name="description"
        content="Free Keyword Density Checker tool. Analyze text content for word counts, keyword frequency percentages, N-grams, and keyword stuffing detection."
      />
      <meta
        name="keywords"
        content="keyword density checker, keyword frequency analyzer, keyword stuffing tool, on page keyword density, n-gram text analyzer"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <Breadcrumb Pagetitle="Keyword Density Checker" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaChartSimple /> On-Page Content & Density Analyzer
              </span>
              <h1 className="fw-bold display-6 mb-3">
                Keyword <span className="text_red">Density Checker</span>
              </h1>
              <p className="lead text-secondary">
                Analyze your web content to check keyword frequencies, calculate exact density percentages, and detect keyword stuffing issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Input Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <h4 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
                  <FaWandMagicSparkles className="text-danger" /> Content Analyzer Input
                </h4>

                <div className="mb-3">
                  <textarea
                    rows={10}
                    className="form-control"
                    placeholder="Paste your page content or article text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">N-Gram Phrase Length</label>
                    <div className="btn-group w-100">
                      <button
                        className={`btn btn-sm ${ngram === 1 ? "btn-danger" : "btn-outline-secondary"}`}
                        onClick={() => setNgram(1)}
                      >
                        1-Word
                      </button>
                      <button
                        className={`btn btn-sm ${ngram === 2 ? "btn-danger" : "btn-outline-secondary"}`}
                        onClick={() => setNgram(2)}
                      >
                        2-Words
                      </button>
                      <button
                        className={`btn btn-sm ${ngram === 3 ? "btn-danger" : "btn-outline-secondary"}`}
                        onClick={() => setNgram(3)}
                      >
                        3-Words
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Min Word Length</label>
                    <input
                      type="number"
                      className="form-control"
                      value={minWordLength}
                      onChange={(e) => setMinWordLength(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stopWordsCheck"
                    checked={ignoreStopWords}
                    onChange={(e) => setIgnoreStopWords(e.target.checked)}
                  />
                  <label className="form-check-label text-dark fw-semibold" htmlFor="stopWordsCheck">
                    Ignore Common Stop Words (and, the, in, to, for, with)
                  </label>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper h-100 d-flex flex-column justify-content-between">
                <div>
                  {/* Stats Bar */}
                  <div className="row g-2 mb-4 text-center">
                    <div className="col-4">
                      <div className="p-3 bg-light rounded-3 border">
                        <div className="h4 fw-bold text-danger mb-0">{analysis.totalWords}</div>
                        <small className="text-muted">Total Words</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-3 bg-light rounded-3 border">
                        <div className="h4 fw-bold text-dark mb-0">{analysis.uniqueWords}</div>
                        <small className="text-muted">Unique Keywords</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-3 bg-light rounded-3 border">
                        <div className="h4 fw-bold text-dark mb-0">{analysis.readingTime} min</div>
                        <small className="text-muted">Reading Time</small>
                      </div>
                    </div>
                  </div>

                  {/* Filter & Export Bar */}
                  <div className="d-flex align-items-center justify-content-between mb-3 gap-2">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text bg-white">
                        <FaMagnifyingGlass className="text-muted" />
                      </span>
                      <input
                        type="text"
                        className="form-control ps-0"
                        placeholder="Filter keywords..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                      />
                    </div>
                    <button className="btn btn-outline-danger btn-sm text-nowrap" onClick={exportToCsv}>
                      <FaFileCsv /> Export CSV
                    </button>
                  </div>

                  {/* Keyword Density Table */}
                  <div className="table-responsive" style={{ maxHeight: "350px" }}>
                    <table className="table table-hover align-middle">
                      <thead className="table-light sticky-top">
                        <tr>
                          <th>Keyword Phrase</th>
                          <th className="text-center">Count</th>
                          <th className="text-center">Density</th>
                          <th className="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredList.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="text-center text-muted py-4">
                              No keywords found matching filter.
                            </td>
                          </tr>
                        ) : (
                          filteredList.map((item, idx) => (
                            <tr key={idx}>
                              <td className="fw-semibold text-dark">{item.kw}</td>
                              <td className="text-center fw-bold">{item.count}</td>
                              <td className="text-center">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                  <span>{item.density}%</span>
                                  <div className="progress w-50" style={{ height: "6px" }}>
                                    <div
                                      className={`progress-bar ${
                                        item.density > 3.5 ? "bg-danger" : "bg-success"
                                      }`}
                                      style={{ width: `${Math.min(100, item.density * 25)}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <span className={`badge ${item.statusClass} px-2 py-1`}>
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top text-muted small">
                  💡 <strong>Optimal Keyword Density:</strong> Aim for a primary keyword density of 1% to 2.5%. Anything above 3.5% risks over-optimization penalties from Google algorithms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
