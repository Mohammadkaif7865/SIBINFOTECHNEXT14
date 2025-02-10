import Link from "next/link";
import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between w-100 ">
              <h4 className="sub_heading text-white fontWeight700 fontHeading">
                Our Local SEO Services
              </h4>
              <Link className="btnAction d-none d-lg-block" href="/contact-us">
                Connect With SEO Expert
              </Link>
            </div>
          </div>
        </div>
        <div className="seoMana">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  <li
                    className={activeTab === "section1" ? "active" : ""}
                    onClick={() => handleTabClick("section1")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        01
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local SEO Audit
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section2" ? "active" : ""}
                    onClick={() => handleTabClick("section2")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        02
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local Keyword Research
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section3" ? "active" : ""}
                    onClick={() => handleTabClick("section3")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        03
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Google My Business Optimization
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section4" ? "active" : ""}
                    onClick={() => handleTabClick("section4")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        04
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local Citations & Directory Listings
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section5" ? "active" : ""}
                    onClick={() => handleTabClick("section5")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        05
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local Link Building
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section6" ? "active" : ""}
                    onClick={() => handleTabClick("section6")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        06
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local Schema Markup
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section7" ? "active" : ""}
                    onClick={() => handleTabClick("section7")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        07
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                      Local Content Creation
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section8" ? "active" : ""}
                    onClick={() => handleTabClick("section8")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        08
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                      Online Review Management
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rightMain stickyRight">
                {activeTab === "section1" && (
                  <div className="itemSidebar scroll" id="section1">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local SEO Audit
                    </h4>
                    <p className="mt-3">
                      A local SEO audit is like a health check-up for your
                      online presence! We scan your website, Google My Business,
                      local citations, and rankings to identify what's working
                      and what isn't. It's all about ensuring you're in tip-top
                      shape for local search results so you can dominate your
                      neighborhood's digital space!
                    </p>
                  </div>
                )}
                {activeTab === "section2" && (
                  <div className="itemSidebar scroll" id="section2">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local Keyword Research
                    </h4>
                    <p className="mt-3">
                      Want to appear when your community is searching for your
                      services? Using local keyword research helps you pin down
                      the phrases that customers use in your region. From ‘best
                      pizza near me’ to ‘affordable plumbing in [your city],’ we
                      research deep to find the perfect keywords to connect you
                      with your ideal local customers.
                    </p>
                  </div>
                )}
                {activeTab === "section3" && (
                  <div className="itemSidebar scroll" id="section3">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Google My Business Optimization
                    </h4>
                    <p className="mt-3">
                      Think of Google My Business as your digital storefront.
                      Optimization means making sure your business is easy to
                      find with accurate details such as hours, location, and
                      reviews. It's how you make a first impression on Google
                      and show up when locals are searching for businesses just
                      like yours.
                    </p>
                  </div>
                )}
                {activeTab === "section4" && (
                  <div className="itemSidebar scroll" id="section4">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local Citations & Directory Listings
                    </h4>
                    <p className="mt-3">
                      Local citations are sort of digital word-of-mouth! We get
                      your business listed across top directories—like Yelp,
                      Yellow Pages, and local chambers of commerce—to improve
                      your credibility and local ranking. More citations = more
                      trust, and more trust means more customers knocking on
                      your door
                    </p>
                  </div>
                )}
                {activeTab === "section5" && (
                  <div className="itemSidebar scroll" id="section5">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local Link Building
                    </h4>
                    <p className="mt-3">
                      They don't just do wonders for your global SEO but also
                      locally. And as far as local links are concerned, you're
                      getting links from your local blogs, businesses, and news
                      sites—not only boosting your authority but also attracting
                      the right kind of traffic that prefers to shop in your
                      neighborhood. Your secret weapon? Local link building for
                      SEO dominance.
                    </p>
                  </div>
                )}
                {activeTab === "section6" && (
                  <div className="itemSidebar scroll" id="section6">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local Schema Markup
                    </h4>
                    <p className="mt-3">
                      Get your website to speak Google's language with local
                      schema markup. It's the behind-the-scenes code that helps
                      search engines understand your business better, from your
                      address to your opening hours and even reviews. It's like
                      sending Google a personalized roadmap that says, “Hey, I’m
                      here, and I’m local!”
                    </p>
                  </div>
                )}
                {activeTab === "section7" && (
                  <div className="itemSidebar scroll" id="section6">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                    Local Content Creation
                    </h4>
                    <p className="mt-3">
                    We talk straight to your community about crafting local content. Whether this is a blog post about a community event or a video involving a neighborhood favorite, we make sure you have the right tools to connect with your audience. Local content isn't just used for SEO anymore; it relates to your target audience and forms a relationship within their daily routines
                    </p>
                  </div>
                )}
                {activeTab === "section8" && (
                  <div className="itemSidebar scroll" id="section6">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                    Online Review Management
                    </h4>
                    <p className="mt-3">
                   Your online reviews are more important than you think—they are the modern word of mouth! We help you respond to and handle review complaints on Google, Yelp, and Facebook. Your positive reputation is enhanced while we step forward to maintain your pristine online reputation.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
