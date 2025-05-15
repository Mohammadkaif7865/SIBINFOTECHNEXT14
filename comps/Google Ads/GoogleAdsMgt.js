import Link from "next/link";
import Abbout3 from "../Home/Abbout3";
import AdsCompany from "./AdsCompany";
import AdWords from "./AdWords";
import Contact from "./Contact";
import EffectiveAds from "./EffectiveAds";
import HeroGoogleAds from "./HeroGoogleAds";
import HighlyEfficient from "./HighlyEfficient";
import WhyChoose from "./WhyChoose";

import {
  FaBullseye,
  FaChartBar,
  FaMousePointer,
  FaRocket,
  FaSearchDollar,
  FaSlidersH,
} from "react-icons/fa";
import BrandBuild from "../Home/BrandBuild";
import WhySIB from "../Home/WhySIB";
import TalkWithExpert from "../SEO/TalkWithExpert";
import SmoSection from "../SmoPage/WhatisSmo";
import Cta2 from "../WhiteLabel/Cta2";
import Partnership from "../WhiteLabel/Partnership";
import Services from "./Services";

const GoogleAdsMgt = () => {
  const keyAdvantages = [
    {
      title: "Google Premier Partner Agency",
      description: "Certified team of Google Ads specialists",
    },
    {
      title: "ROI-Driven Campaigns",
      description: "Focused on maximizing your returns",
    },
    {
      title: "Millions of Ad Spend Managed Yearly",
      description: "Large-scale ad budgets across industries", // Added for clarity
    },
    {
      title: "Transparent Pricing",
      description: "Zero hidden fees",
    },
    {
      title: "Custom Strategies",
      description:
        "Tailored for your business goals, Smart Bidding & AI-Powered Strategies",
    },
    {
      title: " 100% Transparency & Full Control",
      description: "You see everything we do, and you’re always in control", // Added to reinforce transparency
    },
    {
      title: "Monthly Reporting & Optimization",
      description:
        "Real data, real improvements, Data-Driven Campaign Adjustments",
    },
    {
      title: "24/7 Support",
      description: "Your campaigns never sleep, and neither do we",
    },
    {
      title: "PROVEN EXPERTISED ",
      description: "  16+ Years of PPC Experience", // Added to support expertise claim
    },
    {
      title: "Our Exprties with",
      description: " E-commerce, Lead Generation, and Branding", // Added to reflect breadth of service
    },
  ];

  const rightBoxContent = {
    heading:
      "Why Choose SIB Infotech for Your Google Ads Campaign Management?  ",
    // description:
    //   "PPC (Pay-Per-Click) advertising is one of the fastest and most effective ways to drive targeted traffic, generate leads, and grow your business online. It allows you to reach the right audience at the right moment — when they are actively searching for your products or services. Here's why businesses choose PPC: ",
  };

  const leftBoxContent = {
    headingStart: "Our  ",
    headingHighlight: "Google Ads Compaign Management",
    subHeading: "Measurable Growth, Proven Results",
    cardTitle: "First Click to Final Conversion",
    cardDescription:
      "Powered by Social, Paid, Creative & Influencers — We Build Bold Brands, Drive Results, and Spark Meaningful Connections.",
    buttonText: "Get a Free Analysis",
  };
  const adsSrvices = [
    {
      title: `Search Ads <br class="d-none d-md-lg "/> (Google Search Network)`,
      description:
        "Appear at the top of Google Search Results when customers are actively looking for your products or services. Ideal for lead generation, local services, and B2B marketing.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Display Ads <br class="d-none d-md-lg "/> (Google Display Network)`,
      description:
        "Build brand awareness and retarget your visitors with visually engaging banner ads across millions of partner websites and apps.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Shopping Ads <br class="d-none d-md-lg "/> (for E-commerce)`,
      description:
        "Showcase your products directly in Google Shopping with images, prices, and product details — perfect for eCommerce stores looking to increase sales.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Video Ads <br class="d-none d-md-lg "/> (YouTube Advertising)`,
      description:
        "Deliver powerful, engaging video ads on YouTube and the Google Video Network to build brand trust and drive conversions.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `App Promotion <br class="d-none d-md-lg "/> Campaigns`,
      description:
        "Promote your mobile app across Google Search, Display, Play Store, and YouTube with Universal App Campaigns — maximize installs and in-app engagement.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Performance Max <br class="d-none d-md-lg "/> Campaigns`,
      description:
        "Harness the power of Google's AI to optimize ads across all channels (Search, Display, Shopping, YouTube, Discover) with Performance Max — the newest campaign type that drives maximum performance from a single campaign.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Remarketing / <br class="d-none d-md-lg "/> Retargeting Campaigns`,
      description:
        "Reconnect with visitors who showed interest in your brand but didn't convert. Keep your business top-of-mind and bring customers back to complete their journey.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
  ];

  const about3Data = {
    sectionId: "about",
    // mainHeading: "Google Ads Management Services | SIB Infotech",
    subHeading: `Maximize Your ROI with Expert <span class="text_red">Google Ads Management</span>`,

    contentParagraphs: [
      `With over 20+ years of experience and millions in ad spend managed annually, SIB Infotech is recognized as a Top-Rated Google Ads Management Company. In today’s competitive digital world, showing up when your customers are searching for your services is critical. At SIB Infotech, we specialize in Google Ads management services that drive measurable results — from increasing website traffic to boosting leads, sales, and ROI.`,

      `We help businesses like yours leverage the power of Google Ads to achieve faster growth, better leads, and greater online visibility — with strategies that are smart, cost-effective, and ROI-driven. Whether you’re a startup, SME, or large enterprise, our certified Google Ads experts craft data-driven, high-converting campaigns tailored to your business goals.`,

     
    ],
    image1: {
      src: "/assets/images/instagram-ads-business-objective.svg",
    },
    image2: {
      src: "/assets/images/calculator-development-firm.svg",
    },
    buttonText: "Let's Grow Your Business?",
    buttonLink: "/contact",
    phoneNumber: "+919222260000",
    phoneDisplay: "+91 92222-60000",
    phoneHelpText: "Need Help",
    callIcon: "/assets/images/icons/call-icon.svg",
  };

  const power_data = [
    {
      title: "Immediate Visibility on Google Search",
      description: "",
    },
    {
      title: "Pay Only When Someone Clicks",
      description: "",
    },
    {
      title: "Target Highly Intentional Audiences",
      description: "",
    },
    {
      title: "Precise Budget Control and Optimization",
      description: "",
    },
    {
      title: "Trackable, Measurable Results and ROI",
      description: "",
    },
    {
      title: "Boost Brand Awareness and Market Share",
      description: "",
    },
  ];

  const adsWorkflow = [
    {
      title: "Understanding <br/> Business Goals",
      description: `
      <ul class="ourapproach_ul">
        <li>Establish targets</li>
        <li>Analyse target market</li>
        <li>Set KPI’s</li>
      </ul>
    `,
    },
    {
      title: "Comprehensive <br/> Keyword Research",
      description: `
      <ul class="ourapproach_ul">
        <li>Identify high intent keywords</li>
        <li>Categorize the users</li>
        <li>Boost targeting accuracy</li>
      </ul>
    `,
    },
    {
      title: "Campaign Setup <br/> & Ad Creation",
      description: `
      <ul class="ourapproach_ul">
        <li>Choose the right campaign type</li>
        <li>Enhance ad content</li>
        <li>Implement smart bidding techniques</li>
      </ul>
    `,
    },
    {
      title: "Transparent <br/> Reporting & Insights",
      description: `
      <ul class="ourapproach_ul">
        <li>Evaluate monthly progress</li>
        <li>Provide strategic guidance</li>
        <li>Execute data-driven strategies</li>
      </ul>
    `,
    },
  ];
  const brandContent = [
    {
      title: `Our <span> Google Ads Management </span> Packages
`,
      subtitle: `What’s Included in Our Google Ads Management Package?`,
      description: `
        A successful SEO strategy is a mixed stew of on-page, off-page, and technical SEO techniques. Use the following stepwise approach to boost your search ranking: 
      `,
      faqData: [
        {
          question: "1. Campaign Strategy & Planning",
          answer: `<p>
        We design a custom Google Ads strategy based on your business objectives, audience, and competition to maximize your returns. </p>  

        <h5 class="mt-3">
        Competitor Analysis 
        
        </h5>
      <ul class="mt-3">
        <li><strong>Keyword Research & Targeting :</strong>Extensive keyword research ensures your ads are triggered by the right search queries to attract high-quality leads. </li>
       
      </ul>
    `,
        },

        {
          question: "4. Campaign Setup",
          answer: `
      <p>
       We create and structure your campaigns — Search Ads, Display Ads, Shopping Ads, Video Ads, or App Ads — for maximum efficiency and performance
      </p>
    `,
        },
        {
          question: "5. Compelling Ad Copywriting",
          answer: `
      <p>Our creative team writes persuasive ad copies that drive clicks and conversions while meeting Google's best practices. </p>
    `,
        },
        {
          question: "6. Landing Page Optimization Recommendations",
          answer: `
      <p>We optimize your landing pages for better user experience, relevance, and conversion rates, ensuring you get the best value from every click. </p>
    `,
        },
        {
          question: "7. Continuous Campaign Optimization",
          answer: `
      <ul>
        <li><strong>A/B Testing:</strong> Continuous A/B testing of ads, creatives, and landing pages to identify winning combinations and improve performance. .</li>
        <li><strong>Bid Management:</strong> We use smart bidding strategies to ensure you get the most clicks and conversions for the lowest possible cost per click (CPC). </li>
      </ul>
    `,
        },
        {
          question: "8. Conversion Tracking & Analytics",
          answer: `
      <p>
       Setting up and monitoring goal tracking to measure form fills, calls, purchases, and other KPIs that matter most to your business. 
      </p>
    `,
        },
        {
          question: "9. Detailed Reporting & Insights",
          answer: `
      <p>We provide transparent monthly reports showing campaign performance, cost analysis, conversion data, and actionable insights.</p>
    `,
        },
        {
          question: "10. Dedicated Account Manager",
          answer: `
      <p>You’ll have a dedicated account manager providing personalized service, support, and ongoing strategy alignment.</p>
    `,
        },
      ],
    },
  ];

  return (
    <>
      <HeroGoogleAds />
      <Abbout3 {...about3Data} />
      <div className="bg-black">
        <SmoSection
          textWhite
          bgBlack
          title="Why Choose"
          highlightedText=" Google Ads for Your Business"
          description="Recent reports state that Google processes over 2.3 million searches per second! Imagine potential customers searching for a service you offer, and your business appears right at the top. "
          subDescription="That's the magic of Google Ads!. Whether it's Search, Display, Shopping, Video, or App ads, a well-optimized Google Ads campaign drives measurable business results."
          imageSrc="/assets/images/ads.png"
          imageAlt="Team Working"
          features={[
            {
              icon: <FaSearchDollar />,
              title: "Immediate Visibility on Google Search",
              description:
                "Appear at the top of search results instantly with paid ads.",
            },
            {
              icon: <FaMousePointer />,
              title: "Pay Only When Someone Clicks",
              description:
                "Your budget is spent only when users engage with your ad.",
            },
            {
              icon: <FaBullseye />,
              title: "Target Highly Intentional Audiences",
              description:
                "Reach users actively searching for your products or services.",
            },
            {
              icon: <FaSlidersH />,
              title: "Precise Budget Control and Optimization",
              description:
                "Set daily limits and adjust bids for optimal performance.",
            },
            {
              icon: <FaChartBar />,
              title: "Trackable, Measurable Results and ROI",
              description:
                "Monitor campaign success with detailed performance metrics.",
            },
            {
              icon: <FaRocket />,
              title: "Boost Brand Awareness and Market Share",
              description:
                "Expand your visibility and grow your competitive edge.",
            },
          ]}
        />
      </div>
 
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <Services />

      {/* <Solution
        heading={"Our Google Ads Services Include:   "}
        
        data={adsSrvices}
      /> */}
      <Partnership
        batchtitle={"Our workflow"}
        agencyWorkflow={adsWorkflow}
        title={"Our Proven Process "}
        subtitle={" Step-by-Step to Rank you on Top"}
        rightTitle={``}
        rightDiscription={``}
        // tagline={'Seamless, Scalable, and Results-Driven'}
      />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our Google Ads Management Services?"
        linkTitle="Speak with one of our Ads Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <BrandBuild
        image={`/assets/images/phone-seo-local-squares.png`}
        title={brandContent[0].title}
        subtitle={brandContent[0].subtitle}
        description={brandContent[0].description}
        faqData={brandContent[0].faqData}
      />

      <Cta2
        heading="Ready to Dominate Google? "
        subheading="Whether you're an e-commerce brand, a startup, a B2B company, or a service provider — SIB Infotech will design a custom Google Ads strategy to maximize your ROI and boost your growth. "
        tagline="Speak to Our Google Ads Experts Today 
"
        buttonText="Request a Free Consultation"
        buttonLink="#contact"
        imageSrc="/assets/images/success-arrow.svg"
      />
      <AdsCompany />
      <WhyChoose />

      <AdWords />
      <Contact
        heading="Talk To The Best Google Ads Consultant For Google AdWords Marketing Services"
        subheading="To Reach Your Best Prospects And Maximum ROI"
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />

      <EffectiveAds />

      <HighlyEfficient />
      <section className="blueBg2">
        <div className="containerFull">
          <div className="callAction">
            <h4 className="customLineHeight2 fontHeading">
              Are you ready to partner with #1 Google AdWords &amp;
            </h4>
            <h3 className="customLineHeight">
              PPC Management Company in India for ultimate Google advertising
              services and solutions?
            </h3>
            <Link href="/contact-us">Speak to our Google Ads experts</Link>
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
    </>
  );
};

export default GoogleAdsMgt;
