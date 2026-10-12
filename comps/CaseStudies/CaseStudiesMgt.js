import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Breadcrumb from "@/comps/BreadCrumb";
import Faq from "@/comps/Home/Faq";

const PHONE_DISPLAY = "+91 92222 60000";
const PHONE_HREF = "tel:+919222260000";
const WHATSAPP_LINK = "https://wa.link/rd1lfo";
const EMAIL = "contact@sibinfotech.com";
const GOOGLE_REVIEW_LINK =
  "https://www.google.com/maps?ll=19.177215,72.833803&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10831579352190589026";

const featured = {
  bigNumber: "3.9x",
  numberLabel: "more enquiries per day",
  title:
    "How RNB Global University Got 3.9x More Enquiries per Day with Google Ads",
  body: "RNB Global University wanted more students to enquire about admissions. SIB Infotech set up proper tracking and showed ads again to people who had already visited the website. Enquiries per day went up 3.9 times, while daily spend went up only about 30%.",
  smallStats: [
    "3.9x enquiries per day",
    "67% lower cost per enquiry",
    "15,091 enquiries from remarketing",
  ],
  href: "/case-studies/rnb-global-university-google-ads",
};

const caseStudies = [
  {
    client: "Veeraco Colourants",
    image: "/assets/images/casestudy/veeraco.png",
    categories: ["SEO", "Local Search", "AI Search"],
    industry: "Manufacturing",
    service: "SEO",
    metrics: [
      { value: "+80%", label: "Google clicks, 979 to 1,760" },
      { value: "+96%", label: "Non-brand clicks, ~770 to 1,510" },
      { value: "4", label: "Dye categories on page one" },
      { value: "70", label: "AI assistant sessions, from 0" },
    ],
    href: "/contact-us",
    linkText: "Get similar results",
  },
  {
    client: "RNB Global University",
    image: "/assets/images/rnb-laptop.webp",
    categories: ["Google Ads"],
    industry: "Education",
    service: "Google Ads",
    metrics: [
      { value: "32,628", label: "Enquiries, lifetime" },
      { value: "₹6.5 lakh", label: "Saved, 2023 vs 2022 season" },
      { value: "8.9x", label: "Enquiries, peak vs launch weeks" },
      { value: "₹9", label: "Cost per enquiry, remarketing" },
    ],
    href: "/case-studies/rnb-global-university-google-ads",
    linkText: "Read Case Study",
  },
];

const industries = ["All Industries", "Education", "Manufacturing"];

const services = ["All Services", "SEO", "Google Ads"];

const statsBar = [
  {
    value: "21+",
    label: "Years in Digital Marketing",
    desc: "Helping businesses grow online since 2005",
  },
  {
    value: "1400+",
    label: "Clients Served",
    desc: "Small and mid-sized businesses, brands and institutions.",
  },
  {
    value: "40+",
    label: "Countries",
    desc: "Clients across India, the USA, the UK, Australia, Canada and more.",
  },
  {
    value: "4.8",
    label: "Average Client Rating",
    desc: "Rated on Google, Clutch, Trustpilot, Justdial and GoodFirms.",
  },
];

const proofRules = [
  {
    label: "Rule 1",
    title: "Screenshots from the real account",
    text: "Numbers come from Google Ads, Google Analytics or Search Console. You see the screenshot on the page.",
  },
  {
    label: "Rule 2",
    title: "Fair comparisons",
    text: "Before and after periods are the same length. If they are not, the page shows numbers per day.",
  },
  {
    label: "Rule 3",
    title: "Clear meanings",
    text: "Each page says what counted as a lead, an enquiry or a sale.",
  },
  {
    label: "Rule 4",
    title: "The full story",
    text: "If something did not improve, the case study says so and explains why.",
  },
];

const partners = [
  {
    name: "Google Premier Partner",
    img: "/assets/images/top-google-premium-partner-agencies-in-india.webp",
    href: "https://www.google.com/partners/agency?id=4328223643",
  },
  {
    name: "Meta Business Partner",
    img: "/assets/images/meta-partner.webp",
    href: "https://www.facebook.com/business/partner",
  },
  {
    name: "Shopify Partner",
    img: "/assets/images/shopify-partner.webp",
    href: "https://www.shopify.com/partners",
  },
  {
    name: "Clutch",
    img: "/assets/images/clutch.webp",
    href: "https://clutch.co/profile/sib-infotech",
  },
  {
    name: "Trustpilot",
    img: "/assets/images/trustpilot.webp",
    href: "https://www.trustpilot.com/review/sibinfotech.com",
  },
  {
    name: "GoodFirms",
    img: "/assets/images/logos/goodfirms.webp",
    href: "https://www.goodfirms.co/company/sib-infotech-digital-marketing-agency",
  },
];

