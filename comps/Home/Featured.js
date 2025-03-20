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
    <section>
      <div className="containerFull">
        <h3 className="sub_heading fontWeight500 fontHeading">
          We can Get Featured you on Top News Websites
        </h3>
        <div className="mt-3 row row-cols-2 row-cols-lg-5">
        
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
