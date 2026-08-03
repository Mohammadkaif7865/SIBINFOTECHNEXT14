import React from "react";

const SeoServices = () => {
  const services = [
    {
      title: "Technical SEO",
      icon: "fa-solid fa-code",
      desc: "Every high-ranking website is built on a technically sound foundation. Our technical SEO audits cover Core Web Vitals, crawlability, indexation, page speed, mobile optimisation, site architecture, and structured data. For Bangalore clients, we pay particular attention to local schema implementation and Google Business Profile technical alignment.",
    },
    {
      title: "On-Page Optimisation",
      icon: "fa-solid fa-file-lines",
      desc: "We optimise every page for both search engines and users. This includes keyword-aligned title tags, meta descriptions, header hierarchy, internal linking, image optimisation, and semantic content structuring. Our NLP-driven approach ensures your content aligns with Google's understanding of entities and intent.",
    },
    {
      title: "Off-Page SEO & Link Building",
      icon: "fa-solid fa-link",
      desc: "Domain authority is built through quality backlinks. Our link-building campaigns target authoritative Indian and international domains relevant to your industry. We use digital PR, guest posting, and content-driven outreach to earn links that move rankings sustainably.",
    },
    {
      title: "Local SEO & GBP Optimisation",
      icon: "fa-solid fa-location-dot",
      desc: "For Bangalore businesses targeting local customers, our local SEO service is transformative. We optimise your Google Business Profile, build consistent local citations, manage online reviews, and implement LocalBusiness schema to help you appear in the Google Map Pack for high-intent local searches.",
    },
    {
      title: "Content Marketing & Topical Authority",
      icon: "fa-solid fa-pen-nib",
      desc: "Google rewards websites that demonstrate expertise across a topic. We build content clusters around your core services, publishing pillar pages and supporting blog content that establishes SIB Infotech as the trusted authority in your niche.",
    },
    {
      title: "AI SEO & Generative Engine Optimisation",
      icon: "fa-solid fa-robot",
      desc: "In 2026, ranking on Google is no longer enough. We optimise your content for Google AI Overviews, ChatGPT, Perplexity, and other AI-powered search platforms. Our GEO and AEO services ensure your brand is cited in the AI-generated answers that are increasingly capturing user attention.",
    },
  ];

  return (
    <section className="py-5 bg-gradient-dark text-white bglr-services-bg">
      <div className="containerFull">
        <div className="text-center mb-5">
          <span className="badge bg-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
            End-to-End Search Optimization
          </span>
          <h2 className="customHeading fontHeading fontWeight700 text-white">
            Our SEO Services for Bangalore Businesses
          </h2>
          <p className="text-white-80 max-700 mx-auto">
            SIB Infotech offers a comprehensive suite of SEO services designed to deliver growth across every stage of the search funnel.
          </p>
        </div>

        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="bglr-service-card p-4 rounded-4 h-100 bg-dark-card border border-secondary-subtle">
                <div className="d-flex align-items-center mb-3">
                  <div className="service-icon-box bg-danger text-white rounded-3 p-3 me-3">
                    <i className={`${item.icon} fs-4`}></i>
                  </div>
                  <h4 className="fontWeight700 text-white fs-5 mb-0">
                    {item.title}
                  </h4>
                </div>
                <p className="text-white-70 fs-6 lh-base mb-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
