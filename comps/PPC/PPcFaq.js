import React from "react";
import Faq from "../Home/Faq";

// Data
const faqDiscription = `
  Whether you’re new to <strong>PPC advertising</strong> or want to scale your existing campaigns,our expert team  at 
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech</strong> helps you maximize your ad spend.
  
  Get in touch today for a <strong>free consultation</strong> —
  <br className="d-none d-lg-block" />
  and take the first step toward achieving your business goals.
`;


const faqsData = [
  {
    id: "faq1",
    question: "What is PPC management?",
    answer: `<div className="accordion-body"><p>PPC management involves planning, launching, monitoring, and optimizing paid advertising campaigns such as Google Ads and social media advertising to improve clicks, leads, sales, and return on ad spend.</p></div>`,
  },
  {
    id: "faq2",
    question: "What is included in PPC management services?",
    answer: `<div className="accordion-body"><p>PPC management services can include campaign strategy, keyword research, ad creation, audience targeting, bid and budget management, landing-page recommendations, conversion tracking, testing, and performance reporting.</p></div>`,
  },
  {
    id: "faq3",
    question: "How much does PPC management cost?",
    answer: `<div className="accordion-body"><p>PPC management fees vary by campaign size, platform, and scope. Agencies may charge a fixed monthly fee, a percentage of ad spend, or a combination.</p></div>`,
  },
];


const SMofaq = () => {
  return (
    <div className="bg-light ">
    <Faq
      title={`<span class="text-black">Frequently Asked</span> PPC <span class="text-black">Question?</span>`}
      description={faqDiscription}
      faqsData={faqsData}
    />
    </div>
  );
};

export default SMofaq;
