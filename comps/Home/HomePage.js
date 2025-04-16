import BannerSlider from "./BannerSlider";
import Blog from "./Blog";
import Faq from "./Faq";
import Madeby from "./Madeby";
import Testimonials from "./Testimonials";
// import WhatWeDo from "./WhatWeDo";
import WeStrong from "./WeStrong";
// import WhatWeDo2 from "./WhatWeDo2";
import About2 from "./About2";
import OurClients from "./OurClients";
import WhatWeDo3 from "./WhatWeDo3";
// import PartnerBadges from "./PartnerBadges";
import BrandBuild from "./BrandBuild";
import CaseStudy2 from "./CaseStudy2";
import Conversions from "./Conversions";
import Cta from "./Cta";
import PartnerBadges2 from "./PartnerBadges2";
import Pricing from "./Pricing";
import SIBPower from "./SIBPower";
import WhySIB from "./WhySIB";
// import DeliverGrowth from "./DeliverGrowth";
import Featured from "./Featured";
import Industries2 from "./Industries2";
import OurPeople from "./OurPeople";
import Tools from "./Tools";
import Abbout3 from "./Abbout3";
import Map from "./Map";

const HomePage = () => {
  const keyAdvantages = [
    {
      title: "Proven Track Record ",
      description:
        "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple industries, helping them achieve higher visibility, engagement, and conversions.",
    },
    {
      title: "Google Premier Partner",
      description:
        "As a Google Premier Partner, we have access to exclusive tools, trends, and strategies that keep our clients ahead of the competition.",
    },
    {
      title: "Tailored Strategies",
      description:
        "Unlike many agencies that use generic templates, we craft custom digital marketing solutions based on your industry, target audience, and unique business goals.",
    },
    {
      title: " Digital Marketing Services",
      description:
        "From SEO, PPC, and social media to branding, content marketing, and performance analytics—we offer comprehensive solutions under one roof.",
    },
    {
      title: " ROI-Focused Approach",
      description:
        "Every decision we make is backed by data, ensuring maximum return on investment (ROI) through continuous monitoring, testing, and optimization.",
    },
    {
      title: "Creative Performance",
      description:
        "We seamlessly blend high-impact creative storytelling with conversion-driven marketing strategies, ensuring your brand not only attracts attention but also drives real business results.",
    },
    {
      title: "Transparent Reporting ",
      description:
        "We believe in 100% transparency, providing detailed insights, analytics, and reports so you know exactly where your budget is going and what’s working.",
    },
    {
      title: "Dedicated Support ",
      description:
        "Our team acts as an extension of your business, offering dedicated account managers and scalable solutions that grow with your evolving needs.",
    },
  ];
  const rightBoxContent = {
    heading: "What Sets Us Apart from Other Digital Agencies in India?",
    description:
      "With a sea of digital agencies in India, what makes SIB Infotech the preferred choice for brands looking to scale? We don’t just execute campaigns—we create impactful, data-driven strategies that drive measurable growth and long-term success",
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
  const brandContent = [
    {
      title: "Strategy. Creativity. Performance.",
      subtitle: "How to Create an Effective Winning SEO Strategy in 2025?",
      description: `
        Success in the digital world isn’t just about being seen—it’s
        about making an impact. We blend <strong>strategy, creativity,</strong> and
        <strong>data-driven insights</strong> to craft campaigns that
        captivate audiences and drive <strong>real business growth.</strong>
      `,
      faqData: [
        {
          question: "Strategic Vision",
          answer:
            "Every great campaign starts with a well-defined strategy. We analyze market trends, audience behavior, and competitive landscapes to create a roadmap for success.",
        },
        {
          question: "Creative Excellence",
          answer:
            "Stand out with compelling storytelling, visually stunning designs, and innovative campaigns that leave a lasting impression.",
        },
        {
          question: "Insight-Driven Research",
          answer:
            "We dive deep into data, uncovering key insights that shape smarter marketing decisions and maximize engagement.",
        },
        {
          question: "Brand Identity & Design",
          answer:
            "From logos to websites, we craft cohesive brand experiences that build trust and recognition.",
        },
        {
          question: "High-Impact Digital Marketing",
          answer:
            "SEO, paid advertising, and performance-driven campaigns that elevate visibility and turn clicks into conversions.",
        },
        {
          question: "Social & Content Strategy",
          answer:
            "Engaging, value-driven content that sparks conversations, fosters community, and strengthens brand loyalty.",
        },
        {
          question: "Performance & Analytics",
          answer:
            "Real-time tracking, A/B testing, and data analysis to optimize every touchpoint and maximize ROI.",
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
  const testimonial_data = [
    {
      title: `What Our <span class="text_red"> Client's Say</span> About Us `,
      description: `We are five star rated Digital Agency`,
    },
  ];

  const about3Data = {
    sectionId: "about",
    mainHeading: "Welcome to SIB Infotech",
    subHeading:
      'Guaranteed Visibility Through <span class="text_red"> Our Digital Marketing Services</span>',
    contentParagraphs: [
      `<strong> SIB Infotech</strong> is a <strong>leading digital marketing agency in India</strong>, with offices in Mumbai and New Delhi. As a Google Premier Partner, we specialize in <strong>SEO services, PPC management, social media marketing, website design, graphic design, and branding. Our expertise helps businesses in India, the US, the UK, Canada, Australia </strong>, and beyond boost online visibility, engagement, and conversions while delivering measurable ROI.`,
      `<b> With 20+ years of experience</b>, we leverage AI-driven marketing strategies, data analytics, and result-oriented campaigns to maximize growth. Whether you're a startup or an enterprise, our customized digital marketing solutions ensure higher rankings, increased traffic, and improved lead generation to help you stay ahead of the competition.`,
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

  return (
    <>
      <BannerSlider />
      <Abbout3 {...about3Data} />
      {/* <About2 /> */}
      {/* <BannerSlider /> */}
      {/* <TrustedSection /> */}
      <WeStrong />
      <WhatWeDo3 />
      <Cta />
      <BrandBuild
        subtitle={"How to Create a Successful Digital Marketing Strategy? "}
        title={brandContent[0].title}
        description={brandContent[0].description}
        faqData={brandContent[0].faqData}
      />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <OurPeople />
      <SIBPower
        batchtitle="Authentic Growth"
        title="Importance of"
        subtitle=" Digital Marketing "
        description="When Trust, Transparency And Accountability Truly Matter To You, We Are Your Partner."
        title_right={"Why do your business need digital marketing? "}
        description_right="In today’s fast-evolving digital landscape, businesses that don’t embrace digital marketing are at risk of falling behind. At SIB Infotech, we understand the power of a strong online presence, and we help brands harness that power to drive growth and success. Here’s why digital marketing is essential for your business: "
        data={power_data}
      />
      <Madeby />
      <PartnerBadges2 />
      <CaseStudy2
        description={`Client Success Stories That Prove We’re a Top Digital Marketing Company in India, our results speak for themselves `}
      />
      <OurClients />
      <Testimonials
        title={testimonial_data[0].title}
        description={testimonial_data[0].description}
      />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        <Tools />
      </div>
      <Industries2 />
      <Pricing />
      <Map />
      {/* <Counter /> */}
      {/* <Presence/> */}
      {/* <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices /> */}

      <Faq />
      <Blog />
    </>
  );
};

export default HomePage;
