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
  // {
  //   id: "faq23",
  //   question: "What are the benefits of SMO for SEO? ",
  //   answer: `<div className="accordion-body"><p>SMO can indirectly improve your SEO rankings by driving more traffic to your site, increasing social signals (likes, shares, comments), and enhancing your overall online visibility, which can have a positive impact on search engine rankings. </p></div>`,
  // },
  // {
  //   id: "faq24",
  //   question: "What is the cost of Social Media Optimization Services? ",
  //   answer: `<div className="accordion-body"><p>The cost of SMO services depends on factors such as the scope of work, number of platforms, and level of strategy required. We offer customized packages to suit different budgets and business goals. </p></div>`,
  // },
  // {
  //   id: "faq25",
  //   question: "What is the difference between SMO and SEO? ",
  //   answer: `<div className="accordion-body"><p>SEO is for search engines, while SMO enhances your visibility on social media platforms. </p></div>`,
  // },
  // {
  //   id: "faq26",
  //   question: "How soon can I see results",
  //   answer: `<div className="accordion-body"><p> Some results may appear in 4-6 weeks, but long-term growth is typically visible in 3-6 months. </p></div>`,
  // },
  // {
  //   id: "faq27",
  //   question: "Is content creation included? ",
  //   answer: `<div className="accordion-body"><p> Yes. We handle everything—from visuals to captions to publishing.</p></div>`,
  // },
  // {
  //   id: "faq28",
  //   question: "How does SMO help my business grow?",
  //   answer: `<div className="accordion-body"><p> By building brand awareness, trust, and driving high-intent traffic to your website. </p></div>`,
  // },
];


const SMofaq = () => {
  return (
    <div className="bg-light ">
    <Faq
      title={"Ready to Grow with PPC?  "}
      description={faqDiscription}
      faqsData={faqsData}
    />
    </div>
  );
};

export default SMofaq;
