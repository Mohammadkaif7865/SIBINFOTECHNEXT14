import React from "react";
import Abbout3 from "../Home/Abbout3";
import Solution from "../WhiteLabel/Solution";
import BrandBuild from "../Home/BrandBuild";
import SIBPower from "../Home/SIBPower";
import Database from "./Database";
import WhySIB from "../Home/WhySIB";

const WebDevelopment = () => {
  const about3Data = {
    sectionId: "about",
    mainHeading: "Welcome to SIB Infotech",
    subHeading:
      'Most Trusted <span class="text_red">Web Development Company </span> In India  ',
    contentParagraphs: [
      `SIB Infotech - Best Website Development Company in India providing web development services since 2005 specializes in all kinds of website development that are compatible with all devices along with the SEO marketing services. With its headquarters in Mumbai and branch offices in New Delhi & New York, our website development services agency with its team of professional developers ensures to meet the expectations of clients with their white-collar skills. Our top web development services in Mumbai, India aim to meet all your digital requirements and provide better outreach to your website through digital marketing services. `,
      ` Our top web development services in Mumbai, India aim to meet all your digital requirements and provide better outreach to your website through digital marketing services.`,
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

  const Services = [
    {
      title: "Angular JS",
      description:
        "Making dynamic web encounters with Angular JS improvement that streamlines building more extravagant and ground-breaking web applications with the full line of adaptability.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: "React JS",
      description:
        "Influence the dynamism and adaptability of React.JS appropriate for enormous scope applications that easily make intuitive UIs.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: "Ember JS",
      description:
        "A viewpoint JavaScript system appropriate for building elite, interoperable web applications with no exhibition blocks.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: "jQuery",
      description:
        "Construct instinctive, light-weight, SEO benevolent, cross-program viable and CSS3 consistent web and applications with the jQuery JavaScript library.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: "Bootstrap",
      description:
        "Grasp the truly versatile, responsive, portable first front-end system Bootstrap that drives consistency and speed, disentangles reconciliation, and facilitates customization.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: "Material UI",
      description:
        "Rehash the vibe of your web applications with the straightforwardness and accuracy of Google's Material Design Color Palette, Typography, Material Design Components, plan ideas and standards.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
  ];

  const brandContent = [
    {
      title: "Back-End: PHP, Node.js, Python, Laravel ",
      subtitle: "How to Create an Effective Winning SEO Strategy in 2025?",
      description: `
        Get Built A Reliable, Highly Secured And Stable Backbone Of Your Software Product (Mobile App, Front-End App, Web API) With Our Technology Expertise In:
      `,
      faqData: [
        {
          question: "Node JS Development Services",
          answer:
            "Recruit our expert Node.js designers that take the upsides of this lightweight and productive open source worker system for building exceptionally adaptable, quick and continuous applications.",
        },
        {
          question: "Custom PHP Web Development Services",
          answer:
            "Depend on our prepared PHP development advancement team for creating custom websites, CMS and E-trade improvement, cross platform web applications, web and portal development and social networking solutions in quick turnaround time with the amazing and agile PHP platform.",
        },
        {
          question: ".Net Development Services",
          answer:
            "Exploit our energy in creating collective enterprise web applications, powerful online business stores, engaging mobile applications with .NET technology. Incorporate different CRM, ERP, proprietary applications with WCF framework with database integration.",
        },
        {
          question: "Magento Development Services",
          answer:
            "Benefit our most pined for Magento web improvement administrations to assemble your webpage on the most impressive eCommerce stage that is enabling a large number of retailers and brands. Our redid Magento arrangements and outsider augmentations are excessively adaptable and versatile.",
        },
        {
          question: "Laravel Web Development Services",
          answer:
            "Imbue the force of MVC PHP structure to create web applications, endeavor arrangements and relaxing application improvement and influence excellent advantages like fast turnover, powerful broadening limits utilizing different modules, and profoundly versatile code of Laravel.",
        },
        {
          question: "Django Development Services",
          answer:
            "Get fabricated high performing and tastefully wonderful applications utilizing Django, a practical Python structure hailed for building basic sites to complex web applications. We create and offer a full scope of Django improvement administrations.",
        },
        {
          question: "Opencart Development Services",
          answer:
            "Bring the best E-trade site and M-business application to existence with OpenCart advancement administrations. OpenCart CMS is a ground-breaking content administration framework intended flawlessly with SEO benevolent highlights, simple authoritative dashboard, exquisite topics, and considerably more.",
        },
        {
          question: "CodeIgniter Web Development Services",
          answer:
            "Create hearty and dynamic web applications with our profoundly gifted group of Code Igniter having hands on experience for huge scope Code Igniter projects across different industry verticals.",
        },
        {
          question: "Yii Development Services",
          answer:
            "Our instrumental mastery in this superior PHP structure best for growing enormous scope Web applications can be your experience system for profoundly versatile and hearty venture arrangements.",
        },
      ],
    },
  ];
  const power_data = [
    {
      title: "WordPress Development",
      description:
        "Custom theme and plugin development, SEO-optimized design, WooCommerce integration, user-friendly admin panel, and performance/security enhancements.",
    },
    {
      title: "Shopify Development",
      description:
        "Tailored Shopify store setup, theme customization, app integration, secure payment/shipping setup, and ongoing performance optimization.",
    },
    {
      title: "Magento Development",
      description:
        "Enterprise-grade eCommerce solutions, custom themes and modules, multi-store/language support, third-party integrations, and robust security.",
    },
    {
      title: "Drupal Development",
      description:
        "Scalable CMS solutions with custom module/theme development, strong user management, enterprise-ready architecture, and advanced performance tuning.",
    },
  ];

  const rightBoxContent = {
    heading: "Invigorate Your Business DNA With Our Website Development & UX Designs",
    description:
      "Our plan thinking and client focused experience drove plans help us in efficiently removing client's necessities, practices, emotions, and contemplations while connecting with items in a certifiable setting and causes us make believable advanced encounters to construct versatile and web applications, web-based interfaces, web based business stores and significantly more.",
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
  const keyAdvantages = [
    {
      title: "KPI Led Design",
      description:
        "Delivering measurable business results with our chosen indicators, strategy, and design.",
    },
    {
      title: "Version Zero",
      description:
        "Building high-fidelity prototypes to communicate or validate concepts by testing for feedback.",
    },
    {
      title: "Agile Development",
      description:
        "Intersecting Agile/scrum methodology with design thinking for remarkable UX development.",
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehending the breadth and depth of your business with meaningful +engaging transformation.",
    },
    {
      title: "Strategic UX",
      description:
        "Uniting strategy + creativity + tools to weave strategic user experiences and interfaces.",
    },
    {
      title: "KPI Led Design",
      description:
        "Delivering measurable business results with our chosen indicators, strategy, and design.",
    },
  ];

  return (
    <div>
      <Abbout3 {...about3Data} />
      <Solution
        heading={"Frontent Development"}
        subHeading={"HTML5, CSS3, JavaScript, React, Angular"}
        discription={
          "Creating state-of-the-art web architecture through compelling user experiences, performance tuning, intuitive UI development and usability assessment, testing and analysis services."
        }
        data={Services}
      />
      <BrandBuild
        subtitle={"Backend Development "}
        title={brandContent[0].title}
        description={brandContent[0].description}
        faqData={brandContent[0].faqData}
      />
      <SIBPower
        batchtitle="Web Development"
        title="Smart Solutions "
        subtitle="for Your Needs"
        description="When Trust, Transparency And Accountability Truly Matter To You, We Are Your Partner."
        title_right={" Your One-Stop Solution for CMS Development"}
        description_right="Boost your digital presence with our expert CMS solutions. We specialize in WordPress, Shopify, Magento, and Drupal to build fast, secure, and scalable websites tailored to your business needs."
        data={power_data}
      />
      <Database />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
    </div>
  );
};

export default WebDevelopment;
