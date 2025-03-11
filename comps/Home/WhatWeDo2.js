"use client"; // Ensures this runs only on the client

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

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
    if (typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      elementsRef.current.forEach(({ section, list, index }) => {
        if (!section || !list) return;

        gsap.to(list, {
          height: "+=300px", // Increase height dynamically
          duration: 0.5,
          paused: true,
        });

        Observer.create({
          target: window,
          type: "wheel,touch,scroll",
          onChangeY: (self) => {
            if (section.getBoundingClientRect().top <= 150) {
              gsap.to(list, { height: "+=300px", duration: 0.5 });
            } else {
              gsap.to(list, { height: "auto", duration: 0.5 });
            }
          },
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          onEnter: () => setVisibleImage(services[index].image),
        });
      });
    });

    return () => ctx.revert();
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
                    ref={(el) => (elementsRef.current[index] = { ...(elementsRef.current[index] || {}), section: el, index })}
                    className="service-section"
                  >
                    <h4 className="services-title fontHeading2 fontWeight600">{section.category}</h4>
                    <ul
                      ref={(el) => (elementsRef.current[index] = { ...(elementsRef.current[index] || {}), list: el })}
                      className={`services-list item${index} ps-5 mt-4`}
                      style={{ overflow: "hidden", transition: "height 0.5s ease-in-out" }}
                    >
                      {section.services.map((service, subIndex) => (
                        <li
                          key={subIndex}
                          className="service-item fontWeight500 title mt-2"
                          aria-label={service}
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
