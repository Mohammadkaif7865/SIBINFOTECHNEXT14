import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";
import SmoPage from "@/comps/SmoPage/Smo";
import SmowhySib from "@/comps/SmoPage/Smowhysib";
import Smoservices from "@/comps/SmoPage/Smoservices";
import SmoPracticeStrategy from "@/comps/SmoPage/Smopractice-strategy";
import SmoFaq from "@/comps/SmoPage/Smofaq";
import WhatisSmo from "@/comps/SmoPage/WhatisSmo";
import SIBPower from "@/comps/Home/SIBPower";
import SmowebServices from "@/comps/SmoPage/SmowebServices";
import Solution from "@/comps/WhiteLabel/Solution";
import {
  FaBullhorn,
  FaChartLine,
  FaHandshake,
  FaStar,
  FaUsers,
  FaWater,
} from "react-icons/fa6";

export default function SocialMediaOptimizationServices() {
  const smoServices = [
    {
      title: `Proven Expertise & <br class="d-none d-md-lg "/> Experienced Team`,
      description:
        "Our social media experts have extensive experience in optimizing brands for maximum visibility and engagement. A team of certified digital marketers, designers, and strategists with a track record of delivering measurable social media success.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Custom SMO <br class="d-none d-md-lg "/> Strategies`,
      description:
        "No one-size-fits-all—our approach is personalized to match your brand’s voice, audience, and goals. We use analytics and insights to tailor SMO strategies that deliver measurable results.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Visually Stunning & <br class="d-none d-md-lg "/> Impactful Content`,
      description:
        "We develop high-quality content that resonates with your followers. Our professionally designed graphics and compelling copy inspire, educate, and entertain—crafted to stop the scroll.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Increased Brand Visibility <br class="d-none d-md-lg "/> & Audience Engagement`,
      description:
        "Boost your brand visibility and grow your online community organically. Our strategies not only make your brand easier to find but also drive real interactions — increasing likes, shares, and comments to keep your audience actively engaged and connected with your business.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `Affordable <br class="d-none d-md-lg "/> Packages`,
      description:
        "We offer cost-effective SMO solutions tailored for businesses of all sizes.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
    {
      title: `Real-Time Monitoring <br class="d-none d-md-lg "/> & Reporting`,
      description:
        "We continuously track and optimize your campaigns in real time to maximize reach, engagement, and results. You’ll also receive clear, actionable monthly reports packed with meaningful insights, ROI tracking, and expert recommendations — no fluff, just real performance data.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.jpg",
    },
    {
      title: `Dedicated <br class="d-none d-md-lg "/> Account Manager`,
      description:
        "Your single point of contact to ensure smooth communication, timely updates, and strategic consistency.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];

  const power_data = [
    {
      title: "Boost Brand Visibility ",
      description:
        "Enhance your brand’s presence across major social platforms and reach a wider, targeted audience.",
    },
    {
      title: "Strengthen Audience Engagement ",
      description:
        " Foster meaningful interactions, build trust, and create lasting relationships with your community.",
    },
    {
      title: " Leverage Data-Driven Strategies ",
      description:
        "Make smarter decisions with performance insights and analytics to optimize content and campaigns for better results.",
    },
    {
      title: "Drive Higher Website Traffic & Conversions",
      description:
        "Turn social media engagement into real business growth with increased site visits and lead generation.",
    },
    {
      title: "Build a Loyal Community",
      description:
        "Cultivate a passionate and loyal audience that advocates for your brand organically. ",
    },
    {
      title: "Enjoy Cost-Effective Marketing ",
      description:
        " Achieve impressive results with lower investment compared to traditional advertising, maximizing your ROI.",
    },
  ];

  const metaTags = (
    <>
      <title>Social Media Optimization Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Partner with SIB Infotech, a trusted SMO company in Mumbai, to grow your social media presence, increase engagement, and connect with your audience."
      />
      <meta name="keywords" content="Social Media Optimization Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/social-media-optimization-services"
      />
      <meta
        property="og:title"
        content="Social Media Optimization Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Partner with SIB Infotech, a trusted SMO company in Mumbai, to grow your social media presence, increase engagement, and connect with your audience."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/social-media-optimization-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/social-media-optimization-services"
      />
      <meta
        property="twitter:title"
        content="Social Media Optimization Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Partner with SIB Infotech, a trusted SMO company in Mumbai, to grow your social media presence, increase engagement, and connect with your audience."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/social-media-optimization-services.jpg
"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/social-media-optimization-services"
        breadcrumbTitle="Social Media Optimization Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Partner with SIB Infotech, a trusted SMO company in Mumbai, to grow your social media presence, increase engagement, and connect with your audience."
        }
        reviewCount={"5288"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading ">
                  Best Social Media Marketing Company in India
                </h1>
                <h2 className="small_heading fw-bold mt-3 text_red ">
                  That Delivers Engagement and Growth
                </h2>
                <p
                  className="small_heading fontWeight500 mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Create Buzz, Build Loyalty
                </p>
                <p
                  className="mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Ready to Turn Your Social Media into a Growth Machine?
                  Maximize Your Brand’s Marketing with Expert Social Media
                  Optimization Services
                </p>
                <div className="mt-4">
                  <Link href="#">
                    <span className="btnThemeRed me-3">
                      <i className="fa-solid fa-comment-dots"></i> Get a Quote
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="btnThemewhiteBorder">
                      <i className="fa-solid fa-circle-question"></i> Ask a
                      Question
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700 social-media-optimization-services">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">SMO</span> Company in
                    India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={" Social Media Optimization"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 social-media-optimization-services">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">SMO</span> Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={" Social Media Optimization"} />
      </div>
      <SmoPage />
      <WhatisSmo bgBlack textWhite
        title="What is"
        highlightedText="Social Media Optimization (SMO)"
        description="Social Media Optimization </strong>is the process of enhancing your brand’s presence on social platforms through strategic content, profile enhancement, and engagement. It helps increase visibility, generate quality leads, and build lasting relationships with your audience – all organically and cost-effectively."
        subDescription="Social Media Optimization involves the use of <strong>social media networks</strong> to manage and grow an organization’s message and online presence. As a vital part of digital marketing, SMO goes beyond posting content. It includes strategically creating, curating, and promoting your brand's message on social platforms to drive engagement, increase followers, and convert social interactions into measurable business outcomes."
        imageSrc="/assets/images/whysmo.png"
        imageAlt="Team Working"
        features={[
          {
            icon: <FaChartLine />,
            title: "Brings traffic and establishes trust",
            description:
              "We are crafting a digital method that subsists life across all mediums.",
          },
          {
            icon: <FaUsers />,
            title: "Brand development and promotion",
            description:
              "We believe in innovation by integrating primary with elaborate ideas.",
          },
          {
            icon: <FaWater />,
            title: "Maximum reachability in Minimum investment",
            description:
              "We are crafting a digital method that subsists life across all mediums.",
          },
          {
            icon: <FaStar />,
            title: "Find out new customers",
            description:
              "We believe in innovation by integrating primary with elaborate ideas.",
          },
          {
            icon: <FaBullhorn />,
            title: "Advertise the business, products, and services",
            description:
              "We are crafting a digital method that subsists life across all mediums.",
          },
          {
            icon: <FaHandshake />,
            title: "Brand Recognition and Trust",
            description:
              "We believe in innovation by integrating primary with elaborate ideas.",
          },
        ]}
      />
      <SmowhySib />
      <SIBPower
        title="We Are SMO  "
        subtitle="Experts in India "
        description="We are more than just a SMO Company"
        title_right={`Why Brands Choose a Social Media Optimization Company in India?`}
        description_right="At SIB Infotech, we don’t just build social media profiles, we craft powerful digital experiences that drive brand engagement and customer loyalty. Our focus is on increasing your online presence, boosting audience interactions, and maximizing your brand’s impact across all major platforms. Whether it's Facebook, Instagram, LinkedIn, or Twitter, we bring industry-specific expertise to every campaign, understand your business objectives, address challenges, and design customized SMO strategies that deliver measurable growth and long-term success."
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />

      <Smoservices />
      <SmowebServices />
      <Solution
        heading={"Why SIB Infotech As Your Social Media Marketing Agency?  "}
        // subHeading={"With Our Cutting-Edge SEO Services in India"}
        discription={
          "At SIB Infotech, we don’t just manage your social media—we elevate it. We’re not just a digital agency—we’re your growth partner. With years of experience in delivering high-impact digital solutions, our SMO experts bring creativity, strategy, and results-driven execution to every project. Here’s what sets us apart: "
        }
        data={smoServices}
      />
      <SmoPracticeStrategy />
      <SmoFaq />
    </CustomLayout>
  );
}

{
  /* <section className="seoBlock">
    <div className="containerFull">
      <div className="row">
        <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
          <div className="seoItem">
            <p className="mb-2">
              Affiliate Marketing is the term used to describe a form of
              online advertising which consists of rewarding an affiliate
              for referring a visitor or rewarding a customer for performing
              a desired action, such as making a purchase or subscribing to
              a newsletter. In a way, Affiliate Marketing can be regarded as
              free publicity for your page—a network of related websites
              directing customers to purchase from yours.
            </p>
            <p className="mb-2">
              {" "}
              Affiliate campaigns have the best results when they are
              combined with Search Engine Optimization (SEO), Pay Per Click
              (PPC) campaigns, email marketing support and are well-suited
              for travel, retail, and service industries due to their timely
              research process/large-volume sales.
            </p>
          </div>
        </div>
        <div className="col-md-4 order-lg-2 order-1">
          <div className="rightSeo text-center">
            <img
              src="assets/images/smo-banner.png"
              className="img-responsive"
              alt="SMO Banner"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="rightSeo">
            <img
              src="assets/images/smo_img.png"
              className="img-responsive"
              alt="SMO"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="seoItem">
            <p className="mb-2">
              Effective Affiliate Marketing is not throwing a bunch of links
              at different website owners in the hopes that something will
              stick. It is a well-planned, specified effort intended to
              develop long-term relationships with third party websites,
              research industry-relevant websites with trusted pages and
              build up a valuable affiliate network for your website that
              will bring in quality, converted traffic.
            </p>
            <p className="mb-1">
              {" "}
              Social Media Marketing is in many ways connected as a
              technique to viral marketing where word of mouth is created
              not through friends or family but through the use of
              networking in social book-marking, video and photo sharing
              websites. In a similar way the engagement with blogs achieves
              the website popularity by sharing content through the use of
              RSS in the blogsphere and special blog search engines such as
              Technorati. Social Media Marketing is closely related to other
              Online Marketing Techniques, such as Search Engine
              Optimization, Search Engine Marketing, Viral Marketing Word of
              Mouth Marketing, and Social Media Optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="divider"></div>
  <section className="differenceBlock">
    <div className="containerFull has_mob_padding">
      <div className="diffItem">
        <div className="row">
          <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
            <div className="rightDiff">
              <h5 className="redText fontHeading">
                We focus on the following aspects of Social Media
                Optimization
              </h5>
              <ul className="fullList">
                <li className="redBullet">
                  Increasing your linkability through fresh,informative and
                  eye catching content
                </li>
                <li className="blueBullet">
                  Making tagging and bookmarking easy through implementation
                  of Social Bookmarking buttons on your blogs and important
                  pages
                </li>
                <li className="redBullet">Rewarding Inbound links</li>
                <li className="blueBullet">
                  Making your content travel through creation of
                  presentations and submission of the same across social
                  sharing sites
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 order-lg-2 order-1">
            <div className="seoLeft mt-2">
              <img src="assets/images/smo_img2.png" alt="SMO Services" />
            </div>
          </div>
        </div>
      </div>
      <div className="diffItem">
        <div className="row">
          <div className="col-md-4">
            <div className="seoLeft mt-2">
              <img src="assets/images/smo_img3.png" alt="SMO Agency" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="rightDiff">
              <h5 className="blueText fontHeading">
                If the power of Social Media Marketing has been utilized in
                the right way, it can help
              </h5>
              <ul className="fullList">
                <li className="redBullet">
                  Increase direct traffic to your site
                </li>
                <li className="blueBullet">
                  Increase the number of quality back-links resulting in
                  higher natural ranking
                </li>
                <li className="redBullet">
                  Improved brand visibility &amp; brand reputation
                </li>
                <li className="blueBullet">
                  Making your content travel through creation of
                  presentations and submission of the same across social
                  sharing sites
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */
}
