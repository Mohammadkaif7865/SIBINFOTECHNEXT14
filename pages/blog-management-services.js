import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb"

export default function BlogManagementServices() {
  const metaTags = (
    <>
      <title>Professional Blog Management Services Company Mumbai, India</title>
      <meta
        name="description"
        content="Struggling to keep your blog active and effective? SIB Infotech’s blog management services in Mumbai deliver SEO-driven content that attracts traffic, builds credibility, and grows your business."
      />
      <meta
        name="keywords"
        content="Blog management, blog management consulting, multiple blog management, wordpress blog management, blogs management services, blog services, blog promotion, manage blog, business blog"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/blog-management-services
"
      />
      <meta
        property="og:title"
        content="Professional Blog Management Services Company Mumbai, India"
      />
      <meta
        property="og:description"
        content="Struggling to keep your blog active and effective? SIB Infotech’s blog management services in Mumbai deliver SEO-driven content that attracts traffic, builds credibility, and grows your business."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/blog-management-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/blog-management-services"
      />
      <meta
        property="twitter:title"
        content="Professional Blog Management Services Company Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Struggling to keep your blog active and effective? SIB Infotech’s blog management services in Mumbai deliver SEO-driven content that attracts traffic, builds credibility, and grows your business."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/blog-management-services.jpg
        
"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/blog-management-services"
        breadcrumbTitle="Professional Blog Management Services Company Mumbai, India"
        PageRatingSchema
        description={
          "SIB Infotech offers 360-degree blog management services in Mumbai, India that would bring traffic to your blog and increase your brand awareness and sales"
        }
        reviewCount={"5165"}
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
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Blog Management Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Blog Management Company in India
                </h2>
                <div className="mt-4">
                  <Link href="#" className="btnThemeRed me-3">
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
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Blog Management</span>{" "}
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
        <Breadcrumb
          Pagetitle={
            "Professional Blog Management"
          }
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Blog Management</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={
            "Professional Blog Management"
          }
        />
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <p className="customText">
                Blogs are a very important part of any brand's website. Your
                brand forms an image that is created by your blog and its
                content. A proper blog can work wonders for your website. It is
                a great platform to interact with the audience and customers.
              </p>
              <p className="customText">
                Blog management plays a very crucial role in redefining and
                maintaining your company's website. It a procedure of content
                creation, maintenance and sharing of blogs to increase
                engagement and traffic of your website. Blog management is
                considered to be the most effective social media marketing tool
                to keep your blogs updated and fresh.
              </p>
              <p className="customText">
                An effective social media marketing strategy is a mixture of
                several tools including blog management that can set your sales
                on fire in no time. But the success is highly dependent on the
                blog management agency you choose for your brand's website. SIB
                Infotech can be your friend in need as it the best blog
                marketing management company in India with offices in Mumbai and
                Delhi offering top blog management services in India.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="image-full imgAnimation"
                src="assets/images/blog-managemnet-company-in-mumbai.svg"
                alt="blog-managemnet-company-in-mumbai"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftDigiSer exPadding">
                <div className="heading-section">
                  <h3 className="customHeading text-white customLineHeight fontHeading">
                    Blog management is considered to be a great investment asset
                    for any business
                  </h3>
                  <p className="customText text-off-white">
                    Our blog management services assure the best results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="middle-row">
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-management-website-traffic.svg"
                    alt="blog-management-agency-in-mumbai"
                  />
                  <h4 className="fontHeading">Increased website traffic</h4>
                </div>
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-managemnet-lead-generation.svg"
                    alt="best-blog-management-company"
                  />
                  <h4 className="fontHeading">Lead generation</h4>
                </div>
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-management-boots-user-engagenment.svg"
                    alt="best-blog-management-Boosts-user engagement-company-in-india"
                  />
                  <h4>Boosts user engagement</h4>
                </div>
              </div>
              <div className="middle-row">
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-managemnet-build-brand-reputation.svg"
                    alt="best-blog-management-company-in-mumbai"
                  />
                  <h4>Builds brand reputation</h4>
                </div>
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-managemnet-increase-conversion.svg"
                    alt="best-blog-management-companies"
                  />
                  <h4>Increases website conversions</h4>
                </div>
                <div className="middle-box">
                  <img
                    src="assets/images/icons/blog-management-cost-effective.svg"
                    alt="best-blog-management-companies-in-india"
                  />
                  <h4>Cost Effective</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <h3 className="customHeading text-center">
            How SIB <span className="text_red">Blog Management</span> &amp;{" "}
            <span>Marketing</span> Services will help your company?
          </h3>
          <p className="customText text-center">
            We help clients manage their blogs and implement technical methods
            to guarantee maximum social media impact. Our blog management
            strategy is a complete game-changer for your website. We offer -
          </p>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-managemnet-quality-keyword-search.svg"
                  alt="blog-managemnet-quality-keyword-search"
                />
                <h4 className="fontHeading">
                  Top-quality topic &amp; keyword research
                </h4>
                <p className="customText">
                  We perform industry research every month for analyzing the
                  user needs and market trends. We always make sure that we
                  provide your website the blogs which are trending, relative
                  and in-demand according to your company’s target audience.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-managemnet-content-writting.svg"
                  alt="blog-managemnet-content-writting"
                />
                <h4>Proficient content writing</h4>
                <p className="customText">
                  Our team of skilled and experienced content writers and
                  bloggers create engaging, fresh and keyword integrated content
                  for your blog. We provide content that can adapt to any style
                  or tone which suits your industry. We create effective and
                  optimized content that boosts your blog’s engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyword-section ">
                <h3 className="customHeading custom-line-height">
                  We create content that is interesting, compulsive, grabs{" "}
                  <span className="text_red">attention</span> and{" "}
                  <span className="text_red">highly</span> engaging
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="keyword-section ">
                <h3 className="customHeading text-right custom-line-height">
                  We guarantee to take your brand to great heights with our{" "}
                  <span className="text_red">reliable strategies</span> which
                  are based upon your brand's requirements and goals
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-managemnet-high-quality-images.svg"
                  alt="blog-managemnet-high-quality-images"
                />
                <h4 className="fontHeading">
                  High-quality graphics &amp; Stock images
                </h4>
                <p className="customText">
                  Our team creates SEO optimized content for your blog which
                  includes vibrant keywords and phrases. We embed the blog
                  content with high quality and relatable graphics and pictures
                  that attracts masses to your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-managemnet-reposrting-ans-statics.svg"
                  alt="blog-managemnet-reposrting-ans-statics"
                />
                <h4 className="fontHeading">Reports &amp; statistics</h4>
                <p className="customText">
                  We send you reports of your blog. The reports include statics
                  related to user engagement, shares, reach and lead generation.
                  We always keep a check that your blog is the best that can't
                  be ignored by the audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-managemnet-optimized-blog.svg"
                  alt="blog-managemnet-optimized-blog"
                />
                <h4 className="fontHeading">SEO optimized blogs</h4>
                <p className="customText">
                  After the creation of the blog content, our SEO experts
                  analyses it carefully and optimizes the blog to its full
                  potential that leads the search engine's top results.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-box">
                <img
                  src="assets/images/icons/blog-management-improve-blog-reach.svg"
                  alt="blog-management-improve-blog-reach"
                />
                <h4 className="fontHeading">Improved blog reach</h4>
                <p className="customText">
                  We not only publish articles and blogs on your website, rather
                  we make sure that we share them on your social medial
                  platforms to ensure its maximum reach.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyword-section ">
                <h3 className="customHeading custom-line-height">
                  We always make certain that your company{" "}
                  <span className="text_red">gets the exposure </span>it needs
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blueBg2">
        <div className="containerFull">
          <div className="callAction">
            <h3 className="customLineHeight2 fontHeading">
              Are you ready to partner #1 blog management company in India for
              ultimate blogging solutions?
            </h3>
            <p className="customText text-off-white">
              #1 Agency for Social media marketing services in India with
              offices in Mumbai and Delhi.
            </p>
            <Link href="https://www.sibinfotech.com/contact-us">
              Speak to Our Social Media Marketing Experts
            </Link>
          </div>
          <svg
            id="pattner"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#528af9"
              fill-opacity="1"
            ></path>{" "}
          </svg>
        </div>
      </section>
    </CustomLayout>
  );
}
