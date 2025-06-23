import { useState } from "react";

export default function ConversionRateCalculator() {
  const [rows, setRows] = useState([
    { channel: "", traffic: 0, conversions: 0, cr: "-" },
  ]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateCR = () => {
    setLoading(true);
    let totalTraffic = 0;
    let totalConversions = 0;
    const updatedRows = rows.map((row) => {
      const traffic = parseInt(row.traffic) || 0;
      const conversions = parseInt(row.conversions) || 0;
      const cr =
        traffic > 0 ? ((conversions / traffic) * 100).toFixed(2) + "%" : "-";

      totalTraffic += traffic;
      totalConversions += conversions;

      return { ...row, cr };
    });

    const avgCR =
      totalTraffic > 0
        ? ((totalConversions / totalTraffic) * 100).toFixed(2) + "%"
        : "0%";

    setRows(updatedRows);
    setStats({
      totalTraffic,
      totalConversions,
      avgCR,
      channels: updatedRows.length,
    });
    setLoading(false);
  };

  const addRow = () => {
    setRows([...rows, { channel: "", traffic: 0, conversions: 0, cr: "-" }]);
  };

  const resetTable = () => {
    setRows([{ channel: "", traffic: 0, conversions: 0, cr: "-" }]);
    setStats(null);
  };

  const deleteRow = (index) => {
    const updated = [...rows];
    updated.splice(index, 1);
    setRows(updated);
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
     <div className="tool-container">
      <h1 className="tool-title">📊 Conversion Rate Calculator</h1>
      <p className="tool-subtext">
        Discover how effective your marketing campaigns are at turning visitors into customers.
      </p>

      {stats && (
        <div className="stats-panel">
          <div><div className="stats-number">{stats.totalTraffic}</div><small>Total Traffic</small></div>
          <div><div className="stats-number text-success">{stats.totalConversions}</div><small>Total Conversions</small></div>
          <div><div className="stats-number text-primary">{stats.avgCR}</div><small>Average CR</small></div>
          <div><div className="stats-number">{stats.channels}</div><small>Channels</small></div>
        </div>
      )}

      <div className="table-wrapper">
        <table className="tool-table">
          <thead>
            <tr>
              <th>Channel / Project</th>
              <th>Total Traffic</th>
              <th>Conversions</th>
              <th>CR (%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.channel} onChange={(e) => updateRow(index, "channel", e.target.value)} placeholder="Channel name" className="input-field" /></td>
                <td><input type="number" value={row.traffic} onChange={(e) => updateRow(index, "traffic", e.target.value)} placeholder="Traffic" className="input-field" /></td>
                <td><input type="number" value={row.conversions} onChange={(e) => updateRow(index, "conversions", e.target.value)} placeholder="Conversions" className="input-field" /></td>
                <td className="text-success text-center font-bold">{row.cr}</td>
                <td className="text-center"><button onClick={() => deleteRow(index)} className="delete-btn">🗑</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tool-actions">
        <button onClick={addRow} className="btn-light">+ Add Channel</button>
        <button onClick={calculateCR} disabled={loading} className="btn-primary">
          {loading ? "Calculating..." : "Calculate CR"}
        </button>
        <button onClick={resetTable} className="btn-secondary">Reset</button>
      </div>

      <style jsx>{`
        .tool-container {
          background: #fff;
          max-width: 960px;
          margin: 3rem auto;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          font-family: 'Segoe UI', sans-serif;
        }
        .tool-title {
          font-size: 28px;
          font-weight: 600;
          color: #004aad;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .tool-subtext {
          font-size: 14px;
          color: #666;
          text-align: center;
          margin-bottom: 2rem;
        }
        .stats-panel {
          display: flex;
          justify-content: space-around;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .stats-number {
          font-weight: 600;
          font-size: 18px;
        }
        .table-wrapper {
          overflow-x: auto;
          margin-bottom: 2rem;
        }
        .tool-table {
          width: 100%;
          border-collapse: collapse;
        }
        .tool-table th,
        .tool-table td {
          border: 1px solid #dee2e6;
          padding: 0.75rem;
          font-size: 14px;
        }
        .tool-table th {
          background-color: #002b55;
          color: white;
          font-weight: 500;
        }
        .input-field {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
        }
        .delete-btn {
          background: transparent;
          border: none;
          color: #dc2626;
          font-size: 18px;
          cursor: pointer;
        }
        .tool-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-light {
          background-color: #eef2ff;
          color: #0056ff;
          padding: 0.6rem 1rem;
          border: 1px solid #cbd6ff;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }
        .btn-primary {
          background-color: #004aad;
          color: white;
          padding: 0.6rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }
        .btn-secondary {
          background-color: #f3f4f6;
          color: #333;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }
        .text-success { color: #28a745; }
        .text-primary { color: #0d6efd; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 600; }
      `}</style>
    </div>
    </div>
  );
}
