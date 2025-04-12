import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = ({ title, description, faqData }) => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontWeight600 fontHeading2 text_red">
              {title}
            </h4>
          </div>
          <div className="col-lg-6 ps-3">
            <p
              className="title"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 pe-5">
            <div className="d-flex">
              <Image
                className="w-75 h-100 mx-auto"
                src="/assets/images/phone-seo-local-squares.png"
                width={500}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="brand_build">
              <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
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
