import React from "react";

const SeoProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      desc: "We conduct a comprehensive technical SEO audit, competitor analysis, and keyword opportunity mapping specific to the Bangalore market.",
    },
    {
      step: "02",
      title: "Strategy Development",
      desc: "We build a custom 90-day SEO roadmap targeting your highest-opportunity keywords and content gaps.",
    },
    {
      step: "03",
      title: "Technical Fixes",
      desc: "We resolve all crawl errors, indexation issues, and Core Web Vitals problems that may be suppressing your rankings.",
    },
    {
      step: "04",
      title: "On-Page Optimisation",
      desc: "We update existing pages and create new landing pages, blog posts, and resource content aligned with your keyword strategy.",
    },
    {
      step: "05",
      title: "Link Building & Digital PR",
      desc: "We execute a monthly link acquisition campaign to build domain authority and topical relevance.",
    },
    {
      step: "06",
      title: "Performance Monitoring",
      desc: "We track rankings, organic traffic, leads, and conversions weekly, reporting results monthly with clear commentary.",
    },
    {
      step: "07",
      title: "Ongoing Optimisation",
      desc: "SEO is not a one-time project. We continuously iterate on strategy, content, and technical improvements as your site grows.",
    },
  ];

  return (
    <section className="py-5">
      <div className="containerFull">
        <div className="text-center mb-5">
          <span className="badge bg-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
            Proven Methodology
          </span>
          <h2 className="customHeading fontHeading fontWeight700">
            Our SEO Process for Bangalore Clients
          </h2>
          <p className="customText text-muted max-700 mx-auto">
            Every engagement follows a structured, results-focused methodology designed to generate sustainable, long-term ranking growth.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {processSteps.map((step, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="bglr-process-card p-4 rounded-4 bg-white shadow-sm h-100 position-relative overflow-hidden border border-light-subtle">
                <div className="bglr-step-num position-absolute top-0 end-0 me-3 mt-2 fontHeading text-danger-subtle opacity-50 fw-bold display-4">
                  {step.step}
                </div>
                <div className="badge bg-danger text-white mb-3">Phase {step.step}</div>
                <h4 className="fontWeight700 text-dark fs-5 mb-2 position-relative">{step.title}</h4>
                <p className="text-secondary small mb-0 position-relative">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoProcess;
