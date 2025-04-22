import React from "react";

import Introduction from "./Introduction";
import WorkWebdesign from "../WorkWebdesign";
import WhyBest from "./WhyBest";
import GrowBusiness from "./GrowBusiness";
import Contact from "./Contact";
import DesigningProcess from "./DesigningProcess";
import Engagement from "./Engagement";
import Industries from "./Industries";
import Faqs from "./Faqs";
import Banner from "./Banner";
import DigitalMarketingWebAgency from "../Home/DigitalMarketingWebAgency";
import WebsiteDesignServices from "../Home/WebsiteDesignServices";
import Abbout3 from "../Home/Abbout3";
import WhySIB from "../Home/WhySIB";
import Partnership from "../WhiteLabel/Partnership";
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

const WebDesigning = () => {
  const about3Data = {
    sectionId: "about",
    mainHeading: "Grow Your Business Online With Our",
    subHeading:
      '<span class="text_red">Award Winning Website Designing Company in India </span>',
    contentParagraphs: [
      `<p>Website designing is the first and foremost aspect to focus on as it serves as the virtual face of your brand and is your most valuable marketing asset.</p>

<p class="mt-2">SIB Infotech is an award-winning web design agency based in Mumbai and Delhi, India. Since 2005, we have been crafting beautiful, functional, and bespoke web design experiences tailored to each client's unique needs.</p>

<p class="mt-2">Our expert web design team in India leverages cutting-edge technology to design visually stunning, user-friendly, and high-performance websites. Every design is crafted to boost customer engagement while ensuring scalability, security, and a seamless user experience.</p>

<p class="mt-2">Over the years we have delivered growth to 1000+ websites and today have positioned ourselves as one of India's top Web Design Company and Digital Marketing services providers. Whether you're based in Mumbai, New Delhi, New York, or anywhere else in the world, and if you're looking for professional website design services, you've come to the right place.</p>
`,
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

  const keyAdvantages = [
    {
      title: "Custom Website Designs",
      description:
        "Custom-made websites that reflect your brand identity and business goals. Every website we build is fully customized to match your unique vision.",
    },
    {
      title: "Exceptional UI/UX",
      description:
        "Our user-centric approach focuses on intuitive navigation and engaging interfaces to enhance user experience and boost conversions.",
    },
    {
      title: "Responsive Across All Devices",
      description:
        "We create fully responsive websites that deliver seamless performance on desktops, tablets, and mobile devices.",
    },
    {
      title: "Fast, Secure & Scalable",
      description:
        "We build high-performance websites optimized for lightning-fast loading speeds, robust security, and scalable architecture — ensuring a seamless user experience and improved search engine rankings...",
    },
    {
      title: "Built on the Latest Technologies",
      description:
        "Our developers use modern coding standards and the latest technologies to build high-performing, future-ready websites.",
    },
    {
      title: "SEO-Friendly Architecture",
      description:
        "Our websites follow the best SEO practices to ensure better visibility and higher rankings on search engines from day one.",
    },
    {
      title: "Clean & Modern Code",
      description:
        "We ensure your website runs smoothly with efficient, lightweight, and maintainable code.",
    },
    {
      title: "Affordable & Transparent Pricing",
      description:
        "Get premium-quality web design services at competitive prices — no hidden costs, just great value.",
    },
    {
      title: "Lead-Focused Development",
      description:
        "We design with purpose. Every element — from layout to CTAs — is optimized to attract, engage, and convert visitors into leads.",
    },
    {
      title: "Proven Track Record",
      description:
        "With 1000+ successful projects delivered, we’ve helped businesses of all sizes grow through high-impact digital design.",
    },
  ];

  const rightBoxContent = {
    heading: "What Makes Us the Best Web Design Agency in India? ",
    description:
      "We have been crafting engaging, responsive, and professional websites that help grow your business through our top web design services in India. Our skilled and experienced best web designers in Mumbai and Delhi are committed to delivering high-performance, lead-generating website designs that enhance your brand presence and drive conversions. ",
  };
  const leftBoxContent = {
    headingStart: "Why",
    headingHighlight: "SIB Infotech",
    subHeading: " for Website Design? ",
    cardTitle: "First Click to Final Conversion",
    cardDescription:
      "We don’t just design websites — we create powerful digital experiences that help your brand stand out, engage users, and drive results. ",
    buttonText: "Get a Free Analysis",
  };

  const agencyWorkflow = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business objectives, target audience, and specific requirements. This helps us craft a website strategy aligned with your goals.",
    },
    {
      title: "Design & Prototyping ",
      description:
        "Our creative team develops wireframes and engaging UI/UX prototypes that reflect your brand identity while focusing on user experience and conversion optimization.",
    },
    {
      title: "Development & Optimization",
      description:
        "Using the latest web technologies, we turn the design into a fully functional, responsive website — optimized for speed, security, SEO, and scalability.",
    },
    {
      title: "Launch & Ongoing Support",
      description:
        "After thorough testing, we launch your website seamlessly and provide continuous maintenance, updates, and support to ensure long-term success.",
    },
  ];
  return (
    <>
      <Banner />
      <Abbout3 {...about3Data} />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Website Design Process "}
        subtitle={""}
        rightDiscription={
          "At SIB Infotech, we follow a streamlined and proven 4-step process to deliver high-performing, lead-generating websites tailored to your business needs. "
        }
        tagline={
          "India’s Best Website Design Workflow - Simple, Strategic, Effective "
        }
      />
      {/* <Introduction />
      <WhyBest />
      <GrowBusiness /> */}
      <section className="bg4 overflowHidden position-relative">
        <WorkWebdesign />
      </section>
      <Engagement />
      <DigitalMarketingWebAgency />
      <Contact />
      <DesigningProcess />
      {/* <DigitalMarketingAgency /> */}
      <WebsiteDesignServices />
 
      <Industries />
      <Faqs />
    </>
  );
};

export default WebDesigning;
