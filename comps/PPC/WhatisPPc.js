import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatisPPc = () => {
  return (
    <>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftSeoCompany">
                <Image
                  className="w-100 h-auto"
                  width={500}
                  height={500}
                  quality={100}
                  src="/assets/images/seo-company.jpg"
                  alt="SEO Company"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rightSeoCompany">
                <h4 className="sub_heading fontHeading text_red" >
                What is Pay-Per-Click (PPC)? 
                </h4>
                <p className="mt-3">
               <strong>Pay-Per-Click (PPC)</strong>  is an online advertising model where an advertiser 

runs an ad and he will get charged a fee each time a user clicks on their ad. Essentially, it’s a way of buying targeted website traffic rather than earning it organically. PPC allows businesses to display their ads on search engines, social media platforms, and other websites. 
 The most popular form of PPC is <strong>search engine advertising</strong>, where advertisers bid for ad placement in a search engine’s sponsored links when users search for keywords related to their business. When managed properly, PPC can be a highly cost-effective way to generate leads, increase website traffic, and drive sales. 
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Highly Targeted Audience Reach 
                      </li>
                      <li> Full Budget Control 
                      </li>
                      <li>Real-Time Advertisin</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>Higher Conversion Potential 
                      </li>
                      <li>Measurable and Trackable Results 
                      </li>
                      <li>Revenue and Sales Growth 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default WhatisPPc;
