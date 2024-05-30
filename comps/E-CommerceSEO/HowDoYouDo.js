import Image from "next/image";
import React from "react";

const HowDoYouDo = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Image
              width={400}
              height={400}
              quality={100}
              className="image-full h-auto"
              src="/assets/images/ecommerce-seo-product-pages.svg"
              alt="ecommerce-seo-company-in-mumbai"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="customHeading">
              How do you do <span>e-Commerce SEO</span> for product pages?
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
        </div>
      </div>
    </section>
  );
};

export default HowDoYouDo;
