import React from "react";
import WhySIB from "../Home/WhySIB";

const SMOWhySIB = () => {
  const keyAdvantages = [
    {
      title: "Increased Brand Visibility ",
      description:
        "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple industries, helping them achieve higher visibility, engagement, and conversions.",
    },
    {
      title: "Stronger Audience Engagement ",
      description:
        "As a Google Premier Partner, we have access to exclusive tools, trends, and strategies that keep our clients ahead of the competition.",
    },
    {
      title: "Data-Driven Strategy ",
      description:
        "Unlike many agencies that use generic templates, we craft custom digital marketing solutions based on your industry, target audience, and unique business goals.",
    },
    {
      title: "Higher Website Traffic & Conversions ",
      description:
        "From SEO, PPC, and social media to branding, content marketing, and performance analytics—we offer comprehensive solutions under one roof.",
    },
    {
      title: "Build a Community & Loyal Following ",
      description:
        "Every decision we make is backed by data, ensuring maximum return on investment (ROI) through continuous monitoring, testing, and optimization.",
    },
    {
      title: "Cost-Effective Compared to Traditional Advertising ",
      description:
        "We seamlessly blend high-impact creative storytelling with conversion-driven marketing strategies, ensuring your brand not only attracts attention but also drives real business results.",
    },
    {
      title: "Transparent Reporting",
      description:
        "We believe in 100% transparency, providing detailed insights, analytics, and reports so you know exactly where your budget is going and what’s working.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team acts as an extension of your business, offering dedicated account managers and scalable solutions that grow with your evolving needs.",
    },
  ];

  const rightBoxContent = {
    heading: "What Sets Us Apart from Other SMO  in India?",
    description:
      "With a sea of Social Media Optimization in India, what makes SIB Infotech the preferred choice for brands looking to scale? We don’t just execute campaigns—we create impactful, data-driven strategies that drive measurable growth and long-term success.",
  };

  const leftBoxContent = {
    headingStart: "Why",
    headingHighlight: "SIB Infotech",
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

export default SMOWhySIB;
