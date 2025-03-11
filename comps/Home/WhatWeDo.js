import Aos from "aos";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    category: "Get Ranked on Google",
    services: ["Search Engine Optimization", "Local SEO", "Ecommerce SEO"],
    image: "https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png",
  },
  {
    category: "Drive Instant Growth",
    services: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
    image: "https://groupfractal.com/wp-content/uploads/2023/12/ipad-store-stats.png",
  },
  {
    category: "Accelerate Digital Dominance",
    services: ["Website Design & Development", "Graphic Design", "Software Development"],
    image: "https://groupfractal.com/wp-content/uploads/2023/12/traffic-sources-design.png",
  },
  {
    category: "Build Trust & Credibility",
    services: ["Social Media Marketing", "Content Marketing", "Influencer Marketing"],
    image: "https://groupfractal.com/wp-content/uploads/2023/12/home-showing-1.png",
  },
];

const WhatWeDo = () => {
  const [visibleImage, setVisibleImage] = useState(services[0].image);
  const elementsRef = useRef([]);

  useEffect(() => {
    Aos.init();

    const handleScroll = () => {
      elementsRef.current.forEach(({ section, list, index }) => {
        if (!section || !list) return;

        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 250) {
          list.classList.add("height300px");
        } else {
          list.classList.remove("height300px");
        }

        if (rect.top <= window.innerHeight * 0.5) {
          setVisibleImage(services[index].image);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="what-we-do">
      <div className="containerFull">
        <div className="row">
          {/* Left Section - Services */}
          <div className="col-lg-6">
            <header>
              <h4 className="large_heading2 fontHeading2 fontWeight700">What We Do</h4>
              <p className="mt-3 title">Digital Marketing Services</p>
            </header>

            <div className="services_main mt-5">
              <div className="services-container">
                {services.map((section, index) => (
                  <div
                    key={index}
                    ref={(el) => elementsRef.current[index] = { ...(elementsRef.current[index] || {}), section: el, index }}
                    className="service-section"
                  >
                    <h4 className="services-title fontHeading2 fontWeight600">{section.category}</h4>
                    <ul
                      ref={(el) => elementsRef.current[index] = { ...(elementsRef.current[index] || {}), list: el }}
                      className={`services-list item${index} ps-5 mt-4`}
                    >
                      {section.services.map((service, subIndex) => (
                        <li
                          key={subIndex}
                          className="service-item fontWeight500 title mt-2 aos-init"
                          aria-label={service}
                          data-aos="fade-right"
                          data-aos-delay={`${50 * subIndex}`}
                          data-aos-duration={`${1000 * subIndex}`}
                        >
                          <i className="fa-solid fa-circle-check me-2 text_light_blue"></i>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Dynamic Image */}
          <div className="col-lg-6 position-relative">
            <div className="what_we_do_img">
              <Image
                width={500}
                height={500}
                src={visibleImage}
                alt="Service Image"
                className="object-fit-contain mt-4 animated-fade-in"
                style={{ transition: "opacity 0.5s ease-in-out" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
