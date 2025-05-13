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
        Capture high-intent traffic with precision-targeted Google Ads campaigns. From search to display and video ads, we optimize every click to drive more conversions, leads, and sales for your business. 

Target high-intent audiences with precision and maximize your ROI with our optimized Google Ads strategies. 
        </p>
         <p class="mt-3 title fontWeight500 mb-3">Meta & Instagram Ads 
        </p>
         <p class="mt-2">
         Engage your audience where they spend the most time. Our Meta and Instagram advertising strategies combine creative storytelling with smart targeting to boost brand awareness, drive traffic, and generate quality leads. 

Create engaging ad creatives that spark clicks, boost conversions, and build strong brand awareness across Meta and Instagram. 

        </p>

         <p class="mt-3 title fontWeight500 mb-3">Meta & Instagram Ads 
         LinkedIn Ads 
        </p>
         <p class="mt-2">
        Reach decision-makers and grow your brand with professional LinkedIn Ads. We craft tailored B2B campaigns that build trust, nurture relationships, and deliver high-value leads for businesses of all sizes. 
  Reach decision-makers, build professional trust, and grow your B2B pipeline with highly targeted LinkedIn advertising campaigns. 
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
        Build digital experiences that not only look great but also perform. From websites to software, we craft stunning, mobile-first assets that boost engagement, enhance brand value, and drive measurable results. 
        
        </p>
        <p class="mt-3 title fontWeight500 mb-3">Website Design & Development </p>
        <P>
       
        Fast, responsive, SEO-optimized websites built to engage users and convert traffic into leads. 

        </P>
        <p class="mt-3 title fontWeight500 mb-3">Graphic Design  </p>
        <P> 
Eye-catching, on-brand visuals that capture attention and leave a lasting impression across digital and print platforms. 
        </P>
        <p class="mt-3 title fontWeight500 mb-3">Software Development  </p>
        <P> 
Custom-built software solutions designed to automate workflows, improve efficiency, and support business growth.  
        </P>
      








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
             <p class="mt-2">Earn trust, spark conversations, and grow loyal communities with strategies that put people first. We help your brand connect authentically and drive long-term engagement.  </p> 

        <p class="mt-3 title fontWeight500 mb-3">Social Media Marketing </p>

             <p class="mt-2">Build a consistent brand presence with authentic storytelling, strategic content, and platform-specific campaigns. </p>
        <p class="mt-3 title fontWeight500 mb-3">Content Marketing  </p>

             <p class="mt-2">Create SEO-optimized content that informs, engages, and converts — turning visitors into loyal customers. </p>
        <p class="mt-3 title fontWeight500 mb-3">Influencer Marketing   </p>

             <p class="mt-2">Partner with credible voices to expand reach, build trust, and create meaningful brand impact. </p>

 
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

                    {/* <div className="text-center mt-lg-5 mt-4">
                      <div className="imgBox">
                        <Image
                          src={contentData[activeIndex].image}
                          width={400}
                          height={300}
                          className="imgSize object-fit-contain"
                          alt="content image"
                        />
                      </div>
                    </div> */}
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
