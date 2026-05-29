import React from "react";
// import {Link} from 'react-router-dom';
import Link from "next/link";
import BannerForm from "../comps/BannerForm";

import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function AmazonWebServicesAws() {
  const metaTags = (
    <>
      <title>Best Amazon Web Services (AWS) Solutions | SIB Infotech</title>
      <meta
        name="description"
        content="Discover the top-tier Amazon Web Services (AWS) solutions in Mumbai, India by SIB Infotech. Empower your business with scalable, secure cloud infrastructure."
      />
      <meta name="keywords" content="Amazon Web Services (Aws)" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/amazon-web-services-aws"
      />
      <meta
        property="og:title"
        content="Best Amazon Web Services (AWS) Solutions | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Discover the top-tier Amazon Web Services (AWS) solutions in Mumbai, India by SIB Infotech. Empower your business with scalable, secure cloud infrastructure."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/amazon-web-services-aws.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/amazon-web-services-aws"
      />
      <meta
        property="twitter:title"
        content="Best Amazon Web Services (AWS) Solutions | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Discover the top-tier Amazon Web Services (AWS) solutions in Mumbai, India by SIB Infotech. Empower your business with scalable, secure cloud infrastructure."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/amazon-web-services-aws.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Android Mobile Application Development Services",
            name: "Android Mobile Application Development Company in India",
            alternateName: "Custom Android App Development Services",
            description:
              "SIB Infotech is a leading Android mobile application development company in India offering custom Android app development, enterprise mobile applications, hybrid app development, UI/UX design, ecommerce mobile apps, and scalable Android solutions for startups and enterprises. Our Android app developers build secure, responsive, feature-rich, and user-friendly mobile applications to improve customer engagement, business growth, and digital transformation.",
            url: "https://www.sibinfotech.com/android-mobile-application-development-services",
            image:
              "https://www.sibinfotech.com/assets/images/mobile-application-development-company.jpg",

            provider: {
              "@type": "Organization",
              name: "SIB Infotech",
              url: "https://www.sibinfotech.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sibinfotech.com/assets/images/logo.webp",
              },
              foundingDate: "2005",
              telephone: "+91-9222260000",

              sameAs: [
                "https://www.facebook.com/sibinfotech/",
                "https://x.com/sibinfotech",
                "https://www.linkedin.com/company/sib-infotech/",
                "https://www.youtube.com/user/sibinfotech",
              ],

              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400064",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "First Floor, BF-21, Block BF, Tagore Garden, Tagore Garden Extension",
                  addressLocality: "New Delhi",
                  addressRegion: "Delhi",
                  postalCode: "110027",
                  addressCountry: "IN",
                },
              ],

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "99",
                bestRating: "5",
                worstRating: "1",
              },
            },

            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Singapore" },
              { "@type": "Country", name: "Japan" },
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Android Mobile Application Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Android App Development",
                    description:
                      "Custom Android application development solutions tailored to business requirements and customer needs.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Enterprise Mobile Applications",
                    description:
                      "Enterprise-grade Android mobile applications for workflow automation and business operations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hybrid Mobile App Development",
                    description:
                      "Cross-platform hybrid mobile app development using advanced frameworks and technologies.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Android UI/UX Design",
                    description:
                      "Interactive and user-friendly Android app UI/UX design services for improved engagement.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Ecommerce Mobile App Development",
                    description:
                      "Secure and scalable Android ecommerce application development for online businesses.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Custom Android Applications",
              "Responsive Mobile App Design",
              "Secure Android App Solutions",
              "Enterprise Mobile Applications",
              "Improved Customer Engagement",
              "Scalable Mobile Platforms",
              "Hybrid Mobile App Development",
              "Enhanced User Experience",
              "Ecommerce Mobile Applications",
              "Business Workflow Automation",
            ],

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/android-mobile-application-development-services",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.sibinfotech.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Android Mobile Application Development Services",
                item: "https://www.sibinfotech.com/android-mobile-application-development-services",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/amazon-web-services-aws"
        breadcrumbTitle="Best Amazon Web Services (AWS) Solutions | SIB Infotech"
        PageRatingSchema
        description={
          "Discover the top-tier Amazon Web Services (AWS) solutions in Mumbai, India by SIB Infotech. Empower your business with scalable, secure cloud infrastructure."
        }
        reviewCount={"5160"}
      /> */}
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
                  Amazon Web Services (Aws)
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Amazon Web Services (AWS) Company in India
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
            <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best{" "}
                    <span className="textChange">Amazon Web Services </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={"Best Amazon Web Services"} />
      </div>
      <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Amazon Web Services </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Best Amazon Web Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-6 order-lg-1 order-2">
              <div className="custom-content-title">
                <p>AWS Benefits</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Pay for what you use</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Scalable Infrastructure</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Increased on-demand availability</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>24Ã—7 live IT level support</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Lower cost, no overhead</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Increases business agility</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-lg-2 order-1">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Amazon Web Services Company in India"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Amazon Web Services in Delhi"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-content-title">
                <p>AWS Services</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Amazon EC2</p>
                    </li>
                    <li>
                      <p>Amazon RDS</p>
                    </li>
                    <li>
                      <p>Amazon Aurora</p>
                    </li>
                    <li>
                      <p>Amazon Redshift</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Amazon ElastiCache</p>
                    </li>
                    <li>
                      <p>Amazon Athena</p>
                    </li>
                    <li>
                      <p>Amazon DynamoDB</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6  order-lg-1 order-2">
              <div className="custom-content-title">
                <p>SIB Infotech Benefits</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Consulting, project, and managed service offerings</p>
                    </li>
                    <li>
                      <p>Experts in all major platforms</p>
                    </li>
                    <li>
                      <p>Solution provisioning and upgrades</p>
                    </li>
                    <li>
                      <p>Migration of existing database to the Cloud</p>
                    </li>
                    <li>
                      <p>Configuration and backups to the Cloud</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>Workload analysis and optimization</p>
                    </li>
                    <li>
                      <p>
                        Robust data warehousing solutions with Amazon Redshift
                      </p>
                    </li>
                    <li>
                      <p>
                        Fully managed NoSQL database services with Amazon
                        DynamoDB
                      </p>
                    </li>
                    <li>
                      <p>AWS support</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-lg-2 order-1">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Amazon Web Services in Delhi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
