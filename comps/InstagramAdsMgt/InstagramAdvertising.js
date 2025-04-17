import Image from "next/image";
import React from "react";

const InstagramAdvertising = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="customHeading fontHeading">
              How <span>Instagram advertising </span>can help your company ?
            </h3>
            <p className="customText">
              Your brand becomes what people think it is'. The advertising
              agencies play a crucial role in creating an imprint on people’s
              minds about your brand and its offerings. The marketing company is
              responsible for handling your advertisement content to engage in
              huge traffic and create a crazy-buzz about your brand.
            </p>
            <p className="customText">
              Instagram is a platform where anything can go viral with the help
              of hashtags. It can help businesses tremendously to reach their
              target audience with much less efforts. To list a few benefits of
              Instagram advertising.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="tiktok-img-section">
              <Image
                width={400}
                height={350}
                quality={100}
                className="image-full h-auto"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/instagram-ads-management-services-in-delhi.png"
                alt="Instagram-Ads-Management-Agency-In-Mumbai"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramAdvertising;
