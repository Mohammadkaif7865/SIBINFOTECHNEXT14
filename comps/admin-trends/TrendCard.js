// comps/admin-trends/TrendCard.js
import React from "react";
import { FaWandMagicSparkles, FaArrowUpRightFromSquare, FaClock, FaCircleCheck, FaEye } from "react-icons/fa6";

const CLASS_COLORS = {
  Breaking: "#dc2626",
  "High Priority": "#ea580c",
  Trending: "#2563eb",
  "Evergreen Opportunity": "#16a34a",
  "Industry Update": "#64748b",
  "AI Update": "#7c3aed",
  "Google Update": "#0891b2",
  "SEO Update": "#0d9488",
  "Marketing Strategy": "#c2410c",
};

export default function TrendCard({ item, onGenerate, generating, writtenArticle, onOpenArticle }) {
  const color = CLASS_COLORS[item.opportunityClass] || "#475569";

  return (
    <div className={`trend-card ${writtenArticle ? "is-written" : ""}`}>
      <div className="trend-card-top">
        <span className="opp-class" style={{ background: `${color}1a`, color }}>
          {item.opportunityClass}
        </span>
        <span className="freshness"><FaClock className="me-1" />{item.freshness}</span>
      </div>

      {writtenArticle && (
        <div className="written-banner">
          <FaCircleCheck className="me-1 text-success" />
          <span>You already wrote an article on this topic (<strong>{writtenArticle.status}</strong>)</span>
        </div>
      )}

      <h3 className="trend-title">{item.title}</h3>
      <p className="trend-summary">{item.description}</p>

      <div className="trend-meta-row">
        <span className="badge-cat">{item.category}</span>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="source-link">
          {item.source} <FaArrowUpRightFromSquare className="ms-1" />
        </a>
      </div>

      <div className="score-row">
        <div className="score-bar-track">
          <div className="score-bar-fill" style={{ width: `${item.seoOpportunityScore}%` }} />
        </div>
        <span className="score-label">{item.seoOpportunityScore}/100 opportunity</span>
      </div>

      {writtenArticle ? (
        <div className="written-btn-group">
          <button
            type="button"
            className="view-article-btn"
            onClick={() => onOpenArticle?.(writtenArticle)}
          >
            <FaEye className="me-2" />
            Open {writtenArticle.status} Article
          </button>
          <button
            type="button"
            className="re-generate-btn"
            onClick={() => onGenerate(item)}
            disabled={generating}
          >
            <FaWandMagicSparkles className="me-1" />
            Write Another Angle
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="generate-btn"
          onClick={() => onGenerate(item)}
          disabled={generating}
        >
          <FaWandMagicSparkles className="me-2" />
          {generating ? "Researching..." : "Research & Generate"}
        </button>
      )}

      <style jsx>{`
        .trend-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.1rem 1.2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .trend-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }
        .opp-class {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          letter-spacing: 0.3px;
        }
        .freshness {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        .trend-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
          line-height: 1.35;
        }
        .trend-summary {
          font-size: 0.83rem;
          color: #64748b;
          margin-bottom: 0.75rem;
          flex-grow: 1;
        }
        .trend-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .badge-cat {
          background: #f1f5f9;
          color: #334155;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.15rem 0.55rem;
          border-radius: 6px;
        }
        .source-link {
          font-size: 0.75rem;
          color: #2563eb;
          text-decoration: none;
        }
        .score-row {
          margin-bottom: 0.9rem;
        }
        .score-bar-track {
          height: 6px;
          background: #f1f5f9;
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 0.3rem;
        }
        .score-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }
        .score-label {
          font-size: 0.72rem;
          color: #94a3b8;
        }
        .trend-card.is-written {
          border-color: #86efac;
          background: #f0fdf4;
        }
        .written-banner {
          display: flex;
          align-items: center;
          background: #dcfce7;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 0.4rem 0.65rem;
          border-radius: 8px;
          margin-bottom: 0.65rem;
        }
        .written-btn-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .view-article-btn {
          background: #16a34a;
          color: #fff;
          border: none;
          padding: 0.55rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .view-article-btn:hover {
          background: #15803d;
        }
        .re-generate-btn {
          background: #ffffff;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 0.4rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .re-generate-btn:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }
        .generate-btn {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          border: none;
          padding: 0.55rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .generate-btn:disabled {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
