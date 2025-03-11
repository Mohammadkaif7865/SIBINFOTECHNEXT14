import Image from "next/image";
import React from "react";

const BrandBuild = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6 pe-5">
            <Image
            className="w-100 h-100"
              src="https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png"
              width={500}
              height={400}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h4 className="large_heading2 fontWeight600  fontHeading2 text_red"> 
              Brand, Build, and Grow Your Business Today 

            </h4>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandBuild;
