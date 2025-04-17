import Image from "next/image";
import React from "react";

const Benefits = () => {
  const benefitsList = [
    { text: "Increases your online visibility", icon: "visibility.png" },
    {
      text: "Helps you stand out from the competition",
      icon: "competitive-landscape.png",
    },
    { text: "Build trust with local customers", icon: "trust.png" },
    { text: "Gaining repeat customers", icon: "repeat.png" },
    { text: "Builds trust with high rankings", icon: "rank.png" },
    { text: "Increased local reviews", icon: "internal-control.png" },
    { text: "Reduced advertisement expenses", icon: "expense.png" },
    {
      text: "Exposure to local business directories",
      icon: "business.png",
    },
  ];
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-9">
            <div className="leftBenefits">
              <h4 className="sub_heading fontHeading fontWeight700">
                Why is <span className="text_red">Local SEO Services</span>{" "}
                important for your Business?
              </h4>
              <p className="mt-3">
                Local SEO helps you connect with potential customers in your
                local area, driving more traffic to your website and,
                ultimately, more foot traffic to your store.
              </p>
              <p className="mt-3">
                Local SEO is your secret weapon to attracting customer’s right
                in your backyard. By optimizing your website for local searches,
                you increase both online visibility and foot traffic to your
                store. It's the perfect way to connect with nearby customers who
                are already searching for what you offer, which can then
                increase sales and foster solid community ties.
              </p>
              <ul className="mt-4  l_benifits_grid  ">
                {benefitsList.map((benefit, index) => (
                  <li key={index} className="p-3 item  bgGrey">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={`/assets/images/local-seo/${benefit.icon}`}
                        alt="Check Icon"
                        className="me-2 "
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="text-center mt-2">{benefit.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0 px-4 px-lg-0">
            <div className="w-100 h-100 img_benifits  ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/local-seo/l-seo.jpg"
                alt=""
                width="600"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
