import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faq = () => {
  const faqsData = [
    {
      id: "faq15",
      question: "What digital marketing services do you offer?",
      answer: `<div className="accordion-body"><p>We provide a complete range of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing (SMM), Website Design & Development, Email Marketing, and 100% White Label Services for agencies and resellers.</p></div>`
    },
    {
      id: "faq16",
      question: "What makes SIB Infotech different from other digital agencies?",
      answer: `<div className="accordion-body"><p>With 19+ years of experience, a team of certified professionals, and a proven track record with over 7,000 clients worldwide, we deliver result-driven and cost-effective solutions tailored to your business goals.</p></div>`
    },
    {
      id: "faq17",
      question: "Why should I hire a digital marketing company?",
      answer: `<div className="accordion-body"><p>Hiring a digital marketing agency like SIB Infotech gives you access to industry experts, advanced tools, proven strategies, and scalable support—saving you time, reducing costs, and delivering faster results than building an in-house team.</p></div>`
    },
    {
      id: "faq18",
      question: "What tools do you use for digital marketing?",
      answer: `<div className="accordion-body"><p>We use industry-leading tools including Google Analytics, Google Ads, Semrush, Ahrefs, Screaming Frog, Meta Business Suite, Canva, Mailchimp, HubSpot, and various AI-powered platforms for data analysis and campaign optimization.</p></div>`
    },
    {
      id: "faq19",
      question: "How much do you charge for digital marketing services?",
      answer: `<div className="accordion-body"><p>Our pricing is flexible and customized based on your goals, project scope, and business needs. We offer up to 50% cost savings compared to international agencies—without compromising on quality or performance.</p></div>`
    },
    {
      id: "faq20",
      question: "How can I find the best digital marketing agency in India?",
      answer: `<div className="accordion-body"><p>Look for a digital marketing agency in India with a strong track record, verified client testimonials, industry certifications, and transparency in reporting. SIB Infotech stands out with 19+ years of experience and thousands of successful campaigns.</p></div>`
    },
    {
      id: "faq21",
      question: "Do you offer white label marketing services for other agencies?",
      answer: `<div className="accordion-body"><p>Yes! We’re a trusted white-label partner for agencies across the globe. Our white-label services include SEO, PPC, social media marketing, and more—completely branded under your agency’s name with NDA-backed confidentiality.</p></div>`
    },
    {
      id: "faq22",
      question: "How long does it take to see results?",
      answer: `<div className="accordion-body"><p>SEO usually takes 3–6 months to show strong organic growth, while paid advertising and social media campaigns can generate quicker results within days or weeks, depending on the strategy and budget.</p></div>`
    },
    {
      id: "faq23",
      question: "Is there a minimum contract duration?",
      answer: `<div className="accordion-body"><p>No. We offer flexible, no-lock-in monthly plans so you can scale up or pause services as your business evolves—no long-term commitments required.</p></div>`
    },
    {
      id: "faq24",
      question: "How do I get started with SIB Infotech?",
      answer: `<div className="accordion-body"><p>Getting started is simple—contact us for a free consultation. We'll assess your needs and craft a custom digital strategy that aligns with your goals.</p></div>`
    },
    {
      id: "faq25",
      question: "Do you work with clients outside of India?",
      answer: `<div className="accordion-body"><p>Yes, we work with clients globally including the USA, UK, Australia, Canada, and other countries. Our flexible processes and scalable services are designed for both local and international brands.</p></div>`
    },
    {
      id: "faq26",
      question: "How do you ensure data privacy and security?",
      answer: `<div className="accordion-body"><p>We follow strict data protection protocols and sign NDAs with all our white-label and direct clients. Your intellectual property and data are safe with us—confidentiality is our top priority.</p></div>`
    },
    {
      id: "faq27",
      question: "Can you guarantee results from digital marketing?",
      answer: `<div className="accordion-body"><p>While no agency can guarantee specific rankings or results, we use proven, data-driven strategies backed by 20+ years of experience to consistently deliver high-performance outcomes for our clients.</p></div>`
    },
    {
      id: "faq28",
      question: "How do you track and measure campaign success?",
      answer: `<div className="accordion-body"><p>We provide detailed performance reports using tools like Google Analytics, Google Search Console, Meta Insights, and custom dashboards. These reports cover traffic, conversions, rankings, ROI, and more—so you always know what’s working.</p></div>`
    },
    // {
    //   id: "faq30",
    //   question: "How can Stramasa, a leading digital agency, help me reach clients in New York City?",
    //   answer: `<div className="accordion-body"><p>Spotify offers audio, video, and display ads, all of which Stramasa can help create. Whether you want to run an audio-only ad or a mixed-format campaign, we will ensure your brand message resonates with your target audience.</p></div>`
    // }
  ];
  

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section>
      <div className="containerFull ">
        <h4 className="large_heading2 fontHeading2 text-center text_red fontWeight300">
        Frequently Asked <span className="fontWeight600">Digital Marketing Questions</span>
        </h4>
        <p className="mt-4 text-center title">
          We as a full service leading <strong>digital marketing firm</strong>,
          offers customized story-based
          <br className="d-none d-lg-block" />
          <strong>digital marketing services</strong> to build, promote & scale
          your brand so <br className="d-none d-lg-block" />
          it can clearly & easily attract your ideal clients.
        </p>
        {/* faq */}

        <div className="row  mt-lg-5 mt-4">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open !== i) {
                          setOpen(i);
                        } else {
                          setOpen(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" col-lg-6 ps-lg-4">
            {" "}
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open2 !== i) {
                          setOpen2(i);
                        } else {
                          setOpen2(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open2 == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="m-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
