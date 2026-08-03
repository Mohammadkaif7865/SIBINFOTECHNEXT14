import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";

const HeroBanner = () => {
  return (
    <section className="bangalore-seo-hero innerWebDesign">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 ps-lg-5">
            <div className="innerBannerTitle venter">
              <div className="bglr-badge mb-3">
                <i className="fa-solid fa-award me-2"></i> Google Premier Partner | 18+ Years Experience
              </div>
              <h1 className="heading fontHeading fontWeight700 text-white me-lg-4">
                SEO Company in Bangalore That Delivers Page-1 Rankings
              </h1>
              <p className="small_heading fw-normal mt-3 text-white-90 me-lg-5 hero-vprop">
                SIB Infotech is a Google Premier Partner digital marketing agency with 18+ years of experience. We help Bangalore businesses achieve page-1 Google rankings, generate qualified leads, and grow revenue through data-driven SEO strategies tailored to the Bangalore market.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-3 align-items-center">
                <Link href="#requestQuote" className="btnThemeRed">
                  <i className="fa-solid fa-chart-line me-2"></i> Get Your Free Bangalore SEO Audit
                </Link>
                <Link href="#requestQuote" className="btnThemewhiteBorder">
                  <i className="fa-solid fa-phone me-2"></i> Book a Free Strategy Call
                </Link>
              </div>
              <div className="hero-trust-badges mt-4 pt-3 d-flex flex-wrap gap-4 border-top border-white-10">
                <div className="trust-item d-flex align-items-center text-white">
                  <i className="fa-solid fa-star text-warning me-2 fs-5"></i>
                  <span><strong>4.8/5 Rating</strong> (99+ Reviews)</span>
                </div>
                <div className="trust-item d-flex align-items-center text-white">
                  <i className="fa-solid fa-globe text-info me-2 fs-5"></i>
                  <span><strong>850+ Clients</strong> in 40+ Countries</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pe-lg-5 mt-4 mt-lg-0">
            <div className="bannerForm bglr-glass-card shadow-lg">
              <h4 className="small_heading fontWeight700 text-center mb-1">
                Accelerate Your Business Growth
              </h4>
              <p className="text-center mb-3">
                with{" "}
                <strong className="fontWeight600 text_red">
                  Best SEO Company in Bangalore
                </strong>
              </p>
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
