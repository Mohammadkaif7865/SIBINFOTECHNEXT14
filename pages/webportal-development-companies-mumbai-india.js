import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function WebPortalCompanyMumbai() {
  const metaTags = (
    <>
      <title>Web Portal Development Company Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Build custom web portals in Mumbai with SIB Infotech. Professional portal development services for B2B, B2C, and enterprise solutions tailored to your needs."
      />
      <meta
        name="keywords"
        content="
web portal development services,web portal development service,offshore web portal development,web portal development companies,web portal development company,web portal development india,web portal development delhi,web portal development mumbai,web port"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/webportal-development-companies-mumbai-india"
      />
      <meta
        property="og:title"
        content="Web Portal Development Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Build custom web portals in Mumbai with SIB Infotech. Professional portal development services for B2B, B2C, and enterprise solutions tailored to your needs."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/webportal-development-companies-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/webportal-development-companies-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Web Portal Development Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Build custom web portals in Mumbai with SIB Infotech. Professional portal development services for B2B, B2C, and enterprise solutions tailored to your needs."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/webportal-development-companies-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/webportal-development-companies-mumbai-india"
        breadcrumbTitle="Web Portal Development Company Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Build custom web portals in Mumbai with SIB Infotech. Professional portal development services for B2B, B2C, and enterprise solutions tailored to your needs."
        }
        reviewCount={"5301"}
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
                <h1 className="heading   fontHeading fontWeight700 text-white">
                  Web Portal Development Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Web Portal Development Company in Mumbai, India
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
                    <span className="textChange">Web Portal Development</span>{" "}
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
        <Breadcrumb Pagetitle={"Web Portal Development "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Web Portal Development</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Web Portal Development "} />
      </div>
      <section>
        <div className="containerFull">
          <h3 className="customHeading customLineHeight text-center">
            SIB Infotech develops well planned, fully functional{" "}
            <span className="text_red">Web Portals</span>
            <br />
            Teeming with information, features and facilities, we design portals
            that inform
          </h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="web-portal-img">
                <img
                  className="image-full"
                  src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/web-portal-development-company-in-india.png"
                  alt="Web-Portal-Development-Company-In-India"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5">
              <p className="customText">
                We produce portals based on information design and usability
                with simple yet appealing graphic user interfaces.
              </p>
              <p className="customText">
                Our portal development services range over portal designing,
                portal development, offshore portal development, portal
                maintenance. We design and develop multi-domain web portals
                which include B2B (Business to Business) portals, B2C (Business
                to Consumer) portals, e-commerce portals, SharePoint portals,
                Knowledge Management Portals, Job Portals, Service Portals and
                more.
              </p>
              <p className="customText">
                We custom design and develop portals for clients of all
                industries and business sectors. Years of experience, abundant
                resources and skilled minds put together reflect upon the
                quality of the portals we develop.
              </p>
              <p className="customText">
                SIB Infotech delivers comprehensive services that serve you to
                the fullest. Our custom designed web portals offer users from
                across the globe – anywhere – anytime access – to your business
                and services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey position-relative">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-3">
              <div className="bgBlueDarkLeft p-sticky">
                <h3 className="customHeading text-white customLineHeight2">
                  How can Hosted Marketing Pages help my site's rankings?
                </h3>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-content.svg"
                        alt="Web-Portal-Development-Company-In-Delhi"
                      />
                    </div>
                    <h4>Content Management</h4>
                    <p className="customText">
                      Web-based administration panels, full life-cycle of
                      content creation and publishing, single-sourcing
                      distribution, mash-ups, content approvals and go-live
                      authorization.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-digital-data.svg"
                        alt="Web-Portal-Development-Company-In-Mumbai"
                      />
                    </div>
                    <h4>Digital Data Management</h4>
                    <p className="customText">
                      Document management (authoring, version control, storage,
                      publishing), data repositories, digital media distribution
                      (e.g. audio/video streaming), integrated search and data
                      mining.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-user-management.svg"
                        alt="Web-Portal-Development-Company"
                      />
                    </div>
                    <h4>User Management</h4>
                    <p className="customText">
                      User authentication (registration/login), single sign-on,
                      profiling, multilevel membership, user administration,
                      user behavior tracking, reporting and analysis.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-colaboration.svg"
                        alt="Web-Portal-Development-Firm-In-India"
                      />
                    </div>
                    <h4>Collaboration and Communication</h4>
                    <p className="customText">
                      Mailing systems, web conferencing, instant messaging,
                      Voice over IP, forums, chats, blogs, message boards,
                      feedback forms, event calendars, electronic newsletters,
                      polls, surveys, ratings and reviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-ecommerce.svg"
                        alt="Web-Portal-Development-Firm-In-Delhi"
                      />
                    </div>
                    <h4>Ecommerce</h4>
                    <p className="customText">
                      Product catalogues, shopping carts, auctions, billing and
                      secure payment processing, order management, shipping,
                      inventory management.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-business-process.svg"
                        alt="Web-Portal-Development-Firm-In-Mumbai"
                      />
                    </div>
                    <h4>Business Process Automation</h4>
                    <p className="customText">
                      Customer Relationship Management, Human Resources
                      Management, Workflow Management, Supply Chain Management,
                      Accounting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="web-portal-box">
                    <div className="web-portal-icon-box">
                      <img
                        src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-portal-security.svg"
                        alt="Web-Portal-Development-Firm"
                      />
                    </div>
                    <h4>Security</h4>
                    <p className="customText">
                      Various user privileges and access levels, personalized
                      content distribution, data encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="bgImageEffect"
            src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/tab-img-pattern.png"
            alt="Web-Portal-Development-Agency"
          />
        </div>
      </section>
    </CustomLayout>
  );
}
