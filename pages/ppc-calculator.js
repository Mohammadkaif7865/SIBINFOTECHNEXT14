// components/PpcCalculator.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function PpcCalculator() {
  const [form, setForm] = useState({
    advertisingSpend: "",
    cpc: "",
    conversionRate: "",
    aov: "",
    profitPerOrder: "",
    ppcFee: "",
  });

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [results, setResults] = useState({});
  const [emailStatus, setEmailStatus] = useState(null);
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.firstName || !user.lastName) return;

    const {
      clicks,
      orders,
      revenue,
      profit,
      totalAdCost,
      roi,
      avgCostPerOrder,
    } = results;

    const html = `
      <table style="width: 100%;" border="1" cellspacing="0" cellpadding="8">
        <tr><td><strong>Name</strong></td><td>${user.firstName} ${
      user.lastName
    }</td></tr>
        <tr><td><strong>Email</strong></td><td>${user.email}</td></tr>
        <tr><td colspan="2"><strong>📊 PPC Calculator Results</strong></td></tr>
        <tr><td>Estimated Clicks</td><td>${clicks.toFixed(2)}</td></tr>
        <tr><td>Estimated Orders</td><td>${orders.toFixed(2)}</td></tr>
        <tr><td>Order Revenue</td><td>$${revenue.toFixed(2)}</td></tr>
        <tr><td>Profit</td><td>$${profit.toFixed(2)}</td></tr>
        <tr><td>Total Advertising Cost</td><td>$${totalAdCost.toFixed(
          2
        )}</td></tr>
        <tr><td>ROI</td><td>${roi.toFixed(2)}%</td></tr>
        <tr><td>Average Cost per Order</td><td>$${avgCostPerOrder.toFixed(
          2
        )}</td></tr>
        <tr><td>Page URL</td><td>${
          "https://sibinfotech.com" + window.location.pathname
        }</td></tr>
      </table>
    `;

    try {
      const res = await axios.post(
        `${CONSTANTS.API_URL}send-ppc-results`,
        {
          html,
          fromWhere: "PPC Calculator Submission",
          userEmail: user.email,
          userName: `${user.firstName} ${user.lastName}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: CONSTANTS.API_TOKEN,
          },
        }
      );

      const data = await res.data;
      console.log("TTTTTTTTTTTTTTTTT", data);
      if (data.success) {
        setHasSent(true); // prevent future submissions

        setEmailStatus("✅ Email sent successfully!");
      } else {
        setEmailStatus("❌ Failed to send email.");
      }
    } catch (err) {
      setEmailStatus("❌ Error sending email.");
      console.error(err);
    }
  };

  useEffect(() => {
    calculateResults();
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const calculateResults = () => {
    const spend = parseFloat(form.advertisingSpend || 0);
    const cpc = parseFloat(form.cpc || 0);
    const cr = parseFloat(form.conversionRate || 0);
    const aov = parseFloat(form.aov || 0);
    const profitPerOrder = parseFloat(form.profitPerOrder || 0);
    const ppcFee = parseFloat(form.ppcFee || 0);

    const clicks = cpc ? spend / cpc : 0;
    const orders = clicks * (cr / 100);
    const revenue = orders * aov;
    const totalAdCost = spend + spend * (ppcFee / 100);
    const profit = orders * profitPerOrder;

    // ✅ ROI = Net gain / cost
    const roi = totalAdCost ? ((revenue - totalAdCost) / totalAdCost) * 100 : 0;

    const avgCostPerOrder = orders ? totalAdCost / orders : 0;

    setResults({
      clicks,
      orders,
      revenue,
      profit,
      totalAdCost,
      roi,
      avgCostPerOrder,
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">📈 PPC Calculator</h1>
      <p className="text-muted text-center">
        Estimate clicks, orders, ROI, and more — then send results via email.
      </p>

      <div className="row g-4 mt-4">
        {/* Input Section */}
        <div className="col-md-6">
          <div className="card shadow-sm border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary">📝 Input Your Metrics</h5>
              {[
                {
                  label: "Advertising spend ($)",
                  name: "advertisingSpend",
                  required: true,
                },
                {
                  label: "Average CPC ($)",
                  name: "cpc",
                  required: true,
                },
                {
                  label: "Conversion Rate (%)",
                  name: "conversionRate",
                },
                {
                  label: "Average Order Value ($)",
                  name: "aov",
                },
                {
                  label: "Profit per Order ($)",
                  name: "profitPerOrder",
                },
                {
                  label: "PPC Management Fee (%)",
                  name: "ppcFee",
                },
              ].map(({ label, name, required }) => (
                <div className="mb-3" key={name}>
                  <label className="form-label fw-semibold">
                    {label} {required && <span className="text-danger">*</span>}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    step="any"
                    required={required || false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">📊 Your Results</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Estimated Clicks:</strong>{" "}
                  {results.clicks?.toFixed(2) || 0}
                </li>
                <li className="list-group-item">
                  <strong>Estimated Orders:</strong>{" "}
                  {results.orders?.toFixed(2) || 0}
                </li>
                <li className="list-group-item">
                  <strong>Order Revenue:</strong> $
                  {(results.revenue || 0).toFixed(2)}
                </li>
                <li className="list-group-item">
                  <strong>Profit:</strong> ${(results.profit || 0).toFixed(2)}
                </li>
                <li className="list-group-item">
                  <strong>Total Ad Cost:</strong> $
                  {(results.totalAdCost || 0).toFixed(2)}
                </li>
                <li className="list-group-item">
                  <strong>ROI:</strong>{" "}
                  {results.roi ? `${results.roi.toFixed(2)}%` : "0%"}
                </li>
                <li className="list-group-item">
                  <strong>Avg Cost per Order:</strong> $
                  {(results.avgCostPerOrder || 0).toFixed(2)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="card mt-5 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">📩 Email Your Results</h5>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                onChange={handleUserChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={handleUserChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleUserChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={hasSent}
          >
            {hasSent ? "✅ Sent" : "Send Results"}
          </button>

          {emailStatus && (
            <div
              className={`alert mt-3 ${
                emailStatus.includes("✅") ? "alert-success" : "alert-danger"
              }`}
            >
              {emailStatus}
            </div>
          )}
        </div>
      </form>
      {/* Step-by-Step Usage Guide */}
      <div className="mt-5">
        <h2 className="fw-bold text-center mb-4">
          📘 How to Use the PPC Calculator — Step-by-Step Guide
        </h2>

        {[
          {
            title: "1. Advertising Spend ($)",
            meaning:
              "The total amount you’re planning to spend on your PPC campaign.",
            importance:
              "This gives the calculator a starting budget to estimate cost-effectiveness.",
            example: "If you plan to spend $1,500 this month, input “1500”.",
          },
          {
            title: "2. Average Cost Per Click (CPC) ($)",
            meaning:
              "The average amount you pay per click in your PPC campaign.",
            importance: "Helps determine how many clicks your budget can buy.",
            example: "If your CPC is $3.00, enter “3”.",
          },
          {
            title: "3. Conversion Rate to Order (CR) (%)",
            meaning:
              "The percentage of people who click and actually make a purchase.",
            importance: "This helps estimate how many clicks lead to revenue.",
            example: "If 10 out of 100 visitors convert, enter “10”.",
          },
          {
            title: "4. Average Order Value (AOV) ($)",
            meaning: "The average revenue per customer order.",
            importance: "Used to calculate total order revenue.",
            example: "If most customers spend around $120, enter “120”.",
          },
          {
            title: "5. Profit Per Order ($)",
            meaning:
              "Your net profit per order after deducting cost of goods, shipping, etc.",
            importance: "Used to estimate total net profit from PPC campaign.",
            example: "If you make $25 profit per order, enter “25”.",
          },
          {
            title: "6. PPC Management Fee (%)",
            meaning:
              "If you're paying an agency or tool, this % is added to your ad spend.",
            importance: "Gives a realistic total cost for ROI calculation.",
            example: "If your agency takes 10%, enter “10”.",
          },
        ].map((item, index) => (
          <div className="mb-4" key={index}>
            <h5 className="fw-bold">{item.title}</h5>
            <p>
              <strong>What it means:</strong> {item.meaning}
            </p>
            <p>
              <strong>Why it matters:</strong> {item.importance}
            </p>
            <p>
              <strong>Example:</strong> {item.example}
            </p>
          </div>
        ))}

        <div className="bg-light p-4 rounded shadow-sm">
          <h5 className="fw-bold">📊 Example Calculation</h5>
          <ul className="mb-2">
            <li>Advertising spend: $1,500</li>
            <li>CPC: $3.00</li>
            <li>Conversion Rate: 8%</li>
            <li>AOV: $100</li>
            <li>Profit Per Order: $25</li>
            <li>PPC Management Fee: 10%</li>
          </ul>
          <p className="mb-0">
            ➤ Estimated Clicks: 500
            <br />
            ➤ Estimated Orders: 40
            <br />
            ➤ Order Revenue: $4,000
            <br />
            ➤ Profit: $1,000
            <br />
            ➤ Total Ad Cost: $1,650
            <br />
            ➤ ROI: 142.42%
            <br />➤ Avg Cost per Order: $41.25
          </p>
        </div>
      </div>
    </div>
  );
}
