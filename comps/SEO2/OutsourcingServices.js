import Image from "next/image";
import React from "react";

const OutsourcingServices = () => {
  return (
    <section className="OutsourcingServices m">
      <div className="containerFull ">
        <h3 className="fontHeading accordion text-center sub_heading fontWeight600">
          100% White Label
          <span className="text_blue_light ">
           {" "}  SEO Outsourcing Services
          </span>
         
          For SEO Resellers
        </h3>
        <div className="row mt-3 mt-lg-5">
            <div className="col-lg-5">
                <p className="title mt-lg-5">
                Get customized and detailed SEO services from our White Label SEO. Join us to cater intricacies of your agency or client's satisfaction with a tailored strategy, transparency of work, online presence, and proper records tracking.
                
                </p>
                <p className="title mt-4"> So enjoy with us all the benefits of SEO like keyword optimization, higher ranking in search engines, increased traffic, and enhanced loading, and watch your business grow.</p>

            </div>
            <div className="col-lg-7 mt-3 mt-lg-0">
                <Image width={400} height={400} quality={100} className="border rounded-2 shadow w-100 h-auto" src='/assets/images/outsourcing-services.jpg' alt="" />

            </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingServices;
