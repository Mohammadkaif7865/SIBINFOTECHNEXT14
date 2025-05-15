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
import OutsourcingServices from "../SEO2/OutsourcingServices";
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
      question: "Ask for an initial SEO audit of your website?",
      answer: ` <p>
      We offer free SEO audit services as a part of the
      entire SEO package. We have dedicated professionals to
      provide SEO audit reports for your website, unlike
      some SEO companies in India that entirely rely on
      audit tools. We ensure that the audit report is
      developed thoroughly with covering elements like
      keyword research and competitor analysis.
    </p>`,
    },
    {
      id: "faq7",
      question: "How much does SEO Services cost per month?",
      answer: ` <p>
      Our SEO services' cost depends on the client's
      requirements. We provide custom SEO packages
      tailor-made to fit as per client's budget for SEO. We
      cover a vast range of services in our SEO packages'
      intending to improve website traffic and bring higher
      ranking on Google search result pages. SEO packages
      start from around USD 300 per month onwards.
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
  ];
  const seoServices = [
    {
      title: ` On-Page SEO  <br class="d-none d-md-lg "/> Optimization`,
      description:
        "On-page SEO is the foundation of any successful SEO strategy. At SIB Infotech, we specialize in providing comprehensive on-page SEO services that help businesses achieve higher search engine rankings, increased traffic, and improved user engagement. On-page SEO is the sub-category that is useful in optimizing the on-page contents of your website which boosts your website ranking higher on search engines. It focuses on website tools like structure, content, and appearance. It includes the optimization of HTML tags and images on the website of your brand.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Off-Page SEO & <br class="d-none d-md-lg "/> Link Building`,
      description:
        "Off-page SEO is activities that are performed after the websites goes live. Off-page SEO Service deals with the external links that direct traffic to your websites organically, also known as 'backlinks' This category deals with regulating the backlinks on other publisher's pages including blogs, which leads to building a reliable spot on the search engine and the rankings are set to the sky.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services `,
      description:
        "Put your business on the local map with our tailored Local SEO services. We specialize in optimizing your online presence to attract local customers. From optimizing Google My Business profiles to ensuring accurate business information across directories, we ensure that your business is easily discoverable in local searches.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Local SEO <br class="d-none d-md-lg "/> Services `,
      description:
        "Technical SEO focuses on the website's architecture and user interface that is the technical parameters that directly affect the visibility. It manages the technical set up of the website that is the code. Most search engines prioritize the website's code when ranking it for search engines.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `E-Commerce SEO <br class="d-none d-md-lg "/>  Services `,
      description:
        "Fuel your online store's success with our E-Commerce SEO services. We optimize product visibility, streamline the shopping experience, and boost your sales. Elevate your digital presence and make your products stand out in the competitive online marketplace with our tailored solutions. Your success is our focus in the world of e-commerce.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
    {
      title: `Mobile SEO  `,
      description:
        "Mobile SEO is based on its name, which is meant for mobile devices. At present more than 60% of Google searches are done on mobile phones. This Mobile SEO service optimizes your website on phones and makes it mobile-friendly ",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.jpg",
    },
    {
      title: ` SEO Content <br class="d-none d-md-lg "/>   Writing Services  `,
      description:
        "High-quality, White Label Link Building for SEO agencies—authority links, seamless delivery, your brand! ",
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
    headingStart: "Benefits   ",
    headingHighlight: "of SEO",
    subHeading: "for Your Business ",
    cardTitle: "Get More Traffic with Data-Driven SEO Solutions ",
    cardDescription:
      "80% of Customers will never look past the first search engine results page. Outrank Competitors & Stop Loosing Leads to Your Competitors & Unlock Your Website’s Full Potential with Expert SEO Services ",
    buttonText: "Book A FREE SEO Discovery Call ",
  };

  const brandContent = [
    {
      title: `<span>Rank on Google's 1st Page  </span><br/>
<span>Using Human-Led +   </span><br/>
AI-Driven SEO Strategy `,
      subtitle: `How to Create an Effective Winning SEO Strategy in 2025? `,
      description: `
        A successful SEO strategy is a mixed stew of on-page, off-page, and technical SEO techniques. Use the following stepwise approach to boost your search ranking: 
      `,
      faqData: [
        {
          question: "1. Keyword Research & Strategy",
          answer: `
            <p>Keyword research is a fundamental practice in search engine optimization (SEO).</p>
            <ul>
              <li>Identify high-traffic, low-competition keywords that are suitable for your niche</li>
              <li>Map long-tail keywords that match intent.</li>
              <li>Keyword research would not be complete without using a set of engines such as Google Keyword Planner, Ahrefs, and SEMrush to draw data-based insights.</li>
            </ul>
          `,
        },
        {
          question: "2. Competitor Analysis",
          answer: `
            <p>This process gathers competitors' insights about their keyword, content, and backlink strategy and uses those insights to improve your own SEO</p>
          `,
        },
        {
          question: "3. On-Page SEO Optimization",
          answer: `
            <ul>
              <li>Tagging title, description, and heads (H1, H2, and H3).</li>
              <li>Keyword stuffing should not be applied in the context but make provisions for keyword use in the content.</li>
              <li>Internally linking your site will help you to build an ever-better web of page authority across your site.</li>
              <li>Structured data (schema markup) - A type of code that you can optimize on your website to help search engines provide more informative and relevant results to users.</li>
              <li>Image optimization using alt text and compressing their file sizes.</li>
            </ul>
          `,
        },
        {
          question: "4. High-Quality Content Creation (& E-E-A-T)",
          answer: `
            <ul>
              <li>Generate high quality unique, engaging, useful & specific, and verifiable content.</li>
              <li>E-E-A-T (experience, expertise, authoritativeness, and trustworthiness) should be the guidelines.</li>
              <li>Keep your old blogs up to date in some manner.</li>
              <li>Siloing in the content structure should be encouraged based on topical relevance.</li>
            </ul>
          `,
        },
        {
          question: "5. Optimize Content Design (UI & UX)",
          answer: `
            <ul>
              <li>The process of making sure content is written in a way that it can reach the largest possible target audience.</li>
              <li>Mobile Friendly/Responsive: Your website's users can use your website through mobile device with ease and barring any significant changes from the desktop version of your website.</li>
            </ul>
          `,
        },
        {
          question: "6. Technical SEO Enhancements",
          answer: `
            <ul>
              <li>The site speed should be fastened and Core Web Vitals optimized.</li>
              <li>Enforce mobile friendly design and responsiveness.</li>
              <li>Fix the crawl errors known to Google Search Console.</li>
              <li>Create an XML sitemap and submit it to the search engines for listing all pages.</li>
              <li>Make sure the website is HTTPS secure.</li>
            </ul>
          `,
        },
        {
          question: "7. Off-Page SEO & Link Building",
          answer: `
            <ul>
              <li>Attain high-quality backlinks from authoritative websites.</li>
              <li>For exposure purposes, one could use guest postings, PR outreach, and influencer collaborations.</li>
              <li>Social media and brand mentions could also work for exposure.</li>
              <li>Ensure accurate citation and match in terms of cross-referencing with major directories for local SEO purposes.</li>
            </ul>
          `,
        },
        {
          question: "8. Local SEO (For Businesses Targeting Local Audience)",
          answer: `
            <ul>
              <li>Optimize your Google My Business (GMB) profile.</li>
              <li>To the end, anyone could elicit reviews while responding to them.</li>
              <li>Content should include keywords based upon the location. Localize your business entity in sites such as Yelp, Justdial, etc.</li>
              <li>Local SEO is a strategy that focuses on improving your visibility in local search rankings.</li>
            </ul>
          `,
        },
        {
          question: "10. Regular Performance Monitoring & Optimization",
          answer: `
            <ul>
              <li>Rank checking with Google Analytics and Search Console.</li>
              <li>Schedule regularly SEO audits to fix emerging issues.</li>
              <li>Always study what the competition is doing to keep on improving it.</li>
              <li>Carry out A/B tests regarding Meta titles, descriptions, and CTAs for higher click-through rates. Conduct A/B testing on meta tags, descriptions, and CTAs.</li>
            </ul>
          `,
        },
      ],
    },
  ];

  const power_data = [
    {
      title: "Proven Track Record",
      description: "Thousands of successful campaigns across industries.",
    },
    {
      title: "Latest SEO Techniques",
      description: "We follow Google's evolving algorithms and best practices.",
    },
    {
      title: "Data-Driven Strategies",
      description: "AI-powered insights for better keyword targeting.",
    },
    {
      title: "Comprehensive SEO Solutions",
      description: "On-page, off-page, technical, and local SEO services.",
    },
    {
      title: "Customized Approach",
      description: "Tailored SEO plans to suit your business goals.",
    },
    {
      title: "Transparent Reporting",
      description: "Regular updates with performance tracking.",
    },
  ];
  const testimonial_data = [
    {
      title: `What Our <span class="text_red"> Client's Say</span> About Us `,
      description: `We are a five star rated SEO Agency in Mumbai, Delhi & Across India `,
    },
  ];

  const agencyWorkflow = [
    {
      title: "Strategy<br/> & Research",
      description: `
        <ul class="ourapproach_ul">
          <li>Organic SEO Strategy Building</li>
          <li>Detailed Competitor Analysis</li>
          <li>Audience Requirements Analysis</li>
          <li>Keyword Research</li>
          <li>Website SEO Audit</li>
        </ul>
      `,
    },
    {
      title: "Website <br/> Optimization",
      description: `
        <ul class="ourapproach_ul">
          <li>Website Optimization</li>
          <li>Quality Content and Copywriting</li>
          <li>Resolve Technical Issues</li>
          <li>Analytics and Data Tracking Setup</li>
          <li>Sitemap Submission</li>
        </ul>
      `,
    },
    {
      title: "Implementation <br/>& Link Building",
      description: `
        <ul class="ourapproach_ul">
          <li>Authentic and Quality Link Building</li>
          <li>Local SEO Optimization</li>
          <li>Off page SEO</li>
          <li>On page SEO</li>
        </ul>
      `,
    },
    {
      title: "Reporting <br/> & Monitoring",
      description: `
        <ul class="ourapproach_ul">
          <li>Monthly Reporting and performance</li>
          <li>Conversion Goal Optimisation</li>
          <li>Regular Trend Analysis</li>
          <li>Client Review</li>
        </ul>
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
                  Your Next SEO Agency in India
                  <br />
                  <span className="text_red">
                    Trusted by Over 1000+ companies{" "}
                  </span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Rank Higher, Grow Faster
                </p>
                <p
                  className="mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Boost Website Traffic, Improve Search Rankings & Maximize
                  Conversions with our Advanced AI Driven SEO Strategies to Rank
                  #1 on Google & Bing
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
                    <span className="textChange">SEO </span>{" "}
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
              Best <span className="textChange">SEO</span>{" "}
              Company in India
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
        heading={"More Visibility, More Leads, More Growth! "}
        subHeading={"With Our Cutting-Edge SEO Services in India"}
        discription={
          "Powering Growth for Agencies, Resellers & Global Businesses with White-Label Expertise"
        }
        data={seoServices}
      />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <SIBPower
        title="We Are SEO  "
        subtitle="Experts in India "
        description="We are more than just a SEO Company"
        title_right={`Why Choose SIB Infotech As Your SEO Service Provider in India?`}
        description_right="At SIB Infotech, we don’t just rank websites, we drive sustainable digital growth. Our focus is on increasing visibility, boosting conversions and maximizing your ROI. Whether its real estate SEO, healthcare SEO, education SEO, or technology-based SEO, we bring industry-specific expertise to every project and understand your business requirements, address its challenges and draft targeted SEO solutions that drive measurable results"
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />
      <BrandBuild
        image={`/assets/images/phone-seo-local-squares.png`}
        title={brandContent[0].title}
        subtitle={brandContent[0].subtitle}
        description={brandContent[0].description}
        faqData={brandContent[0].faqData}
      />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <Partnership
        batchtitle={"Our Approach"}
        agencyWorkflow={agencyWorkflow}
        title={"Complete SEO Process"}
        subtitle={"Explained Step-by-Step to Rank you on Top"}
        rightTitle={`How Does SEO Work? `}
        rightDiscription={`Search Engine Optimization (SEO) is the process of enhancing your website's visibility on search engines like Google. By optimizing various elements of your site, SEO helps search engines understand your content better, making it more likely to appear in relevant search results. This increased visibility can drive more organic traffic to your site, leading to higher engagement and conversions. `}
        // tagline={'Seamless, Scalable, and Results-Driven'}
      />
      {/* <OurAproach /> */}
      {/* <SeoProcess /> */}
      <SpecialisedServices />
      <OutsourcingServices />

      <PartnerBadges />
      <CaseStudy2
        description={`Client Success Stories That Prove
 We’re a Top SEO Company in India,our SEO results speak for themselves`}
      />
      <OurClients title={`India’s Trusted
          <span class="fontWeight600">SEO Experts</span>
          Behind <span class="fontWeight600">Fast-Growing Brands</span>`} />
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
            End-to End <span className="fontWeight500">SEO Services</span>
            <span className="fontWeight600"> for Every Industry</span>
          </>
        }
        description1="At SIB Infotech, we deliver custom SEO Services as per the needs of various industries. Whether you are in eCommerce, healthcare, finance, real estate, education, or any other domain, our expert team combines AI-driven strategies with proven SEO techniques to help you reach the right audience and drive real business results."
        description2="Whether you are a startup or an enterprise, we offer industry-focused SEO services that help you increase visibility, improve ROI, and scale your business efficiently."
      />

      <Pricing batchtitle={`SEO Pricing Plans`} heading={`360° <span class="fontWeight600">SEO</span>
          Solutions`} description={`  Our SEO Packages starts from <strong>$250</strong> only.`} />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <Faq
      
       title={`<span class="text-black">Frequently Asked</span> Search Engine Optimization <span class="text-black">Question?</span>`}
      // description={faqDiscription}
      faqsData={faqsData}
      />

      <SeoAudit />
    </div>
  );
};

export default Seo;
