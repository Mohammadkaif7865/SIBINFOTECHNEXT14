import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function ProfessionalWebsiteDesigningServices() {
  const metaTags = (
    <>
      <title>Professional Website Designing Services in Mumbai, India</title>
      <meta
        name="description"
        content="Get custom, responsive, and SEO-friendly websites from SIB Infotech. Boost your online presence with a professional website design company in Mumbai, India."
      />
      <meta
        name="keywords"
        content="professional web designing,professional website designing,professional web designing services,professional website designing services,professional web designing companies,professional website designing companies,professional web designing india,profession"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/professional-website-designing-services"
      />
      <meta
        property="og:title"
        content="Professional Website Designing Services in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Get custom, responsive, and SEO-friendly websites from SIB Infotech. Boost your online presence with a professional website design company in Mumbai, India."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/professional-website-designing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/professional-website-designing-services"
      />
      <meta
        property="twitter:title"
        content="Professional Website Designing Services in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Get custom, responsive, and SEO-friendly websites from SIB Infotech. Boost your online presence with a professional website design company in Mumbai, India."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/professional-website-designing-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/professional-website-designing-services"
        breadcrumbTitle="Professional Website Designing Services in Mumbai, India"
        PageRatingSchema
        description={
          "Get custom, responsive, and SEO-friendly websites from SIB Infotech. Boost your online presence with a professional website design company in Mumbai, India."
        }
        reviewCount={"5260"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Professional Website Designing Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Professional Website Designing Company in Mumbai, India
                </h2>
                <div className="mt-4">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best{" "}
                    <span className="textChange">
                      Professional Website Designing{" "}
                    </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Professional Website Designing "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best{" "}
              <span className="textChange">
                Professional Website Designing{" "}
              </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Professional Website Designing "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  Professional website design services are the key to your
                  business's durable marketability and enlargement.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                With SIB Infotech you can make up your website by professional
                layout and design required to uphold your online brand and
                business.
              </p>
              <p>
                In spite of the size of your firm, our team of Expert Website
                Services professional can help you incorporate the newest
                technologies with your online business and utilise as an
                expansion of your company. It doesn’t matter if you’re just
                started or need higher managed services; we are here to assist
                you. Our Professional Website Services include an original
                one-on-one consultation to know your needs and give you an
                opinion of your options.
              </p>
              <p>
                Our professional website designing services is ranging from
                basic to cutting edge site design and execution, to custom
                application development. Our services will fulfil all your
                requirements with a great looking online presence. For our
                clientele, we provide a one-on-one consultation to understand
                your needs and advise you of your options.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Professional Website Designing Company in India"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
