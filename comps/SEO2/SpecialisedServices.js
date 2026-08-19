
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialisedServices = () => {
  // Define an array of service objects
  const services = [
    {
      icon: "shopping-cart.webp",
      title: "eCommerce SEO",
      link: "/e-commerce-seo-services",
    },
    { icon: "plane.webp", title: "Travel SEO" },
    { icon: "folder.webp", title: "SEO for News Website" },
    { icon: "amazon.webp", title: "Amazon SEO" },
    { icon: "shopify.webp", title: "Shopify SEO", link: "/shopify-seo-services" },
    { icon: "bars.webp", title: "Finance SEO" },
    { icon: "localseo.webp", title: "Local SEO", link: "/local-seo-services" },
    { icon: "building.webp", title: "Real Estate SEO" },
    { icon: "health.webp", title: "Health Care SEO" },
    {
      icon: "repair.svg",
      title: "Google Penalty Removal",
      link: "/google-penalty-recovery",
    },
    {
      icon: "regional-seo-language.svg",
      title: "International SEO",
      link: "/multilingual-seo-services",
    },
    { icon: "video-ads.svg", title: "YouTube SEO", link: "/youtube-marketing" },
    {
      icon: "smartphone.svg",
      title: "App Store Optimization (ASO)",
      link: "/app-store-optimization",
    },
  ];

  return (
    <section className="bgSpecialized">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-10">
            <h2 className="heading text-white fontWeight600 ">
              Our Specialised Search Engine Optimization Services:
            </h2>
          </div>
        </div>
        <div className="mt-lg-4 mt-4 row">
          {/* Map over the services array to render each service */}
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-6 col-sm-4">
              {service.link ? (
                <Link href={service.link} className="itemSpecialization">
                  <div className="iconSpecialization">
                    <picture>
                      <Image
                        width={50}
                        height={50}
                        className="h-auto"
                        src={`/assets/images/icons/${service.icon}`}
                        alt={service.title}
                      />
                    </picture>
                  </div>
                  <p className="title ">{service.title}</p>
                </Link>
              ) : (
                <div className="itemSpecialization">
                  <div className="iconSpecialization">
                    <picture>
                      <Image
                        width={50}
                        height={50}
                        className="h-auto"
                        src={`/assets/images/icons/${service.icon}`}
                        alt={service.title}
                      />
                    </picture>
                  </div>
                  <p className="title ">{service.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialisedServices;
