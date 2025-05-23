import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const CaseStudy2 = ({ description }) => {
  const caseStudies = [
    {
      title: "RNB Global University's",
      highlight: "Organic Traffic Boost via SEO",
      overview: `RNB Global University, a top institution offering diverse programs, aimed to enhance online visibility and attract more student inquiries. Our SEO strategy improved search ranking and organic traffic, positioning the university as a top choice for students. We also optimized content across key landing pages, boosting engagement and conversion rates.`,
      resulDes: `Through consistent SEO efforts, we achieved a 64% increase in organic traffic and 138% growth in new users within 12 months.`,
      results: [
        {
          title: "64% Increase in Organic Traffic ",
          value: "64%",
          note: "Increase in Organic Traffic",
        },
        {
          title: "138% Increase in New Users ",
          value: "138%",
          note: "Increase in New Users",
        },
      ],
      services: "Search Engine Optimization (SEO)",
      logo: "/assets/images/rnbgu-logo.svg",
      image: "/assets/images/rnb-laptop.png",
    },
    {
      title: "Crunky Funky’s E-commerce Success with",
      highlight: "Social Media & Paid Ads",
      overview: `Crunky Funky, a dynamic e-commerce brand, partnered with us to maximize revenue through social media marketing and paid advertising. Our strategic approach resulted in exceptional growth in both sales and audience engagement.`,
      resulDes: `Delivered 262 % return on ad spend through optimized campaigns in first six months.  Scaled Instagram following from scratch to 128K engaged users with strategic content and influencer collaborations in 12 months`,
      results: [
        {
          title: "262% ROAS",
          desc: "Delivered 262% return on ad spend through optimized campaigns. ",
          value: "128K",
          note: "Instagram engaged followers",
        },
        {
          title: "128K Instagram engaged followers",
          desc: "Optimized campaigns for maximum ROI.",
          value: "262%",
          note: "ROAS",
        },
      ],
      services: "Google Ads & Instagram Marketing ",
      logo: "/assets/images/crunky-funky-logo.png",
      image: "/assets/images/crunky-funky.png",
    },
    {
      title: "Archer Chess Academy’s Growth with",
      highlight: "Facebook Ads",
      overview: `Archer Chess Academy, a leading online chess training platform for kids, aimed to increase student enrollments while reducing advertising costs. Through a strategic Facebook Ads campaign, we successfully optimized lead generation and ad performance. `,
      resulDes: `Achieved 3.5X more high-intent leads and reduced ad spend by nearly 50%, all while improving ROI—within just 6 months through precision-targeted, data-driven campaigns. `,
      results: [
        {
          title: "355% Increase in Qualified Leads ",
          value: "355%",
          note: "Increase in Qualified Leads",
        },
        {
          title: "47% Reduction in Ad Costs ",
          value: "47%",
          note: "Reduction in Ad Costs",
        },
      ],
      services: "Facebook and Instagram Ads  ",
      logo: "/assets/images/archer-logo.png",
      image: "/assets/images/crunky-funky.png",
    },
    {
      title: "Kiana Skin Care’s Growth with",
      highlight: "Facebook Marketing",
      overview: `Kiana Skin Care, a premium skincare brand, partnered with us to expand its online presence and build a loyal community. Through a targeted Facebook marketing strategy, we successfully boosted brand awareness and engagement.`,
      resulDes: `Built a thriving skincare community of 115K+ in just 12 months. Doubled content engagement over the past year.  `,
      results: [
        {
          title: "115K+ Facebook Followers ",
          value: "115K",
          note: "Facebook Followers",
        },
        {
          title: "2OO% Increase in Saved Posts & Shares  ",
          value: "2OO%",
          note: "Increase in Saved Posts & Shares ",
        },
      ],
      services: "Facebook  Marketing ",
      logo: "/assets/images/kiana-logo.png",
      image: "/assets/images/case-study/kiana-skin-beaty.png",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <p class="title fontWeight600">Case Studies</p>
            <h3 className="large_heading2 fontHeading2 mt-3  fontWeight300">
              Winning{" "}
              <span className="fontWeight600 text_red">
                Strategies & Tangible
              </span>{" "}
              Results
            </h3>
          </div>
          <div className="col-lg-2 ">
            <div className="text-lg-end d-none d-lg-block">
              <Link href="#" className="btnCase">
                Case Studies{" "}
              </Link>
            </div>
          </div>
        </div>
        <p className="title fontWeight300 mt-2">
          {description}

          {/* See how we’ve helped brands grow.{" "}
          <span className="fontWeight600">
            ! */}
          {/* </span> */}
        </p>
        <div className="text-lg-end d-lg-none  mt-4">
          <Link href="#" className="btnCase">
            Case Studies{" "}
          </Link>
        </div>
        <div className="mt-4">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".casestudy_next",
              prevEl: ".casestudy_prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="case-study-swiper"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="caseStudyBox shadow">
                  <div className="row">
                    <div className="col-lg-8 col-12  order-2 order-lg-1">
                      <div className="caseStudyLeft py-4 ps-4 pe-lg-5">
                        <p className="regular_heading fontWeight300">
                          {study.title}{" "}
                          <span className="fontWeight600 text_dark_blue">
                            {study.highlight}
                          </span>
                        </p>
                        <p className="small_heading fontWeight600 mt-4">
                          Overview
                        </p>
                        <p className="mt-2 title">{study.overview}</p>

                        <div className="row mt-3 align-items-center">
                          <div className="col-lg-6 col-12">
                            <p className="small_heading mb-2 fontWeight600">
                              Results Achieved
                            </p>

                            {study.results.map((result, idx) => (
                              <div key={idx}>
                                <p className="title text_red fontWeight600">
                                  {result.title}
                                </p>
                                {/* <p className="mt-2 fontSmall">{result.desc}</p> */}
                              </div>
                            ))}
                            <p className="mt-2">{study.resulDes}</p>
                          </div>

                          <div className="col-lg-6 col-12">
                            <div className="boxCaseImg">
                              <div className="itemCaseStudyBox position-relative">
                                {study.results.map((result, idx) => (
                                  <div
                                    className={`text-center ${
                                      idx === 0
                                        ? "itemCaseStudyNumber"
                                        : "itemCaseStudyNumber2"
                                    }`}
                                    key={idx}
                                  >
                                    <p className="regular_heading fontWeight600 text_dark_blue">
                                      {result.value}
                                    </p>
                                    <p>
                                      {result.note
                                        .split(" ")
                                        .slice(0, 3)
                                        .join(" ")}{" "}
                                      <br className="d-none d-lg-block" />
                                      {result.note
                                        .split(" ")
                                        .slice(3)
                                        .join(" ")}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12 order-1 order-lg-2">
                      <div className="caseStudyRight position-relative p-3 pt-0">
                        <div className="topRightCase d-flex justify-content-lg-between">
                          <div className="dottedImg"></div>
                          <div className="caseStudyLogo mt-3  me-0 ms-auto me-lg-0">
                            <Image
                              width={150}
                              height={90}
                              quality={100}
                              src={study.logo}
                              alt="Case Study"
                            />
                          </div>
                        </div>
                        <div className="caseStudyBottom mt-5">
                          <Link href="#">Services</Link>
                          <p className="fontWeight500">{study.services}</p>
                        </div>
                        <div className="caseStudyImgWeb ">
                          <Image
                            width={750}
                            height={300}
                            quality={100}
                            src={study.image}
                            alt="Case Study"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy2;
