import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MicrosoftDevelopmentServices() {
  const metaTags = (
    <>
      <title>Microsoft Application Development Services | SIB Infotech</title>
      <meta
        name="description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        name="keywords"
        content="Microsoft Application & Development Services"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/microsoft-application-development-services"
      />
      <meta
        property="og:title"
        content="Microsoft Application Development Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/microsoft-application-development-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/microsoft-application-development-services"
      />
      <meta
        property="twitter:title"
        content="Microsoft Application Development Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/microsoft-application-development-services"
        breadcrumbTitle="Microsoft Application Development Services | SIB Infotech"
        PageRatingSchema
        description={
          "Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
        }
        reviewCount={"5233"}
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
                  Microsoft Application & Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Microsoft Application Development Company in India
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
                      Microsoft App & Development{" "}
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
      <div className="d--lg-none ">
        <Breadcrumb Pagetitle={"Microsoft Application Development "} />
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
              <span className="textChange">Microsoft App & Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Microsoft Application Development "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-12">
              <p>
                The higher the number of visitorsâ€™, the more the conversion
                rate. It impacts more references and you get more reviews as
                well. It is essential to submit your article on High PR sites
                which make nice web presence of your website. Article submission
                is one of the most popular approaches of content marketing and
                link building strategies used by SEO Experts to improve website
                traffic, backlinks and SERPs. We use white hat SEO for providing
                the best quality links pointing towards your site. Our
                well-written article makes it easier to get approved in High PR
                sites.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Microsoft Application & Development Services"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="custom-content-title">
                <p>Our Application &amp; SQL Services Include</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Modernization</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Customer Self-service</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Case tracking &amp; management</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Integration &amp; Application development</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Strategy &amp; Consulting</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Database Development &amp; Management</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Reporting &amp; Dashboards</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Managed Application Services</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Remote DBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>
                  Benefits of working with SIB Infotech for your Microsoft
                  technology needs
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Business and Technical Acumen
                </p>
                <p>offering consulting, project, and managed services.</p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Experienced Integrators</p>
                <p>
                  deep integration knowledge across multiple types of legacy
                  systems including Microsoft, IBM, Oracle, SAP, home-grown and
                  others. We can connect back-end and front-end systems
                  seamlessly.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Proven methodologies</p>
                <p>
                  development skill-sets including Agile, Scrum, Waterfall,
                  DevOps, data cleansing and understanding source data / master
                  data best practices.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
