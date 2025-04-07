import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const CaseStudy2 = () => {
  const caseStudies = [
    {
      title: "RNB Global University's",
      highlight: "Organic Traffic Boost via SEO",
      overview: `RNB Global University, a top institution offering diverse programs, aimed to enhance online visibility and attract more student inquiries. Our SEO strategy improved search ranking and organic traffic, positioning the university as a top choice for students. We also optimized content across key landing pages, boosting engagement and conversion rates.`,
      results: [
        {
          title: "355% More Leads",
          desc: "Tripled qualified leads with data driven strategies",
          value: "355%",
          note: "Increase in quality Leads",
        },
        {
          title: "47% Lower Ad Costs",
          desc: "Optimized campaigns for maximum ROI.",
          value: "47%",
          note: "Reduction in ad Leads",
        },
      ],
      services: "Search Engine Optimization",
      logo: "/assets/images/rnbgu-logo.svg",
      image: "/assets/images/rnb-laptop.png",
    },
    {
      title: "RNB Global University's",
      highlight: "Organic Traffic Boost via SEO",
      overview: `RNB Global University, a top institution offering diverse programs, aimed to enhance online visibility and attract more student inquiries. Our SEO strategy improved search ranking and organic traffic, positioning the university as a top choice for students. We also optimized content across key landing pages, boosting engagement and conversion rates.`,
      results: [
        {
          title: "355% More Leads",
          desc: "Tripled qualified leads with data driven strategies",
          value: "355%",
          note: "Increase in quality Leads",
        },
        {
          title: "47% Lower Ad Costs",
          desc: "Optimized campaigns for maximum ROI.",
          value: "47%",
          note: "Reduction in ad Leads",
        },
      ],
      services: "Search Engine Optimization",
      logo: "/assets/images/rnbgu-logo.svg",
      image: "/assets/images/rnb-laptop.png",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h4 className="large_heading2 fontHeading2  fontWeight600  fontHeading2 text_red">
           <span className="fontWeight300">Winning</span> Strategies & Tangible Results
            </h4>
            <p className="title fontWeight600 mt-3">
            See how we’ve helped brands grow. Our results speak for themselves! 
            </p>
          </div>
          <div className="col-lg-5">
            <div className="text-lg-end">
              <Link href="#" className="btnCase">
                Case Studies{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5">
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
                    <div className="col-lg-8 col-12">
                      <div className="caseStudyLeft py-4 ps-4 pe-lg-5">
                        <h4 className="regular_heading fontWeight300">
                          {study.title}{" "}
                          <span className="fontWeight600 text_dark_blue">
                            {study.highlight}
                          </span>
                        </h4>
                        <h3 className="small_heading fontWeight600 mt-4">
                          Overview
                        </h3>
                        <p className="mt-3 title">{study.overview}</p>

                        <div className="row mt-3 align-items-center">
                          <div className="col-lg-6 col-12">
                            <h3 className="small_heading fontWeight600">
                              Results Achieved
                            </h3>

                            {study.results.map((result, idx) => (
                              <div key={idx}>
                                <h5 className="title mt-3 fontWeight600">
                                  {result.title}
                                </h5>
                                <p className="mt-2">{result.desc}</p>
                              </div>
                            ))}
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
                                    <h4 className="regular_heading fontWeight600 text_dark_blue">
                                      {result.value}
                                    </h4>
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

                    <div className="col-lg-4 col-12">
                      <div className="caseStudyRight position-relative p-3 pt-0">
                        <div className="topRightCase d-flex justify-content-lg-between">
                          <div className="dottedImg"></div>
                          <div className="caseStudyLogo mt-3">
                            <Image
                              width={150}
                              height={90}
                              quality={100}
                              src={study.logo}
                              alt="Case Study"
                            />
                          </div>
                        </div>
                        <div className="caseStudyBottom">
                          <Link href="#">Services</Link>
                          <p className="fontWeight500">{study.services}</p>
                        </div>
                        <div className="caseStudyImgWeb">
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
