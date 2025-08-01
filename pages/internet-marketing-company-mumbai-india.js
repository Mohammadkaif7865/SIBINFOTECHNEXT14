import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function InternetMarketingCompanyMumbaiIndia() {
  const metaTags = (
    <>
      <title>Leading Internet Marketing Company in Mumbai, India</title>
      <meta
        name="description"
        content="Boost your online presence with expert internet marketing services in Mumbai by SIB Infotech. Drive traffic and increase sales. Contact us for a consultation!"
      />
      <meta
        name="keywords"
        content="internet marketing services,internet marketing india,internet marketing companies,internet marketing agency,seo internet marketing,internet marketing promotion,internet marketing strategies,internet marketing seo,internet marketing firm,online internet ma"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/internet-marketing-company-mumbai-india"
      />
      <meta
        property="og:title"
        content="Leading Internet Marketing Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Boost your online presence with expert internet marketing services in Mumbai by SIB Infotech. Drive traffic and increase sales. Contact us for a consultation!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/internet-marketing-company-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/internet-marketing-company-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Leading Internet Marketing Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Boost your online presence with expert internet marketing services in Mumbai by SIB Infotech. Drive traffic and increase sales. Contact us for a consultation!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/internet-marketing-company-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/internet-marketing-company-mumbai-india"
        breadcrumbTitle="Leading Internet Marketing Company in Mumbai, India"
        PageRatingSchema
        description={
          "Boost your online presence with expert internet marketing services in Mumbai by SIB Infotech. Drive traffic and increase sales. Contact us for a consultation!"
        }
        reviewCount={"5216"}
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
                  Internet Marketing
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Internet Company in India
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
            <div className="d-lg-none ">
              <Breadcrumb Pagetitle={"Leading Internet Marketing"} />
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Internet Marketing </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Internet Marketing </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Leading Internet Marketing"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  We influence a collection of internet marketing techniques to
                  successfully place our client’s business on the web.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6 order-lg-1 order-2">
              <p>
                Each business has a different objective from their online
                presence. Someone wish high traffic for website. Others are
                looking to improve sales. Our team of internet marketing experts
                is adept with the latest and greatest internet marketing
                strategies some of which are search engine optimization, pay per
                click, online media buy on targeted websites, social media
                marketing and email marketing.
              </p>
              <p>
                The team of internet marketing experts at SIB Infotech is experienced with the most up-to-date and effective internet marketing strategies. These include search engine optimization, pay-per-click, <Link href="/social-media-marketing-smm-services-packages">Social media marketing service packages</Link>, and email marketing.
              </p>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <div className="custom-page-img">
                <img
                  alt="Internet Marketing Company in India"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Internet Marketing Company in Mumbai"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p>
                SIB Infotech is well-aware of the new developments taking place
                in the online world – From the changing dynamics of Search
                Engines, to viewer algorithms; to emerging market trends and
                shift in customer preferences we take stock of everything and
                convert that learning into powerful Internet Marketing
                strategies that guarantee results.
              </p>
              <p>
                We work hard for our clients to achieve their goals and offer
                various types of solutions and services to improve their online
                presence and move up the steps in the virtual world. We believe
                in providing a exact solution to our clients.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>
                  We can help you promote your business online with several
                  services, in addition to our customizable services
                </p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Affiliate Marketing Services</p>
                    </li>
                    <li>
                      <p><Link href="/ecommerce-marketing-companies-mumbai-india">E-Commerce Marketing Services</Link></p>
                    </li>
                    <li>
                      <p>Email Marketing Services</p>
                    </li>
                    <li>
                      <p>Lead Generation Services</p>
                    </li>
                    <li>
                      <p>Paid Search Engine Inclusion Services</p>
                    </li>
                    <li>
                      <p>Pay-per-click Management Services</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Press Release Submission Services</p>
                    </li>
                    <li>
                      <p>Reputation Management Services</p>
                    </li>
                    <li>
                      <p>Search Engine Marketing Services</p>
                    </li>
                    <li>
                      <p>SMS Marketing Services</p>
                    </li>
                    <li>
                      <p>Social Media Marketing Services</p>
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
