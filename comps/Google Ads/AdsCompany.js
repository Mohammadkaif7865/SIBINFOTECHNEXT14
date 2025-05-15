import Image from "next/image";
import React from "react";

const AdsCompany = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="customHeading text_red fontHeading">
           Why Google Ads?
             
            </h2>
            <p className="customText">
            Recent reports state that Google processes over 2.3 million searches per second! Imagine potential customers searching for a service you offer, and your business appears right at the top. That's the magic of Google Ads! 
            </p>
            <p className="customText">
            Whether it's Search, Display, Shopping, Video, or App ads, a well-optimized <strong>Google Ads campaign drives measurable</strong> business results. 
            </p>
            <p className="customText">
              Recursive analysis, attention as well as optimization is mandatory
              for extracting every ounce of profit from Google advertising. Are
              you looking for Google AdWords experts in India? SIB Infotech is
              amongst the best Google Ads management companies in India offering
              Google AdWords management services which yield extremely
              profitable results and are worth your investment in us.
            </p>
          </div>
          <div className="col-lg-5">
            <Image width={500} height={500} quality={100}
              className="image-full imgAnimation"
              src="assets/images/google-ads-management-comopany-in-india.svg"
              alt="Google-Ads-Management-Company-In-India"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsCompany;
