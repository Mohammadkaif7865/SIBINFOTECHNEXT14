import Link from "next/link";
import React from "react";
const Benefits = () => {
  const benefitsList = [
    "Predictable & Scalable ROI Generation",
    "Precise Commercial Audience Targeting",
    "Real-time Analytics & Revenue Attribution",
    "Lower Customer Acquisition Cost (CAC)",
    "Compound Organic Traffic & High Domain Authority",
    "Multi-Channel Omnipresence Across Search & Social",
    "High Conversion Rate Optimization (CRO)",
    "Pan-India Regional & Global Market Scalability",
    "Agile Campaign Adaptation & Rapid Iteration",
    "100% Transparent Live Dashboard Reporting",
  ];

  return (
    <>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-7">
              <div className="leftBenefits">
                <h4 className="sub_heading fontHeading fontWeight700">
                  Strategic Benefits of Partnering with the{" "}
                  <span className="text_red">Best Digital Marketing Company in India</span>
                </h4>
                <p className="mt-3 text-justify">
                  In today&apos;s hyper-competitive commercial environment, business growth requires more than disjointed marketing tactics.
                  Partnering with SIB Infotech—one of the premier digital marketing firms in India—gives your brand an integrated,
                  data-driven competitive advantage that compounds over time.
                </p>
                <p className="mt-2 text-justify">
                  Unlike traditional offline media with opaque audience attribution, our digital marketing services in India deliver
                  transparent, dollar-for-dollar performance tracking. From initial click attribution to final checkout or signed contract,
                  every rupee spent is measured against clear return on investment benchmarks.
                </p>
                <p className="mt-2 text-justify">
                  Whether capturing hyper-local high-intent searches in Mumbai, Delhi NCR, and Bangalore, or penetrating lucrative
                  international markets in the US, UK, and UAE, our digital marketing solutions provide the agility, technical infrastructure,
                  and creative horsepower needed to outpace industry rivals and build lasting brand equity.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rightBenefit">
                <ul>
                  {benefitsList.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seoCallAction">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="leftAction">
                <h4 className="sub_heading text-white fontHeading fontWeight500">
                  Do you Want More Traffic, More Leads, More Sales?
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rightAction text-center">
                <Link href="#bannerSection" className="btnAction">
                  Speak with one of our Experts in India today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
