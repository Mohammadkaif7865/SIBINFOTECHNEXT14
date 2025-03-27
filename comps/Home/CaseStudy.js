import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const CaseStudy = () => {
  const caseStudies = [
    "Archer-Chess-Case-Study.jpg",
    "Case-Study-Final-Design.jpg",
    "Crunky-Funky-Case-Study.jpg",
    "Kiana-Skon-Case-Study.jpg",
  ];
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h4 className="large_heading2 fontHeading2 fontWeight300  fontHeading2 text_red">
              Client <span className="fontWeight600">Success Stories </span>
            </h4>
            <p className="title fontWeight600 mt-3">
              Our Results Speak for Themselves
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
            slidesPerView={1.5}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".casestudy_next",
              prevEl: ".casestudy_prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="case-study-swiper"
          >
            {caseStudies.map((value, index) => {
              return (
                <SwiperSlide className=" ">
                  <div className="item_case_study ">
                    <div className="row">
                      <div class="col-lg-6 item-case-study-left">
                        <div className="ps-2 pt-2">
                          <img
                            width={100}
                            src="/assets/images/success-story/crunky-frunky.png"
                            alt=""
                          />
                        </div>
                        <div className="middle-img">
                          <img
                            className=""
                            src="/assets/images/success-story/Crunky-Funky.png"
                            alt=""
                          />
                        </div>

                        <Link className="" href={"#"}>
                          Platform
                        </Link>
                      </div>
                      <div class="col-lg-6 p-2 ps-0 pe-2 item-case-study-right-main">
                        <div className="item-case-study-right ">
                          <h5 className="fontHeading2 small_heading fontWeight700">
                            Crunky Funky -{" "}
                            <span className="text_red">Ecommerce</span>
                          </h5>
                          <p className="mt-3">
                            From SEO to Google Ads, we drive growth with
                            data-driven strategies tailored to your business.
                          </p>

                          <div className="row  mt-3">
                            <div className="col-lg-6 ">
                              <div className="item_satates ">
                                <img
                                  className=""
                                  src="/assets/images/success-story/ROAs.svg"
                                  alt=""
                                />
                                <h4 className="fontHeading2">128K</h4>
                                <p>Instagram Followers</p>
                              </div>
                            </div>
                            <div className="col-lg-6 ">
                              <div className="item_satates">
                                <img
                                  src="/assets/images/success-story/ROAs.svg"
                                  alt=""
                                />
                                <h4>128K</h4>
                                <p>Instagram Followers</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Image className="w-100" width={780} height={450} src={`/assets/images/case-study/${value}`} alt="" /> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
