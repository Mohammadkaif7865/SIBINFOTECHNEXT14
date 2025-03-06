"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

// import required modules
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";

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
        <SwiperSlide>
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
                      <a class="fancy" href="#">
                        <span class="top-key"></span>
                        <span class="text">Discover More</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-slide slide-2" data-swiper-parallax="-100">
            <div className="containerFull">
              <div className="inner_slide">
                <div className="row ">
                  <div data-swiper-parallax="-200">
                    <h1 className="fontHeading2 banner-heading">
                      We Deliver
                      <br />
                      <span>Growth</span>
                    </h1>
                    <p className="mt-4 banner_dis">
                      From SEO to Google Ads, We drive growth <br />
                      with data-driven strategies tailored to your business.
                    </p>
                    <div className="mt-5">
                      <a class="fancy" href="#">
                        <span class="top-key"></span>
                        <span class="text">Discover More</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                      </a>
                    </div>
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
