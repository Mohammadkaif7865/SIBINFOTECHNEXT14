import React from "react";
import Image from "next/image";

const KeyPoints = () => {
  const keyPoints = [
    {
      imgSrc: "best-instagram-company-in-india.svg",
      alt: "Instagram-Ads-Management-Firm-In-Delhi",
      title: "Higher conversion rate",
      description:
        "It gives us higher conversion rate because it provides our product a visually engaging effect.",
      imgSrc2: "best-instagram-ads-management-company-in-delhi.svg",
      alt2: "Best-Instagram-Ads-Management-Company-In-India",
      title2: "Multi channel connection",
      description2:
        "If we are connecting Instagram to our website, we are able to connect with customers from different type of channels and increase cross channel engagement in return.",
    },
  
    {
      imgSrc: "best-instagram-ads-management-company-in-mumbai.svg",
      alt: "Best-Instagram-Ads-Management-Company-In-Mumbai",
      title: "Different Profile",
      description:
        "Instagram provide us 2 different kind of profile one is personal profile, and another is business profile. If you will turn your personal profile to business profile you will unlock a world of features to promote your product and services.",

      imgSrc2: "instagram-ads-management-companies.svg",
      alt2: "Best-Instagram-Ads-Management-Company-In-Delhi",
      title2: "Build a relationship with followers and potential customers",
      description2:
        "On Instagram engagement with brands is so many times higher than other platforms.",
    },
    
    {
      imgSrc: "instagram-ads-management-companies-in-mumbai.svg",
      alt: "Best-Instagram-Ads-Management-Company-In-Mumbai",
      title: "Higher visibility",
      description:
        "It provide our product and services a higher visibility and that too to more relevant audiences.",
      imgSrc2: "instagram-ads-management.svg",
      alt2: "Best-Instagram-Ads-Management-Company",
      title2: "Lead Generation",
      description2:
        "It is a powerful and most economical tool for lead generation for your business.",
    },
    
    {
      imgSrc: "insta-ads-management-company-in-india.svg",
      alt: "Instagram-Ads-Management-Company-In-India",
      title: "Lower CPC",
      description:
        "One another advantage of using Instagram ad is it offer lower CPC (cost per click) then other advertising platform like Google AdWords, Twitter, Facebook, LinkedIn ads so it is very cost effective as well.",
      imgSrc2: "insta-ads-management-in-mumbai.svg",
      alt2: "Instagram-Ads-Management-Company-In-India",
      title2: "Build the brand reputation",
      description2:
        "Instagram build a brand value in the mind of your followers. On Facebook if you want to increase the numbers of fans(or followers)for your business pages you have to pay for them but on Instagram you can increase your followers organically.",
    },
    
    {
      imgSrc: "instagram-ads-management-services-company.svg",
      alt: "Instagram-Ads-Management-Company-In-India",
      title: "It's a visual platform",
      description:
        "Because on Instagram people only share their post through photos and videos so we can say it’s very visual and attractive platform.",
      imgSrc2: "instagram-ads-management-services-in-mumbai.svg",
      alt2: "Instagram-Ads-Management-Company-In-India",
      title2: "Easily Tractable",
      description2:
        "Sale and leads are tractable through Instagram ads. Just because Instagram uses the same ad manager platform as Facebook it has all of the tracking capability that Facebook has.",
    },
    
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="content-marketing-row">
          {keyPoints.map((point, index) => (
            <div className="row" key={index}>
              <div className="col-lg-6">
                <div className="content-marketing-box2">
                  <div className="content-marketing-box2-content-box">
                    <h4 className="fontHeading">{point.title}</h4>
                    <p className="customText">{point.description}</p>
                  </div>
                  <div className="content-marketing-box2-img-box">
                    <Image
                      src={`/assets/images/icons/${point.imgSrc}`}
                      alt={point.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-marketing-box3">
                  <div className="content-marketing-box3-img-box">
                    <Image
                      width={100}
                      height={100}
                      src={`/assets/images/icons/${point.imgSrc2}`}
                      alt={point.alt2}
                    />
                  </div>
                  <div className="content-marketing-box2-content-box">
                    <h4 className="fontHeading">{point.title2}</h4>
                    <p className="customText">{point.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
