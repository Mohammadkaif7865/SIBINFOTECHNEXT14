import React from "react";

const OurAproach = () => {
  const seoMiniFeatures = [
    {
      number: "01",
      title: "Keyword Research",
      description:
        "We identify high-impact keywords tailored to your target audience, industry, and goals.",
    },
    {
      number: "02",
      title: "Content Optimization",
      description:
        "We identify high-impact keywords tailored to your target audience, industry, and goals.",
    },
    {
      number: "03",
      title: "Technical SEO Tools",
      description:
        "We identify high-impact keywords tailored to your target audience, industry, and goals.",
    },
    {
      number: "04",
      title: "Performance Tracking",
      description:
        "We identify high-impact keywords tailored to your target audience, industry, and goals.",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 className="fontWeight500">Our Approach</h5>
            <h4 className="heading fontWeight600 mt-3 text_red">
              Step by Step guide to <br /> SEO success
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
          {seoMiniFeatures.map((value, index) => {
            return (
              <div className="col-lg-3">
                <div className="item_approach">
                  <h2 >{value.number}</h2>
                  <h4 className="mt-4 ">{value.title}</h4>
                  <p className="mt-2">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurAproach;
