import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Pricing = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <h4 className=" text-center large_heading2 fontHeading2 fontWeight300 text_red">
          360° <span className="fontWeight600">Digital Marketing</span>{" "}
          Solutions
        </h4>
        <p className="mt-4 text-center title">
          Packages starting from <strong>$175</strong> only.
        </p>
        <div className=" pricing_row position-relative">
          <button class="price_prev">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".price_next",
              prevEl: ".price_prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className=""
          >
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    SEO
                    <br /> Packages
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li>On Page</li>
                      <li>Off Page</li>
                      <li>Technical</li>
                      <li>Local SEO</li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5> <h5 className="text_red">$ 250</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    PPC <br /> Packages
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li> Google Ads </li>
                      <li>Facebook Ads</li>
                      <li>Instragm Ads</li>
                      <li>LinkedIn Ads</li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5>{" "}
                    <h5 className="text_red">$ 300/Month</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    Social Media <br /> Packages
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li>Facebook </li>
                      <li>Instagram </li>
                      <li>LinkedIn </li>
                      <li>X (Twitter)</li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5>{" "}
                    <h5 className="text_red">$ 225/Month</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    Website Designing Packages
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li>Static</li>
                      <li> Dynamic</li>
                      <li> Ecommerce</li>
                      <li>Custom coded</li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5>{" "}
                    <h5 className="text_red">$ 250/Month</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    Graphic Designing Packages
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li>Logos</li>
                      <li>Stationery </li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5>{" "}
                    <h5 className="text_red">$ 175 /Month</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="pricing_item_main">
                <div className="pricing_item">
                  <h5 className="Pricing_title fontHeading2">
                    Link Building
                    <br className="d-none d-lg-block" /> Packages{" "}
                  </h5>

                  <div className="mt-4">
                    <Image
                      className="w-100"
                      width={350}
                      height={150}
                      src="/assets/images/pricing/seo-packeges.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <ul>
                      <li>Guest Posting</li>
                      <li>Artcle Submission</li>
                      <li> Local Listings </li>
                      <li>Press Release </li>
                    </ul>
                  </div>
                  <div className="item_price_titile mt-3 fontHeading2">
                    <h5>Starts from: </h5>{" "}
                    <h5 className="text_red">$ 175/Month</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn enquire_pricing_btn shadow"
                      href="/contact-us"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button class="price_next">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
