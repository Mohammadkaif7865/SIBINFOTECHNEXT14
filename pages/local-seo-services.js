import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";
import Image from "next/image";
import Intro from "@/comps/local-seo/Intro";
import Cta from "@/comps/local-seo/Cta";
import Services from "@/comps/local-seo/Services";
import Benefits from "@/comps/local-seo/Benefits";
import WhyChoose from "@/comps/local-seo/WhyChoose";
import Process from "@/comps/local-seo/Process";
import Cta2 from "@/comps/local-seo/Cta2";
import Cta3 from "@/comps/local-seo/Cta3";
import Faqs from "@/comps/local-seo/Faqs";
import Old from "@/comps/local-seo/Old";

export default function LocalSeoServices() {
  const metaTags = (
    <>
      <title>Best Local SEO Company India | Local SEO Services in Mumbai</title>
      <meta
        name="description"
        content="Boost your local visibility with expert Local SEO services from SIB Infotech. Rank higher on Google Maps and attract nearby customers to your business."
      />
      <meta
        name="keywords"
        content="Local SEO services in India, Local SEO Services in India, Local Marketing Services India, Best Local SEO Agency"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/local-seo-services
"
      />
      <meta
        property="og:title"
        content="Best Local SEO Company India | Local SEO Services in Mumbai"
      />
      <meta
        property="og:description"
        content="Boost your local visibility with expert Local SEO services from SIB Infotech. Rank higher on Google Maps and attract nearby customers to your business."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/local-seo-services.webp
"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/local-seo-services"
      />
      <meta
        property="twitter:title"
        content="Best Local SEO Company India | Local SEO Services in Mumbai"
      />
      <meta
        property="twitter:description"
        content="Boost your local visibility with expert Local SEO services from SIB Infotech. Rank higher on Google Maps and attract nearby customers to your business."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/local-seo-services.webp"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO Services",
            name: "Local SEO Services Company in India",
            alternateName: "Google Local SEO Optimization Services",
            description:
              "SIB Infotech is a leading local SEO company in India offering result-driven local search engine optimization services for businesses. Our local SEO experts help improve Google Maps rankings, local search visibility, business listings, location-based traffic, and lead generation through strategic local SEO campaigns and optimization techniques.",
            url: "https://www.sibinfotech.com/local-seo-services",
            image:
              "https://www.sibinfotech.com/assets/images/local-seo-services-company.webp",

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
              { "@type": "Country", name: "UAE" },
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Local SEO Optimization Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Business Profile Optimization",
                    description:
                      "Optimization of Google Business Profile listings to improve local visibility and Google Maps rankings.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Local Keyword Research",
                    description:
                      "Location-based keyword research and optimization for better local search rankings.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Maps SEO",
                    description:
                      "Local map optimization strategies to improve rankings in Google Maps and local search results.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Local Citation Building",
                    description:
                      "Creation and management of local business citations across trusted directories and platforms.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Location-Based SEO Campaigns",
                    description:
                      "Customized local SEO campaigns targeting region-specific audiences and customers.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Improved Google Maps Rankings",
              "Higher Local Search Visibility",
              "Increased Local Website Traffic",
              "Better Lead Generation",
              "Optimized Google Business Profile",
              "Location-Based Keyword Rankings",
              "Enhanced Online Reputation",
              "Higher Local Conversion Rates",
              "Local Citation Management",
              "SEO-Friendly Local Landing Pages",
            ],

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.sibinfotech.com/local-seo-services",
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
                name: "Local SEO Services",
                item: "https://www.sibinfotech.com/local-seo-services",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is local SEO and how does it help my business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Local SEO optimizes your online presence so your business appears in Google Maps and local search results when nearby customers search for your products or services. It includes Google Business Profile optimization, local citations, and location-based keyword targeting.",
                },
              },
              {
                "@type": "Question",
                name: "How much does local SEO cost in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Local SEO packages in India typically range from ₹10,000 to ₹40,000 per month depending on the number of locations, competition level, and services included. SIB Infotech offers transparent monthly packages with no lock-in contracts.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to see results from local SEO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most businesses see measurable improvements in Google Maps rankings and local search visibility within 2 to 4 months of starting local SEO. Highly competitive niches may take 4 to 6 months.",
                },
              },
              {
                "@type": "Question",
                name: "Can SIB Infotech manage local SEO for multiple locations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. SIB Infotech specializes in multi-location local SEO for brands with branches across Mumbai, Delhi, Bengaluru, and other cities. We create dedicated location pages, manage multiple Google Business Profiles, and build city-specific citations.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "Service",
              name: "Local SEO Services",
              serviceType: "Local Search Engine Optimization",
              provider: { "@type": "Organization", name: "SIB Infotech" },
            },
            ratingValue: "4.8",
            reviewCount: "99",
            bestRating: "5",
            worstRating: "1",
          }),
        }}
      />

    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign lseo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Boost Your Business Visibility with the Best Local SEO
                  Services in India!
                </h1>
                <ul className="list_local_seo_icon title fontWeight600 col-lg-10 ps-lg-3">
                  <li>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/local-seo/seo (1).webp"
                      alt="Local SEO Icon"
                    />
                    <span>Dominate Local Search Results</span>
                  </li>
                  <li>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/local-seo/people.webp"
                      alt="Attract Nearby Customers Icon"
                    />
                    <span>Attract Nearby Customers</span>
                  </li>
                  <li>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/local-seo/customer-care.webp"
                      alt="Drive More Walk-Ins Icon"
                    />
                    <span>Drive More Walk-Ins</span>
                  </li>
                  <li>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/local-seo/business1.webp"
                      alt="Increase Store Visits Icon"
                    />
                    <span>Increase Store Visits</span>
                  </li>
                  <li>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/local-seo/increase.webp"
                      alt="Increase Sales & Leads Icon"
                    />
                    <span>Increase Sales & Leads</span>
                  </li>
                </ul>

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
                  Accelerate Your Local Business
                </h4>
                <p>
                  with the
                  <strong className="fontWeight600 text_red">
                    <span className="textChange">
                      {" "}
                      Best Local SEO Company in India
                    </span>{" "}
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Local SEO Services "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Local SEO Services</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Local SEO Services "} />
      </div>
      <div className="bg_gray py-4">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="icon_grid_lseo">
                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/local-seo-resturaent.svg"
                      alt="Restaurants near me"
                    />
                  </div>
                  <p>Restaurants near me</p>
                </div>
                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/law.webp"
                      alt="Lawyer Near me"
                    />
                  </div>
                  <p>Lawyer Near me</p>
                </div>
                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/local-seo-doctor.svg"
                      alt="Doctors near me"
                    />
                  </div>
                  <p>Doctors near me</p>
                </div>

                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/florist.webp"
                      alt="Florist Near me"
                    />
                  </div>
                  <p>Florist Near me</p>
                </div>

                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/hospital.webp"
                      alt="Hospital Near me"
                    />
                  </div>
                  <p>Hospital Near me</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <h2 className="sub_heading fontHeading text-center  fontWeight700 ">
                Your Trusted{" "}
                <span className="text_red">
                  Local SEO Optimization Experts{" "}
                </span>{" "}
                Since 2005!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <Services />
      <Cta />
      <Benefits />
      <WhyChoose />
      <Process />
      <Cta3 />
      {/* <Old/> */}
      <section className="customPadding">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="customHeading">
                Local SEO Services in Mumbai for{" "}
                <span className="text_red">Local Business Growth</span>
              </h2>
              <p className="customText">
                SIB Infotech offers specialized local SEO services in Mumbai designed to help businesses dominate local search results, Google Maps, and nearby searches. As a trusted local SEO company in Mumbai, we optimize your Google Business Profile, build local citations, and create location-specific content to ensure your business gets found by customers in your area.
              </p>
              <p className="customText">
                Our local SEO services in Mumbai cover all major areas including Andheri, Bandra, Borivali, Dadar, Malad, Thane, Navi Mumbai, and beyond. With over 15 years of experience, our local SEO experts in Mumbai have helped hundreds of businesses increase their local visibility, drive foot traffic, and generate more leads through strategic local search optimization.
              </p>
              <p className="customText">
                Whether you run a restaurant, clinic, retail store, or service-based business in Mumbai, our tailored local SEO strategies ensure you appear prominently when potential customers search for products and services near them. Contact us today to learn how our local SEO services in Mumbai can transform your local online presence.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="image-full"
                src="assets/images/local-seo-services-company.webp"
                alt="Local SEO Services in Mumbai - SIB Infotech"
              />
            </div>
          </div>
        </div>
      </section>
      <Faqs />
      <Cta2 />
    </CustomLayout>
  );
}
