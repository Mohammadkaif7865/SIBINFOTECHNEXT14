import React from "react";

const OurAproach = () => {
  const seoMiniFeatures = [
    {
      phase: "Strategy & Research",
      services: [
        "Organic SEO Strategy Building",
        "Detailed Competitor Analysis",
        "Audience Requirements Analysis",
        "Keyword Research",
        "Website SEO Audit",
      ],
    },
    {
      phase: "Website Optimization",
      services: [
        "Website Optimization",
        "Quality Content and Copywriting",
        "Resolve Technical Issues",
        "Analytics and Data Tracking Setup",
        "Sitemap Submission",
      ],
    },
    {
      phase: "Implementation & Link Building",
      services: [
        "Authentic and Quality Link Building",
        "Local SEO Optimization",
        "Off page SEO",
        "On page SEO",
      ],
    },
    {
      phase: "Reporting & Monitoring",
      services: [
        "Monthly Reporting and performance",
        "Conversion Goal Optimisation",
        "Regular Trend Analysis",
        "Client Review",
      ],
    },
  ]

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 className="fontWeight500">Our Approach</h5>
            <h4 className="heading fontWeight600 mt-3 text_red">
              Our 4 Step SEO Process Key to SEO Success.
            </h4>
          </div>
          <div className="col-lg-6 ps-lg-6">
            <p>
              Our process simplifies SEO into clear, actionable steps keyword
              research and content optimization to link building and performance
              tracking, we ensure your website achieves sustainable.
            </p>
          </div>
        </div>
        <div className="row mt-5">
        {seoMiniFeatures.map((value, index) => (
            <div className="col-lg-3" key={index}>
              <div className="item_approach o ">
                <h2>0{index + 1}</h2>
                <h4 className="mt-4">{value.phase}</h4>
                <ul className="mt-2 ourapproach_ul">
                  {value.services.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAproach;
