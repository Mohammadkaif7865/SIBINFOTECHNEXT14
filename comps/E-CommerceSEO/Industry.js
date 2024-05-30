import Link from "next/link";
import React from "react";

const Industry = () => {
  return (
    <section className="">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-8  graphic-why-us-right ECIndustry">
            <h3 className="customHeading text-white customLineHeight">
              Pro-active experience with a diverse range of e-Commerce platforms
            </h3>
            <p className="customText text-off-white">
              Our SEO experts and developers have paralleled with a variety of
              e-Commerce platforms, be it open-source or hosted. Such experience
              enables us to provide your company platform-specific SEO
              consultations even on short notices.
            </p>
            <p className="customText text-off-white">
              We also work with custom cart solutions without any worries.
            </p>
            <p className="customText text-off-white">
              E-Commerce SEO is essential for all the shops that operate on
              online platforms. A well-optimized website ranks higher on the
              SERPs and leads to boosted sales and more traffic. We follow a
              structured approach to assure 100% results for your e-Commerce
              website.
            </p>
            <p className="customText text-off-white">
              We have accomplished remarkable and enduring results for our
              clients who availed our e-Commerce SEO solutions, and we know that
              we can do the same for your business.
            </p>
            <p className="customText text-off-white mb-0">
              In case you want to try our services and ensure what we can do for
              you, claim a free no-obligation SEO audit right now!
            </p>
          </div>
          <div className="col-lg-4">
            <div className="graphic-why-us-left mt-lg-0 mt-3">
              <h3>Are you ready to lead the</h3>
              <h1>
                <span className="text_red">e-Commerce</span> marketing industry?
              </h1>
              <Link className="graphic-btn" href="/contact-us">
                Speak to Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
