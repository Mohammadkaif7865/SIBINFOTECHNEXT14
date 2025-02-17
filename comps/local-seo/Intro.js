import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 class="sub_heading fontHeading fontWeight700">
              What is <span className="text_red">Local SEO </span>and How to Do It
            </h3>
            <p className="mt-4">
              <b>Local SEO</b> is the latest search engine optimization technique used
              to optimize your website, <b>Google My Business profile </b>, and overall
              online presence to rank higher in local search results on Google
              and other search engines within <b>a specific geographic location</b>,
              helping your business be found by potential customers nearby.
            </p>
            <p className="mt-3">
              Today, the majority of internet users rely on location-based
              searches when looking for products, services, or local businesses.
              Our <b>Local SEO services</b> focus on improving your search engine
              rankings for these location-specific queries by optimizing for
              <b> Google Maps, local keywords</b>, and <b>local citations</b>. This drives
              targeted traffic from a specific area, city, or neighborhood to
              your local business, increasing in-store traffic, phone calls, and
              online inquiries from <b>nearby local customers</b>.
            </p>
            {/* <p className="mt-3">
              Generally, local SEO is a combination of several factors that need
              to be maintained and organized by SEO experts to ensure the
              success of your business as well as the website.
            </p>
            <p className="mt-3">
              Local Search Engine Optimisation is a sub-branch of SEO that
              focuses on the growth of the local businesses that are found on
              the local search result
            </p> */}
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
                    <span className="text_red">46%</span> of all Google searches
                    are local searches Like “near me” or “open near me”
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
                    <span className="text_red"> 76% </span> of smartphone
                    searchers visit a store within a day (Smartphone Icon)
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
                    <span className="text_red"> 78% </span> of local mobile
                    searches result in an in-store purchase
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
