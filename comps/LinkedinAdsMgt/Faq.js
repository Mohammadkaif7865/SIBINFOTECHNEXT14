import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Reach professional audiences with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert LinkedIn Ads management services to
  <br className="d-none d-lg-block" />
  generate B2B leads and drive business growth.
`;

const faqsData = [
  {
    id: "faq1",
    question: "How much do LinkedIn ads cost?",
    answer: `<div className="accordion-body"><p>LinkedIn advertising costs vary based on the audience, campaign objective, competition, bidding strategy, and ad format. B2B campaigns can cost more because of LinkedIn's professional targeting options.</p></div>`,
  },
  {
    id: "faq2",
    question: "Are LinkedIn ads worth it for B2B businesses?",
    answer: `<div className="accordion-body"><p>LinkedIn Ads can be valuable for B2B businesses that need to reach specific professional audiences, industries, or job roles. Whether they are worthwhile depends on the value of the target customer and campaign performance.</p></div>`,
  },
  {
    id: "faq3",
    question: "How do I set up a LinkedIn ad campaign?",
    answer: `<div className="accordion-body"><p>Set up a LinkedIn campaign by choosing an objective, defining the target audience using professional criteria, selecting an ad format, setting a budget and schedule, creating the ad, and monitoring performance.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> LinkedIn Ads <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
