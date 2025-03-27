import React from "react";

const WhySIB = () => {
  const keyAdvantages = [
    {
      title: "Proven Track Record ",
      description:
        "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple industries, helping them achieve higher visibility, engagement, and conversions.",
    },
    {
      title: "Google Premier Partner",
      description:
        "As a Google Premier Partner, we have access to exclusive tools, trends, and strategies that keep our clients ahead of the competition.",
    },
    {
      title: "Tailored Strategies",
      description:
        "Unlike many agencies that use generic templates, we craft custom digital marketing solutions based on your industry, target audience, and unique business goals.",
    },
    {
      title: " Digital Marketing Services",
      description:
        "From SEO, PPC, and social media to branding, content marketing, and performance analytics—we offer comprehensive solutions under one roof.",
    },
    {
      title: " ROI-Focused Approach",
      description:
        "Every decision we make is backed by data, ensuring maximum return on investment (ROI) through continuous monitoring, testing, and optimization.",
    },
    {
      title: "Creative Performance",
      description:
        "We seamlessly blend high-impact creative storytelling with conversion-driven marketing strategies, ensuring your brand not only attracts attention but also drives real business results.",
    },
    {
      title: "Transparent Reporting ",
      description:
        "We believe in 100% transparency, providing detailed insights, analytics, and reports so you know exactly where your budget is going and what’s working.",
    },
    {
      title: "Dedicated Support ",
      description:
        "Our team acts as an extension of your business, offering dedicated account managers and scalable solutions that grow with your evolving needs.",
    },
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          <div className="col-lg-4 mb-3  position-relative">
            <div className="why_left_item">
              <h4 className="fontHeading2 fontWeight300 text_red">
                Why <span className="fontWeight600">SIB Infotech</span>
              </h4>
              <h5 className=" mt-3 large_heading2 fontHeading2 fontWeight600">
                in a nutshell<span className="text_red">.</span>
              </h5>
              <div className="why_left_card mt-4 text-center">
                <h4 className="fontHeading2 text-white fontWeight600 ">
                  Seal the Sales Leak in Your Website Today!
                </h4>
                <p className="mt-3 text-white">
                  We're your one-stop shop for innovative digital marketing
                  strategies and creative web design-everything your business.
                  needs to succeed.
                </p>

                <button className="p-2 mt-4 w-100 btnPrimary text-white">
                  Get a Free Analysis
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="rightWhyBlock">
              <div className="headerRightWhy py-lg=3 bgGrey">
                <h5 className="fontWeight500 text_red regular_heading ps-4">
                  What Sets Us Apart from Other Digital Agencies in India?
                </h5>
                <p className="mt-3 ps-4">
                  With a sea of digital agencies in India, what makes SIB
                  Infotech the preferred choice for brands looking to scale? We
                  don’t just execute campaigns—we create impactful, data-driven
                  strategies that drive measurable growth and long-term success
                </p>
              </div>
              <div className="row mt-4">
                {keyAdvantages.map((value, index) => {
                  return (
                    <div
                      className="col-lg-6 mb-3 position-relative"
                      key={index}
                    >
                      <div className=" item_why_sib hover h-100 ">
                        <div className="item_why_title align-items-center">
                          <h4 className="small_heading fontHeading2 fontWeight600">
                            {value.title}
                          </h4>
                          <h5 className=" fontHeading2 fontWeight600">
                            0{index + 1}
                          </h5>
                        </div>
                        <p className="mt-4">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySIB;
