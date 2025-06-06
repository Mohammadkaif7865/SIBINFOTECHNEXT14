import React, { useState } from "react";

const Partnership = ({
  agencyWorkflow,
  title,
  subtitle,
  rightTitle,
  rightDiscription,
  tagline,
  batchtitle,
}) => {
  // const [active, setActive] = useState("0");

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 className=" fontWeight600">{batchtitle}</h5>
            <h4 className=" mt-3 large_heading2 fontWeight600">
              <span>{title} </span>
              <br className="" />
              <span className="text_red sub_heading">{subtitle}</span>{" "}
            </h4>
          </div>
          <div className="col-lg-6 ps-lg-5 mt-3 mt-lg-0">
            <h4 className="fontWeight600">{rightTitle}</h4>

      
            <p className="mt-3">{rightDiscription}</p>
            <p className="mt-2 fontWeight600 small_heading">{tagline}</p>
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
                    ></p>
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
