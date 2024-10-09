import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";


export default function AboutUs() {
  const metaTags = (
    <>
      <title>About SIB Infotech | Top Digital Marketing Agency in India</title>
      <meta
        name="description"
        content="Discover the journey and expertise of SIB Infotech. Learn how our team delivers innovative and exceptional digital marketing services to drive your success."
      />
      <meta name="keywords" content="Top Digital Marketing Agency in India" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/about-us" />
      <meta
        property="og:title"
        content="About SIB Infotech | Top Digital Marketing Agency in India"
      />
      <meta
        property="og:description"
        content="Discover the journey and expertise of SIB Infotech. Learn how our team delivers innovative and exceptional digital marketing services to drive your success."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/about-us"
      />
      <meta
        property="twitter:title"
        content="About SIB Infotech | Top Digital Marketing Agency in India"
      />
      <meta
        property="twitter:description"
        content="Discover the journey and expertise of SIB Infotech. Learn how our team delivers innovative and exceptional digital marketing services to drive your success."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />
      <BreadcrumbSchema
          url="https://www.sibinfotech.com/about-us"
          breadcrumbTitle="About SIB Infotech | Top Digital Marketing Agency in India "
        />
    </>
  );
  const teamMembers = [
    {
      name: "Ankit Verma",
      imgSrcSet: "assets/images/team/Ankit.webp",
      imgSrc: "assets/images/team/Ankit.jpg",
      alt: "Ankit Verma",
    },
    {
      name: "Anurag Singh",
      imgSrcSet: "assets/images/team/Anurag.webp",
      imgSrc: "assets/images/team/Anurag.jpg",
      alt: "Anurag Singh",
    },
    {
      name: "Ashutosh Kumar Singh",
      imgSrcSet: "assets/images/team/ashutosh-kumar-singh.webp",
      imgSrc: "assets/images/team/ashutosh-kumar-singh.jpg",
      alt: "Ashutosh Kumar Singh",
    },
    {
      name: "Badal Dev",
      imgSrcSet: "assets/images/team/Badal.webp",
      imgSrc: "assets/images/team/Badal.jpg",
      alt: "Badal Dev",
    },
    {
      name: "Bhavnish Chaubey",
      imgSrcSet: "assets/images/team/Bhavnish.webp",
      imgSrc: "assets/images/team/Bhavnish.jpg",
      alt: "Bhavnish Chaubey",
    },
    {
      name: "Gaurav Kumar",
      imgSrcSet: "assets/images/team/Gaurav.webp",
      imgSrc: "assets/images/team/Gaurav.jpg",
      alt: "Gaurav Kumar",
    },
    {
      name: "Geordy Mathew",
      imgSrcSet: "assets/images/team/geordy-mathew.webp",
      imgSrc: "assets/images/team/geordy-mathew.jpg",
      alt: "Geordy Mathew",
    },
    {
      name: "Kanchan Sharma",
      imgSrcSet: "assets/images/team/kanchan-sharma.webp",
      imgSrc: "assets/images/team/kanchan-sharma.webp",
      alt: "Kanchan Sharma",
    },
    {
      name: "Mahadev Prasad Uniyal",
      imgSrcSet: "assets/images/team/Mahadev.webp",
      imgSrc: "assets/images/team/Mahadev.jpg",
      alt: "Mahadev Prasad Uniyal",
    },
    {
      name: "Malini Guria",
      imgSrcSet: "assets/images/team/malini-guria.webp",
      imgSrc: "assets/images/team/malini-guria.jpg",
      alt: "Malini Guria",
    },
    {
      name: "Mohammad Kaif",
      imgSrcSet: "assets/images/team/mohammad-kaif.webp",
      imgSrc: "assets/images/team/mohammad-kaif.jpg",
      alt: "Mohammad Kaif",
    },
    {
      name: "Mumtaz Alam",
      imgSrcSet: "assets/images/team/mumtaz-alam.webp",
      imgSrc: "assets/images/team/mumtaz-alam.jpg",
      alt: "Mumtaz Alam",
    },
    {
      name: "Pooja Sharma",
      imgSrcSet: "assets/images/team/pooja-sharma.webp",
      imgSrc: "assets/images/team/pooja-sharma.jpg",
      alt: "Pooja Sharma",
    },
    {
      name: "Raghunath Samal",
      imgSrcSet: "assets/images/team/raghunath-samal.webp",
      imgSrc: "assets/images/team/raghunath-samal.jpg",
      alt: "Raghunath Samal",
    },
    {
      name: "Rakesh Durkar",
      imgSrcSet: "assets/images/team/rakesh-durkar.webp",
      imgSrc: "assets/images/team/rakesh-durkar.jpg",
      alt: "Rakesh Durkar",
    },
    {
      name: "Rashi",
      imgSrcSet: "assets/images/team/rashi.webp",
      imgSrc: "assets/images/team/rashi.jpg",
      alt: "Rashi",
    },

    {
      name: "Rekha Singh",
      imgSrcSet: "assets/images/team/rekha-singh.webp",
      imgSrc: "assets/images/team/rekha-singh.jpg",
      alt: "Rekha Singh",
    },
    {
      name: "Reet Handay",
      imgSrcSet: "assets/images/team/Reet.webp",
      imgSrc: "assets/images/team/Reet.jpg",
      alt: "Reet Handay",
    },
    {
      name: "Rishabh Kumar",
      imgSrcSet: "assets/images/team/Rishabh.webp",
      imgSrc: "assets/images/team/Rishabh.jpg",
      alt: "Rishabh Kumar",
    },
    {
      name: "Sachin Kumar",
      imgSrcSet: "assets/images/team/sachin.jpg",
      imgSrc: "assets/images/team/sachin.jpg",
      alt: "Sachin Kumar",
    },
    {
      name: "Santosh Kumar",
      imgSrcSet: "assets/images/team/santosh-kumar.webp",
      imgSrc: "assets/images/team/santosh-kumar.jpg",
      alt: "Santosh Kumar",
    },
    {
      name: "Tushar Lad",
      imgSrcSet: "assets/images/team/tushar.jpg",
      imgSrc: "assets/images/team/tushar.jpg",
      alt: "Tushar Lad",
    },

    {
      name: "Vishakha",
      imgSrcSet: "assets/images/team/vishakha.webp",
      imgSrc: "assets/images/team/vishakha.jpg",
      alt: "Vishakha",
    },
    {
      name: "Vishal Maurya",
      imgSrcSet: "assets/images/team/vishal-maurya.webp",
      imgSrc: "assets/images/team/vishal-maurya.jpg",
      alt: "Vishal Maurya",
    },
    {
      name: "Vithaldas Nayak",
      imgSrcSet: "assets/images/team/Vithaldas.webp",
      imgSrc: "assets/images/team/Vithaldas.jpg",
      alt: "Vithaldas Nayak",
    },
    {
      name: "Zaid Shaikh",
      imgSrcSet: "assets/images/team/Zaid-Shaikh.webp",
      imgSrc: "assets/images/team/Zaid-Shaikh.jpg",
      alt: "Zaid-Shaikh",
    },
    {
      name: "Zaroon Junaid",
      imgSrcSet: "assets/images/team/zaroon-junaid.webp",
      imgSrc: "assets/images/team/zaroon-junaid.jpg",
      alt: "Zaroon Junaid",
    },
  ];
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white">
                  About SIB Infotech
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Best Website Designing & Development Company in India
                </h2>
                <div className="mt-4">
                  <Link href="#requestQuote">
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
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Digital Marketing</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={"About SIB Infotech | Top Digital Marketing Agency in India"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Digital Marketing</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"About SIB Infotech | Top Digital Marketing Agency in India"} />
      </div>

      <section>
        <div className="containerFull">
          <h3 className="customHeading customLineHeight2 text-center">
            Driving Digital Success –{" "}
            <span className="text_red">
              Best Website Design & Digital Marketing Company
            </span>{" "}
            in India
          </h3>
          <div className="aboutBlock">
            <div className="row">
              <div className="col-lg-7 order-lg-1 order-2 mt-lg-0 mt-4">
                <p className="customText">
                  SIB Infotech, a "Premier Google Partner" - a distinction
                  awarded to the top 3% of digital marketing companies in India,
                  is committed to boosting brand visibility in the ever-changing
                  online world. We create immersive digital experiences that
                  deeply engage audiences and foster meaningful connections.
                  With a comprehensive array of services, spanning strategic
                  Search Engine Optimization (SEO), cutting-edge Website Design,
                  expert Pay-Per-Click (PPC) Management, captivating Graphic
                  Design, compelling Social Media Marketing (SMM) strategies,
                  and tailored Software Development solutions, we offer
                  comprehensive assistance to help you succeed on the internet.
                </p>
                <p className="customText">
                  Our unwavering dedication to excellence has garnered us
                  recognition as one of the Top SEO Companies in India and the
                  premier firm for Digital Marketing Services, acknowledged by
                  Clutch. Since our inception in 2005, we've remained at the
                  forefront of the digital marketing industry, empowering
                  businesses globally to amplify their digital footprint and
                  achieve remarkable success.
                </p>
                <p className="customText">
                  Embark on this journey with us as we propel brands to
                  unprecedented heights in the digital realm.
                </p>
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="aboutLogo">
                  <Link
                    href="https://www.google.com/partners/agency?id=4328223643"
                    target="_blank"
                  >
                    <img
                      src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                      alt="Google Partner"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="rightAboutOffice shadow">
                <picture
                  srcSet="assets/images/sib-mumbai-office.webp"
                  type="image/webp"
                />
                <img
                  src="assets/images/sib-mumbai-office.jpg"
                  alt="Mumbai Office"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <p className="customText">
                SIB Infotech is a Creative Website Design & Digital Marketing
                Agency in Mumbai & New Delhi, India. We are an award-winning
                performance marketing company near you offering Search Engine
                Optimization (SEO), PPC Management, Graphic Design, Social Media
                Marketing, SEM, SMM, Software Development, Content Marketing,
                Shopify Website designing & Website Development solutions. We
                have been rated as Top SEO Companies in India & Best Firm for
                Digital Marketing Services in India by Clutch.
              </p>
              <p className="customText">
                Since 2005, we have been among the best Digital Marketing
                companies in India and have a track record of empowering
                companies in Australia, the USA, UK, Canada & globally to
                increase their brand's digital online presence. By leveraging
                our expertise in digital marketing services and e-commerce
                website development, along with our adept storytelling and
                design skills, we craft digital experiences that resonate deeply
                with people's interests and captivate their hearts.
              </p>
            </div>
          </div>
          <div className="row mt-3 mt-lg-5">
            <div className="col-lg-7 order-lg-1 order-2 mt-lg-0 mt-4">
              <p className="customText">
                As premier partners of Google, Facebook & Bing, our in-house
                team of passionate professionals boasts talent, creativity,
                technical know-how & dedication makes us the best PPC management
                company in India. Our team specialize in PPC management services
                and have expertise in generating leads using Google Ads, Meta
                Ads & YouTube advertisements at affordable costs. We're
                laser-focused on generating the best ROI and driving tangible
                business growth and success through cutting-edge strategies and
                innovative technologies
              </p>
              <p className="customText">
                At SIB Infotech, collaboration is key. We delve deep to
                understand your unique needs and goals, crafting tailored
                digital marketing plans that achieve your objectives. Our
                commitment to affordability makes our exceptional services
                accessible to all businesses, ensuring you never compromise on
                quality.
              </p>
              <p className="customText">
                To learn more about our comprehensive services and how we can
                contribute to your business growth online,{" "}
                <Link href="/contact-us">
                  <span>Book your NO-COST Consultation today!</span>
                </Link>
              </p>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="rightAboutOffice shadow">
                <picture
                  srcSet="assets/images/sib-delhi-office.webp"
                  type="image/webp"
                />
                <img
                  src="assets/images/sib-delhi-office.jpg"
                  alt="Delhi Office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="rightVission">
                <picture>
                  <source
                    srcSet="assets/images/mission-vision.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/images/mission-vision.jpg"
                    alt="Mission Vision Values"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="leftVission">
                <h4 className="sub_heading fontHeading fontWeight600">
                  <span className="text_red">Our</span> Mission
                </h4>
                <ul className="bulletList mt-4">
                  <li>
                    Empower businesses of all sizes to thrive in the digital
                    landscape through cutting-edge strategies, innovative
                    solutions, and personalized service.
                  </li>
                  <li>
                    Drive tangible results and maximize return on investment for
                    our clients, fueling their digital growth and success.
                  </li>
                </ul>
                <h4 className="sub_heading fontHeading fontWeight600 mt-4 mt-lg-5">
                  <span className="text_red">Our</span> Vision
                </h4>
                <ul className="bulletList mt-4">
                  <li>
                    Become the leading digital marketing agency in India,
                    recognized for our data-driven expertise, human-centered
                    approach, and commitment to client success.
                  </li>
                  <li>
                    Champion inclusivity and accessibility in the digital space,
                    helping businesses of all backgrounds and industries reach
                    their full potential online.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-7">
              <div className="leftVission">
                <h4 className="sub_heading fontHeading fontWeight600">
                  <span className="text_red">Core</span> Values{" "}
                </h4>
                <ul className="bulletList mt-4">
                  <li>
                    <strong className="text_primary">Client-centricity:</strong>{" "}
                    We place your needs and success at the heart of everything
                    we do.
                  </li>
                  <li>
                    <strong className="text_primary">Collaboration:</strong> We
                    work closely with you to create customized solutions that
                    deliver results.
                  </li>
                  <li>
                    <strong className="text_primary">Innovation:</strong> We
                    stay ahead of the curve, embracing new technologies and
                    strategies.
                  </li>
                  <li>
                    <strong className="text_primary">Integrity:</strong> We
                    operate with transparency, honesty, and ethical practices.
                  </li>
                  <li>
                    <strong className="text_primary">Passion:</strong> We are
                    fueled by a genuine desire to help your business thrive
                    online.
                  </li>
                  <li>
                    <strong className="text_primary">Affordability:</strong> We
                    offer high-quality services at accessible prices, empowering
                    businesses of all sizes.
                  </li>
                  <li>
                    <strong className="text_primary">Storytelling:</strong> We
                    craft compelling narratives that resonate with your target
                    audience and drive engagement.
                  </li>
                  <li>
                    <strong className="text_primary">Empowerment:</strong> We
                    equip our clients and team with the knowledge and skills to
                    navigate the complex digital landscape.
                  </li>
                  <li>
                    <strong className="text_primary">Sustainability:</strong> We
                    promote responsible digital practices that minimize
                    environmental impact and ensure long-term growth.
                  </li>
                  <li>
                    <strong className="text_primary">Agility:</strong> We adapt
                    to change quickly and embrace new opportunities to keep you
                    ahead of the competition.
                  </li>
                  <li>
                    <strong className="text_primary">Community:</strong> We
                    collaborate with industry partners and build meaningful
                    connections
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-4">
              <div className="rightVission">
                <picture>
                  <source
                    srcSet="assets/images/core-values.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/core-values.jpg" alt="core Values" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blueBg bottomPadding radiudNone">
        <div className="containerFull">
          <div className="callAction">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="text-white customHeading">Our Team</h2>
                <p className="text-center text-white customText">
                  We are committed to helping our customers to increase their
                  productivity as well as business. We work together with highly
                  qualified professionals at the backend for creating top-notch
                  websites with stylish designs. We are having a strength of
                  highly qualified and experienced professionals to provide
                  expert services to the entire satisfaction of our clients. We
                  are also having specialized professionals for each and
                  categorized assignments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="teamPhoto pt-0">
        <div className="containerFull">
          <div className="teamBlock shadow">
            <h3 className="sub_heading fontWeight700 text-center">Leaders</h3>
            <div className="row mt-lg-3 mt-2 justify-content-center">
              <div className="col-lg-3 col-6 px-lg-4">
                <div className="teamItem">
                  <div className="teamImg">
                    <picture>
                      <source srcSet="assets/images/team/anuj-bajaj-sir.webp" />
                      <img
                        src="assets/images/team/anuj-bajaj-sir.jpg"
                        alt="Anuj Bajaj"
                      />
                    </picture>
                  </div>
                  <div className="teamName">
                    <h3 className="small_heading fontWeight600">Anuj Bajaj</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 px-lg-4">
                <div className="teamItem">
                  <div className="teamImg">
                    <picture>
                      <source srcSet="assets/images/team/radhey-shyam-bajaj-sir.webp" />
                      <img
                        src="assets/images/team/radhey-shyam-bajaj-sir.jpg"
                        alt="Radhey Shyam Bajaj"
                      />
                    </picture>
                  </div>
                  <div className="teamName">
                    <h3 className="small_heading fontWeight600">
                      Radhey Shyam Bajaj
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="sub_heading fontWeight700 text-center mt-lg-5 mt-4">
              Meet Your Web Design and <br className="d-none d-lg-block" />
              Optimization Team, the{" "}
              <span className="text_red">SIB Infotech</span>
            </h3>

            <div className="row mt-lg-4 mt-2 justify-content-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-3 col-6 px-lg-4">
                  <div className="teamItem">
                    <div className="teamImg">
                      <picture>
                        <source srcSet={member.imgSrcSet} />
                        <img src={member.imgSrc} alt={member.alt} />
                      </picture>
                    </div>
                    <div className="teamName">
                      <h3 className="small_heading fontWeight600">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
