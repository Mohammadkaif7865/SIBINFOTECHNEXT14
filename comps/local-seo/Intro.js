import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 class="sub_heading fontHeading fontWeight700">
              What is <span className="text_red">Local SEO </span> ?
            </h3>
            <p className="mt-4">
              Majority of the internet users these days rely on location-based
              searches when seeking products, services, or local businesses
            </p>
            <p className="mt-3">
              Local SEO refers to optimising your online presence to rank higher
              on search engine results when users search for products or
              services in a specific geographic location. It is one of the
              important services for a company which has majority of their
              clients in a specified location or their business is local
              business and limited to a specific area. The major benefit of
              local SEO is it would bring in location-based traffic for your
              local business.
            </p>
            <p className="mt-3">
              Generally, local SEO is a combination of several factors that need
              to be maintained and organized by SEO experts to ensure the
              success of your business as well as the website.
            </p>
            <p className="mt-3">
              Local Search Engine Optimisation is a sub-branch of SEO that
              focuses on the growth of the local businesses that are found on
              the local search result
            </p>
          </div>
          <div className="col-lg-6  mt-4 mt-lg-0 ps-lg-5 ">
            <div className="list_intro_lseo">
              <div className="item d-flex align-items-center introduction_seo_list ">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/search-g.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <p className="fontHeading small_heading fontWeight600">
                   <span className="text_red">46%</span>  of all Google searches are local searches Like “near me”
                    or “open near me”
                  </p>
                </div>
              </div>
              <div className="item mt-4 d-flex align-items-center  introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/smartphone2.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <p className="fontHeading small_heading fontWeight600">
                  <span className="text_red"> 76% </span> of smartphone searchers visit a store within a day
                    (Smartphone Icon)
                  </p>
                </div>
              </div>
              <div className="item mt-4 d-flex align-items-center  introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/google-my-business.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <p className="fontHeading small_heading fontWeight600">
                  <span className="text_red">  78%  </span> of local mobile searches result in an in-store purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
