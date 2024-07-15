import Image from "next/image";
import React from "react";

const AdsType = () => {
  const adTypes = [
    {
      imgSrc: "/assets/images/icons/facebook-ads-managemnet-image-ads.svg",
      alt: "Facebook ads managemnet ads",
      title: "Image Ads",
      description:
        "These ads contain images that are responsible for spreading brand awareness. These are designed in a way that the users remember your brand even if they saw it once. These ads are found everywhere and are a great source to boost brand awareness and generate new leads.",
    },
    {
      imgSrc:
        "/assets/images/icons/facebook-ads-managemnet-local-awareness-ads.svg",
      alt: "facebook-ads-managemnet-local-awareness-ads",
      title: "Local awareness ads",
      description:
        "These ads help businesses to reach customers in their local geographical area. This ad targets the audience according to their physical proximity to your store.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-managemnet-video-ads.svg",
      alt: "facebook-ads-managemnet-video-ads",
      title: "Video ads",
      description:
        "These ads are the most powerful way to engage the audience. People are attracted to videos and GIFs instantly; this leads to a great platform to advertise your products with a short or detailed video.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-managemnet-link-click-ads.svg",
      alt: "facebook-ads-managemnet-link-click-ads",
      title: "Link click ads",
      description:
        "These ads are the most commonly used by marketers. It allows us to place images, write ad content and add the external link of the landing page.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-managemnet-carousel-ads.svg",
      alt: "facebook-ads-managemnet-carousel-ads",
      title: "Carousel ads",
      description:
        "These ads are beneficial to promote multiple products at once. You can showcase 10 products where each product leads to its page on the store.",
    },
    {
      imgSrc:
        "/assets/images/icons/facebooc-ads-management-website-traffic.svg",
      alt: "facebooc-ads-management-website-traffic",
      title: "Increase in website traffic",
      description:
        "Responsive web pages work smoothly on all devices like desktops, mobiles, smartphones and tablets. This makes the website accessible to the majority of Internet users and leads to greater traffic rates.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-management-offer-ads.svg",
      alt: "facebook-ads-management-offer-ads",
      title: "Offer ads",
      description:
        "These ads display the current appealing and attractive offers to the audience. These ads attract huge mass by displaying store coupon offers, discounts, free trials or gifts.",
    },
    {
      imgSrc:
        "/assets/images/icons/facebook-ads-managemnt-dynamic-product-ads.svg",
      alt: "facebook-ads-managemnt-dynamic-product-ads",
      title: "Dynamic product ads",
      description:
        "It is an advanced type of ad that targets the audience according to their previous actions. These ads are useful for remarketing; it delivers the right message at the right time to the right people if they have ever interacted with your website.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-management-canvas-ads.svg",
      alt: "facebook-ads-management-canvas-ads",
      title: "Canvas ads",
      description:
        "These ads are used to build landing pages with the brand logo, text and images of your products and services. These ads are highly flexible and versatile that enable you to implement vivid creative expressions.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-management-collection-ads.svg",
      alt: "facebook-ads-management-collection-ads",
      title: "Collection ads",
      description:
        "These ads feature a set of products that your brand offers on the website. These ads are useful for eCommerce stores with a diverse range of products, these ads engage the audience with a similar type of products they looked earlier.",
    },
    {
      imgSrc: "/assets/images/icons/facebook-ads-management-slidshow-ads.svg",
      alt: "facebook-ads-management-slidshow-ads",
      title: "Slideshow ads",
      description:
        "Facebook slide show ads are the type of facebook advertisement where video-like ads use a series of still images and effects that show motion, play sound, and display text to showcase your story. This is the best type of ad format to showcase your products and services.",
    },
  ];

  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <h3 className="customHeading text-center fontWeight800">
          Different type of<span className="text_red"> facebook ads</span>
        </h3>
        <div className="row">
          {adTypes.map((ad, index) => (
            <div className="col-lg-3" key={index}>
              <div className="fb-ads-management-box">
                <Image width={100} height={100} src={ad.imgSrc} alt={ad.alt} />
                <h4 className="fontWeight800">{ad.title}</h4>
                <p className="customText">{ad.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsType;
