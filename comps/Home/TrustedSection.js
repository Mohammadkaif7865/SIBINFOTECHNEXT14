import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TrustedSection = () => {
  const stats = [
    {
      value: "20+",
      title: "Years in Business",
      
    },
    {
      value: "1,350+",
      title: "Projects delivered",
     
    },
    {
      value: "750+",
      title: "Active clients/users",
      
    },
    {
      value: "30+",
      title: "Team Members",
     
    },
    {
      value: "50%",
      title: "Less in Costs",
    
    },
    {
      value: "98%",
      title: "Customer Satisfaction Rate ",
      
    },
  ];
  return (
    <section className="trusted">
      <div className="containerFull">
        <div className="row align-items-lg-center">
          <div className="col-lg-7 pe-lg-5">
            <h2 className="fontHeading2 fontWeight300 heading ">
              We are as <span className="fontWeight600">STRONG</span>{" "}
              <br class="d-none d-lg-block" />
              as <span className="fontWeight600">YOU</span> Make us
            </h2>

            <p className="mt-4 title">
              <strong>
                Award Winning Performance Marketing Company in India
              </strong>{" "}
              that Designs, Develops & Delivers.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="rightAward">
              <p className="fontWeight300">
                We are a young creative{" "}
                <strong className="fontWeight600">
                  digital marketing agency
                </strong>{" "}
                &{" "}
                <strong className="fontWeight600">
                  web development company
                </strong>{" "}
                for any business - anywhere to promote their business online and
                engage users with brands and convert them to customers and
                experience an{" "}
                <strong className="fontWeight600">overall improvement</strong>{" "}
                in client base.
              </p>
              <p className="mt-2 fontWeight300">
                We understand that no two businesses can be the same and so is
                there website usage and therefore they will need a different{" "}
                <strong className="fontWeight600">
                  digital marketing solution
                </strong>
                . We do Your business in your way.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-lg-5 mt-4">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            breakpoints={{
          
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
   
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-5 trustSlider"
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <h4 className="fontHeading2 numberText">{stat.value}</h4>
                  <p>{stat.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
