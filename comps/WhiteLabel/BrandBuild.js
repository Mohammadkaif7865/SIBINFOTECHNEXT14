import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = () => {
  const [activeKey, setActiveKey] = useState("0");
  const faqData = [
    {
      question: "Expand Your Service Offerings",
      answer:
        "Offer SEO, PPC, Social Media, and more without an in-house team.",
    },
    {
      question: "Save Time & Resources",
      answer: "Focus on scaling your business while we handle execution.",
    },
    {
      question: "Deliver More, Earn More",
      answer:
        "Increase your revenue potential without increasing operational costs.",
    },
    {
      question: "Maintain Full Control",
      answer:
        "Your clients see only your brand, while we do the heavy lifting.",
    },
    {
      question: "Access Industry Experts",
      answer:
        "Gain access to a highly skilled team without recruitment hassles.",
    },
    {
      question: "Achieve Faster Growth",
      answer:
        "Scale quickly with ready-to-go marketing solutions tailored to your agency's needs.",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5>The Reasons</h5>
            <h4 className="large_heading2 fontWeight600   text_red mt-3 fontWeight600">
              Why Choose Us
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
