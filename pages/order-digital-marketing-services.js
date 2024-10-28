import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function OrderDigitalMarketing() {
  const metaTags = (
    <>
      <title>
        Order Professional Digital Marketing Services | SIB Infotech
      </title>
      <meta
        name="description"
        content="Order professional digital marketing services to enhance your online presence with SIB Infotech. Top strategies that drive results and boost your business!"
      />
      <meta name="keywords" content="Order Digital Marketing Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/order-digital-marketing-services"
      />
      <meta
        property="og:title"
        content="Order Professional Digital Marketing Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Order professional digital marketing services to enhance your online presence with SIB Infotech. Top strategies that drive results and boost your business!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/order-digital-marketing-services"
      />
      <meta
        property="twitter:title"
        content="Order Professional Digital Marketing Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Order professional digital marketing services to enhance your online presence with SIB Infotech. Top strategies that drive results and boost your business!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/order-digital-marketing-services"
        breadcrumbTitle="Order Professional Digital Marketing Services | SIB Infotech"
        PageRatingSchema
        description={
          "Order professional digital marketing services to enhance your online presence with SIB Infotech. Top strategies that drive results and boost your business!"
        }
        reviewCount={"5248"}
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
                <h3 className="heading fontWeight700 text-white">
                  Order Digital Marketing Services
                </h3>
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
                    <span className="textChange">Order Digital Marketing </span>{" "}
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
        <Breadcrumb
          Pagetitle={"Order Professional Digital Marketing Services"}
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Order Digital Marketing </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={"Order Professional Digital Marketing Services"}
        />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row m-zero">
            <div className="col-md-6">
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Money Back Guarantee</p>
                <p>
                  We love getting things right and want you to be fully
                  satisfied with services provided. We are not perfect, but when
                  we make mistakes we fix them.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Secure PayPal Payment</p>
                <p>
                  All our payments are processed via PayPal. You do not need a
                  PayPal account and we do not store any payment card details on
                  our website.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">Money Back Guarantee</p>
                    <p>
                      We love getting things right and want you to be fully
                      satisfied with services provided. We are not perfect, but
                      when we make mistakes we fix them.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">Secure PayPal Payment</p>
                    <p>
                      All our payments are processed via PayPal. You do not need
                      a PayPal account and we do not store any payment card
                      details on our website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">No setup or hidden fees</p>
                    <p>
                      There are no hidden costs, setup or termination fees
                      attached to our SEO packages. All our plans are clear. We
                      do not charge for any additional services.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">No outsourcing</p>
                    <p>
                      Our team do not outsource any of SEO services outside. We
                      prefer to be in control of all processes in-house and
                      deliver the best quality in a long run.
                    </p>
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
