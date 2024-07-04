import Image from "next/image";
import React from "react";

const OutsourcingServices = () => {
  return (
    <section className="OutsourcingServices">
      <div className="containerFull ">
        <div className="row  ">
          <div className="col-lg-6">
            <h3 className="fontHeading accordion  sub_heading fontWeight600">
              100% White Label
              <span className="text_blue_light ">
                {" "}
                SEO Outsourcing Services
              </span>
              For SEO Resellers
            </h3>
            <p className="title mt-lg-3">
              Get customized and detailed SEO services from our White Label SEO.
              Join us to cater intricacies of your agency or client's
              satisfaction with a tailored strategy, transparency of work,
              online presence, and proper records tracking.
            </p>
            <p className="title mt-lg-4">
              {" "}
              So enjoy with us all the benefits of SEO like keyword
              optimization, higher ranking in search engines, increased traffic,
              and enhanced loading, and watch your business grow.
            </p>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0 ">
            <Image
              width={400}
              height={400}
              quality={100}
              className="bg-white border-2 shadow rounded-2  w-100 h-auto"
              src="/assets/images/icons/no-lock.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingServices;
