// components/SeoCalculator.js
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import * as CONSTANTS from "../constants/constants";

export default function SeoCalculator() {
  const [form, setForm] = useState({
    newVisitors: "",
    conversionRate: "",
    ltv: "",
    profitMargin: "",
    seoSpend: "",
  });

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [results, setResults] = useState({});
  const [emailStatus, setEmailStatus] = useState(null);

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
    const newVisitors = parseFloat(form.newVisitors || 0);
    const conversionRate = parseFloat(form.conversionRate || 0);
    const ltv = parseFloat(form.ltv || 0);
    const profitMargin = parseFloat(form.profitMargin || 0);
    const seoSpend = parseFloat(form.seoSpend || 0);

    const leads = newVisitors * (conversionRate / 100);
    const revenue = leads * ltv;
    const profit = revenue * (profitMargin / 100) - seoSpend;
    const roi = seoSpend ? (profit / seoSpend) * 100 : 0;
    const avgCostPerLead = leads ? seoSpend / leads : 0;

    setResults({ leads, revenue, profit, roi, avgCostPerLead });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.firstName || !user.lastName) return;

    const html = `
      <table style="width: 100%;" border="1" cellspacing="0" cellpadding="8">
        <tr><td><strong>Name</strong></td><td>${user.firstName} ${
      user.lastName
    }</td></tr>
        <tr><td><strong>Email</strong></td><td>${user.email}</td></tr>
        <tr><td colspan="2"><strong>📊 SEO ROI Calculator Results</strong></td></tr>
        <tr><td>Estimated Leads/Orders</td><td>${results.leads?.toFixed(
          2
        )}</td></tr>
        <tr><td>Monthly Revenue (£)</td><td>£${results.revenue?.toFixed(
          2
        )}</td></tr>
        <tr><td>Profit after SEO Cost (£)</td><td>£${results.profit?.toFixed(
          2
        )}</td></tr>
        <tr><td>ROI (%)</td><td>${results.roi?.toFixed(2)}%</td></tr>
        <tr><td>Average Cost per Lead/Order (£)</td><td>£${results.avgCostPerLead?.toFixed(
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
          fromWhere: "SEO ROI Calculator Submission",
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

      const data = res.data;
      setEmailStatus(
        data.success
          ? "✅ Email sent successfully!"
          : "❌ Failed to send email."
      );
    } catch (err) {
      console.error(err);
      setEmailStatus("❌ Error sending email.");
    }
  };
  const guideSteps = [
    {
      title: "1. Estimated New Visitors from SEO",
      meaning:
        "The number of new visitors you expect to attract to your website each month from your SEO efforts.",
      importance: "More visitors = more leads = more revenue.",
      example: "A 40% boost = 2,000 new visitors.",
    },
    {
      title: "2. Website Conversion Rate (%)",
      meaning: "The % of visitors who take your desired action.",
      importance: "It shows how effectively your site turns visitors into leads.",
      example: "10 out of 100 convert = 10%.",
    },
    {
      title: "3. Customer Lifetime Value (LTV) (£)",
      meaning: "Total revenue per customer over their lifetime.",
      importance: "Shows long-term value of every lead.",
      example: "£50 per visit × 3 visits = £150 LTV.",
    },
    {
      title: "4. Profit Margin (%)",
      meaning: "Profit after all expenses as a % of revenue.",
      importance: "Needed to calculate real net profit.",
      example: "£100 revenue, £90 cost → 10% margin.",
    },
    {
      title: "5. Monthly SEO Investment (£)",
      meaning: "Your SEO spend (agency + tools).",
      importance: "The cost used to calculate ROI.",
      example: "£500 agency + £500 tools = £1,000/month.",
    },
  ].map((item, i) => (
    <div className="mb-4" key={i}>
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
  ));
  
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">📈 SEO ROI Calculator</h1>
      <p className="text-center text-muted">
        Estimate your potential leads, revenue, and ROI from SEO investments.
      </p>
  
      {/* Calculator Form and Results */}
      <div className="row g-4 mt-4">
        {/* Input Form */}
        <div className="col-md-6">
          <div className="card border-primary shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary mb-3">📝 Enter Your Data</h5>
              {[
                { label: "Estimated new visitors from SEO", name: "newVisitors" },
                { label: "Website conversion rate (%)", name: "conversionRate" },
                { label: "Customer lifetime value (LTV) (£)", name: "ltv" },
                { label: "Profit margin (%)", name: "profitMargin" },
                { label: "Monthly SEO investment (£)", name: "seoSpend" },
              ].map(({ label, name }) => (
                <div className="mb-3" key={name}>
                  <label className="form-label fw-semibold">
                    {label} <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className="form-control"
                    step="any"
                    required
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Result Section */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success mb-3">📊 SEO ROI Results</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Estimated leads/orders:</strong>{" "}
                  {results.leads?.toFixed(2) || 0}
                </li>
                <li className="list-group-item">
                  <strong>Monthly Revenue (£):</strong> £
                  {results.revenue?.toFixed(2) || 0}
                </li>
                <li className="list-group-item">
                  <strong>Profit after SEO costs (£):</strong> £
                  {results.profit?.toFixed(2) || 0}
                </li>
                <li className="list-group-item">
                  <strong>ROI (%):</strong> {results.roi?.toFixed(2) || 0}%
                </li>
                <li className="list-group-item">
                  <strong>Avg Cost per Lead (£):</strong> £
                  {results.avgCostPerLead?.toFixed(2) || 0}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      {/* Email Form */}
      <form onSubmit={handleSubmit} className="card mt-5 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">📩 Email Your Results</h5>
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
          <button type="submit" className="btn btn-primary mt-3">
            Send Results
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
  
      {/* Step-by-Step Guide */}
      <div className="mt-5">
        <h2 className="fw-bold text-center mb-4">
          How to Use the SEO ROI Calculator — Step-by-Step Guide
        </h2>
        {[...Array(5)].map((_, i) => guideSteps[i])}
        <div className="bg-light p-4 rounded shadow-sm mt-4">
          <h5 className="fw-bold">📊 Example Calculation</h5>
          <ul className="mb-2">
            <li>Estimated Visitors: 2,000</li>
            <li>Conversion Rate: 10%</li>
            <li>LTV: £150</li>
            <li>Profit Margin: 10%</li>
            <li>Monthly SEO Spend: £1,000</li>
          </ul>
          <p className="mb-0">
            ➤ Estimated Leads: 200
            <br />
            ➤ Monthly Revenue: £30,000
            <br />
            ➤ Profit: £2,000
            <br />
            ➤ ROI: 200%
            <br />➤ Avg Cost/Lead: £5.00
          </p>
        </div>
      </div>
    </div>
  )
  
}
