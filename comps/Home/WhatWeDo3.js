"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function WhatWeDo3() {
  const viewPortRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // No default selected

  const contentData = [
    {
      title: "Get Ranked on Google",
      subList: ["Search Engine Optimization", "Local SEO", "Ecommerce SEO"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus mauris. Sed id vulputate urna. Proin ut sem posuere, sagittis leo a, fermentum metus. Phasellus sem nulla, condimentum et dui ut, porta pretium erat. Donec sapien urna, suscipit dapibus varius eget, tincidunt et felis.",
      image: "/assets/images/get-ranked.png",
    },
    {
      title: "Drive Instant Growth",
      subList: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
      description:
        "Morbi cursus purus varius fringilla efficitur. Praesent ut erat sed lacus placerat posuere. In hac habitasse platea dictumst. Vivamus blandit in ante nec gravida. Pellentesque ac mollis justo. Fusce euismod eleifend purus, quis feugiat dui bibendum vitae. Aliquam sed vulputate nibh.",
      image: "/assets/images/instant-growth.png",
    },
    {
      title: "Accelerate Digital Dominance",
      subList: [
        "Website Design & Development",
        "Graphic Design",
        "Software Development",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus mauris. Sed id vulputate urna. Proin ut sem posuere, sagittis leo a, fermentum metus. Phasellus sem nulla, condimentum et dui ut, porta pretium erat. Donec sapien urna, suscipit dapibus varius eget, tincidunt et felis.",
      image: "/assets/images/digital-domainiation.png",
    },
    {
      title: "Build Trust & Credibility",
      subList: [
        "Social Media Marketing",
        "Content Marketing",
        "Influencer Marketing",
      ],
      description:
        "Morbi cursus purus varius fringilla efficitur. Praesent ut erat sed lacus placerat posuere. In hac habitasse platea dictumst. Vivamus blandit in ante nec gravida. Pellentesque ac mollis justo. Fusce euismod eleifend purus, quis feugiat dui bibendum vitae. Aliquam sed vulputate nibh.",
      image: "/assets/images/trust-credibility.png",
    },
  ];

  return (
    <section id="viewPort" ref={viewPortRef}>
      <div className="containerFull">
        <h3 className="large_heading2 fontHeading2 text-center fontWeight700 text_red">
          What We Do
        </h3>
        <p className="mt-3 title text-center">
          Our Revenue Driven <strong>Digital Marketing Services</strong>
        </p>
        <div className="row mt-lg-5">
          <div className="col-lg-6">
            <div className="leftWhatMenu">
              <ul className="mt-0">
                {contentData.map((item, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <p>{item.title}</p>
                    {item.subList.length > 0 && (
                      <div className="getList">
                        {item.subList.map((subItem, subIdx) => (
                          <h5 key={subIdx}>{subItem}</h5>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rightWhat">
              <div className="itemMenu">
                {activeIndex === null ? (
                  // 🔥 Default image when nothing selected
                  <div className="text-center mt-lg-5 mt-4">
                    <div className="imgBox">
                      <Image
                        src="/assets/images/corporate-website-designing-company-in-mumbai.png"
                        width={500}
                        height={400}
                        className="imgSize object-fit-contain"
                        alt="default image"
                      />
                    </div>
                  </div>
                ) : (
                  // 👇 Show content when selected
                  <>
                    <p className="title fontWeight300">
                      {contentData[activeIndex].description}
                    </p>
                    <div className="text-center mt-lg-5 mt-4">
                      <div className="imgBox">
                        <Image
                          src={contentData[activeIndex].image}
                          width={400}
                          height={300}
                          className="imgSize object-fit-contain"
                          alt="content image"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
