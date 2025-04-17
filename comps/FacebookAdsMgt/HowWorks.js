import Image from "next/image";
import React from "react";

const HowWorks = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Image
              //   fill
              width={500}
              height={500}
              quality={100}
              style={{
                objectFit: "contain",
              }}
              className="w-100 h-auto image-full imgAnimation "
              src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/facebook-ads-management-company-in-india.png"
              alt="facebook-ads-maangement-company-in-delhi"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="customHeading">
              How Does SIB Infotech{" "}
              <span className="text_red">Facebook Ads Management</span> Works?
            </h3>
            <p className="customText">
              SIB Infotech is your one-in-all stop for the marketing solutions,
              as we are the best social media marketing agency in India, our
              services assure that your brand gets the best possible publicity.
              Our Facebook advertising strategy is an ultimate blend of all the
              tools and tactics that can set your sales on fire. We make sure
              that the ads drive traffic to your website and take your sales to
              the next level. We have 360-degree Facebook advertising strategy
              to help your business grow with facebook advertising.
            </p>
            <p className="customText">
              The amount of data Facebook has on user demographics, interests,
              activities and shopping preferences no other website has data in
              comparison to facebook. Facebook allows customer targeting options
              that enable a business to find any category of users, might it be
              a large, small, or niche audience. These benefits are accompanied
              by complexities and to gain the maximum throughput from a Facebook
              advertising campaign your business needs experienced and skills
              minds and this is where our expertise is there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
