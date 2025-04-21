import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
  {
    title: "Custom Website Development",
    description:
      "From scratch, we craft websites that are tailored to your specific brand identity and business goals, ensuring a unique and impactful online presence.",
  },
  {
    title: "E-commerce Website Development",
    description:
      "Build robust and scalable online stores with platforms like Shopify, WooCommerce, Magento, or custom-built solutions. We focus on seamless shopping experiences and high conversion rates.",
  },
  {
    title: "CMS Website Development",
    description:
      "Easily manage your content with user-friendly platforms like WordPress, Joomla, and Drupal. Our CMS websites are flexible, scalable, and designed to grow with your business.",
  },
  {
    title: " Marketplace Development",
    description:
      "Create your own online marketplace with integrated features for buyers, sellers, and administrators. Our custom marketplace solutions offer seamless payment gateways, product management, and more.",
  },
  {
    title: " Web Application Development",
    description:
      "Develop feature-rich web applications for portals, CRMs, booking engines, and more. Our solutions are designed to meet the complex needs of businesses while offering a seamless user experience.",
  },
  {
    title: " Theme Development",
    description:
      "All the websites we build are 100% responsive and optimized for every screen size. Whether it’s mobile, tablet, or desktop, your website will deliver a flawless user experience.",
  },
  {
    title: " Plugin Development",
    description:
      "We create custom plugins to extend the functionality of your website, from e-commerce features to enhanced SEO. Stay updated, secure, and bug-free with our affordable AMC (Annual Maintenance Contracts).",
  },
  {
    title: " API Development & Integration Services",
    description:
      "Enhance your website by integrating with third-party tools like payment gateways, CRMs, logistics providers, and more. We ensure seamless communication between your website and external services.",
  },
  {
    title: " Website Redesign & Migration",
    description:
      "Revamp your old website to reflect modern design trends and better user experience. We also help with migrating your website to new platforms without losing SEO value or data integrity.",
  },
  {
    title: " Mobile App Development Services",
    description:
      "Extend your brand’s reach with custom mobile app development services. We build feature-rich, user-friendly mobile applications for both Android and iOS platforms, ensuring a seamless experience across all devices.",
  },
];

const WebServices = () => {
  return (
    <section className="bg-black web_services">
      <div className="containerFull">
        <div className="">
          <h4 className="text-center large_heading2 text-white ">
            Our Expert Web Development Services
          </h4>
          <p className="mt-4 text-center col-lg-8 mx-auto text-white sec_description ">
            We specialize in creating innovative, high-performance websites and
            web applications that drive business growth. Here’s how we can help:
          </p>
        </div>

        <div className="w-100">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((value, i) => {
              return (
                <SwiperSlide>
                  <div className={`item_wev_services item${i}`}>
                    <div>{/* <Image width={} src={``} alt="" /> */}</div>

                    <h4 className="mt-4 text-center">{value.title}</h4>
                    <p className="mt-3 text-center">{value.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WebServices;
