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
import SeoProcess from "../SEO2/SeoProcess";
import TalkWithExpert from "../SEO2/TalkWithExpert";
import Solution from "../WhiteLabel/Solution";
import About from "./About";
import SpecialisedServices from "../SEO2/SpecialisedServices";
import OutsourcingServices from "../SEO2/OutsourcingServices";
import SeoAudit from "../SEO2/SeoAudit";
import Faqs from "../SEO2/Faqs";
import OurAproach from "./OurAproach";

const Seo = () => {
  const seoServices = [
    {
      title: ` On-Page SEO  <br class="d-none d-md-lg "/> Optimization`,
      description:
        "Boost your clients' rankings with our White Label SEO—expert strategies, seamless execution, your brand!",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: `Off-Page SEO & <br class="d-none d-md-lg "/> Link Building`,
      description:
        "Scale your agency effortlessly with expert White Label PPC Management—high performance, low hassle!",
      img: "/assets/images/white-lable/White-Label-PPC-Services.jpg",
    },
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services `,
      description:
        "Grow your clients’ brands with our White Label SMO—engaging content, expert management, your branding!",
      img: "/assets/images/white-lable/White-Label-Social-Media-Marketing.jpg",
    },
    {
      title: `Local SEO <br class="d-none d-md-lg "/> Services `,
      description:
        "Scale your agency with our White Label Facebook Ads—expertly managed, fully branded, and results-driven!",
      img: "/assets/images/white-lable/White-Label-Facebook-ads.jpg",
    },
    {
      title: `E-Commerce SEO <br class="d-none d-md-lg "/>  Services `,
      description:
        "Boost client ROI with our White Label Google Ads—expertly managed, fully branded, and performance-focused!",
      img: "/assets/images/white-lable/White-Label-Google-ads.jpg",
    },
    {
      title: `Mobile SEO  `,
      description:
        "High-quality, White Label Link Building for SEO agencies—authority links, seamless delivery, your brand! ",
      img: "/assets/images/white-lable/White-label-link-building.jpg",
    },
    {
      title: ` SEO Content <br class="d-none d-md-lg "/>   Writing Services  `,
      description:
        "High-quality, White Label Link Building for SEO agencies—authority links, seamless delivery, your brand! ",
      img: "/assets/images/white-lable/White-label-link-building.jpg",
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
    heading: "Get top-notch SEO services from leading SEO Company in India ",
    description:
      "Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. ",
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
          `
        },
        {
          question: "2. Competitor Analysis",
          answer: `
            <p>This process gathers competitors' insights about their keyword, content, and backlink strategy and uses those insights to improve your own SEO</p>
          `
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
          `
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
          `
        },
        {
          question: "5. Optimize Content Design (UI & UX)",
          answer: `
            <ul>
              <li>The process of making sure content is written in a way that it can reach the largest possible target audience.</li>
              <li>Mobile Friendly/Responsive: Your website's users can use your website through mobile device with ease and barring any significant changes from the desktop version of your website.</li>
            </ul>
          `
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
          `
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
          `
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
          `
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
          `
        }
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
              Best <span className="textChange">White Label Marketing </span>{" "}
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
        title="Why Choose "
        subtitle="SIB Infotech"
        description="We are more than just a SEO Company Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        description_right="As a leading SEO marketing agency in Mumbai, India; we pride ourselves on a remarkable track record, successfully managing over 1350+ projects within distinct niches. Our dedicated teams specialize in various sectors, ensuring businesses achieve top rankings. Whether its real estate SEO, healthcare SEO, education SEO, or technology-based SEO, each niche benefits from a specialized team with the requisite skills and extensive industry experience. This targeted approach allows us to comprehend specific business requirements, leading to outstanding results. "
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />
      <BrandBuild
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
      <OurAproach />
      {/* <SeoProcess /> */}
      <SpecialisedServices />
      <OutsourcingServices />

      <PartnerBadges />
      <CaseStudy2
        description={`Client Success Stories That Prove
 We’re a Top SEO Company in India,our results speak for themselves`}
      />
      <OurClients />
      <Testimonials
        title={testimonial_data[0].title}
        description={testimonial_data[0].description}
      />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        <Tools />
      </div>
      <Industries />
      <Pricing />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <Faqs />

      <SeoAudit />
    </div>
  );
};

export default Seo;
