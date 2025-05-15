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
    id: "faq15",
    question: "What is PPC?  ",
    answer: `<div className="accordion-body"><p>Advertisers using the PPC model of online advertising pay a fee each time a click is made on their ad.  </p></div>`,
  },
  {
    id: "faq16",
    question: "How does PPC work?  ",
    answer: `<div className="accordion-body"><p>The process of PPC marketing is quite simple. In essence, you make an advertisement, decide on your targeting and budget, and then run it.  </p></div>`,
  },
  {
    id: "faq17",
    question: "What are the top PPC platforms?  ",
    answer: `<div className="accordion-body"><p>Top PPC platforms are: Google ads, Facebook ads, Instagram ads, Linked in ads, Twitter ads, Bing ads, Amazon ads.  </p></div>`,
  },
  {
    id: "faq18",
    question: "Is PPC cost-effective?  ",
    answer: `<div className="accordion-body"><p> PPC is a budget-friendly strategy when optimized properly since you only pay when someone clicks on your ad, bringing in potential customers. </p></div>`,
  },
  {
    id: "faq19",
    question: " How do I know if my PPC campaign is successful? ",
    answer: `<div className="accordion-body"><p>PPC success is tracked by key matrics : Click  Through Rate (CTR), Cost Per Click (CPC), Return On Ads spent (ROAS), Conversion Rate.  </p></div>`,
  },
  {
    id: "faq20",
    question: "How can I track my PPC campaign results? ",
    answer: `<div className="accordion-body"><p>We provide detailed reports with key performance metrics, insights, and recommendations.  </p></div>`,
  },
  {
    id: "faq21",
    question: "How long does it take to see results with PPC?  ",
    answer: `<div className="accordion-body"><p>PPC delivers instant traffic, but optimizing for conversions may take a few weeks. </p></div>`,
  },
  {
    id: "faq22",
    question: "Can I control my PPC spending?  ",
    answer: `<div className="accordion-body"><p>Yes! You can set daily or monthly budgets and adjust bids to manage your spending.  </p></div>`,
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
