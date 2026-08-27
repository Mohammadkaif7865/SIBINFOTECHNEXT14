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

const ConversionRateOptimizationMgt = () => {
  const croServices = [
    {
      title: `Conversion <br class="d-none d-md-lg "/> Audit`,
      description:
        "Every CRO engagement begins with a comprehensive conversion audit. We review your GA4 funnel data, run Hotjar heatmaps and session recordings across key pages, assess your current conversion rate against industry benchmarks, identify the highest-impact conversion barriers on your site, and deliver a prioritised CRO opportunity report.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `A/B Testing and <br class="d-none d-md-lg "/> Multivariate Testing`,
      description:
        "A/B testing is the scientific method of CRO. We create two or more versions of a page element (headline, CTA button, hero image, form layout, pricing presentation) and split your traffic between them. Statistical analysis identifies the winning variant with confidence. Multivariate testing tests multiple elements simultaneously for high-traffic pages.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
    },
    {
      title: `Landing Page <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Landing pages are the highest-leverage CRO opportunity for businesses running Google Ads, Meta Ads, or any paid traffic. A landing page converting at 8% instead of 4% halves your cost per lead without changing your ad spend. We redesign and optimise landing pages for clarity, relevance, trust, and conversion, A/B testing every significant change.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `Heatmap and Session <br class="d-none d-md-lg "/> Recording Analysis`,
      description:
        "We run comprehensive heatmap and session recording programmes on your highest-traffic pages, analysing click distribution, scroll depth, rage click patterns, and user navigation behaviour to identify specific friction points and missed conversion opportunities that are invisible in standard analytics.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
    },
    {
      title: `Funnel Analysis and <br class="d-none d-md-lg "/> Checkout Optimisation`,
      description:
        "For ecommerce businesses, cart abandonment and checkout drop-off are the most direct revenue leaks. We analyse every step of your purchase funnel using GA4 funnel reports and session recordings, identifying exactly where users are abandoning and implementing targeted fixes: reduced form fields, trust badge placement, payment option visibility, delivery information clarity, and progress indicator optimisation.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
    {
      title: `User Behaviour <br class="d-none d-md-lg "/> Research`,
      description:
        "Quantitative data tells you what users do. Qualitative research tells you why. We deploy on-site surveys, exit-intent polls, and post-conversion feedback forms to gather direct user feedback on conversion barriers, pricing perceptions, trust concerns, and product questions that prevent purchase decisions.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
    },
    {
      title: `CRO for <br class="d-none d-md-lg "/> Lead Generation`,
      description:
        "For B2B and service businesses, the conversion goal is a qualified lead. We optimise lead generation pages by testing form length, field order, button copy, value proposition clarity, social proof placement, and micro-commitment structures that increase form completion rates without reducing lead quality.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.webp",
    },
    {
      title: `Personalisation and <br class="d-none d-md-lg "/> Segmentation`,
      description:
        "Not all visitors are the same. Traffic from Google Ads behaves differently from organic search visitors. Mobile users behave differently from desktop users. New visitors behave differently from returning visitors. We implement segmentation-based CRO, testing different experiences for different audience segments to maximise conversion across your full traffic mix.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
    },
  ];

  const seoVsCRO = [
    {
      dimension: "Focus",
      seo: "Driving more visitors to your site",
      cro: "Converting more existing visitors",
    },
    {
      dimension: "Primary Tool",
      seo: "Keywords, content, backlinks",
      cro: "Testing, UX, data analysis",
    },
    {
      dimension: "Time to Result",
      seo: "3-6 months typically",
      cro: "Weeks to months per test cycle",
    },
    {
      dimension: "Cost Impact",
      seo: "Reduces cost per acquisition over time",
      cro: "Immediate revenue uplift from same traffic",
    },
    {
      dimension: "Works Best",
      seo: "When you need more traffic",
      cro: "When traffic exists but conversions lag",
    },
    {
      dimension: "Combined Value",
      seo: "More traffic + more conversions = compounding revenue growth",
      cro: "More traffic + more conversions = compounding revenue growth",
    },
  ];

  const toolsData = [
    {
      title: "Hotjar",
      icon: "fa-solid fa-fire",
      description:
        "Heatmaps, scroll maps, session recordings, and user feedback polls. We use Hotjar to understand exactly how real users interact with your pages: where they click, how far they scroll, where they hesitate, and where they abandon. Session recordings let us watch anonymised user journeys to identify specific friction points invisible in aggregated analytics data.",
    },
    {
      title: "VWO (Visual Website Optimizer)",
      icon: "fa-solid fa-vial",
      description:
        "Our primary A/B and multivariate testing platform. It allows us to simultaneously test multiple page variations against each other with statistical rigour, ensuring that every conversion improvement we implement is backed by data, not guesswork. VWO also provides heatmaps, funnel analysis, and form analytics within a single platform.",
    },
    {
      title: "Google Analytics 4 (GA4)",
      icon: "fa-solid fa-chart-line",
      description:
        "GA4 provides the foundational conversion funnel data: where users enter, where they drop off, which traffic sources convert best, which pages have the highest exit rates, and how different user segments behave. Every CRO engagement begins with a deep GA4 data audit.",
    },
    {
      title: "Google Search Console",
      icon: "fa-solid fa-magnifying-glass",
      description:
        "GSC data identifies which search queries are driving traffic but not converting — a critical input for landing page optimisation and messaging alignment between search intent and page content.",
    },
    {
      title: "Crazy Egg",
      icon: "fa-solid fa-egg",
      description:
        "Crazy Egg's confetti maps and A/B testing supplement Hotjar for multi-source behavioural data validation on high-traffic pages where a second data source strengthens hypothesis confidence.",
    },
    {
      title: "Microsoft Clarity",
      icon: "fa-solid fa-cubes",
      description:
        "A free behavioural analytics tool that provides session recordings and heatmaps, used for supplementary data collection on client sites already using Clarity or where budget constraints apply.",
    },
  ];

  const industriesData = [
    {
      title: "E-commerce and Retail",
      description:
        "Cart abandonment reduction, checkout optimisation, product page conversion, and category page CTR improvement.",
      img: "/assets/images/seo/ecommerce-seo.webp",
      alt: "E-commerce and retail CRO",
    },
    {
      title: "B2B Services and SaaS",
      description:
        "Lead form optimisation, demo booking flow, free trial activation, and pricing page conversion.",
      img: "/assets/images/seo/it-saas-seo.webp",
      alt: "B2B services and SaaS CRO",
    },
    {
      title: "Real Estate and Property",
      description:
        "Enquiry form optimisation, virtual tour engagement, and developer microsite conversion.",
      img: "/assets/images/seo/real-estate-seo.webp",
      alt: "Real estate and property CRO",
    },
    {
      title: "Healthcare and Clinics",
      description:
        "Appointment booking optimisation, service page clarity, and patient inquiry conversion.",
      img: "/assets/images/seo/healthcare-seo.webp",
      alt: "Healthcare and clinics CRO",
    },
    {
      title: "Financial Services",
      description:
        "Lead form optimisation for loan applications, insurance quotes, and investment enquiries.",
      img: "/assets/images/seo/finance-seo.webp",
      alt: "Financial services CRO",
    },
    {
      title: "Education and EdTech",
      description:
        "Course enquiry conversion, admission form optimisation, and webinar registration flow.",
      img: "/assets/images/seo/education-seo.webp",
      alt: "Education and EdTech CRO",
    },
    {
      title: "Travel and Hospitality",
      description:
        "Booking funnel optimisation, room/package comparison, and enquiry form simplification.",
      img: "/assets/images/seo/travel-seo.webp",
      alt: "Travel and hospitality CRO",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Since 2005",
      description:
        "Among the top 3% of Google Partners in India, with direct access to Google insights and beta features.",
    },
    {
      title: "18+ Years of Expertise",
      description:
        "Proven performance across every major algorithm era, from Panda and Penguin through AI Overviews and generative search.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "Our strategies are stress-tested across industries and markets worldwide.",
    },
    {
      title: "Named Enterprise Clients",
      description:
        "Trusted by Airtel, Finolex, Jindal Steel, and BPCL for their digital growth.",
    },
    {
      title: "Full-Service Team",
      description:
        "Technical SEOs, content specialists, link builders, and strategists working as one integrated unit.",
    },
    {
      title: "No Black-Box Reporting",
      description:
        "Every A/B test result is fully documented with statistical significance data. You see exactly what was tested, what the results were, and why we are implementing a particular change.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "Data-Driven CRO That Turns Traffic into Revenue",
    cardTitle: "Turn More of Your Existing Traffic into Revenue",
    cardDescription:
      "You are already paying to drive traffic to your website. CRO ensures that investment works harder. SIB Infotech combines 18+ years of performance marketing expertise with Hotjar, VWO, and GA4 data to systematically increase the percentage of your visitors who take the action you want.",
    buttonText: "Get Your Free CRO Audit",
  };

  const rightBoxContent = {
    heading: "The CRO Agency That Measures Before It Changes Anything",
    description:
      "Most businesses focus almost entirely on driving more traffic to their website. But if only 2% of your visitors convert, doubling your traffic doubles your cost — not your revenue. Our CRO team uses rigorous data analysis, behavioural research, and structured experimentation to deliver measurable improvements in conversion rate, revenue per visitor, and cost per acquisition.",
  };

  const power_data = [
    {
      title: "Data-Driven, Never Assumption-Driven",
      description:
        "Every CRO recommendation is backed by actual user data from Hotjar, VWO, and GA4. We do not guess what is wrong with your conversions — we measure it.",
    },
    {
      title: "Integrated with SEO and PPC",
      description:
        "Because we manage SEO and Google Ads for many clients, our CRO work is uniquely aligned with traffic source intent. A landing page optimised for Google Ads requires a different approach than one optimised for organic search.",
    },
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Among the top 3% of Google Partners in India with direct access to Google insights, AI Overviews intelligence, and beta features.",
    },
    {
      title: "18+ Years of Performance Marketing Expertise",
      description:
        "Our CRO work is informed by deep knowledge of the full digital funnel, from the ad click to the post-conversion experience.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated strategist assigned to your account, reachable on call, WhatsApp, and email with deep knowledge of your conversion goals.",
    },
    {
      title: "No Black-Box Testing",
      description:
        "Every A/B test result is fully documented with statistical significance data. You see exactly what was tested, what the results were, and why we are implementing a particular change.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Baseline Analysis",
      description: `<p>GA4 funnel audit, current conversion rate benchmarking, and identification of highest-value conversion points across your site.</p>`,
    },
    {
      title: "Behavioural Research",
      description: `<p>Hotjar heatmap and session recording deployment on priority pages. On-site survey setup for user feedback collection.</p>`,
    },
    {
      title: "Hypothesis Development",
      description: `<p>Data-informed hypotheses prioritised by potential conversion impact and implementation effort. Each hypothesis is documented with supporting evidence.</p>`,
    },
    {
      title: "Test Design",
      description: `<p>A/B or multivariate test design using VWO, including variant creation, traffic split definition, and statistical significance thresholds.</p>`,
    },
    {
      title: "Test Execution",
      description: `<p>Live testing with continuous monitoring for data quality issues, unusual traffic patterns, or seasonal factors that could invalidate results.</p>`,
    },
    {
      title: "Results Analysis",
      description: `<p>Statistical analysis of test results. Winning variants documented with full data. Losing variants analysed for learning insights.</p>`,
    },
    {
      title: "Implementation",
      description: `<p>Winning changes implemented permanently. New hypotheses generated for the next test cycle. CRO is a continuous process, not a one-time project.</p>`,
    },
    {
      title: "Reporting",
      description: `<p>Monthly CRO performance report covering conversion rate trends, active and completed tests, revenue impact estimates, and next cycle priorities.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "What is Conversion Rate Optimisation (CRO)?",
      answer: `<p>CRO is the systematic process of increasing the percentage of your website visitors who take a desired action — a purchase, a lead form, a booking, or any other conversion goal. It works by identifying and removing the barriers that prevent visitors from converting, using data, behavioural analysis, and structured A/B testing.</p>`,
    },
    {
      id: "faq2",
      question: "How is CRO different from SEO?",
      answer: `<p>SEO drives more visitors to your website. CRO ensures more of those visitors convert once they arrive. SEO and CRO address different parts of the revenue equation and work best when pursued together. SEO without CRO leaves conversion potential on the table. CRO without SEO lacks the traffic volume needed to run statistically significant tests.</p>`,
    },
    {
      id: "faq3",
      question: "How much does CRO typically improve conversion rates?",
      answer: `<p>Conversion rate improvements vary significantly by starting conversion rate, industry, and the severity of existing conversion barriers. Businesses with poorly optimised pages often see 30% to 100%+ improvements from initial CRO work. More mature pages with fewer obvious issues typically see 10% to 30% improvements per test cycle. The compounding effect of multiple test cycles over 6 to 12 months is where the most significant revenue impact accumulates.</p>`,
    },
    {
      id: "faq4",
      question: "What tools do you use for CRO?",
      answer: `<p>Our core CRO tool stack includes Hotjar for heatmaps and session recordings, VWO for A/B and multivariate testing, Google Analytics 4 for funnel analysis and conversion data, and Google Search Console for search intent alignment. We also use Crazy Egg and Microsoft Clarity for supplementary behavioural data.</p>`,
    },
    {
      id: "faq5",
      question: "How long does it take to see CRO results?",
      answer: `<p>Initial insights from heatmaps and session recordings are available within 1 to 2 weeks of deployment. The first A/B test typically reaches statistical significance within 2 to 6 weeks, depending on your traffic volume. High-traffic pages reach significance faster. The first measurable conversion rate improvement is typically visible within 4 to 8 weeks. Full CRO impact compounds over multiple test cycles across 3 to 6 months.</p>`,
    },
    {
      id: "faq6",
      question: "Do I need high traffic for CRO to work?",
      answer: `<p>A/B testing requires sufficient traffic to reach statistical significance. As a general guideline, a page needs a minimum of 1,000 to 2,000 visitors per month and around 100 conversions per month for reliable test results. For lower-traffic sites, we focus on qualitative research methods (heatmaps, session recordings, user surveys) and implement improvements based on evidence rather than split testing until traffic volume supports experimentation.</p>`,
    },
    {
      id: "faq7",
      question: "Can CRO help reduce my Google Ads cost per lead?",
      answer: `<p>Yes. Improving landing page conversion rates directly reduces your cost per lead from Google Ads without any change in ad spend or bidding strategy. A landing page converting at 6% rather than 3% produces twice as many leads for the same ad budget — effectively halving your cost per lead. This is one of the most compelling ROI arguments for CRO investment alongside paid media.</p>`,
    },
    {
      id: "faq8",
      question: "What is a good conversion rate for an Indian website?",
      answer: `<p>Conversion rate benchmarks vary significantly by industry and conversion type. E-commerce conversion rates in India typically range from 1.5% to 4%. B2B lead generation pages typically convert at 2% to 6%. Top-performing pages in both categories can achieve 8% to 15% with dedicated CRO investment. Your current conversion rate relative to your best-performing traffic source is the most relevant benchmark for your specific situation.</p>`,
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
                  CRO Services That Turn More of Your Existing Traffic{" "}
                  <span className="text_red fontWeight700">into Revenue</span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | 850+ Active
                  Clients in 40+ Countries
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  You are already paying to drive traffic to your website. CRO
                  ensures that investment works harder. SIB Infotech's
                  Conversion Rate Optimisation service uses data, behavioural
                  analysis, and structured experimentation to systematically
                  increase the percentage of your visitors who take the action
                  you want — whether that is a purchase, a lead form, a call, or
                  a sign-up.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Get Your Free CRO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    CRO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Conversion Rate Optimisation"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free CRO Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              CRO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Conversion Rate Optimisation"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Why Conversion Rate{" "}
                <span className="text_red">Optimisation Matters</span>
              </h2>
              <p className="customText mt-3">
                Most businesses focus almost entirely on driving more traffic to
                their website. But if only 2% of your visitors convert, doubling
                your traffic doubles your cost — not your revenue. Improving
                your conversion rate from 2% to 4% doubles your revenue from the
                same traffic, at zero additional acquisition cost.
              </p>
              <p className="customText mt-3">
                That is the fundamental case for Conversion Rate Optimisation
                (CRO). And in 2026, with rising digital advertising costs and
                intensifying competition across every sector, CRO is no longer
                optional for growth-focused businesses — it is essential.
              </p>
              <p className="customText mt-3">
                SIB Infotech is a Google Premier Partner with 18+ years of
                experience in digital marketing, web design, and performance
                optimisation. Our CRO service combines rigorous data analysis,
                behavioural research, structured experimentation, and UX
                expertise to deliver measurable improvements in conversion rate,
                revenue per visitor, and cost per acquisition.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h3 className="small_heading fontWeight600 mb-3">
                  The CRO Equation
                </h3>
                <p className="customText">
                  <strong>
                    Conversion Rate = (Number of Conversions / Total Visitors) x
                    100
                  </strong>
                </p>
                <p className="customText mt-3">
                  For example, if 10,000 visitors generate 200 sales, your
                  conversion rate is 2%. If CRO work improves that to 3%, you
                  generate 300 sales from the same traffic — a 50% revenue
                  increase with zero increase in marketing spend.
                </p>
                <p className="customText mt-3 mb-0">
                  CRO works by identifying and removing the specific barriers
                  that prevent visitors from converting: confusing page layouts,
                  unclear messaging, slow load times, poor mobile experience,
                  weak calls to action, missing trust signals, and friction in
                  checkout or form flows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO vs SEO */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                CRO vs SEO: What Is the{" "}
                <span className="text_red">Difference and Why You Need Both</span>
              </h2>
              <p className="customText mt-3">
                SEO and CRO are most powerful when pursued together. Our{" "}
                <Link href="/seo-packages" className="text_red">
                  SEO services
                </Link>{" "}
                bring qualified traffic. CRO ensures that traffic converts at
                its maximum potential. Separately, each delivers strong ROI.
                Combined, they create a compounding revenue engine.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-3">Dimension</th>
                      <th className="bgRedMenu text-white p-3">SEO</th>
                      <th className="bgRedMenu text-white p-3">CRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoVsCRO.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3">
                          <strong>{item.dimension}</strong>
                        </td>
                        <td className="p-3">{item.seo}</td>
                        <td className="p-3">{item.cro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our CRO Services */}
      <Solution
        hideImages
        heading={"Our CRO Services"}
        discription={
          "SIB Infotech delivers a complete CRO framework combining quantitative data, qualitative research, and structured experimentation."
        }
        data={croServices}
      />

      {/* CRO Tools We Use */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                CRO Tools{" "}
                <span className="text_red">We Use</span>
              </h2>
              <p className="customText mt-3">
                We use a best-in-class CRO tool stack to gather data, form
                hypotheses, run experiments, and measure results:
              </p>
            </div>
          </div>

          <div className="row g-4">
            {toolsData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="customCard h-100">
                  <h4 className="small_heading fontWeight600 mb-2">
                    <i className={`${item.icon} me-2 text_red`}></i>
                    {item.title}
                  </h4>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Choose SIB Infotech for CRO in India"
        description_right="Choosing a CRO partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our CRO Process"}
        rightDiscription={
          "Every engagement follows a structured, data-first methodology designed to deliver measurable conversion improvements."
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
                Industries{" "}
                <span className="text_red">We Serve</span>
              </h2>
              <p className="customText mt-3">
                Our CRO methodologies are tested across industries, business
                models, and markets:
              </p>
            </div>
          </div>

          <div className="row g-4">
            {industriesData.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="customCard h-100 text-center">
                  <div className="img-circle mx-auto mb-3">
                    <img src={item.img} alt={item.alt} />
                  </div>
                  <h4 className="small_heading fontWeight600 mb-2">
                    {item.title}
                  </h4>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: E-commerce Brand Increases Checkout Conversion{" "}
                <span className="text_red">by 68%</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Client:</h5>
                <p className="customText">
                  A Mumbai-based D2C e-commerce brand with strong paid traffic
                  but a checkout abandonment rate of 76%, well above the
                  industry average.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fontWeight600 text-dark mb-1">Challenge:</h5>
                <p className="customText">
                  Despite healthy product page engagement and a strong add-to-cart
                  rate of 12%, the brand was losing over three-quarters of buyers
                  at checkout. Revenue per visitor was significantly below
                  industry benchmark.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fontWeight600 text-dark mb-1">Our Approach:</h5>
                <p className="customText">
                  Deployed Hotjar session recordings analysing 500+ checkout
                  sessions, identified the payment method selection screen as the
                  highest drop-off step (42% of users exiting there), uncovered a
                  non-interactive delivery estimate element being clicked
                  repeatedly, and discovered 38% of non-purchasers cited payment
                  security concerns. Implemented four A/B tests on trust badge
                  positioning, payment option display, delivery cost transparency,
                  and form field reduction.
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
                      <div className="heading fontWeight700 text_red">+68%</div>
                      <div className="small fw-bold">
                        Checkout Conversion Rate
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">
                        76% → 60%
                      </div>
                      <div className="small fw-bold">Cart Abandonment Rate</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">
                        +41%
                      </div>
                      <div className="small fw-bold">Revenue per Visitor</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">
                        2.9% → 4.8%
                      </div>
                      <div className="small fw-bold">
                        Overall Conversion Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: B2B SaaS Company{" "}
                <span className="text_red">Doubles Lead Form Conversions</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Client:</h5>
                <p className="customText">
                  A Bangalore-based B2B SaaS company offering project management
                  software, running Google Ads to a demo request landing page.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fontWeight600 text-dark mb-1">Challenge:</h5>
                <p className="customText">
                  The landing page was generating significant traffic but a demo
                  request conversion rate of only 3.2%. Cost per demo request
                  was high, making the paid channel marginally profitable.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fontWeight600 text-dark mb-1">Our Approach:</h5>
                <p className="customText">
                  Hotjar recordings revealed users frequently leaving without
                  scrolling to the form. Form analysis showed the 9-field form
                  was causing significant abandonment. A user survey identified
                  missing use-case specificity as the primary hesitation. We ran
                  three A/B tests: reducing the form from 9 fields to 5,
                  adding industry-specific social proof above the fold, and
                  changing the CTA to "Get My Free 30-Minute Demo".
                </p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="customCard">
                <h4 className="small_heading fontWeight700 text-center mb-4">
                  Results
                </h4>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bgGrey2 rounded shadow-sm">
                      <div className="heading fontWeight700 text_red">
                        3.2% → 6.9%
                      </div>
                      <div className="small fw-bold">
                        Demo Request Conversion Rate
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bgGrey2 rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">
                        -50%
                      </div>
                      <div className="small fw-bold">
                        Cost per Demo Request
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bgGrey2 rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">
                        +116%
                      </div>
                      <div className="small fw-bold">
                        Relative Conversion Improvement
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bgGrey2 rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">
                        Maintained
                      </div>
                      <div className="small fw-bold">
                        Demo-to-Trial Conversion (Lead Quality)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Get Your Free{" "}
                <span className="text_red">CRO Audit</span>
              </h2>
              <p className="customText mt-3">
                Our CRO specialists will review your Google Analytics funnel
                data, identify your top 3 conversion leaks, and deliver a
                prioritised opportunity report at no cost. Most clients are
                surprised by how much revenue is escaping through fixable issues
                on pages they see every day.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get My Free
                  CRO Audit
                </Link>
                <Link
                  href="tel:+912226057575"
                  className="btnThemewhiteBorder"
                >
                  <i className="fa-solid fa-phone me-2"></i> +91 22 2605 7575
                </Link>
              </div>
              <p className="customText mt-4 mb-0">
                Contact SIB Infotech:{" "}
                <a href="mailto:info@sibinfotech.com" className="text_red">
                  info@sibinfotech.com
                </a>
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h4 className="small_heading fontWeight700 text-center mb-3">
                  Book a Free CRO Consultation
                </h4>
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
        title={"Frequently Asked Questions about CRO"}
        description={
          "Everything you need to know about conversion rate optimisation."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO and digital growth services that work together with CRO."
        }
        links={[
          {
            title: "Best SEO Agency in Mumbai",
            description:
              "See why Mumbai businesses pick SIB Infotech: transparent pricing, a named strategist, no lock-in.",
            href: "/search-engine-optimization-seo-services",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals and page experience factors that directly impact conversion rates.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "Shopify SEO Services",
            href: "/shopify-seo-services",
            description:
              "Rank Shopify stores on page 1 with platform-specific SEO, speed, and schema optimisation.",
          },
          {
            title: "WooCommerce SEO Services",
            href: "/woocommerce-seo-services",
            description:
              "Grow organic sales for WooCommerce stores with ecommerce-specific SEO strategies.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "SEO Case Studies",
            href: "/case-studies",
            description:
              "See how SIB Infotech delivered traffic, ranking, and revenue growth for real clients.",
          },
        ]}
      />
    </div>
  );
};

export default ConversionRateOptimizationMgt;
