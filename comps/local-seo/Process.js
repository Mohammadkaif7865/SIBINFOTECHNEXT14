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

const Process = () => {
    const steps = [
        {
          number: "1",
          color: "DarkBlue",
          title: "Local SEO Strategy Building",
          items: [
            "Local Competitor Analysis",
            "Local Keyword Research",
            "Local SEO Audit",
            "Local NAP Citations",
          ],
        },
        {
          number: "2",
          color: "Red",
          title: "Local SEO Optimization",
          items: [
            "GMB Profile Optimization",
            "Improve visibility in local searches",
            "Optimize for Voice Search",
            "Share Updates and Events",
          ],
        },
        {
          number: "3",
          color: "Blue",
          title: "Implementation and Link Building",
          items: [
            "On-Page SEO for Local Visibility",
            "Manage Online Reviews",
            "Local Directory Listings",
            "Authentic and Quality Local Link Building",
          ],
        },
        {
          number: "4",
          color: "Red",
          title: "Performance Monitoring & Reporting",
          items: [
            "Monthly Reporting and Performance",
            "Conversion Goal Optimization",
            "Regular Trend Analysis",
            "Client Review",
          ],
        },
      ];
      

  return (
    <section className=" ">
      <div className="containerFull">
        <div className="text-center">
      
          <h4 className="sub_heading fontHeading fontWeight600">
            Our 4 Step Local SEO Process
          </h4>
          <h3 className="small_heading fontHeading mt-2">
            How to optimize your website for local search results
           
          </h3>
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

export default Process;
