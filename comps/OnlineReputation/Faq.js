import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Protect and improve your online reputation with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert ORM services to manage reviews,
  <br className="d-none d-lg-block" />
  monitor mentions, and build brand credibility.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is online reputation management?",
    answer: `<div className="accordion-body"><p>Online reputation management involves monitoring and improving how a business is perceived online through review management, search results, social mentions, customer feedback, and positive content.</p></div>`,
  },
  {
    id: "faq2",
    question: "How much does online reputation management cost?",
    answer: `<div className="accordion-body"><p>ORM costs vary based on the number of platforms monitored, review management requirements, content needs, brand size, and the level of ongoing support required.</p></div>`,
  },
  {
    id: "faq3",
    question: "How does online reputation management work?",
    answer: `<div className="accordion-body"><p>ORM works by monitoring brand mentions and reviews, responding professionally to feedback, encouraging genuine positive reviews, addressing customer concerns, and publishing useful authoritative content.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Online Reputation Management <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
