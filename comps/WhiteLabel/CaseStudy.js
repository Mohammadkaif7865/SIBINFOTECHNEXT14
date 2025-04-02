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
    "Archer-Chess-Academy.jpg",
    "Crunky-Funky's.jpg",
    "Kiana-Skin-Care’s-Growth.jpg",
    "RNB-Global-University.jpg",
  ];
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h4 className="large_heading2  fontWeight300   text_red">
              Client <span className="fontWeight600">Success Stories </span>
            </h4>
            <p className="title fontWeight600 mt-3">
              Our Results Speak for Themselves
            </p>
          </div>
          <div className="col-lg-5">
            <div className="text-lg-end">
              <Link href="#contact" className="btnCase btnThemeRed fw-bold">
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
        
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".casestudy_next",
              prevEl: ".casestudy_prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                navigation: false,
              },
              600: {
                slidesPerView: 1,
                navigation: false,
              },
              768: {
                slidesPerView: 1,
                navigation: false,
              },
              992: {
                slidesPerView: 1.5,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="case-study-swiper"
          >
            {caseStudies.map((value, index) => {
              return (
                // <SwiperSlide className=" ">
                //   <div className="item_case_study ">
                //     <div className="row">
                //       <div class="col-lg-6 item-case-study-left">
                //         <div className="ps-2 pt-2">
                //           <img
                //             width={100}
                //             src="/assets/images/success-story/crunky-frunky.png"
                //             alt=""
                //           />
                //         </div>
                //         <div className="middle-img mt-3">
                //           <img
                //             className=""
                //             src="/assets/images/success-story/Crunky-Funky3.png"
                //             alt=""
                //           />
                //         </div>

                //         <Link className="d-none mt-5  d-lg-inline-block" href={"#"}>
                //           Platform
                //         </Link>
                //       </div>
                //       <div class="col-lg-6 p-lg-2 ps-lg-0 pe-lg-2 item-case-study-right-main mt-3 mt-lg-0">
                //         <div className="item-case-study-right p-2 ms-0">
                //           <h5 className="fontHeading2 small_heading fontWeight700">
                //             Crunky Funky -{" "}
                //             <span className="text_red">Ecommerce</span>
                //           </h5>
                //           <p className="mt-3">
                //             From SEO to Google Ads, we drive growth with
                //             data-driven strategies tailored to your business.
                //           </p>
                //           <div className="d-lg-block d-none">
                //               <div className="row  mt-3">
                //             <div className="col-6 ">
                //               <div className="item_satates ">
                //                 <img
                //                   className=""
                //                   src="/assets/images/success-story/ROAs.svg"
                //                   alt=""
                //                 />
                //                 <h4 className="fontHeading2">128K</h4>
                //                 <p>Instagram Followers</p>
                //               </div>
                //             </div>
                //             <div className="col-6 ">
                //               <div className="item_satates">
                //                 <img
                //                   src="/assets/images/success-story/ROAs.svg"
                //                   alt=""
                //                 />
                //                 <h4>128K</h4>
                //                 <p>Instagram Followers</p>
                //               </div>
                //             </div>
                //           </div>
                //           </div>

                        
                //         </div>
                //       </div>
                //     </div>

                //     {/* <Image className="w-100" width={780} height={450} src={`/assets/images/case-study/${value}`} alt="" /> */}
                //   </div>
                // </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={`/assets/images/success-story/item/${value}`} alt="" />
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
