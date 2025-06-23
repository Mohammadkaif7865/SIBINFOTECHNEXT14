import { useState } from "react";

export default function MarketingROICalculator() {
  const [rows, setRows] = useState([
    { channel: "", revenue: 0, cost: 0, conversions: 0, roi: "-", cpc: "-" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = field === "channel" ? value : parseFloat(value);
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { channel: "", revenue: 0, cost: 0, conversions: 0, roi: "-", cpc: "-" },
    ]);
  };

  const resetTable = () => {
    setRows([
      { channel: "", revenue: 0, cost: 0, conversions: 0, roi: "-", cpc: "-" },
    ]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const calculateROMI = () => {
    const calculatedRows = rows.map((row) => {
      const { revenue, cost, conversions } = row;
      const roi = cost > 0 ? Math.round(((revenue - cost) / cost) * 100) + "%" : "0%";
      const cpc = conversions > 0 ? (cost / conversions).toFixed(2) : "0.00";
      return { ...row, roi, cpc };
    });
    setRows(calculatedRows);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "2rem", backgroundColor: "#f8fbff" }}>
      <div style={{ maxWidth: "960px", margin: "3rem auto", background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 600, textAlign: "center", color: "#004aad" }}>
          📈 Marketing ROI Calculator
        </h1>
        <p style={{ fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "0.75rem", marginBottom: "1.5rem" }}>
          Free SEO Tools / Marketing ROI Calculator
        </p>

        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#002b55", color: "white" }}>
              <tr>
                <th style={th}>Channel / Project</th>
                <th style={th}>Total Revenue ($)</th>
                <th style={th}>Marketing Cost ($)</th>
                <th style={th}>Conversions</th>
                <th style={th}>ROI</th>
                <th style={th}>CPC ($)</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td style={td}>
                    <input
                      type="text"
                      value={row.channel}
                      placeholder="Channel name"
                      onChange={(e) => handleInputChange(index, "channel", e.target.value)}
                      style={input}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="number"
                      value={row.revenue}
                      onChange={(e) => handleInputChange(index, "revenue", e.target.value)}
                      style={input}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="number"
                      value={row.cost}
                      onChange={(e) => handleInputChange(index, "cost", e.target.value)}
                      style={input}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="number"
                      value={row.conversions}
                      onChange={(e) => handleInputChange(index, "conversions", e.target.value)}
                      style={input}
                    />
                  </td>
                  <td style={{ ...td, color: "#00713c", fontWeight: "bold" }}>{row.roi}</td>
                  <td style={{ ...td, color: "#0369a1", fontWeight: "bold" }}>{row.cpc}</td>
                  <td style={td}>
                    <button onClick={() => deleteRow(index)} style={deleteBtn}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={addRow} style={btnOutline}>+ Add Channel</button>
          <button onClick={calculateROMI} style={btnPrimary}>Calculate ROMI</button>
          <button onClick={resetTable} style={btnReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

// Styles
const th = {
  padding: "0.75rem",
  border: "1px solid #dee2e6",
  fontSize: "14px",
  textAlign: "center",
};

const td = {
  padding: "0.5rem",
  border: "1px solid #dee2e6",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "0.4rem",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const deleteBtn = {
  background: "transparent",
  border: "none",
  color: "#dc3545",
  fontSize: "18px",
  cursor: "pointer",
};

const btnPrimary = {
  backgroundColor: "#004aad",
  color: "white",
  padding: "0.6rem 1.5rem",
  fontSize: "14px",
  fontWeight: "500",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const btnOutline = {
  backgroundColor: "#eef2ff",
  color: "#004aad",
  padding: "0.6rem 1rem",
  fontSize: "14px",
  border: "1px solid #a5b4fc",
  borderRadius: "6px",
  cursor: "pointer",
};

const btnReset = {
  backgroundColor: "#f1f1f1",
  color: "#333",
  padding: "0.6rem 1.2rem",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  cursor: "pointer",
};
