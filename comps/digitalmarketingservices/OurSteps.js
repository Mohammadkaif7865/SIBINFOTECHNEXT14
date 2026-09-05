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
        <h3 className="small_heading fontHeading text_red">
          Proven Methodologies &amp; Frameworks
        </h3>
        <h4 className="sub_heading mt-2 fontHeading fontWeight600">
          Our 4-Stage Digital Marketing Framework for Predictable Growth
        </h4>
        <p className="customText col-lg-9 mx-auto mt-2">
          Discover how our seasoned digital marketing consultants engineer sustainable, revenue-generating customer acquisition engines through our rigorous 4-step execution model.
        </p>
      </div>
      <div className="row mt-lg-4">
        <ProcessStep
          number={1}
          numberColor="textStrokeDarkBlue"
          titleColor="text_dark_blue"
          title="Deep Discovery & Audit"
          items={[
            "Competitor Market Intelligence",
            "Technical SEO & Website Audit",
            "Audience Persona Segmentation",
            "Commercial Keyword Research",
          ]}
        />
        <ProcessStep
          number={2}
          numberColor="textStrokeRed"
          titleColor="text_red"
          title="Full-Funnel Campaign Setup"
          items={[
            "High-Converting Landing Pages",
            "Multi-Tier Paid Search & Social",
            "Content Strategy & Production",
            "Tracking & GA4 / GTM Instrumentation",
          ]}
        />
        <ProcessStep
          number={3}
          numberColor="textStrokeBlue"
          titleColor="text_light_blue"
          title="A/B Testing & Optimization"
          items={[
            "Multi-Variant Ad Creative Testing",
            "Negative Keyword & Bid Pruning",
            "Conversion Rate Optimization (CRO)",
            "Audience Retargeting & Lookalikes",
          ]}
        />
        <ProcessStep
          number={4}
          numberColor="textStrokeRed"
          titleColor="text_red"
          title="Scale & Revenue Attribution"
          items={[
            "Real-Time Dashboard Access",
            "Full Attribution & ROAS Analysis",
            "Budget Scaling on Winner Channels",
            "Quarterly Strategic Roadmapping",
          ]}
        />
      </div>
    </div>
  </section>
);

export default OurSteps;
