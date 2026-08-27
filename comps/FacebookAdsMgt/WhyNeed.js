import Image from "next/image";
import React from "react";

const WhyNeed = () => {
  return (
    <>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="customHeading">
                What is a <span>Facebook & Meta Ads</span> Agency &amp; Why Do
                You Need One?
              </h3>
              <p className="customText">
                Facebook and Meta ads are among the most powerful advertising
                platforms available today. With over 3 billion monthly active
                users across Facebook, Instagram and the Meta ecosystem, your
                target audience is already there — actively scrolling, engaging
                and looking for products and services like yours.
              </p>
              <p className="customText">
                Meta's advertising platform allows you to target users by
                demographics, interests, behaviors, custom audiences and
                lookalike audiences. From Reels ads and Stories to Advantage+
                campaigns and dynamic product ads, the options for reaching the
                right people at the right time are unmatched.
              </p>
              <p className="customText">
                But running effective Facebook ads requires more than just
                boosting a post. You need a strategic approach — the right
                audience targeting, compelling creative, continuous optimization
                and data-driven decisions. That is exactly what a professional
                Facebook ads management agency brings to the table.
              </p>
              <p className="customText">
                SIB Infotech is a Google Premier Partner and trusted Facebook
                ads management company in Mumbai with 20+ years of digital
                marketing experience. We have helped businesses like Archer
                Chess Academy achieve a 355% increase in qualified leads and a
                47% reduction in ad costs — proving that the right strategy
                delivers real, measurable results.
              </p>
              <p>&nbsp;</p>
            </div>
            <div className="col-lg-6  ">
              <Image
                width={400}
                height={400}
                quality={100}
                style={{
                  objectFit: "contain",
                }}
                className="image-full  imgAnimation "
                src="/assets/images/facebook-ads-management-company-in-delhi.webp"
                alt="facebook-ads-management-company-in-india"
              />
              <p className="customText">
                important role in maximizing your ad spend and driving real
                business outcomes. The right agency knows how to navigate
                Meta's complex ad platform, test creative variations and
                optimize campaigns for the best possible ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyNeed;
