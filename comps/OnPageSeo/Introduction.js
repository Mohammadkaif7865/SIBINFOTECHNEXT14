import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row my-3">
          <div className="col-md-5">
            <Image
              width={400}
              height={400}
              quality={100}
              className=" w-100  image-full h-auto"
              src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/on-page-seo-company-in-india-mumbai.svg"
              alt="on-page-seo-company-in-india"
            />
          </div>
          <div className="col-md-7">
            <p className="customText">
              Search Engine Optimisation(SEO) is one of the best tools to drive
              valuable traffic to your website, it helps to acquire new leads
              and your website runs far more efficiently.
            </p>
            <p className="customText">
              On-page SEO is considered to be the fundamental factor of Search
              Engine Optimisation strategies. Experts believe that on-page
              optimization must be prioritized constantly.
            </p>
            <p className="customText">
              On-page SEO is the sub-category that is useful in optimizing the
              on-page contents of your website which boosts your website ranking
              higher on search engines. It focuses on website tools like
              structure, content, and appearance. It includes the optimization
              of HTML tags and images on the website of your brand.
            </p>
            <p className="customText">
              There are numerous factors that search engines consider while
              ranking the websites, these factors are mentored and maintained
              under on-page SEO strategies. These factors highly influence any
              brand's website rankings to a great extent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
