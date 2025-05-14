import React from "react";
import WhySIB from "../Home/WhySIB";

const WhyPPc = () => {
    const keyAdvantages = [
        {
          title: "Instant Traffic",
          description:
            "Unlike SEO, which takes time to show results, PPC campaigns can start bringing highly targeted visitors to your website almost immediately after launch.",
        },
        {
          title: "Highly Targeted Audience Reach",
          description:
            "With PPC, you can tailor your ads based on demographics, location, interests, device type, and even specific search intent — ensuring your message reaches those most likely to convert.",
        },
        {
          title: "Full Budget Control",
          description:
            "You have complete control over how much you spend daily or monthly. Plus, you only pay when someone clicks your ad, making it a cost-efficient advertising model.",
        },
        {
          title: "Higher Conversion Potential",
          description:
            "PPC traffic often converts better because it targets users actively searching for solutions — increasing your chances of gaining qualified leads.It will advertise directly to those people who are actively searching a business like you. ",
        },
        {
          title: "Measurable and Trackable Results",
          description:
            "Every aspect of your PPC campaign can be tracked — from impressions and clicks to conversions and ROI — enabling you to measure success and optimize accordingly.",
        },
        {
          title: "Real-Time Advertising",
          description:
            "PPC allows you to run time-sensitive promotions and make real-time adjustments to your campaigns based on performance data and changing goals.",
        },
        {
          title: "Stronger Brand Exposure",
          description:
            "Even if users don’t click your ad immediately, frequent ad appearances build brand recognition and trust with your audience. It provide your brand a good exposer in front of right people.",
        },
        {
          title: "Revenue and Sales Growth",
          description:
            "With the right PPC strategy, you can significantly increase your sales and overall revenue by reaching ready-to-buy customers.",
        },
        {
          title: "Ideal for New Businesses",
          description:
            "If you're a new brand aiming for quick visibility and to compete with established businesses, PPC offers immediate exposure and growth opportunities.",
        },
        {
          title: "Supports SEO Efforts",
          description:
            "PPC complements your SEO by driving traffic, building brand authority, and offering valuable keyword insights to refine your organic strategy.",
        },
        {
          title: "Complete Campaign Control",
          description:
            "From ad placement and bid strategy to targeting and scheduling, PPC provides complete control to fine-tune every campaign for optimal results.",
        },
        {
          title: "Direct Access to High-Intent Customers",
          description:
            "PPC connects you with users actively searching for your products or services — making every click a potential conversion opportunity.",
        },
        {
          title: "Pay Only for Clicks",
          description:
            "You will only charged when someone will click on your advertisements. ",
        },
      ];
      
  

  const rightBoxContent = {
    heading: "Why Choose PPC Advertising? ",
    description:
      "PPC (Pay-Per-Click) advertising is one of the fastest and most effective ways to drive targeted traffic, generate leads, and grow your business online. It allows you to reach the right audience at the right moment — when they are actively searching for your products or services. Here's why businesses choose PPC: ",
  };

  const leftBoxContent = {
    headingStart: "Our  ",
    headingHighlight: "PPC Services",
    subHeading: "Measurable Growth, Proven Results",
    cardTitle: "First Click to Final Conversion",
    cardDescription:
      "Powered by Social, Paid, Creative & Influencers — We Build Bold Brands, Drive Results, and Spark Meaningful Connections.",
    buttonText: "Get a Free Analysis",
  };

  return (

    
    <WhySIB  
            keyAdvantages={keyAdvantages}
            leftBoxContent={leftBoxContent}
            rightBoxContent={rightBoxContent}
          />
  

  );
};

export default WhyPPc;
