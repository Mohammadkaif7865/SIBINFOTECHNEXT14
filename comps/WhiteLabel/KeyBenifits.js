import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const KeyBenifits = () => {
  const power_data = [
    {
      title: "Marketing Agencies",
      description: "Expand your service offerings without additional overhead.",
    },
    {
      title: "Web Design & Development Agencies",
      description: "Provide SEO & PPC services alongside website development.",
    },
    {
      title: "Consultants & Freelancers",
      description: "Offer full-fledged marketing solutions to your clients.",
    },
    {
      title: "Enterprises & Businesses",
      description: "Outsource digital marketing to focus on core operations.",
    },
  ];
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h4 className="large_heading2 fontWeight300 fontHeading text_red">
              Benefit from
              <br /> <span className="fontWeight600"> White Label</span>
            </h4>
            <p className="mt-3 title">
              When Trust, Transparency And Accountability Truly Matter To You,
              We Are Your Partner. When Trust, Transparency And Accountability
              Truly Matter To You, We Are Your Partner.
            </p>
          </div>
          <div className="col-lg-8 ps-5">
            {/* <h4 className="fontHeading heading fontWeight600">Who Can Digital Marketing?</h4> */}

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
                            src={`/assets/images/light-bulb.webp`}
                            alt=""
                          />
                        </div>
                        <h5 className="fontHeading small_heading fontWeight600 mt-4">
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

export default KeyBenifits;
