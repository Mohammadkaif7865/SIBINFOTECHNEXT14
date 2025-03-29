import React, { useState } from "react";

const Partnership = () => {
  const [active, setActive] = useState("0");
  const agencyWorkflow = [
    {
      title: `Consultation & <br/> Strategy`,
      description:
        "We start by understanding your client’s goals, challenges, and target audience. Our experts craft a customized marketing plan aligned with their needs, ensuring a data-driven approach for success. ",
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
            <h4 className=" large_heading2 fontWeight600">
              How Our <span className="text_red"> White Label Partnership</span>{" "}
              Works
            </h4>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              We seamlessly integrate with your agency to deliver expert digital
              marketing services under your brand. From strategy to execution,
              we handle the heavy lifting while you focus on client
              relationships. With branded reports and continuous support,
              scaling your agency has never been easier!
            </p>
          </div>
        </div>

        <div className="workflow_item_container mt-5 pt-4 b">
          {agencyWorkflow.map((value, index) => {
            return (
              <div
                className={`workflow_item b  ${
                  active == index ? "active" : ""
                }`}
                onMouseOver={() => {
                  setActive(index);
                }}
              >
                <div className="workflow_item_inner ">
                  <div className="row align-items-center">
                    <div
                      className={`d-flex gap-3 align-items-center ${active == index ? "" : ""} `}
                    >
                      <div>
                        <h4 className="heading">0{index + 1}</h4>
                        <h5
                          className=" fontWeight700 mt-2"
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h5>
                      </div>
                      <div
                        className={` peraBox ${
                          active == index ? "" : " "
                        } overflow-hidden`}
                      >
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
