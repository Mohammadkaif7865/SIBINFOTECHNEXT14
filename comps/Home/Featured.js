import Image from "next/image";
import React from "react";

const Featured = () => {
  const newsWebsites = [
    { logo: "abc-news.webp", alt: "abc-news" },
    { logo: "associated-press.webp", alt: "associated-press" },
    { logo: "buzzfeed.webp", alt: "buzzfeed" },
    { logo: "cnn.webp", alt: "CNN" },
    { logo: "forbes.webp", alt: "forbes" },
    { logo: "fox.webp", alt: "fox" },
    { logo: "google-news.webp", alt: "google-news" },
    { logo: "huffpost.webp", alt: "huffpost" },
    { logo: "ibt.webp", alt: "ibt" },
    { logo: "msnbc.webp", alt: "MSNBC" },
    { logo: "nbc.webp", alt: "nbc" },
    { logo: "pbs.webp", alt: "pbs" },
    { logo: "the-new-york-times.webp", alt: "The New York Times" },
    { logo: "usa-today.webp", alt: "USA Today" },
    { logo: "yahoo.webp", alt: "Yahoo" },
  ];

  return (
    <section className="featured_home">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h5 className="fontWeight600">Media Coverage</h5>
            <h3 className="large_heading2 fontWeight300 text_red mt-4">
              We can <span className="fontWeight600">Get Featured</span> you on{" "}
              <span className="fontWeight600">Top News Websites</span>
            </h3>
          </div>
          <div className="col-lg-5 mt-3 mt-lg-0">
            <p className="ps-lg-5 text-center text-lg-start">
              Boost your brand’s credibility and visibility by getting published
              on leading news platforms. Our PR and outreach services help you
              earn high-authority backlinks, improve SEO rankings, and build
              instant trust with your audience
            </p>
          </div>
        </div>
        <div className="mt-lg-5 mt-3 row row-cols-2 row-cols-lg-5">
          {newsWebsites.map((website, index) => (
            <div key={index} className="col px-2 px-lg-3">
              <div className="newsLogo">
                <Image
                  width={200}
                  height={100}
                  quality={100}
                  className=" h-auto object-fit-contain "
                  src={`/assets/images/news-logo/${website.logo}`}
                  alt={website.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
