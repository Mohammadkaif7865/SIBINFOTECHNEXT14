
import Image from "next/image";
import React from "react";

const SpecialisedServices = () => {
  // Define an array of service objects
  const services = [
    { icon: "shopping-cart.png", title: "eCommerce SEO" },
    { icon: "plane.png", title: "Travel SEO" },
    { icon: "folder.png", title: "SEO for News Website" },
    { icon: "amazon.png", title: "Amazon SEO" },
    { icon: "shopify.png", title: "Shopify SEO" },
    { icon: "bars.png", title: "Finance SEO" },
    { icon: "localseo.png", title: "Local SEO" },
    { icon: "building.png", title: "Real Estate SEO" },
    { icon: "health.png", title: "Health Care SEO" },
  ];

  return (
    <section className="bgSpecialized">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-10">
            <h3 className="sub_heading text-white fontWeight500 fontHeading">
              Our Specialised Search Engine Optimization Services:
            </h3>
          </div>
        </div>
        <div className="mt-lg-5 row">
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
                <p className="title fontHeading">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialisedServices;
