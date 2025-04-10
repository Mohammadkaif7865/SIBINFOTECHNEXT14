import React, { useState } from "react";

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState("0");

  // Data for industries
  const industries = [
    {
      title: "E-commerce & Retail ",
      img: "https://www.savit.in/assets/img/case-study/ecommerce.webp",
      description:
        "Helping apparel brands enhance their online presence, increase customer engagement, and drive sales through customized digital marketing strategies.",
    },
    {
      title: "Healthcare & Pharma ",
      img: "https://www.savit.in/assets/img/case-study/health-care.webp",
      description:
        "Savit Interactive supports B2B companies in generating quality leads and increasing brand visibility with customized digital solutions that foster long-term business growth.",
    },
    {
      title: "Finance & Banking",
      img: "/assets/images/instagram-ads-business-objective.png",
      description:
        "Revitalizing beauty brands by increasing customer loyalty, boosting social media engagement, and driving online sales through targeted digital campaigns.",
    },
    {
      title: "Education & E-learning",
      img: "https://www.savit.in/assets/img/case-study/education.webp",
      description:
        "Supporting healthcare and pharmaceutical brands in improving online engagement, patient education, and increasing patient inquiries with effective digital marketing.",
    },
    {
      title: "Beauty & Fashion",
      img: "https://www.savit.in/assets/img/case-study/fashion.webp",
      description:
        "Savit Interactive helps educational institutions attract students and boost enrollment with SEO-driven strategies and impactful digital marketing that enhances visibility and engagement.",
    },
    {
      title: "Real Estate ",
      img: "https://www.savit.in/assets/img/case-study/b2b.webp",
      description:
        "Optimizing eCommerce platforms by enhancing user experience, reducing cart abandonment, and driving sales with targeted SEO, PPC, and conversion-driven strategies.",
    },
  ];

  return (
    <section className="">
      <div className="container-fluid">
        <h4 class="large_heading2 fontWeight300 text-center fontHeading2 text_red">
          Industries <span class="fontWeight600">We Serve </span>
        </h4>
        <p className="text-center title mt-3">
          We provide <strong>website design solutions</strong> for diverse
          industries, including:{" "}
        </p>
        <div className="row mt-lg-5 mt-4">
          <div className="col-md-12 px-lg-1">
            <div className="casescard">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`casebocs ${activeIndex == index ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <img src={industry.img} alt={industry.title} />
                  <div className="case-discription">
                    <h3>{industry.title}</h3>
                    <p className="case-p">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
