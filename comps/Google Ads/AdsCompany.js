import Image from "next/image";
import React from "react";

const AdsCompany = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="customHeading  fontHeading fontWeight800">
              SIB Infotech - Top Rated{" "}
              <span class="text_red">Google Ads Company In India</span>
            </h2>
            <p className="customText">
              Google is one of the most used search engines by the vast majority
              of the world's population. On average, 2.3 million searches are
              executed every second on google where the search results are
              embedded with Google Ads.
            </p>
            <p className="customText">
              These ads are known to be the best possible and highly effective
              medium for driving quality traffic to your website. The products
              and services of your business are displayed to the audience
              exactly when they are searching for the services the same as
              yours. Google AdWords are paid ads that appear on Google SERPs and
              other websites through Google’s AdSense or Display Network. The
              ads can be of any format, it could be a text, image, video, or
              rich media format, and each targets the audience differently.
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
