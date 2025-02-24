import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faqs = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "What is local SEO and why is it important for my business?",
      answer: `<div className="accordion-body">
        <p>
          Local SEO helps businesses appear in local search results, Google Maps, and "near me" searches. 
          It increases visibility, brings in-store traffic, and generates leads from nearby customers.
        </p>
      </div>`,
    },
    {
      id: "faq2",
      question: "How does Local SEO differ from traditional SEO?",
      answer: `<div className="accordion-body">
        <p>
          Local SEO focuses on a particular area, enhancing Google My Business, local keywords, and citations. 
          Traditional SEO emphasizes wider rankings without geographic intent.
        </p>
      </div>`,
    },
    {
      id: "faq3",
      question: "How do I get started with Local SEO?",
      answer: `<div className="accordion-body">
        <ul>
          <li>Claim and enhance your Google My Business profile.</li>
          <li>Apply local keywords on your site.</li>
          <li>Register in local directories.</li>
          <li>Collect customer feedback.</li>
        </ul>
      </div>`,
    },
    {
      id: "faq4",
      question: "How much does Local SEO cost?",
      answer: `<div className="accordion-body">
        <p>
          Local SEO pricing varies from USD 200 to USD 1,400 per month, depending on competition, industry, and services needed.
        </p>
      </div>`,
    },
    {
      id: "faq5",
      question: "How long does it take to see results from Local SEO?",
      answer: `<div className="accordion-body">
        <p>
          Depending on the competition and strategy, it may take 3-5 months to see major improvements 
          in search rankings, traffic, and lead generation.
        </p>
      </div>`,
    },
    {
      id: "faq6",
      question: "How does local link building help my business?",
      answer: `<div className="accordion-body">
        <p>
          Local link building enhances a website’s authority, rankings, and trustworthiness, driving increased local traffic and leads.
        </p>
      </div>`,
    },
    {
      id: "faq7",
      question: "How can I track my Local SEO performance?",
      answer: `<div className="accordion-body">
        <p>
          Use Google My Business Insights, Google Analytics, and SEO tools such as Moz, BrightLocal, or SEMrush to track traffic and rankings.
        </p>
      </div>`,
    },
    {
      id: "faq8",
      question: "How to get local SEO traffic near me?",
      answer: `<div className="accordion-body">
        <p>
          Enhance Google My Business, use geo-specific terms, create local content, and ensure listings in local directories.
        </p>
      </div>`,
    }
  ];
  

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section className="bgGrey">
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
