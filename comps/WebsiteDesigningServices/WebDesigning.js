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
import Faq from "../Home/Faq";
import Solution from "../WhiteLabel/Solution";
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
      src: "/assets/images/web-desinging2.jpg",
    },
    image2: {
      src: "/assets/images/web-desinging1.jpg",
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

  const faqsData = [
    {
      id: "faq1",
      question: "1. Does my Business need a Website?",
      answer: `<p>
      Having a website is a cost-effective approach when it
      comes to advertising and reaching out to potential
      customers. Till now, the only way through which small
      businesses reached outside the local area was through
      expensive advertising media. Many companies can't afford
      expensive TV advertising or national magazines. But with
      a website companies can reach out to a vast audience
      throughout the world.
    </p>`,
    },
    {
      id: "faq2",
      question:
        "2.  What are the things that you expect from me to complete the Website Design?",
      answer: ` <div className="accordion-body">
      <p>
        You are completely aware of your services and what your
        customers want or look for. Hence, it all depends on
        what type of website you want. However, some content
        references such as brochures, logos, photographs,
        product prescription business cards will be required for
        the contents to be present on your website.
      </p>
      <p>
        You can elaborate on all your requirements on our
        discovery call before we start working together and the
        package will be decided considering your requirements.
      </p>
      <p>
        <strong>
          Some other stuff we would need for your website is:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>Images of you and your team (optional).</li>
        <li>Images of your Workplace (optional).</li>
        <li>Staff profiles (optional).</li>
        <li>
          Any videos you would like to add to the website.
        </li>
        <li>Login details to your existing website etc.</li>
      </ul>
      <p className="mt-3">
        If some of these are already present on your existing
        website then they will be transferred over to the new
        site.
      </p>
    </div>`,
    },
    {
      id: "faq3",
      question: "3. If I have a Website, will you make changes for me?",
      answer: ` <p>
      Yes, we can redesign or change the content of your
      existing website. It will cost less than building one
      from scratch.
    </p>`,
    },
    {
      id: "faq4",
      question:
        "4. Is there any maintenance required after designing a Website?",
      answer: `  <p>
      With the announcement of new trends for page rankings,
      some slight changes might be required. Also, as your
      business evolves, your websites may require some
      modifications. If there is no change in business from
      time to time the changes will be minimal.
    </p>`,
    },
    {
      id: "faq5",
      question: "5. Can you do rush jobs?",
      answer: `<p>
      The team will try its best to meet the requirements of
      the clients as per the complexity of the project and
      specific delivery dates.
    </p>`,
    },
    {
      id: "faq6",
      question:
        "6. What if I don't want to manage my Website at all? Can you do it all for me?",
      answer: ` <p>
      Yes, we have maintenance packages to suit your needs.
      The packages can range from 1 hour per month to 10 hours
      per month. We can also discuss the package that's right
      for you.
    </p>`,
    },
    {
      id: "faq7",
      question: "7. What does a Website Designing Company do?",
      answer: `   <div className="accordion-body">
      <p>
        A website designing company intends to serve its clients
        with fully functional, professional-looking, and
        mobile-friendly websites providing the best user
        experience.
      </p>
      <p>
        The riveting website designs are a concoction of
        equalization, solidarity, accentuation, intricacy and
        blend of segments. An experienced designer will oversee
        both highs and lows of a design in his brain and after a
        thorough evaluation of all the components incorporate
        them in the website.
      </p>
      <p>
        A website is the virtual representation of your
        business. Having a professional website is no less than
        a triumph for a business. It portrays a lot about you to
        the users for instance the concept behind the business,
        target audience, etc. Visitors will contribute cash for
        services without hesitancy as they know you retain an
        accredited business. Professionalism is a must to be
        illustrated within the business and also on the website.
      </p>
    </div>`,
    },
    {
      id: "faq8",
      question: "8. What does Web Design include?",
      answer: `<p>
        Website designing incorporates within itself multiple
        components that operate collectively to make a website
        look robust. These components are graphic design, user
        experience design, interface design, search engine
        optimization (SEO), and content creation. All these key
        elements are liable for the presentation and functioning
        of the websites on other devices.
      </p>`,
    },
    {
      id: "faq9",
      question: "9. What are Website Design Services?",
      answer: `<p>
      As mentioned in the name itself, website design services
      are meant to create customized websites for all kinds of
      businesses as per their requirements and demands.
      They'll collaborate with your organization, create a
      website that mirrors your brand, giving the users with
      the finest experience and accomplish more conversions in
      turn.
    </p>`,
    },
    {
      id: "faq10",
      question: "10. What are Website Design Services?",
      answer: `<p>
      As mentioned in the name itself, website design services
      are meant to create customized websites for all kinds of
      businesses as per their requirements and demands.
      They'll collaborate with your organization, create a
      website that mirrors your brand, giving the users with
      the finest experience and accomplish more conversions in
      turn.
    </p>`,
    },
    {
      id: "faq11",
      question: "11. Will my Website be Mobile-Friendly?",
      answer: ` <p>
      After the announcement of new core web vitals metrics
      for page rankings, we will make sure that your website
      is fully responsive and works well on all devices. We
      don't charge extra for this as it comes as standard.
    </p>`,
    },
    {
      id: "faq12",
      question:
        "12.Why SIB Infotech is the Best Web Design Company in India for your business? ",
      answer: `<p>
      Since 2005, SIB Infotech is specialized in creating
      dynamic and appealing websites for clients. Our team of
      experts ensures maintaining an effective online presence
      for your business. With technologies being updated
      rapidly, you need a trusted partner that can keep your
      website updated with these changes so that your site and
      the information it provides are never outdated. That's
      why you need a company like SIB Infotech to keep up with
      the trend and attract potential customers.
    </p>`,
    },
    {
      id: "faq13",
      question: "13. How much does a Professional Web Design Services Cost?",
      answer: `<div className="accordion-body">
      <p>
        <strong>The cost of web designing depends on:</strong>
      </p>
      <ul className="listFlexItem">
        <li>Requirements of the clients</li>
        <li>
          Utilization of resources on a particular project
        </li>
        <li>And Time Frame.</li>
      </ul>
    </div>`,
    },
    {
      id: "faq14",
      question: "14. How long does it take to Design a Website?",
      answer: `<div className="accordion-body">
      <p>
        The total time engaged in designing a website depends on
        what you are getting designed.
      </p>
      <p>
        Everything that we make for you is custom with engaging
        trends and relevant content. Please contact our experts
        to know more about time-related queries.
      </p>
    </div>`,
    },
    {
      id: "faq15",
      question: "15. How long does it take to Design a Website?",
      answer: `<div className="accordion-body">
      <p>
        The total time engaged in designing a website depends on
        what you are getting designed.
      </p>
      <p>
        Everything that we make for you is custom with engaging
        trends and relevant content. Please contact our experts
        to know more about time-related queries.
      </p>
    </div>`,
    },
    {
      id: "faq16",
      question:
        "16. I want to revamp my existing Website Design. Can you help?",
      answer: ` <p>
      Yes, we have a separate team that looks after such
      requirements. A professional web designer's expert team
      will be assigned to your website to offer services as
      required. The project update will also be shared.
    </p>`,
    },
    {
      id: "faq17",
      question:
        "17.  What is the difference between Static Web Design and Dynamic Web Design?",
      answer: `    <div className="accordion-body">
      <p>
        Static WebPages are the ones that always look the same
        and their content rarely changes. To make a change you
        need to create the page yourself or get help from a
        designer. The newly created pages and any images must
        then be uploaded to the web servers.
      </p>
      <p>
        However, Dynamic Pages can be changed every time they
        are loaded and the contents can also be changed as per
        your requirements. The dynamic page can be created to
        respond to the user queries and can also reduce ongoing
        maintenance costs if you don't want to change things
        yourself with a page editor. A content management
        utility also needs to be developed to help you manage
        your sites.
      </p>
      <p>
        Many clients have a combination of both dynamic and
        static elements in their sites. For instance, they might
        use dynamic pages for product catalogs where they can
        change information or pictures regularly. "Contact" and
        "About Us" web pages often left as static pages.
      </p>
    </div>`,
    },
    {
      id: "faq18",
      question: "18.What is the cost to create a Website?",
      answer: ` <p>
      When it comes to the cost of a website it may revolve
      around diverse aspects. The cost for launching and
      designing starts from USD 400 onwards depending upon
      scope of work whereas the cost for routine maintenance
      of a website may fluctuate from USD 50 to USD 1500-2000
      per month depending on complexity of websites.
    </p>`,
    },
    {
      id: "faq19",
      question:
        "19. What services are provided by Website Designing Companies?",
      answer: `  <div className="accordion-body">
      <p>
        <strong>
          Website Designing includes some of the essential
          services that are:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>
          Designing the specific quantity of web pages based on
          the defined budget for web designing services.
        </li>
        <li>On-page SEO with images</li>
        <li>Graphic Designing</li>
        <li>Sitemaps</li>
        <li>DNS Changes</li>
        <li>Video embedding or linking</li>
        <li>Form integrations</li>
        <li>Google and Bing verification</li>
      </ul>
    </div>`,
    },
    {
      id: "faq20",
      question: "20. What are the Types of Web Design?",
      answer: `   <div className="accordion-body">
      <p>
        <strong>Types of Web Design Layouts:</strong>
      </p>
      <p className="mt-3">
        <strong>Static Website Layout:</strong> In this type,
        the web pages involve limited content. Each page is
        created using HTML language and represents the same
        information to all its visitors. These are perceived to
        be the most primitive type of websites that are easiest
        to create. Unlike dynamic websites require web
        programming or database designs whereas static websites
        do not require them.
      </p>
      <p>
        <strong>Dynamic Website Layout:</strong> This type of
        web design is designed with a variety of pieces that
        collectively form a page. These are distinct from static
        sites as they use server technologies, like PHP or
        JavaScript, for web development.
      </p>
      <p>
        <strong>Fixed Width Layout:</strong> Unique feature
        mentioned in the name itself, these websites start with
        a specific size as stipulated by the web designer.
      </p>
      <p>
        The width remains stable regardless of the size of the
        browser window viewing the page. This fixed-width
        control feature provides the control of the look of the
        page to the designer.
      </p>
      <p>
        <strong>Responsive Design Layout:</strong> This is a
        single layout design that is included in all the web
        pages in which the elements get reformatted and resized
        based on the breakpoints. A breakpoint is a specific
        viewport width value (in pixels) that triggers a
        transition in the website layout.
      </p>
      <p>
        <strong>Liquid or Fluid Design Layout:</strong> In this
        type of layout, the webpage resizes as the window size
        is altered. This is possible using percentages instead
        of pixels width for defining areas. The number of
        columns in most of the webpages are one, two or three.
      </p>
      <p>
        <strong>Single Page Design Layout:</strong> In this
        layout, there is only one HTML page containing just the
        exact information that a user needs to make a decision
        and act on it. These layouts are preferred for landing
        pages, portfolios, and event-related websites.
      </p>
    </div> `,
    },
    {
      id: "faq21",
      question: "21. What does Website Design Cost for a Small Business?",
      answer: ` <p>
      The cost of a website depends on the elements of the
      page and the features of the asset. The average cost of
      website designing for small businesses ranges starts
      from US$ 250 onwards. The costs may vary with the
      requirement of any additional features or custom-built
      components.
    </p> `,
    },
    {
      id: "faq22",
      question: "22. What does a Web Design Agency do?",
      answer: `<p>
      Web design agencies have skilled graphic designers who
      work upon the logos, color schemes, branding, and
      overall focus on the appearance of the website. They
      frequently used software like Adobe Photoshop, Figma or
      Adobe XD to curate quality graphic design and web layout
      services.
    </p>`,
    },
  ];

  const faqDiscription = `We’re a full-service digital marketing firm delivering story-driven strategies to build,<br/> promote, and scale your brand to attract your ideal client.`;

  const Services = [
    {
      title: `Business Website Design`,
      description:
        "A professionally designed business website tailored to showcase your company’s services, attract potential clients, and build credibility.",
      img: "/assets/images/webdesign-replaceimg/Business-Website-Design 1.jpg"
    },
    {
      title: `E-Commerce Website <br class="d-none d-md-lg"/> Development`,
      description:
        "We build user-friendly e-commerce websites with seamless shopping experiences, secure payment gateways, and powerful admin panels.",
      img: "/assets/images/webdesign-replaceimg/E-Commerce-Website 1.jpg"
    },
    {
      title: `Custom Web <br class="d-none d-md-lg"/> Development`,
      description:
        "Need a unique website with special features? Our custom web development services provide tailored solutions to meet your business goals.",
      img: "/assets/images/webdesign-replaceimg/Custom-Web-Development 1.jpg"
    },
    {
      title: `Landing Page <br class="d-none d-md-lg"/> Design`,
      description:
        "High-converting landing pages optimized for lead generation and sales, perfect for marketing campaigns.",
      img: "/assets/images/webdesign-replaceimg/Landing-Page-Design 1.jpg"
    },
    {
      title: `WordPress Website <br class="d-none d-md-lg"/> Development`,
      description:
        "Get a beautifully crafted, easy-to-manage WordPress website with advanced customization and SEO-friendly features.",
      img: "/assets/images/webdesign-replaceimg/WordPress-Website-Development 1.jpg"
    },
    {
      title: `Website Redesign & <br class="d-none d-md-lg"/> Revamp Services`,
      description:
        "Revamp your outdated website with a fresh, modern look and improved performance.",
      img: "/assets/images/webdesign-replaceimg/Website-Redesign-&-Revamp-Services.jpg"
    },
    {
      title: `UI/UX Design & <br class="d-none d-md-lg"/> Prototyping`,
      description:
        "Ensure a smooth, engaging, and interactive user experience with our expert UI/UX design services.",
      img: "/assets/images/webdesign-replaceimg/UI-UX-Design-&-Prototyping 1.jpg"
    }
  ];
  return (
    <>
      <Banner />
      <Abbout3 {...about3Data} />
      <Solution
        heading={"Our Website Design Services "}
        // subHeading={"With Our Cutting-Edge SEO Services in India"}
        discription={
          "We use the latest technology and design innovations to develop creative, smart & user-friendly websites to successfully connect users with brands. Empower yourself with the best website design company in India. "
        }
        data={Services}
      />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <GrowBusiness /> 
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
      {/* <Contact /> */}
      {/* <DesigningProcess /> */}
      {/* <DigitalMarketingAgency /> */}
      <WebsiteDesignServices />

      {/* <Industries /> */}
      <Faq
        title={"Website Designing FAQ?"}
        description={faqDiscription}
        faqsData={faqsData}
      />
    </>
  );
};

export default WebDesigning;
