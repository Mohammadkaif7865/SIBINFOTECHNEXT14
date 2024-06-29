import React from "react";

const ProcessStep = ({ number, color, title, items }) => (
  <div className="col-lg-3">
    <div className="itemProccess">
      <div className="numberLeft">
        <h5 className={`textNumber textStroke${color}`}>{number}</h5>
      </div>
      <div className="numberRight">
        <div className="processHeader">
          <h4
            className={`small_heading text_${color} fontHeading fontWeight600`}
          >
            {title}
          </h4>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const SeoProcess = () => {
  const steps = [
    {
      number: "1",
      color: "DarkBlue",
      title: "Organic SEO Strategy Building",
      items: [
        "Detailed Competitor Analysis",
        "Audience Requirements Analysis",
        "Keyword Research",
        "Website SEO Audit",
      ],
    },
    {
      number: "2",
      color: "Red",
      title: "Website Optimization",
      items: [
        "Quality Content and Copywriting",
        "Resolve Technical Issues",
        "Analytics and Data Tracking Setup",
        "Sitemap Submission",
      ],
    },
    {
      number: "3",
      color: "Blue",
      title: "Implementation and Link Building",
      items: [
        "Authentic and Quality Link Building",
        "Local SEO Optimization",
        "Off page SEO",
        "On page SEO",
      ],
    },
    {
      number: "4",
      color: "Red",
      title: "Reporting and Monitoring",
      items: [
        "Monthly Reporting and performance",
        "Conversion Goal Optimisation",
        "Regular Trend Analysis",
        "Client Review",
      ],
    },
  ];

  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="text-center">
          <h3 className="small_heading fontHeading">
            How to Create an Effective Winning SEO Strategy in{" "}
            {new Date().getFullYear()}
          </h3>
          <h4 className="sub_heading fontHeading fontWeight600">
            Our 4 Step SEO Process Key to SEO Success.
          </h4>
        </div>
        <div className="row mt-lg-4">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoProcess;
