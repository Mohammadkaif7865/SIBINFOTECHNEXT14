import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";

const data = [
  {
    title: "Facebook Optimization",
    description:
      "Profile optimization, engaging post strategies, community building, and ad campaign support to grow your presence and connect with your audience.",
    icon: <FaFacebookF />,
  },
  {
    title: "Instagram Optimization",
    description:
      "Aesthetic profile enhancement, targeted hashtag strategies, Reels and Stories optimization, and creative content planning for higher engagement.",
    icon: <FaInstagram />,
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Professional branding, content sharing, B2B networking growth, and thought leadership positioning for businesses and professionals.",
    icon: <FaLinkedinIn />,
  },
  {
    title: "Twitter Optimization",
    description:
      "Real-time trend tracking, tweet optimization, hashtag strategy, and meaningful audience interactions to keep your brand relevant and visible.",
    icon: <FaTwitter />,
  },
  {
    title: "Pinterest Optimization",
    description:
      "Visual content strategy, board management, pin optimization, and driving referral traffic to your website through compelling visuals.",
    icon: <FaPinterestP />,
  },
  {
    title: "YouTube Optimization",
    description:
      "Channel optimization, video SEO, audience engagement strategies, and content promotion to maximize video views and subscribers.",
    icon: <FaYoutube />,
  },
  {
    title: "TikTok Optimization",
    description:
      "Creative short-video strategies, participation in trending challenges, influencer collaborations, and organic growth through viral content.",
    icon: <FaTiktok />,
  },
  {
    title: "Google My Business (GMB)",
    description:
      "Complete profile optimization, regular updates, post publishing, review management, and local SEO strategies to boost your local visibility.",
    icon: <FaGoogle />,
  },
];

const SmowebServices = () => {
  return (
    <section className="web_services">
      <div className="containerFull">
        <div className="">
          <h4 className="text-center large_heading2 text-white">
            Social Media Platforms We Optimize
          </h4>
          <p className="mt-4 text-center col-lg-8 mx-auto text-white sec_description">
            We strategically optimize each social media platform to amplify your
            brand’s voice, visibility, and engagement for maximum impact.
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
                        style={{ fontSize: "50px", color: "red" }}
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

export default SmowebServices;
