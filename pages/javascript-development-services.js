import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function JavascriptDevelopmentServices() {
  const metaTags = (
    <>
      <title>JavaScript Development Services | Custom Web Solutions</title>
      <meta
        name="description"
        content="Get expert JavaScript development services in Mumbai for dynamic and responsive websites. SIB Infotech provides custom solutions to enhance user experience."
      />
      <meta name="keywords" content="Javascript Development Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/javascript-development-services"
      />
      <meta
        property="og:title"
        content="JavaScript Development Services | Custom Web Solutions  "
      />
      <meta
        property="og:description"
        content="Get expert JavaScript development services in Mumbai for dynamic and responsive websites. SIB Infotech provides custom solutions to enhance user experience."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/javascript-development-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/javascript-development-services"
      />
      <meta
        property="twitter:title"
        content="JavaScript Development Services | Custom Web Solutions   "
      />
      <meta
        property="twitter:description"
        content="Get expert JavaScript development services in Mumbai for dynamic and responsive websites. SIB Infotech provides custom solutions to enhance user experience."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/javascript-development-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/javascript-development-services"
        breadcrumbTitle="JavaScript Development Services | Custom Web Solutions"
        PageRatingSchema
        description={
          "Get expert JavaScript development services in Mumbai for dynamic and responsive websites. SIB Infotech provides custom solutions to enhance user experience."
        }
        reviewCount={"5220"}
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
                  Javascript Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Javascript Development Company in India
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
                    <span className="textChange">Javascript Development </span>{" "}
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
        <Breadcrumb Pagetitle={"JavaScript Development Services "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Javascript Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"JavaScript Development Services "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  Using Javascript we can create highly dynamic and responsive
                  websites. These are very similar to desktop applications in
                  terms of processing speed and load time.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-content-title">
                <p>Technologies</p>
              </div>
              <ul>
                <li>
                  <p>Core JavaScript</p>
                </li>
                <li>
                  <p>jQuery/JSON</p>
                </li>
                <li>
                  <p>Microsoft AJAX(aka) ASP.NET Ajax Version 4</p>
                </li>
                <li>
                  <p>Server Side JavaScript Framework: Node.JS</p>
                </li>
                <li>
                  <p>
                    Javascript Frameworks without UI: JQuery, BackboneJS,
                    AngularJS, KnockoutJS, RequireJS
                  </p>
                </li>
                <li>
                  <p>
                    Javascript Frameworks with UI: JQuety UI, Ext.JS, DOJO,
                    Telerik UI
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Javascript Development Companies in Mumbai"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>Services</p>
              </div>
              <p>Here are the services that we provide</p>
              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>
                      Integrated JavaScript Development with All Server-side
                      technologies, such as ASP.NET, JSP/JAVA, PHP/LAMP, Ruby on
                      Rails, Coldfusion, Python/Django etc.
                    </p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Web Application Development using JavaScript Frameworks,
                      such as JQuery, ExtJS, BackboneJS, AngularJS, KnockoutJS,
                      RequireJS, etc.
                    </p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Mobile web application developmentÂ&nbsp;with SenchaTouch,
                      JQuery Mobile.
                    </p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Interactive application development using NodeJS</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Migration of existing Flash, Adobe AIR, Silverlight
                      Applications to HTML5 and JavaScript
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>JavaScript development with JSON, XML</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>AJAX developmentÂ&nbsp;with jQuery</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Custom application development</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Custom content management systems</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>eCommerce custom application Development</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Plug-ins Development, Customization and Implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              Here are some examples of the applications that we can develop
              with Javascript libraries and Frameworks.
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>EHR/EMR application</p>
                    </li>
                    <li>
                      <p>
                        Media sharing and live broadcasting community website
                      </p>
                    </li>
                    <li>
                      <p>Event invitations and management system</p>
                    </li>
                    <li>
                      <p>Online meeting organization using comet/server push</p>
                    </li>
                    <li>
                      <p>
                        Social networking, Media sharing, Live broadcasting
                        website for sports enthusiasts.
                      </p>
                    </li>
                    <li>
                      <p>
                        Social networking portal for emerging artists and fans
                        for entertainment industry.
                      </p>
                    </li>
                    <li>
                      <p>
                        Facebook application for event tracking and
                        notification.
                      </p>
                    </li>
                    <li>
                      <p>Online tracking of goods for logistics company</p>
                    </li>
                    <li>
                      <p>Shopping cart/ e-commerce application</p>
                    </li>
                    <li>
                      <p>Fleet audit system</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Sales force management application</p>
                    </li>
                    <li>
                      <p>Fishing forecasting system</p>
                    </li>
                    <li>
                      <p>Web portal implementations</p>
                    </li>
                    <li>
                      <p>Dating â€“ match finder application.</p>
                    </li>
                    <li>
                      <p>Media sharing community application</p>
                    </li>
                    <li>
                      <p>Educational website</p>
                    </li>
                    <li>
                      <p>Custom CMS for an IT consulting company</p>
                    </li>
                    <li>
                      <p>Web base CRM system for multiple websites</p>
                    </li>
                    <li>
                      <p>Photo sharing community website</p>
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
