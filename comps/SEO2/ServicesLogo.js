import Image from "next/image";
import React from "react";

const ServicesLogo = () => {
  return (
    <div className="servicesLogomain">
      <div className="containerFull ">
        <div className="servicesLogomain_inner">
          <div className="servicesLogo">
            <div className="items">
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/web.webp"}
                alt="website"
              />
              <p className="text-center">Website</p>
            </div>
            <div className="items">
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/Analysis.webp"}
                alt="website"
              />
              <p className="text-center">Analysis</p>
            </div>
            <div className="items">
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/Content.webp"}
                alt="website"
              />
              <p className="text-center">Content</p>
            </div>
            <div className="items">
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/Traffic.webp"}
                alt="website"
              />
              <p className="text-center">Traffic</p>
            </div>
            <div className="items">
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/Backlinks.webp"}
                alt="website"
              />
              <p className="text-center">Backlink</p>
            </div>
            <div className="items">
              
              <Image className=""
                width={60}
                height={40}
                src={"/assets/images/icons/services/ranking.webp"}
                alt="website"
              />
              <p className="text-center">Ranking</p>
            </div>
          </div>
          <div className="servicesLogo-content">
            {" "}
            <h4 className="small_heading fontHeading text-center  fontWeight900  fontWeight500">
            Your Next  <span className="text_red">
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
