import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const gd_services = [
    {
      category: "Brand & Identity Design",
      items: [
        "Brand and Identity Design",
        "Logo Designing Services",
        "Business Card Design Services",
        "Stationary Design",
        "Brand Guidelines",
      ],
    },
    {
      category: "Social Media & Digital Marketing Graphics",
      items: [
        "Social Media Images Designing Services",
        "Banner Designing Services",
        "Advertisement Designing Services",
        "Social Media Graphics",
        "Social Media Page",
      ],
    },
    {
      category: "Website & UI/UX Design",
      items: [
        "Website Graphic Designing Services",
        "Innovative UI/UX Design",
        "Website Redesign",
        "Landing Page Design",
        "Other Web or App Design",
      ],
    },
    {
      category: "Marketing & Print Collateral",
      items: [
        "Flyer Designing Services",
        "Print Designing Services",
        "Brochure Designing Services",
        "Banner Designing Services",
        "Pamphlet Designing Services",
        "Menu Design",
        "Poster Design",
        "Presentation Design",
        "Signage",
        "Billboard",
        "Book and Magazine",
      ],
    },
    {
      category: "Packaging & Label Design",
      items: [
        "Image Designing Services",
        "Product Packaging",
        "Food Packaging",
        "Retail Packaging",
        "Cosmetic Packaging",
        "Product Label",
        "Food Label",
        "Beer & Wine Label",
        "Other Packaging Labels",
      ],
    },
    {
      category: "Infographics & Custom Illustrations",
      items: [
        "Infographics Designing Services",
        "Character or Mascot Design",
        "Wedding Invitation",
        "Business Illustration",
      ],
    },
  ];

  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between w-100">
              <h4 className="sub_heading text-white fontWeight700 fontHeading">
                Discover the Extra in Our Graphic Design Services
              </h4>
              <Link className="btnAction d-none d-lg-block" href="/contact-us">
                Connect With Graphics Expert
              </Link>
            </div>
          </div>
        </div>
        <div className="seoMana">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  {gd_services.map((service, index) => (
                    <li
                      key={index}
                      className={activeTab === index ? "active" : ""}
                      onClick={() => handleTabClick(index)}
                    >
                      <div className="d-flex align-items-center">
                        <h4 className="sub_heading me-3 fontHeading fontWeight600">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </h4>
                        <h3 className="small_heading fontHeading fontWeight600">
                          {service.category}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rightMain stickyRight">
                {gd_services.map(
                  (service, index) =>
                    activeTab === index && (
                      <div key={index} className="itemSidebar scroll">
                        <h4 className="sub_heading fontWeight700 fontHeading">
                          {service.category}
                        </h4>
                        <ul className="mt-3 list_gd row row-cols-2">
                          {service.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
