import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faqs = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "What is SEO?",
      answer: `<div className="accordion-body"><p>SEO (search engine optimization) is the practice of improving a website so it ranks higher in organic, unpaid search results through keyword optimization, quality content, technical fixes, and backlinks to attract more relevant traffic.</p></div>`,
    },
    {
      id: "faq2",
      question: "What is SEO services?",
      answer: `<div className="accordion-body"><p>SEO services are professional efforts to improve a website's visibility in search engines through keyword research, on-page optimization, technical fixes, content creation, and link building to increase organic traffic and leads.</p></div>`,
    },
    {
      id: "faq3",
      question: "How does SEO work?",
      answer: `<div className="accordion-body"><p>SEO works by helping search engines understand and trust a website through relevant keywords, technical performance, quality backlinks, and good user experience, which together influence rankings for relevant searches.</p></div>`,
    },
    {
      id: "faq4",
      question: "What is technical SEO?",
      answer: `<div className="accordion-body"><p>Technical SEO is optimizing a website's backend, including site speed, mobile-friendliness, crawlability, indexing, and structured data, so search engines can efficiently access and understand its content.</p></div>`,
    },
    {
      id: "faq5",
      question: "Are SEO services worth it?",
      answer: `<div className="accordion-body"><p>Yes, SEO services can be valuable for businesses that want to build long-term organic visibility and generate relevant traffic without relying entirely on paid advertising. Results usually take time and depend on competition, website quality, and the strategy used.</p></div>`,
    },
    {
      id: "faq6",
      question: "What is included in SEO services?",
      answer: `<div className="accordion-body"><p>A typical SEO package includes a technical audit, keyword research, on-page optimization, content optimization, internal linking, off-page SEO, local SEO where applicable, and regular performance reporting.</p></div>`,
    },
    {
      id: "faq7",
      question: "How do I choose the best SEO company in India?",
      answer: `<div className="accordion-body"><p>Look for a proven track record, transparent reporting, ethical SEO practices, relevant industry experience, clear deliverables, and realistic expectations. Avoid agencies that guarantee a specific Google ranking.</p></div>`,
    },
    {
      id: "faq8",
      question: "Is SEO still relevant with the rise of AI search?",
      answer: `<div className="accordion-body"><p>Yes. Search engines and AI-powered search systems still depend on useful, trustworthy, well-structured web content. Good SEO can therefore support visibility in both traditional search results and AI-generated search experiences.</p></div>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    // <section className="faqsBg">
    //   <div className="containerFull">
    //     <h3 className="sub_heading fontWeight500 text-white fontHeading">
    //       Do You have Questions about Working with SEO Agency in India?{" "}
    //       <br className="d-none d-lg-block" /> We’ve got your answers.
    //     </h3>
    //     <div className="row mt-4">
    //       <div className="col-lg-6">
    //         <Accordion defaultActiveKey="0">
    //           {faqsDataLeft.map((items, i) => {
    //             return (
    //               <Accordion.Item className="rounded" key={i} eventKey={i}>
    //                 <Accordion.Header>{items.question}</Accordion.Header>
    //                 <Accordion.Body
    //                   className="text-white"
    //                   dangerouslySetInnerHTML={{ __html: items.answer }}
    //                 ></Accordion.Body>
    //               </Accordion.Item>
    //             );
    //           })}
    //         </Accordion>
    //       </div>
    //       <div className="col-lg-6">
    //         <Accordion defaultActiveKey="0">
    //           {faqsDataRight.map((items, i) => {
    //             return (
    //               <Accordion.Item className="rounded" key={i} eventKey={i}>
    //                 <Accordion.Header>{items.question}</Accordion.Header>
    //                 <Accordion.Body
    //                   className="text-white"
    //                   dangerouslySetInnerHTML={{ __html: items.answer }}
    //                 ></Accordion.Body>
    //               </Accordion.Item>
    //             );
    //           })}
    //         </Accordion>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="containerFull ">
        <h4 className="heading fontHeading mb-4 fontWeight600">Frequently Asked <span className="text_red"> Search Engine Optimization</span> Questions</h4>
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
                        }else{
                          setOpen(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open == i ? <i className="bi bi-dash-circle"></i>: <i className="bi bi-plus-circle"></i>}
                      </span>
                    </p>

                    <div
                      className={`customFaq_answer_main ${
                        open == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-3"
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
                  <div className="customFaq">
                    <p
                      className="  headerFaq fontWeight600"
                      onClick={() => {
                        if (open2 !== i) {
                          setOpen2(i);
                        }else{
                          setOpen2(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open2 == i ? <i className="bi bi-dash-circle"></i>: <i className="bi bi-plus-circle"></i>}
                      </span>
                    </p>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="m-3"
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
