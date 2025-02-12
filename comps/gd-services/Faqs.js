import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faqs = () => {
    const faqsData = [
        {
          id: "faq1",
          question: "What is graphic design and how can it help my business?",
          answer: `<div className="accordion-body">
              <p>
                Graphic designing is a strategic tool that uses images, fonts, and colors. 
                It enables businesses to build strong branding, develop engaging marketing materials, and improve user experience.
              </p>
            </div>`,
        },
        {
          id: "faq2",
          question: "Do you provide consultations prior to project commencement?",
          answer: `<div className="accordion-body">
              <p>
                Of course! We offer a free initial consultation to learn about your design requirements, 
                exchange ideas, and make sure we produce the ideal images for your company.
              </p>
            </div>`,
        },
        {
          id: "faq3",
          question: "How quick is SIB Infotech’s turnaround time?",
          answer: `<div className="accordion-body">
              <p>
                The turnaround time depends upon the complexity of the project. Normally, it takes 1-2 days. 
                However, complex tasks such as custom illustrations, infographics, and multi-page booklets take more time, 
                while simple revisions can be completed within one day.
              </p>
            </div>`,
        },
        {
          id: "faq4",
          question: "What makes your graphic design services unique?",
          answer: `<div className="accordion-body">
              <p>
                Our specialty is creating unique, superior designs that complement your company's identity. 
                Every design is visually appealing, captivating, and results-driven.
              </p>
            </div>`,
        },
        {
          id: "faq5",
          question: "How much do your graphic design services cost?",
          answer: `<div className="accordion-body">
              <p>
                The cost depends on the complexity and type of designs. 
                Contact us for a custom quote based on your needs.
              </p>
            </div>`,
        },
        {
          id: "faq6",
          question: "Are you able to work with my current brand guidelines?",
          answer: `<div className="accordion-body">
              <p>
                Yes, if you already have brand guidelines, we will make sure that every design adheres 
                to your brand’s color, typography, and overall style.
              </p>
            </div>`,
        },
        {
          id: "faq7",
          question: "Do you provide website design as well?",
          answer: `<div className="accordion-body">
              <p>
                Yes, we provide website design services. Our team specializes in UI/UX design, 
                landing pages, and website redesigns to ensure a visually appealing and user-friendly experience.
              </p>
            </div>`,
        },
        {
          id: "faq8",
          question: "How do I get started?",
          answer: `<div className="accordion-body">
              <p>
                Simply contact us with your design requirements, and our team will guide you through the process. 
                Reach out today to begin your project.
              </p>
            </div>`,
        }
      ];
      
  

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section>
      <div className="containerFull ">
        <h4 className="heading fontHeading text-center mb-4 fontWeight600">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        {/* faq */}

        <div className=" row  ">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq lseo">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open !== i) {
                          setOpen(i);
                        } else {
                          setOpen(null);
                        }
                      }}
                    >
                      {item.question}
                      <span>
                        {open == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

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
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq lseo">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open2 !== i) {
                          setOpen2(i);
                        } else {
                          setOpen2(null);
                        }
                      }}
                    >
                      {item.question}
                      <span>
                        {open2 == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="m-3"
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

export default Faqs;
