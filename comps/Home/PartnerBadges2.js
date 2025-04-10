import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const partnerBadges = [
  {
    src: "/assets/images/bing-add-microsoft.png",
    alt: "Bing Add",
  },
  {
    src: "/assets/images/meta-business-partner-logo.png",
    alt: "Meta Business Partner",
  },
  {
    src: "/assets/images/shopify-partner-logo.png",
    alt: "Shopify Partner",
  },
];
const PartnerBadges = () => {
  return (
    <section className="homeBanner">
      <div className="containerFull">
        <div className="row align-items-lg-end">
          <div className="col-lg-9">
            <h4 class="title fontWeight600 text-white">Our Certifications</h4>
            <h3 class="heading mt-2 text-white fontWeight600">
              Certified Digital Marketing Experts, Trusted by Industry Leaders
            </h3>
            <p className="mt-3 text-white title">
              Recognized by industry leaders, our certifications reflect our
              commitment to excellence. We bring expertise, innovation, and a
              proven track record of digital marketing success. As certified
              digital marketing experts, we leverage exclusive insights,
              cutting-edge tools, and proven strategies to drive results for our
              clients.
            </p>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="googleParterLogoBox">
              <Image
                width={500}
                height={500}
                src="/assets/images/top-google-premium-partner-agencies-in-india.png"
                alt="Google Partner"
              />
            </div>
          </div>
        </div>
        <div className="bottomLogoCertificate">
          <div class="glossyBorder"></div>
          <div class="glossyBorder2"></div>
          <div class="glossyBorder3"></div>
          <div className="rightPartnerBadge">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              navigation={false}
              pagination={false}
              autoplay={{ delay: 3000 }}

              loop={`true`}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {partnerBadges.map((badge, index) => (
                <SwiperSlide key={index}>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100"
                        width={400}
                        height={400}
                        quality={100}
                        src={badge.src}
                        alt={badge.alt}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
