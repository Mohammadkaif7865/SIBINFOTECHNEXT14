import Image from "next/image";
import React from "react";

const SeoTools = () => {
  const tools2 = [
    {
      title: "Organic Sessions ",
      ranking: "2 Billion+",
      src: "/assets/images/icons/services/laptop.png",
      alt: "Organic Sessions ",
    },
    {
      title: "#1 Ranking Keywords",
      ranking: "50000+",
      src: "/assets/images/icons/services/rankings.png",
      alt: "rankings",
    },
    {
      title: "Clicks",
      ranking: "1.8 Billion+",
      src: "/assets/images/icons/services/click.png",
      alt: "click",
    },
    {
      title: "Users",
      ranking: "900 Million+",
      src: "/assets/images/icons/services/user.png",
      alt: "users",
    },
    {
      title: "Awards & Recognition",
      ranking: "40+",
      src: "/assets/images/icons/services/medals.png",
      alt: "Awards & Recognition",
    },
    {
      title: "Leads",
      ranking: "1.5 Million +",
      src: "/assets/images/icons/services/lead-generation.png",
      alt: "lead-generatio",
    },
  ];
  const tools = [
    {
      src: "/assets/images/google-search-console.webp",
      alt: "Google Search Console Logo",
    },
    {
      src: "/assets/images/moz.webp",
      alt: "Moz Logo",
    },
    {
      src: "/assets/images/searchmetrics.webp",
      alt: "Searchmetrics Logo",
    },
    {
      src: "/assets/images/semrush.webp",
      alt: "Semrush Logo",
    },
    {
      src: "/assets/images/ahrefs.webp",
      alt: "ahrefs Logo",
    },
    {
      src: "/assets/images/screamingfrog.webp",
      alt: "Screaming Frog Logo",
    },
    {
      src: "/assets/images/similarweb.webp",
      alt: "Similar Web Logo",
    },
    {
      src: "/assets/images/rankwatch.webp",
      alt: "Rankwatch Logo",
    },
    {
      src: "/assets/images/ubersuggest.webp",
      alt: "Ubersuggest Logo",
    },
    {
      src: "/assets/images/kwfinder.webp",
      alt: "KW finder Logo",
    },
    {
      src: "/assets/images/spy-fu.webp",
      alt: "Spy Fu Logo",
    },
    {
      src: "/assets/images/quilbot.webp",
      alt: "Quilbot Logo",
    },
  ];
  return (
    <section className="">
      <div className="containerFull ">
        <h3 className="large_heading text-center fontHeading fontWeight600 fontHeading">
          Our White Label SEO Results
        </h3>
        <div className="seo_result mt-5">
          <div className="seo_result_left ">
            {/* 1 */}
            <div className="seo_result_left_inner ">
              <div className="items1">
                <Image
                  className="object-fit-contain w-100 h-100 "
                  width={400}
                  height={500}
                  quality={100}
                  src={
                    "/assets/images/rnb-global-university-kota-city-kota-rajasthan-colleges.webp"
                  }
                  alt="rnb"
                />
              </div>
              <div className=" items2_main">
                <div className="">
                  <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                    +200%{" "}
                    <Image
                      className="h-auto"
                      width={40}
                      height={40}
                      src={"/assets/images/icons/seo-result/rise.png"}
                      alt="rnb"
                    />
                  </h4>
                  <p className="fontWeight600  small_heading ">
                    Organic Growth
                  </p>
                </div>
                <div className="content fontWeight500 w-100 mt-3">
                  <p>300+ Impresion</p>
                  <p>270% Clicks</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="seo_result_left_inner mt-lg-3 flex-row-reverse ">
              <div className="items1 ">
                <Image
                  className="object-fit-contain w-100 h-100 "
                  width={400}
                  height={500}
                  quality={100}
                  src={"/assets/images/veeraco.webp"}
                  alt="veeraco"
                />
              </div>

              <div className=" items2_main">
                <div className="">
                  <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                    +1089%{" "}
                    <Image
                      className="h-auto"
                      width={40}
                      height={40}
                      src={"/assets/images/icons/seo-result/rise.png"}
                      alt="rnb"
                    />
                  </h4>
                  <p className="fontWeight600  small_heading ">
                    Organic Growth
                  </p>
                </div>
                {/* <div className="content fontWeight500 w-100 mt-3">
                  <p>300+ Impresion</p>
                  <p>270% Clicks</p>
                </div> */}
              </div>
           
            </div>
            {/* 3 */}
            <div className="seo_result_left_inner mt-lg-3">
              <div className="items1 bmc" >
                <Image
                  className="object-fit-cover w-100 h-100 "
                  width={400}
                  height={150}
                  quality={100}
                  src={"/assets/images/BMC.jpg"}
                  alt="BMC Election"
                />
              </div>
              <div className=" items2_main">
                <div className="">
                  <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                    +200%{" "}
                    <Image
                      className="h-auto"
                      width={40}
                      height={40}
                      src={"/assets/images/icons/seo-result/rise.png"}
                      alt="rnb"
                    />
                  </h4>
                  <p className="fontWeight600  small_heading ">
                    Organic Growth
                  </p>
                </div>
                <div className="content fontWeight500 w-100 mt-3">
                  <p>300+ Impresion</p>
                  <p>270% Clicks</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" seo_result_right mt-4 mt-lg-0 ">
            {tools2.map((value, i) => {
              return (
                <div className="items d-flex align-items-center justify-content-center px-3  shadow rounded-3 border ">
                  <div>
                    <Image
                      className="mx-auto d-block "
                      width={50}
                      height={50}
                      src={value.src}
                      alt="loading"
                    />
                    <p
                      className=" text-center my-2"
                      style={{ fontSize: "12px" }}
                    >
                      {value.title}
                    </p>

                    <h4 className="text-center  fontWeight500">
                      {value.ranking}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="containerFull">
        <div className="row mt-5">
          <div className="col-lg-12">
            <h3 className="sub_heading fontWeight500 fontHeading mt-4">
              Some of the Best SEO Tools for Auditing & Monitoring Effective SEO
              used by us.
            </h3>
          </div>
        </div>

        <div className="row mt-lg-3 ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="col-lg-2 col-6 col-sm-3 position-relative"
            >
              <div className="toolsLogo">
                <Image
                  className=" h-auto w-100 h-50"
                  src={tool.src}
                  alt={tool.alt}
                  quality={100}
                  width={180}
                  height={48}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoTools;
