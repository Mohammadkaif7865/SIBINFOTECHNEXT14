import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Industries2 = ({ heading, subHeading, description1, description2 }) => {
  // const industries = [
  //   {
  //     title: "E-commerce &\n Retail",
  //     img: "https://www.savit.in/assets/img/case-study/ecommerce.webp",
  //     description:
  //       "As a leading e-commerce digital marketing agency, we help online stores boost visibility, increase conversions, and drive revenue through performance-driven SEO, PPC, and full-funnel strategies.",
  //   },
  //   {
  //     title: "Healthcare &\n Pharma",
  //     img: "https://www.savit.in/assets/img/case-study/health-care.webp",
  //     description:
  //       "As a trusted healthcare digital marketing agency, we specialize in website design, SEO, and PPC campaigns tailored for hospitals, clinics, and medical professionals to build credibility and attract more patients.",
  //   },
  //   {
  //     title: "Finance &\n Banking",
  //     img: "/assets/images/instagram-ads-business-objective.png",
  //     description:
  //       "As a finance digital marketing agency, we create secure and conversion-focused digital strategies to enhance online presence, generate qualified leads, and build trust for banks, NBFCs, and financial institutions.",
  //   },
  //   {
  //     title: "Education &\n E-learning",
  //     img: "https://www.savit.in/assets/img/case-study/education.webp",
  //     description:
  //       "As an education digital marketing agency, we partner with schools, colleges, edtech platforms, and coaching institutes to increase student enrollment through smart SEO, paid campaigns, and engaging content.",
  //   },
  //   {
  //     title: "Beauty &\n Fashion",
  //     img: "https://www.savit.in/assets/img/case-study/fashion.webp",
  //     description:
  //       "As a beauty and fashion digital marketing agency, we amplify your brand through compelling content, social media marketing, influencer collaborations, and e-commerce optimization to boost engagement and sales.",
  //   },
  //   {
  //     title: "Real Estate &\n Projects",
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //     description:
  //       "As a real estate digital marketing agency, we generate high-quality leads for property developers, builders, and agents with hyper-targeted campaigns, local SEO, and landing pages that convert.",
  //   },
  //   {
  //       img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Travel & Hospitality",
  //   description: "As a travel and hospitality digital marketing agency, we help hotels, travel companies, and tourism brands attract more bookings through personalized content, search optimization, and paid media strategies."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Legal & Consultancy",
  //   description: "As a legal digital marketing agency, we help law firms and consultancy agencies grow their client base with professional web design, local SEO, and lead generation through PPC and content strategies."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Home Services",
  //   description: "As a home services digital marketing agency, we drive consistent inquiries and bookings for plumbers, electricians, cleaning services, and more with local SEO and conversion-optimized websites."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "IT & Software",
  //   description: "As an IT digital marketing agency, we build thought leadership and generate quality leads for software companies, SaaS platforms, and IT consultants using inbound marketing and SEO-focused strategies."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Startups & Enterprises",
  //   description: "As a startup digital marketing agency, we empower early-stage ventures and established enterprises to scale rapidly through lean strategies, data-driven performance marketing, and brand-building efforts."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Telecommunication",
  //   description: "As a telecom digital marketing agency, we boost visibility and customer acquisition for telecom brands through omnichannel campaigns, paid ads, and performance analytics."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "NGO",
  //   description: "As an NGO digital marketing agency, we help non-profits raise awareness, increase donations, and engage communities through storytelling, SEO, and social media outreach."
  // },
  // {
  //     img: "https://www.savit.in/assets/img/case-study/b2b.webp",
  //   title: "Matrimony",
  //   description: "As a matrimony digital marketing agency, we drive user sign-ups and increase engagement through SEO, PPC, and conversion-focused platforms built for matchmaking and matrimony websites."
  // }
  // ];
  const industries = [
  {
    title: "E-commerce & Retail",
    img: "E-commerce-&-Retail.png",
    description:
      "As a leading e-commerce digital marketing agency, we help online stores boost visibility, increase conversions, and drive revenue through performance-driven SEO, PPC, and full-funnel strategies.",
  },
  {
    title: "Healthcare & Pharma",
    img: "Healthcare-&-Pharma.png",
    description:
      "As a trusted healthcare digital marketing agency, we specialize in website design, SEO, and PPC campaigns tailored for hospitals, clinics, and medical professionals to build credibility and attract more patients.",
  },
  {
    title: "Finance & Banking",
    img: "Finance-&-Banking.png",
    description:
      "As a finance digital marketing agency, we create secure and conversion-focused digital strategies to enhance online presence, generate qualified leads, and build trust for banks, NBFCs, and financial institutions.",
  },
  {
    title: "Education & E-learning",
    img: "Education-&-E-learning.png",
    description:
      "As an education digital marketing agency, we partner with schools, colleges, edtech platforms, and coaching institutes to increase student enrollment through smart SEO, paid campaigns, and engaging content.",
  },
  {
    title: "Beauty & Fashion",
    img: "Beauty-&-Fashion.png",
    description:
      "As a beauty and fashion digital marketing agency, we amplify your brand through compelling content, social media marketing, influencer collaborations, and e-commerce optimization to boost engagement and sales.",
  },
  {
    title: "Real Estate & Projects",
    img: "Real-Estate-&-Projects.png",
    description:
      "As a real estate digital marketing agency, we generate high-quality leads for property developers, builders, and agents with hyper-targeted campaigns, local SEO, and landing pages that convert.",
  },
  {
    title: "Travel & Hospitality",
    img: "Travel-&-Hospitality.png",
    description:
      "As a travel and hospitality digital marketing agency, we help hotels, travel companies, and tourism brands attract more bookings through personalized content, search optimization, and paid media strategies.",
  },
  {
    title: "Legal & Consultancy",
    img: "Legal-&-Consultancy.png",
    description:
      "As a legal digital marketing agency, we help law firms and consultancy agencies grow their client base with professional web design, local SEO, and lead generation through PPC and content strategies.",
  },
  {
    title: "Home Services",
    img: "Home-Services.png",
    description:
      "As a home services digital marketing agency, we drive consistent inquiries and bookings for plumbers, electricians, cleaning services, and more with local SEO and conversion-optimized websites.",
  },
  {
    title: "IT & Software",
    img: "IT-&-Software.png",
    description:
      "As an IT digital marketing agency, we build thought leadership and generate quality leads for software companies, SaaS platforms, and IT consultants using inbound marketing and SEO-focused strategies.",
  },
  {
    title: "Startups & Enterprises",
    img: "Startups-&-Enterprises.png",
    description:
      "As a startup digital marketing agency, we empower early-stage ventures and established enterprises to scale rapidly through lean strategies, data-driven performance marketing, and brand-building efforts.",
  },
  {
    title: "Telecommunication",
    img: "Telecommunication.png",
    description:
      "As a telecom digital marketing agency, we boost visibility and customer acquisition for telecom brands through omnichannel campaigns, paid ads, and performance analytics.",
  },
  {
    title: "NGO",
    img: "NGO.png",
    description:
      "As an NGO digital marketing agency, we help non-profits raise awareness, increase donations, and engage communities through storytelling, SEO, and social media outreach.",
  },
  {
    title: "Matrimony",
    img: "Matrimony.png",
    description:
      "As a matrimony digital marketing agency, we drive user sign-ups and increase engagement through SEO, PPC, and conversion-focused platforms built for matchmaking and matrimony websites.",
  }
];


  return (
    <section className="">
      <div className="containerFull">
        {heading && <p className="fontWeight600 title">{heading}</p>}

        {subHeading && (
          <h3 className="large_heading2 mt-4 fontWeight300 fontHeading2 text_red">
            {subHeading}
          </h3>
        )}

        {description1 && <p className="title mt-3">{description1}</p>}
        {description2 && <p className="title mt-3">{description2}</p>}

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 150000,
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
                          <img src={`/assets/images/industries/${item.img}`} alt={item.title} />
                        </div>

                        <p className="small_heading mt-3 fontWeight600">
                          {item.title.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flip-box-back">
                    <div className="inner">
                      <div className="innerServices bullet">
                        <p className="small_heading mt-3 text-white text-center fontWeight600">
                          {item.title}
                        </p>
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
