import Image from "next/image";
import React from "react";

const Services = () => {
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
    <section>
      <div className="containerFull">
        <h4 className="sub_heading fontHeading fontWeight700 mb-3 text-center">Discover the Extra in <span class="text_red">Our Graphic Design Services</span> </h4>
        <div className="mt-5 row position-relative">
          <div className="col-lg-7">
            {gd_services.map((service, index) => (
              <div className="p-4 b gd_services mb-4 shadow" key={index}>
                <h4 className="fontHeading small_heading fontWeight600 mb-3">{service.category}</h4>
                <ul className="list_gd row row-cols-2">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-lg-5 position-relative">
            <div className="img_gd_services">
              <Image width={600} height={700} src={'/assets/images/gd-services/graphic-design.jpg'} alt="" />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
