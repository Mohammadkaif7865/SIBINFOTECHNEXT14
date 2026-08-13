
import Image from "next/image";
import React from "react";

const SpecialisedServices = () => {
  // Define an array of service objects
  const services = [
    { icon: "shopping-cart.webp", title: "eCommerce SEO" },
    { icon: "plane.webp", title: "Travel SEO" },
    { icon: "folder.webp", title: "SEO for News Website" },
    { icon: "amazon.webp", title: "Amazon SEO" },
    { icon: "shopify.webp", title: "Shopify SEO" },
    { icon: "bars.webp", title: "Finance SEO" },
    { icon: "localseo.webp", title: "Local SEO" },
    { icon: "building.webp", title: "Real Estate SEO" },
    { icon: "health.webp", title: "Health Care SEO" },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialisedServices;
