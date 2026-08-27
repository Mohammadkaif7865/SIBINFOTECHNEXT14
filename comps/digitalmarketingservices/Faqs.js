
import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  const faqsData = [
    {
      id: "faq1",
      question: "What is digital marketing?",
      answer: `<div className="accordion-body"><p>Digital marketing is promoting products or services through digital channels such as search engines, social media, email, websites, SEO, PPC, and content marketing.</p></div>`,
    },
    {
      id: "faq2",
      question: "Is digital marketing a good career option?",
      answer: `<div className="accordion-body"><p>Yes. Digital marketing offers opportunities across SEO, paid advertising, social media, content, analytics, and other areas. It also requires continuous learning as platforms and technologies change.</p></div>`,
    },
    {
      id: "faq3",
      question: "What is SEO in digital marketing?",
      answer: `<div className="accordion-body"><p>SEO is a core part of digital marketing focused on improving a website's organic visibility in search engines. It works alongside paid advertising, social media, content marketing, and other digital channels.</p></div>`,
    },
    {
      id: "faq4",
      question: "What is PPC in digital marketing?",
      answer: `<div className="accordion-body"><p>PPC is a paid advertising model where businesses pay when users click on their ads. It is commonly used through platforms such as Google Ads and social advertising platforms to generate targeted traffic.</p></div>`,
    },
    {
      id: "faq5",
      question: "What is CTR in digital marketing?",
      answer: `<div className="accordion-body"><p>CTR (click-through rate) is the percentage of users who click a link or advertisement after seeing it. It is calculated as clicks divided by impressions and is commonly used to measure ad or search-result engagement.</p></div>`,
    },
    {
      id: "faq6",
      question: "How do I start learning digital marketing?",
      answer: `<div className="accordion-body"><p>Start with the basics of SEO, PPC, social media, content marketing, and analytics. Use reputable free learning resources, then practice by working on a real website, campaign, or personal project.</p></div>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));

  return (
    <section>
      <div className="containerFull ">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="fontWeight600 title text-center"> FAQ</p>
            <h2
              className="large_heading2 mt-4  text-center text_red fontWeight600"
              dangerouslySetInnerHTML={{
                __html: "Frequently Asked Digital Marketing Questions",
              }}
            ></h2>
          </div>
        </div>

        <div className="row  mt-lg-5 mt-4">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <p
                      className="  headerFaq fontWeight600"
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
                      className="  headerFaq fontWeight600"
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

export default Faqs;
