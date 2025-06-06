import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function RealEstateWebsiteDevelopmentServices() {
  const metaTags = (
    <>
      <title>Real Estate Website Development Services in Mumbai, India</title>
      <meta
        name="description"
        content="Build a stunning real estate website with expert development services in Mumbai by SIB Infotech. Attract more buyers and showcase your properties effectively."
      />
      <meta
        name="keywords"
        content="real estate website developer india,real estate website developer mumbai,real estate website developer delhi,real estate website developer pune,real estate website developer hyderabad,real estate website developer bangalore,real estate website developer c"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/real-estate-website-development-services"
      />
      <meta
        property="og:title"
        content="Real Estate Website Development Services in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Build a stunning real estate website with expert development services in Mumbai by SIB Infotech. Attract more buyers and showcase your properties effectively."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/real-estate-website-development-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/real-estate-website-development-services"
      />
      <meta
        property="twitter:title"
        content="Real Estate Website Development Services in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Build a stunning real estate website with expert development services in Mumbai by SIB Infotech. Attract more buyers and showcase your properties effectively."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/real-estate-website-development-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/real-estate-website-development-services"
        breadcrumbTitle="Real Estate Website Development Services in Mumbai, India"
        PageRatingSchema
        description={
          "Build a stunning real estate website with expert development services in Mumbai by SIB Infotech. Attract more buyers and showcase your properties effectively."
        }
        reviewCount={"5262"}
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
                  Real Estate Website Development
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Real Estate Website Development Company in India
                </h2>
                
                <div className="mt-4">
                  <Link href="/#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
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
                      Real Estate Web Development
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
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Real Estate Website Development"} />
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
              <span className="textChange">Real Estate Web Development</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Real Estate Website Development"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech offers wide variety of Real Estate Website design
                  services for the real estate owners, aspiring realtors,
                  agents, brokers or even those who are just looking to put up
                  their Home for sales.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Our Real Estate Website Package comes with all of the competence
                tailored to meet the business expansion needs of any real estate
                investor, agent, realtor or broker.
              </p>
              <p>
                The added advantage in outsourcing your Real Estate Website
                Development to us is our extensive expertise in developing Real
                Estate Websites. Offering buyers and sellers to use the site
                facilities for free and only charging them commission for
                property bought and sold, generates you more business. This and
                more information from us enables us in delivering you with not
                only a state-of-art professionally designed and fully functional
                website, but one which boosts your business on the web and
                permits you to grow.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Real Estate Website Development Services"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                With the ever-growing Internet Technology, making information
                and searches available in a much easier and convenient way,
                people prefer this particular methodology to the age-old method
                to find their homes. This gives the Realtors having websites, a
                competitive advantage.
              </p>
              <p>
                Apart from keeping you abreast with the competition and
                increasing your sales, having a website benefits you in terms of
                saving time, exploring larger areas, and managing your deals
                easily and efficiently.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                With the ever-growing Internet Technology, making information
                and searches available in a much easier and convenient way,
                people prefer this particular methodology to the age-old method
                to find their homes. This gives the Realtors having websites, a
                competitive advantage.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>Real Estate Website Features</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Logo Design</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Custom Design</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>CMS</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Inquiries Form</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Image Thumbnailing of Properties</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Property Listings</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Mortgage Calculators</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Lead Generation &amp; Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
