import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Grow your brand on Instagram with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert Instagram marketing and ads services to
  <br className="d-none d-lg-block" />
  build awareness, engagement, and conversions.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is Instagram marketing?",
    answer: `<div className="accordion-body"><p>Instagram marketing uses content such as posts, Stories, Reels, and paid advertising to build brand awareness, engage audiences, generate traffic, and support sales.</p></div>`,
  },
  {
    id: "faq2",
    question: "How do I do Instagram marketing for my business?",
    answer: `<div className="accordion-body"><p>Start with a clear audience and content strategy, create useful and engaging posts or Reels, maintain a consistent publishing schedule, interact with followers, and use paid campaigns when they support specific business goals.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Instagram Marketing <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
