import React from "react";
import Abbout3 from "../Home/Abbout3";
import Solution from "../WhiteLabel/Solution";
import BrandBuild from "../Home/BrandBuild";
import SIBPower from "../Home/SIBPower";
import Database from "./Database";
import WhySIB from "../Home/WhySIB";
import CaseStudy2 from "../Home/CaseStudy2";
import Faq from "../Home/Faq";
import QA from "./QA";
import Cta from "../Home/Cta";
import WhyChoose from "./WhyChoose";
import Partnership from "../WhiteLabel/Partnership";
import DesignThinking from "./DesignThinking";

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
      title: "jQuery and <br/> JavaScript",
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
    {
      title: "Html and Css",
      description:
        "Build the foundation of modern web pages using HTML for structure and CSS for styling. Learn how to create responsive layouts, apply animations, and follow best practices in web design for visually appealing and accessible websites.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
  ];

  const brandContent = [
    {
      title: "Back-End Development Services ",
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
    heading:
      "Invigorate Your Business DNA With Our Website Development & UX Designs",
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
  const keyAdvantages2 = [
    {
      title: "KPI Led Design",
      description:
        "Delivering measurable business results with our chosen indicators, strategy, and design.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Version Zero",
      description:
        "Building high-fidelity prototypes to communicate or validate concepts by testing for feedback.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Agile Development",
      description:
        "Intersecting Agile/scrum methodology with design thinking for remarkable UX development.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehending the breadth and depth of your business with meaningful +engaging transformation.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Strategic UX",
      description:
        "Uniting strategy + creativity + tools to weave strategic user experiences and interfaces.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "KPI Led Design",
      description:
        "Delivering measurable business results with our chosen indicators, strategy, and design.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
  ];

  const faqsData = [
    {
      question: "What are Web Development services?",
      answer: `<div className="">
                  <p>Known for ensuring the online presence of company Web Development services involve developing the website for the Internet (World Wide Web) or an intranet (a private network). Among professionals, Web Development usually refers to the main design aspects of building websites i.e. markup and coding.</p>
                </div>`,
    },
    {
      question: "What does a Web Development company do?",
      answer: `<div className="">
                  <p>Web Development is all about maintaining the online presence of a company so that its services can reach out to its potential customers. Web Development services include various engaging activities such as ideating and freezing the framework, architecture and navigation.</p>
                  <p>There are several languages such as JavaScript, ASP, HTML, PHP etc. for coding and programming the backend.</p>
                </div>`,
    },
    {
      question: "What does Web development include?",
      answer: `<div className="">
                  <p>Web Development involves creating websites and apps for brands to reach customers. It includes aspects like web design, web publishing, web programming, and database management. A Web Developer designs websites and also writes the script in languages such as PHP and ASP.</p>
                </div>`,
    },
    {
      question: "How much does Web Development cost?",
      answer: `<div className="">
                  <p>The cost for Web Development depends on many factors such as:</p>
                  <ul>
                    <li>Variation in requirements.</li>
                    <li>Utilization of resources on projects.</li>
                    <li>The time frame for a particular project etc.</li>
                  </ul>
                </div>`,
    },
    {
      question: "What to look for in a Professional Web Development Company?",
      answer: `<div className="">
                  <p>Understanding what you look for in a web development company can be hard and at the same time can also have a major impact on the online presence of your business. We suggest choosing a website that has years of experience with an extensive portfolio of websites. Opt for checking reviews online to gauge how satisfied clients have been with the company's work.</p>
                </div>`,
    },
    {
      question: "Why SIB Infotech is the Best Web Development Agency in India?",
      answer: `<div className="">
                  <p>In a country like India, you will find thousands of Web Designing Companies running single-handedly or with multiple hands but what makes SIB Infotech unique is its years of experience and team of experts skilled in different areas. Feel free to check our portfolio for more information about the projects we have successfully delivered. We offer a free no-obligation consultation session so you can evaluate our capabilities and see if we are a good fit for your project. Contact us today to book an appointment.</p>
                </div>`,
    },
    {
      question: "How much does Website Development Costs in India?",
      answer: `<div className="">
                  <p>Web Development in a country like India is usually priced on the lower side of the scale. The total costing depends on the time utilization, resources on a particular project along with the custom requirements of clients.</p>
                </div>`,
    },
    {
      question:
        "What Web Development Platforms do you use for Developing a Website?",
      answer: `<div className="">
                  <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                  <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                  <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                  <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                </div>`,
    },
    {
      question: "What is Website Development?",
      answer: `<div className="">
                  <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                  <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                  <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                  <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                </div>`,
    },
    {
      question:
        "How do I choose a Website Development Company for my Business?",
      answer: `<div className="">
                  <p>Here are a few tips to consider when appointing a web development company and the obstacles that may appear by overlooking vital points:</p>
                  <ul>
                    <li>Before opting for website development services you need to answer a few questions. What are the elements you need in a website? How many webpages do you need on your website? What should be its key features?</li>
                    <li>Go through the company's website by analyzing its digital presence, social media handles, and content present. Also, investigate if the site is mobile-friendly.</li>
                    <li>Have a glance at their portfolio. If they don’t have one ask them to go through a test for you asking them about their latest works and if they have worked on something in the same niche. Visit those sites and check how they are performing now (most importantly have a keen eye on the UI and UX).</li>
                    <li>Check the reviews of their clients and pay further attention to the reviews from those clients that have similar businesses as yours. You may also monitor their overall rating and if they have any awards.</li>
                    <li>Make sure they provide transparency to their clients and are responsive enough. Even if they don't possess a sales team contact them to know how they acknowledge and their dedication towards your work.</li>
                  </ul>
                </div>`,
    },
  ];
  const faqDescription = `We as a full service leading <strong>digital marketing firm</strong>,
  offers customized story-based
  <br className="d-none d-lg-block" />
  <strong>digital marketing services</strong> to build, promote & scale
  your brand so <br className="d-none d-lg-block" />
  it can clearly & easily attract your ideal clients`;

  const agencyWorkflow = [
    {
      title: "Consultation & Strategy",
      description:
        "Understanding your business requirements and setting clear objectives.",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting visually appealing and user-friendly designs for optimal engagement.",
    },
    {
      title: "Development & Integration",
      description:
        "Using the latest technologies to develop functional and interactive websites.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing to ensure flawless performance across all platforms.",
    },
    // {
    //   title: "Launch & Optimization",
    //   description: "Deploying the website with ongoing optimization for maximum efficiency."
    // }
  ];

  return (
    <div>
      <Abbout3 {...about3Data} />
      <Solution
        heading={"Responsive And Highly "}
        subHeading={"Interactive Front End Web Development Services "}
        discription={
          "Creating state-of-the-art web architecture through compelling user experiences, performance tuning, intuitive UI development and usability assessment, testing and analysis services."
        }
        data={Services}
      />
      <BrandBuild
        subtitle={
          "Our Expert Back End Web Development Services With Enhanced Stability"
        }
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
      <WhyChoose />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <DesignThinking data={keyAdvantages2} />

      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Approach  "}
        subtitle={"Our Process for Web Development"}
        rightDiscription={
          " Our process simplifies SEO into clear, actionable steps keyword research and content optimization to link building and performance tracking, we ensure your website achieves sustainable."
        }
        tagline={"Seamless, Scalable, and Results-Driven"}
      />
      {/* <Cta /> */}
      <CaseStudy2
        description={`Client Success Stories That Prove We’re a Top Digital Marketing Company in India, our results speak for themselves `}
      />
      <QA />

      <Faq
        title={"Website Development FAQ?"}
        description={faqDescription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default WebDevelopment;
