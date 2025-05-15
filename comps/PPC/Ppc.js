import SIBPower from "@/comps/Home/SIBPower";
import WhatisSmo from "@/comps/SmoPage/WhatisSmo";
import { FaBullhorn, FaChartLine, FaHandshake, FaStar, FaUsers, FaWater } from "react-icons/fa6";
import Cta2 from "../WhiteLabel/Cta2";
import Banner from "./Banner";
import PPCFaq from "./PPcFaq";
import PPCServices from "./PPcServices";
import PPcStrategy from "./PPcStrategy";
import PPcWebervices from "./PPcWebservices";
import Services from "./Services";
import WhyPPC from "./WhyPPc";


const Ppc = () => {
  const PPcServices = [
    {
      title: `Google Ads <br class="d-none d-md-lg "/> Management`,
      description: `We create and manage high-performing Google Ads across Search, Display, Shopping, and YouTube to maximize ROI. As a Google Premier Partner, we optimize campaigns for better reach and lower CPC.`,
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Bing Ads <br class="d-none d-md-lg "/> Management`,
      description: `Tap into a unique audience with cost-effective Bing Ads campaigns. Our team optimizes for reach, relevance, and results across Microsoft’s search network.`,
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Social Media <br class="d-none d-md-lg "/> Advertising`,
      description: `We run data-driven paid campaigns on platforms like Facebook, Instagram, and LinkedIn to boost engagement, generate leads, and drive conversions.`,
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Yandex Ads <br class="d-none d-md-lg "/> Management`,
      description: `Target Russian and CIS audiences with localized ads on Yandex. Our experts optimize your campaigns with cultural insights and native targeting strategies.`,
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `Amazon Ads <br class="d-none d-md-lg "/> Management`,
      description: `We help boost your product visibility and sales through Amazon Sponsored Ads, Product Display Ads, and Brand Campaigns tailored to shopping behavior.`,
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
  ];

  const power_data = [
    {
      title: "Certified Google Premier Partner",
      description:
        "With a long-standing partnership with Google, we stay up-to-date with the latest PPC trends and tools.",
    },
    {
      title: "Tailored Campaigns",
      description:
        "We don’t believe in one-size-fits-all. Every PPC campaign we manage is uniquely designed for your business.",
    },
    {
      title: "Data-Driven Results",
      description:
        "Our strategies are backed by data, ensuring your ad spend is optimized for maximum returns.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stay in the loop with detailed reports on your PPC campaign’s performance.",
    },
    {
      title: "Maximize ROI",
      description:
        "We focus on delivering high conversions at the lowest possible cost to maximize your return on investment.",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "From Google Ads to Facebook, Instagram, and YouTube — we manage PPC campaigns across all major platforms.",
    },
  ];

  return (
    <>
      <Banner />
      <WhatisSmo
        title="What is"
        highlightedText=" Pay-Per-Click (PPC)"
        description="Pay-Per-Click (PPC) is an online advertising model where an advertiser runs an ad and he will get charged a fee each time a user clicks on their ad. Essentially, it’s a way of buying targeted website traffic rather than earning it organically. PPC allows businesses to display their ads on search engines, social media platforms, and other websites"
        subDescription="The most popular form of PPC is search engine advertising, where advertisers bid for ad placement in a search engine’s sponsored links when users search for keywords related to their business. When managed properly, PPC can be a highly cost-effective way to generate leads, increase website traffic, and drive sales."
        imageSrc="/assets/images/ppc.png"
        imageAlt="Team Working"
        features={[
    {
      icon: <FaChartLine />,
      title: "Highly Targeted Audience Reach",
      description:
        "PPC allows precise targeting by demographics, location, device, time, and keywords to reach the right audience at the right time.",
    },
    {
      icon: <FaUsers />,
      title: "Higher Conversion Potential",
      description:
        "Because ads target users actively searching for your product or service, conversion rates are typically higher than other ad models.",
    },
    {
      icon: <FaWater />,
      title: "Full Budget Control",
      description:
        "You set your own budget and can adjust it anytime. PPC ensures you only pay when someone interacts with your ad.",
    },
    {
      icon: <FaStar />,
      title: "Measurable and Trackable Results",
      description:
        "With tools like Google Ads and Analytics, every click, impression, and conversion can be tracked and measured.",
    },
    {
      icon: <FaBullhorn />,
      title: "Real-Time Advertising",
      description:
        "Launch, pause, or modify your campaigns instantly and see performance updates in real time for quick adjustments.",
    },
    {
      icon: <FaHandshake />,
      title: "Brand Recognition and Trust",
      description:
        "Even if users don’t click, consistent ad visibility improves brand awareness and builds trust with potential customers.",
    },
  ]}
/>

      <Services />
      
      <WhyPPC />
         <Cta2
        heading="Ready to Grow with PPC?  "
        subheading="Whether you’re new to PPC or looking to scale your existing campaigns, our team of experts at SIB Infotech can help you get the most out of your ad spend. Contact us today for a free consultation and take the first step towards achieving your business goals with PPC advertising. "
        tagline="Speak to Our Google PPC Experts Today 
"
        buttonText="Request a Free Consultation"
        buttonLink="#contact"
        imageSrc="/assets/images/success-arrow.svg"
      />
      <PPCServices />
      <SIBPower
        title="Why Choose SIB Infotech?   "
        
        description="We are more than just a PPC Company"
        title_right="Benefits of getting PPC services from the best PPC agency in India "
        description_right="At SIB Infotech, we don’t just run ads — we deliver performance. Our PPC experts create data-driven, ROI-focused campaigns that put your brand in front of the right audience at the right time. From Google Ads to Bing and social media platforms, we optimize every click and keyword to ensure maximum conversions with minimal ad spend. Whether your goal is lead generation, eCommerce sales, or brand visibility, we customize each PPC strategy to align with your business goals and deliver measurable results that matter."
       
      />
      <PPcStrategy />

      <PPcWebervices />
     
      

      <PPCFaq />
   
    </>
  );
};

export default Ppc;
