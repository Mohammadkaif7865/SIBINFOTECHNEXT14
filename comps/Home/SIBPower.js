import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SIBPower = ({
  title,
  subtitle,
  description,
  title_right,
  description_right,
  data,
  batchtitle,
}) => {
  return (
    <section className="bg-black">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 pe-lg-0">
            {batchtitle && (
              <p className="text-white title fontWeight600">{batchtitle}</p>
            )}
            <h2 className="large_heading2 mt-4 fontWeight300 fontHeading2 text_red">
              {title} <br className="d-none d-lg-block" />
              <span className="fontWeight600">{subtitle}</span>
            </h2>
            <p className="mt-3 title text-white">{description}</p>
          </div>
          <div className="col-lg-8 ps-lg-5">
            <h2
              className="text-white sub_heading"
              dangerouslySetInnerHTML={{
                __html: title_right,
              }}
            ></h2>
            <p
              className="text-white mt-2"
              dangerouslySetInnerHTML={{
                __html: description_right,
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
                      <p className="fontHeading2 text_red title fontWeight600">
                        {item.title}
                      </p>
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
