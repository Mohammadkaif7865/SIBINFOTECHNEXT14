import Link from "next/link";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";
import BrandBuild from "../Home/BrandBuild";
import CaseStudy2 from "../Home/CaseStudy2";
import Conversions from "../Home/Conversions";
import Featured from "../Home/Featured";
import Industries from "../Home/Industries2";
import OurClients from "../Home/OurClients";
import PartnerBadges from "../Home/PartnerBadges2";
import Pricing from "../Home/Pricing";
import SIBPower from "../Home/SIBPower";
import Testimonials from "../Home/Testimonials";
import Tools from "../Home/Tools";

import WhySIB from "../Home/WhySIB";
// import Faqs from "../SEO2/Faqs";
// import OutsourcingServices from "../SEO2/OutsourcingServices";
import SeoAudit from "../SEO2/SeoAudit";
import SpecialisedServices from "../SEO2/SpecialisedServices";
import TalkWithExpert from "../SEO2/TalkWithExpert";
import Partnership from "../WhiteLabel/Partnership";
import Solution from "../WhiteLabel/Solution";
import About from "./About";
import Faq from "../Home/Faq";

const Seo = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "What is SEO?",
      answer: ` <div className="accordion-body">
      <p>
        SEO or ‘search engine optimization is the process of
        improving the quality and quantity of website traffic.
        This is achieved by increasing its visibility on
        search engines, improving rankings for unpaid results.
        As a marketing strategy, SEO has long-term benefits
        and provides a high return-on-investment.
      </p>
    </div>`,
    },
    {
      id: "faq2",
      question: "What are your SEO plans?",
      answer: `   <div className="accordion-body">
      <p className="customText">
        SEO is a results-oriented process that requires goal
        strategies to bring good results. We continuously
        strive to provide a complete package of SEO services
        including:
      </p>
      <ul className="listFlexItem">
        <li>Content analysis and optimization</li>
        <li>Website Structure Analysis</li>
        <li>Off-Page SEO and On-Page SEO</li>
        <li>Website code optimization</li>
        <li>Website structure optimization</li>
        <li>Keyword Research</li>
        <li>Local SEO Content Writing and Placement</li>
      </ul>
      <p className="customText">
        <strong>
          SEO Plans are based on customer requirements and
          their objective. Our SEO Packages offered are
          tailored made suitable for all kinds of budgets
        </strong>
      </p>
    </div>`,
    },
    {
      id: "faq3",
      question: "How long does it take to see the result?",
      answer: `<p>
      SEO grows over time and the entire SEO process takes
      about 3 to 6 months to see the expected results, with
      a minimum of 2 to 3 months in link building, on-page
      optimization, off-page optimization, content creation,
      and marketing. Is complete. Another fact is that SEO
      results are expected to increase over time, so results
      in 6 months will be slightly lower than in 12 months
    </p>`,
    },
    {
      id: "faq4",
      question: "What is the cost of SEO services?",
      answer: `  <p>
      Our SEO services' cost depends on the client's
      requirements. We provide custom SEO packages
      tailor-made to fit as per clients budget for SEO. We
      cover a vast range of services in our SEO packages'
      intending to improve website traffic and bring higher
      ranking on Google search result pages.
    </p>`,
    },
    {
      id: "faq5",
      question: "Why do you need SEO service for your website?",
      answer: ` <p>
      SEO services offer visibility to your websites and
      improve SEO ranking gradually over search engines like
      Google, Yahoo, Bing, DuckDuckGo etc. A high ranking
      website would bring more traffic to its website and
      help lead generation for the business.
    </p>`,
    },
    {
      id: "faq6",
      question: "Do you offer a free SEO audit in Mumbai?",
      answer: ` <p>
    Yes. SIB Infotech provides a free SEO audit for businesses in Mumbai and across India. The audit covers technical health, on-page optimization, keyword rankings, backlink profile, competitor analysis, and content gaps. You receive a detailed report with actionable recommendations, with no obligation to sign up.
    </p>`,
    },
    {
      id: "faq7",
      question: " How much does SEO cost per month at SIB Infotech?",
      answer: ` <p>
      Our SEO packages start from affordable monthly plans and are tailored to your business requirements. Pricing depends on your website size, industry competition, target audience, and growth goals. Every package includes on-page SEO, off-page SEO, technical optimization, content enhancements, and monthly performance reporting. Contact us for a free SEO audit and a customized quote.
    </p>`,
    },
    {
      id: "faq8",
      question: `Is SEO worth it in ${new Date().getFullYear()}?`,
      answer: `<p>
      With years crossing by, the emphasis on SEO is never
      degrading instead it is turning more prominent than
      ever. It is one of the most compelling digital
      marketing strategies that stimulate long-term results.
      In ${new Date().getFullYear()}, SEO continues to be
      significant and savvy marketers should discover their
      ways of managing content marketing alongside other
      traffic channels such as social media management. By
      targeting long-tailed keywords, SEO as inbound
      marketing broadens your brand's reach.
    </p>`,
    },
    {
      id: "faq9",
      question: `Why SEO services are so expensive?`,
      answer: `  <div className="accordion-body">
      <p className="customText">
        <strong>
          There are several reasons for SEO being expensive:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>It is a time taking process.</li>
        <li>
          Calls for several resources to build up and maintain
          a campaign.
        </li>
        <li>
          Relies on the expertise of the SEO specialist to
          establish and advance your strategy.
        </li>
      </ul>
    </div>`,
    },
    {
      id: "faq10",
      question: `How do you rank first on Google?`,
      answer: `  <p>
      There is no tried and tested method for ranking first
      on Google. However, with the right keywords and SEO
      campaigns, your chances of ranking high can be
      increased. For that, you'll have to create tons of
      optimized content and you're good to go! With the
      right strategies, this will happen much sooner than
      you think.
    </p>`,
    },
    {
      id: "faq11",
      question: `How does Google rank SEO?`,
      answer: `  <p>
      Authority and relevancy are the two primary things
      Google looks for when crawling a website. Google will
      produce the results based on algorithms and
      information gathered by the spiders. These web pages
      are placed on the search results page in an order
      reflecting their page.
    </p>`,
    },
    {
      id: "faq12",
      question: `How do I choose a company for SEO?`,
      answer: `  <div className="accordion-body">
      <p className="customText">
        For choosing a suitable SEO Company for your brand
        follows these six steps:
      </p>
      <ul>
        <li>
          Ask for examples and case studies of successful SEO
          campaigns.
        </li>
        <li>Think beyond SEO.</li>
        <li>Visit the SEO Company in person.</li>
        <li>
          Understand the risks of low-cost SEO agencies.
        </li>
        <li>Avoid SEO guarantees.</li>
        <li>
          Familiarize yourself with SEO pricing models and
          make an SEO budget.
        </li>
      </ul>
    </div>`,
    },
    {
      id: "faq13",
      question: `What are SEO tools?`,
      answer: ` <p>
      SEO tools determine the potential of your webpage for
      high rankings in search engine results. They provide
      keywords and backlinks information as well as insights
      into SEO competition on the Internet.
    </p>`,
    },
    {
      id: "faq14",
      question: `Why Hire SEO Company in India?`,
      answer: ` <p>
      Hiring an SEO company in India is a strategic choice
      fueled by a vast pool of skilled professionals focused
      on digital marketing. The cost-effective nature of
      Indian SEO services, coupled with competitive pricing,
      ensures businesses receive optimal value. With a
      proven track record and a diverse talent pool, these
      companies bring innovation and expertise to enhance
      online presence. The ability to navigate evolving
      industry trends and leverage cultural diversity allows
      for nuanced and targeted SEO strategies. Businesses
      can trust in achieving improved search engine
      rankings, driving organic traffic, and ultimately
      experiencing sustained growth by tapping into the
      comprehensive offerings of Indian SEO companies.
    </p>`,
    },
    {
      id: "faq15",
      question: `Which is the best SEO service company in Mumbai?`,
      answer: `<p>
    The best SEO service company in Mumbai is one with verified results, transparent reporting, and recognised certifications. SIB Infotech is a Google Premier Partner agency based in Malad West, Mumbai, with 20+ years of SEO experience and 1000+ brands ranked across 40+ countries. Clients include Airtel, Finolex, Jindal Steel, and BPCL. You can request a free SEO audit to evaluate our approach before committing.
  </p>`,
    },
    {
      id: "faq16",
      question: `How much do SEO services cost in Mumbai?`,
      answer: `<p>
    The cost of SEO services in Mumbai depends on several factors, including your website size, industry competition, target keywords, current search performance, and business goals. SEO requirements vary from one business to another, which is why most agencies offer customized plans based on the scope of work. At SIB Infotech, we provide tailored SEO solutions with transparent pricing, detailed reporting, and no long-term lock-in contracts. Contact our team for a free SEO audit and a customized proposal based on your specific growth objectives.
  </p>`,
    },
    {
      id: "faq17",
      question: `How do I hire an SEO expert in Mumbai?`,
      answer: `<p>
    To hire an SEO expert in Mumbai, look for a Google Premier Partner agency with case studies, industry experience in your sector, and clear monthly reporting. SIB Infotech assigns a dedicated SEO specialist and account manager to every project. You can book a free SEO discovery call to discuss your goals before signing up.
  </p>`,
    },
    {
      id: "faq18",
      question: `How long does SEO take to show results in Mumbai?`,
      answer: `<p>
    For most Mumbai businesses, SEO shows initial improvements within 3 to 6 months and strong results within 6 to 12 months. Highly competitive Mumbai keywords in real estate, healthcare, and finance may take longer. Local SEO results, such as Google Maps visibility, often improve faster, within 60 to 90 days.
  </p>`,
    },
  ];
  const seoServices = [
    {
      title: `On-Page SEO <br class="d-none d-md-lg "/> Optimization`,
      description:
        "We optimize every page of your website so Google understands exactly what you offer. This includes title tags, meta descriptions, header structure, schema markup, smart keyword placement, internal linking, and content that is built to convert.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Off-Page SEO & <br class="d-none d-md-lg "/> Link Building`,
      description:
        "We build your website's authority through high-quality backlinks, digital PR, brand mentions, guest posts, and outreach to top publications. The goal is simple. Make Google trust your site enough to rank it on page 1.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "A slow, broken, or hard-to-crawl website kills rankings. We fix everything under the hood. Site speed, core web vitals, mobile responsiveness, broken links, indexing issues, and crawlability. So Google can read and rank your site smoothly.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Local SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "If your customers are in Mumbai or anywhere else in India, you need to show up in local searches. We optimize your Google Business Profile, build local citations, manage reviews, and target geo-specific keywords so you dominate the near me results.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `E-Commerce SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Online stores need SEO built for product pages, category structures, and shopping intent. We optimize product titles, schemas, internal navigation, and content so your products actually get discovered and bought.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
    {
      title: `Content SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Great rankings start with great content. We write blogs, pillar pages, service pages, and resource hubs that target the right keywords, answer real customer questions, and build long-term organic traffic that compounds.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];
  const keyAdvantages = [
    {
      title: "Increased Organic Traffic",
      description:
        "Higher rankings mean more clicks and visitors to your site.",
    },
    {
      title: "Better User Experience",
      description:
        "SEO improves site speed, navigation, and mobile-friendliness.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Optimized content and targeted keywords attract the right audience.",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "SEO delivers sustainable, long-term results without high ad spend.",
    },
    {
      title: "Brand Credibility & Trust",
      description:
        "Ranking on the first page builds brand authority and credibility.",
    },
    {
      title: "Competitive Advantage",
      description: "Outperform your competitors and dominate search results.",
    },
    {
      title: "Local & Global Reach",
      description:
        "SEO helps you connect with local customers and international markets.",
    },
    {
      title: "Measurable Results",
      description:
        "Track performance with analytics and refine strategies for growth.",
    },
  ];
  const rightBoxContent = {
    heading: "Result-Driven SEO Services by India’s Top SEO Company ",
    description:
      "Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. Investing in SEO can transform your online presence and deliver long-term success. Here’s how:  ",
  };
  const leftBoxContent = {
    headingStart: "Benefits of Hiring an SEO Service Company in Mumbai   ",
    // headingHighlight: "of SEO",
    // subHeading: "for Your Business ",
    cardTitle: "Get More Traffic with Data-Driven SEO Solutions ",
    cardDescription:
      "80% of customers never look past the first page of Google. Outrank competitors, stop losing leads, and unlock your website's full potential with expert SEO services in Mumbai.",
    buttonText: "Book A FREE SEO Discovery Call ",
  };

  const power_data = [
    {
      title: "Google Premier Partner Status",
      description:
        "We are recognized in the top 3% of Google Partners across India. This is not a self-claimed title. It is earned through performance, certifications, and consistent results.",
    },
    {
      title: "20+ Years of Real SEO Mastery",
      description:
        "SEO has changed dramatically over two decades. From keyword stuffing in 2005 to AI Overviews in 2026, we have adapted, learned, and led every shift in search. Few agencies in India can claim that depth.",
    },
    {
      title: "AI-Powered SEO Strategies",
      description:
        "The future of search is AI. We are already optimizing brands for ChatGPT, Gemini, Perplexity, Claude, and Google's AI Overviews using GEO and AEO frameworks. Most agencies are still trying to figure out what AEO means.",
    },
    {
      title: "1000+ Brands Ranked Higher",
      description:
        "We have grown brands across every industry imaginable. Real estate, jewelry, education, manufacturing, healthcare, D2C, B2B SaaS, you name it. Each came in with different goals. Each walked out with better rankings, more traffic, and stronger revenue.",
    },
    {
      title: "Affordable for Every Indian Business",
      description:
        "We are an affordable seo company india businesses trust at every growth stage. From bootstrapped startups to mid-sized enterprises, our pricing scales with your needs and never with hidden surprises.",
    },
    {
      title: "Transparent, No-Jargon Reporting",
      description:
        "You will always know what we are doing, why we are doing it, and what results you are getting. Monthly reports in plain English. No fluff. No confusing metrics. Just clear progress you can show your team.",
    },
    {
      title: "Dedicated Account Manager",
      description:
        "You will work with a real human who knows your business, your goals, and your industry. Not a ticketing system. Not an overseas team you cannot reach. A real point of contact who picks up the phone when you call.",
    },
    {
      title: "Data-Led Decisions",
      description:
        "Every move we make is backed by data. From keyword research to content strategy to link building, we test, measure, and refine. Your growth is not powered by gut feelings. It is powered by numbers.",
    },
    {
      title: "Trusted Across 40+ Countries",
      description:
        "Our work has helped brands rank in India, the USA, the UK, Canada, Australia, the UAE, Singapore, and beyond. Global standards. Local expertise.",
    },
  ];

  const testimonial_data = [
    {
      title: `What Our Clients Say About <span class="text_red"> Our SEO Services in Mumbai </span> `,
      description: `We are a five star rated SEO Agency in Mumbai, Delhi & Across India `,
    },
  ];

  const agencyWorkflow = [
    {
      title: " Free SEO Audit",
      description: `
      <p>
        We start by analyzing your website, your competitors, your current rankings, your content quality, your technical health, and your backlink profile. You will know exactly where you stand before we begin.
      </p>
    `,
    },
    {
      title: " Strategy & Planning",
      description: `
      <p>
        Based on the audit, we build a custom 6 to 12 month SEO roadmap. This includes keyword targets, content plans, technical fixes, and link-building goals tied directly to your business KPIs.
      </p>
    `,
    },
    {
      title: " On-Page & Technical Fixes",
      description: `
      <p>
        We clean up your site. Fix broken pages. Speed it up. Optimize titles, meta tags, schemas, and internal linking. This is the foundation everything else rests on.
      </p>
    `,
    },
    {
      title: " Content & Off-Page Execution",
      description: `
      <p>
        We publish high-value content that targets your buyer's search intent. We build authority through digital PR, guest posts, and high-DA backlinks. Slow, steady, sustainable.
      </p>
    `,
    },
    {
      title: " AI Search Optimization",
      description: `
      <p>
        We make your brand visible across Google AI Overviews, ChatGPT, Gemini, Perplexity, and other AI-powered search engines using GEO and AEO frameworks.
      </p>
    `,
    },
    {
      title: " Reporting & Continuous Optimization",
      description: `
      <p>
        Every month, you get a clear report showing rankings, traffic, leads, and conversions. We refine the strategy based on real performance data, not assumptions.
      </p>
      <p>
        The result is compounding growth that does not stop when we do.
      </p>
    `,
    },
  ];
  return (
    <div>
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                {/* <span className="fw-bold title text-white ">Your Trusted</span> */}

                <h1 className="mt-3 heading fontWeight700 text-white ">
                  SEO Service{" "}
                  <span className="text_red fontWeight700">
                    {" "}
                    Company in Mumbai
                  </span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Google Premier Partner SEO Agency Trusted by 1000+ Brands in
                  40+ Countries
                </p>
                <p
                  className="mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  SIB Infotech is a trusted SEO company in Mumbai with 20+ years
                  of experience, helping businesses improve Google rankings,
                  generate qualified leads, and grow online visibility. As a
                  Google Premier Partner, we provide local SEO, technical SEO,
                  content optimization, and AI search optimization for ChatGPT,
                  Gemini, and Google AI Overviews. Get transparent reporting,
                  dedicated support, no lock-in contracts, and a free SEO audit.
                </p>
                <div className="mt-4">
                  <Link href="#contact" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Free SEO
                    Audit
                  </Link>
                  <Link href="#contact" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Hire an SEO
                    Expert in Mumbai
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
                    Best <span className="textChange">SEO </span> Company in
                    India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Top SEO Company"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">SEO</span> Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Top SEO Company"} />
      </div>
      <About />
      <Solution
        heading={"Our Complete SEO Services in Mumbai "}
        discription={
          "Every business is different. Your SEO strategy should be too. We offer a complete range of professional seo services in mumbai designed to help you rank, grow, and win across every type of search. Here is everything we do under one roof:"
        }
        data={seoServices}
      />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="heading fontWeight600">
                AI SEO, AEO and GEO for Mumbai's{" "}
                <span className="text_red">Competitive Search Landscape</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <p>Search is not what it used to be.</p>

              <p>
                A few years ago, ranking on Google was the only game in town.
                Today, your customers are searching across multiple platforms.
                They ask ChatGPT for recommendations. They scroll through
                Google's AI Overviews instead of clicking links. They use
                Perplexity for research, Gemini for quick answers, and Claude to
                compare options before making a decision. If your business is
                not visible across all of these surfaces, you are missing out on
                real buyers every single day. This is exactly where
                next-generation SEO comes in. And this is where SIB Infotech is
                leading the way in Mumbai.
              </p>
            </div>
          </div>
          <div className="row mt-4 mt-lg-5">
            <div className="col-lg-12">
              <h3 className="fontWeight600 heading2 text-center mb-4 mb-lg-5">
                The 3 Pillars of{" "}
                <span className="text_red">Modern Search Visibility</span>
              </h3>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="nextGenSeoCard h-100">
                <div className="nextGenSeoNumber">01</div>

                <h4 className="small_heading fontWeight600 mb-2 ">AI SEO</h4>

                <p>
                  AI SEO is the practice of optimizing your website to appear in
                  AI-powered search results like Google's AI Overviews, ChatGPT,
                  Gemini, Perplexity, and Claude. Unlike traditional SEO that
                  focuses only on keywords and backlinks, AI SEO focuses on
                  context, entity relationships, structured content, and how
                  clearly your information is communicated to AI models.
                </p>

                <div className="whyMattersBox">
                  <strong>Why it matters:</strong>
                  <p>
                    More than 40% of users now interact with AI search before
                    they ever click a website link. If your brand is not part of
                    the AI's answer, it is invisible to those buyers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="nextGenSeoCard h-100">
                <div className="nextGenSeoNumber">02</div>

                <h4 className="small_heading  fontWeight600 mb-2 ">
                  AEO <span>(Answer Engine Optimization)</span>
                </h4>

                <p>
                  AEO is the strategy of structuring your content so it can be
                  directly used as an answer by AI assistants, voice search, and
                  featured snippets. AEO works around clear questions, concise
                  answers, schema markup, and structured information that
                  machines can quickly understand, trust, and quote.
                </p>

                <div className="whyMattersBox">
                  <strong>Why it matters:</strong>
                  <p>
                    Voice search, smart speakers, and AI chatbots are now common
                    entry points for buyers. Brands optimized for AEO get cited
                    as the answer. Brands that ignore AEO get skipped
                    completely.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="nextGenSeoCard h-100">
                <div className="nextGenSeoNumber">03</div>

                <h4 className="small_heading  fontWeight600 mb-2 ">
                  GEO <span>(Generative Engine Optimization)</span>
                </h4>

                <p>
                  GEO is the newest layer of SEO. It focuses on helping your
                  brand show up inside AI-generated answers from ChatGPT,
                  Gemini, Perplexity, Claude, and Google AI Overviews. GEO uses
                  citation-friendly content, authoritative sources, structured
                  formats, and entity-rich writing to make sure AI models
                  reference your brand when answering buyer questions.
                </p>

                <div className="whyMattersBox">
                  <strong>Why it matters:</strong>
                  <p>
                    When a buyer asks AI tools "Which is the best SEO company in
                    Mumbai?" or "Top digital marketing agencies in India", GEO
                    is what decides whether your name shows up or your
                    competitor's does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <h3 className="heading fontWeight600">
                Why Mumbai Businesses Cannot{" "}
                <span className="text_red">Ignore This Shift</span>
              </h3>

              <p className="customText mt-3">
                Mumbai is one of the most competitive search markets in India.
                Every industry has dozens of established players already running
                aggressive SEO. To stand out today, you need more than keywords
                and backlinks. You need a brand that is visible everywhere your
                customers are looking. From Google search to AI Overviews. From
                voice assistants to chatbots. From AI search engines to
                traditional listings.
              </p>

              {/* <p className="customText">
                At SIB Infotech, we have built a custom AI SEO framework that
                blends traditional SEO with AEO and GEO strategies. We help
                Mumbai businesses get found across every modern search surface,
                today and tomorrow.
              </p> */}

              <p className="customText">
                The cost of SEO services in Mumbai varies based on factors such as your website size, industry competition, current search visibility, and business objectives. At SIB Infotech, we create customized SEO strategies tailored to your specific needs and growth goals. Our services include on-page SEO, off-page SEO, technical optimization, content enhancement, and detailed monthly reporting. With transparent communication, measurable results, and no long-term lock-in contracts, we focus on delivering sustainable organic growth. Request a free SEO audit and consultation to discover the best SEO approach for your business.

              </p>
            </div>

            <div className="col-lg-6 mt-2 mt-lg-0 ps-lg-5 ">
              <img
                className="image-full rounded"
                src="assets/images/google-ads/why-mumbai-shift-strategy.jpg"
                alt="AI SEO services in Mumbai – SIB Infotech GEO and AEO framework"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600  text-center mb-2">
                SEO Plans for Every{" "}
                <span className="text_red">Business Size and Budget</span> in
                Mumbai
              </h2>
              <p className="customText text-center">
                Not every business needs the same SEO. A local Mumbai bakery
                does not have the same needs as a global SaaS brand. That is why
                we offer tailored SEO solutions based on your size, your goals,
                and your budget.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/on-page-seo-content123.svg"
                    alt="Small Business SEO Services"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Small Business SEO Services
                </h4>

                <p className="customText">
                  If you run a startup, local shop, or solo business, you don't
                  need enterprise-level SEO. You need quick wins, smart
                  strategy, and a plan that drives real customers without
                  breaking your budget. Our small business seo services are
                  built exactly for this. We focus on local visibility, Google
                  Business Profile optimization, low-competition keywords, and
                  conversion-focused content so you start seeing leads within
                  months, not years.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/on-page-seo-title.png"
                    alt="Enterprise & Corporate SEO"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Enterprise & Corporate SEO
                </h4>

                <p className="customText">
                  For multi-location brands, large e-commerce stores, and
                  corporate websites with thousands of pages, we offer
                  enterprise SEO that handles scale. This includes deep site
                  architecture audits, advanced schema, multi-region targeting,
                  content cluster strategies, and dedicated account management.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/off-page-seo-link-building.svg"
                    alt="White Label SEO Services"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  White Label SEO Services
                </h4>

                <p className="customText">
                  If you run a marketing agency or web design firm and want to
                  offer SEO to your clients without building an in-house team,
                  our white label seo services are designed for you. We handle
                  the strategy, execution, and reporting. You deliver it under
                  your brand. NDA backed, fully managed, and scalable.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/off-page-seo-brand-mention.svg"
                    alt="Affordable SEO Packages for Indian SMEs"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Affordable SEO Packages for Indian SMEs
                </h4>

                <p className="customText">
                  We believe great SEO should not break your budget. As an
                  affordable seo company india businesses trust, we offer
                  transparent pricing, monthly flexibility, and zero hidden
                  fees. Our packages start small and scale with your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SIBPower
        title="Why Brands Choose SIB Infotech as Their SEO Service Company in Mumbai"
        // subtitle=" SEO Service Company in Mumbai "
        description_right="There are hundreds of agencies in Mumbai offering SEO. So why do brands across India and 40+ countries choose SIB Infotech as their long-term growth partner? Here is what makes us different:"
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />

      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Proven 6-Step SEO Process"}
        rightDiscription={`The cost of SEO services in Mumbai depends on website size, competition, current visibility, and business goals. At SIB Infotech, we provide customized SEO strategies, including on-page SEO, off-page SEO, technical SEO, content optimization, and monthly reporting, with transparent communication and no long-term lock-in contracts`}
        // tagline={'Seamless, Scalable, and Results-Driven'}
      />
      <PartnerBadges />
      <section className=" bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="heading fontWeight600 ">
                How We Compare with Other{" "}
                <span className="text_red"> SEO Companies In Mumbai?</span>
              </h2>

              <p className="customText mt-3">
                Most SEO agencies in Mumbai follow the same playbook. We do not.
                Here is a clear, side-by-side breakdown of what makes SIB
                Infotech genuinely different.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <div className="table-responsive  rounded">
                <table className="table table-bordered table-striped align-middle mb-0 bg-white seoComparisonTable">
                  <colgroup>
                    <col className="seoComparisonColPoint" />
                    <col className="seoComparisonColAgency" />
                    <col className="seoComparisonColSib" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-4">
                        Comparison Point
                      </th>
                      <th className="bgRedMenu text-white p-4">
                        Most Mumbai SEO Agencies
                      </th>
                      <th className="bgRedMenu text-white p-4">SIB Infotech</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="p-4">Search Coverage</td>
                      <td className="p-4">
                        Focus only on Google rankings. Ignore AI search engines
                        completely. Miss the new wave of buyer queries happening
                        on ChatGPT, Gemini, and Perplexity.
                      </td>
                      <td className="p-4">
                        We optimize your brand across Google, ChatGPT, Gemini,
                        Perplexity, Claude, and AI Overviews. Get found wherever
                        your customers are actually searching. Future-proof your
                        visibility today.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">AI Usage</td>
                      <td className="p-4">
                        Mass-produce thin, low-quality AI content. Repetitive
                        blogs that all sound the same. Google spots and
                        penalizes this fast.
                      </td>
                      <td className="p-4">
                        AI helps us research and plan smarter. Real humans
                        write, review, and refine every piece of content. The
                        result reads like a person and ranks like a pro.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Reporting Style</td>
                      <td className="p-4">
                        Reports filled with jargon and confusing metrics. Hard
                        to figure out what is actually happening. Most clients
                        nod along without truly understanding.
                      </td>
                      <td className="p-4">
                        Plain English reports with clear progress markers. Every
                        metric explained in business terms. You know exactly
                        what your money is doing every single month.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Success Focus</td>
                      <td className="p-4">
                        Celebrate vanity rankings and impressions. Show keyword
                        graphs that don't tie to revenue. No real link between
                        rankings and business outcomes.
                      </td>
                      <td className="p-4">
                        We track leads, conversions, and revenue alongside
                        rankings. Every SEO effort is connected to your bottom
                        line. Rankings only matter when they bring real
                        customers.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Account Support</td>
                      <td className="p-4">
                        Route you through ticket systems or overseas teams. Long
                        response times and slow communication. No real
                        understanding of your business.
                      </td>
                      <td className="p-4">
                        Dedicated India-based account manager assigned only to
                        you. Available on call, WhatsApp, and email. Knows your
                        industry, goals, and brand inside out.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Certifications</td>
                      <td className="p-4">
                        Few or no official certifications. Limited access to
                        platform tools and beta features. Strategies often run
                        on outdated information.
                      </td>
                      <td className="p-4">
                        Google Premier Partner &#40;Top 3% in India&#41;, Meta
                        Business Partner, Shopify Partner, and Microsoft
                        Advertising Partner. Direct access to betas, tools, and
                        consumer insights.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Industry Experience</td>
                      <td className="p-4">
                        Around 5 to 10 years in the market. Limited exposure to
                        major algorithm shifts. Less depth in handling complex
                        SEO challenges.
                      </td>
                      <td className="p-4">
                        20+ years of real-world SEO experience. Adapted through
                        every major Google update since 2005. Battle-tested
                        strategies that consistently deliver.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Strategy Approach</td>
                      <td className="p-4">
                        One-size-fits-all SEO templates. The same plan applied
                        across industries. Results vary because the strategy
                        doesn't fit your business.
                      </td>
                      <td className="p-4">
                        Custom SEO strategy built around your industry,
                        audience, and business goals. Research-led keyword and
                        content planning. Designed to compound month over month.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Tools & Tech</td>
                      <td className="p-4">
                        Free or basic SEO tools with limited data. Incomplete
                        view of competitors and rankings. Decisions made with
                        half the picture.
                      </td>
                      <td className="p-4">
                        Premium platforms like Ahrefs, SEMrush, Screaming Frog,
                        Surfer SEO, and a custom AI SEO framework. Complete view
                        of your performance. Smarter decisions, faster wins.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Global Reach</td>
                      <td className="p-4">
                        Serve only Indian clients. Limited understanding of
                        international search behavior. Hard to scale strategies
                        for export-led or global brands.
                      </td>
                      <td className="p-4">
                        1000+ brands ranked across 40+ countries. Deep
                        experience in India, USA, UK, UAE, Canada, Australia,
                        and beyond. Built for businesses ready to go global.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with an SEO Expert in Mumbai – Free Audit, No Obligation"
        linkDestination="/contact-us"
      />

      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-9  text-center">
              <h2 className="heading fontWeight600 mt-4">
                Industries We Serve with{" "}
                <span className="text_red">
                  SEO Services <br className="d-lg-block d-none " /> in
                  Mumbai{" "}
                </span>
              </h2>

              <p className="customText mt-3">
                Search behavior changes from one industry to another. A real
                estate buyer searches differently from a SaaS founder. A patient
                looking for a clinic searches differently from a shopper
                browsing skincare. That is why our SEO strategies are never
                copy-paste. Over the past 20 years, we have helped brands rank
                higher across nearly every industry. Here are the sectors we
                serve.
              </p>
            </div>
          </div>

          <div className="row mt-4 mt-lg-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/ecommerce-seo.png"
                  alt="On-page SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  E-commerce and D2C Brands
                </h3>
                <p>
                  We optimize product pages, category structures, schema markup,
                  and conversion-focused funnels so your products get
                  discovered, ranked, and purchased.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/healthcare-seo.png"
                  alt="Off-page SEO and link building Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Healthcare and Pharma
                </h3>
                <p>
                  From local SEO for clinics to authority-led content for
                  hospitals, we help medical brands build trust, attract
                  patients, and stay compliant with healthcare advertising
                  guidelines.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/real-estate-seo.png"
                  alt="Technical SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Real Estate and Construction
                </h3>
                <p>
                  High-intent buyer leads, project page optimization,
                  location-based ranking, and local search dominance for
                  builders, brokers, and developers.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/education-seo.png"
                  alt="Local SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Education and EdTech
                </h3>
                <p>
                  Student enrollment campaigns, course page rankings, and a
                  smart blend of paid and organic strategies that help
                  institutions and edtech platforms grow.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/finance-seo.png"
                  alt="E-commerce SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Finance and Banking
                </h3>
                <p>
                  Trust-led content for NBFCs, fintech firms, and advisory
                  platforms, paired with compliance-friendly SEO that builds
                  credibility and conversions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/travel-seo.png"
                  alt="SEO content writing services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Travel and Hospitality
                </h3>
                <p>
                  Booking-intent SEO for hotels, resorts, travel agencies, and
                  tour operators. We help your business show up the moment a
                  traveler is ready to book.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/it-saas-seo.png"
                  alt="IT and SaaS"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  IT and SaaS
                </h3>
                <p>
                  Lead-generating content, thought leadership, and SEO that
                  drives qualified leads for software companies, SaaS platforms,
                  and IT consultants.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/manufacturing-seo.png"
                  alt="Manufacturing and B2B"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Manufacturing and B2B
                </h3>
                <p>
                  Niche keyword targeting, lead-driven content, technical
                  product page optimization, and global market expansion
                  strategies for export-oriented businesses.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/legal-seo.png"
                  alt="Legal and Consultancy"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Legal and Consultancy
                </h3>
                <p>
                  Local visibility for law firms, expertise-led content for
                  consultants, and ranking strategies for branded and
                  high-intent service queries.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/beauty-fashion-seo.png"
                  alt="Beauty, Fashion and Lifestyle"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Beauty, Fashion and Lifestyle
                </h3>
                <p>
                  Influencer-led SEO, visual content optimization, and
                  trend-driven keyword targeting to grow brand awareness,
                  audience, and sales.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/ngo-seo.png"
                  alt="NGOs and Non-Profits"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  NGOs and Non-Profits
                </h3>
                <p>
                  Awareness-led SEO, donor-focused content, and outreach
                  campaigns that help non-profits get discovered and supported.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/real-estate-seo.png"
                  alt="Home Services"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Home Services
                </h3>
                <p>
                  Plumbers, electricians, cleaning services, interior designers,
                  and more. We help service-based businesses rank locally and
                  bring in steady inquiries.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="industrySeoCard industrySeoWideCard">
                <img
                  src="/assets/images/seo/niche-sector-seo.png"
                  alt="Telecom, Matrimony, and Niche Sectors"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Telecom, Matrimony, and Niche Sectors
                </h3>
                <p>
                  We have built SEO strategies for telecom companies,
                  matrimonial platforms, and other unique business models that
                  need specialized search visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <OurAproach /> */}
      {/* <SeoProcess /> */}
      <SpecialisedServices />

      <CaseStudy2
        description={`Client Success Stories That Prove
           We’re a Top SEO Company in India,our SEO results speak for themselves`}
      />
      <OurClients
        title={`India’s Trusted
          <span class="fontWeight600">SEO Experts</span>
          Behind <span class="fontWeight600 text_red">Fast-Growing Brands</span>`}
      />
      <Testimonials
        title={testimonial_data[0].title}
        description={testimonial_data[0].description}
      />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        {/* Some of the Top SEO Tools for Auditing & Monitoring Effective SEO are used by us */}
        <Tools
          title={`Some of the 
            <span class="fontWeight600">
              Top SEO Tools
              </span>
              for
              <span class="fontWeight600">
              Auditing & Monitoring Effective SEO
              </span>
              are used by us
            
            `}
        />
      </div>
      {/* <Industries /> */}
      <Industries
        heading="Industries We Serve"
        subHeading={
          <>
            End-to End <span className="fontWeight600">SEO Services</span>
            <span className="fontWeight600"> for Every Industry</span>
          </>
        }
        description1="At SIB Infotech, we deliver custom SEO Services as per the needs of various industries. Whether you are in eCommerce, healthcare, finance, real estate, education, or any other domain, our expert team combines AI-driven strategies with proven SEO techniques to help you reach the right audience and drive real business results."
        description2="Whether you are a startup or an enterprise, we offer industry-focused SEO services that help you increase visibility, improve ROI, and scale your business efficiently."
      />

      <Pricing
        batchtitle={`SEO Pricing Plans`}
        heading={`360° <span class="fontWeight600">SEO</span>
          Solutions`}
        description={`  Our SEO Packages starts from $250 only. / Starts from: $250/Month  USD only – weak signal for Mumbai keyword.`}
      />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <SeoAudit />
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Search Engine Optimization <span class="text-black">Question?</span>`}
        // description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default Seo;
