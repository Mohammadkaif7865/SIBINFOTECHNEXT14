import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const PartnerBadges = () => {
  return (
    <section className="trusted">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h4 className="large_heading2 fontHeading2 fontWeight300 text-white">
              Our{" "}
              <span className="fontWeight600">
                Certifications & Partner Badges
              </span>
            </h4>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <p>
              Proudly Recognized by industry leaders for our expertise and
              excellence as{" "}
              <strong>trusted & certified digital marketing experts</strong>
            </p>
            <div className="rightPartnerBadge mt-3">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                navigation={false}
                pagination={false}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Link
                        href="https://www.google.com/partners/agency?id=4328223643"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          className="w-100"
                          width={100}
                          height={100}
                          quality={100}
                          src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                          alt="Google Partner"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100"
                        width={100}
                        height={100}
                        quality={100}
                        alt="Meta Partner Company"
                        src="/assets/images/meta-partner.jpg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100"
                        width={100}
                        height={100}
                        quality={100}
                        alt="clutch Partner Company"
                        src="/assets/images/clutch.png"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100 h-auto"
                        width={100}
                        height={100}
                        quality={100}
                        alt="Shopify Partner Company"
                        src="/assets/images/shopify-partner.png"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100 h-auto"
                        width={100}
                        height={100}
                        quality={100}
                        alt="Trustpilot Partner Company"
                        src="/assets/images/trustpilot.jpg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100 h-auto"
                        width={100}
                        height={100}
                        quality={100}
                        alt="Google Analytics Partner Company"
                        src="/assets/images/google-analytics.jpg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideBox">
                    <div className="badgeBox">
                      <Image
                        className="w-100 h-auto"
                        width={100}
                        height={100}
                        quality={100}
                        alt="Bing Partner Company"
                        src="/assets/images/bing.png"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
