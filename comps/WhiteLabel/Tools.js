import Image from "next/image";
import React from "react";

const Tools = () => {
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
    <section className="trusted  white-lable-tool">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="heading text-center text-white fontWeight300">
              Some of the <span className="fontWeight600">Best SEO Tools</span>{" "}
              for{" "}
              <span className="fontWeight600">
                Auditing & Monitoring Effective SEO{" "}
              </span>
              used by us.
            </h3>
          </div>
        </div>
      
        <div className="row mt-lg-3">
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

export default Tools;
