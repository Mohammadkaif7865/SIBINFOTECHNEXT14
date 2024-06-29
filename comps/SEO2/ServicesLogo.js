import Image from "next/image";
import React from "react";

const ServicesLogo = () => {
  return (
    <div className="servicesLogomain">
      <div className="containerFull ">
        <div className="servicesLogomain_inner">
          <div className="servicesLogo">
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/website.png"}
                alt="website"
              />
              <p className="text-center">Website</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/dashboard.png"}
                alt="website"
              />
              <p className="text-center">Analysis</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/writer.png"}
                alt="website"
              />
              <p className="text-center">Content</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/website (1).png"}
                alt="website"
              />
              <p className="text-center">Traffic</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/backlink.png"}
                alt="website"
              />
              <p className="text-center">Backlink</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/ranking.png"}
                alt="website"
              />
              <p className="text-center">Ranking</p>
            </div>
          </div>
          <div className="servicesLogo-content">
            {" "}
            <h4 class="small_heading fontHeading text-center    fontWeight500">
              An Award Winning{" "}
              <span class="text_red">
                Best Website Design &amp; Digital Growth Agency
              </span>{" "}
              in India that Designs, Develops &amp; Delivers
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLogo;
