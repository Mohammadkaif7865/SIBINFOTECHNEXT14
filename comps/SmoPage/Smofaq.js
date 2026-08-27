import React from "react";
import Faq from "../Home/Faq";

// Data
const faqDiscription = `
  We as a full service leading <strong>Social Media Optimization</strong>,
  offer customized story-based
  <br className="d-none d-lg-block" />
  <strong>Social Media Optimization</strong> to build, promote & scale
  your brand so 
  <br className="d-none d-lg-block" />
  it can clearly & easily attract your ideal client
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is social media?",
    answer: `<div className="accordion-body"><p>Social media refers to online platforms where people and businesses create, share, and interact with content. Businesses use platforms such as Facebook, Instagram, LinkedIn, and X to build awareness and engage audiences.</p></div>`,
  },
  {
    id: "faq2",
    question: "What is social media marketing?",
    answer: `<div className="accordion-body"><p>Social media marketing involves using platforms such as Facebook, Instagram, and LinkedIn to promote a brand, engage audiences, build awareness, drive traffic, and generate leads or sales.</p></div>`,
  },
  {
    id: "faq3",
    question: "What is a social media manager?",
    answer: `<div className="accordion-body"><p>A social media manager plans, creates, schedules, publishes, and analyzes social media content. They may also manage audience engagement and paid social campaigns.</p></div>`,
  },
  {
    id: "faq4",
    question: "How do I do social media marketing for my business?",
    answer: `<div className="accordion-body"><p>Define your target audience, choose relevant platforms, create a content strategy, maintain a consistent publishing schedule, engage with followers, and use paid advertising when appropriate.</p></div>`,
  },
  {
    id: "faq5",
    question: "What does a social media marketing agency do?",
    answer: `<div className="accordion-body"><p>A social media marketing agency can plan content strategies, create social posts and creative assets, manage publishing, run paid campaigns, engage with audiences, and report on performance.</p></div>`,
  },
  {
    id: "faq6",
    question: "How much does social media marketing cost?",
    answer: `<div className="accordion-body"><p>Social media marketing costs vary based on the number of platforms, content volume, creative requirements, audience size, and whether paid advertising is included.</p></div>`,
  },
];


const SMofaq = () => {
  return (
    <div className="bg-light ">
    <Faq
      title={"FAQs about Our SMO Services  "}
      description={faqDiscription}
      faqsData={faqsData}
    />
    </div>
  );
};

export default SMofaq;
