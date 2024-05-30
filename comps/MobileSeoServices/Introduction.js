import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="customPadding">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <p className="customText text-justify">
              The mobile revolution has transformed the way customer interacts
              with your firm and your products. They have need of a much active
              &amp; quicker experience.
            </p>
            <p className="customText text-justify">
              A great majority of website audience has switched to mobile for
              convenience and easy access to information at any point of time.
              This shift has led to severe competition among the websites to
              maintain their visibility on the mobile. We offer specialized
              mobile SEO services that focus on your company's website along
              with optimizing it for mobile search results and high-quality user
              experience. A combination of accurate SEO tools is the key to
              successful and effective mobile SEO services.
            </p>
            <p className="customText">
              Almost 40% of the sales these days are done online via the
              business websites. If a business wants to engage mobile users and
              convert them into loyal customers, Mobile SEO should be your top
              prioritized investment. Mobile SEO enables your website to rank
              better and generate heavy leads on your page.
            </p>
            <p className="customText">
              The tremendous growth in the portable device sector has led to
              great concerts to the web-experts to plan their mobile SEO
              strategies. Almost 50% of internet users have switched to mobile
              internet surfing, each of them considers visiting mobile-friendly
              websites. Mobile-friendly websites are preferred by Google itself.
            </p>
          </div>
          <div className="col-lg-5">
            <Image
              width={500}
              height={500}
              className="image-full h-auto "
              src="assets/images/mobile-seo-company-in-india.svg"
              alt="mobile-seo-agency-in-delhi"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="customText">
              Search engines are considered to be the most reliable platforms to
              digitally grow your brand to the farthest corners of the digital
              world. Mobile optimization of your website ensures that it
              functions properly and looks attractive on the devices.
            </p>
            <p className="customText">
              The usage of mobile phones has been sky-rocketed in the past
              decade. Companies and businesses must understand that Mobile SEO
              is an essential tool for growing and expanding their services and
              sales.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="customText">
              What can be done to be certain that your website is well-optimized
              according to the mobile SEO key determining factors? Answer to the
              query is far simple, which is to hire a well-experienced and
              expert Mobile SEO company. But the solution is far more complex;
              Mobile SEO tools require expertise to deploy highly engaging
              websites of your brand. SIB Infotech is one of the leading SEO
              service providing companies in India. Our services ensure that
              your brand gets 200% results for what you are investing in our
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
