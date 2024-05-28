import React from "react";

const ProcessStep = ({ numberColor, titleColor, title, items,number }) => (
  <div className="col-lg-3">
    <div className="itemProccess">
      <div className="numberLeft">
        <h5 className={`textNumber ${numberColor}`}>{number}</h5>
      </div>
      <div className="numberRight">
        <div className="processHeader">
          <h4
            className={`small_heading ${titleColor} fontHeading fontWeight600`}
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

const OurSteps = () => (
  <section>
    <div className="containerFull">
      <div className="text-center">
        <h3 className="small_heading fontHeading">
          How to Create an Effective Winning Digital Marketing Strategy in{" "}
          {new Date().getFullYear()}
        </h3>
        <h4 className="sub_heading mt-2 mt-lg-0">
          Our 4 Step Digital Marketing Process Key to SEO Success.
        </h4>
      </div>
      <div className="row mt-lg-4">
        <ProcessStep
        number={1}
          numberColor="textStrokeDarkBlue"
          titleColor="text_dark_blue"
          title="Strategy Development"
          items={[
            "Identify Target Audience",
            "Define Goals",
            "Market Research",
            "Tactics and Channels",
          ]}
        />
        <ProcessStep
          number={2}
          numberColor="textStrokeRed"
          titleColor="text_red"
          title="Implementation"
          items={[
            "Website and Social media Optimization",
            "Content Creation",
            "Advertising Campaigns",
            "Audience Engagement",
          ]}
        />
        <ProcessStep
          number={3}
          numberColor="textStrokeBlue"
          titleColor="text_light_blue"
          title="Analysis and Optimization"
          items={[
            "Performance Monitoring",
            "Data Analysis",
            "A/B Testing",
            "Optimization",
          ]}
        />
        <ProcessStep
          number={4}
          numberColor="textStrokeRed"
          titleColor="text_red"
          title="Report & Monitoring"
          items={["KPI Tracking", "Reporting", "Analysis and Insights"]}
        />
      </div>
    </div>
  </section>
);

export default OurSteps;
