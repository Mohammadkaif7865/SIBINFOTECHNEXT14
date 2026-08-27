import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Build authority and trust for your website with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert off-page SEO services to improve
  <br className="d-none d-lg-block" />
  rankings, backlinks, and brand credibility.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is off-page SEO?",
    answer: `<div className="accordion-body"><p>Off-page SEO refers to activities performed outside your website to build authority and trust. It mainly involves earning quality backlinks, brand mentions, digital PR, and other external signals.</p></div>`,
  },
  {
    id: "faq2",
    question: "What is off-page SEO in digital marketing?",
    answer: `<div className="accordion-body"><p>In digital marketing, off-page SEO focuses on improving a website's authority and credibility through external signals such as quality backlinks, brand mentions, digital PR, and relevant online relationships.</p></div>`,
  },
  {
    id: "faq3",
    question: "How do I do off-page SEO?",
    answer: `<div className="accordion-body"><p>Off-page SEO can involve earning relevant backlinks, digital PR, industry outreach, useful partnerships, brand mentions, and local citations where appropriate.</p></div>`,
  },
  {
    id: "faq4",
    question: "What are off-page SEO techniques?",
    answer: `<div className="accordion-body"><p>Common off-page SEO techniques include link building, digital PR, brand mentions, industry outreach, local citations, and content promotion.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Off-Page SEO <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
