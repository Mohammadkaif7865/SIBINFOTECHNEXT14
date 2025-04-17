import Image from "next/image";
import React from "react";

const ListItem = ({ text }) => (
  <li>
    <p className="customText">{text}</p>
  </li>
);

const Invest = () => {
  const list1Items = [
    "Deep keyword research & analysis",
    "Focus on trending keywords",
    "Integration of On-Page technical elements",
    "Decreases cost per acquisition",
    "Improving title tags and description metatags",
    "Creating efficient, fresh and quality content",
    "Optimize the website's content",
  ];

  const list2Items = [
    "Improve page speed",
    "Integrate responsive website design",
    "Enhance and add visual content",
    "Improve page speed",
    "Integrate responsive website design",
    "Monthly progress reports and statistics",
    "Crawl error optimization",
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <h3 className="customHeading mt-4 text-center">
          Invest in <span className="text_red">on-page SEO </span>services from
          SIB Infotech
        </h3>
        <p className="customText text-center">
          Our On-page SEO services are the best you can get for your website.
          Our service can be the ultimate solution for your website to bring it
          to the top or most visited search results on the search engines.Our
          experts implement their experience, knowledge, and excellence to
          improve your website's SEO performance and optimize it to take your
          business to the new heights of success.
        </p>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="invest-row mt-4">
              <div className="list-box">
                <ul>
                  {list1Items.map((item, index) => (
                    <ListItem key={index} text={item} />
                  ))}
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  {list2Items.map((item, index) => (
                    <ListItem key={index} text={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <Image
              width={450}
              height={450}
              alt="on-page-seo-invest"
              className="image-full w-100 h-auto "
              src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/on-page-seo-invest.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
