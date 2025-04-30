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
import SidebarTabs from "@/comps/SidebarTabs";

const GoogleAdsMgt = () => {
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
    mainHeading: "Google Ads Management Services | SIB Infotech",
    subHeading: `Maximize Your ROI with Expert <span class="text_red">Google Ads Management</span>`,

    contentParagraphs: [
      `Are You Struggling to Generate More Leads? Google Ads Can Change the Game!
  
  Recent reports state that Google processes over 2.3 million searches per second! Imagine potential customers searching for a service you offer, and your business appears right at the top. That's the magic of Google Ads!
  
  Running a successful Google Ads campaign isn’t just about creating an ad—it involves strategic planning, precise execution, and continuous optimization. And that’s where SIB Infotech, a leading Google Ads Management Company from India, comes into play.
  
  We don't just run ads—we maximize your ROI with data-driven strategies, advanced targeting, and ongoing performance optimization. Whether it's Google Search Ads, Display Ads, Shopping Ads, or Remarketing, our expert team ensures every click delivers real value for your business.`,

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
      <SidebarTabs
        heading={heading}
        subheading={subheading}
        // description={description}
        tabs={tabs}
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
