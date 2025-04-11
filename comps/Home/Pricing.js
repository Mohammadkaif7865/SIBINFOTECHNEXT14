import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const packages = [
  {
    title: "SEO  <br/> Packages",
    image: "/assets/images/pricing/seo-packeges.jpg",
    alt: "SEO Packages",
    features: ["On Page", "Off Page", "Technical", "Local SEO"],
    price: "$250",
  },
  {
    title: "PPC  <br/> Packages",
    image: "/assets/images/packeges/PPC-Package.jpg",
    alt: "PPC Packages",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
    price: "$300/Month",
  },
  {
    title: "Social Media  <br/> Packages",
    image: "/assets/images/packeges/Social-media-package.jpg",
    alt: "Social Media Packages",
    features: ["Facebook", "Instagram", "LinkedIn", "X (Twitter)"],
    price: "$225/Month",
  },
  {
    title: "Website Designing  <br/> Packages",
    image: "/assets/images/packeges/Website-designing-Package.jpg",
    alt: "Website Designing",
    features: ["Static", "Dynamic", "Ecommerce", "Custom coded"],
    price: "$250/Month",
  },
  {
    title: "Graphic Designing  <br/> Packages",
    image: "/assets/images/pricing/seo-packeges.jpg",
    alt: "Graphic Designing",
    features: ["Logos", "Stationery", "Motion Graphics"],
    price: "$175/Month",
  },
  {
    title: "Link Building <br/> Packages",
    image: "/assets/images/pricing/seo-packeges.jpg",
    alt: "Link Building",
    features: [
      "Guest Posting",
      "Article Submission",
      "Local Listings",
      "Press Release",
    ],
    price: "$175/Month",
  },
];

const Pricing = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
      
        <h4 class="title fontWeight600  text-center">Pricing Packages</h4>
        <h4 className="text-center mt-3 large_heading2 fontHeading2 fontWeight300 text_red">
          360° <span className="fontWeight600">Digital Marketing</span>{" "}
          Solutions
        </h4>
        <p className="mt-4 text-center title fontWeight500">
          Packages starting from <strong>$175</strong> only.
        </p>

        <div className="pricing_row position-relative">
          <button className="price_prev">
            <i className="fa-solid fa-angle-left"></i>
          </button>

          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={false}
            navigation={{ nextEl: ".price_next", prevEl: ".price_prev" }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {packages.map((pkg, idx) => (
              <SwiperSlide key={idx}>
                <div className="pricing_item_main">
                  <div className="pricing_item">
                    <h5
                      className="Pricing_title fontHeading2"
                      dangerouslySetInnerHTML={{ __html: pkg.title }}
                    ></h5>

                    <div className="mt-4">
                      <Image
                        className="w-100"
                        width={350}
                        height={150}
                        src={pkg.image}
                        alt={pkg.alt}
                      />
                    </div>

                    <div className="content mt-3">
                      <ul>
                        {pkg.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className=" mt-3 fontHeading2">
                      <h5 className="text-center fontWeight600">
                        Starts from:{" "}
                        <span className="text_red">{pkg.price}</span>
                      </h5>
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
            ))}
          </Swiper>

          <button className="price_next">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
