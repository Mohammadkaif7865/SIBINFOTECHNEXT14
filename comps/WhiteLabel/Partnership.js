import React, { useState } from "react";

const Partnership = () => {
  // const [active, setActive] = useState("0");
  const agencyWorkflow = [
    {
      title: `Consultation & <br/> Strategy`,
      description:
        "We start by understanding your client’s goals, challenges, and target audience. Our experts craft a customized marketing plan aligned with their needs, ensuring a data-driven approach for success. ",
    },
    {
      title: `Execution Under <br/> Your Brand`,
      description:
        "Our dedicated team executes the strategies while you maintain full control of client communication. Everything is done under your brand name, ensuring a consistent and professional experience for your clients.",
    },
    {
      title: `Branded Reporting <br/>& Actionable Insights`,
      description:
        "Get in-depth performance reports featuring your agency’s branding. We provide clear metrics, campaign analysis, and insights to help you showcase tangible results to your clients.",
    },
    {
      title: `Continuous Optimization <br/>& Dedicated Support `,
      description:
        "Digital marketing is ever-evolving, and so are we. Our team constantly refines strategies, runs A/B tests, and adjusts campaigns to improve performance. We also offer ongoing support to ensure sustained success. ",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className=" large_heading2 fontWeight600">
              <span> Our Approach To </span>
              <br />
              <span className="text_red sub_heading">
                White Label Digital Marketing
              </span>{" "}
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
            <p className="mt-2 fontWeight600 small_heading">Seamless, Scalable, and Results-Driven</p>
          </div>
        </div>

        {/* <div className="workflow_item_container mt-5 pt-4 b">
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
                      className={`d-flex gap-3 align-items-center ${
                        active == index ? "" : ""
                      } `}
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
        </div> */}

        <div className="partnership_box row mt-5 ">
          {agencyWorkflow.map((value, index) => {
            return (
              <div className="col-lg-3">
                <div className="partnership_box position-relative">
                  <div className="partnership_box_content_1">
                    <h4 className="heading">0{index + 1}</h4>

                    <div>
                      <h5
                        className=" fontWeight700 mt-2"
                        dangerouslySetInnerHTML={{ __html: value.title }}
                      ></h5>

                      <p className="mt-3">
                        Know More <i class="fa-solid fa-arrow-right ms-3"></i>
                      </p>
                    </div>
                  </div>
                  <div className="partnership_box_content_2">
                    <h5
                      className="fontWeight600"
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    ></h5>
                    <p className="mt-2">{value.description}</p>
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
