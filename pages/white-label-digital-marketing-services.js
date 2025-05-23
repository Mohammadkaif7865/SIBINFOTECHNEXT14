import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import Testimonials from "@/comps/Home/Testimonials";
import About2 from "@/comps/WhiteLabel/About";
import BrandBuild from "@/comps/WhiteLabel/BrandBuild";
import CaseStudy from "@/comps/WhiteLabel/CaseStudy";
import Cta from "@/comps/WhiteLabel/Cta";
import Cta2 from "@/comps/WhiteLabel/Cta2";
import DeliverGrowth from "@/comps/WhiteLabel/DeliverGrowth";
import Faq from "@/comps/WhiteLabel/Faq";
import Featured from "@/comps/WhiteLabel/Featured";
import Industries from "@/comps/WhiteLabel/Industries";
import KeyBenifits from "@/comps/WhiteLabel/KeyBenifits";
import Partnership from "@/comps/WhiteLabel/Partnership";
import Solution from "@/comps/WhiteLabel/Solution";
import Tools from "@/comps/WhiteLabel/Tools";
import WhyChoose from "@/comps/WhiteLabel/WhyChoose";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";

export default function TwoDAnimationServicesMumbaiIndia() {
  const metaTags = (
    <>
      <title>
        White Label Digital Marketing Services in India - Scalable & Affordable
        Solutions
      </title>
      <meta
        name="description"
        content="Boost your agency's revenue with our White Label Digital Marketing Services. Get expert SEO, PPC & Social Media solution &  expand your agency's capabilities under your brand. 100% private label. Contact us today!"
      />
      <meta name="keywords" content="White Label Digital Marketing Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/white-label-digital-marketing-services"
      />
      <meta
        property="og:title"
        content="White Label Digital Marketing Services in India - Scalable & Affordable Solutions"
      />
      <meta
        property="og:description"
        content="Boost your agency's revenue with our White Label Digital Marketing Services. Get expert SEO, PPC & Social Media solution &  expand your agency's capabilities under your brand. 100% private label. Contact us today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/white-label-digital-marketing-services"
      />
      <meta
        property="twitter:title"
        content="White Label Digital Marketing Services in India - Scalable & Affordable Solutions"
      />
      <meta
        property="twitter:description"
        content="Boost your agency's revenue with our White Label Digital Marketing Services. Get expert SEO, PPC & Social Media solution &  expand your agency's capabilities under your brand. 100% private label. Contact us today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/white-label-digital-marketing-services"
        breadcrumbTitle="White Label Digital Marketing Services in India - Scalable & Affordable Solutions"
        PageRatingSchema
        description={"White Label Digital Marketing Services"}
        reviewCount={"5155"}
      />
    </>
  );

  const whiteLabelServices = [
    {
      title: `White Label <br class="d-none d-md-lg "/> SEO Services`,
      description:
        "Boost your clients' rankings with our White Label SEO—expert strategies, seamless execution, your brand!",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> PPC Management`,
      description:
        "Scale your agency effortlessly with expert White Label PPC Management—high performance, low hassle!",
      img: "/assets/images/white-lable/White-Label-PPC-Services.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> SMO Marketing `,
      description:
        "Grow your clients’ brands with our White Label SMO—engaging content, expert management, your branding!",
      img: "/assets/images/white-lable/White-Label-Social-Media-Marketing.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Facebook Ads`,
      description:
        "Scale your agency with our White Label Facebook Ads—expertly managed, fully branded, and results-driven!",
      img: "/assets/images/white-lable/White-Label-Facebook-ads.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Google Ads`,
      description:
        "Boost client ROI with our White Label Google Ads—expertly managed, fully branded, and performance-focused!",
      img: "/assets/images/white-lable/White-Label-Google-ads.jpg",
    },
    {
      title: ` White label <br class="d-none d-md-lg "/> Link Building`,
      description:
        "High-quality, White Label Link Building for SEO agencies—authority links, seamless delivery, your brand! ",
      img: "/assets/images/white-lable/White-label-link-building.jpg",
    },
  ];

  const agencyWorkflow = [
    {
      title: `Consultation & <br/> Strategy`,
      description:
        "We start by understanding your client’s goals, challenges, and target audience. Our experts craft a customized marketing plan aligned with their needs, ensuring a data-driven approach for success. ",
    },
    {
      title: `Execution Under <br/> Your Brand`,
      description:
        "Our dedicated team executes the strategies while you maintain full control of client communication. Everything is done under your brand name, ensuring a consistent and professional experience for your clients.",
    },
    {
      title: `Branded Reporting <br/>& Actionable Insights`,
      description:
        "Get in-depth performance reports featuring your agency’s branding. We provide clear metrics, campaign analysis, and insights to help you showcase tangible results to your clients.",
    },
    {
      title: `Continuous Optimization <br/>& Dedicated Support `,
      description:
        "Digital marketing is ever-evolving, and so are we. Our team constantly refines strategies, runs A/B tests, and adjusts campaigns to improve performance. We also offer ongoing support to ensure sustained success. ",
    },
  ];
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                {/* <span className="fw-bold title text-white ">Your Trusted</span> */}

                <h1 className="mt-3 heading fontWeight700 text-white ">
                  Your Trusted White Label Marketing Agency in India <br />{" "}
                  <span className="text_red">Grow Faster, Scale Smarter!</span>
                </h1>
                <p
                  className="small_heading mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Power Your Agency’s Growth with Premium White Label SEO, PPC &
                  Social Media Services in India
                </p>
                <div className="mt-4">
                  <Link href="#contact" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#contact" className="btnThemewhiteBorder">
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
                    <span className="textChange">White Label Marketing </span>{" "}
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
        <Breadcrumb Pagetitle={"White Label Digital Marketing Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">White Label Marketing </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"White Label Digital Marketing Services"} />
      </div>
      <About2 />

      <Solution
        heading={"Services We Offer As a"}
        subHeading={"White Label Digital Marketing Agency"}
        discription={
          "Powering Growth for Agencies, Resellers & Global Businesses with White-Label Expertise"
        }
        data={whiteLabelServices}
      />
      <WhyChoose />
      <Cta2
        heading="Delegate the workload, <br /> elevate your success!"
        subheading="Helping you deliver top-notch service and manage your clients better!"
        tagline="Your Brand Name, Our Services"
        buttonText="Schedule a Free Consultation"
        buttonLink="#contact"
        imageSrc="/assets/images/success-arrow.svg"
      />
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Approach To"}
        subtitle={"White Label Digital Marketing"}
        rightDiscription={
          " We seamlessly integrate with your agency to deliver expert digital marketing services under your brand. From strategy to execution, we handle the heavy lifting while you focus on clientrelationships. With branded reports and continuous support, scaling your agency has never been easier!"
        }
        tagline={"Seamless, Scalable, and Results-Driven"}
      />
      <KeyBenifits />
      <BrandBuild />
      <Cta />
      <CaseStudy />
      <DeliverGrowth />
      <Industries />
      <Tools />
      <Featured />

      <div className="bg_light_gray">
        <Testimonials />
      </div>
      <Faq />
    </CustomLayout>
  );
}
