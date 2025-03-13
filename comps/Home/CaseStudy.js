import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const CaseStudy = () => {
    const caseStudies = [
        "Archer-Chess-Case-Study.jpg",
        "Case-Study-Final-Design.jpg",
        "Crunky-Funky-Case-Study.jpg",
        "Kiana-Skon-Case-Study.jpg"
      ];
  return (
    <section>
      <div className="containerFull">
        <h4 className=" text-center large_heading2 fontHeading2 fontWeight600  fontHeading2 text_red">
        Success Story
        </h4>
        <div className="mt-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={1.5}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".casestudy_next",
              prevEl: ".casestudy_prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="case-study-swiper"
          >
            {caseStudies.map((value,index)=>{
                return(

            <SwiperSlide className=" ">
                <div className="item_case_study">
                    <Image className="w-100" width={780} height={450} src={`/assets/images/case-study/${value}`} alt="" />
                </div>
            </SwiperSlide>
                )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
