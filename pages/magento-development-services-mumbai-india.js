import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MagentoDevelopment() {
  const metaTags = (
    <>
      <title>Magento Development Services Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Boost your e-commerce business with expert Magento development services by SIB Infotech in Mumbai, India—customized solutions for seamless online stores."
      />
      <meta name="keywords" content="Magento Development Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/magento-development-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="Magento Development Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Boost your e-commerce business with expert Magento development services by SIB Infotech in Mumbai, India—customized solutions for seamless online stores."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/magento-development-services-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/magento-development-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Magento Development Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Boost your e-commerce business with expert Magento development services by SIB Infotech in Mumbai, India—customized solutions for seamless online stores."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/magento-development-services-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/magento-development-services-mumbai-india"
        breadcrumbTitle="Magento Development Services Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Boost your e-commerce business with expert Magento development services by SIB Infotech in Mumbai, India—customized solutions for seamless online stores."
        }
        reviewCount={"5232"}
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
                  Magento Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Magento Development Company in India
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
                      Magento Development Services
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
        <Breadcrumb Pagetitle={"Magento Development Services"} />
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
              <span className="textChange">Magento Development Services</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Magento Development Services"} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="customHeading customLineHeight">
                <span className="text_red">Magento</span> Open Source Ecommerce
                Development is a collection of e-commerce modules
              </h3>
              <p className="customText margin-top">
                that can be customized as per your magento e-commerce
                development requirements and for this reason it is considered to
                be one of the most famous open source e-commerce solution.{" "}
              </p>
              <p className="customText">
                At SIB Infotech, we offer Magento Customization Solution and
                Magento Ecommerce website development at very affordable price.
                In addition to this, we also provide an in-depth knowledge of
                Magento extension development to our customers. So, if you are
                in search of Magento Customization Services, Magento Integration
                Services with solution as per your requirements to enhance your
                business needs then contact us today. We have dedicated Magento
                developers with vast experience of developing complex web design
                and applications in Magento.
              </p>
              <div className="bgBlueDarkLeft bgBlueDarksmHeight">
                <p className="customText text-white">
                  We expertise in Magento web development, Magento Ecommerce
                  development and Magento theme design. Our Magento development
                  team works in close liaison with you to set up the layout,
                  design and framework of your website. Once the the layout and
                  framework are approved, our development team will start the
                  PHP coding for the approved modules. To help you understand
                  the development process an email is sent on daily basis to
                  keep you updated for the work undertaken. Once the coding for
                  Magento ecommerce modules are completed, we then incorporate
                  the chosen payment gateway into your ecommerce store.
                </p>
                <span className="divider3">&nbsp;</span>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="customText">
                Magento shopping cart solution is a better option as compared to
                other shopping cart software some of which, are very difficult
                to modify and requires huge amounts of money for customization.
                Magento custom module has a template system that is user
                friendly and can be easily modified. No matter what your
                business objectives are we at OpenXcell deliver customizable
                e-commerce shopping cart solution service for small and large
                companies. With 750,000+ downloads – Magento is the fastest
                growinge-commerce platform that is available in the market today
                and more Magento-powered sites go live every day.
              </p>
              <div className="magento-img">
                <img
                  className="image-full"
                  src="assets/images/magento-development-company-in-india.png"
                  alt="magento-development-company-in-india"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <h3 className="customHeading text-center">
            Advantages of <span className="text_red">Magento</span>
          </h3>
          <div className="row">
            <div className="col-lg-3">
              <div className="magento-box">
                <img
                  src="assets/images/icons/magento-nice-default-tempalate.svg"
                  alt="magento-development-company-in-delhi"
                />
                <h4>Active code updating as well as bug fixing by Variance</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="magento-box">
                <img
                  src="assets/images/icons/magento-multi-storing.svg"
                  alt="magento-development-company-in-India"
                />
                <h4>Multi-Storing capabilities</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="magento-box">
                <img
                  src="assets/images/icons/magento-default-template.svg"
                  alt="magento-development-firm-in-delhi"
                />
                <h4>Nice default template</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="magento-box">
                <img
                  src="assets/images/icons/magento-documentation.svg"
                  alt="magento-development-firm-in-mumbai"
                />
                <h4>Limited technical documentation</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
