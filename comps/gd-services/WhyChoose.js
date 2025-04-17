import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  const benefitsList = [
    {
      title: "Experienced Designers",
      description:
        "Our expert team brings creativity and innovation to every project.",
      icon: "web-design.png",
    },
    {
      title: "Tailored Designs",
      description:
        "We create designs that align with your brand's identity and goals.",
      icon: "front-end-programming.png",
    },
    {
      title: "High-Quality Graphics",
      description: "Stunning visuals that make a lasting impression.",
      icon: "illustration.png",
    },
    {
      title: "Quick Turnaround",
      description: "We deliver designs promptly without compromising quality.",
      icon: "refresh.png",
    },
    {
      title: "Affordable Pricing",
      description: "Premium designs at competitive rates.",
      icon: "affordable.png",
    },
    {
      title: "Affordable Pricing",
      description: "Premium designs at competitive rates.",
      icon: "affordable.png",
    },
  ];

  return (
    <section className="">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8">
            <div className="leftBenefits">
              <h4 className="sub_heading fontHeading fontWeight700">
                Why Choose Us?
              </h4>

              <ul className="mt-4 gd_why_grid">
                {benefitsList.map((benefit, index) => (
                  <li key={index} className="item p-3  bgGray">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={`/assets/images/gd-services/${benefit.icon}`}
                        alt={benefit.title}
                        className=""
                        width="50"
                        height="50"
                      />
                    </div>

                    <div className="mt-3">
                      <span className="d-block fontHeading fontWeight700 title text-center">
                        {benefit.title}
                      </span>

                      <span className=" mt-1 d-block text-dark text-center">
                        {benefit.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0 px-4 px-lg-0">
            <div className="w-100 h-100 img_benifits  ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/gd-services/why-choose.jpg"
                alt=""
                width="1050"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
