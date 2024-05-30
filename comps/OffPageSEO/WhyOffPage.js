import Image from "next/image";
import React from "react";

const WhyOffPage = () => {
  const data = [
    {
      src: "/assets/images/icons/off-page-seo-engine-rankings.svg",
      alt: "off-page-seo-engine-rankings",
      title: "Higher search engine rankings",
    },
    {
      src: "/assets/images/icons/off-page-seo-increase-page-rank.svg",
      alt: "off-page-seo-increase-page-rank",
      title: "Increased PageRank",
    },
    {
      src: "/assets/images/icons/off-page-seo-expanded-exposure.svg",
      alt: "off-page-seo-expanded-exposure",
      title: "Expanded exposure",
    },
    {
      src: "/assets/images/icons/off-page-seo-embeded-trust.svg",
      alt: "off-page-seo-embeded-trust",
      title: "Embed trust among the audience",
    },
    {
      src: "/assets/images/icons/off-page-seo-brings-the-right-traffic.svg",
      alt: "off-page-seo-website-traffic",
      title: "Brings the right traffic to your website",
    },
    {
      src: "/assets/images/icons/off-page-seo-increase-conversion.svg",
      alt: "off-page-seo-increase-conversion",
      title: "Increases conversions",
    },
    {
      src: "/assets/images/icons/off-page-seo-lead-generation.svg",
      alt: "off-page-seo-lead-generation",
      title: "Lead generation",
    },
    {
      src: "/assets/images/icons/off-page-seo-boost-brand-awareness.svg",
      alt: "off-page-seo-boost-brand-awareness",
      title: "Boosts brand awareness",
    },
    {
      src: "/assets/images/icons/off-page-seo-highly-ecomocial.svg",
      alt: "off-page-seo-highly-ecomocial",
      title: "Highly economical",
    },
    {
      src: "/assets/images/icons/off-page-seo-increase-visibility.svg",
      alt: "off-page-seo-increase-visibility",
      title: "Increases visibility of your brand",
    },
  ];
  return (
    <section className="customPadding">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h3 className="customHeading">
              Why is <span classNameName="text_red">Off-Page SEO</span>{" "}
              important?
            </h3>
            <p className="customText text-justify">
              Off-page SEO services are action performed outside your website
              after it goes live which would impact your rankings within the
              search results. Off-page SEO deals with the external links that
              direct traffic to your website organically, also known as
              'backlinks' and this plays a very important role in link building.
              Off-page optimization deals with regulating the backlinks on other
              publisher's pages including blogs, which leads to building a
              reliable spot on the search engine and the website rankings are
              set to the sky.
            </p>
            <p className="customText text-justify">
              The image of your business depends on its reputation and rankings
              on the search engines. There a plenty of benefits that a business
              attains from executing an off-page SEO strategy.
            </p>
            <p className="customText text-justify">
              Our strategy helps your company get to the top ranking on major
              search engines by using self-developed effective techniques with
              years of experience using White Hat SEO practices.
            </p>
            <p className="customText text-justify">
              Experts at SIB, implement their experience, knowledge, and
              excellence to improve your website's SEO performance and optimize
              it to take your business to the new heights of success.
            </p>
          </div>
          {/* <div className="col-lg-7">
            <div className="off-page-seo-important-box-row">
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-engine-rankings.svg"
                  alt="off-page-seo-engine-rankings"
                />
                <h5>Higher search engine rankings</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-increase-page-rank.svg"
                  alt="off-page-seo-increase-page-rank"
                />
                <h5>Increased PageRank</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-expanded-exposure.svg"
                  alt="off-page-seo-expanded-exposure"
                />
                <h5>Expanded exposure</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-embeded-trust.svg"
                  alt="off-page-seo-embeded-trust"
                />
                <h5>Embed trust among the audience</h5>
              </div>
            </div>
            <div className="off-page-seo-important-box-row">
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-brings-the-right-traffic.svg"
                  alt="off-page-seo-website-traffic"
                />
                <h5>Brings the right traffic to your website</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-increase-conversion.svg"
                  alt="off-page-seo-increase-conversion"
                />
                <h5>Increases conversions</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-lead-generation.svg"
                  alt="off-page-seo-lead-generation"
                />
                <h5>Lead generation</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-boost-brand-awareness.svg"
                  alt="off-page-seo-boost-brand-awareness"
                />
                <h5>Boosts brand awareness</h5>
              </div>
            </div>
            <div className="off-page-seo-important-box-row">
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-highly-ecomocial.svg"
                  alt="off-page-seo-highly-ecomocial"
                />
                <h5>Highly economical</h5>
              </div>
              <div className="off-page-seo-important-box">
                <img
                  src="assets/images/icons/off-page-seo-increase-visibility.svg"
                  alt="off-page-seo-increase-visibility"
                />
                <h5>Increases visibility of your brand</h5>
              </div>
            </div>
          </div> */}
          <div className="col-lg-7 ">
            <div className=" WhyOffPageGrid">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="WhyOffPageGrid_box  off-page-seo-important-box"
                >
                  <Image
                    width={50}
                    height={50}
                    quality={100}
                    className="h-auto"

                    src={item.src}
                    alt={item.alt}
                  />
                  <h5>{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOffPage;
