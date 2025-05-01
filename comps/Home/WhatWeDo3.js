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
      subTitle: "Grow Organically with Our SEO Expertise",
      description: `
          <p>  Unlock higher rankings, more traffic, and better leads with our proven SEO
  services. Our smarter, AI-driven strategies are designed to boost your online
  visibility, attract qualified visitors, and accelerate your business growth,
  keeping you ahead of the competition.</p>
  <p class="mt-3 title fontWeight500 mb-3">Search Engine Optimization (SEO)</p>
<p>
  Increase your website’s visibility, authority, and revenue with our end-to-end
  SEO solutions. From technical SEO to high-authority backlinks, we help your
  business rank higher on Google and reach the audience that matters most.
</p>

<p class="mt-3 title fontWeight500 mb-3">Local SEO</p>
<p class="mt-2">
  Connect with customers in your area and dominate local search results. We
  optimize your Google Business Profile, local citations, hyperlocal content,
  and location-based keywords to drive foot traffic, build trust, and generate
  more local leads.
</p>

<p class="mt-3 title fontWeight500 mb-3">Ecommerce SEO</p>
<p class="mt-2">
  Maximize product visibility and drive more sales with targeted Ecommerce SEO
  strategies. We fine-tune your product listings, enhance technical SEO, and
  optimize conversion funnels to grow your online store and improve your bottom
  line.
</p>

`,
      image: "/assets/images/get-ranked-on-google.jpg",
    },
    {
      title: "Drive Instant Growth",
      subList: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
      subTitle: "High-Performance Ad Campaigns That Deliver Leads & Sales ",
      description: `<p> Launch result-driven ad campaigns across platforms to boost visibility and generate qualified leads from day one.</p>
        <p class="mt-3 title fontWeight500 mb-3">Google Ads 
        </p>
        <p class="mt-2">
        Target the right audience with precision and maximize your ROI.
        </p>
        <p class="mt-3 title fontWeight500 mb-3">
        Meta & Instagram Ads 
        
        </p>
        <p class="mt-2">
        Engaging creatives that drive clicks, conversions, and brand awareness. </p>        
  
          <p class="mt-3 title fontWeight500 mb-3">LinkedIn Ads
          </p>

          <p  class="mt-2">Connect with key decision-makers and grow your B2B pipeline 
          </p>
         `,
      image: "/assets/images/drive-instant-growth.jpg",
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
        <p class="mt-3 title fontWeight500 mb-3">Website Design & Development </p>
        <P>
        Fast, mobile-first websites designed to rank and convert. 
        
        </P>
        <p class="mt-3 title fontWeight500 mb-3">Graphic Design </p>

        <p class="mt-2">
         Creative visuals that leave a lasting impression. 
        </P>
        <p class="mt-3 title fontWeight500 mb-3">Software Development </p>
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

        <p class="mt-3 title fontWeight500 mb-3">Social Media Marketing </p>

             <p class="mt-2">Authentic storytelling and strategy for consistent brand presence. </p>
        <p class="mt-3 title fontWeight500 mb-3">
      Content Marketing 
      </p>
             <p class="mt-2">

      SEO-rich content that educates, engages, and converts. 
      </p>
        <p class="mt-3 title fontWeight500 mb-3">
      Influencer Marketing 
      </p>
             <p class="mt-2">
      Leverage trusted voices to expand reach and build brand trust. 
      </p>

       
       `,
      image: "/assets/images/trusted.jpeg",
    },
  ];

  return (
    <section id="viewPort" ref={viewPortRef}>
      <div className="containerFull">
        <p className="title text-center fontWeight700">What We Do</p>
        <h3 className="mt-3  large_heading2 fontHeading2 text-center fontWeight600 text_red">
          Our Revenue Driven <strong>Digital Marketing Services</strong>
        </h3>
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
                          <p key={subIdx}>{subItem}</p>
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
                        src="/assets/images/home-services.jpg"
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
                    <p className="fontWeight600 mt-0 small_heading">
                      {" "}
                      {contentData[activeIndex].subTitle}
                    </p>
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
