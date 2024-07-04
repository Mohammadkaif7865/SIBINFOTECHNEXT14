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
                src={"/assets/images/icons/services/web.png"}
                alt="website"
              />
              <p className="text-center">Website</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/Analysis.png"}
                alt="website"
              />
              <p className="text-center">Analysis</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/Content.png"}
                alt="website"
              />
              <p className="text-center">Content</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/Traffic.png"}
                alt="website"
              />
              <p className="text-center">Traffic</p>
            </div>
            <div className="items">
              <Image
                width={40}
                height={40}
                src={"/assets/images/icons/services/Backlinks.png"}
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
            <h4 class="small_heading fontHeading text-center  fontWeight900  fontWeight500">
            Your Next  <span class="text_red">
            SEO Agency In India   
              </span> - Trusted By Over 1000+ Companies
             
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLogo;
