import Image from "next/image";
import React from "react";

const ItemInfographic = ({ src, alt, text }) => (
  <div className="itemInfographic shadow" data-aos="zoom-in">
    <div className="iconDigi py-0 h-auto">
      <Image
        width={500}
        height={500}
        className="w-100 h-auto"
        src={src}
        alt={alt}
      />
    </div>
    <p className="mt-2">{text}</p>
  </div>
);

const BestCompany = ({service}) => {
  const items = [
    {
      src: "/assets/images/icons/digital-marketing-copmany-in-mumbai.svg",
      alt: "Increase Brand Awareness",
      text: "Increase Brand Awareness",
    },
    {
      src: "/assets/images/icons/digital-marketing-company-in-delhi.svg",
      alt: "Increase Sales",
      text: "Increase Sales",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-india.svg",
      alt: "Increase customer Engagement",
      text: "Increase Customer Engagement",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-mumbai.svg",
      alt: "Maximize your ROI",
      text: "Maximize your ROI",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-md-5">
            <div className="rightSeoImgInner ps-lg-0">
              {items.map((item, index) => (
                <ItemInfographic key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            className="col-lg-7 mt-lg-0 mt-4"
            dangerouslySetInnerHTML={{ __html: service.section_1_description }}
          >
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCompany;
