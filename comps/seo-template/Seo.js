import React from "react";
import PartnerBadges from "../Home/PartnerBadges2";
import CaseStudy2 from "../Home/CaseStudy2";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import Conversions from "../Home/Conversions";
import Featured from "../Home/Featured";
import Tools from "../Home/Tools";
import Industries from "../Home/Industries2";
import Pricing from "../Home/Pricing";
import Link from "next/link";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";
import Solution from "../WhiteLabel/Solution";
import WhySIB from "../Home/WhySIB";
import BrandBuild from "../Home/BrandBuild";
import SIBPower from "../Home/SIBPower";

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
      "Investing in SEO can transform your online presence and deliver long-term success. Here’s how: ",
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
      title: `Most Effective Best SEO Practices & Strategy in ${new Date().getFullYear()}`,
      description: `
        A successful SEO strategy is a mixed stew of on-page, off-page, and technical SEO techniques. Use the following stepwise approach to boost your search ranking: 
      `,
      faqData: [
        {
          question: "1. Keyword Research & Strategy",
          answer:
            "Identify high-traffic, low-competition keywords suitable for your niche. Map long-tail keywords that match user intent. Utilize tools like Google Keyword Planner, Ahrefs, and SEMrush to gather data-driven insights.",
        },
        {
          question: "2. Competitor Analysis",
          answer:
            "Analyze competitors’ keyword usage, content strategies, and backlink profiles to enhance your own SEO efforts.",
        },
        {
          question: "3. On-Page SEO Optimization",
          answer:
            "Tag titles, meta descriptions, and headings (H1, H2, H3). Use keywords naturally without stuffing. Internal linking improves site authority and navigation. Implement structured data (schema markup) for better visibility. Optimize images using alt text and by compressing their file sizes.",
        },
        {
          question: "4. High-Quality Content Creation",
          answer:
            "Create engaging, informative, and credible content. Follow EEAT principles: Experience, Expertise, Authoritativeness, Trustworthiness. Regularly update existing blogs. Use silo structure for organizing content based on topical relevance.",
        },
        {
          question: "5. Optimize Content Design (UI & UX)",
          answer:
            "Ensure your content is designed to be accessible and appealing to the widest possible audience.",
        },
        {
          question: "6. Technical SEO Enhancements",
          answer:
            "Improve site speed and optimize for Core Web Vitals. Ensure mobile-friendly design and responsiveness. Fix crawl errors via Google Search Console. Create and submit an XML sitemap to search engines. Ensure the website uses HTTPS for secure browsing.",
        },
        {
          question: "7. Off-Page SEO & Link Building",
          answer:
            "Earn backlinks from authoritative sites. Use guest posts, PR outreach, and influencer collaborations for exposure. Leverage social media and brand mentions. Ensure accurate NAP (Name, Address, Phone) citations in major directories for local SEO.",
        },
        {
          question: "8. Local SEO (For Businesses Targeting Local Audience)",
          answer:
            "Optimize your Google My Business (GMB) profile. Encourage and respond to customer reviews. Use location-based keywords in content. List your business on local directories like Yelp, Justdial, etc.",
        },
        {
          question: "10. Regular Performance Monitoring & Optimization",
          answer:
            "Track rankings using Google Analytics and Search Console. Conduct regular SEO audits to fix new issues. Monitor competitors to stay ahead. Perform A/B testing on meta titles, descriptions, and CTAs for better CTR.",
        },
      ],
    },
  ];

  const power_data = [
    {
      title: "Generate High-Quality Leads & Sales",
      description:
        "Leverage data-driven strategies and advanced targeting to attract the right audience and convert prospects into loyal customers.",
    },
    {
      title: "Accelerate E-commerce Growth",
      description:
        "Maximize revenue with optimized product listings, AI-driven ad strategies, and seamless customer journeys designed for higher conversions and repeat sales.",
    },
    {
      title: "Enhance Website Performance & Visibility",
      description:
        "Optimize your website for speed, user experience, and SEO, ensuring higher search rankings and better customer engagement.",
    },
    {
      title: "Maximize Audience Engagement & Retention",
      description:
        "Capture attention with powerful storytelling, interactive campaigns, and AI-powered personalization to keep your audience coming back.",
    },
    {
      title: "Amplify Social Media Influence",
      description:
        "Build a thriving social media presence with data-backed content strategies, influencer collaborations, and targeted ads for greater reach and impact.",
    },
    {
      title: "Increase Brand Awareness & Authority",
      description:
        "Elevate your brand’s reputation with cutting-edge digital PR, high-quality content marketing, and strategic positioning that sets you apart from competitors.",
    },
    {
      title: "Leverage AI & Automation for Smarter Marketing",
      description:
        "Stay ahead with AI-powered chatbots, automated lead nurturing, and predictive analytics to optimize every touchpoint in the customer journey.",
    },
    {
      title: "Boost Conversion Rates with Performance Marketing",
      description:
        "Drive measurable results with highly optimized landing pages, CRO techniques, and A/B testing to ensure every click counts.",
    },
    {
      title: "Achieve Unmatched ROI with Data-Driven Decisions",
      description:
        "We track, analyze, and refine strategies in real time, ensuring your marketing budget delivers the highest possible returns.",
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
      <Solution data={seoServices} />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <BrandBuild
        title={brandContent[0].title}
        description={brandContent[0].description}
        faqData={brandContent[0].faqData}
      />
      <SIBPower
      title="Why Choose Us "
      subtitle="We are more than just a SEO Company "
      description="Since 2005, SIB Infotech has been at the forefront of SEO services in India, delivering exceptional results for businesses worldwide. We don’t just aim for better rankings—we focus on increasing visibility, boosting conversions, and maximizing your ROI. "
      data={power_data}
    />
      <PartnerBadges />
      <CaseStudy2 />
      <OurClients />
      <Testimonials />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        <Tools />
      </div>
      <Industries />
      <Pricing />
    </div>
  );
};

export default Seo;
