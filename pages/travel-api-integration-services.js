import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function TravelApiIntegrationServices() {
  const metaTags = (
    <>
      <title>Seamless Travel API Integration Services for Your Business</title>
      <meta
        name="description"
        content="Boost your travel business with fast, reliable Travel API Integration services in India by SIB Infotech. Enhance bookings and customer experience effortlessly."
      />
      <meta name="keywords" content="Travel API Integration Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/travel-api-integration-services"
      />
      <meta
        property="og:title"
        content="Seamless Travel API Integration Services for Your Business"
      />
      <meta
        property="og:description"
        content="Boost your travel business with fast, reliable Travel API Integration services in India by SIB Infotech. Enhance bookings and customer experience effortlessly."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/travel-api-integration-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/travel-api-integration-services"
      />
      <meta
        property="twitter:title"
        content="Seamless Travel API Integration Services for Your Business"
      />
      <meta
        property="twitter:description"
        content="Boost your travel business with fast, reliable Travel API Integration services in India by SIB Infotech. Enhance bookings and customer experience effortlessly."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/travel-api-integration-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/travel-api-integration-services"
        breadcrumbTitle="Seamless Travel API Integration Services for Your Business"
        PageRatingSchema
        description={
          "Boost your travel business with fast, reliable Travel API Integration services in India by SIB Infotech. Enhance bookings and customer experience effortlessly."
        }
        reviewCount={"5296"}
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
                  Travel API Integration Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Travel API Integration Company in India
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
                    Best <span className="textChange">API Integration</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={" Travel API Integration "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">API Integration</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={" Travel API Integration "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  We at SIB Infotech realize today's business trends. SIB will
                  bridge the gap in your business and help you connect with
                  others.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                The growing connectivity is API. Application programs interface
                allows for connecting data streams and functionalities between
                different software products. APIs work as control panels for
                developers to link different software components without dealing
                with handling the source code. As per travel industry role If
                you run a hotel business, you can let your customers rent any
                mode of transportation straight from your website by integrating
                your room reservation engine with the available mode of
                transportation- eg rental providers for cars. Hence APIs make
                your customerâ€™s life easier by eliminating time browsing the
                web.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-content-title">
                <p>Travel API</p>
              </div>
              <p>
                Travel industry players have become a lot more broad-minded for
                sharing data, giving rise to more transparency. An example such
                as Uber. In 2014 it allowed third-parties to incorporate the
                â€œrequest the rideâ€ functionality in their applications.
                Today, your common sightseeing app lets users travel from one
                location to another without switching apps. Our Experts at SIB
                Infotech will guide you towards your business success.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="API Integration Services"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <p>Services Our Travel API Integration offers</p>
              </div>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <p>
                    Comprehensive booking and reservation coverage: GDS APIs
                  </p>
                </li>
                <li>
                  <p>Flights data: routes, airfares, delays, ratings</p>
                </li>
                <li>
                  <p>Hotel room reservation APIs from OTAs</p>
                </li>
                <li>
                  <p>
                    Hotel rooms reservation APIs from connectivity and channel
                    managers
                  </p>
                </li>
                <li>
                  <p>Cost-effective</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <p>Content and property mapping</p>
                </li>
                <li>
                  <p>Car rental</p>
                </li>
                <li>
                  <p>Business travel</p>
                </li>
                <li>
                  <p>Reviews and ratings</p>
                </li>
                <li>
                  <p>Public transportation</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="API Integration Development"
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
