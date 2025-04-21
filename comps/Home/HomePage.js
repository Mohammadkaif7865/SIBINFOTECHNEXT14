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
import Expertise from "./Expertise";
import DigitalMarketingServices from "./DigitalMarketingServices";
import AboutUs from "./AboutUs";
import DigitalMarketingWebAgency from "./DigitalMarketingWebAgency";
import DigitalMarketingAgency from "./DigitalMarketingAgency";
import WebsiteDesignServices from "./WebsiteDesignServices";


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
  const faqsData = [
      {
        id: "faq15",
        question: "What digital marketing services do you offer?",
        answer: `<div className="accordion-body"><p>We provide a complete range of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing (SMM), Website Design & Development, Email Marketing, and 100% White Label Services for agencies and resellers.</p></div>`,
      },
      {
        id: "faq16",
        question:
          "What makes SIB Infotech different from other digital agencies?",
        answer: `<div className="accordion-body"><p>With 19+ years of experience, a team of certified professionals, and a proven track record with over 7,000 clients worldwide, we deliver result-driven and cost-effective solutions tailored to your business goals.</p></div>`,
      },
      {
        id: "faq17",
        question: "Why should I hire a digital marketing company?",
        answer: `<div className="accordion-body"><p>Hiring a digital marketing agency like SIB Infotech gives you access to industry experts, advanced tools, proven strategies, and scalable support—saving you time, reducing costs, and delivering faster results than building an in-house team.</p></div>`,
      },
      {
        id: "faq18",
        question: "What tools do you use for digital marketing?",
        answer: `<div className="accordion-body"><p>We use industry-leading tools including Google Analytics, Google Ads, Semrush, Ahrefs, Screaming Frog, Meta Business Suite, Canva, Mailchimp, HubSpot, and various AI-powered platforms for data analysis and campaign optimization.</p></div>`,
      },
      {
        id: "faq19",
        question: "How much do you charge for digital marketing services?",
        answer: `<div className="accordion-body"><p>Our pricing is flexible and customized based on your goals, project scope, and business needs. We offer up to 50% cost savings compared to international agencies—without compromising on quality or performance.</p></div>`,
      },
      {
        id: "faq20",
        question: "How can I find the best digital marketing agency in India?",
        answer: `<div className="accordion-body"><p>Look for a digital marketing agency in India with a strong track record, verified client testimonials, industry certifications, and transparency in reporting. SIB Infotech stands out with 19+ years of experience and thousands of successful campaigns.</p></div>`,
      },
      {
        id: "faq21",
        question:
          "Do you offer white label marketing services for other agencies?",
        answer: `<div className="accordion-body"><p>Yes! We’re a trusted white-label partner for agencies across the globe. Our white-label services include SEO, PPC, social media marketing, and more—completely branded under your agency’s name with NDA-backed confidentiality.</p></div>`,
      },
      {
        id: "faq22",
        question: "How long does it take to see results?",
        answer: `<div className="accordion-body"><p>SEO usually takes 3–6 months to show strong organic growth, while paid advertising and social media campaigns can generate quicker results within days or weeks, depending on the strategy and budget.</p></div>`,
      },
      {
        id: "faq23",
        question: "Is there a minimum contract duration?",
        answer: `<div className="accordion-body"><p>No. We offer flexible, no-lock-in monthly plans so you can scale up or pause services as your business evolves—no long-term commitments required.</p></div>`,
      },
      {
        id: "faq24",
        question: "How do I get started with SIB Infotech?",
        answer: `<div className="accordion-body"><p>Getting started is simple—contact us for a free consultation. We'll assess your needs and craft a custom digital strategy that aligns with your goals.</p></div>`,
      },
      {
        id: "faq25",
        question: "Do you work with clients outside of India?",
        answer: `<div className="accordion-body"><p>Yes, we work with clients globally including the USA, UK, Australia, Canada, and other countries. Our flexible processes and scalable services are designed for both local and international brands.</p></div>`,
      },
      {
        id: "faq26",
        question: "How do you ensure data privacy and security?",
        answer: `<div className="accordion-body"><p>We follow strict data protection protocols and sign NDAs with all our white-label and direct clients. Your intellectual property and data are safe with us—confidentiality is our top priority.</p></div>`,
      },
      {
        id: "faq27",
        question: "Can you guarantee results from digital marketing?",
        answer: `<div className="accordion-body"><p>While no agency can guarantee specific rankings or results, we use proven, data-driven strategies backed by 20+ years of experience to consistently deliver high-performance outcomes for our clients.</p></div>`,
      },
      {
        id: "faq28",
        question: "How do you track and measure campaign success?",
        answer: `<div className="accordion-body"><p>We provide detailed performance reports using tools like Google Analytics, Google Search Console, Meta Insights, and custom dashboards. These reports cover traffic, conversions, rankings, ROI, and more—so you always know what’s working.</p></div>`,
      },
      // {
      //   id: "faq30",
      //   question: "How can Stramasa, a leading digital agency, help me reach clients in New York City?",
      //   answer: `<div className="accordion-body"><p>Spotify offers audio, video, and display ads, all of which Stramasa can help create. Whether you want to run an audio-only ad or a mixed-format campaign, we will ensure your brand message resonates with your target audience.</p></div>`
      // }
    ];

    const  faqDiscription =`We as a full service leading <strong>digital marketing firm</strong>,
          offers customized story-based
          <br className="d-none d-lg-block" />
          <strong>digital marketing services</strong> to build, promote & scale
          your brand so <br className="d-none d-lg-block" />
          it can clearly & easily attract your ideal clien`

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
       image={`/assets/images/phone-seo-local-squares.png`}
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

      <Faq title={'Frequently Asked Digital Marketing Questions'} description ={faqDiscription} faqsData={faqsData} />
      <Blog />
    </>
  );
};

export default HomePage;
