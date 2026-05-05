import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function KeywordResearchMumbaiIndia() {
  const metaTags = (
    <>
      <title>
        Keyword Research & Analysis Services in India | SIB Infotech
      </title>
      <meta
        name="description"
        content="Unlock your SEO potential with keyword research and analysis services in Mumbai by SIB Infotech. Drive targeted traffic and boost your online visibility today!"
      />
      <meta
        name="keywords"
        content="keyword research service,keyword research services,seo keyword research,keyword research india,keyword research delhi,keyword research mumbai,keyword research chennai,keyword research bangalore,keyword research pune,keyword research hyderabad,keyword rese"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/keyword-research-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="Keyword Research & Analysis Services in India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Unlock your SEO potential with keyword research and analysis services in Mumbai by SIB Infotech. Drive targeted traffic and boost your online visibility today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/keyword-research-services-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/keyword-research-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Keyword Research & Analysis Services in India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Unlock your SEO potential with keyword research and analysis services in Mumbai by SIB Infotech. Drive targeted traffic and boost your online visibility today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/keyword-research-services-mumbai-india.jpg"
      />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sibinfotech.com/keyword-research-services-mumbai-india#service",
          "name": "Keyword Research Services",
          "url": "https://www.sibinfotech.com/keyword-research-services-mumbai-india",
          "description": "Expert keyword research services in Mumbai, India. SIB Infotech helps you identify the best keywords to rank higher on search engines.",
          "provider": {
            "@id": "https://www.sibinfotech.com/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": "Keyword Research Services"
        },
        {
          "@type": "Organization",
          "@id": "https://www.sibinfotech.com/#organization",
          "name": "SIB Infotech",
          "url": "https://www.sibinfotech.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.sibinfotech.com/assets/images/logo.webp"
          },
          "telephone": "+91-92222-60000",
          "email": "info@sibinfotech.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400064",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "99",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/sibinfotech",
            "https://www.linkedin.com/company/sibinfotech",
            "https://twitter.com/sibinfotech"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.sibinfotech.com/keyword-research-services-mumbai-india#webpage",
          "url": "https://www.sibinfotech.com/keyword-research-services-mumbai-india",
          "name": "Keyword Research Services | SIB Infotech",
          "isPartOf": {
            "@id": "https://www.sibinfotech.com/#website"
          },
          "breadcrumb": {
            "@id": "https://www.sibinfotech.com/keyword-research-services-mumbai-india#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.sibinfotech.com/#website",
          "url": "https://www.sibinfotech.com",
          "name": "SIB Infotech",
          "publisher": {
            "@id": "https://www.sibinfotech.com/#organization"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.sibinfotech.com/keyword-research-services-mumbai-india#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sibinfotech.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "SEO Services",
              "item": "https://www.sibinfotech.com/search-engine-optimization-seo-services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Keyword Research Services",
              "item": "https://www.sibinfotech.com/keyword-research-services-mumbai-india"
            }
          ]
        }
      ]
    })
  }}
/>
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/keyword-research-services-mumbai-india"
        breadcrumbTitle="Keyword Research & Analysis Services in India | SIB Infotech"
        PageRatingSchema
        description={
          "Unlock your SEO potential with keyword research and analysis services in Mumbai by SIB Infotech. Drive targeted traffic and boost your online visibility today!."
        }
        reviewCount={"5223"}
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
                  Keyword Research
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                Top Keyword Research & Analysis Services in India
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
                    Best <span className="textChange">Keyword Research </span>{" "}
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
        <Breadcrumb Pagetitle={"Keyword Research & Analysis "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Keyword Research </span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Keyword Research & Analysis "} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="customHeading customLineHeight2">
                The two things are the base for foundation for search engine{" "}
                <span>Optimization</span> and <span>Efficient</span> website
                copywriting to draw attention of targeted visitors that is{" "}
                <span>Keyword</span> &amp; <span>Content</span>
              </h3>
              <p className="customText margin-top">
                The combination of keyword research and content can effect in
                strong visibility, targeted pages that perform the result in
                conversions. Keyword Research is a method for shaping the
                keywords that you should target with your SEO efforts.
              </p>
              <p className="customText">
                SIB Infotech is the one stop solutions for your all seo
                requirements and has a suite of affordable, quick, responsive
                keyword and keyword research tools to help with your PPC and SEO
                campaigns.
              </p>
              <Link
                className="dark-btn"
                href="https://www.sibinfotech.com/#requestQuote"
              >
                Speak To Our Experts
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="keyword-img-section">
                <img
                  alt="Keyword-Analysis-Company-In-Mumbai"
                  className="image-full"
                  src="assets/images/keyword-analysis-company-in-mumbai.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
