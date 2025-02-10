import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="leftBenefits">
              <h4 className="sub_heading fontHeading fontWeight700">
                Why is <span className="text_red">Local SEO Services</span> important for your Business?
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

              <ul className="mt-4 list_benifits_lseo">
            <li>Increases your online visibility</li>
            <li>Helps you stand out from the competition</li>
            <li>Build trust with local customers</li>
            <li>Gaining repeat customers</li>
            <li>Builds trust with high rankings</li>
            <li>Increased local reviews</li>
            <li>Reduced advertisement expenses</li>
            <li>Exposure to local business directories</li>
        </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="w-100 h-100 img_benifits ">
                <Image className="w-100 h-100 object-fit-cover" src="/assets/images/local-seo/top-view-tools-marketing.jpg" alt="" width="1050" height="600"  />

            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