const quotes = [
  {
    source: "Google",
    logo: "/assets/images/logos/google.webp",
    text: "SIB Infotech has designed website for our company. We are very happy with outcome. They are not only professional but also putting their heart into work.",
    author: "Rupesh Maniar",
    role: "Real Value Finloan Services Pvt. Ltd.",
  },
  {
    source: "Clutch",
    logo: "/assets/images/logos/clutch.webp",
    text: "The client loved the platform that the SIB Infotech team developed for them, especially the calculator function.",
    author: "Tima Elhajj",
    role: "CEO and Founder, Tima Media",
  },
  {
    source: "Google",
    logo: "/assets/images/logos/google.webp",
    text: "RNB Global University saw a steady rise in admission enquiries after SIB Infotech rebuilt the Google Ads account and added remarketing.",
    author: "RNB Global University",
    role: "Client quote to be confirmed",
  },
];

const faqsData = [
  {
    id: "faq-case-studies-1",
    question: "Are these results real?",
    answer: `<p>Yes. Every number comes from the client's own Google Ads, Google Analytics or Search Console account. Each case study page shows screenshots. Numbers go live only after the client agrees.</p>`,
  },
  {
    id: "faq-case-studies-2",
    question: "Why do some case studies not name the client?",
    answer: `<p>Some clients want to keep their results private. For those, the case study describes the business by its industry and city instead. The numbers are just as real.</p>`,
  },
  {
    id: "faq-case-studies-3",
    question: "Will my business get the same results?",
    answer: `<p>Maybe not, and no honest agency can promise that. Results depend on your market, budget, website and competitors. Each case study shows what was done, so you can see how close it is to your business.</p>`,
  },
  {
    id: "faq-case-studies-4",
    question: "Which industries has SIB Infotech worked with?",
    answer: `<p>SIB Infotech has worked with businesses in education, finance, legal, real estate, healthcare, manufacturing, e-commerce and more, across 40+ countries.</p>`,
  },
  {
    id: "faq-case-studies-5",
    question: "How soon will I see results?",
    answer: `<p>Google Ads can bring enquiries in the first few weeks, and results get better as the account learns. SEO usually takes 3 to 6 months to show steady growth.</p>`,
  },
];

