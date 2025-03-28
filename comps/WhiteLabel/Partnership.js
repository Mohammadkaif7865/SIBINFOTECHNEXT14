import React, { useState } from "react";

const Partnership = () => {
  const [active, setActive] = useState("0");
  const agencyWorkflow = [
    {
      title: `Consultation & <br/> Strategy`,
      description:
        "We understand your client’s needs and create a customized plan.",
    },
    {
      title: `Execution Under <br/> Your Brand`,
      description:
        "Our team implements strategies while you manage client relationships.",
    },
    {
      title: `Regular Reporting <br/> & Insights`,
      description: "Get detailed performance reports with your branding.",
    },
    {
      title: `Ongoing <br/> Optimization `,
      description: "We continuously refine strategies for better results.",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="fontHeading large_heading2 fontWeight600">
              How Our <span className="text_red"> White Label Partnership</span>{" "}
              Works
            </h4>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              We’ve delivered over 2500 projects – we know what it takes to
              execute a seamless and optimized web-based software development
              process. execute a seamless and optimized web-based software
              development process.
            </p>
          </div>
        </div>

        <div className="workflow_item_container mt-5 pt-4">
          {agencyWorkflow.map((value, index) => {
            return (
              <div
                className={`workflow_item  ${active == index ? "active" : ""}`}
                onMouseOver={() => {
                  setActive(index);
                }}
              >
                <div className="workflow_item_inner">
                  <h4 className="heading">0{index + 1}</h4>

                  <div className="row mt-5 align-items-end">
                    <div className={`d-flex gap-3 ${active == index ? "" : ""} `}>
                      <h5
                        className="fontHeading fontWeight700 "
                        dangerouslySetInnerHTML={{ __html: value.title }}
                      ></h5>
                      <div className={` peraBox ${active == index ? "" : " "} overflow-hidden`}>
                        <p className="overflow-hidden">{value?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
  );
};

export default Partnership;
