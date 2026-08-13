import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import Solution from "@/comps/WhiteLabel/Solution";
import WhySIB from "@/comps/Home/WhySIB";
import SIBPower from "@/comps/Home/SIBPower";
import Partnership from "@/comps/WhiteLabel/Partnership";
import PartnerBadges from "@/comps/Home/PartnerBadges2";
import OurClients from "@/comps/Home/OurClients";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const AppStoreOptimizationMgt = () => {
  const seoServices = [
    {
      title: `Keyword Research <br class="d-none d-md-lg "/> and Strategy`,
      description:
        "In-depth keyword research across both app stores to identify high-volume, low-competition search terms relevant to your app's core functionality, prioritised by conversion intent and realistic ranking potential.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
    },
    {
      title: `App Title & <br class="d-none d-md-lg "/> Metadata Optimisation`,
      description:
        "The app title is the single most important ranking factor in both stores. We optimise title, subtitle, keyword fields, and short description for maximum keyword coverage without sacrificing readability or brand clarity.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `App Description <br class="d-none d-md-lg "/> Copywriting`,
      description:
        "Compelling, keyword-rich descriptions for Google Play that serve both the algorithm and user conversion, and persuasive, conversion-focused descriptions for the App Store.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
    },
    {
      title: `Visual Asset <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Screenshots, feature graphics, and preview videos are critical conversion drivers. We analyse competitor visual strategies, recommend A/B tests, and develop screenshot sequences that highlight your strongest features.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
    },
    {
      title: `Rating & <br class="d-none d-md-lg "/> Review Management`,
      description:
        "User ratings and review sentiment directly influence both ranking and conversion. We implement in-app prompt optimisation, response templates, and review generation campaigns that build social proof.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `Localisation & <br class="d-none d-md-lg "/> Market Expansion`,
      description:
        "Localising your app store listing for multiple language markets multiplies your global download potential — from Hindi, Tamil, Telugu, and Bengali to Middle East, Southeast Asia, and Western markets.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Agency",
      description: "Ranked among the top 3% of Google Partners in India with direct access to beta features.",
    },
    {
      title: "18+ Years of Digital Marketing Expertise",
      description: "Battle-tested through every algorithm change across search engines and app stores.",
    },
    {
      title: "Data-Driven ASO Methodology",
      description: "Every recommendation backed by keyword data, competitor analysis, and conversion benchmarks — not guesswork.",
    },
    {
      title: "Full-Service App Growth",
      description: "ASO combined with mobile SEO, Google App Campaigns, and social advertising for a complete growth strategy.",
    },
    {
      title: "Transparent Reporting",
      description: "Monthly ASO reports show keyword ranking movements, impression data, download attribution, and conversion rates.",
    },
    {
      title: "850+ Client Track Record",
      description: "Proven results across 40+ countries, from startups to enterprise brands.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Mobile App Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "For Higher App Rankings & More Downloads",
    cardTitle: "Grow Organic App Downloads with Data-Driven ASO",
    cardDescription:
      "Over 65% of app downloads come from direct app store search. Rank higher on the App Store and Google Play and convert more browsers into installs with expert ASO.",
    buttonText: "Book A FREE ASO Audit",
  };

  const rightBoxContent = {
    heading: "Top-Rated App Store Optimisation Services in India",
    description:
      "With over 5 million apps competing for attention, visibility is the biggest challenge facing mobile app businesses. SIB Infotech combines data-driven keyword strategy, creative asset optimisation, and ongoing monitoring to help your app compete effectively in the global app marketplace.",
  };

  const power_data = [
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Our search algorithm expertise extends from Google to the app stores, which share fundamental principles of relevance and user satisfaction.",
    },
    {
      title: "18+ Years of Search & App Store Expertise",
      description:
        "We have navigated every algorithm change across search and app stores, building methodologies that deliver durable, compounding results.",
    },
    {
      title: "Dual-Store Keyword Strategy",
      description:
        "Separate keyword strategies and metadata optimisations for Apple App Store and Google Play, reflecting their different algorithms and user search behaviours.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "From FinTech and EdTech to gaming and e-commerce — our ASO service covers every vertical with proven, measurable results.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated app growth expert assigned to your account. Reachable on call, WhatsApp, and email with deep knowledge of your app and goals.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "App Audit",
      description: `<p>Comprehensive review of your current app store listings, keyword rankings, competitor positioning, and visual assets across both stores.</p>`,
    },
    {
      title: "Keyword Research",
      description: `<p>Identification of primary, secondary, and long-tail keywords with ranking potential, segmented by search volume and competition.</p>`,
    },
    {
      title: "Metadata Optimisation",
      description: `<p>Rewriting and restructuring title, subtitle, keyword fields, and description using our keyword strategy for maximum coverage.</p>`,
    },
    {
      title: "Visual Audit & Recommendations",
      description: `<p>Analysis of screenshots, feature graphic, and preview video with specific, actionable improvement recommendations.</p>`,
    },
    {
      title: "Review Strategy",
      description: `<p>Implementation of in-app review prompt strategy and response protocols for existing reviews to build social proof.</p>`,
    },
    {
      title: "Monitoring & Reporting",
      description: `<p>Weekly ranking monitoring with monthly comprehensive performance reports covering rankings, impressions, and conversions.</p>`,
    },
    {
      title: "Iteration",
      description: `<p>Monthly optimisation cycles based on performance data, algorithm changes, and competitive intelligence.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq-aso-1",
      question: "What is App Store Optimisation and why does it matter?",
      answer: `<p>ASO is the process of improving your app's visibility and conversion rate within app stores. Over 65% of app downloads come from direct app store search. Without ASO, your app is invisible to users searching for solutions your app provides. ASO is the most cost-effective way to grow organic app downloads.</p>`,
    },
    {
      id: "faq-aso-2",
      question: "How is ASO different from mobile SEO?",
      answer: `<p>Mobile SEO focuses on ranking your website in Google search results on mobile devices. ASO focuses on ranking your app within the App Store and Google Play search results. The two disciplines complement each other: mobile SEO can drive users to your app store listing, while ASO converts those visitors into downloads.</p>`,
    },
    {
      id: "faq-aso-3",
      question: "How long does ASO take to show results?",
      answer: `<p>Initial ranking improvements from metadata optimisation are typically visible within 2 to 4 weeks. Sustained download growth develops over 2 to 3 months as ranking improvements compound. Review generation and visual asset improvements contribute to conversion rate improvements within the first 30 days.</p>`,
    },
    {
      id: "faq-aso-4",
      question: "Does ASO work for both App Store and Google Play?",
      answer: `<p>Yes. Our ASO service covers both Apple's App Store and Google Play. We build separate keyword strategies and metadata optimisations for each store, reflecting their different algorithms and user search behaviours.</p>`,
    },
    {
      id: "faq-aso-5",
      question: "How much does ASO cost in India?",
      answer: `<p>Our ASO packages start from Rs. 20,000 per month for a single app on one store, with comprehensive dual-store ASO campaigns starting from Rs. 35,000 per month. Every engagement begins with a free ASO audit.</p>`,
    },
    {
      id: "faq-aso-6",
      question: "Can ASO work alongside paid app campaigns?",
      answer: `<p>Yes, and combining the two is highly effective. ASO improves organic ranking and conversion rate, which reduces your cost per install in paid campaigns. Google App Campaigns use your app store listing as ad creative, so ASO improvements directly benefit your paid performance as well.</p>`,
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
                  App Store Optimisation Services That{" "}
                  <span className="text_red fontWeight700">Grow App Downloads</span>
                </h1>
                <p className="small_heading fontWeight500 mt-2 text-white" style={{ maxWidth: "85%" }}>
                  Google Premier Partner | 18+ Years Experience | App Store & Google Play ASO
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  SIB Infotech is a Google Premier Partner digital marketing agency with 18+ years of experience. Our App Store Optimisation (ASO) service helps mobile app businesses rank higher on the App Store and Google Play, attract more qualified downloads, and improve in-app engagement rates.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us" className="btnThemeRed me-3">
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
                  Accelerate Your App Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best ASO Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"App Store Optimisation"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your App Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best ASO Services in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"App Store Optimisation"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Make Your App Discoverable in a{" "}
                <span className="text_red">Market of 5 Million Apps</span>
              </h2>
              <p className="customText mt-3">
                With over 5 million apps competing for attention across the App Store and Google Play, visibility is the single biggest challenge facing mobile app businesses today. App Store Optimisation (ASO) is the discipline of improving your app's discoverability, download conversion rate, and user ratings across both major app stores.
              </p>
              <p className="customText mt-3">
                SIB Infotech's ASO service combines data-driven keyword strategy, creative asset optimisation, and ongoing performance monitoring to help Indian businesses compete effectively in the global app marketplace. Whether you are launching a new app or trying to revive a stagnant one, our ASO methodology delivers measurable improvements in rankings, impressions, and downloads.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech for ASO?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Search expertise that transfers to app stores.
                  </li>
                  <li className="mb-3">
                    <strong>18+ Years Experience:</strong> Durable, proven methodologies.
                  </li>
                  <li className="mb-3">
                    <strong>Dual-Store Coverage:</strong> App Store & Google Play optimisation.
                  </li>
                  <li className="mb-3">
                    <strong>Zero Lock-in Contracts:</strong> Flexible performance model.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is ASO */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                What Is <span className="text_red">App Store Optimisation (ASO)?</span>
              </h2>
              <p className="customText mt-3">
                App Store Optimisation is the process of improving an app's visibility within app stores such as Apple's App Store and Google Play. Just as Google SEO helps websites rank in search results, ASO helps apps rank in app store search results, category lists, and featured placements. A comprehensive ASO strategy addresses both dimensions simultaneously to maximise your app's growth potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Store vs Google Play */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                App Store vs Google Play: <span className="text_red">Key Differences</span>
              </h2>
              <p className="customText mt-3">
                While both stores reward relevance and quality, their algorithms work differently. Understanding these differences is critical to building an effective ASO strategy.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <div className="table-responsive rounded">
                <table className="table table-bordered table-striped align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-4">Factor</th>
                      <th className="bgRedMenu text-white p-4">Apple App Store</th>
                      <th className="bgRedMenu text-white p-4">Google Play</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Keyword Fields</td>
                      <td className="p-4">Title (30 chars) + Subtitle (30 chars) + Keyword Field (100 chars)</td>
                      <td className="p-4">Title (30 chars) + Short Description + Full Description</td>
                    </tr>
                    <tr>
                      <td className="p-4">Description Indexing</td>
                      <td className="p-4">Description is NOT indexed for keywords</td>
                      <td className="p-4">Description IS indexed; keyword density matters</td>
                    </tr>
                    <tr>
                      <td className="p-4">Reviews Impact</td>
                      <td className="p-4">High impact on ranking and conversion</td>
                      <td className="p-4">Very high impact; text in reviews is indexed</td>
                    </tr>
                    <tr>
                      <td className="p-4">Visual Assets</td>
                      <td className="p-4">Screenshots and Preview Video critical for CVR</td>
                      <td className="p-4">Feature Graphic and Screenshots impact conversion</td>
                    </tr>
                    <tr>
                      <td className="p-4">Update Frequency</td>
                      <td className="p-4">Less frequent updates rewarded</td>
                      <td className="p-4">Regular updates signal active development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Solution
        hideImages
        heading={"Our App Store Optimisation Services"}
        discription={
          "SIB Infotech offers a comprehensive suite of ASO services designed to deliver growth across every stage of the app discovery funnel."
        }
        data={seoServices}
      />

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why SIB Infotech for App Store Optimisation in India?"
        description_right="Hundreds of agencies offer ASO services. Very few understand how app store algorithms truly work. Here is why mobile app businesses across 40+ countries trust SIB Infotech to grow their downloads."
        data={power_data}
      />

      {/* Process Section */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our ASO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to generate sustainable, long-term download growth."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Industries We Serve */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Industries <span className="text_red">We Serve</span>
              </h2>
              <p className="customText mt-3">
                Our ASO team has delivered measurable organic download growth across every major app vertical:
              </p>
            </div>
          </div>

          <div className="row g-3">
            {[
              "FinTech and Digital Payments Apps",
              "Health and Fitness Apps",
              "EdTech and Learning Apps",
              "E-commerce and Shopping Apps",
              "Travel and Hospitality Apps",
              "B2B and Productivity Apps",
              "Gaming Apps",
              "Social and Community Apps",
            ].map((ind, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="customCard bg-white text-center h-100 p-3">
                  <h4 className="small_heading fontWeight600 text-dark mb-0">{ind}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: EdTech App Grows{" "}
                <span className="text_red">Downloads by 340%</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A Bangalore-based EdTech startup had a well-designed learning app that was generating minimal organic downloads. Despite strong user ratings, the app was ranking beyond position 50 for its most important keywords in both stores.
                </p>
              </div>
              <div>
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full ASO audit, rebuilt the keyword strategy targeting 40 high-intent search terms, rewrote the title and metadata for both App Store and Google Play, developed new screenshot concepts highlighting the app's top three features, and implemented an in-app review prompt strategy.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h4 className="small_heading fontWeight700 text-center mb-4">
                  Results After 90 Days
                </h4>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text_red">+340%</div>
                      <div className="small fw-bold">Organic Downloads</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">24</div>
                      <div className="small fw-bold">Keywords in Top 10</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">34%</div>
                      <div className="small fw-bold">App Store Conversion (from 18%)</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">4.6</div>
                      <div className="small fw-bold">Average Rating (from 3.8)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASO Audit CTA */}
      <section className="dots curve1 bgEffect">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="fontHeading sub_heading text_blue_light fontWeight800">
                NO LOCK IN CONTRACTS
              </h5>
              <h4 className="sub_heading fontHeading fontWeight600 mt-3">
                Get Your Free ASO Audit
              </h4>
              <p className="customText mt-3">
                Ready to grow your app through organic downloads? Our ASO specialists will audit your App Store and Google Play listings and deliver a personalised optimisation roadmap at no cost.
              </p>
              <div className="mt-4">
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Complete App Store & Google Play Audit
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Competitor Keyword & Visual Analysis
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  ASO Performance and Gap Analysis
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Personalised 30-Day Optimisation Roadmap
                </p>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <Link href="/contact-us" className="btnThemeRed">
                  <i className="fa-solid fa-comment-dots me-2"></i> Book My Free ASO Audit
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your App Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best ASO Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos & Testimonials */}
      <OurClients />
      <Testimonials />

      {/* FAQs */}
      <Faq
        title={"Frequently Asked Questions about ASO"}
        description={"Everything you need to know about partnering with SIB Infotech for your app store optimisation."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO and digital growth services from SIB Infotech."
        }
        links={[
          {
            title: "LLM SEO Services",
            href: "/llm-seo-services",
            description:
              "Get your app and brand cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn more of your organic and app traffic into paying customers with data-driven CRO.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "SEO Case Studies",
            href: "/case-studies",
            description:
              "See how SIB Infotech delivered traffic, ranking, and revenue growth for real clients.",
          },
          {
            title: "White Label SEO Services",
            href: "/white-label-seo-services",
            description:
              "White label SEO delivery for agencies — sell SIB Infotech's SEO services under your own brand.",
          },
        ]}
      />
    </div>
  );
};

export default AppStoreOptimizationMgt;
