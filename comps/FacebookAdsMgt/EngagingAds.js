import Image from "next/image";
import React from "react";

const EngagingAds = () => {
  const adContentItems = [
    {
      imgSrc:
        "assets/images/icons/facebook-ads-managemnet-pre-schedul-planning.svg",
      alt: "facebook-ads-managemnet-pre-schedul-planning",
      title: "Pre-plan schedule",
      description:
        "After crafting highly effective content, we find it very important to decide when and how often it should be published.",
    },
    {
      imgSrc:
        "assets/images/icons/faceboog-ads-manegemnet-progress-tracking.svg",
      alt: "facebook-ads-management-progress-tracking",
      title: "Progress tracking",
      description:
        "It is very important to track the performance of the campaign from time to time.",
    },
    {
      imgSrc:
        "assets/images/icons/facebook-ads-management-transparent-report.svg",
      alt: "facebook-ads-management-transparent-report",
      title: "Transparent reports",
      description:
        "We send you transparent progress reports monthly so that you can track and record the outcomes and progress of your website.",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <h3 className="customHeading text-center">
          <span className="text_red">Building engaging</span> ad content
        </h3>
        <p className="customText text-center">
          our experts ensure that they create powerful, engaging and fresh
          content for your advertisements. We make sure that the content follows
          the market trend and is attractive.
        </p>
        <div className="row">
          {adContentItems.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="ad-content-box">
                <Image width={100} height={100} quality={100} src={item.imgSrc} alt={item.alt} />
                <h4>{item.title}</h4>
                <p className="customText">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagingAds;
