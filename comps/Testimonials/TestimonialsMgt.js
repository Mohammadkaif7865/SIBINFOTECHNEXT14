import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";
import OurClients from "@/comps/Home/OurClients";

const TestimonialsMgt = () => {
  const testimonials = [
    {
      userImg: "/assets/images/timothy-scafaria.jpeg",
      heading: "Platform Development for Ed-Tech Marketplace",
      content:
        "The platform has just launched. but some of the company's old clients have already expressed their positive feedback on the new website. The company appreciates how the SIB Infotech team showed they cared for the project through their open and honest communication especially when suggesting ideas.",
      userName: "Timothy Scafaria",
      userTitle: "Founder, remoteUprep, LLC",
      reviewSource: "Clutch",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
    {
      userImg: "/assets/images/rupesh-maniar.jpg",
      heading: "Website Development Agency Services Mumbai",
      content:
        "SIB Infotech has designed website for our company. We are very happy with outcome. They are not only professional but also putting their heart into work. We would have suggested changes many times added many products all they have done with smiling face. We will always refer them for quality work and perfect price.",
      userName: "Rupesh Maniar",
      userTitle: "Real Value Finloan Services Pvt. Ltd.",
      reviewSource: "Google",
      reviewSourceLogo: "/assets/images/google-logo.png",
    },
    {
      userImg: "/assets/images/tima-elhajj.jpeg",
      heading: "Website Development for Media & Consulting Company",
      content:
        "The client loved the platform that the SIB Infotech team developed for them, especially the calculator function that was included. The company appreciated the team's high level of professionalism, communication, and care on the project. They are happy and willing to work with the team again.",
      userName: "Tima Elhajj",
      userTitle: "CEO & Founder, Tima Media",
      reviewSource: "Clutch",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
  ];

  const testimonialLogos = [
    { src: "/assets/images/logos/google.png", alt: "Google Reviews" },
    { src: "/assets/images/logos/clutch.png", alt: "Clutch Reviews" },
    { src: "/assets/images/logos/trust-pilot.png", alt: "Trustpilot Reviews" },
    { src: "/assets/images/logos/goodfirms.png", alt: "GoodFirms Reviews" },
    { src: "/assets/images/logos/facebook.png", alt: "Facebook Reviews" },
    { src: "/assets/images/logos/just-dial.png", alt: "Justdial Reviews" },
  ];

  const trustPoints = [
    {
      title: "Verified Reviews on Leading Platforms",
      description:
        "Our clients rate us on Google, Clutch, Trustpilot, GoodFirms, Facebook, and Justdial — every review is public and verifiable.",
    },
    {
      title: "5.0 Average Client Rating",
      description:
        "We maintain a 5.0 average rating across our review profiles, built through consistent delivery and transparent communication.",
    },
    {
      title: "850+ Active Clients",
      description:
        "From startups to enterprise brands, our clients across 40+ countries choose SIB Infotech for long-term digital growth partnerships.",
    },
    {
      title: "18+ Years of Experience",
      description:
        "Two decades of digital marketing, SEO, and web development expertise across every major industry vertical.",
    },
    {
      title: "Google Premier Partner",
      description:
        "Ranked among the top 3% of Google Partners in India with direct access to the latest platform features and betas.",
    },
    {
      title: "Long-Term Client Relationships",
      description:
        "Most of our clients stay with us for years, renewing and expanding their engagements as their businesses grow.",
    },
  ];

  const faqsData = [
    {
      id: "faq-testimonials-1",
      question: "How can I leave a review for SIB Infotech?",
      answer: `<p>You can review us directly on Google, Clutch, Trustpilot, GoodFirms, Facebook, or Justdial. Existing clients can also reach out to their account manager and we will share direct review links for their preferred platform.</p>`,
    },
    {
      id: "faq-testimonials-2",
      question: "Are the reviews on this page verified?",
      answer: `<p>Yes. Every review shown is published on a third-party review platform where the reviewer is a real, verified client. We never post fake reviews, and we encourage clients to share their honest experience.</p>`,
    },
    {
      id: "faq-testimonials-3",
      question: "What do clients rate SIB Infotech?",
      answer: `<p>SIB Infotech maintains a 5.0 average client rating across our Google, Clutch, Trustpilot, and GoodFirms profiles, built over 18+ years of delivering measurable digital marketing results.</p>`,
    },
    {
      id: "faq-testimonials-4",
      question: "Can I speak with a current SIB Infotech client?",
      answer: `<p>Yes. We are happy to connect you with a relevant existing client reference, subject to their consent. Contact us and our team will arrange an introduction suited to your industry and requirements.</p>`,
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="mt-3 heading fontWeight700 text-white">
                  Verified Client Reviews &{" "}
                  <span className="text_red fontWeight700">Testimonials</span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | 5.0 Average Client Rating
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  Read verified client testimonials and reviews for SIB Infotech. Rated 5.0 stars on
                  Google, Clutch, Trustpilot, GoodFirms and more for SEO, digital marketing, and web
                  development services.
                </p>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <Link href="/contact-us" className="btnThemeRed">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Join 850+ Happy Clients
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    SIB Infotech Client Reviews
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Client Testimonials"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Join 850+ Happy Clients
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              SIB Infotech Client Reviews
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Client Testimonials"} />
      </div>

      {/* Rating Summary */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center">
              <div className="testimonialLeftBox shadow-lg">
                <p className="large_heading3 text-white fontWeight600 text-center">5.0</p>
                <div className="starIcontesti">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/icons/star.svg"
                    alt="5 Star Rating"
                  />
                </div>
                <p className="title fontWeight400 mt-2 text-center text-white">
                  Digital Marketing and SEO Agency Reviews about SIB Infotech
                </p>
              </div>
            </div>
            <div className="col-lg-8 mt-4 mt-lg-0">
              <h2 className="heading fontWeight600">
                Rated 5.0 by Clients on{" "}
                <span className="text_red">Every Major Review Platform</span>
              </h2>
              <p className="customText mt-3">
                Our 5.0 average client rating is built on one thing: delivering the results we
                promise. From SEO rankings and lead generation to web development and paid marketing,
                our clients across 40+ countries have shared their experience publicly.
              </p>
              <div className="row mt-4 g-3">
                {testimonialLogos.map((logo, i) => (
                  <div className="col-lg-2 col-6" key={i}>
                    <div className="logoTestimonial position-relative bg-white rounded p-3">
                      <div className="glossyBorder7"></div>
                      <div className="glossyBorder8"></div>
                      <Image
                        width={200}
                        height={200}
                        src={logo.src}
                        alt={logo.alt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                What Our Clients <span className="text_red">Say About Us</span>
              </h2>
              <p className="customText mt-3">
                Real feedback from real clients across web development, SEO, and digital marketing
                engagements.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-lg-4" key={i}>
                <div className="customCard h-100 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle overflow-hidden position-relative me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "#c3d6fc",
                        border: "1px solid #c3d6fc",
                      }}
                    >
                      <Image
                        fill
                        quality={100}
                        className="object-fit-cover"
                        src={t.userImg}
                        alt={t.userName}
                      />
                    </div>
                    <div>
                      <p className="title fontWeight600 mb-0">{t.userName}</p>
                      <p className="small mb-0">{t.userTitle}</p>
                    </div>
                  </div>
                  <div className="starIcontesti mb-3">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/icons/star.svg"
                      alt="5 Star Rating"
                    />
                  </div>
                  <h4 className="small_heading fontWeight600 mb-2">{t.heading}</h4>
                  <p className="customText">{t.content}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="fontWeight500 text_red text-uppercase small mb-0">
                      Reviewed From
                    </p>
                    <Image
                      width={80}
                      height={40}
                      className="h-auto"
                      src={t.reviewSourceLogo}
                      alt={t.reviewSource}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Why Clients <span className="text_red">Trust SIB Infotech</span>
              </h2>
              <p className="customText mt-3">
                A 5.0 rating is the outcome. Here is what consistently earns it.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {trustPoints.map((point, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="customCard h-100 p-4">
                  <h4 className="small_heading fontWeight600 mb-2">{point.title}</h4>
                  <p className="customText mb-0">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dots curve1 bgEffect">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="fontHeading sub_heading text_blue_light fontWeight800">
                5.0 RATED DIGITAL MARKETING AGENCY
              </h5>
              <h4 className="sub_heading fontHeading fontWeight600 mt-3">
                Ready to Become Our <span className="text_red">Next Success Story?</span>
              </h4>
              <p className="customText mt-3">
                Join 850+ businesses that trust SIB Infotech for SEO, digital marketing, and web
                development. Let us deliver the results you can add to your own growth story.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <Link href="/contact-us" className="btnThemeRed">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                </Link>
                <Link href="/contact-us" className="btnThemewhiteBorder">
                  <i className="fa-solid fa-circle-question me-2"></i> Ask a Question
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Join 850+ Happy Clients
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    SIB Infotech Client Reviews
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <OurClients />

      {/* FAQs */}
      <Faq
        title={"Frequently Asked Questions"}
        description={"Everything you need to know about SIB Infotech client reviews and testimonials."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Join 850+ businesses across 40+ countries that trust SIB Infotech for organic growth."
        }
        links={[
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn more of your organic traffic into customers with data-driven CRO.",
          },
          {
            title: "White Label SEO Services",
            href: "/white-label-seo-services",
            description:
              "White label SEO delivery for agencies — sell SIB Infotech's SEO services under your own brand.",
          },
          {
            title: "SEO Company in Bangalore",
            href: "/seo-company-bangalore",
            description:
              "Get page-1 Google rankings in India's Silicon Valley with expert SEO for Bangalore businesses.",
          },
        ]}
      />
    </div>
  );
};

export default TestimonialsMgt;
