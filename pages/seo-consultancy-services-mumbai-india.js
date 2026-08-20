import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function SeoConsultancyServicesMumbaiIndia() {
  const metaTags = (
    <>
      <title>Professional SEO Services in Mumbai | Best SEO Company | SIB Infotech</title>
      <meta
        name="description"
        content="Looking for professional SEO services in Mumbai? SIB Infotech is the best SEO services company in Mumbai offering affordable SEO packages. Get top rankings with our expert SEO service provider team."
      />
      <meta
        property="og:title"
        content="Professional SEO Services in Mumbai | Best SEO Company | SIB Infotech"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-consultancy-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="Expert SEO Consultancy Services in Mumbai | Boost Rankings"
      />
      <meta
        property="og:description"
        content="Looking for professional SEO services in Mumbai? SIB Infotech is the best SEO services company in Mumbai offering affordable SEO packages. Get top rankings with our expert SEO service provider team."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/seo-consultancy-services-mumbai-india.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-consultancy-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Professional SEO Services in Mumbai | Best SEO Company | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Looking for professional SEO services in Mumbai? SIB Infotech is the best SEO services company in Mumbai offering affordable SEO packages. Get top rankings with our expert SEO service provider team."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/seo-consultancy-services-mumbai-india.webp"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/seo-consultancy-services-mumbai-india"
        breadcrumbTitle="Professional SEO Services in Mumbai | Best SEO Company"
        PageRatingSchema
        description={
          "Looking for professional SEO services in Mumbai? SIB Infotech is the best SEO services company in Mumbai offering affordable SEO packages. Get top rankings with our expert SEO service provider team."
        }
        reviewCount={"5275"}
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
                <h1 className="heading fontWeight700 fontHeading text-white">
                  Professional SEO Services in Mumbai
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Best SEO Services Company in Mumbai | SIB Infotech
                </h2>
                <div className="mt-4">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
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
                    Best <span className="textChange">SEO Services</span>{" "}
                    Company in Mumbai
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-lg-block">
        <Breadcrumb Pagetitle={"Expert SEO Consultancy"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">SEO Services</span> Company
              in Mumbai
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Expert SEO Consultancy"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech is a top SEO services agency in Mumbai providing professional SEO services in Mumbai to help businesses dominate search rankings. As a trusted SEO service provider in Mumbai, we deliver affordable SEO services in Mumbai that drive real results.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 order-lg-1 order-2 mt-3 mt-lg-0">
              <p>
                SIB Infotech is the best SEO services company in Mumbai with over 15 years of experience helping businesses grow their online presence. As a leading SEO services company in Mumbai, we specialize in delivering professional SEO services in Mumbai that are tailored to your specific business goals. Our team of SEO experts understands the Mumbai market and creates strategies that deliver measurable results.
              </p>
              <p>
                As a trusted SEO service provider in Mumbai, we offer a comprehensive range of SEO services including technical SEO, on-page optimization, off-page optimization, content marketing, and link building. Whether you are a startup or an established enterprise, our affordable SEO services in Mumbai ensure you get the best ROI on your digital marketing investment.
              </p>
              <p>
                Our freelance SEO services in Mumbai are designed to meet the unique needs of each client. We take pride in being one of the best SEO services agencies in Mumbai, helping hundreds of businesses achieve top rankings on Google and other search engines. Contact us today to learn how our top SEO services in Mumbai can transform your online presence.
              </p>
            </div>
            <div className="col-md-6 order-lg-2 order-1">
              <div className="custom-page-img">
                <img
                  alt="Professional SEO Services in Mumbai - SIB Infotech"
                  className="img-fluid"
                  src="assets/images/article-submission.webp"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Best SEO Services Company in Mumbai"
                  className="img-fluid"
                  src="assets/images/article-submission.webp"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-content-title">
                <p>Why Choose the Best SEO Services in Mumbai?</p>
              </div>
              <p>
                Choosing the best SEO services company in Mumbai is critical for businesses that want to rank higher on Google. As a leading SEO services agency in Mumbai, SIB Infotech provides data-driven strategies that combine technical expertise with creative content marketing. Our top SEO services in Mumbai are designed to increase organic traffic, improve conversions, and build long-term brand authority.
              </p>
              <p>
                As a premier SEO service provider in Mumbai, we work with businesses across industries including e-commerce, healthcare, education, real estate, and more. Our professional SEO services in Mumbai include comprehensive keyword research, competitive analysis, on-page optimization, technical SEO audits, and high-quality link building campaigns.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>Our Affordable SEO Services in Mumbai Include</p>
              </div>
              <p>
                To achieve business goals and objectives in SEO process,
                planning, initiation and completing tasks on time must be
                prioritized.
              </p>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Competitive analysis</p>
                    </li>
                    <li>
                      <p>Website Analysis</p>
                    </li>
                    <li>
                      <p>Keyword Research</p>
                    </li>
                    <li>
                      <p>Link Building &nbsp;</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Social Media Optimization</p>
                    </li>
                    <li>
                      <p>Pay Per Click advertising</p>
                    </li>
                    <li>
                      <p>Website Revision and Updates</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>SEO Goals &amp; Objectives</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>
                      Increase Traffic to Website
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Improve Online Sales and Lead Generation</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>
                      Enhance Social Media Visibility
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="custom-page-icon-box">
                    <p>Higher Website Conversions / Site Registrations</p>
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
