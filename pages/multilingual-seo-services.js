import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MultilingualSeoServices() {
  const metaTags = (
    <>
      <title>Multilingual SEO Services | Boost Your Global Visibility</title>
      <meta
        name="description"
        content="Expand global reach with the best Multilingual SEO services from SIB Infotech. Enhance rankings, and traffic to improve conversions across multiple languages."
      />
      <meta name="keywords" content="Multilingual Seo Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/multilingual-seo-services"
      />
      <meta
        property="og:title"
        content="Multilingual SEO Services | Boost Your Global Visibility"
      />
      <meta
        property="og:description"
        content="Expand global reach with the best Multilingual SEO services from SIB Infotech. Enhance rankings, and traffic to improve conversions across multiple languages."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/multilingual-seo-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/multilingual-seo-services"
      />
      <meta
        property="twitter:title"
        content="Multilingual SEO Services | Boost Your Global Visibility"
      />
      <meta
        property="twitter:description"
        content="Expand global reach with the best Multilingual SEO services from SIB Infotech. Enhance rankings, and traffic to improve conversions across multiple languages."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/multilingual-seo-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/multilingual-seo-services"
        breadcrumbTitle="Multilingual SEO Services | Boost Your Global Visibility"
        PageRatingSchema
        description={
          "Expand global reach with the best Multilingual SEO services from SIB Infotech. Enhance rankings, and traffic to improve conversions across multiple languages."
        }
        reviewCount={"5240"}
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
                  Multilingual SEO Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                Top Rated Multilingual SEO Company in India
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
                    Best <span className="textChange">Multilingual Seo </span>{" "}
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
        <Breadcrumb Pagetitle={" Multilingual SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Multilingual Seo </span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={" Multilingual SEO Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  Optimistic and appealing online universal user knowledge is
                  crucial to driving international revenue growth. However,
                  simply translating domestic keywords and web content is not
                  enough to deliver a rich web experience that differentiates
                  your company from all the others.
                </p>
              </div>
              <p>
                Our campaign strategies are designed to meet the needs of our
                clients and their market condition. We provide up-to-date, Pay
                Per Click services that include: Paid Search Ads, Video
                Advertising, Display Ads, PPC Remarketing and Social
                Advertising.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                We know the blow of languages and traditions on multilingual and
                global search engine optimization for indian and international
                brands. At SIB Infotech we will help you to describe and apply
                an unbeaten multilingual SEO strategy and we also ensure that
                your potential clients meet your website around the world
                regardless of their language.{" "}
              </p>
              <p>
                We have a regional as well as global network of licensed
                copywriters to make your content more and more familiar for
                readers. These copywriters are experts in content writing and
                they adapt and build ethnically relevant keywords and then add
                in them into web copy.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Multilingual SEO Services Company in India"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>Our Multilingual SEO Services offers</p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">SEO Audit</p>
                <p>
                  starting with on-site SEO audit, we recommend you of different
                  strategy to get better the optimization of your current
                  website.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Multilingual Keyword Research
                </p>
                <p>
                  for your targeted audience we perform thorough research to
                  identify the keyword &amp; its density.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Copywriting Services</p>
                <p>
                  our copywriting services available in all regional or
                  international languages, our copywriting process includes a
                  linguistic review, keyword optimization and proofreading, we
                  manage all these strategies by our experienced native
                  professionals.{" "}
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Multilingual Site Management</p>
                <p>
                  After applying your international SEO strategy, we constantly
                  observe your positions and develop your results by regulating
                  to your struggle and tendency on the market.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Link Building Strategies</p>
                <p>
                  After examining your market and objectives, we plan an
                  inventive and tailored link building strategy to help you
                  obtain excellence backlinks and get higher through the
                  rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
