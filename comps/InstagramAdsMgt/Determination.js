import Image from "next/image";
import React from "react";

const Determination = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="insta-services-img-section">
              <Image
                width={450}
                height={450}
                quality={100}
                className="h-auto image-full"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/instagram-ads-audience.png"
                alt="instagram-ads-audience"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="insta-services-content-section">
              <h3 className="margin-bottom mt-lg-0 mt-3 fontHeading">
                Determination of your audience
              </h3>
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
              <span className="divider2">&nbsp; </span>
              <h3 className="margin-bottom fontHeading">
                Create a powerful content strategy
              </h3>
              <p className="customText">
                After creating a share worthy content it is important to decide
                when and how often it should be published.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Determination;
