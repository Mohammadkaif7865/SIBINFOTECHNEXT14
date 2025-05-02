import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import HeroGoogleAds from "./HeroGoogleAds";
import AdsCompany from "./AdsCompany";
import WhyChoose from "./WhyChoose";
import AdWords from "./AdWords";
import Contact from "./Contact";
import AdCampaigns from "./AdCampaigns";
import EffectiveAds from "./EffectiveAds";
import HighlyEfficient from "./HighlyEfficient";
import Abbout3 from "../Home/Abbout3";
import Partnership from "@/comps//WhiteLabel/Partnership";
import Solution from "@/comps/WhiteLabel/Solution";
import WhySIB from "../Home/WhySIB";

const GoogleAdsMgt = () => {
  const keyAdvantages = [
    {
      title: "Google Partner Agency",
      description:
        "Certified team of Google Ads specialists with deep platform expertise to drive high-performance campaigns.",
    },
    {
      title: "ROI-Driven Campaigns",
      description:
        "Every strategy we implement is focused on maximizing your returns, not just clicks or impressions.",
    },
    {
      title: "No Contracts / Transparent Pricing",
      description:
        "We believe in flexibility and honesty — no long-term commitments and absolutely zero hidden fees.",
    },
    {
      title: "Custom Strategies",
      description:
        "Each campaign is tailored to your unique business goals, audience, and industry for maximum impact.",
    },
    {
      title: "Full Campaign Ownership",
      description:
        "You retain full rights and access to your campaign data, accounts, and assets — always.",
    },
    {
      title: "Monthly Reporting & Optimization",
      description:
        "Receive clear, concise performance reports and benefit from continuous campaign improvements based on real-time data.",
    },
    {
      title: "24/7 Support",
      description:
        "Your campaigns never sleep, and neither do we — our team is always available for help and optimization.",
    },
  ];
  
  


const rightBoxContent = {
heading: "Why Choose SIB Infotech for Your Google Ads Campaign Management?  ",
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
  const smoServices = [
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
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Shopping Ads <br class="d-none d-md-lg "/> (for E-commerce)`,
      description:
        "Showcase your products directly in Google Shopping with images, prices, and product details — perfect for eCommerce stores looking to increase sales.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Video Ads <br class="d-none d-md-lg "/> (YouTube Advertising)`,
      description:
        "Deliver powerful, engaging video ads on YouTube and the Google Video Network to build brand trust and drive conversions.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `App Promotion <br class="d-none d-md-lg "/> Campaigns`,
      description:
        "Promote your mobile app across Google Search, Display, Play Store, and YouTube with Universal App Campaigns — maximize installs and in-app engagement.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
    {
      title: `Performance Max <br class="d-none d-md-lg "/> Campaigns`,
      description:
        "Harness the power of Google's AI to optimize ads across all channels (Search, Display, Shopping, YouTube, Discover) with Performance Max — the newest campaign type that drives maximum performance from a single campaign.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.jpg",
    },
    {
      title: `Remarketing / <br class="d-none d-md-lg "/> Retargeting Campaigns`,
      description:
        "Reconnect with visitors who showed interest in your brand but didn't convert. Keep your business top-of-mind and bring customers back to complete their journey.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];
  
  const heading = "Our Google Ads Management Services ";
  const subheading = "We offer Best Google Ads Management  Services in India";
  // const description =
  //   "Get the most out of your budget with our expert-managed PPC campaigns across multiple platforms.";
  const tabs = [
    {
      title: "Google Ads Management",
      content: `
        <p><strong>Search Ads</strong></p>
        <p>The Search Network campaign is the only platform that allows your business to display text ads on the SERPs (Search Engine Result Pages). The campaign is supplemented with extensive features that include app installs, mobile app engagement, dynamic search ads, call-only or callout, and snippets. SN is a boundless place for a new Google Ads user to advertise for wide-ranging businesses along with the local business. Search Network campaigns are beneficial when:</p>
        <ul>
          <li>High-intent keyword targeting for maximum visibility.</li>
          <li>Ad copywriting and split testing for improved CTR.</li>
          <li>Immediate traffic and leads.</li>
        </ul>
  
        <p><strong>Display Ads</strong></p>
        <p>The image ads are displayed on the Google Display Network (GDN), which consists of millions of websites to show your ads. The GDN campaigns demand to setup marketing objectives that can be based on impressions, visits, engagement, and actions. The objectives you select are the basis for building your ad campaign and its success. You can use the GDN campaign:</p>
        <ul>
          <li>Visually appealing banner ads to reach a broader audience.</li>
          <li>Strategic placements on high-traffic websites.</li>
          <li>Broader audience coverage to appear on various websites and apps.</li>
        </ul>
  
        <p><strong>Shopping Ads (Google Shopping)</strong></p>
        <p>The first step for a Google shopping campaign is to set up Google Merchant Centre. This ad campaign is useful to showcase your products from your e-commerce store in Google Shopping. The success of the campaign depends on how you set up your e-commerce store or website, if the setup is correct and Google receives correct feeds, it does all the targeting and ad creation jobs on its own. The Google Shopping Ads campaign could only be used if you have an e-commerce store. It is used for:</p>
        <ul>
          <li>Optimized product listings for eCommerce businesses.</li>
          <li>Increased visibility on Google Shopping results.</li>
          <li>Reach ready to buy shoppers for higher conversions.</li>
        </ul>
  
        <p><strong>YouTube Advertising</strong></p>
        <p>There are several ad formats available for video ad campaigns on Google Ads. The options range from letting the viewer skip your ad after five seconds to a six seconds buffer ad between videos. The campaign has several features that allow you to extend your ads with shopping campaigns along with app installs. It is effective for:</p>
        <ul>
          <li>Engaging video ads to target the right audience.</li>
          <li>Skippable and non-skippable ads to boost brand reach.</li>
          <li>Re-engage audience who have previously interacted with the brand.</li>
        </ul>
  
        <p><strong>Remarketing & Retargeting</strong></p>
        <p>The Google remarketing ads are considered to be a powerful tool for businesses as it is useful in targeting the people who have already visited your store or used your application. The campaign demands careful set-up as it leads to the generation of your remarketing tags and lists. The campaign is effective for:</p>
        <ul>
          <li>Re-engage visitors and convert lost leads into customers.</li>
          <li>Personalized ad strategies for higher retention.</li>
          <li>Keeps the brands visible across websites and social media.</li>
        </ul>
  
        <p><strong>Performance Max Campaigns</strong></p>
        <p>Performance Max campaign ensures that your ads reach the right audience at the right time. It is a goal-oriented campaign, ideal for driving sales and increasing brand visibility. It delivers higher ROI and better results effortlessly. It is used for:</p>
        <ul>
          <li>AI-driven campaigns for multi-channel ad placements.</li>
          <li>Optimized bidding strategies to enhance conversions.</li>
          <li>Asset-based approach that creates high-performing ads.</li>
        </ul>
      `,
    },
  ];

  const about3Data = {
    sectionId: "about",
    // mainHeading: "Google Ads Management Services | SIB Infotech",
    subHeading: `Maximize Your ROI with Expert <span class="text_red">Google Ads Management</span>`,

    contentParagraphs: [
      `With over 20+ years of experience and millions in ad spend managed annually, SIB Infotech is recognized as a Top-Rated Google Ads Management Company. In today’s competitive digital world, showing up when your customers are searching for your services is critical. At SIB Infotech, we specialize in Google Ads management services that drive measurable results — from increasing website traffic to boosting leads, sales, and ROI.`,

      `We help businesses like yours leverage the power of Google Ads to achieve faster growth, better leads, and greater online visibility — with strategies that are smart, cost-effective, and ROI-driven. Whether you’re a startup, SME, or large enterprise, our certified Google Ads experts craft data-driven, high-converting campaigns tailored to your business goals.`,

      `Are You Struggling to Generate More Leads? Google Ads Can Change the Game!
  
      Recent reports state that Google processes over 2.3 million searches per second! Imagine potential customers searching for a service you offer, and your business appears right at the top. That's the magic of Google Ads!
  
      `,

      `As certified Google Ads professionals, we develop powerful strategies that drive real results, increasing conversion rates while reducing ad costs to ensure the highest ROI for our clients.`,
    ],
    image1: {
      src: "/assets/images/aboout-3.png",
    },
    image2: {
      src: "/assets/images/about-3-2.png",
    },
    buttonText: "Let's Grow Your Business?",
    buttonLink: "/contact",
    phoneNumber: "+919222260000",
    phoneDisplay: "+91 92222-60000",
    phoneHelpText: "Need Help",
    callIcon: "/assets/images/icons/call-icon.svg",
  };

  const agencyWorkflow = [
    {
      title: "Initial Assessment & Audit ",
      description: `
        <ul class="ourapproach_ul">
          <li>Platform Selection </li>
          <li>Identify Opportunities </li>
          <li>Social Audit + Recommendations </li>
          <li>Competitor analysis  </li>
          
        </ul>
      `,
    },
    {
      title: "Strategy Development ",
      description: `
        <ul class="ourapproach_ul">
          <li>Social Profile Account Setup </li>
          <li>Content Calendar Creation </li>
          <li>Hashtags Management </li>
          <li>Target Audience Analysis </li>
         
          
        </ul>
      `,
    },
    {
      title: "Engagement & Growth ",
      description: `
        <ul class="ourapproach_ul">
          <li>Design Appeal Visuals  </li>
          <li>Social Post Scheduling  </li>
          <li>Boosting / Group sharing   </li>
          <li>Follower Engagement </li>
        </ul>
      `,
    },
    {
      title: "Monitoring & Reporting ",
      description: `
        <ul class="ourapproach_ul">
          <li>Account Monitoring </li>
          <li>Likes, Comments / Engagement Monitoring </li>
          <li>Enhances Consistency </li>
          <li>Feedback and Adaptation </li>
        </ul>
      `,
    },
  ];
  return (
    <>
      <HeroGoogleAds />
      <Abbout3 {...about3Data} />
      <WhySIB  
            keyAdvantages={keyAdvantages}
            leftBoxContent={leftBoxContent}
            rightBoxContent={rightBoxContent}
          />
      <Solution
        heading={"Our Google Ads Services Include:   "}
        // subHeading={"With Our Cutting-Edge SEO Services in India"}
        // discription={
        //   "At SIB Infotech, we don’t just manage your social media—we elevate it. We’re not just a digital agency—we’re your growth partner. With years of experience in delivering high-impact digital solutions, our SMO experts bring creativity, strategy, and results-driven execution to every project. Here’s what sets us apart: "
        // }
        data={smoServices}
      />
      
      <Partnership
        batchtitle="Our Approach"
        agencyWorkflow={agencyWorkflow}
        title="Complete SMO Process"
        subtitle="Explained Step-by-Step to Rank you on Top"
        rightTitle="How Does SMO Work?"
        rightDiscription=" Social Media Optimization (SMO) works by using social media platforms to increase awareness of a brand, product, or service.
It involves creating and sharing high-quality, engaging content—like posts, videos, infographics, and blogs—to encourage audience interaction and sharing.
By optimizing profiles, using the right hashtags, participating in discussions, and running campaigns, businesses can build a strong online presence, drive traffic to their websites, and improve brand credibility.
Ultimately, SMO helps in reaching a broader audience organically and builds a loyal community around the brand.

"
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

      <AdCampaigns />
      <Contact
        heading="FREE Consultation to get it started."
        subheading="Our team of Google Ads specialists and PPC experts are ready
        to provide you with a"
        buttonText="Speak to our Consultant"
        buttonLink="/contact-us"
        isPBeforeH3={true}
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
