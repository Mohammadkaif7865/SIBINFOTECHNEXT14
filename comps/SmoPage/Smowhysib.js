import React from "react";

const WhySIB = () => {
  const keyAdvantages = [
    {
      title: "Increased Brand Visibility ",
      description:
        "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple industries, helping them achieve higher visibility, engagement, and conversions.",
    },
    {
      title: "Stronger Audience Engagement ",
      description:
        "As a Google Premier Partner, we have access to exclusive tools, trends, and strategies that keep our clients ahead of the competition.",
    },
    {
      title: "Data-Driven Strategy ",
      description:
        "Unlike many agencies that use generic templates, we craft custom digital marketing solutions based on your industry, target audience, and unique business goals.",
    },
    {
      title: "Higher Website Traffic & Conversions ",
      description:
        "From SEO, PPC, and social media to branding, content marketing, and performance analytics—we offer comprehensive solutions under one roof.",
    },
    {
      title: "Build a Community & Loyal Following ",
      description:
        "Every decision we make is backed by data, ensuring maximum return on investment (ROI) through continuous monitoring, testing, and optimization.",
    },
    {
      title: "Cost-Effective Compared to Traditional Advertising ",
      description:
        "We seamlessly blend high-impact creative storytelling with conversion-driven marketing strategies, ensuring your brand not only attracts attention but also drives real business results.",
    },
    {
      title: "Transparent Reporting",
      description:
        "We believe in 100% transparency, providing detailed insights, analytics, and reports so you know exactly where your budget is going and what’s working.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team acts as an extension of your business, offering dedicated account managers and scalable solutions that grow with your evolving needs.",
    },
  ];

  const rightBoxContent = {
    heading: "What Sets Us Apart from Other SMO  in India?",
    description:
      "With a sea of Social Media Optimization in India, what makes SIB Infotech the preferred choice for brands looking to scale? We don’t just execute campaigns—we create impactful, data-driven strategies that drive measurable growth and long-term success.",
  };

  const leftBoxContent = {
    headingStart: "Why",
    headingHighlight: "SIB Infotech",
    subHeading: "Measurable Growth, Proven Results",
    cardTitle: "First Click to Final Conversion",
    cardDescription:
      "Powered by Social, Paid, Creative & Influencers — We Build Bold Brands, Drive Results, and Spark Meaningful Connections.",
    buttonText: "Get a Free Analysis",
  };

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          {/* LEFT BOX */}
          <div className="col-lg-4 mb-3 position-relative">
            <div className="why_left_item">
              <h4 className="fontHeading2 heading fontWeight300 text_red">
                {leftBoxContent.headingStart}{" "}
                <span className="fontWeight600">{leftBoxContent.headingHighlight}</span>
              </h4>
              <h5 className="mt-3 sub_heading fontHeading2 fontWeight600">
                {leftBoxContent.subHeading}
                <span className="text_red">.</span>
              </h5>
              <div className="why_left_card mt-4 text-center">
                <h4 className="fontHeading2 text-white fontWeight600">
                  {leftBoxContent.cardTitle}
                </h4>
                <p className="mt-3 text-white">{leftBoxContent.cardDescription}</p>
                <button className="p-2 mt-4 w-100 btnPrimary text-white">
                  {leftBoxContent.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="col-lg-8">
            <div className="rightWhyBlock">
              <div className="headerRightWhy py-lg-3 bgGrey">
                <h3 className="fontWeight600 text_red font ps-4">
                  {rightBoxContent.heading}
                </h3>
                <p className="mt-3 ps-4">{rightBoxContent.description}</p>
              </div>
              <div className="row mt-4">
                {keyAdvantages.map((value, index) => (
                  <div className="col-lg-6 mb-3 position-relative" key={index}>
                    <div className="item_why_sib hover h-100">
                      <div className="item_why_title align-items-center d-flex justify-content-between">
                        <h4 className="small_heading fontHeading2 fontWeight600">
                          {value.title}
                        </h4>
                        <h5 className="fontHeading2 fontWeight600">
                          {(index + 1).toString().padStart(2, "0")}
                        </h5>
                      </div>
                      <p className="mt-4">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhySIB;
