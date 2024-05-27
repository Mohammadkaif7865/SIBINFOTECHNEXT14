import Image from "next/image";
import React from "react";

const Analysis = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2 mt-3 mt-lg-0">
            <div className="insta-services-content-section">
              <h3 className="margin-bottom">Analysis of competitor content</h3>
              <p className="customText">
                Determination of audience is very important aspect in Instagram
                advertising because you are going to establish your brand value
                into their mind. You can determine your audience according to
                their age, gender, area, interest as per your business need.
              </p>
              <div className="insta-services-list">
                <ul>
                  <li className="customText">
                    What kind of hashtags they are using?
                  </li>
                  <li className="customText">Which location do they stay?</li>
                  <li className="customText">
                    Who do they follow on Instagram?
                  </li>
                  <li className="customText">
                    What kind of brand they are interested?
                  </li>
                </ul>
              </div>
              <span className="divider2">&nbsp;</span>
              <h3 className="margin-bottom">
                Creating a content posting calendar
              </h3>
              <p className="customText">
                After crating a share worthy content it is important to decide
                when and how often it should be published.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="insta-services-img-section">
              <Image
                width={450}
                height={450}
                quality={100}
                className="image-full h-auto"
                src="/assets/images/best-mobile-seo-company-in-delhi.png"
                alt="best-mobile-seo-company-in-delhi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
