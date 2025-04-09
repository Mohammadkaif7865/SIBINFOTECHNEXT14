import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Industries = () => {
  // Data for industries
  const industries = [
    {
      title: "E-commerce &\n Retail ",
      img: "https://www.savit.in/assets/img/case-study/ecommerce.webp",
      description:
        "Helping apparel brands enhance their online presence, increase customer engagement, and drive sales through customized digital marketing strategies.",
    },
    {
      title: "Healthcare &\n Pharma ",
      img: "https://www.savit.in/assets/img/case-study/health-care.webp",
      description:
        "Savit Interactive supports B2B companies in generating quality leads and increasing brand visibility with customized digital solutions that foster long-term business growth.",
    },
    {
      title: "Finance &\n Banking",
      img: "/assets/images/instagram-ads-business-objective.png",
      description:
        "Revitalizing beauty brands by increasing customer loyalty, boosting social media engagement, and driving online sales through targeted digital campaigns.",
    },
    {
      title: "Education &\n E-learning",
      img: "https://www.savit.in/assets/img/case-study/education.webp",
      description:
        "Supporting healthcare and pharmaceutical brands in improving online engagement, patient education, and increasing patient inquiries with effective digital marketing.",
    },
    {
      title: "Beauty &\n Fashion",
      img: "https://www.savit.in/assets/img/case-study/fashion.webp",
      description:
        "Savit Interactive helps educational institutions attract students and boost enrollment with SEO-driven strategies and impactful digital marketing that enhances visibility and engagement.",
    },
    {
      title: "Real Estate &\n Projects ",
      img: "https://www.savit.in/assets/img/case-study/b2b.webp",
      description:
        "Optimizing eCommerce platforms by enhancing user experience, reducing cart abandonment, and driving sales with targeted SEO, PPC, and conversion-driven strategies.",
    },
  ];

  return (
    <section className="">
      <div className="containerFull">
        <h4 class="large_heading2 fontWeight300 fontHeading2 text_red">
          Industries <span class="fontWeight600">We Serve </span>
        </h4>
        <p className="title mt-3">
          We provide <strong>website design solutions</strong> for diverse
          industries, including:{" "}
        </p>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          loop={true}
          pagination={false}
          navigation={{
            nextEl: ".price_next",
            prevEl: ".price_prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="industrySwiper"
        >
          {industries.map((item, index) => (
            <SwiperSlide className="my-5" key={index}>
              <div className="itemSixStep">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <div className="innerServices">
                        <div className="industriesImg">
                          <img src={item.img} alt={item.title} />
                          {/* Or use <Image> if you're importing from Next and domain is whitelisted */}
                        </div>

                        {/* 🔥 Support dynamic line breaks with \n */}
                        <h4 className="small_heading mt-3 fontWeight600">
                          {item.title.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flip-box-back">
                    <div className="inner">
                      <div className="innerServices bullet">
                        <h4 className="small_heading mt-3 text-white text-center fontWeight600">
                          {item.title}
                        </h4>
                        <p className="mt-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries;
