"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function WhatWeDo3() {
  const viewPortRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentData = [
    {
      title: "Get Ranked on Google",
      subList: ["Search Engine Optimization", "Local SEO", "Ecommerce SEO"],
      subTitle: "Smarter SEO for Higher Rankings & Real Results",
      description: `
          <p>Stay ahead of the competition with our data-driven SEO strategies designed to increase visibility, drive organic traffic, and grow your business. </p>
          <h5 class="mt-3">
          Search Engine Optimization 
          </h5>
          <p class="mt-2">
          Full-spectrum SEO focused on rankings, relevance, and revenue. 
          </p>
         <h5 class="mt-3">
          Local SEO 
          </h5>
          <p class="mt-2">
          Rank higher in local search and maps to attract nearby customers. 
          </p>
          <h5 class="mt-3">
           eCommerce SEO
          </h5>
           <p class="mt-2">Optimized product pages and technical SEO that boost online sales. </p>
`,
      image: "/assets/images/get-ranked.png",
    },
    {
      title: "Drive Instant Growth",
      subList: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
      subTitle: "High-Performance Ad Campaigns That Deliver Leads & Sales ",
      description: `<p> Launch result-driven ad campaigns across platforms to boost visibility and generate qualified leads from day one.</p>
        <h5 class="mt-3">Google Ads 
        </h5>
        <p class="mt-2">
        Target the right audience with precision and maximize your ROI.
        </p>
        <h5 class="mt-3">
        Meta & Instagram Ads 
        
        </h5>
        <p class="mt-2">
        Engaging creatives that drive clicks, conversions, and brand awareness. </p>        
  
          <h5 class="mt-3">LinkedIn Ads
          </h5>

          <p  class="mt-2">Connect with key decision-makers and grow your B2B pipeline 
          </p>
         `,
      image: "/assets/images/instant-growth.png",
    },
    {
      title: "Accelerate Digital Dominance",
      subList: [
        "Website Design & Development",
        "Graphic Design",
        "Software Development",
      ],
      subTitle: "Designs That Convert. Experiences That Matter",
      description: `<p>
        Create stunning digital assets that elevate your brand and drive user engagement across devices. 
        
        </p>
        <h5 class="mt-3">Website Design & Development </h5>
        <P>
        Fast, mobile-first websites designed to rank and convert. 
        
        </P>
        <h5 class="mt-3">Graphic Design </h5>

        <p class="mt-2">
         Creative visuals that leave a lasting impression. 
        </P>
        <h5 class="mt-3">Software Development </h5>
        <p class="mt-2"> 
       Custom solutions tailored to streamline your business operations. </p>
        `,
      image: "/assets/images/digital-domainiation.png",
    },
    {
      title: "Build Trust & Credibility",
      subList: [
        "Social Media Marketing",
        "Content Marketing",
        "Influencer Marketing",
      ],
      subTitle: "Human-Centered Marketing That Builds Lasting Connections ",
      description: `
             <p class="mt-2">Establish authority, boost engagement, and grow loyal communities around your brand. </p> 

        <h5 class="mt-3">Social Media Marketing </h5>

             <p class="mt-2">Authentic storytelling and strategy for consistent brand presence. </p>
        <h5 class="mt-3">
      Content Marketing 
      </h5>
             <p class="mt-2">

      SEO-rich content that educates, engages, and converts. 
      </p>
        <h5 class="mt-3">
      Influencer Marketing 
      </h5>
             <p class="mt-2">
      Leverage trusted voices to expand reach and build brand trust. 
      </p>

       
       `,
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
                        src="https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png"
                        width={600}
                        height={400}
                        className="imgSize object-fit-contain"
                        alt="default image"
                      />
                    </div>
                  </div>
                ) : (
                  // 👇 Show content when selected
                  <>
                    <h4 className="fontWeight600 small_heading">
                      {" "}
                      {contentData[activeIndex].subTitle}
                    </h4>
                    <div
                      className="title mt-3 fontWeight300"
                      dangerouslySetInnerHTML={{
                        __html: contentData[activeIndex].description,
                      }}
                    ></div>

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
