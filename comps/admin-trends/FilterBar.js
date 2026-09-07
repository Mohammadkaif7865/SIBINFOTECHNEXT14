// comps/admin-trends/FilterBar.js
import React from "react";

const TIME_FILTERS = ["Last 3 Months", "Today", "Last 24 Hours", "Last 3 Days", "Last 7 Days", "Last 30 Days"];
const CATEGORY_FILTERS = [
  "All", "AI", "GEO", "Google", "SEO", "Paid Advertising",
  "Social Media", "Content Marketing", "Marketing Technology",
];

export default function FilterBar({
  time,
  setTime,
  category,
  setCategory,
  onRefresh,
  refreshing,
  hideWritten,
  setHideWritten,
  writtenCount = 0,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        {TIME_FILTERS.map((t) => (
          <button
            key={t}
            type="button"
            className={time === t ? "active" : ""}
            onClick={() => setTime(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="filter-group wrap">
        {CATEGORY_FILTERS.map((c) => (
          <button
            key={c}
            type="button"
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="written-toggle-wrap">
        <label className="written-toggle-label">
          <input
            type="checkbox"
            checked={hideWritten}
            onChange={(e) => setHideWritten(e.target.checked)}
          />
          <span>Hide already covered ({writtenCount})</span>
        </label>
      </div>

      <button type="button" className="refresh-btn" onClick={onRefresh} disabled={refreshing}>
        {refreshing ? "Fetching..." : "Refresh Trends"}
      </button>

      <style jsx>{`
        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .filter-group {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .filter-group button {
          background: #fff;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 0.78rem;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          cursor: pointer;
        }
        .filter-group button.active {
          background: #0f172a;
          color: #fff;
          border-color: #0f172a;
        }
        .written-toggle-wrap {
          display: flex;
          align-items: center;
          margin-left: 0.25rem;
        }
        .written-toggle-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          cursor: pointer;
          user-select: none;
        }
        .written-toggle-label input {
          cursor: pointer;
          accent-color: #16a34a;
        }
        .refresh-btn {
          margin-left: auto;
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          padding: 0.4rem 1rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.82rem;
        }
        .refresh-btn:disabled {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
