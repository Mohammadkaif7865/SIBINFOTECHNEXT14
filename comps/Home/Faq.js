import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

/**
 * `schema` emits FAQPage structured data built from the same faqsData that
 * renders on screen, so the markup and the visible content can never drift
 * apart - Google requires them to match.
 *
 * Pass schema={false} on pages that already declare their own FAQPage block,
 * otherwise the page ends up with two competing FAQPage blocks and Google
 * trusts neither.
 */
const Faq = ({ faqsData, title, description, schema = true }) => {
  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  // Answers are authored as HTML strings; structured data wants plain text.
  const toText = (html) =>
    String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();

  const faqSchema =
    schema && Array.isArray(faqsData) && faqsData.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsData
            .filter((f) => f && f.question && f.answer)
            .map((f) => ({
              "@type": "Question",
              name: toText(f.question),
              acceptedAnswer: {
                "@type": "Answer",
                text: toText(f.answer),
              },
            })),
        }
      : null;

  return (
    <section>
      {faqSchema && faqSchema.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="containerFull ">
        <div className="row justify-content-center">
          <div className="col-lg-9">
        <p className="fontWeight600 title text-center"> FAQ</p>
        <h2 className="large_heading2 mt-4  text-center text_red fontWeight600"  dangerouslySetInnerHTML={{ __html:title }}>
         </h2>
         </div>
        </div>
          
       
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

export default Faq;
