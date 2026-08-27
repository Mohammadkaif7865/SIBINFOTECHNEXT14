import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Amplify your brand's reach with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert influencer marketing services to
  <br className="d-none d-lg-block" />
  connect with the right audience and drive real engagement.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is influencer marketing?",
    answer: `<div className="accordion-body"><p>Influencer marketing involves partnering with individuals who have an engaged audience to promote a product, service, or brand and build awareness and trust with a relevant audience.</p></div>`,
  },
  {
    id: "faq2",
    question: "How much does influencer marketing cost?",
    answer: `<div className="accordion-body"><p>Influencer marketing costs vary based on the influencer's audience size, engagement, platform, content format, industry, and campaign requirements.</p></div>`,
  },
  {
    id: "faq3",
    question: "Is influencer marketing worth it for small businesses?",
    answer: `<div className="accordion-body"><p>Influencer marketing can work well for small businesses, particularly when working with relevant micro- or niche influencers whose audiences closely match the target customers.</p></div>`,
  },
  {
    id: "faq4",
    question: "Which platform is best for influencer marketing?",
    answer: `<div className="accordion-body"><p>The best platform depends on the target audience and product. Instagram and YouTube can work well for visual products, while other platforms may be more suitable for specific audiences or industries.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Influencer Marketing <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
