import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MicrosoftDevelopmentServices() {
  const metaTags = (
    <>
      <title>Microsoft Application Development Services | SIB Infotech</title>
      <meta
        name="description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        name="keywords"
        content="Microsoft Application & Development Services"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/microsoft-application-development-services"
      />
      <meta
        property="og:title"
        content="Microsoft Application Development Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/microsoft-application-development-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/microsoft-application-development-services"
      />
      <meta
        property="twitter:title"
        content="Microsoft Application Development Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Microsoft Application Development",
            name: "Microsoft Application & Development Services",
            alternateName:
              "Top Rated Microsoft Application Development Company in India",
            description:
              "SIB Infotech is a top-rated Microsoft Application Development company in India offering custom Microsoft technology solutions tailored to enhance business productivity and efficiency. Our services include application modernization, customer self-service solutions, case tracking, integration, database development, reporting, managed application services, and remote DBA — backed by deep integration expertise across Microsoft, IBM, Oracle, SAP, and legacy systems using Agile, Scrum, Waterfall, and DevOps methodologies.",
            url: "https://www.sibinfotech.com/microsoft-application-development-services",
            image:
              "https://www.sibinfotech.com/assets/og/microsoft-application-development-services.jpg",

            provider: {
              "@type": "Organization",
              name: "SIB Infotech",
              url: "https://www.sibinfotech.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sibinfotech.com/_next/image?url=%2Fassets%2Fimages%2Flogo%20(1).webp&w=3840&q=100",
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
              { "@type": "Country", name: "Portugal" },
              { "@type": "Country", name: "Belgium" },
              { "@type": "Country", name: "Netherlands" },
              { "@type": "Country", name: "Turkey" },
              { "@type": "Country", name: "New Zealand" },
              { "@type": "Country", name: "Japan" },
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Microsoft Application & SQL Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Application Modernization",
                    description:
                      "Modernising legacy Microsoft applications to current technologies and platforms for improved performance, scalability, and business agility.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Customer Self-Service Solutions",
                    description:
                      "Development of customer self-service portals and applications using Microsoft technologies to improve user experience and reduce support overhead.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Case Tracking & Management",
                    description:
                      "Custom Microsoft-based case tracking and management systems to streamline workflows, improve visibility, and enhance team productivity.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Integration & Application Development",
                    description:
                      "Deep integration and application development across Microsoft, IBM, Oracle, SAP, and home-grown legacy systems — seamlessly connecting back-end and front-end systems.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Strategy & Consulting",
                    description:
                      "Microsoft technology strategy and consulting services including business and technical acumen, covering consulting, project, and managed service delivery models.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Database Development & Management",
                    description:
                      "Comprehensive Microsoft SQL Server database development, management, data cleansing, and master data best practices for enterprise business requirements.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Reporting & Dashboards",
                    description:
                      "Custom Microsoft reporting solutions and interactive dashboards that provide real-time business intelligence and data visualisation for informed decision-making.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Managed Application Services",
                    description:
                      "End-to-end managed Microsoft application services covering ongoing maintenance, support, monitoring, and optimisation of business-critical applications.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Remote DBA",
                    description:
                      "Remote Database Administrator (DBA) services for Microsoft SQL Server environments — providing proactive monitoring, performance tuning, backup management, and expert support.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Modernised Microsoft Business Application",
              "Custom Customer Self-Service Portal",
              "Case Tracking and Workflow Management System",
              "Seamlessly Integrated Front-End and Back-End Systems",
              "Microsoft Technology Strategy and Roadmap",
              "Optimised SQL Database with Reporting and Dashboards",
              "Managed Microsoft Application with Ongoing Support",
              "Remote DBA Services for SQL Server Environments",
            ],

            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Development Methodologies",
                value: "Agile, Scrum, Waterfall, DevOps",
              },
              {
                "@type": "PropertyValue",
                name: "Integration Expertise",
                value: "Microsoft, IBM, Oracle, SAP, Home-grown Legacy Systems",
              },
            ],

            termsOfService: "https://www.sibinfotech.com/terms-and-conditions",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/microsoft-application-development-services",
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
                item: "https://www.sibinfotech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Software Development Services",
                item: "https://www.sibinfotech.com/software-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Microsoft Application Development Services",
                item: "https://www.sibinfotech.com/microsoft-application-development-services",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/microsoft-application-development-services"
        breadcrumbTitle="Microsoft Application Development Services | SIB Infotech"
        PageRatingSchema
        description={
          "Transform your business with Microsoft application development services by SIB Infotech. Custom solutions tailored to enhance productivity and efficiency."
        }
        reviewCount={"5233"}
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
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Microsoft Application & Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Microsoft Application Development Company in India
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
                    <span className="textChange">
                      Microsoft App & Development{" "}
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
      <div className="d--lg-none ">
        <Breadcrumb Pagetitle={"Microsoft Application Development "} />
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
              <span className="textChange">Microsoft App & Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Microsoft Application Development "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-12">
              <p>
                The higher the number of visitorsâ€™, the more the conversion
                rate. It impacts more references and you get more reviews as
                well. It is essential to submit your article on High PR sites
                which make nice web presence of your website. Article submission
                is one of the most popular approaches of content marketing and
                link building strategies used by SEO Experts to improve website
                traffic, backlinks and SERPs. We use white hat SEO for providing
                the best quality links pointing towards your site. Our
                well-written article makes it easier to get approved in High PR
                sites.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Microsoft Application & Development Services"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="custom-content-title">
                <p>Our Application &amp; SQL Services Include</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Modernization</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Customer Self-service</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Case tracking &amp; management</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Integration &amp; Application development</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Strategy &amp; Consulting</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Database Development &amp; Management</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Reporting &amp; Dashboards</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Managed Application Services</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Remote DBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>
                  Benefits of working with SIB Infotech for your Microsoft
                  technology needs
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Business and Technical Acumen
                </p>
                <p>offering consulting, project, and managed services.</p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Experienced Integrators</p>
                <p>
                  deep integration knowledge across multiple types of legacy
                  systems including Microsoft, IBM, Oracle, SAP, home-grown and
                  others. We can connect back-end and front-end systems
                  seamlessly.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Proven methodologies</p>
                <p>
                  development skill-sets including Agile, Scrum, Waterfall,
                  DevOps, data cleansing and understanding source data / master
                  data best practices.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
