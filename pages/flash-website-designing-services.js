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
      <title>Flash Website Designing Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Elevate your online presence with Flash website designing services by SIB Infotech. We create dynamic, interactive websites that captivate and engage visitors."
      />
      <meta
        name="keywords"
        content="flash web designing,flash website designing,flash web designing services,flash website designing services,flash web designing companies,flash website designing companies,flash web designing india,flash web designing delhi,flash web designing mumbai,flash"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/flash-website-designing-services"
      />
      <meta
        property="og:title"
        content="Flash Website Designing Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Elevate your online presence with Flash website designing services by SIB Infotech. We create dynamic, interactive websites that captivate and engage visitors."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/flash-website-designing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/flash-website-designing-services"
      />
      <meta
        property="twitter:title"
        content="Flash Website Designing Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Elevate your online presence with Flash website designing services by SIB Infotech. We create dynamic, interactive websites that captivate and engage visitors."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/flash-website-designing-services.jpg"
      />  
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Flash Website Designing",
            name: "Flash Website Designing Services",
            alternateName: "Top Rated Flash Website Designing Company in India",
            description:
              "SIB Infotech is a renowned Flash development company in Mumbai, India offering unique Flash website designs complete with Flash banners, animated introductions, interactive user interfaces, and multimedia presentations. Our Flash development services help businesses attract visitors through eye-catching animations, sound, dynamic web pages, and interactive movies — creating a lasting impression on end-users and driving continuous leads and high revenue.",
            url: "https://www.sibinfotech.com/flash-website-designing-services",
            image:
              "https://www.sibinfotech.com/assets/og/flash-website-designing-services.jpg",

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
              name: "Flash Website Designing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flash Website Design with Banners & Introduction",
                    description:
                      "Unique custom Flash website designs complete with eye-catching Flash banners and animated introductions that create a strong first impression on visitors.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flash Movie Presentations",
                    description:
                      "Professional Flash movie presentations of a company's profile and its services to showcase the business in a visually compelling and engaging format.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Interactive Flash User Interface Design",
                    description:
                      "Development of interactive Flash user interfaces with enthralling user experiences that engage visitors and keep them on your website longer.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Flash Animation",
                    description:
                      "Customised Flash animations including text animations, 2D animations, video clip edits, and image effects tailored to your brand's unique requirements.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Complex Flash Development",
                    description:
                      "Capability to design and develop complex Flash structures as per specific business requirements, including scalable vector-based graphics without jagged edges.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fast-Loading Flash Website Development",
                    description:
                      "Development of fast-loading browser Flash websites that provide a smooth and quick browsing experience for visitors across all supported web browsers.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flash Web Application Development",
                    description:
                      "High-quality Flash scripting and development for web applications including online booking systems, vacation rentals, travel and tourism, matchmaking, and social networking sites.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Multimedia, 3D Animation & Flash Development",
                    description:
                      "Effective multimedia, 3D animation, and Flash development services using special audio and visual effects to enhance internet business presence and attract online customers.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Dynamic and Interactive Flash Website",
              "Eye-Catching Flash Animations and Banners",
              "Flash Movie Presentation of Company Profile",
              "Custom 2D Animations, Video Edits and Image Effects",
              "Fast-Loading Browser-Compatible Flash Website",
              "Flash Web Applications for Online Booking, Travel, Social Networking",
              "Continuous Leads and High Revenue from Web Presence",
              "Unique Flash Animations that Impress Without Distracting from Content",
            ],

            termsOfService: "https://www.sibinfotech.com/terms-and-conditions",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/flash-website-designing-services",
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
                name: "Website Designing Services",
                item: "https://www.sibinfotech.com/website-designing-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Flash Website Designing Services",
                item: "https://www.sibinfotech.com/flash-website-designing-services",
              },
            ],
          }),
        }}
      />
      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/flash-website-designing-services"
        breadcrumbTitle="Flash Website Designing Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Elevate your online presence with Flash website designing services by SIB Infotech. We create dynamic, interactive websites that captivate and engage visitors."
        }
        reviewCount={"5204"}
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
                  Top Rated Website Designing Company in India
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
