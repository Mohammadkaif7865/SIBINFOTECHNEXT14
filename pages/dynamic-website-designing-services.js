
import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function DynamicWebsiteDesigningServices() {
  const metaTags = (
    <>
      <title>Dynamic Website Designing Services in India | SIB Infotech</title>
      <meta name="description" content="Elevate your online presence with dynamic website designing services in India by SIB Infotech. Contact us for dynamic web design solutions for your business!" />
      <meta name="keywords" content="Dynamic Website Designing Services" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/dynamic-website-designing-services" />
      <meta property="og:title" content="Dynamic Website Designing Services in India | SIB Infotech" />
      <meta property="og:description" content="Elevate your online presence with dynamic website designing services in India by SIB Infotech. Contact us for dynamic web design solutions for your business!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/dynamic-website-designing-services.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/dynamic-website-designing-services" />
      <meta property="twitter:title" content="Dynamic Website Designing Services in India | SIB Infotech" />
      <meta property="twitter:description" content="Elevate your online presence with dynamic website designing services in India by SIB Infotech. Contact us for dynamic web design solutions for your business!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/dynamic-website-designing-services.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/dynamic-website-designing-services"
        breadcrumbTitle="Dynamic Website Designing Services in India | SIB Infotech"
        PageRatingSchema
        description={
          "Elevate your online presence with dynamic website designing services in India by SIB Infotech. Contact us for dynamic web design solutions for your business!"
        }
        reviewCount={"5185"}
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
                <h3 className="heading fontWeight700 text-white">
                  Dynamic Website Designing Services
                </h3>
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
                    <span className="textChange">
                      Dynamic Website Designing
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
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={'Dynamic Website Designing'} />
      </div>
      <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Dynamic Website Designing</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={'Dynamic Website Designing'} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <div className="dynamic-website-img2">
                <img
                  className="image-full"
                  src="assets/images/dynamic-website-company-in-delhi.png"
                  alt="Dynamic-Website-Designing-Company-In-India"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="customHeading customLineHeight">
                The present revolution needs each business to have a rocking web
                presence to <span className="text_red">Draw Attention</span> of
                viewers
              </h3>
              <p className="customText">
                Only having a website is not enough; you need to modernize with
                the transformation that are captivating in your business to make
                sure that the newest information is conveyed to your potential
                and present customers.
              </p>
              <p className="customText">
                SIB Infotech deeds to gift an irresistible facelift to its
                client’s website visibility as well as seek to offer them
                improved online presence. At SIB Infotech, we make top nick
                active web design service whereby you will get spontaneous
                interface and high level of flexibility.
              </p>
              <p className="customText">
                Using our dynamic website services you can supervise your
                inventory, order tracking, customer database and client
                information services online. This can be accessible from
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="customHeading">
                You can do all the Work <span className="text_red">Online</span>
              </h3>
              <ul className="ul-li">
                <li className="customText">
                  Use the online password-protected administration system to
                  manage your site.
                </li>
                <li className="customText">
                  Easily add, amend or delete your information and images.
                </li>
                <li className="customText">
                  Update your web pages without any technical knowledge.
                </li>
                <li className="customText">
                  As easy to use as a word-processor, with familiar buttons.
                </li>
                <li className="customText">
                  Add pictures / URLs to link to other websites.
                </li>
                <li className="customText">
                  Add an instant contact form allowing visitors to request
                  information.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="dynamic-website-img">
                <img
                  className="image-full"
                  src="assets/images/dynamic-website-design-company-in-india.png"
                  alt="Dynamic-Website-Designing-Company-In-Delhi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
