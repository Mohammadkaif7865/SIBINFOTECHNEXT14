import React, { useState } from "react";

const Solution = () => {
  const [indexNo, setIndexNo] = useState("0");

  const whiteLabelServices = [
    {
      title: "White Label SEO Services",
      description:
        "Boost your clients' search rankings with technical, on-page, and off-page SEO.  with technical, on-page, and ",
      img: "/assets/images/solution2.webp", // Replace with actual image URL
      keypoints: [
        "Keyword Research & Strategy",
        "On-Page & Technical SEO Optimization",
        "High-Quality Link Building",
        "Local SEO for Business Growth",
        "SEO Audits & Reporting",
      ],
    },
    {
      title: "White Label PPC Management",
      description:
        "Get high-performing pay-per-click (PPC) campaigns managed by experts.",
      img: "/assets/images/solution.webp", // Replace with actual image URL
      keypoints: [
        "Google Ads & Bing Ads Management",
        "Facebook & Instagram Paid Advertising",
        "Conversion Tracking & Landing Page Optimization",
        "A/B Testing for Maximum ROI",
        "Performance Reporting & Insights",
      ],
    },
    {
      title: "White Label SMO Marketing ",
      description:
        "Enhance brand engagement and visibility with customized social media strategies.",
      img: "/assets/images/solution2.webp", // Replace with actual image URL
      keypoints: [
        "Social Media Account Setup & Optimization",
        "Content Creation & Scheduling",
        "Paid Social Advertising",
        "Influencer & Community Management",
        "Social Media Analytics & Reporting",
      ],
    },
    {
      title: "White Label Facebook ads",
      description:
        "Enhance brand engagement and visibility with customized social media strategies.",
      img: "/assets/images/solution.webp", // Replace with actual image URL
      keypoints: [
        "Social Media Account Setup & Optimization",
        "Content Creation & Scheduling",
        "Paid Social Advertising",
        "Influencer & Community Management",
        "Social Media Analytics & Reporting",
      ],
    },
    {
      title: `White Label <br/> Google ads`,
      description:
        "Enhance brand engagement and visibility with customized social media strategies.",
      img: "/assets/images/solution2.webp", // Replace with actual image URL
      keypoints: [
        "Social Media Account Setup & Optimization",
        "Content Creation & Scheduling",
        "Paid Social Advertising",
        "Influencer & Community Management",
        "Social Media Analytics & Reporting",
      ],
    },
    {
      title: " White label link building",
      description:
        "Enhance brand engagement and visibility with customized social media strategies.",
      img: "/assets/images/solution.webp", // Replace with actual image URL
      keypoints: [
        "Social Media Account Setup & Optimization",
        "Content Creation & Scheduling",
        "Paid Social Advertising",
        "Influencer & Community Management",
        "Social Media Analytics & Reporting",
      ],
    },
  ];

  const handelIndex = (index) => {
    setIndexNo(index);
  };

  return (
    <section className="bg-black position-relative">
      <div className="containerFull">
        <div className="row text-white align-items-center">
          <div className="col-lg-9 ">
            <h4 className="fontHeading large_heading2 fontWeight600">
              Our White Label <br /> Digital Marketing Services
            </h4>
            <p className="mt-4">
              Powering Growth for Agencies, Resellers & Global Businesses with
              White-Label Expertise
            </p>
          </div>
          <div className="col-lg-3  ">
            <div className="d-flex justify-content-end">
              <a className="btnThemeRed px-5 fw-bold" href="#">
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0 position-relative">
            <div className=" img_solutions">
              <div className="img_solutions_inner">
                {whiteLabelServices.map((images, index) => {
                  return (
                    <img
                      className={`img-solution ${
                        indexNo == index ? "active" : ""
                      }`}
                      src={images?.img}
                      alt="images"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
            {whiteLabelServices.map((value, index) => {
              return (
                <div
                  className="service__item "
                  key={index}
                  onMouseOver={() => {
                    handelIndex(index);
                  }}
                >
                  <div className="service__number">
                    <span className="fontHeading">0 {index + 1}</span>
                  </div>
                  <div className="service__title-wrapper">
                    <h3
                      className="service__title fontHeading"
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    ></h3>
                  </div>
                  <div className="service__text">
                    <p>{value.description}</p>
                  </div>
                  <div className="service__link">
                    <p
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
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

export default Solution;
