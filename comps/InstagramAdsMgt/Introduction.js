import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <p className="customText">
              Instagram is the most widely used social media platform after
              Facebook. It is a subset of the social media giant Facebook.
            </p>
            <p className="customText">
              It is a free social media platform that allows the users to share
              pictures and videos, give it desired captions, appealing filters,
              and engage the content with their followers or a selected group of
              people and so much more. People spend hours on social media like
              Facebook, Instagram and YouTube, if your brand gets the attention
              via the advertisement in those hours it can surely lead to the
              generation of new customers, enhanced sales and increased
              conversions.
            </p>
            <p className="customText">
              Around 80% of the Instagram users take a look at the ads they find
              on their news feeds, if a brand can create an effective and
              compelling advertisement about its services and launch it to the
              relevant audience, their website traffics and conversions can soar
              up to the highest limits.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="tiktok-img-section">
              <Image
              width={400}
              height={400}
              quality={100}
                className=" h-auto image-full "
                src="/assets/images/instagram-ads-management-firm.png"
                alt="Instagram-Ads-Management-Agency"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
