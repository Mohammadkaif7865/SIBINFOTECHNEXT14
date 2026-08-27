import React from "react";
import Faq from "../Home/Faq";

const faqDiscription = `
  Optimize your website's on-page elements with
  <br className="d-none d-lg-block" />
  <strong>SIB Infotech's</strong> expert on-page SEO services to improve
  <br className="d-none d-lg-block" />
  rankings, traffic, and user experience.
`;

const faqsData = [
  {
    id: "faq1",
    question: "What is on-page SEO?",
    answer: `<div className="accordion-body"><p>On-page SEO is the practice of optimizing individual web pages, including content, titles, headings, images, and internal links, to improve search visibility and attract relevant organic traffic.</p></div>`,
  },
  {
    id: "faq2",
    question: "What is the difference between on-page and off-page SEO?",
    answer: `<div className="accordion-body"><p>On-page SEO focuses on elements within your own website, such as content, headings, tags, and internal links. Off-page SEO focuses on external signals, mainly quality backlinks, mentions, and other authority-building activities.</p></div>`,
  },
  {
    id: "faq3",
    question: "What does on-page SEO include?",
    answer: `<div className="accordion-body"><p>On-page SEO includes optimizing title tags, meta descriptions, headings, content, internal links, image alt text, URLs, and other page elements that help users and search engines understand the page.</p></div>`,
  },
  {
    id: "faq4",
    question: "How do I optimize on-page SEO?",
    answer: `<div className="accordion-body"><p>Optimize on-page SEO by using relevant keywords naturally, improving content quality and structure, optimizing titles and headings, adding useful internal links, optimizing images, and ensuring the page provides a good user experience.</p></div>`,
  },
];

const FaqSection = () => {
  return (
    <div className="bg-light">
      <Faq
        title={`<span class="text-black">Frequently Asked</span> On-Page SEO <span class="text-black">Questions?</span>`}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default FaqSection;
