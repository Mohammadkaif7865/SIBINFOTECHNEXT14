import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function AspnetDevelopmentCompanyMumbai() {
  const metaTags = (
    <>
      <title>ASP.NET Development Services Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Get robust, scalable ASP.NET development services from SIB Infotech. We specialize in building dynamic and secure websites tailored to your business needs."
      />
      <meta
        name="keywords"
        content="asp.net development services,asp.net development service,offshore asp.net development,asp.net development companies,asp.net development company,asp.net development india,asp.net development delhi,asp.net development mumbai,asp.net development chennai,asp."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/aspnet-development-companies-mumbai-india"
      />
      <meta
        property="og:title"
        content="ASP.NET Development Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Get robust, scalable ASP.NET development services from SIB Infotech. We specialize in building dynamic and secure websites tailored to your business needs."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/aspnet-development-companies-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/aspnet-development-companies-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="ASP.NET Development Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Get robust, scalable ASP.NET development services from SIB Infotech. We specialize in building dynamic and secure websites tailored to your business needs."
      />

      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/aspnet-development-companies-mumbai-india.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "ASP.NET Development",
            name: "ASP.NET Development Services",
            alternateName: "Top Rated ASP.NET Development Company in India",
            description:
              "SIB Infotech has vast competency in ASP.NET Development and ASP.NET Application Development. The .NET Framework is one of the most popular and widely used scripting languages to create business solutions for public and private cloud environments and client devices such as desktops and smartphones. Our expert ASP.NET developers offer robust, scalable, dynamic, and secure ASP.NET development solutions tailored to your specific business needs.",
            url: "https://www.sibinfotech.com/aspnet-development-companies-mumbai-india",
            image:
              "https://www.sibinfotech.com/assets/og/aspnet-development-companies-mumbai-india.jpg",

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
              name: "ASP.NET Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ASP.NET Web Application Development",
                    description:
                      "Custom ASP.NET web-based application development using the .NET Framework to build dynamic, secure, and scalable business web applications.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: ".NET Database Application Development",
                    description:
                      "Robust database-driven application development using ASP.NET and Microsoft SQL Server for efficient data storage, retrieval, and management.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CRM & ERP Development in ASP.NET",
                    description:
                      "Custom CRM and ERP software solutions developed on the ASP.NET platform to streamline business operations and improve efficiency.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile Application Development",
                    description:
                      "Cross-platform mobile application development using .NET technologies for deployment on desktops, smartphones, and other client devices.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Enterprise Content Management Systems & Portal Solutions",
                    description:
                      "Development of enterprise-grade content management systems and portal solutions using ASP.NET for large-scale business requirements.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "B2B and B2C Website Application Development",
                    description:
                      "Custom Business-to-Business and Business-to-Consumer web application development on the ASP.NET platform for seamless online business operations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ASP.NET E-Commerce & Shopping Cart Development",
                    description:
                      "Feature-rich ASP.NET e-commerce and shopping cart development solutions for businesses looking to sell products and services online securely.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Migration of Applications to ASP.NET",
                    description:
                      "Seamless migration of existing web applications from other programming languages and platforms to ASP.NET for improved performance and scalability.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: ".NET Based Products Customization",
                    description:
                      "Customisation and enhancement of existing .NET-based products to meet specific business requirements and evolving functional needs.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ASP.NET Application Re-engineering, Maintenance & Support",
                    description:
                      "Development, re-engineering, ongoing maintenance, and dedicated support for existing ASP.NET applications to ensure they remain secure, updated, and high-performing.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Robust and Scalable ASP.NET Web Application",
              "Dynamic and Secure Business Website",
              "Custom CRM and ERP Solution",
              "Enterprise Content Management System",
              "B2B and B2C Web Application",
              "ASP.NET E-Commerce Platform",
              "Migrated and Re-engineered .NET Application",
            ],

            termsOfService: "https://www.sibinfotech.com/terms-and-conditions",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/aspnet-development-companies-mumbai-india",
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
                name: "Web Development Services",
                item: "https://www.sibinfotech.com/website-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "ASP.NET Development Services",
                item: "https://www.sibinfotech.com/aspnet-development-companies-mumbai-india",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/aspnet-development-companies-mumbai-india"
        breadcrumbTitle="ASP.NET Development Services Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          " Get robust, scalable ASP.NET development services from SIB Infotech. We specialize in building dynamic and secure websites tailored to your business needs."
        }
        reviewCount={"5163"}
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
                <h1 className="heading fontWeight700 text-white fontHeading">
                  ASP.NET Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated ASP.NET Development Company in India
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
                    Best{" "}
                    <span className="textChange">ASP.NET Development </span>{" "}
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
        <Breadcrumb Pagetitle={"ASP.NET Development Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">ASP.NET Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"ASP.NET Development Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech has a vast competency in ASP.NET Development and
                  ASP.Net Application Development.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                The .NET Framework is one of the most popular and widely used
                scripting language to create business solutions that work just
                the way you want. Be it the public and private cloud or client
                devices such as desktops and smartphones, our custom .NET
                development services can help you create the most appropriate
                solution for your business context
              </p>
              <p>
                Our Team of expert ASP.NET Developers possess vast expertise in
                ASP.NET Application Development and offer various ASP.NET
                Development Solutions that includes ASP.NET web based
                application development, ASP.NET programming, ASP.NET
                ecommerce/shopping cart development solutions and many more.
              </p>
              <div className="custom-content-title">
                <p>Hire .NET Web Developers</p>
              </div>
              <p>
                If you need to hire .NET developers for your next project or
                want to outsource .NET development tasks on an ongoing basis by
                having an specialist .NET development company onboard, get in
                touch with SIB Infotech today
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="ASP.NET Development Services Company in India"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>SIB Infotech's ASP.NET Development Services include</p>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>ASP.NET Web Application Development</p>
                    </li>
                    <li>
                      <p>.NET Database Application Development</p>
                    </li>
                    <li>
                      <p>CRM/ERP Development&nbsp;in ASP.NET</p>
                    </li>
                    <li>
                      <p>Mobile Application Development&nbsp;</p>
                    </li>
                    <li>
                      <p>
                        Enterprise Content Management Systems &amp; Portal
                        Solutions
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>B2B and B2C website application development</p>
                    </li>
                    <li>
                      <p>
                        Migration of applications to ASP.Net from other
                        languages
                      </p>
                    </li>
                    <li>
                      <p>.NET based Products Customization</p>
                    </li>
                    <li>
                      <p>
                        Development, Re-engineering, Maintenance, support of
                        existing application
                      </p>
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
