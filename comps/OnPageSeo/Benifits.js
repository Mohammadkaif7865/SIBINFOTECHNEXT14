import Image from "next/image";
import React from "react";

const FeatureBox = ({ iconSrc, altText, title }) => {
  return (
    <div className="">
      <Image className="" width={50} height={50} src={iconSrc} alt={altText} />
      <h4 className="fontHeading">{title}</h4>
    </div>
  );
};

const Benifits = () => {
  // Array of feature objects
  const features = [
    {
      iconSrc: "/assets/images/icons/on-page-seo-boost-brand-awarness.svg",
      altText: "on-page-seo-boost-your-brand-awarness",
      title: "Boosts your brand awareness",
    },
    {
      iconSrc: "/assets/images/icons/on-page-highly-measurable.svg",
      altText: "on-page-highly-measurable",
      title: "Highly measurable",
    },
    {
      iconSrc: "/assets/images/icons/on-page-cost-effective.svg",
      altText: "on-page-seo-cost-effective",
      title: "Cost-effective",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-increase-visibility.svg",
      altText: "on-page-seo-increase-visibility",
      title: "Increases visibility of your brand",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-website-speed.svg",
      altText: "on-page-seo-website-speed",
      title: "Improves your website's speed and interface",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-brings-the-right-traffic.svg",
      altText: "on-page-seo-brings-the-right-traffic",
      title: "Brings the right traffic to your website",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-increase-conversion.svg",
      altText: "on-page-seo-increase-conversion",
      title: "Increases conversions",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-increase-sales.svg",
      altText: "on-page-seo-increase-sales",
      title: "Increases sales",
    },
    {
      iconSrc:
        "/assets/images/icons/on-page-seo-decreases-cost-per-acquisition.svg",
      altText: "on-page-seo-Decreases-cost per-acquisition",
      title: "Decreases cost per acquisition",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-build-trust.svg",
      altText: "on-page-seo-build-trust",
      title: "Builds trust and credibility",
    },
    {
      iconSrc: "/assets/images/icons/on-page-seo-purchase-decisions.svg",
      altText: "on-page-seo-purchase-decisions",
      title: "Influences purchase decisions",
    },
    {
      iconSrc: "/assets/images/icons/on-page-cost-effective.svg",
      altText: "on-page-seo-cost-effective",
      title: "Cost-effective",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 leftDigiSer">
            <div className="heading-section">
              <h3 className="customHeading text-white">
                How can on-Page optimization Service Help your website?
              </h3>
              <p className="customText text-off-white">
                The image of your business relies on its Reputation and rankings
                on the search engines. The audience always chooses the top
                results of the search engines to avail services and purchase
                products. A brand should always ensure that its website is
                always updated as per the market needs and trends to acquire the
                top ranking.
              </p>
              <p className="customText text-off-white">
                Your business leads the market only if it is on the top pages of
                search engines. People tend to be attracted to the top best
                search results on search engines like Google, Yahoo or Bing.
              </p>
              <p className="customText text-off-white">
                The fruitful outcomes of SEO can be only devoured by any
                business if they choose and invest in a reliable On-page SEO
                company. At SIB Infotech we make sure that your brand acquires
                the top rankings with our services that are the best in India.
                On-page SEO optimizes your website in such a way that it is
                understandable by the search engines and is relevant to the
                audience search queries. There a plenty of benefits that a
                business attains from integration on-page optimization.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="middle-row ">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="middle-box">
                  <FeatureBox {...feature} />
                </div>
              ))}
            </div>
            <div className="middle-row ">
              {features.slice(4, 8).map((feature, index) => (
                <div key={index} className="middle-box">
                  <FeatureBox {...feature} />
                </div>
              ))}
            </div>
            <div className="middle-row ">
              {features.slice(8, 12).map((feature, index) => (
                <div key={index} className="middle-box">
                  <FeatureBox {...feature} />
                </div>
              ))}
            </div>

            <div className="para-section">
              <p className="customText">
                A business should never ignore the factors that make up the
                on-page structure of their website, the efforts made for the
                on-page optimization can boost the website traffic, boost
                audience engagement and raise the rankings in a very short time.
              </p>
              <p className="customText">
                Our On-page SEO strategy helps your company get to the top
                ranking on major search engines by using self-developed
                effective techniques with years of experience using white hat
                SEO practices.
              </p>
              <p className="customText">
                Our experts implement their experience, knowledge, and
                excellence to improve your website's SEO performance and
                optimize it to take your business to the new heights of success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
