import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = () => {
  const [activeKey, setActiveKey] = useState("0");
  const faqData = [
    {
      question: "Expand Your Service Offerings",
      answer: "Offer a full suite of digital marketing services, including SEO, PPC, social media management, content marketing, and web design, without the need to hire an in-house team. This allows you to cater to a broader client base and remain competitive in the industry."
    },
    {
      question: "Save Time & Resources",
      answer: "Instead of spending time managing multiple marketing campaigns, you can focus on business growth and client relationships while our expert team handles all the execution, ensuring timely and effective results."
    },
    {
      question: "Deliver More, Earn More",
      answer: "With white-label services, you can take on more clients and offer additional services without increasing operational costs, allowing you to scale profitably while maintaining high-quality service delivery."
    },
    {
      question: "Maintain Full Control",
      answer: "Your brand remains at the forefront while we operate discreetly in the background. From strategy to execution, everything is done under your agency’s name, ensuring a seamless experience for your clients."
    },
    {
      question: "Access Industry Experts",
      answer: "Gain instant access to a highly skilled team of digital marketing professionals without the hassle of recruitment, training, or overhead costs. Our specialists bring years of experience in various marketing disciplines, ensuring top-notch execution."
    },
    {
      question: "Achieve Faster Growth",
      answer: "Scale your agency faster with ready-to-go, results-driven marketing solutions. With a dedicated team working for you, you can expand your client base, enhance your service offerings, and drive long-term business success."
    }
  ];
  
  
  

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontWeight600   text_red mt-3 fontWeight600">
              Why Use
            </h4>
            <h5 className="fontWeight600 mt-3 small_heading">
              A White Label Digital Marketing Agency in India
            </h5>
          </div>
          <div className="col-lg-6  ps-3">
            <p className="title">
              Growing your agency doesn’t have to mean hiring more staff or
              taking on additional overhead. With our white-label digital
              marketing services, you can expand your offerings, increase
              revenue, and scale effortlessly—without the complexities of
              in-house hiring.
              
               We work behind the scenes while your brand takes
              the spotlight, ensuring seamless execution and exceptional results
              for your clients.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 pe-5 order-lg-1 order-2 mt-lg-0 mt-5">
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
          <div className="col-lg-6 order-lg-2 order-1 ">
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
