import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const SIBPower = () => {
  const power_data = [
    {
      title: "Generate High-Quality Leads & Sales",
      description:
        "Leverage data-driven strategies and advanced targeting to attract the right audience and convert prospects into loyal customers.",
    },
    {
      title: "Accelerate E-commerce Growth",
      description:
        "Maximize revenue with optimized product listings, AI-driven ad strategies, and seamless customer journeys designed for higher conversions and repeat sales.",
    },
    {
      title: "Enhance Website Performance & Visibility",
      description:
        "Optimize your website for speed, user experience, and SEO, ensuring higher search rankings and better customer engagement.",
    },
    {
      title: "Maximize Audience Engagement & Retention",
      description:
        "Capture attention with powerful storytelling, interactive campaigns, and AI-powered personalization to keep your audience coming back.",
    },
    {
      title: "Amplify Social Media Influence",
      description:
        "Build a thriving social media presence with data-backed content strategies, influencer collaborations, and targeted ads for greater reach and impact.",
    },
    {
      title: "Increase Brand Awareness & Authority",
      description:
        "Elevate your brand’s reputation with cutting-edge digital PR, high-quality content marketing, and strategic positioning that sets you apart from competitors.",
    },
    {
      title: "Leverage AI & Automation for Smarter Marketing",
      description:
        "Stay ahead with AI-powered chatbots, automated lead nurturing, and predictive analytics to optimize every touchpoint in the customer journey.",
    },
    {
      title: "Boost Conversion Rates with Performance Marketing",
      description:
        "Drive measurable results with highly optimized landing pages, CRO techniques, and A/B testing to ensure every click counts.",
    },
    {
      title: "Achieve Unmatched ROI with Data-Driven Decisions",
      description:
        "We track, analyze, and refine strategies in real time, ensuring your marketing budget delivers the highest possible returns.",
    },
  ];
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h4 className="large_heading2 fontWeight300 fontHeading2 text_red">
              The Power of <br />{" "}
              <span className="fontWeight600">SIB Infotech</span>
            </h4>
            <p className="mt-3 title">
              When Trust, Transparency And Accountability Truly Matter To You,
              We Are Your Partner. When Trust, Transparency And Accountability
              Truly Matter To You, We Are Your Partner.
            </p>
          </div>
          <div className="col-lg-8 ps-5">
            <p>
              When{" "}
              <strong>growth, innovation, and measurable results matter</strong>
              , we are the digital partner you can trust. At SIB Infotech, we go
              beyond marketing—we <strong>build strategies</strong> that drive
              success.
            </p>
            <div className=" mt-4 position-relative">
              <button class="power_prev">
                <i class="fa-solid fa-arrow-left-long"></i>
              </button>
              <Swiper
                spaceBetween={15}
                slidesPerView={2.2}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false}
                navigation={{
                  nextEl: ".power_next",
                  prevEl: ".power_prev",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {power_data.map((value, index) => {
                  return (
                    <SwiperSlide>
                      <div className="item_sib_power ">
                        <div className="icon mb-lg-3">
                          <Image
                            width={60}
                            height={60}
                            src={`/assets/images/icons/home/light-bulb.png`}
                            alt=""
                          />
                        </div>
                        <h5 className="fontHeading2 small_heading fontWeight600 mt-4">
                          {value.title}
                        </h5>
                        <p className="mt-3">{value.description}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button class="power_next">
                <i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIBPower;
