import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaSearch, FaAd, FaChartLine, FaClipboardCheck } from "react-icons/fa";

const data = [
  {
    title: "Research & Strategy",
    description:
      "We start by conducting thorough research on your industry, competitors, and target audience to develop a custom PPC strategy. Our goal is to maximize your ad visibility and deliver the best return on investment.",
    icon: <FaSearch />,
  },
  {
    title: "Ad Creation",
    description:
      "Our team of copywriters and designers craft compelling ad copy and creatives that drive engagement and clicks. We ensure that your message resonates with your audience, whether it’s through text, display, or video ads.",
    icon: <FaAd />,
  },
  {
    title: "Campaign Optimization",
    description:
      "PPC campaigns require continuous optimization. We monitor campaign performance, adjust bids, and tweak ad copy and landing pages to improve click-through rates and lower your cost per acquisition.",
    icon: <FaChartLine />,
  },
  {
    title: "Conversion Tracking & Reporting",
    description:
      "We implement advanced conversion tracking tools to monitor every click, ensuring we measure the true impact of your PPC ads. You'll receive regular performance reports, keeping you informed on key metrics like clicks, conversions, and cost per conversion.",
    icon: <FaClipboardCheck />,
  },
];

const PPcWebservices = () => {
  return (
    <section className="web_services">
      <div className="containerFull">
        <div className="">
          <h4 className="text-center large_heading2 text-white">
            How We Manage Your PPC Campaigns
          </h4>
          <p className="mt-4 text-center col-lg-8 mx-auto text-white sec_description">
            From strategic planning to real-time optimization, we manage every
            aspect of your PPC campaigns to ensure maximum ROI. Our approach is
            data-driven, result-oriented, and tailored to put your business in
            front of the right audience at the right time.
          </p>
        </div>

        <div className="w-100 mt-5">
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            pagination={false}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {data.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`item_web_services item${i} px-4 py-5 bg-white`}
                  >
                    <div className="text-center">
                      <div
                        className="icon-container"
                        style={{ fontSize: "40px", color: "red" }}
                      >
                        {value.icon}
                      </div>
                    </div>
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

export default PPcWebservices;
