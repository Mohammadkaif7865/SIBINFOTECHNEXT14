import Aos from "aos";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    category: "Get Ranked on Google",
    services: ["Search Engine Optimization", "Local SEO", "Ecommerce SEO"],
    image:
      "https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png", // Replace with actual image paths
  },
  {
    category: "Drive Instant Growth",
    services: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
    image:
      "https://groupfractal.com/wp-content/uploads/2023/12/ipad-store-stats.png",
  },
  {
    category: "Accelerate Digital Dominance",
    services: [
      "Website Design & Development",
      "Graphic Design",
      "Software Development",
    ],
    image:
      "https://groupfractal.com/wp-content/uploads/2023/12/traffic-sources-design.png",
  },
  {
    category: "Build Trust & Credibility",
    services: [
      "Social Media Marketing",
      "Content Marketing",
      "Influencer Marketing",
    ],
    image:
      "https://groupfractal.com/wp-content/uploads/2023/12/home-showing-1.png",
  },
];

const WhatWeDo = () => {
  const [visibleImage, setVisibleImage] = useState(services[0].image);
  const sectionRefs = useRef([]);
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refreshHard();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setVisibleImage(services[index].image);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="what-we-do">
      <div className="containerFull">
        <div className="row">
          {/* Left Section - Services */}
          <div className="col-lg-6">
            <header>
              <h4 className="large_heading2 fontHeading2 fontWeight700">
                What We Do
              </h4>
              <p className="mt-3 title">Digital Marketing Services</p>
            </header>

            <div className="services_main mt-5">
              <div className="services-container">
                {services.map((section, index) => (
                  <section
                    key={index}
                    data-index={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="service-section mt-5 "
                  >
                    <h4 className="services-title heading fontHeading2 fontWeight600">
                      {section.category}
                    </h4>
                    <ul className="services-list ps-5 mt-4 ">
                      {section.services.map((service, subIndex) => (
                        <li
                          key={subIndex}
                          className="service-item fontWeight500 title mt-2 aos-init"
                          aria-label={service}
                          data-aos="fade-right"
                          data-aos-delay={`50*${subIndex}`}
                          data-aos-duration={`1000*${subIndex}`}
                        >
                          <i className="fa-solid fa-circle-check me-2 text_light_blue"></i>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 position-relative">
            <div className="what_we_do_img">
              {/* <h4 className="text-center fontHeading2 large_heading2 fontWeight700 power_sib ">
                Power of <br />
                SIB Infotech
              </h4> */}
              <Image
                width={500}
                height={500}
                src={visibleImage}
                alt="Service Image"
                className="object-fit-contain mt-4 animated-fade-in "
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
