import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="customPadding">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <p className="customText">
              Search Engine Optimisation (SEO) is one of the most useful tools
              to drive the targeted traffic to your brand's website. It helps to
              acquire new leads, increases the quality and quantity of your
              website's organic traffic and ensures efficiency. Off-page SEO
              activity is the heart for any website that looks upon to grow
              drastically and engage in huge traffic. Off-page optimization
              involves improvisation of the off-site ranking factors of the
              website. It is a highly contributing tool that helps the search
              crawlers understand that the website is valuable and worth as the
              brand and website are popular and trustworthy.
            </p>
            <p className="customText">
              The profitable results of SEO tools can be only devoured by any
              business if they choose and invest in a reliable Off-page SEO
              company. At SIB Infotech we make sure that your brand acquires the
              top rankings with our services that are the best in India. We are
              amongst the top SEO companies in India.
            </p>
            <p className="customText">
              The factors that make up off-page optimization are the crucial
              role players in building audiences and boosting the website
              rankings.
            </p>
          </div>
          <div className="col-lg-5">
            <Image
              width={450}
              height={450}
              className=" image-full  w-100 h-auto"
              src="/assets/images/off-page-seo-company-india.png"
              alt="off-page-seo-company-in-india"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
