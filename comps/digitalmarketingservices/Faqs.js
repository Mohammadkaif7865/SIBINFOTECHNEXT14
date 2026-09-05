import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  const faqsData = [
    {
      id: "faq1",
      question: "Why is SIB Infotech rated the best digital marketing company in India?",
      answer: `<div className="accordion-body"><p>SIB Infotech is recognized among the best digital marketing companies in India due to our 18+ years of continuous operating excellence, official Google Premier Partner status (placing us in the top 3% of agencies nationwide), and a proven record of ranking over 1,000 brands across 40+ countries. We engineer custom, data-backed customer acquisition funnels that prioritize measurable Return on Investment (ROI) and lower Customer Acquisition Costs (CAC) rather than vanity impressions.</p></div>`,
    },
    {
      id: "faq2",
      question: "What solutions do digital marketing firms in India provide for businesses?",
      answer: `<div className="accordion-body"><p>Full-service digital marketing firms in India provide comprehensive, end-to-end growth solutions including Search Engine Optimization (SEO & AI Search GEO), Pay-Per-Click advertising (Google Ads, Performance Max, Shopping), Social Media Marketing & Paid Social (Meta, LinkedIn, Instagram), Content Marketing & Authority Strategy, Conversion Rate Optimization (CRO), Lifecycle Email Automation, Programmatic Media Buying, and Online Reputation Management (ORM).</p></div>`,
    },
    {
      id: "faq3",
      question: "How much do digital marketing services cost in India?",
      answer: `<div className="accordion-body"><p>Digital marketing pricing in India varies based on campaign scope, channel complexity, target geography, and industry competition. Typically, monthly retainers for small businesses and local firms range from &#8377;25,000 to &#8377;60,000/month, growth-stage brands invest &#8377;75,000 to &#8377;2,00,000/month, and enterprise or multi-channel e-commerce campaigns are custom-quoted. SIB Infotech offers modular, scalable packages tailored to your budget with zero hidden fees.</p></div>`,
    },
    {
      id: "faq4",
      question: "How quickly can a digital marketing business in India expect tangible ROI?",
      answer: `<div className="accordion-body"><p>Timelines depend on the chosen marketing channels. Paid advertising (Google Ads, Meta Ads, LinkedIn Ads) can drive qualified leads and e-commerce transactions within 24 to 48 hours of campaign launch. Organic growth channels such as Search Engine Optimization (SEO) and Content Marketing build sustainable compounding momentum, typically delivering significant first-page ranking jumps and organic pipeline growth within 3 to 6 months.</p></div>`,
    },
    {
      id: "faq5",
      question: "How do you measure and report digital marketing campaign performance?",
      answer: `<div className="accordion-body"><p>At SIB Infotech, transparency is paramount. We provide clients with 24/7 access to live interactive reporting dashboards integrating Google Analytics 4 (GA4), Google Search Console, Google Ads, Meta Business Manager, and CRM pipelines. Every monthly performance review analyzes commercial metrics: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), organic pipeline value, conversion rates, and revenue attribution.</p></div>`,
    },
    {
      id: "faq6",
      question: "How does your digital marketing company handle AI search and Google AI Overviews?",
      answer: `<div className="accordion-body"><p>As search behavior shifts toward conversational AI, SIB Infotech employs proprietary Generative Engine Optimization (GEO) strategies. We structure your website content with semantic entity mapping, knowledge graph connections, and authoritative Q&A syntax so that leading AI models—including Google AI Overviews, SearchGPT, Perplexity, and Gemini—cite your brand as the definitive authority in your industry.</p></div>`,
    },
    {
      id: "faq7",
      question: "Do you provide local digital marketing services across Mumbai, Delhi, and other Indian cities?",
      answer: `<div className="accordion-body"><p>Yes. With corporate offices in Mumbai and New Delhi, we provide specialized hyper-local digital marketing and local SEO across the Mumbai Metropolitan Region (Andheri, BKC, Malad, Goregaon, Powai, Thane, Navi Mumbai), Delhi NCR (Gurgaon, Noida, South Delhi), Bangalore, Pune, Hyderabad, and Tier-2 emerging commercial hubs throughout India.</p></div>`,
    },
    {
      id: "faq8",
      question: "What makes a full-service digital marketing agency better than hiring separate vendors?",
      answer: `<div className="accordion-body"><p>Hiring separate vendors for SEO, PPC, and social media creates misaligned messaging, siloed data, and wasted marketing spend. A full-service digital marketing agency like SIB Infotech aligns all digital channels under a single cohesive growth strategy, sharing conversion data between paid and organic channels to compound your overall return on investment.</p></div>`,
    },
    {
      id: "faq9",
      question: "Are there long-term contracts or lock-in periods when working with SIB Infotech?",
      answer: `<div className="accordion-body"><p>No. We believe in earning our client partnerships through demonstrable results and continuous revenue growth, not restrictive multi-year lock-ins. We offer flexible, month-to-month and quarterly retainers with clear SLAs, allowing your business to adapt budgets as commercial requirements evolve.</p></div>`,
    },
    {
      id: "faq10",
      question: "How do I get started with SIB Infotech?",
      answer: `<div className="accordion-body"><p>Getting started is seamless. Contact our senior digital marketing consultants for a free, comprehensive digital marketing audit. We evaluate your current organic visibility, paid search efficiency, competitor landscape, and conversion funnels, delivering a customized strategic growth proposal within 48 hours.</p></div>`,
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
