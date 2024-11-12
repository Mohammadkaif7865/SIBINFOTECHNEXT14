import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function FacebookMarketing() {
  const metaTags = (
    <>
      <title>Facebook Marketing Services in Mumbai, India | SIB Infotech</title>
      <meta name="description" content="Enhance your brand reach with Facebook marketing services in India from SIB Infotech. Create targeted campaigns to drive engagement and boost conversions." />
      <meta name="keywords" content="Facebook Marketing" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/facebook-marketing" />
      <meta property="og:title" content="Facebook Marketing Services in Mumbai, India | SIB Infotech" />
      <meta property="og:description" content="Enhance your brand reach with Facebook marketing services in India from SIB Infotech. Create targeted campaigns to drive engagement and boost conversions." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/facebook-marketing.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/facebook-marketing" />
      <meta property="twitter:title" content="Facebook Marketing Services in Mumbai, India | SIB Infotech" />
      <meta property="twitter:description" content="Enhance your brand reach with Facebook marketing services in India from SIB Infotech. Create targeted campaigns to drive engagement and boost conversions." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/facebook-marketing.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/facebook-marketing"
        breadcrumbTitle="Facebook Marketing Services in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Enhance your brand reach with Facebook marketing services in India from SIB Infotech. Create targeted campaigns to drive engagement and boost conversions."
        }
        reviewCount={"5196"}
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
                  Facebook Marketing
                </h1>
                <h2 className="small_heading fw-bold mt-lg-2 mt-1 text-white">
                  Top Rated Facebook Marketing Company in India
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
                    Best <span className="textChange">Facebook Marketing</span>{" "}
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
        Pagetitle={" Facebook Marketing"}
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Facebook Marketing</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={' Facebook Marketing'} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  People Don't Expect Your Company to be Perfect. They Expect
                  You to Provide Solutions
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                In the fourth quarter of 2017, Facebook had 2.2 billion active
                users. In which India ranked first with 250 million users. Today
                Facebook is the topmost in social media. Before initiating
                marketing on any social media handout what you require is
                precise planning that will push forward your business and its
                liked by all.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <h3 className="mainCustom">
                  SIB Infotech has the following procedure towards promoting
                  your brand
                </h3>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <h4 className="custom-box-title">Develop your Game Plan</h4>
                <p>
                  Before creating a facebook page you need to get your goals
                  straight. A page cant meets your goals unless you determine
                  your goals. SIB Infotech will help you to determine the goals
                  that you need to fulfil in priority.
                </p>
                <p>
                  Audience Concentration: Here you need to hit the right people.
                  Because they will be your potential clients in the future.
                  Many times audience is not aware regarding services and
                  solutions that your company provides.
                </p>
                <p>
                  Creating Facebook Marketing Plan: The crucial step is the
                  right content mix. There's an 80:20 pattern. This pattern
                  indicates that 80% of your content should be informative,
                  facts, educate and entertain. 20% should be ads related to
                  your brand and company.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">
                  Create a Facebook Business Page
                </p>
                <p>
                  Once nailing down marketing strategy, your facebook page is
                  the business presence online. You need to engage your
                  followers, post content and participate as a brand in facebook
                  experience.
                </p>
                <p>
                  Key Points: Choosing search-friendly page, in most cases, it
                  will be your brand name Set a custom or â€œvanityâ€ URL for
                  your Page thatâ€™s consistent with your handle on other social
                  networks.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Start Posting</p>
                <p>
                  Posting just written content won't leave that much of impact.
                  Uploading photos and videos with written content attracts
                  users to look for your business. Another option is â€œLive
                  Video.â€ Sessions that shouldnâ€™t be too short. Because it's
                  going to take time to make users engrossed in your live video.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Linked Content Post</p>
                <p>
                  Connecting your different content with the cross social media
                  platform.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Pinned Post</p>
                <p>
                  Here users apply this tool to pin your post at the top. It
                  always stays at the top of the news feed.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Facebook Group</p>
                <p>
                  Creating a Facebook group is one of the approaches to get
                  around your customers. Here what happens is they will discuss
                  your companyâ€™s products and services. You should also be
                  part of the discussion. It reflects your companyâ€™s interest
                  in customers.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Incorporate Facebook Ads</p>
                <p>
                  Similar to an ad on any other channelâ€”traditional or
                  digitalâ€”a Facebook Ad is basically content that you pay to
                  share with a specific, targeted audience.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Track, measure, and refine</p>
                <p>
                  SIB Infotech tracks audience engagement in your content
                  through tools such as Facebook Insights, etc. It allows you
                  measure like, reaction, comments, etc on your post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
