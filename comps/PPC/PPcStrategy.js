import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import BrandBuild from "../Home/BrandBuild";

const PPCStrategy = () => {
  const brandContent = [
    {
      title: "Our Strategic Approach to PPC Advertising ",
      subtitle: " Key Factors for Running a Highly Successful PPC Campaign ",
      description: `    <strong> Pay-Per-Click (PPC)</strong> is an online advertising model where an advertiser 

runs an ad and he will get charged a fee each time a user clicks on their ad. Essentially, it’s a way of buying targeted website traffic rather than earning it organically. PPC allows businesses to display their ads on search engines, social media platforms, and other websites. 
 The most popular form of PPC is <strong>search engine advertising</strong>, where advertisers bid for ad placement in a search engine’s sponsored links when users search for keywords related to their business. 
 
      `,
      faqData: [
        {
          question: "Keyword Relevance",
          answer:
            "Choosing the right keywords is critical. Your keywords must be highly relevant to your product, service, and target audience. Using specific, well-researched keywords ensures that your ads appear in front of the right people at the right time. In order to run a successful PPC campaign, it's very important to use effective and relevant keywords.",
        },
        {
          question: "High-Quality Ad Copy and Creatives",
          answer:
            "Strong, compelling ad copy with a clear call-to-action (CTA) and eye-catching creatives can significantly improve click-through rates (CTR). Your ads should clearly communicate the value proposition and encourage users to take action.",
        },
        {
          question: "Maintaining a Good Quality Score",
          answer:
            "Search engines like Google assign a Quality Score based on the relevance of your ads, keywords, and landing pages. A higher Quality Score leads to lower costs per click (CPC) and better ad placements.",
        },
        {
          question: "Optimized Landing Pages",
          answer:
            "Your landing page experience should be seamless, fast, and aligned with your ad messaging. High-quality, user-friendly landing pages with clear CTAs improve conversion rates and enhance your Quality Score.",
        },
        {
          question: "Targeted Audience Segmentation",
          answer:
            "Defining and targeting the right audience is crucial. Use demographics, interests, geographic locations, and device targeting to ensure your ads reach users most likely to convert.",
        },

        {
          question: "A/B Testing and Continuous Optimization",
          answer:
            "Regularly test different versions of your ads, headlines, images, and landing pages. A/B testing helps identify what works best and allows you to optimize campaigns for better results.",
        },
        {
          question: "Use of Ad Extensions",
          answer:
            "Adding ad extensions like site links, callouts, structured snippets, and call extensions can improve the visibility of your ads and provide users with more reasons to click.",
        },
        {
          question: "Conversion Tracking and Analytics",
          answer:
            "Setting up proper conversion tracking allows you to measure success accurately. Analyzing campaign data regularly helps you identify trends, optimize underperforming ads, and maximize ROI.",
        },

        {
          question: "Budget Management",
          answer:
            "Allocating budgets smartly across campaigns, monitoring spending, and adjusting bids according to performance is critical to ensure you’re getting the most value for your investment.",
        },
      ],
    },
  ];

  return (
    <BrandBuild
      image={`/assets/images/home-digital-marketing.jpg`}
      title2={brandContent[0].subtitle}
      title={brandContent[0].title}
      description={brandContent[0].description}
      faqData={brandContent[0].faqData}
    />
  );
};

export default PPCStrategy;
