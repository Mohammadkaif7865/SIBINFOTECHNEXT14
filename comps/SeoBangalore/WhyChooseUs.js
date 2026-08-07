import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  const differentiators = [
    {
      title: "Google Premier Partner since 2005",
      desc: "We are among the top 3% of Google Partners in India, with direct access to Google's product teams and beta features.",
      icon: "fa-solid fa-award",
    },
    {
      title: "18+ Years of Proven SEO Expertise",
      desc: "We have successfully navigated every major Google algorithm update, from Panda and Penguin to Helpful Content and the AI Overview era.",
      icon: "fa-solid fa-clock-rotate-left",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      desc: "Our strategies are proven across industries including FMCG, real estate, healthcare, ecommerce, SaaS, and B2B services.",
      icon: "fa-solid fa-globe",
    },
    {
      title: "Full-Service Capability Under One Roof",
      desc: "SEO, PPC, content marketing, social media, and web development under one roof, enabling a truly integrated growth strategy.",
      icon: "fa-solid fa-layer-group",
    },
    {
      title: "Transparent Reporting & Analytics",
      desc: "Monthly performance reports, keyword ranking dashboards, and direct access to your account manager.",
      icon: "fa-solid fa-chart-pie",
    },
    {
      title: "Trusted by Industry Giants",
      desc: "Notable clients include Airtel, Finolex, Jindal Steel, and BPCL who rely on us for market-leading rankings.",
      icon: "fa-solid fa-building-shield",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="containerFull">
        <div className="row align-items-center mb-5">
          <div className="col-lg-7">
            <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
              Industry Leadership
            </span>
            <h2 className="customHeading fontHeading fontWeight700 text-dark mb-3">
              Why Choose SIB Infotech as Your <span className="text_red">Bangalore SEO Company</span>
            </h2>
            <p className="customText text-secondary lead-p">
              Choosing an SEO partner in Bangalore is a significant investment. Here is why 850+ businesses across 40+ countries trust SIB Infotech:
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link href="#requestQuote" className="btnThemeRed px-4 py-3 rounded-2">
              <i className="fa-solid fa-paper-plane me-2"></i> Claim Free SEO Consultation
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {differentiators.map((diff, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="bglr-diff-card p-4 rounded-4 bg-white shadow-sm h-100 border-top border-4 border-danger">
                <div className="diff-icon text-danger mb-3">
                  <i className={`${diff.icon} fs-2`}></i>
                </div>
                <h4 className="fontWeight700 text-dark fs-5 mb-2">{diff.title}</h4>
                <p className="text-secondary small mb-0">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Client Showcase */}
        <div className="mt-5 p-4 rounded-4 bg-white border border-light-subtle shadow-sm">
          <h5 className="fontWeight700 text-center text-muted text-uppercase mb-4 tracking-wider fs-6">
            Trusted by Notable Brands & Industry Leaders
          </h5>
          <div className="row align-items-center justify-content-center g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-3 bg-light rounded-3 fw-bold text-dark fs-5">Airtel</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-light rounded-3 fw-bold text-dark fs-5">Finolex</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-light rounded-3 fw-bold text-dark fs-5">Jindal Steel</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-light rounded-3 fw-bold text-dark fs-5">BPCL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
