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
      title: "Consultation & Research",
      items: [
        "Understanding your vision",
        "Competitor Analysis",
        "Identifying your target audience",
      ],
    },
    {
      number: "2",
      color: "Red",
      title: "Concept Development",
      items: [
        "Brainstorming ideas",
        "Creating mood boards",
        "Sketching initial concepts",
      ],
    },
    {
      number: "3",
      color: "Blue",
      title: "Design & Refinement",
      items: [
        "Crafting digital drafts",
        "Refining typography and color schemes",
        "Iterating based on feedback",
      ],
    },
    {
      number: "4",
      color: "Red",
      title: "Finalization & Delivery",
      items: [
        "Ensuring brand consistency",
        "Conducting quality checks",
        "Delivering high-quality, print-ready files",
      ],
    },
  ];

  return (
    <section className=" ">
      <div className="containerFull">
        <div className="text-center">
          <h4 className="sub_heading fontHeading fontWeight600">
            Our Seamless <span className="text_red">Design Process </span>
          </h4>
          {/* <h3 className="small_heading fontHeading mt-2">
            How to optimize your website for local search results
           
          </h3> */}
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
