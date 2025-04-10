import Link from "next/link";
import React from "react";
const Benefits = () => {
  const benefitsList = [
    "Budget-friendly",
    "Measurable Results",
    "Improved Brand Awareness",
    "Strong Engagement",
    "Strong ROI Potential",
    "Global and Regional Reach",
    "Flexibility",
    "Relationship Building",
    "Immediate Connection",
    "Dynamic Adaptability",
  ];

  return (
    <>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-8">
              <div className="leftBenefits">
                <h4 className="sub_heading fontHeading fontWeight700">
                  Benefits of getting the Digital Marketing Services from the
                  Best Digital Marketing Company in India
                </h4>
                <p className="mt-3">
                  SIB Infotech, a leading Digital Marketing company in India,
                  offers businesses an easy-to-scale and adaptable approach to
                  reaching their real customers. Not only is it more
                  cost-effective compared to traditional marketing methods, but
                  it also allows new businesses to quickly establish their brand
                  reputation. With a higher engagement rate, huge return on
                  investment, and wider reach, digital marketing provides
                  unparalleled opportunities for growth. Its power lies in
                  segmentation, automation, and personalization, enabling
                  tailored messages to specific audiences at the right time.
                  Moreover, digital marketing is highly measurable, allowing
                  businesses to track and analyze their performance accurately,
                  ensuring every marketing effort delivers tangible results.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
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
