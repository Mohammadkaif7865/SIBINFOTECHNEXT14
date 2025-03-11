"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  const sectionRefs = useRef([]);
  const listRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
          sectionRefs.current.forEach((section, index) => {
            const title = section.querySelector(".services-title");
            const list = listRefs.current[index];

            if (!title || !list) return;

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 200",
                toggleActions: "play none none reverse",
              },
            });

            // Title Animation
            tl.from(title, { opacity: 0, y: 50, duration: 0.5, ease: "power2.out" });

            // List Expand Animation
            tl.fromTo(
              list,
              { height: 0, opacity: 0 },
              { height: "300px", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
          });
        });

        return () => ctx.revert(); // Cleanup
      });
    });
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
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="service-section"
                  >
                    <h4 className="services-title fontHeading2 fontWeight600">{section.category}</h4>
                    <ul
                      ref={(el) => (listRefs.current[index] = el)}
                      className={`services-list item${index} ps-5 mt-4`}
                      style={{ height: "0px", overflow: "hidden" }}
                    >
                      {section.services.map((service, subIndex) => (
                        <li key={subIndex} className="service-item fontWeight500 title mt-2">
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
