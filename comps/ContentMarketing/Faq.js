import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Build brand authority and drive organic growth with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert content marketing services to
  <br className="d-none d-lg-block" />
  attract, engage, and convert your target audience.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is content marketing?",
    answer: `<div className="accordion-body"><p>Content marketing is creating and distributing valuable, relevant content such as blogs, videos, guides, and resources to attract and engage a target audience and build trust over time.</p></div>`,
  },
  {
    id: "faq2",
    question: "Why is content marketing important for a business?",
    answer: `<div className="accordion-body"><p>Content marketing helps businesses build organic visibility, demonstrate expertise, answer customer questions, build trust, and support SEO and lead generation.</p></div>`,
  },
  {
    id: "faq3",
    question: "What is a content marketing agency?",
    answer: `<div className="accordion-body"><p>A content marketing agency plans, creates, and distributes content such as blogs, videos, social posts, and other resources to build brand awareness, improve visibility, and generate leads.</p></div>`,
  },
  {
    id: "faq4",
    question: "How does content marketing work?",
    answer: `<div className="accordion-body"><p>Content marketing works by identifying audience needs, creating useful content that addresses those needs, distributing it through relevant channels, and measuring performance to improve future content.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Content Marketing <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
