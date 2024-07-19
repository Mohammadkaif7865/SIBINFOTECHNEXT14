import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const OurClients = () => {
  return (
    <section data-aos="fade-up" className="overflow-hidden ">
      <h4 className="heading text-center fontWeight700 fontHeading2"><span className="text_red">Founders & Marketers</span>  Love Us</h4>
      <p className="text-center  title mt-2 fontWeight600 mt-3 fontHeading2 text-primary">
      Trusted by 50000+ Businesses across all over the world
      </p>
      <Swiper
        spaceBetween={30}
     loop={true}
     speed={2000}
     freeMode={true}
        slidesPerView={5}
        autoplay={{
          delay: 0,
         
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper   mt-3"
      >
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        <SwiperSlide className="client_item"><Image width={250} height={100} src={"/assets/images/canva.webp"} alt="shopify.png"/></SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default OurClients;
