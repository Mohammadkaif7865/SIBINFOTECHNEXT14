import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  const boxesData = [
    {
      src: "assets/images/icons/ecommerce-seo-company-in-india.svg",
      alt: "best-ecommerce-seo-company-in-india",
      title: "e-Commerce Keyword Research",
      content:
        "potential customers generally search for products using a few keywords. The search engine rankings greatly depend on keywords; integrating the website contents with proper keywords is known to be a great technique to ensure higher rankings. The keywords guarantee that the viewer gets what they have searched for if your website is well-fitted with trending keywords you are already a step ahead from your competitors.",
    },
    {
      src: "assets/images/icons/ecommerce-seo-company-mumbai.svg",
      alt: "ecommerce-seo-company-in-india",
      title: "Meta description, title tags, and H1s",
      content:
        "potential customers generally search for products using a few keywords. The search engine rankings greatly depend on keywords; integrating the website contents with proper keywords is known to be a great technique to ensure higher rankings. The keywords guarantee that the viewer gets what they have searched for if your website is well-fitted with trending keywords you are already a step ahead from your competitors.",
    },
    {
      src: "assets/images/icons/ecommerce-seo-company-delhi.svg",
      alt: "ecommerce-seo-company-in-delhi",
      title: "URLs",
      content:
        "potential customers generally search for products using a few keywords. The search engine rankings greatly depend on keywords; integrating the website contents with proper keywords is known to be a great technique to ensure higher rankings. The keywords guarantee that the viewer gets what they have searched for if your website is well-fitted with trending keywords you are already a step ahead from your competitors.",
    },
    {
      src: "assets/images/icons/ecommerce-seo-firm-in-india.svg",
      alt: "ecommerce-seo-firm-in-india",
      title: "Product and category descriptions",
      content:
        "potential customers generally search for products using a few keywords. The search engine rankings greatly depend on keywords; integrating the website contents with proper keywords is known to be a great technique to ensure higher rankings. The keywords guarantee that the viewer gets what they have searched for if your website is well-fitted with trending keywords you are already a step ahead from your competitors.",
    },
    {
      src: "assets/images/icons/ecommerce-seo-firm-in-mumbai.svg",
      alt: "ecommerce-seo-firm-in-mumbai",
      title: "Schema mark-ups",
      content:
        "the schema mark-ups are responsible to provide information to the searcher which could increase your CTR by 30%. The search engines use the schema information to understand the website content, it is used to identify the content of the page such as if it is a category page, products page, or blog post or something else. This info plays an important role in increasing the website’s ranking as search engines rank websites only if they understand what’s on it.",
    },
    {
      src: "assets/images/icons/ecommerce-seo-firm-delhi.svg",
      alt: "ecommerce-seo-firm-in-delhi",
      title: "Strategical internal linking",
      content:
        "internal links on your website drive customers to explore more of your products. These internal links should be relevant to the choices or pages the customer is browsing. Internal links help you to boost specific pages or products which also enhances the ranking of the products on the search engines.",
    },
  ];

  return (
    <>
      <section className="whatWeDo_main">
        <div className="containerFull">
          <p className="customText text-center">
            <b>
              E-Commerce optimization for your business website is crucial as it
              optimizes your page according to the needs of the audience,
              potential customers, and search engines. E-Commerce SEO optimizes
              several factors to ensure profitable results, such as -{" "}
            </b>
          </p>
          <div className="d-grid whatWeDo">
            {boxesData.map((box, index) => (
              <div key={index} className=" off-page-seo-box">
                <div className="">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <Image
                        width={50}
                        height={50}
                        quality={100}
                        src={box.src}
                        alt={box.alt}
                      />
                    </div>
                    <h4>{box.title}</h4>
                  </div>
                  <p className="customText">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
