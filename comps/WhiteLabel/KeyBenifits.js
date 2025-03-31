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
      category: "Marketing Agencies",
      description:
        "Struggling to meet increasing client demands? Expand your service portfolio with expert-backed SEO, PPC, and social media solutions—without hiring additional staff. Scale your agency with seamless white-label execution and let us do the heavy lifting.",
    },
    {
      category: "Web Design & Development Agencies",
      description:
        "Web design is just the beginning. Offer end-to-end digital solutions by adding SEO, PPC, and content marketing to your services. We work in the background while your brand takes the credit, helping you boost customer retention and increase revenue.",
    },
    {
      category: "Consultants & Freelancers",
      description:
        "Want to offer comprehensive digital marketing solutions but lack the time or resources? Our white-label services allow you to deliver expert-level SEO, PPC, and social media marketing under your own brand—without the need to build an in-house team.",
    },
    {
      category: "Enterprises & Businesses",
      description:
        "Focus on your core operations while we manage your digital marketing. Whether you're looking for lead generation, brand awareness, or online growth, our white-label solutions ensure expert strategy, execution, and optimization tailored to your business needs.",
    },
  ];

  return (
    <section className="bg-black ">
      <div className="containerFull">
        <div className="row ">
          <div className="col-lg-4">
            <h4 className="large_heading2 fontWeight300  text_red ">
              <span className="fontWeight600"> Who Can use </span>
            </h4>
            <h5 className="fontWeight600 sub_heading text-white ">
              White Label Marketing Services?{" "}
            </h5>
            <p className="mt-3 title text-white">
              Expand Your Agency’s Offerings Without Hiring an In-House Team.
              Outsource to India with our Premium White Label SEO, PPC & Social
              Media Services
            </p>

            <div className="mt-5">
              <a className="btnThemeRed px-5 fw-bold" href="#contact">
                Know More
              </a>
            </div>
          </div>
          <div className="col-lg-8 ps-5">
            {/* <h4 className=" heading fontWeight600">Who Can Digital Marketing?</h4> */}

            <p className="text-white">
              Looking to scale your business while reducing overhead costs? Our
              White Label SEO, PPC, and Social Media services help agencies,
              consultants, and businesses grow effortlessly. You get access to a
              skilled team working under your brand—so you can focus on business
              expansion, client relationships, and revenue generation.
              {/* With our white-label services, you can scale faster, serve more clients, and maximize profits—without the hassle of recruitment, training, or execution!  */}
            </p>

           
            <div className=" mt-4 position-relative">
              <button class="power_prev ">
                <i class="fa-solid fa-arrow-left-long text-white"></i>
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
                        {/* <div className="icon mb-lg-3">
                          <Image
                            width={60}
                            height={60}
                            src={`/assets/images/light-bulb.webp`}
                            alt=""
                          />
                        </div> */}
                        <h5 className=" fontWeight600">{value.category}</h5>
                        <p className="mt-3">{value.description}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button class="power_next">
                <i class="fa-solid fa-arrow-right-long  text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenifits;
