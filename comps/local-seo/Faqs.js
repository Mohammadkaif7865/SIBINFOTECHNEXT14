import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faqs = () => {
const faqsData = [
  {
    id: "faq1",
    question: "What local SEO services does SIB Infotech offer in Mumbai?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech offers comprehensive local SEO services in Mumbai including Google Business Profile optimisation, local keyword targeting, citation building, review management strategy, local content creation, and Google Maps ranking improvement.
      </p>
      <p>
        Our local SEO specialists help Mumbai businesses appear in the top three results on Google Maps (the Local Pack) and rank prominently for "near me" searches in their specific area — whether Bandra, Andheri, Powai, or anywhere across the city.
      </p>
    </div>`,
  },
  {
    id: "faq2",
    question: "Why should I choose SIB Infotech as my local SEO specialist in Mumbai?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech is a Mumbai-based Google Premier Partner agency with 18+ years of digital marketing experience and 850+ clients served.
      </p>
      <p>
        Our local SEO team understands the Mumbai market — its neighbourhoods, competition, and search behaviour.
      </p>
      <p>
        We have helped restaurants, clinics, retail stores, service businesses, and educational institutes achieve top Google Maps rankings.
      </p>
      <p>
        With SIB Infotech, you get a local expert team, not a generic offshore service.
      </p>
    </div>`,
  },
  {
    id: "faq3",
    question: "How does SIB Infotech optimise a Google Business Profile for local SEO?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech's Google Business Profile optimisation includes:
      </p>
      <ul>
        <li>Verifying and claiming the listing</li>
        <li>Selecting the correct primary and secondary business categories</li>
        <li>Writing a keyword-rich business description</li>
        <li>Adding high-quality photos of your premises, products, and team</li>
        <li>Setting up the Q&A section</li>
        <li>Creating regular Google Posts for offers and updates</li>
        <li>Activating messaging</li>
        <li>Building a systematic review acquisition process</li>
      </ul>
      <p>
        All these actions signal trust and activity to Google, directly improving your local rankings.
      </p>
    </div>`,
  },
  {
    id: "faq4",
    question: "Which local businesses in Mumbai has SIB Infotech helped rank on Google Maps?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech has helped a wide range of Mumbai-based businesses achieve strong Google Maps rankings including dental clinics, law firms, real estate agencies, restaurants, coaching institutes, beauty salons, diagnostic labs, chartered accountancy firms, and home services companies.
      </p>
      <p>
        Our local SEO strategies are tailored to each business type, taking into account the specific keywords their customers search, the competition in their locality, and the most effective ways to earn genuine customer reviews.
      </p>
    </div>`,
  },
  {
    id: "faq5",
    question: "What is SIB Infotech's local SEO process for a new client?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech's local SEO onboarding process includes:
      </p>
      <ul>
        <li>Local SEO audit covering your Google Business Profile, website, existing citations, and competitor rankings</li>
        <li>Keyword research targeting high-intent "near me" and location-based search terms</li>
        <li>Google Business Profile optimisation</li>
        <li>On-page local SEO improvements to your website's service and location pages</li>
        <li>Citation building on authoritative Indian directories like Justdial, Sulekha, IndiaMart, and Yellow Pages</li>
        <li>Monthly reporting with ranking progress and profile performance data</li>
      </ul>
    </div>`,
  },
  {
    id: "faq6",
    question: "Does SIB Infotech also offer local SEO for businesses outside Mumbai?",
    answer: `<div className="accordion-body">
      <p>
        Yes. While SIB Infotech is headquartered in Mumbai, we provide local SEO services to businesses across India including Delhi, Bangalore, Pune, Hyderabad, Chennai, Kolkata, and other cities.
      </p>
      <p>
        We also serve Indian-origin businesses in the US, UK, Australia, and the UAE.
      </p>
      <p>
        Our team can target any city, neighbourhood, or service area with customised local keyword strategies and Google Business Profile management.
      </p>
    </div>`,
  },
  {
    id: "faq7",
    question: "How long does SIB Infotech take to improve local search rankings?",
    answer: `<div className="accordion-body">
      <p>
        SIB Infotech typically delivers measurable improvements in Google Business Profile performance (views, clicks, calls) within the first 30 to 60 days.
      </p>
      <p>
        Significant Google Maps ranking improvements for competitive local keywords generally take three to five months of consistent work.
      </p>
      <p>
        For less competitive niches or areas with fewer businesses, improvements can be visible even faster.
      </p>
      <p>
        We provide monthly reports so you can track progress clearly at every stage.
      </p>
    </div>`,
  },
  {
    id: "faq8",
    question: "Does SIB Infotech's local SEO service include review management?",
    answer: `<div className="accordion-body">
      <p>
        Yes. Review management is an integral part of SIB Infotech's local SEO service.
      </p>
      <p>
        We create a systematic process for requesting genuine reviews from happy customers, advise on best-practice response templates for both positive and negative reviews, and monitor your review profile across Google, Justdial, and other relevant platforms.
      </p>
      <p>
        Google's local algorithm strongly weights review quantity, recency, and quality — making this one of the highest-ROI activities in local SEO.
      </p>
    </div>`,
  }
];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };
  

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
      <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
    
    <section className="bgGrey">
      <div className="containerFull ">
        <h4 className="heading fontHeading text-center mb-4 fontWeight600">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        {/* faq */}

        <div className=" row  ">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq lseo">
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
                      {item.question}
                      <span>
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
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq lseo">
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
                      {item.question}
                      <span>
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
    </>

  );
};

export default Faqs;
