import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const WeStrong = () => {
  const stats = [
    { value: "20+", text: "Years in Business" },
    { value: "1,350+", text: "Projects delivered" },
    { value: "750+", text: "Active clients/users" },
    { value: "30+", text: "Team Members" },
  ];
  return (
    <section className="weStrong-bg trusted ">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontHeading2 fontWeight600 text-white">
              We are as STRONG <br /> as YOU Make us
            </h4>

            <p className="mt-4 w-75 text-white ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* <div className="mt-5">
              <a className="fancy2" href="#">
                <span className="top-key"></span>
                <span className="text">Discover More</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div> */}
          </div>
          <div className="col-lg-6">
            <div>
              <Swiper
                spaceBetween={0}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="info_slider pb-5"
              >
                {stats.map((stat, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-content ">
                      <h4 className="">{stat.value}</h4>
                      <p>{stat.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStrong;
