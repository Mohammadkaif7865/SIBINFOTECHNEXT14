import Image from "next/image";
import React from "react";

const WhyNeed = () => {
  return (
    <section className="">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
            <h3 className="customHeading">
              Why do I need an <span className="text_red">e-Commerce SEO </span>
              expert?
            </h3>
            <p className="customText">
              Your e-Commerce website is much different than a typical website.
              You have a web of content from informational pages to products and
              categories. Optimizing each of these sections and connecting them
              together in a logical way (i.e., one that "pleases" search engine
              algorithms) is extremely important for the success of any
              E-commerce SEO campaign. With hundreds of E-commerce search
              marketing clients, we have the ability to look at what has worked
              for them and apply the same strategies to your website. Don't fall
              for an SEO company who will be learning how to optimize your
              online store "on the fly" while on the job.
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <Image
              width={500}
              height={400}
              quality={100}
              className="image-full h-auto"
              src="/assets/images/ecommerce-seo-company-in-delhi.svg"
              alt="ecommerce-seo-company-in-delhi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeed;
