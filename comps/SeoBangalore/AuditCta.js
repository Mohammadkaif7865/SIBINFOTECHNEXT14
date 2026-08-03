import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";

const AuditCta = () => {
  return (
    <section id="requestQuote" className="py-5 bg-danger text-white position-relative overflow-hidden">
      <div className="containerFull position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="display-6 fontHeading fontWeight700 text-white mb-3">
              Get Your Free Bangalore SEO Audit
            </h2>
            <p className="lead text-white-90 mb-4 max-700">
              Ready to grow your Bangalore business through organic search? Our team of SEO specialists will conduct a comprehensive audit of your website and deliver a personalised strategy report at no cost.
            </p>

            <div className="d-flex flex-wrap gap-4 text-white mb-4">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-phone fs-4 me-3 text-warning"></i>
                <div>
                  <div className="small text-white-70">Direct Phone</div>
                  <strong>+91 22 2605 7575</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-envelope fs-4 me-3 text-warning"></i>
                <div>
                  <div className="small text-white-70">Email Address</div>
                  <strong>info@sibinfotech.com</strong>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="https://www.sibinfotech.com/contact-us/"
                className="btn btn-light btn-lg px-4 py-3 fw-bold text-danger me-3 shadow"
              >
                <i className="fa-solid fa-calendar-check me-2"></i> Book My Free SEO Audit
              </Link>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="p-4 bg-white text-dark rounded-4 shadow-lg">
              <h4 className="fontWeight700 mb-3 text-center text-dark">
                Request Free Audit Now
              </h4>
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditCta;
