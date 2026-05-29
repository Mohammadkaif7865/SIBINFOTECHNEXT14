import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function WebsiteRedevelopmentServices() {
  const metaTags = (
    <>
      <title>Website Redevelopment Services | Modern SEO-Friendly Sites</title>
      <meta
        name="description"
        content="Revamp your website with redevelopment services in Mumbai by SIB Infotech. Enhance your design functionality to boost user experience and online visibility."
      />
      <meta
        name="keywords"
        content="Web Design India, Software Development Companies, Web Development Companies India, Website Design India, Custom Web Design India, Web Design Delhi,indian web design company, india seo company,corporate website design,custom website design services,website"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/website-redevelopment-services"
      />
      <meta
        property="og:title"
        content="Website Redevelopment Services | Modern SEO-Friendly Sites"
      />
      <meta
        property="og:description"
        content="Revamp your website with redevelopment services in Mumbai by SIB Infotech. Enhance your design functionality to boost user experience and online visibility."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/website-redevelopment-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/website-redevelopment-services"
      />
      <meta
        property="twitter:title"
        content="Website Redevelopment Services | Modern SEO-Friendly Sites"
      />
      <meta
        property="twitter:description"
        content="Revamp your website with redevelopment services in Mumbai by SIB Infotech. Enhance your design functionality to boost user experience and online visibility."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/website-redevelopment-services.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Redevelopment",
            name: "Website Redevelopment Services",
            alternateName: "Top Rated Website Redevelopment Company in India",
            description:
              "SIB Infotech is a top-rated website redevelopment company in Mumbai, India. We revamp and rebuild outdated, underperforming websites to enhance design, functionality, user experience, page speed, mobile responsiveness, and online visibility. Whether your website is not converting visitors into sales, is difficult to update, lacks modern functionality, or has low search engine rankings, our redevelopment services transform your website into a high-performing digital storefront that represents your business at its best.",
            url: "https://www.sibinfotech.com/website-redevelopment-services",
            image:
              "https://www.sibinfotech.com/assets/og/website-redevelopment-services.jpg",

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
              name: "Website Redevelopment Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Conversion Rate Optimisation Redevelopment",
                    description:
                      "Rebuilding website structure, design, and user flows to convert more site visitors into leads and sales — transforming the website into a high-performing digital storefront.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Competitor-Benchmarked Website Redevelopment",
                    description:
                      "Auditing and rebuilding websites to match or exceed competitor standards in design, functionality, and user experience.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Accessibility & Navigation Improvement",
                    description:
                      "Improving website accessibility and navigation so users can easily find all the information they need, reducing bounce rates and improving satisfaction.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CMS-Based Redevelopment for Easy Updating",
                    description:
                      "Rebuilding websites on modern content management systems so that website owners can update content quickly and easily without technical knowledge.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "User Experience (UX) Redevelopment",
                    description:
                      "Redesigning and redeveloping the website's user experience to be intuitive, engaging, and fully satisfying for all categories of visitors.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Functionality & Feature Enhancement",
                    description:
                      "Adding modern features and functionality to websites — including booking systems, e-commerce capabilities, live chat, and integrations — to boost sales and user engagement.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Brand Representation Redevelopment",
                    description:
                      "Rebuilding the website to accurately and powerfully represent the brand, products, and services — making visitors feel warmly greeted and confident in the business.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Responsive & Mobile-Friendly Redevelopment",
                    description:
                      "Fully redeveloping non-responsive websites into mobile-friendly, fully responsive platforms that work flawlessly across all devices and screen sizes.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Page Speed & Performance Optimisation",
                    description:
                      "Redeveloping slow-loading websites to achieve fast page load speeds, improving both user experience and search engine rankings.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO-Friendly Website Redevelopment",
                    description:
                      "Rebuilding websites with a clean, SEO-ready code structure, proper heading hierarchy, meta tags, and technical SEO foundations to improve search engine rankings and organic visibility.",
                  },
                },
              ],
            },

            serviceOutput: [
              "High-Converting, Modern Website",
              "Competitor-Benchmarked Web Presence",
              "Easily Accessible and Navigable Website",
              "CMS-Based Site for Easy Content Management",
              "Improved User Experience and Satisfaction",
              "Feature-Rich Website with Modern Functionality",
              "Strong Brand-Representing Digital Storefront",
              "Fully Responsive and Mobile-Friendly Website",
              "Fast-Loading, High-Performance Website",
              "SEO-Friendly Website with Improved Search Rankings",
            ],

            termsOfService: "https://www.sibinfotech.com/terms-and-conditions",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/website-redevelopment-services",
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
                name: "Website Development Services",
                item: "https://www.sibinfotech.com/website-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Website Redevelopment Services",
                item: "https://www.sibinfotech.com/website-redevelopment-services",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/website-redevelopment-services"
        breadcrumbTitle="Website Redevelopment Services | Modern SEO-Friendly Sites"
        PageRatingSchema
        description={
          "Revamp your website with redevelopment services in Mumbai by SIB Infotech. Enhance your design functionality to boost user experience and online visibility."
        }
        reviewCount={"5312"}
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
                <h1 className="heading fontWeight700 text-white">
                  Website Redevelopment Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Website Redevelopment Comapany
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
                    <span className="textChange">Website Redevelopment </span>{" "}
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
        <Breadcrumb Pagetitle={"Website Redevelopment  "} />
      </div>
      <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Website Redevelopment </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Website Redevelopment  "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-12">
              <p>
                Your website is a representation of your business.It is like
                virtual store for those who are not present at your place make
                them feel they are greeted warmly. Make your website as a
                storefront. Main motive is to convert the site visitors into
                sales. So it becomes a condition that the thing which is
                representing your business should be best.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>
                  When to know if your website needs a redevelopment? For that
                  ask some question first
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <p>
                    Are my current website visitors being converted into sales?
                  </p>
                </li>
                <li>
                  <p>Is my website is as good as my present competitors?</p>
                </li>
                <li>
                  <p>Is my website is easily accessible?</p>
                </li>
                <li>
                  <p>
                    Is it easy to find all the needed information on website for
                    users?
                  </p>
                </li>
                <li>
                  <p>Is it easy for me to update my website?</p>
                </li>
                <li>
                  <p>Am I satisfied with its user experience?</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <p>
                    As technology is developing day by day is there any
                    functionality present that can help me to boost my sales?
                  </p>
                </li>
                <li>
                  <p>Does my website represent my business well?</p>
                </li>
                <li>
                  <p>Is your website responsive?</p>
                </li>
                <li>
                  <p>Does it take more time to load?</p>
                </li>
                <li>
                  <p>Search engine ranks are low?</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Website Re-development Services Company in India"
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
