import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function LaravelCmsDevelopmentCompany() {
  const metaTags = (
    <>
      <title>Laravel CMS Framework Development Services | SIB Infotech</title>
      <meta
        name="description"
        content="Leverage Laravel CMS development services by SIB Infotech for robust, scalable web solutions. Enhance your online presence with customized frameworks today!"
      />
      <meta name="keywords" content="Laravel" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/laravel-cms-framework-development-services"
      />
      <meta
        property="og:title"
        content="Laravel CMS Framework Development Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Leverage Laravel CMS development services by SIB Infotech for robust, scalable web solutions. Enhance your online presence with customized frameworks today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/laravel-cms-framework-development-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/laravel-cms-framework-development-services"
      />
      <meta
        property="twitter:title"
        content="Laravel CMS Framework Development Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Leverage Laravel CMS development services by SIB Infotech for robust, scalable web solutions. Enhance your online presence with customized frameworks today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/laravel-cms-framework-development-services.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/laravel-cms-framework-development-services"
        breadcrumbTitle="Laravel CMS Framework Development Services | SIB Infotech"
        PageRatingSchema
        description={
          "Leverage Laravel CMS development services by SIB Infotech for robust, scalable web solutions. Enhance your online presence with customized frameworks today!"
        }
        reviewCount={"5224"}
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
                <h1 className="heading fontWeight700 fontHeading text-white">Laravel CMS Development</h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                Laravel CMS Development Services in India
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
                      Laravel Framework Development{" "}
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
        <Breadcrumb Pagetitle={"Laravel CMS Framework "} />
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
              <span className="textChange">Laravel Framework Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Laravel CMS Framework "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  We, at SIB Infotech, have been offering Laravel web
                  development services to clients from across the globe. With a
                  dedicated team of Laravel developers.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>
                It is free, open source framework. Using this it is easy to
                build large &amp; complex web applications.{" "}
              </p>
              <p>
                {" "}
                We develop and execute solutions that get better results and
                help us to achieve goals for you. Our profound PHP Development
                experience allows us to accomplish integration and
                personalization of Laravel applications. And, your business
                preference is never adjusted or lost in the process. To bring
                out the best, SIB uses all of Laravel's features for developing
                e-commerce and enterprise applications.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Laravel CMS Framework Development Services"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <h2 className="mainCustom">What will Laravel do for me?</h2>
              </div>

              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        The unit testing tool offered by the technology saves
                        development time, project money, and personal stress.
                      </p>
                    </li>
                    <li>
                      <p>
                        Available with unmatchable features, the platform makes
                        implementing authentication very simple. Almost
                        everything is configured out-of-the-box.
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether it is SQL injection or cross-site request
                        forgery and cross-site scripting, Laravel helps to
                        secure the web application by protecting it against such
                        security risks.
                      </p>
                    </li>
                    <li>
                      <p>
                        The unit testing tool offered by the technology saves
                        development time, project money, and personal stress.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        Laravel is the only framework that includes a variety of
                        pre-installed libraries, i.e. 20 high-level libraries
                        where Authentication library is considered as one of the
                        most popular and useful library of Laravel.
                      </p>
                    </li>
                    <li>
                      <p>
                        Laravel implementation assures timely and cost effective
                        delivery of any process. It is scalable and not a
                        problem to find Laravel developer due to its popularity.
                      </p>
                    </li>
                    <li>
                      <p>
                        Clean and simple&nbsp;API's&nbsp;make its very reliable
                        and faster in operation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
