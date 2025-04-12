import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SIBPower = ({ title, subtitle, description,description_right, data }) => {
  return (
    <section className="bg-black">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h4 className="large_heading2 fontWeight300 fontHeading2 text_red">
              {title} <br className="d-none d-lg-block" />
              <span className="fontWeight600">{subtitle}</span>
            </h4>
            <p className="mt-3 title text-white">{description}</p>
          </div>
          <div className="col-lg-8 ps-lg-5">
            <p
              className="text-white"
              dangerouslySetInnerHTML={{
                __html:description_right ,
              }}
            ></p>
            <div className="mt-4 position-relative">
              <button className="power_prev d-none d-lg-block">
                <i className="fa fa-chevron-left text-white"></i>
              </button>
              <Swiper
                spaceBetween={15}
                slidesPerView={2.2}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                }}
                pagination={false}
                navigation={{
                  nextEl: ".power_next",
                  prevEl: ".power_prev",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="item_sib_power">
                      <h5 className="fontHeading2 small_heading fontWeight600">
                        {item.title}
                      </h5>
                      <p className="mt-3">{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="power_next d-none d-lg-block">
                <i className="fa fa-chevron-right text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIBPower;
