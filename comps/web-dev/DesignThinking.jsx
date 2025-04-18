import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DesignThinking = ({ data }) => {
  return (
    <section className="DesignThinking">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-5 text-white">
            <h4 className="heading">Invigorate Your Business DNA</h4>
            <h5 className="fontWeight600 mt-4">
              With Our Website Development & UX Designs
            </h5>
            <p className="mt-3 text-white">
              Our plan thinking and client focused experience drove plans help
              us in efficiently removing client's necessities, practices,
              emotions, and contemplations while connecting with items in a
              certifiable setting and causes us make believable advanced
              encounters to construct versatile and web applications, web-based
              interfaces, web based business stores and significantly more.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="w-100">
              <Swiper
                spaceBetween={20}
                slidesPerView={2.5}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false}
                loop={true}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {data.map((value, i) => {
                  return (
                    <SwiperSlide>
                      <div className="item_swiper_design_thinking">
                        <img className="" src={value.img} alt="" />
                        <div className="w-100  content">
                          <div className="inner">
                            <h5>{value.title}</h5>
                            <i class="fa-solid fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignThinking;
