import React from "react";
import WhySIB from "../Home/WhySIB";

const SMOWhySIB = () => {
  const keyAdvantages = [
    {
      title: "Social Media Profile Optimization",
      description:
        "We optimize your social media profiles (Facebook, Instagram, LinkedIn, Twitter, Pinterest, and more) with compelling bios, high-quality visuals, relevant keywords, and updated business information. This ensures a strong, consistent brand identity and a clear, appealing brand message across platforms.",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Our team designs a robust content strategy that ensures your posts inspire, educate, and entertain. We create engaging, shareable, and brand-specific content — including images, videos, infographics, and blog promotions — to drive meaningful engagement and make your brand stand out.",
    },
    {
      title: "Audience Engagement",
      description:
        "We actively engage with your audience in real-time by responding to comments, managing conversations, and addressing reviews to build trust, foster loyalty, and strengthen customer relationships.",
    },
    {
      title: "Social Media Analytics & Reporting",
      description:
        "We provide detailed analytics and monthly reports, offering insights into key performance metrics such as engagement rates, follower growth, and post reach. Our reports help you understand your audience better and track the success of campaigns for ongoing improvement.",
    },
    {
      title: "Social Media Advertising",
      description:
        "Expand your brand’s reach with highly targeted advertising campaigns on platforms like Facebook, Instagram, LinkedIn, and more — designed to drive awareness, engagement, and conversions.",
    },
    {
      title: "Influencer Marketing & Brand Collaborations",
      description:
        "We connect your brand with relevant influencers and industry leaders to amplify reach, build credibility, and generate authentic content that resonates with your target audience.",
    },
    {
      title: "Hashtag & Trend Optimization",
      description:
        "We optimize your posts for discoverability by researching and implementing trending and relevant hashtags, ensuring your content reaches the right audience and gains maximum visibility.",
    },
    {
      title: "Reputation Management",
      description:
        "We proactively monitor your brand’s online reputation, swiftly addressing any negative feedback and managing public perception to maintain a positive brand image.",
    },
    {
      title: "Social Media Audits & Competitor Analysis",
      description:
        "We conduct comprehensive audits of your social media profiles to identify strengths, gaps, and growth opportunities. Discover what’s working, what’s not, and how you can outperform competitors.",
    },
    {
      title: "Contest & Campaign Management",
      description:
        "We design and manage creative contests and campaigns that boost engagement, encourage user participation, and enhance your brand’s viral reach.",
    },
  ];
  

  const rightBoxContent = {
    heading: "What Sets Us Apart from Other SMO  in India?",
    description:
      "With a sea of Social Media Optimization in India, what makes SIB Infotech the preferred choice for brands looking to scale? We don’t just execute campaigns—we create impactful, data-driven strategies that drive measurable growth and long-term success.",
  };

  const leftBoxContent = {
    headingStart: "Our  ",
    headingHighlight: "SMO Services",
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
