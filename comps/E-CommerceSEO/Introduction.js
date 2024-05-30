import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <p className="customText text-justify">
              E-commerce Search Engine Optimization is a technique of making
              your online store highly noticeable on the SERPs (Search Engine
              Result Pages) when the audience searches for products and services
              that your company sells. The agenda accomplished through
              e-Commerce SEO is simple; the higher the page rank, the higher is
              the traffic engagement on your webpage.
            </p>
            <p className="customText text-justify">
              What does a user do when they require a specific product or
              service? A majority of them go through Google searches to look for
              options, tips along with useful information that helps them to
              decide which option they need. If a website fails to reach the top
              SERPs it loses the advanced reach to interested customers.
            </p>
            <p className="customText">
              Your business website must be loaded with products but are they
              visible to the potential users? At this point confusion,
              e-Commerce SEO plays the main role to target the potential
              customers to your website without paying a single penny for ads.
              If you are able to attract people at least once to your company
              website, display and mesmerize them with high-quality products and
              intriguing offers motivating them to buy your services.
            </p>
            <p className="customText">
              Online platforms or search engines are considered to be the most
              reliable way to digitally grow your business and boost sales.
              Search Engine Optimization techniques are the best tools to
              increase organic traffic to your web store or e-Commerce website.
              SEO tools are beneficial for all the businesses might it be an
              online shopping company or a market business.
            </p>
            <p className="customText">
              E-Commerce SEO optimizes all the visual elements of your website
              including pictures and videos along with product Title, product
              descriptions, metadata, internal link structure, etc. It adds all
              the crucial offers and products to the website and includes the
              promotion of your store on social media platforms.
            </p>
          </div>
          <div className="col-lg-6">
            <Image
              width={500}
              height={500}
              quality={100}
              className="image-full w-100 h-auto "
              src="assets/images/best-ecommerce-seo-company-in-india.svg"
              alt="best-ecommerce-seo-company"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
