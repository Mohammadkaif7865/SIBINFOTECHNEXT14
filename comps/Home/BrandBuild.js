import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = ({
  image,
  title,
  title2,
  description,
  faqData,
  subtitle,
}) => {
  const [activeKey, setActiveKey] = useState("");

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3
              className="heading fontWeight600 fontHeading2 text_red"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h3>

            <p
              className=" mt-4 sub_heading fontWeight500"
              dangerouslySetInnerHTML={{ __html: title2 }}
            ></p>
          </div>
          <div className="col-lg-6 ps-3">
            <h2
              className="fontWeight600 sub_heading"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></h2>

            <p
              className="title mt-3"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 pe-5">
            <div className="d-flex">
              <Image
                className="w-75 h-100 mx-auto"
                src={image}
                width={500}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="brand_build">
              <Accordion
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
              >
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header as="p">{faq.question}</Accordion.Header>
                    <Accordion.Body
                      className="ans_brand_build"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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
