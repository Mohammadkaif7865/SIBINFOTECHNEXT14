import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = () => {
  const [activeKey, setActiveKey] = useState("0");
  const faqData = [
    {
      question: "Strategic Vision",
      answer:
        "Every great campaign starts with a well-defined strategy. We analyze market trends, audience behavior, and competitive landscapes to create a roadmap for success.",
    },
    {
      question: "Creative Excellence",
      answer:
        "Stand out with compelling storytelling, visually stunning designs, and innovative campaigns that leave a lasting impression.",
    },
    {
      question: "Insight-Driven Research",
      answer:
        "We dive deep into data, uncovering key insights that shape smarter marketing decisions and maximize engagement.",
    },
    {
      question: "Brand Identity & Design",
      answer:
        "From logos to websites, we craft cohesive brand experiences that build trust and recognition.",
    },
    {
      question: "High-Impact Digital Marketing",
      answer:
        "SEO, paid advertising, and performance-driven campaigns that elevate visibility and turn clicks into conversions.",
    },
    {
      question: "Social & Content Strategy",
      answer:
        "Engaging, value-driven content that sparks conversations, fosters community, and strengthens brand loyalty.",
    },
    {
      question: "Performance & Analytics",
      answer:
        "Real-time tracking, A/B testing, and data analysis to optimize every touchpoint and maximize ROI.",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontWeight600  fontHeading2 text_red">
              Strategy. Creativity. Performance.
            </h4>
          </div>
          <div className="col-lg-6  ps-3">
            <p className="title">
              Success in the digital world isn’t just about being seen—it’s
              about making an impact. We blend{" "}
              <strong>strategy, creativity,</strong> and{" "}
              <strong>data-driven insights</strong> to craft campaigns that
              captivate audiences and drive
              <strong>real business growth.</strong>
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 pe-5">
            <div className="d-flex">
              <Image
                className="w-75 h-100 mx-auto"
                src="https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png"
                width={500}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            {/* <h4 className="brand_build_title fontWeight600  fontHeading2 text_red">
              Brand, Build, and Grow Your Business Today
            </h4> */}

            <div className=" brand_build">
              <Accordion
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
              >
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandBuild;