const CaseStudiesMgt = () => {
  const [industry, setIndustry] = useState("All Industries");
  const [service, setService] = useState("All Services");

  const filteredCases = caseStudies.filter(
    (item) =>
      (industry === "All Industries" || item.industry === industry) &&
      (service === "All Services" || item.service === service),
  );

  const hasActiveFilter =
    industry !== "All Industries" || service !== "All Services";

  const clearFilters = () => {
    setIndustry("All Industries");
    setService("All Services");
  };

  return (
    <div className="csPage">
      {/* 4.2 Hero */}
      <section className="cs-hero">
        <div className="containerFull">
          <div className="row align-items-center w-100 g-4 g-lg-5">
            <div className="col-lg-7">
              <p className="title fontWeight600 text-white">Case Studies</p>
              <h1 className="heading fontWeight700 text-white mt-3">
                Digital Marketing Case Studies with{" "}
                <span className="text_red">Real Results</span>
              </h1>
              <p className="customText text-white mt-3 cs-hero-text">
                These digital marketing case studies show real work for real
                businesses. Every number comes from a live client account. Each
                page shows what SIB Infotech changed, what improved and what did
                not.
              </p>
              <div className="cs-hero-actions">
                <a href="#case-study-results" className="btnThemeRed">
                  See the Results
                </a>
                <Link href="/contact-us" className="cs-btn-ghost">
                  Talk to an Expert
                </Link>
              </div>
              <p className="title text-white mt-3">
                Or call{" "}
                <a href={PHONE_HREF} className="fontWeight600 text-white">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>

            <div className="col-lg-5">
              <div className="cs-hero-card">
                <p className="title fontWeight600">Featured Case Study</p>
                <p className="large_heading2 fontWeight700 text_red mt-3">
                  {featured.bigNumber}
                </p>
                <p className="small_heading fontWeight600 text_dark_blue">
                  {featured.numberLabel}
                </p>
                <div className="cs-hero-card-foot">
                  <p className="title fontWeight600">RNB Global University</p>
                  <p className="small textGrey">Google Ads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb Pagetitle={"Case Studies"} />

      {/* 4.3 Trust bar */}
      <div className="cs-stats-ribbon">
        <div className="cs-stats-grid">
          {statsBar.map((stat, i) => (
            <div
              className={`cs-stat-cell cs-stat-shade-${(i % 4) + 1}`}
              key={i}
            >
              <p className="heading fontWeight800">{stat.value}</p>
              <p className="cs-stat-label meduim_heading fontWeight700">
                {stat.label}
              </p>
              <p className="title cs-stat-desc mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4.4 Featured case study */}
      <section className="cs-featured-section">
        <div className="containerFull">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <p className="title fontWeight600 text_red">Featured Case Study</p>
              <div className="cs-featured-number-wrap">
                <p className="large_heading2 fontWeight700 text_red">
                  {featured.bigNumber}
                </p>
                <p className="meduim_heading fontWeight600 text_dark_blue">
                  {featured.numberLabel}
                </p>
              </div>
              <h2 className="heading fontWeight600">{featured.title}</h2>
              <p className="customText mt-3">{featured.body}</p>

              <div className="cs-featured-points">
                {featured.smallStats.map((stat, i) => (
                  <span className="cs-featured-point title" key={i}>
                    <i className="fa-solid fa-check"></i>
                    {stat}
                  </span>
                ))}
              </div>

              <div className="cs-featured-actions">
                <Link href={featured.href} className="btnThemeRed">
                  Read the Full Case Study
                </Link>
              </div>
              <Link href="/contact-us" className="cs-inline-link title">
                Want results like this? Talk to the SIB team
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="cs-featured-media">
                <div className="cs-featured-shot">
                  <Image
                    src="/assets/images/rnb-laptop.webp"
                    alt="RNB Global University Google Ads results"
                    width={900}
                    height={620}
                    quality={100}
                    className="cs-featured-img"
                  />
                </div>
                <div className="cs-featured-logo">
                  <Image
                    src="/assets/images/clients/RNB-logo.webp"
                    alt="RNB Global University"
                    width={200}
                    height={90}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Filter bar + 4.6 Cards */}
      <section className="cs-results-section" id="case-study-results">
        <div className="containerFull">
          <div className="text-center cs-section-head">
            <h2 className="heading fontWeight600">
              Find Results from Businesses Like Yours
            </h2>
            <p className="customText mt-3">
              Pick your industry or the service you need.
            </p>
          </div>

          <div className="cs-filter-bar">
            <div className="cs-filter-pill">
              <i className="fa-solid fa-building" aria-hidden="true"></i>
              <select
                className="cs-filter-select"
                aria-label="Filter by industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                {industries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="cs-filter-pill">
              <i className="fa-solid fa-toolbox" aria-hidden="true"></i>
              <select
                className="cs-filter-select"
                aria-label="Filter by service"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="cs-clear-btn"
              onClick={clearFilters}
              disabled={!hasActiveFilter}
            >
              <i className="fa-solid fa-arrows-rotate me-2"></i>
              Clear filters
            </button>
          </div>

          {filteredCases.length > 0 ? (
            <div className="row g-4 justify-content-center">
              {filteredCases.map((item, i) => (
                <div className="col-lg-6 col-md-6" key={i}>
                  <div className="cs-card">
                    <div className="cs-card-media">
                      <Image
                        src={item.image}
                        alt={item.client}
                        width={600}
                        height={360}
                        quality={100}
                      />
                    </div>

                    <div className="cs-card-body">
                      <p className="heading cs-card-client fontWeight700">
                        {item.client}
                      </p>

                      <div className="cs-card-tags">
                        {item.categories.map((cat, j) => (
                          <span className="cs-tag" key={j}>
                            {cat}
                          </span>
                        ))}
                      </div>

                      <hr className="cs-card-divider" />

                      <div className="cs-card-metrics">
                        {item.metrics.map((metric, j) => (
                          <div className="cs-card-metric" key={j}>
                            <p className="sub_heading cs-card-metric-value">
                              {metric.value}
                            </p>
                            <p className="cs-card-metric-label">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Link href={item.href} className="cs-card-link">
                        {item.linkText}
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cs-empty">
              <p className="customText">
                No case study matches this yet. See all case studies, or ask the
                SIB team about results in your industry.
              </p>
              <div className="cs-empty-actions">
                <button
                  type="button"
                  className="btnThemeRed"
                  onClick={clearFilters}
                >
                  See all case studies
                </button>
                <Link href="/contact-us" className="btnCase">
                  Ask the SIB team
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4.7 How SIB checks every number */}
      <section className="cs-checks-section">
        <div className="containerFull">
          <div className="text-center cs-section-head">
            <h2 className="heading fontWeight600">Real Numbers You Can Check</h2>
            <p className="customText mt-3 cs-body-center">
              Big claims mean nothing if you cannot check them. Every SIB
              Infotech case study follows four simple rules.
            </p>
          </div>

          <div className="row g-4">
            {proofRules.map((rule, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="cs-check-card">
                  <span className="title fontWeight600 text_red d-block mb-2">
                    {rule.label}
                  </span>
                  <h3 className="small_heading fontWeight600 mb-2">
                    {rule.title}
                  </h3>
                  <p className="customText">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.8 Recognition and partners */}
      <section className="cs-recognition-section">
        <div className="containerFull">
          <div className="text-center cs-section-head">
            <h2 className="heading fontWeight600 text-white">
              Trusted by Google, Meta and SIB Clients
            </h2>
          </div>

          <Swiper
            className="cs-badges"
            modules={[Autoplay]}
            spaceBetween={14}
            slidesPerView={5}
            loop={true}
            speed={800}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={i} className="cs-badge-slide">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-badge"
                  title={partner.name}
                >
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    width={200}
                    height={110}
                    quality={100}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="cs-cert-row">
            <div className="cs-cert-card">
              <i className="fa-solid fa-award"></i>
              <div>
                <h3 className="small_heading fontWeight600 mb-2">
                  ISO 9001 Certified
                </h3>
                <p className="title">
                  Quality management system certified. Certificate available on
                  request.
                </p>
              </div>
            </div>
            <div className="cs-cert-card">
              <i className="fa-solid fa-trophy"></i>
              <div>
                <h3 className="small_heading fontWeight600 mb-2">
                  Awards and Recognition
                </h3>
                <p className="title">
                  Awards and client recognition are listed here as they are
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.9 Client quotes */}
      <section className="cs-quotes-section">
        <div className="containerFull">
          <div className="text-center cs-section-head">
            <h2 className="heading fontWeight600">
              What Clients Say About SIB Infotech
            </h2>
          </div>

          <div className="row g-4">
            {quotes.map((quote, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="cs-quote">
                  <i
                    className={`fa-solid fa-quote-left cs-quote-icon ${
                      ["bg-primary", "bg-danger", "bg-warning"][i % 3]
                    }`}
                  ></i>
                  <p className="customText cs-quote-text">{quote.text}</p>
                  <div className="cs-quote-foot">
                    <div>
                      <p className="cs-quote-author">{quote.author}</p>
                      <p className="cs-quote-role">{quote.role}</p>
                    </div>
                    <Image
                      src={quote.logo}
                      alt={quote.source}
                      width={110}
                      height={50}
                      quality={100}
                      className="cs-quote-logo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btnThemeRed"
            >
              <i className="fa-brands fa-google me-2"></i>
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* 4.10 Closing call to action */}
      <section className="cs-cta-section">
        <div className="containerFull">
          <div className="cs-cta-box">
            <h2 className="heading fontWeight600 text-white">
              Want Results Like These for Your Business?
            </h2>
            <p className="customText text-white cs-cta-text mx-auto">
              Tell the SIB team about your business and your goals. You will get
              a free review of your current marketing and a clear plan for what
              to fix first.
            </p>

            <div className="cs-cta-actions">
              <Link href="/contact-us" className="btnThemeRed">
                Get a Free Audit
              </Link>
              <a href={PHONE_HREF} className="cs-btn-ghost">
                <i className="fa-solid fa-phone me-2"></i>
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn-whatsapp"
              >
                <i className="fa-brands fa-whatsapp me-2"></i>
                Chat on WhatsApp
              </a>
            </div>

            <p className="title cs-cta-small">
              Email{" "}
              <a href={`mailto:${EMAIL}`} className="text-white">
                {EMAIL}
              </a>{" "}
              · Monday to Saturday, 9:00 am to 6:00 pm
            </p>
            <p className="title cs-cta-office">
              Offices in Mumbai (Malad West) and New Delhi (Tagore Garden)
            </p>
          </div>
        </div>
      </section>

      {/* 4.11 FAQ */}
      <Faq
        title={"Questions About SIB Infotech Case Studies"}
        description={
          "How SIB Infotech collects, checks and reports client results."
        }
        faqsData={faqsData}
      />
    </div>
  );
};

export default CaseStudiesMgt;
