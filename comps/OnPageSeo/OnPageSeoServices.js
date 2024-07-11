import Image from "next/image";
import React from "react";

const ServiceBox = ({ iconSrc, altText, title, description, yellowBg }) => {
  return (
    <div className={`services-box `}>
      <div className={`icon-circle ${yellowBg ? "bg-yellow" : ""}`}>
        <Image
          width={35}
          height={35}
          className="object-fit-contain"
          src={iconSrc}
          alt={altText}
        />
      </div>
      <div className="content">
        <h4 className="fontHeading ">{title}</h4>
        <p className="customText">{description}</p>
      </div>
    </div>
  );
};

const OnPageSeoServices = () => {
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="customHeading text-center fontHeading">
              On page <span className="text_red">SEO services</span>
            </h3>
            <div className="box-row-1 mt-4">
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-content123.svg"
                altText="Website content"
                title="Website content"
                description="it is what the audience looks for"
                yellowBg
              />
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-title.png"
                altText="Meta tags"
                title="Meta tags"
                description="these are responsible for providing info about your website to the search engines and are useful for increasing CTR"
              />
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-url.png"
                altText="URLs"
                title="URLs"
                description="these increase the visibility of your website. Google looks for URL integrated content on websites, URLs play a crucial role in increasing your website's rank"
                yellowBg
              />
            </div>
            <div className="box-row-1">
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-browser.png"
                altText="Title tags"
                title="Title tags"
                description="the first thing audience sees is the title and it the sole factor that helps them to determine if they want to visit or skip the website"
              />
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-keywords.png"
                altText="Keywords"
                title="Keywords"
                description="when relevant keywords are integrated in the website content, it makes it far more attractive and useful for the audience leading to more traffic"
                yellowBg
              />
              <ServiceBox
                iconSrc="/assets/images/icons/on-page-seo-content123.svg"
                altText="Website content"
                title="Website content"
                description="these are responsible for providing info about your website to the search engines and are useful for increasing CTR"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnPageSeoServices;
