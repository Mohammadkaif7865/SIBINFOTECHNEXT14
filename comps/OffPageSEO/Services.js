import React from "react";
import { Image } from "react-bootstrap";

const Services = () => {
  return (
    <section className="customPadding bgGrey ">
      <div className="containerFull">
        <h3 className="customHeading text-center">
          <span className="text_red">Off page SEO </span>services
        </h3>
        <p className="customText text-center">
          The off-page SEO factors are a great trust builder to the search
          engines. Without off-page optimization, your page cannot attain the
          top ranks of the search engines and make it worthwhile for the
          audience.
        </p>
        <div className="d-grid  servicesgridBox2 ">
          <div className=" off-page-seo-box">
            <div className="">
              <div className="off-page-seo-box-heading">
                <div className="img-circle ">
                  <Image
                    className=" h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="/assets/images/icons/off-page-seo-link-building.svg"
                    alt="off-page-seo-link-building"
                  />
                </div>
                <h4>Link building</h4>
              </div>
              <p className="customText">
                building backlinks is the core role of the off-page SEO
                strategy. The search engines highly rely on the backlinks for
                indications of linked content quality. There are three types of
                link that are mentored under link building.
              </p>
            </div>
          </div>
          <div className=" off-page-seo-box">
            <div className="">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <Image
                    className=" h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="/assets/images/icons/off-page-seo-brand-mention.svg"
                    alt="off-page-seo-brand-mention"
                  />
                </div>
                <h4>Brand mentions</h4>
              </div>
              <p className="customText">
                brands are trusted more by the audience, the brand forums,
                articles and reviews are the key factors that include the
                mentions but they don't need to have links pointing to the
                website. Google crawlers prioritize brand mentions to a great
                extent which leads the website to be in the top results of the
                search engines.
              </p>
            </div>
          </div>
        </div>
        <div className="d-grid servicesgridBox3 ">
          <div className="off-page-seo-box">
            <div className="">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <Image
                    className=" h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="/assets/images/icons/off-page-seo-social-media-marketing.svg"
                    alt="off-page-seo-social-media-marketing"
                  />
                </div>
                <h4>Social media marketing</h4>
              </div>
              <p className="customText">
                social media platforms play a very important role in link
                building and attracting the audience.
              </p>
            </div>
          </div>
          <div className="off-page-seo-box">
            <div className="">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <Image
                    className=" h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="/assets/images/icons/off-page-seo-guest-blogging.svg"
                    alt="off-page-seo-guest-blogging"
                  />
                </div>
                <h4>Guest blogging</h4>
              </div>
              <p className="customText">
                writing guest posts on other websites often links back to your
                website. Guest blogging increases the chances of the audience
                visits as the guest blog links are a key part of the backlink
                profile.
              </p>
            </div>
          </div>
          <div className="off-page-seo-box">
            <div className="">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <Image
                    className=" h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="/assets/images/icons/off-page-seo-keywords.svg"
                    alt="off-page-seo-keywords"
                  />
                </div>
                <h4>Keywords</h4>
              </div>
              <p className="customText">
                when relevant keywords are integrated in the website content, it
                makes it far more attractive and useful for the audience leading
                to more traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
