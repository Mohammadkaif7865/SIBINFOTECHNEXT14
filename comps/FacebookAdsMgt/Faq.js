import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Maximize your brand's reach with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert Facebook Ads management services to
  <br className="d-none d-lg-block" />
  drive engagement, leads, and conversions.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is Facebook Ads?",
    answer: `<div className="accordion-body"><p>Facebook Ads is Meta's paid advertising platform that allows businesses to create targeted advertisements across Facebook and other Meta placements, including Instagram.</p></div>`,
  },
  {
    id: "faq2",
    question: "How do I run Facebook ads for my business?",
    answer: `<div className="accordion-body"><p>Start by defining your campaign objective and target audience, then create your ad creative, choose placements, set a budget and schedule, launch the campaign, and monitor performance.</p></div>`,
  },
  {
    id: "faq3",
    question: "How do I set up a Facebook ad campaign?",
    answer: `<div className="accordion-body"><p>Set up a campaign by selecting an objective, defining your target audience, choosing placements, setting the budget and schedule, uploading the creative, and adding a clear call to action.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Facebook Ads <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
