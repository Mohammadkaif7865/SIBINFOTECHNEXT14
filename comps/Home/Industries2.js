import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Industries2 = ({ heading, subHeading, description1, description2 }) => {
  const industries = [
    {
      title: "E-commerce &\n Retail",
      img: "https://www.savit.in/assets/img/case-study/ecommerce.webp",
      description:
        "As a leading e-commerce digital marketing agency, we help online stores boost visibility, increase conversions, and drive revenue through performance-driven SEO, PPC, and full-funnel strategies.",
    },
    {
      title: "Healthcare &\n Pharma",
      img: "https://www.savit.in/assets/img/case-study/health-care.webp",
      description:
        "As a trusted healthcare digital marketing agency, we specialize in website design, SEO, and PPC campaigns tailored for hospitals, clinics, and medical professionals to build credibility and attract more patients.",
    },
    {
      title: "Finance &\n Banking",
      img: "/assets/images/instagram-ads-business-objective.png",
      description:
        "As a finance digital marketing agency, we create secure and conversion-focused digital strategies to enhance online presence, generate qualified leads, and build trust for banks, NBFCs, and financial institutions.",
    },
    {
      title: "Education &\n E-learning",
      img: "https://www.savit.in/assets/img/case-study/education.webp",
      description:
        "As an education digital marketing agency, we partner with schools, colleges, edtech platforms, and coaching institutes to increase student enrollment through smart SEO, paid campaigns, and engaging content.",
    },
    {
      title: "Beauty &\n Fashion",
      img: "https://www.savit.in/assets/img/case-study/fashion.webp",
      description:
        "As a beauty and fashion digital marketing agency, we amplify your brand through compelling content, social media marketing, influencer collaborations, and e-commerce optimization to boost engagement and sales.",
    },
    {
      title: "Real Estate &\n Projects",
      img: "https://www.savit.in/assets/img/case-study/b2b.webp",
      description:
        "As a real estate digital marketing agency, we generate high-quality leads for property developers, builders, and agents with hyper-targeted campaigns, local SEO, and landing pages that convert.",
    },
  ];

  return (
    <section className="">
      <div className="containerFull">
        {heading && <h5 className="fontWeight600">{heading}</h5>}

        {subHeading && (
          <h4 className="large_heading2 mt-4 fontWeight300 fontHeading2 text_red">
           
            {subHeading}
          </h4>
        )}

        {description1 && <p className="title mt-3">{description1}</p>}
        {description2 && <p className="title mt-3">{description2}</p>}

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
          loop={true}
          pagination={false}
          navigation={{
            nextEl: ".price_next",
            prevEl: ".price_prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="industrySwiper"
        >
          {industries.map((item, index) => (
            <SwiperSlide className="my-5" key={index}>
              <div className="itemSixStep">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <div className="innerServices">
                        <div className="industriesImg">
                          <img src={item.img} alt={item.title} />
                        </div>

                        <h4 className="small_heading mt-3 fontWeight600">
                          {item.title.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flip-box-back">
                    <div className="inner">
                      <div className="innerServices bullet">
                        <h4 className="small_heading mt-3 text-white text-center fontWeight600">
                          {item.title}
                        </h4>
                        <p className="mt-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries2;
