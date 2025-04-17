import React, { useState } from "react";

const Partnership = ({
  agencyWorkflow,
  title,
  subtitle,
  rightDiscription,
  tagline,
}) => {
  // const [active, setActive] = useState("0");

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className=" large_heading2 fontWeight600">
              <span>{title} </span>
              <br className="" />
              <span className="text_red sub_heading">{subtitle}</span>{" "}
            </h4>
          </div>
          <div className="col-lg-6 ps-lg-5 mt-3 mt-lg-0">
            <p>
              We seamlessly integrate with your agency to deliver expert digital
              marketing services under your brand. From strategy to execution,
              we handle the heavy lifting while you focus on client
              relationships. With branded reports and continuous support,
              scaling your agency has never been easier!
            </p>
            <p className="mt-2 fontWeight600 small_heading">
              Seamless, Scalable, and Results-Driven
            </p>
          </div>
        </div>

        <div className="partnership_box row mt-5 ">
          {agencyWorkflow.map((value, index) => {
            return (
              <div className="col-md-6 col-lg-3 mb-4">
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
                  <div className="partnership_box_content_2 w-100">
                    <h5
                      className="fontWeight600"
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    ></h5>

                    <p
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    >
                      
                    </p>
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
