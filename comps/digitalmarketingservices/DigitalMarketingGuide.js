import React from "react";
import Link from "next/link";
import {
  FaCoins,
  FaLayerGroup,
  FaWrench,
  FaGaugeHigh,
  FaShieldHalved,
  FaCircleCheck,
  FaCartShopping,
  FaLaptopCode,
  FaBuilding,
  FaNotesMedical,
  FaGraduationCap,
  FaMicrochip,
  FaNetworkWired,
  FaRobot,
  FaBullseye,
  FaWandMagicSparkles,
  FaMapLocationDot,
  FaEarthAmericas,
  FaPhoneVolume,
} from "react-icons/fa6";

const DigitalMarketingGuide = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8fafc" }} id="digital-marketing-guide">
      <div className="containerFull">

        {/* Section 1: Comparison Matrix */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="text-center mb-4">
              <span
                className="badge px-3 py-2 text-uppercase mb-2 fontHeading fontWeight600 rounded-pill"
                style={{ backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "0.85rem", letterSpacing: "1px" }}
              >
                Strategic Decision Matrix
              </span>
              <h2 className="sub_heading fontHeading fontWeight700 text-dark">
                In-House Team vs. Freelancers vs. <span className="text_red">Top Digital Marketing Firms in India</span>
              </h2>
              <p className="customText col-lg-9 mx-auto mt-2 text-muted">
                Evaluating the right marketing execution model is one of the most critical decisions for any scaling enterprise or digital marketing business in India. Here is how SIB Infotech delivers superior ROI, speed, and cross-channel accountability.
              </p>
            </div>

            <div
              className="table-responsive bg-white rounded-4 shadow-sm border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <table className="table align-middle mb-0 text-start" style={{ minWidth: "780px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#0f172a" }}>
                    <th scope="col" className="text-start" style={{ width: "22%", padding: "18px 20px", color: "#ffffff", fontSize: "1.05rem", fontWeight: 700, textAlign: "left" }}>
                      Evaluation Dimension
                    </th>
                    <th scope="col" className="text-start" style={{ width: "25%", padding: "18px 20px", color: "#ffffff", fontSize: "1rem", fontWeight: 600, textAlign: "left" }}>
                      In-House Team
                    </th>
                    <th scope="col" className="text-start" style={{ width: "25%", padding: "18px 20px", color: "#ffffff", fontSize: "1rem", fontWeight: 600, textAlign: "left" }}>
                      Freelance Marketers
                    </th>
                    <th
                      scope="col"
                      className="text-start"
                      style={{
                        width: "28%",
                        padding: "18px 20px",
                        background: "linear-gradient(135deg, #e62234 0%, #b91c1c 100%)",
                        color: "#ffffff",
                        fontSize: "1.05rem",
                        textAlign: "left",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <span className="fontWeight700">SIB Infotech</span>
                        <span className="badge bg-warning text-dark rounded-pill px-2 py-1" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                          ⭐ Premier Partner
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-start">
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td className="fontWeight700 text-start" style={{ padding: "18px 20px", color: "#0f172a", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <div className="d-flex align-items-center justify-content-start">
                        <FaCoins className="text-warning me-2 fs-5 flex-shrink-0" />
                        <span style={{ fontSize: "0.95rem" }}>Cost &amp; Overhead</span>
                      </div>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5", fontSize: "0.78rem" }}>High Overhead</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>₹18L - ₹35L+/yr in fixed salaries, PF, bonuses, and paid tools.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d", fontSize: "0.78rem" }}>Unpredictable</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Low initial hourly fees, but frequent scope creep and hidden revisions.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#f0fdf4", borderLeft: "2px solid #86efac", borderRight: "2px solid #86efac", textAlign: "left" }}>
                      <div className="d-flex align-items-start justify-content-start text-start">
                        <FaCircleCheck className="mt-1 me-2 flex-shrink-0 fs-5" style={{ color: "#16a34a" }} />
                        <div className="text-start">
                          <strong className="d-block fontWeight700 text-start" style={{ color: "#15803d", fontSize: "0.95rem", textAlign: "left" }}>Predictable Retainers</strong>
                          <span className="text-start" style={{ color: "#0f172a", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Zero employment liabilities, zero software license fees, maximum ROI.</span>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td className="fontWeight700 text-start" style={{ padding: "18px 20px", color: "#0f172a", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <div className="d-flex align-items-center justify-content-start">
                        <FaLayerGroup className="text-primary me-2 fs-5 flex-shrink-0" />
                        <span style={{ fontSize: "0.95rem" }}>Cross-Channel Depth</span>
                      </div>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5", fontSize: "0.78rem" }}>Limited Capacity</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>1-3 individuals struggling to cover SEO, PPC, CRO, and design simultaneously.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d", fontSize: "0.78rem" }}>Siloed Skills</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Isolated skill (runs ads only or writes only); no cross-channel synergy.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#f0fdf4", borderLeft: "2px solid #86efac", borderRight: "2px solid #86efac", textAlign: "left" }}>
                      <div className="d-flex align-items-start justify-content-start text-start">
                        <FaCircleCheck className="mt-1 me-2 flex-shrink-0 fs-5" style={{ color: "#16a34a" }} />
                        <div className="text-start">
                          <strong className="d-block fontWeight700 text-start" style={{ color: "#15803d", fontSize: "0.95rem", textAlign: "left" }}>Complete Squad</strong>
                          <span className="text-start" style={{ color: "#0f172a", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Certified media buyers, SEO architects, CRO engineers, copywriters &amp; designers.</span>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td className="fontWeight700 text-start" style={{ padding: "18px 20px", color: "#0f172a", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <div className="d-flex align-items-center justify-content-start">
                        <FaWrench className="text-info me-2 fs-5 flex-shrink-0" />
                        <span style={{ fontSize: "0.95rem" }}>Tooling &amp; AI Tech</span>
                      </div>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5", fontSize: "0.78rem" }}>Expensive Stack</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>₹1.5L - ₹3L/month extra for Ahrefs, SEMrush, Supermetrics &amp; heatmaps.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d", fontSize: "0.78rem" }}>Bare Minimum</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Free or cracked tools without enterprise crawl intelligence.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#f0fdf4", borderLeft: "2px solid #86efac", borderRight: "2px solid #86efac", textAlign: "left" }}>
                      <div className="d-flex align-items-start justify-content-start text-start">
                        <FaCircleCheck className="mt-1 me-2 flex-shrink-0 fs-5" style={{ color: "#16a34a" }} />
                        <div className="text-start">
                          <strong className="d-block fontWeight700 text-start" style={{ color: "#15803d", fontSize: "0.95rem", textAlign: "left" }}>Full Enterprise Stack</strong>
                          <span className="text-start" style={{ color: "#0f172a", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Proprietary AI models, enterprise crawlers &amp; custom live BI dashboards included.</span>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td className="fontWeight700 text-start" style={{ padding: "18px 20px", color: "#0f172a", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <div className="d-flex align-items-center justify-content-start">
                        <FaGaugeHigh className="text-danger me-2 fs-5 flex-shrink-0" />
                        <span style={{ fontSize: "0.95rem" }}>Agility &amp; Scalability</span>
                      </div>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5", fontSize: "0.78rem" }}>Slow Execution</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Launching a new channel requires recruiting and 60-90 day training cycles.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d", fontSize: "0.78rem" }}>High Risk</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Unreliable bandwidth, burnout, and sudden project abandonment.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#f0fdf4", borderLeft: "2px solid #86efac", borderRight: "2px solid #86efac", textAlign: "left" }}>
                      <div className="d-flex align-items-start justify-content-start text-start">
                        <FaCircleCheck className="mt-1 me-2 flex-shrink-0 fs-5" style={{ color: "#16a34a" }} />
                        <div className="text-start">
                          <strong className="d-block fontWeight700 text-start" style={{ color: "#15803d", fontSize: "0.95rem", textAlign: "left" }}>Instant Velocity &amp; Scaling</strong>
                          <span className="text-start" style={{ color: "#0f172a", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Scale ad spend or deploy new channels in India/globally within 48 hours.</span>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="fontWeight700 text-start" style={{ padding: "18px 20px", color: "#0f172a", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <div className="d-flex align-items-center justify-content-start">
                        <FaShieldHalved className="text-success me-2 fs-5 flex-shrink-0" />
                        <span style={{ fontSize: "0.95rem" }}>Accountability &amp; SLAs</span>
                      </div>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5", fontSize: "0.78rem" }}>Internal Bias</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Often absorbed in day-to-day firefighting rather than conversion metrics.</p>
                    </td>
                    <td className="text-start" style={{ padding: "18px 20px", backgroundColor: "#ffffff", textAlign: "left" }}>
                      <span className="badge rounded-pill px-2 py-1 fontWeight700 mb-1 d-inline-block text-start" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d", fontSize: "0.78rem" }}>No Guarantees</span>
                      <p className="mb-0 mt-1 text-start" style={{ color: "#1e293b", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Rarely bound by legal performance SLAs or structured reporting.</p>
                    </td>
                    <td
                      className="text-start"
                      style={{
                        padding: "18px 20px",
                        backgroundColor: "#f0fdf4",
                        borderLeft: "2px solid #86efac",
                        borderRight: "2px solid #86efac",
                        borderBottom: "2px solid #86efac",
                        textAlign: "left",
                      }}
                    >
                      <div className="d-flex align-items-start justify-content-start text-start">
                        <FaCircleCheck className="mt-1 me-2 flex-shrink-0 fs-5" style={{ color: "#16a34a" }} />
                        <div className="text-start">
                          <strong className="d-block fontWeight700 text-start" style={{ color: "#15803d", fontSize: "0.95rem", textAlign: "left" }}>100% Commercial SLAs</strong>
                          <span className="text-start" style={{ color: "#0f172a", fontSize: "0.9rem", lineHeight: "1.45", textAlign: "left" }}>Google Premier Partner standards, transparent tracking &amp; dedicated Account Manager.</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 2: Industry-Specific Solutions */}
        <div className="row my-5">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <span
                className="badge px-3 py-2 text-uppercase mb-2 fontHeading fontWeight600 rounded-pill"
                style={{ backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "0.85rem", letterSpacing: "1px" }}
              >
                Specialized Sector Playbooks
              </span>
              <h2 className="sub_heading fontHeading fontWeight700 text-dark">
                Custom Digital Marketing Solutions for <span className="text_red">India&apos;s High-Growth Sectors</span>
              </h2>
              <p className="customText col-lg-9 mx-auto mt-2 text-muted">
                Generic marketing formulas fail because every industry operates on distinct sales cycles, regulatory frameworks, and unit economics. SIB Infotech provides tailored digital marketing services in India engineered for your exact business model.
              </p>
            </div>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#fee2e2", color: "#dc2626", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaCartShopping />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    E-Commerce &amp; D2C Brands
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    In the fast-moving D2C landscape, success depends on high ROAS, low CAC, and customer retention. We build Performance Max Shopping funnels, dynamic Meta catalog ads, automated Klaviyo retention flows, and conversion rate optimization (CRO) to maximize Average Order Value.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">PMax Shopping</span>
                    <span className="badge bg-light text-dark border">Meta Catalog Ads</span>
                    <span className="badge bg-light text-dark border">Klaviyo Automation</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#e0e7ff", color: "#4338ca", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaLaptopCode />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    B2B SaaS &amp; Enterprise IT
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    B2B sales cycles involve multiple corporate stakeholders and long deliberation. We build account-based marketing (ABM) engines utilizing hyper-targeted LinkedIn Ads, BOFU technical product SEO, authoritative whitepapers, and automated demo booking pipelines.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">LinkedIn ABM</span>
                    <span className="badge bg-light text-dark border">BOFU Technical SEO</span>
                    <span className="badge bg-light text-dark border">Demo Funnels</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#fef3c7", color: "#d97706", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaBuilding />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    Real Estate &amp; Builders
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Real estate buyers require hyper-local trust, property visualizations, and RERA compliance. Our digital campaigns drive high-intent residential and commercial site visits through precision geo-fenced Google Ads, 3D video ads, and verified CRM telecalling pipelines.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">Geo-Fenced Ads</span>
                    <span className="badge bg-light text-dark border">RERA Compliant</span>
                    <span className="badge bg-light text-dark border">Verified Site Visits</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#dcfce7", color: "#15803d", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaNotesMedical />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    Healthcare &amp; Hospitals
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Healthcare marketing requires strict adherence to medical ethics and Google YMYL standards. We elevate hospital and clinic authority through verified E-E-A-T doctor profile optimization, Google Maps Local 3-Pack domination, and patient appointment booking funnels.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">Google Maps 3-Pack</span>
                    <span className="badge bg-light text-dark border">YMYL Medical SEO</span>
                    <span className="badge bg-light text-dark border">Appointment Booking</span>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#f3e8ff", color: "#7e22ce", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaGraduationCap />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    Education &amp; EdTech
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Universities, coaching institutes, and EdTech platforms face intense admission cycles. We run high-velocity student enrollment campaigns utilizing YouTube video ads, interactive webinars, course discovery SEO pages, and programmatic remarketing.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">Admission Funnels</span>
                    <span className="badge bg-light text-dark border">YouTube Ad Campaigns</span>
                    <span className="badge bg-light text-dark border">Webinar Pipelines</span>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "#ccfbf1", color: "#0f766e", width: "56px", height: "56px", fontSize: "1.4rem" }}
                  >
                    <FaCoins />
                  </div>
                  <h4 className="small_heading fontHeading fontWeight700 text-dark">
                    FinTech, BFSI &amp; NBFCs
                  </h4>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Financial services demand the highest degree of user trust and compliance. We architect secure customer acquisition funnels for investment apps, loan providers, and insurance platforms, combining programmatic display, high-intent financial query SEO, and compliance-reviewed search advertising.
                  </p>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    <span className="badge bg-light text-dark border">Financial Query SEO</span>
                    <span className="badge bg-light text-dark border">KYC Conversion Funnels</span>
                    <span className="badge bg-light text-dark border">Regulated Ad Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: AI Search & GEO Card */}
        <div className="row my-5">
          <div className="col-lg-12">
            <div
              className="p-4 p-lg-5 rounded-4 shadow-lg text-white position-relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #090d16 0%, #151c2e 60%, #1e293b 100%)", border: "1px solid #334155" }}
            >
              <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="col-lg-8">
                  <span className="badge bg-primary text-white px-3 py-2 text-uppercase mb-3 rounded-pill" style={{ letterSpacing: "1px", fontSize: "0.8rem" }}>
                    🚀 2026 Search Intelligence
                  </span>
                  <h2 className="sub_heading fontHeading fontWeight700 text-white">
                    AI Search &amp; Generative Engine Optimization (GEO) in India
                  </h2>
                  <p className="mt-3 text-light text-justify" style={{ opacity: 0.95, lineHeight: 1.7 }}>
                    Search behavior has fundamentally shifted. Over 40% of modern commercial queries now trigger AI-generated summaries across Google AI Overviews, SearchGPT, Perplexity, and Microsoft Copilot. Traditional keyword stuffing is obsolete; forward-thinking brands must optimize for citation authority, semantic knowledge graphs, and multimodal relevance.
                  </p>
                  <p className="text-light text-justify" style={{ opacity: 0.95, lineHeight: 1.7 }}>
                    As a pioneering digital marketing company in India, SIB Infotech integrates proprietary GEO frameworks into all client campaigns. We structure your digital assets with semantic entity schemas, authoritative factual verification, and Q&amp;A syntax that forces AI search models to cite your brand as the definitive source.
                  </p>

                  <div className="row mt-4 g-3">
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <div className="d-flex align-items-center mb-1">
                          <FaMicrochip className="text-danger me-2 fs-5" />
                          <strong className="text-white">Google AI Overviews (AIO)</strong>
                        </div>
                        <p className="small text-light mb-0" style={{ opacity: 0.85 }}>Winning prime placement in conversational search answers.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <div className="d-flex align-items-center mb-1">
                          <FaNetworkWired className="text-info me-2 fs-5" />
                          <strong className="text-white">Knowledge Graph Authority</strong>
                        </div>
                        <p className="small text-light mb-0" style={{ opacity: 0.85 }}>Establishing verified brand authority in Google Knowledge Vault.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <div className="d-flex align-items-center mb-1">
                          <FaRobot className="text-warning me-2 fs-5" />
                          <strong className="text-white">LLM Training Inclusions</strong>
                        </div>
                        <p className="small text-light mb-0" style={{ opacity: 0.85 }}>Ensuring your brand is recommended across ChatGPT, Claude &amp; Gemini.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <div className="d-flex align-items-center mb-1">
                          <FaBullseye className="text-success me-2 fs-5" />
                          <strong className="text-white">Zero-Click Impressions</strong>
                        </div>
                        <p className="small text-light mb-0" style={{ opacity: 0.85 }}>Capturing high-intent users directly in conversational search interfaces.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0 text-center">
                  <div className="p-4 rounded-4 shadow" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <div className="mb-3">
                      <FaWandMagicSparkles className="text-danger" style={{ fontSize: "2.5rem" }} />
                    </div>
                    <h4 className="h5 fontHeading fontWeight700 text-white">
                      Get Your Free AI Search &amp; GEO Audit
                    </h4>
                    <p className="small text-light mt-2" style={{ opacity: 0.9 }}>
                      Find out how your brand currently performs on Google AI Overviews, SearchGPT, and Perplexity.
                    </p>
                    <Link href="/contact-us" className="btn btn-danger w-100 mt-3 py-2 fontWeight600 rounded-pill shadow">
                      Request Free AI Audit &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Pan-India & Global Reach */}
        <div className="row my-5">
          <div className="col-lg-12">
            <div className="text-center mb-4">
              <span
                className="badge px-3 py-2 text-uppercase mb-2 fontHeading fontWeight600 rounded-pill"
                style={{ backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "0.85rem", letterSpacing: "1px" }}
              >
                Scalable Geo Coverage
              </span>
              <h2 className="sub_heading fontHeading fontWeight700 text-dark">
                Pan-India Regional Penetration &amp; <span className="text_red">Global Expansion</span>
              </h2>
              <p className="customText col-lg-9 mx-auto mt-2 text-muted">
                Whether dominating regional commercial hubs across India or penetrating high-value western markets, SIB Infotech provides the localized infrastructure, linguistic nuances, and technical capabilities to scale your customer base everywhere.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100 border" style={{ borderColor: "#e2e8f0" }}>
                  <div className="d-flex align-items-center mb-3">
                    <span className="p-2 rounded-3 bg-danger bg-opacity-10 text-danger me-3 fs-4">
                      <FaMapLocationDot />
                    </span>
                    <h4 className="small_heading fontHeading fontWeight700 text-dark mb-0">
                      Pan-India Regional &amp; Vernacular Reach
                    </h4>
                  </div>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    India is a federation of diverse regional languages, purchasing power, and cultural nuances. We architect localized search and vernacular social campaigns across:
                  </p>
                  <ul className="customText ps-3 mt-3" style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#334155" }}>
                    <li><strong>Metro Commercial Hubs:</strong> Mumbai Metropolitan Region (Andheri, BKC, Malad, Powai, Thane), Delhi NCR (Gurgaon, Noida, South Delhi), Bangalore tech corridors, Pune, Hyderabad, and Chennai.</li>
                    <li><strong>Tier-2 &amp; Tier-3 High Growth Cities:</strong> Ahmedabad, Surat, Jaipur, Lucknow, Indore, Chandigarh, Kochi, and Coimbatore.</li>
                    <li><strong>Vernacular Multi-Lingual Campaigns:</strong> Targeting audiences in Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, and Bengali for 4x higher CTR and lower CPCs.</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100 border" style={{ borderColor: "#e2e8f0" }}>
                  <div className="d-flex align-items-center mb-3">
                    <span className="p-2 rounded-3 bg-primary bg-opacity-10 text-primary me-3 fs-4">
                      <FaEarthAmericas />
                    </span>
                    <h4 className="small_heading fontHeading fontWeight700 text-dark mb-0">
                      Global Market Expansion (US, UK, UAE &amp; APAC)
                    </h4>
                  </div>
                  <p className="customText mt-2" style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Over 40% of SIB Infotech&apos;s active campaigns serve international businesses in high-GDP markets. We provide world-class technical execution with round-the-clock agility:
                  </p>
                  <ul className="customText ps-3 mt-3" style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#334155" }}>
                    <li><strong>United States &amp; Canada:</strong> High-intent commercial Google Ads management, competitive B2B SaaS SEO, and CCPA-compliant funnels.</li>
                    <li><strong>United Kingdom &amp; Europe:</strong> GDPR-compliant performance advertising, multi-currency eCommerce funnel optimization, and Google UK rank tracking.</li>
                    <li><strong>Middle East &amp; UAE:</strong> English and Arabic bilingual digital campaigns in Dubai, Abu Dhabi, and Riyadh for real estate, luxury retail, and professional services.</li>
                    <li><strong>Australia &amp; New Zealand:</strong> High-efficiency lead generation and local search optimization across Sydney, Melbourne, and Brisbane.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Due Diligence Checklist */}
        <div className="row my-5">
          <div className="col-lg-12">
            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm border" style={{ borderColor: "#e2e8f0" }}>
              <div className="text-center mb-4">
                <span
                  className="badge px-3 py-2 text-uppercase mb-2 fontHeading fontWeight600 rounded-pill"
                  style={{ backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "0.85rem", letterSpacing: "1px" }}
                >
                  Agency Selection Checklist
                </span>
                <h2 className="sub_heading fontHeading fontWeight700 text-dark">
                  How to Choose the Best <span className="text_red">Digital Marketing Consultant &amp; Company in India</span>
                </h2>
                <p className="customText col-lg-9 mx-auto mt-2 text-muted">
                  Use our 4-point due diligence checklist to evaluate potential digital agency partners before signing any retainer agreement:
                </p>
              </div>

              <div className="row g-3 mt-2">
                <div className="col-md-6 col-lg-3">
                  <div className="p-4 bg-light rounded-4 h-100 border text-center">
                    <div
                      className="mb-3 mx-auto shadow-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        minWidth: "48px",
                        minHeight: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#e62234",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        lineHeight: 1,
                      }}
                    >
                      1
                    </div>
                    <h5 className="fontHeading fontWeight700 text-dark" style={{ fontSize: "1rem" }}>
                      Google Premier Partner
                    </h5>
                    <p className="small text-muted mt-2 mb-0">
                      Ensure the agency is officially in the top 3% tier with certified engineers and direct Google technical escalation support.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="p-4 bg-light rounded-4 h-100 border text-center">
                    <div
                      className="mb-3 mx-auto shadow-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        minWidth: "48px",
                        minHeight: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#e62234",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        lineHeight: 1,
                      }}
                    >
                      2
                    </div>
                    <h5 className="fontHeading fontWeight700 text-dark" style={{ fontSize: "1rem" }}>
                      Documented Case Studies
                    </h5>
                    <p className="small text-muted mt-2 mb-0">
                      Demand proof of pipeline revenue, customer acquisition cost reduction, and organic conversion growth in your sector.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="p-4 bg-light rounded-4 h-100 border text-center">
                    <div
                      className="mb-3 mx-auto shadow-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        minWidth: "48px",
                        minHeight: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#e62234",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        lineHeight: 1,
                      }}
                    >
                      3
                    </div>
                    <h5 className="fontHeading fontWeight700 text-dark" style={{ fontSize: "1rem" }}>
                      In-House Specialists
                    </h5>
                    <p className="small text-muted mt-2 mb-0">
                      Confirm you get a named, dedicated in-house account manager, certified media buyers, and senior technical SEO analysts.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="p-4 bg-light rounded-4 h-100 border text-center">
                    <div
                      className="mb-3 mx-auto shadow-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        minWidth: "48px",
                        minHeight: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#e62234",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        lineHeight: 1,
                      }}
                    >
                      4
                    </div>
                    <h5 className="fontHeading fontWeight700 text-dark" style={{ fontSize: "1rem" }}>
                      Full-Funnel Capabilities
                    </h5>
                    <p className="small text-muted mt-2 mb-0">
                      Avoid siloed vendors. Choose an agency that synchronizes SEO, PPC, Social Media, and CRO under one unified strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-4 p-4 rounded-4 text-center d-flex flex-column flex-md-row align-items-center justify-content-between"
                style={{ backgroundColor: "#fff1f2", border: "1px solid #fecdd3" }}
              >
                <div className="text-md-start mb-3 mb-md-0">
                  <h4 className="h6 fontHeading fontWeight700 text-dark mb-1">
                    Ready to scale with India&apos;s leading digital marketing agency?
                  </h4>
                  <p className="small text-muted mb-0">
                    Speak directly with SIB Infotech&apos;s senior growth consultants for a free strategic proposal.
                  </p>
                </div>
                <div>
                  <a href="tel:+919222260000" className="btn btn-danger px-4 py-2 fontWeight600 rounded-pill shadow-sm d-inline-flex align-items-center">
                    <FaPhoneVolume className="me-2" /> +91-92222-60000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingGuide;
