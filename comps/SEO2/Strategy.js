import Image from "next/image";
import React from "react";

const Strategy = () => {
  return (
    <section className="strategy">
      <div className="containerFull ">
        <h4 className="text-center mb-5 sub_heading fontHeading fontWeight700">
          Most Effective SEO Practices & Strategy in 2024
        </h4>
        <div className="mt-4 ">
          <div className=" strategy_grid  ">
            <div className="items odd d-flex gap-2 ">
              <div className="items_icon bg_sky">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/keyword-research.png"}
                  alt="bars.png"
                />
              </div>
              <div className="item_content">
                <h5 className="fontHeading fontWeight700" >Keyword Research</h5>
                <p className="mt-2">
                  Keyword research is a fundamental practice in search engine
                  optimization (SEO).
                </p>
              </div>
            </div>
            <div className="items d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/mobile-friendly.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Mobile Friendly/Responsive</h5>
                <p className="mt-2">
                  Your website's users can use your website through mobile
                  device with ease and barring any significant changes from the
                  desktop version of your website.
                </p>
              </div>
            </div>
            <div className="items odd   d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/2.png"}
                  alt="bars.png"
                />
              </div>
              <div className="item_content">
                <h5 className="fontHeading fontWeight700">High-Quality Content & E-E-A-T</h5>
                <p className="mt-2">
                  Website content should be unique, specific, and high-quality.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon  bg_red  ">
                <Image
                  width={50}
                  height={50}
                  src={
                    "/assets/images/icons/strategy/structured-data-schema-markup.png"
                  }
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Structured Data/Schema Markup</h5>
                <p className="mt-2">
                  A type of code that you can optimize on your website to help
                  search engines provide more informative and relevant results
                  to users.
                </p>
              </div>
            </div>
            <div className="items  odd d-flex gap-2">
              <div className="items_icon bg_sky">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/competitor-analysis.png"}
                  alt="bars.png"
                />
              </div>
              <div className="item_content">
                <h5 className="fontHeading fontWeight700">Competitor Analysis</h5>
                <p className="mt-2">
                  This process gathers competitors' insights about their
                  keyword, content, and backlink strategy and uses those
                  insights to improve your own SEO.
                </p>
              </div>
            </div>
            <div className="items d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={
                    "/assets/images/icons/strategy/local-search-engine-optimization.png"
                  }
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Local Search Engine Optimization</h5>
                <p className="mt-2">
                  Local SEO is a strategy that focuses on improving your
                  visibility in local search rankings.
                </p>
              </div>
            </div>
            <div className="items  odd d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/on-page-optimization.png"}
                  alt="bars.png"
                />
              </div>
              <div className="item_content">
                <h5 className="fontHeading fontWeight700">On-Page Optimization</h5>
                <p className="mt-2">
                  This process of optimizing website and webpages and their
                  content for both search engines and users.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon bg_red">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/strategy/3.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Improve Your Core Web Vitals</h5>
                <p className="mt-2">
                  Core web vitals are a set of metrics that measure real-world
                  user experience for loading performance, interactivity, and
                  visual stability of the page.
                </p>
              </div>
            </div>
            <div className="items  odd d-flex gap-2">
              <div className="items_icon bg_sky">
                <Image
                  width={50}
                  height={50}
                  src={
                    "/assets/images/icons/strategy/optimize-content-design.png"
                  }
                  alt="bars.png"
                />
              </div>
              <div className="item_content">
                <h5 className="fontHeading fontWeight700">Optimize Content Design (UI & UX)</h5>
                <p className="mt-2">
                  The process of making sure content is written in a way that it
                  can reach the largest possible target audience.
                </p>
              </div>
            </div>

            <div className="items  d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={
                    "/assets/images/icons/strategy/high-quality-backlinks.png"
                  }
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">High-Quality Backlinks</h5>
                <p className="mt-2">
                  Backlinks represent another website's traffic coming to your
                  own site. It can help you rank higher in search engine result
                  pages (SERPs).
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6 b">
            <div className="items d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/bars.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Mobile friendly</h5>
                <p className="mt-2">
                  Your website's users can use your website through mobile
                  device with ease and barring any significant changes from the
                  desktop version of your website.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/bars.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Structured data/schema markup</h5>
                <p className="mt-2">
                  A type of code that you can optimize on your website to help
                  search engines provide more informative and relevant results
                  to users.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/bars.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Local search engine optimization</h5>
                <p className="mt-2">
                  Local SEO is a strategy that focuses on improving your
                  visibility in local search rankings.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/bars.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">Improve your core web vitals</h5>
                <p className="mt-2">
                  Core web vitals are a set of metrics that measure real-world
                  user experience for loading performance, interactivity, and
                  visual stability of the page.
                </p>
              </div>
            </div>
            <div className="items  d-flex gap-2">
              <div className="items_icon">
                <Image
                  width={50}
                  height={50}
                  src={"/assets/images/icons/bars.png"}
                  alt="bars.png"
                />
              </div>
              <div>
                <h5 className="fontHeading fontWeight700">High-quality backlinks</h5>
                <p className="mt-2">
                  Backlinks represent another website's traffic coming to your
                  own site. It can help you rank higher in search engine result
                  pages (SERPs).
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
