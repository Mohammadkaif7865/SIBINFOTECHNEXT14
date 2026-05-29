import Link from "next/link";
import Abbout3 from "../Home/Abbout3";
import AdsCompany from "./AdsCompany";
import AdWords from "./AdWords";
import Contact from "./Contact";
import EffectiveAds from "./EffectiveAds";
import HeroGoogleAds from "./HeroGoogleAds";
import HighlyEfficient from "./HighlyEfficient";
import SIBPower from "../Home/SIBPower";
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
  const googleAdsPowerData = [
    {
      title: " Google Premier Partner Agency",
      description: "Among the top 3% of Google Ads agencies globally",
    },
    {
      title: "Certified Google Ads Specialists",
      description: "Real experts managing your account, not junior executives",
    },
    {
      title: " ROI-Driven Campaigns",
      description: "Focused on revenue and qualified leads, not vanity clicks",
    },
    {
      title: " 18+ Years of Paid Media Expertise",
      description:
        "Battle-tested across hundreds of industries and ad spend levels",
    },
    {
      title: " Smart Bidding & AI-Powered Strategies",
      description:
        "Built around Google's latest machine learning and automation tools",
    },
    {
      title: "100% Transparency & Full Control",
      description:
        "Complete visibility into every keyword, every bid, every rupee spent",
    },
    {
      title: " Custom Campaign Strategies",
      description:
        "Tailored for your business goals, never built from generic templates",
    },
    {
      title: " Weekly Reporting & Strategy Calls",
      description: "Real data, real improvements, real accountability",
    },
    {
      title: " Multi-Channel Mastery",
      description:
        "Search, Display, Shopping, YouTube, Remarketing, and Performance Max",
    },
    {
      title: " Dedicated Account Manager",
      description: "One certified expert owning your campaigns end-to-end",
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
    subHeading: `Tired of Spending on <span class="text_red">Google Ads Without Seeing Results?</span>`,
    contentParagraphs: [
      `Many businesses waste a large part of their Google Ads budget on campaigns that are poorly optimized from the start.`,

      `Common issues include:`,

      `<ul class="instagram-list mt-3 mb-3">
      <li class="customText">Broad keywords attracting the wrong audience</li>
      <li class="customText">Ads appearing for irrelevant searches</li>
      <li class="customText">Weak landing pages with low conversion rates</li>
      <li class="customText">Poor conversion tracking and reporting</li>
      <li class="customText">No regular bid or campaign optimization</li>
      <li class="customText">Ad creatives running without testing or improvements</li>
    </ul>`,

      `With 20+ years of experience and millions in annual ad spend managed, SIB Infotech is recognized as a top-rated Google Ads management company. We create performance-driven Google Ads campaigns focused on increasing traffic, generating qualified leads, boosting sales, and maximizing ROI.`,
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
      title: `What’s Included in Our Google Ads Management Package?
`,
      subtitle: ` Our Google Ads Management Package`,
      description: `
        A complete Google Ads management package goes beyond just running ads. It covers every element that makes campaigns profitable, from strategy and setup to optimization and reporting. Here is exactly what you get when you partner with SIB Infotech.
      `,
      faqData: [
        {
          question: "01. Campaign Strategy & Planning",
          answer: `
      <p>
        A custom Google Ads strategy is built around your business goals, target audience, monthly budget, and competitive landscape. This becomes the blueprint for every campaign decision that follows.
      </p>
    `,
        },
        {
          question: "02. Keyword Research & Competitor Analysis",
          answer: `
      <p>
        In-depth research identifies the highest-intent keywords your buyers are searching, while competitor analysis reveals where opponents are spending, what is working for them, and how to position your campaigns to win the click.
      </p>
    `,
        },
        {
          question: "03. Audience Targeting & Segmentation",
          answer: `
      <p>
        Campaigns are built to reach the right people at the right time. Targeting covers location, device, demographics, interests, life events, in-market behavior, and custom audiences built from your CRM data.
      </p>
    `,
        },
        {
          question: "04. Campaign Setup",
          answer: `
      <p>
        Complete account structuring including campaign types, ad groups, bidding strategies, geo-targeting, ad scheduling, device adjustments, and all technical settings configured for maximum performance from day one.
      </p>
    `,
        },
        {
          question: "05. Compelling Ad Copywriting",
          answer: `
      <p>
        Conversion-focused ad copy written to match buyer intent, with multiple headline and description variations tested continuously. Every ad uses extensions, sitelinks, callouts, and structured snippets to maximize visibility.
      </p>
    `,
        },
        {
          question: "06. Landing Page Optimization Recommendations",
          answer: `
      <p>
        Detailed recommendations on improving landing page speed, layout, copy, forms, and mobile experience to convert more of your paid traffic into actual leads and sales.
      </p>
    `,
        },
        {
          question: "07. Continuous Campaign Optimization",
          answer: `
      <p>
        Daily bid adjustments, weekly creative testing, ongoing keyword refinement, and quality score improvements to drive down cost per click and cost per acquisition month after month.
      </p>
    `,
        },
        {
          question: "08. Conversion Tracking & Analytics",
          answer: `
      <p>
        Full conversion tracking setup using Google Tag Manager, Google Analytics 4, and Google Ads conversion actions, so every lead, call, form fill, and sale is tracked back to the exact campaign and keyword that drove it.
      </p>
    `,
        },
        {
          question: "09. Detailed Reporting & Insights",
          answer: `
      <p>
        Weekly performance reports showing spend, clicks, conversions, CPA, ROAS, and trends, paired with clear next-step recommendations. No fluff metrics, no hidden numbers.
      </p>
    `,
        },
        {
          question: "10. Dedicated Account Manager",
          answer: `
      <p>
        A single point of contact who knows your business, your goals, and your account inside out. Direct WhatsApp and email access, plus scheduled strategy calls whenever you need them.
      </p>
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
          heading="Why Choose"
          highlightedText=" Google Ads for Your Business"
          description="Recent reports state that Google processes over 2.3 million searches per second! Imagine potential customers searching for a service you offer, and your business appears right at the top. "
          subDescription="That's the magic of Google Ads!. Whether it's Search, Display, Shopping, Video, or App ads, a well-optimized Google Ads campaign drives measurable business results."
          imageSrc="/assets/images/google-ads/google-ads.jpg"
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

      <Partnership
        agencyWorkflow={adsWorkflow}
        title={
          "Our Approach to Deliver A Successful Google Ads Management Service "
        }
        rightTitle={``}
        rightDiscription={`Every successful Google Ads account follows a clear, repeatable process. SIB Infotech follows a structured 4-stage methodology refined over 18 years and 850+ clients, turning what most agencies treat as guesswork into a system built for predictable results.`}
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
        heading="Ready to Turn Google Ads from a Cost Into a Growth Engine? "
        subheading="Every day your campaigns run without proper optimization, you lose valuable ad spend and potential customers through irrelevant clicks, weak targeting, and poor bidding strategies.
        As a Google Premier Partner with 20+ years of experience, SIB Infotech delivers data-driven Google Ads management service focused on leads, sales, and measurable ROI for businesses across 40+ countries. "
        tagline="Get a Google Ads Audit | Schedule a Strategy Call 
"
        buttonText="Request a Free Consultation"
        buttonLink="contact"
        imageSrc="/assets/images/success-arrow.svg"
      />
      {/* <AdsCompany />
      <WhyChoose />

      <AdWords />
      <Contact
        heading="Talk To The Best Google Ads Consultant For Google AdWords Marketing Services"
        subheading="To Reach Your Best Prospects And Maximum ROI"
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      /> */}

      {/* <EffectiveAds /> */}

      <HighlyEfficient />

      <SIBPower
        title="Why Choose SIB Infotech for  "
        subtitle="Your Google Ads Campaigns? "
        description_right="Businesses trust SIB Infotech because we deliver what we promise: lower cost per acquisition, higher return on ad spend, and complete transparency. Unlike agencies that prioritize vanity metrics or lock you into long contracts, our google ads campaign management services are built entirely around your business goals. Here is what sets us apart."
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={googleAdsPowerData}
      />
    </>
  );
};

export default GoogleAdsMgt;
