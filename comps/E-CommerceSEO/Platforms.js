import Image from "next/image";
import React from "react";

// External array containing platform data
const platformsData = [
  {
    name: "Drupal Commerce",
    src: "/assets/images/icons/drupal.png",
    alt: "DrupalCommerce-websites",
  },
  {
    name: "CS Cart",
    src: "/assets/images/icons/ecommerce-seo-cs-cart.svg",
    alt: "CS-cart-websites",
  },
  {
    name: "Woo Commerce",
    src: "/assets/images/icons/on-page-seo-woo-commerce.png",
    alt: "woo-commerce-websites",
  },
  {
    name: "Opencart",
    src: "/assets/images/icons/ecommerce-seo-opencart.svg",
    alt: "opencart-websites",
  },
  {
    name: "PrestaShop",
    src: "/assets/images/icons/ecommerce-seo-presta-shop.png",
    alt: "Presta-shop-websites",
  },
  {
    name: "Zencart",
    src: "/assets/images/icons/ecommerce-seo-zencart.svg",
    alt: "Zencart-websites",
  },
  {
    name: "Os Commerce",
    src: "/assets/images/icons/ecommerce-seo-os-commerce.svg",
    alt: "os-commerce-websites",
  },
  {
    name: "Big Commerce Websites",
    src: "/assets/images/icons/on-page-seo-big-commerce-website.png",
    alt: "Big-commerce-websites",
  },
  {
    name: "Magento",
    src: "/assets/images/icons/on-page-seo-magento-website.png",
    alt: "Magento-websites",
  },
  {
    name: "Volusion",
    src: "/assets/images/icons/ecommerce-seo-volusion.svg",
    alt: "Volusion-websites",
  },
  {
    name: "Shopify",
    src: "/assets/images/icons/on-page-seo-shopify-website.svg",
    alt: "Shopify-websites",
  },
  {
    name: "Suit Commerce",
    src: "/assets/images/icons/ecommerce-seo-suit-commerce.svg",
    alt: "Suit-commerce-websites",
  },
];

const Platforms = () => {
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="customHeading text-center">
              We have worked on numerous platforms to deliver top-quality
              services to our clients
            </h3>
            <h4 className="text-center">Few of many are listed :</h4>
            <div className="row mt-4">
              {platformsData.map((platform, index) => (
                <div key={index} className="col-lg-2 col-6">
                  <div className="optmize-box">
                    <Image width={100} height={100} quality={100} className=" h-auto" src={platform.src} alt={platform.alt} />
                    <h4>{platform.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
