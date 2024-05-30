import React from "react";
import Banner from "./Banner";
import Image from "next/image";

const SMO = () => {
  return (
    <>
      <Banner />
      <section className="seoBlock">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
              <div className="seoItem">
                <p className="mb-2">
                  Affiliate Marketing is the term used to describe a form of
                  online advertising which consists of rewarding an affiliate
                  for referring a visitor or rewarding a customer for performing
                  a desired action, such as making a purchase or subscribing to
                  a newsletter. In a way, Affiliate Marketing can be regarded as
                  free publicity for your page—a network of related websites
                  directing customers to purchase from yours.
                </p>
                <p className="mb-2">
                  {" "}
                  Affiliate campaigns have the best results when they are
                  combined with Search Engine Optimization (SEO), Pay Per Click
                  (PPC) campaigns, email marketing support and are well-suited
                  for travel, retail, and service industries due to their timely
                  research process/large-volume sales.
                </p>
              </div>
            </div>
            <div className="col-md-4 order-lg-2 order-1">
              <div className="rightSeo text-center">
                <Image
                  width={400}
                  height={400}
                  quality={100}
                  src="/assets/images/smo-banner.png"
                  className="img-responsive w-100 h-auto "
                  alt="SMO Banner"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rightSeo">
                <Image
                  width={400}
                  height={400}
                  quality={100}
                  src="/assets/images/smo_img.png"
                  className="img-responsive w-100 h-auto"
                  alt="SMO"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="seoItem">
                <p className="mb-2">
                  Effective Affiliate Marketing is not throwing a bunch of links
                  at different website owners in the hopes that something will
                  stick. It is a well-planned, specified effort intended to
                  develop long-term relationships with third party websites,
                  research industry-relevant websites with trusted pages and
                  build up a valuable affiliate network for your website that
                  will bring in quality, converted traffic.
                </p>
                <p className="mb-1">
                  {" "}
                  Social Media Marketing is in many ways connected as a
                  technique to viral marketing where word of mouth is created
                  not through friends or family but through the use of
                  networking in social book-marking, video and photo sharing
                  websites. In a similar way the engagement with blogs achieves
                  the website popularity by sharing content through the use of
                  RSS in the blogsphere and special blog search engines such as
                  Technorati. Social Media Marketing is closely related to other
                  Online Marketing Techniques, such as Search Engine
                  Optimization, Search Engine Marketing, Viral Marketing Word of
                  Mouth Marketing, and Social Media Optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="differenceBlock">
        <div className="containerFull has_mob_padding">
          <div className="diffItem">
            <div className="row">
              <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
                <div className="rightDiff">
                  <h5 className="redText">
                    We focus on the following aspects of Social Media
                    Optimization
                  </h5>
                  <ul className="fullList">
                    <li className="redBullet">
                      Increasing your linkability through fresh,informative and
                      eye catching content
                    </li>
                    <li className="blueBullet">
                      Making tagging and bookmarking easy through implementation
                      of Social Bookmarking buttons on your blogs and important
                      pages
                    </li>
                    <li className="redBullet">Rewarding Inbound links</li>
                    <li className="blueBullet">
                      Making your content travel through creation of
                      presentations and submission of the same across social
                      sharing sites
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 order-lg-2 order-1">
                <div className="seoLeft mt-2">
                  <Image
                    width={400}
                    height={400}
                    quality={100}
                    className="w-100 h-auto"
                    src="/assets/images/smo_img2.png"
                    alt="SMO Services"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="diffItem">
            <div className="row">
              <div className="col-md-4">
                <div className="seoLeft mt-2">
                <Image
                    width={400}
                    height={400}
                    quality={100}
                    className="w-100 h-auto" src="/assets/images/smo_img3.png" alt="SMO Agency" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="rightDiff">
                  <h5 className="blueText">
                    If the power of Social Media Marketing has been utilized in
                    the right way, it can help
                  </h5>
                  <ul className="fullList">
                    <li className="redBullet">
                      Increase direct traffic to your site
                    </li>
                    <li className="blueBullet">
                      Increase the number of quality back-links resulting in
                      higher natural ranking
                    </li>
                    <li className="redBullet">
                      Improved brand visibility &amp; brand reputation
                    </li>
                    <li className="blueBullet">
                      Making your content travel through creation of
                      presentations and submission of the same across social
                      sharing sites
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SMO;
