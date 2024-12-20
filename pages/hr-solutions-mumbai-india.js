import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function HrSolutionMumbaiIndia() {
  const metaTags = (
    <>
      <title>HR Solutions Services Provider in Mumbai, Delhi, India</title>
      <meta name="description" content="SIB Infotech provides leading-edge HR solutions in Mumbai, India that help companies better develop, manage, reward, and retain their most important assets." />
      <meta name="keywords" content="web development India, IT outsourcing company, website development company, web development companies in india, indian web development company, Web Development Companies India, web site development professional, php website, custom ecommerce, affordable w" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/hr-solutions-mumbai-india" />
      <meta property="og:title" content="HR Solutions Services Provider in Mumbai, Delhi, India" />
      <meta property="og:description" content="SIB Infotech provides leading-edge HR solutions in Mumbai, India that help companies better develop, manage, reward, and retain their most important assets." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/hr-solutions-mumbai-india.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/hr-solutions-mumbai-india" />
      <meta property="twitter:title" content="HR Solutions Services Provider in Mumbai, Delhi, India" />
      <meta property="twitter:description" content="SIB Infotech provides leading-edge HR solutions in Mumbai, India that help companies better develop, manage, reward, and retain their most important assets." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/hr-solutions-mumbai-india.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/hr-solutions-mumbai-india"
        breadcrumbTitle="HR Solutions Services Provider in Mumbai, Delhi, India"
        PageRatingSchema
        description={
          "SIB Infotech provides leading-edge HR solutions in Mumbai, India that help companies better develop, manage, reward, and retain their most important assets."
        }
        reviewCount={"5213"}
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
                  HR Solutions
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  HR Solutions Services Provider Company in Mumbai,India
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
                    Best <span className="textChange">HR Solutions </span>{" "}
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
        <Breadcrumb Pagetitle={'HR Solutions Services '} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">HR Solutions </span> Company in
              India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={'HR Solutions Services '} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech provides leading-edge Human Capital Management
                  solutions that help companies better develop, manage, reward
                  and retain their most important asset – their people.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Designed to be deployed in-house or on-demand, our solutions are
                the most flexible, powerful and complete way to address the
                challenges faced by today’s HR professionals.
              </p>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Advanced HR and Talent Management Software – global HR systems
                  from a global supplier
                </p>
                <p>
                  We've designed our products to transform the way you work, to
                  connect people with people – and people with information –
                  across your organization, saving you time and encouraging a
                  much more collaborative approach to every aspect of HR
                  management. Employees can be empowered to help themselves to
                  the information they need and engage in administrative
                  processes, managers will have the information they need to
                  make better informed decisions and HR benefit from a much
                  clearer picture of every aspect of their HR operations – at
                  both a local and international level.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Streamline and Improve your HR and Talent Management Processes
                </p>
                <p>
                  Because our products use the latest web and workflow
                  technologies, they also deliver dramatic new efficiencies,
                  streamlining and improving the whole set of people-related
                  business processes; from recruitment to employee performance
                  management, and from succession and career planning to
                  compensation management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
