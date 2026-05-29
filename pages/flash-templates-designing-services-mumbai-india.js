import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function FlashWebsiteDesigningServices() {
  const metaTags = (
    <>
      <title>Flash Template Designing Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Enhance your brand with custom Flash template designing services in Mumbai by SIB Infotech. Create engaging visuals that captivate your audience. Contact now!"
      />
      <meta
        name="keywords"
        content="flash web designing,flash website designing,flash web designing services,flash website designing services,flash web designing companies,flash website designing companies,flash web designing india,flash web designing delhi,flash web designing mumbai,flash"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="Flash Template Designing Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Enhance your brand with custom Flash template designing services in Mumbai by SIB Infotech. Create engaging visuals that captivate your audience. Contact now!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/flash-templates-designing-services-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Flash Template Designing Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Enhance your brand with custom Flash template designing services in Mumbai by SIB Infotech. Create engaging visuals that captivate your audience. Contact now!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/flash-templates-designing-services-mumbai-india.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Flash Template Designing Services",
            name: "Flash Templates Designing Company in Mumbai, India",
            alternateName: "Custom Flash Website Template Design Services",
            description:
              "SIB Infotech is a leading flash template designing company in Mumbai, India offering custom flash website templates, animated web design solutions, interactive flash banners, multimedia website templates, and creative flash presentation design services. Our flash designers create visually engaging, responsive, and business-focused flash templates that improve brand presentation and user engagement.",
            url: "https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india",
            image:
              "https://www.sibinfotech.com/assets/images/flash-template-design-services.jpg",

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
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Flash Template Designing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Flash Template Design",
                    description:
                      "Creative and customized flash template design solutions for websites and multimedia presentations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Animated Flash Website Templates",
                    description:
                      "Interactive animated flash templates designed to improve visual engagement and user experience.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flash Banner Designing",
                    description:
                      "Professional flash banner and multimedia advertising design services for online branding.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Interactive Multimedia Design",
                    description:
                      "Flash-based multimedia design solutions for presentations, websites, and business promotions.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website UI Animation Services",
                    description:
                      "Creative website animation and visual interaction design services for enhanced user engagement.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Custom Flash Website Templates",
              "Interactive Multimedia Design",
              "Animated Web Presentations",
              "Creative Flash Banner Designs",
              "Enhanced User Engagement",
              "Business-Focused Website Design",
              "Responsive Flash Layouts",
              "Improved Brand Presentation",
              "Interactive User Interface",
              "Visually Appealing Website Templates",
            ],

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india",
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
                name: "Flash Templates Designing Services Mumbai India",
                item: "https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/flash-templates-designing-services-mumbai-india"
        breadcrumbTitle="Flash Template Designing Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Enhance your brand with custom Flash template designing services in Mumbai by SIB Infotech. Create engaging visuals that captivate your audience. Contact now!"
        }
        reviewCount={"5203"}
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
                  Flash Website Designing Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Flash Website Designing Company in Mumbai, India
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
                    <span className="textChange">Flash Website Designing </span>{" "}
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
        <Breadcrumb Pagetitle={"Flash Website Designing"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Flash Website Designing </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Flash Website Designing"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  Flash development in India has gained prominence as it helps
                  attract your visitors by creating eye-catching flash
                  animations and animated banners and it is also supported by
                  all web browsers.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-content-title">
                <p>Unique design of website with Flash banners</p>
              </div>
              <p>
                Exploiting our vast expertise in website designing, SIB Infotech
                are renowned flash development company, offering our clients
                with a unique design of website complete with Flash banners and
                introduction.
              </p>
              <p>
                Flash is an effective and visually appealing way of presenting
                the information of the organization on the website. It is an
                amalgamation of animation, sound and dynamic web-pages that help
                in creating a lasting impression on the end-users through the
                medium of a website. Flash provides the designers with the power
                to develop animations and interactive movies that help in
                drawing more viewers. Moreover, as the graphics used in flash
                websites are based on mathematical functions instead of bitmaps,
                designers can easily increase and decrease their sizes without
                introducing the appearance of jagged edges with each change.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Flash Website Designing Services"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>
                  Some of the exclusive features of our Flash development
                  services are
                </p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        Attractive web pages complimented with sound and
                        animation
                      </p>
                    </li>
                    <li>
                      <p>
                        Flash movie presentations of the company's profile and
                        its services
                      </p>
                    </li>
                    <li>
                      <p>
                        Interactive user interface and enthralling user
                        experience
                      </p>
                    </li>
                    <li>
                      <p>
                        Customized animation including text, 2D animations,
                        video clips and edits and image effects
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        Capability to design complex flash development structure
                        as per your business requirements
                      </p>
                    </li>
                    <li>
                      <p>
                        Expertise in creating a fast loading browser flash
                        website that will facilitate your visitor to have fast
                        browsing experience
                      </p>
                    </li>
                    <li>
                      <p>
                        High-quality flash website designs and flash scripting
                        used to develop web applications such as online booking,
                        vacation rentals, travel &amp; tourism, match making,
                        and social networking sites.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Unique flash animations</p>
                <p>
                  Working on Flash Application Development with a difference, we
                  present optimum quality flash animations that set your site
                  apart from the rest. Also, we completely understand the
                  significance of your content and therefore create
                  attention-grabbing and unique flash animations that will
                  impress your clients without distracting them from your
                  content.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Best Development gives continuous leads and high revenue
                </p>
                <p>
                  We are a reliable and proficient flash development company,
                  providing you with an effective multimedia, 3D animation and
                  flash development services to enhance your internet business
                  and attract your online customers. With our hands on
                  experience, we are able to create a website which will give
                  you continuous leads and high revenue making your website as
                  the best marketing investment you ever made. Our web designers
                  are well versed with the latest in the Flash Application
                  Development technology and make use of the special audio or
                  visual effect on the website to gain more attention of online
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
