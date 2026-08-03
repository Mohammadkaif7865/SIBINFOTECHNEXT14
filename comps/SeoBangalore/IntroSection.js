import React from "react";

const IntroSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="pe-lg-4">
              <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
                Silicon Valley of India
              </span>
              <h2 className="customHeading fontHeading fontWeight700 text-dark mb-3">
                Enterprise-Grade SEO for Bangalore's Thriving Business Ecosystem
              </h2>
              <p className="customText text-secondary lead-p mb-3">
                Bangalore is India's Silicon Valley and one of the most competitive digital markets in the country. For businesses here, ranking on Google's first page is not just an advantage: it is a necessity. SIB Infotech is a Google Premier Partner SEO company with 18+ years of experience helping businesses across industries grow their organic visibility, generate qualified leads, and build long-term digital authority.
              </p>
              <p className="customText text-secondary lead-p">
                With offices in Mumbai and Delhi and a client base spanning 40+ countries, SIB Infotech brings enterprise-grade SEO expertise to businesses of every size in Bangalore. Whether you are a startup in Bangalore's thriving IT and startup ecosystem or an established brand looking to dominate local search, our team delivers measurable, durable rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="bglr-intro-card p-4 rounded-4 shadow-sm bg-white border-start border-4 border-danger">
              <h4 className="fontWeight700 text-dark mb-3">
                Why Work With SIB Infotech?
              </h4>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li className="d-flex align-items-start">
                  <i className="fa-solid fa-circle-check text-danger mt-1 me-3 fs-5"></i>
                  <div>
                    <strong>Google Premier Partner:</strong> Top 3% agency tier in India with priority access.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="fa-solid fa-circle-check text-danger mt-1 me-3 fs-5"></i>
                  <div>
                    <strong>18+ Years of Proven Track Record:</strong> Battle-tested strategies through all Google updates.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="fa-solid fa-circle-check text-danger mt-1 me-3 fs-5"></i>
                  <div>
                    <strong>Zero Lock-in Contracts:</strong> Flexible, result-driven pricing model.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="fa-solid fa-circle-check text-danger mt-1 me-3 fs-5"></i>
                  <div>
                    <strong>Full-Funnel SEO & GEO:</strong> Prepared for standard search & AI Overviews.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
