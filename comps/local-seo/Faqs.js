import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faqs = () => {
const faqsData = [
  {
    id: "faq1",
    question: "What are local SEO services?",
    answer: `<div className="accordion-body"><p>Local SEO services help businesses improve visibility in location-based searches by optimizing their Google Business Profile, local citations, reviews, website content, and other local ranking signals.</p></div>`,
  },
  {
    id: "faq2",
    question: "How does local SEO work for a small business?",
    answer: `<div className="accordion-body"><p>Local SEO helps a small business become more visible to customers searching within its service area by improving local business information, reviews, website content, and other location-based signals.</p></div>`,
  },
  {
    id: "faq3",
    question: "What is the difference between SEO and local SEO?",
    answer: `<div className="accordion-body"><p>SEO generally targets searches without a specific geographic focus, while local SEO focuses on customers searching for businesses, products, or services in a particular location.</p></div>`,
  },
];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };
  

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
      <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
    
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
                      {item.question}
                      <span>
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
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
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
                      {item.question}
                      <span>
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
    </>

  );
};

export default Faqs;
