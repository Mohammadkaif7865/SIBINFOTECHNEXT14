import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faq = ({ faqsData, title, description }) => {
  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section>
      <div className="containerFull ">
        <p className="fontWeight600 title text-center"> FAQ</p>
        <h3 className="large_heading2 mt-4 fontHeading2 text-center text_red fontWeight600">
          {title}
          {/* <span className="fontWeight600">Digital Marketing Questions</span> */}
        </h3>
        <p
          className="mt-4 text-center title"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {/* faq */}

        <div className="row  mt-lg-5 mt-4">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <p
                      className=" fontHeading headerFaq fontWeight600"
                      onClick={() => {
                        if (open !== i) {
                          setOpen(i);
                        } else {
                          setOpen(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </p>

                    <div
                      className={`customFaq_answer_main ${
                        open == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" col-lg-6 ps-lg-4">
            {" "}
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq ">
                    <p
                      className=" fontHeading headerFaq fontWeight600"
                      onClick={() => {
                        if (open2 !== i) {
                          setOpen2(i);
                        } else {
                          setOpen2(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open2 == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </p>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
