import Image from "next/image";
import React from "react";

// External array containing data for list items
const listItemsData = [
  [
    "Link building focused on e-commerce",
    "E-commerce SEO Audit",
    "Implementing several marketing techniques",
    "Website's blog optimization and maintenance",
    "Transparent progress reports and statistics",
  ],
  [
    "Deep market analysis for keywords",
    "Competitor research",
    "Shop's structure optimization",
    "Website's home page optimization",
    "Category page optimization",
    "Products page optimization",
  ],
  [
    "Unique Title and Meta Description",
    "Heading Tag and Image Optimization",
    "Website content audit and optimization",
    "Cart and checkout page optimization",
    "Sale Funnel Optimization",
  ],
];

const ECStrategy = () => {
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Image
              width={500}
              height={500}
              quality={100}
              className="image-full  w-100 h-auto"
              src="/assets/images/ecommerce-seo-strategy.svg"
              alt="ecommerce-seo-strategy"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="customHeading mt-4">
              <span className="text_red">E-Commerce optimization</span> strategy
              at SIB Infotech
            </h3>
            <p className="customText">
              We have been helping e-Commerce websites for more than 15 years,
              to grow with the help of SEO to reach the first page of Google
              results. We embed proven techniques to yield results as per your
              business needs.
            </p>
            <p className="customText">
              We understand that the promotion of your e-Commerce website
              through SEO is the crucial key to the growth of your business
              along with digital marketing campaigns.
            </p>
            <p className="customText">
              SEO has the foremost progressive impact on the organic visibility
              of your e-Commerce website, but it is crucial to choose a
              professional and reliable SEO agency that has the solution to all
              problems of the search engine algorithms alongside experience in
              delivering flexible services and results.
            </p>
            <p className="customText">
              Our optimization strategies assure long-lasting and profitable
              results that can take your business to the topmost levels of the
              e-Commerce industry's ladder.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {listItemsData.map((list, index) => (
            <div key={index} className="col-lg-4">
              <div className="list-box">
                <ul>
                  {list.map((item, i) => (
                    <li key={i}>
                      <p className="customText">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECStrategy;
