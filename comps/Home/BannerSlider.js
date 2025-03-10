"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

// import required modules
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
  return (
    <div className="banner_swiper_main">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={2300}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        parallax={true}
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        className="banner_swiper"
      >
        {/* <SwiperSlide>
          <div className="banner-slide slide-1" data-swiper-parallax="-100">
            <div className="containerFull">
              <div className="inner_slide">
                <div className="row ">
                  <div data-swiper-parallax="-200">
                    <h1 className="fontHeading2 banner-heading">
                      Guaranteed <br />
                      <span>Visibility</span>
                    </h1>

                    <p className="mt-4 banner_dis">
                      From SEO to Google Ads, We drive growth <br />
                      with data-driven strategies tailored to your business.
                    </p>

                    <div className="mt-5">
                      <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">Discover More</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="banner-slide slide-2" data-swiper-parallax="-100">
            <div className="containerFull">
              <div className="inner_slide w-100 ">
                <div className="row  w-100 pt-5">
                  <div data-swiper-parallax="-200" className="col-lg-6">
                    <h1 className="fontHeading2 banner-heading">
                      Guaranteed <br />
                      <span>Visibility</span>
                    </h1>
                    <p className="mt-4 banner_dis">
                      From SEO to Google Ads, We drive growth <br />
                      with data-driven strategies tailored to your business.
                    </p>
                    <div className="mt-5">
                      <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">Discover More</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="heading text-white fontHeading2">
                      We Deliver Growth
                    </h4>

                    <ul className="banner_ul_growth  mt-4">
                      <li><Image width="50" height="50" src="/assets/images/icons/banner/google-rank.png" alt=""/> Get Ranked on Google</li>
                      <li > <Image width="50" height="50" src="/assets/images/icons/banner/grow.png" alt=""/> Drive Instant Growth</li>
                      <li> <Image width="50" height="50" src="/assets/images/icons/banner/online-presence.png" alt=""/> Build a Strong Digital Presence</li>
                      <li> <Image width="50" height="50" src="/assets/images/icons/banner/dependability.png" alt=""/> Build Trust & Credibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
};

export default BannerSlider;
