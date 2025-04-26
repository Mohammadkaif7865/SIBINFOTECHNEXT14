import Image from "next/image";
import Link from "next/link";
import React from "react";

// Data 
const about3Data = {
  sectionId: "about",
  mainHeading: "Welcome to SIB Infotech",

  subHeading:
    'Boost Your Brand’s Presence <span class="text_red"> with Expert SMO Services</span>',

  contentParagraphs: [
    `<strong>SIB Infotech</strong> is a <strong>leading digital marketing agency in India</strong>, with offices in Mumbai and New Delhi. As a Google Premier Partner, we specialize in <strong>SEO services, PPC management, social media marketing, website design, graphic design, and branding. Our expertise helps businesses in India, the US, the UK, Canada, Australia</strong>, and beyond boost online visibility, engagement, and conversions while delivering measurable ROI.`,

    `<b>With 20+ years of experience</b>, we leverage AI-driven marketing strategies, data analytics, and result-oriented campaigns to maximize growth. Whether you're a startup or an enterprise, our customized digital marketing solutions ensure higher rankings, increased traffic, and improved lead generation to help you stay ahead of the competition.`,

    `In today’s digital landscape, <strong>Social Media Optimization (SMO)</strong> is more than just posting – it’s about building meaningful connections, boosting brand awareness, and driving organic traffic. At SIB Infotech, we craft customized SMO strategies to strengthen your brand’s voice across all major social platforms.`,

    `In today’s digital world, having a strong presence on social media is essential for any business. At SIB Infotech, we offer top-notch <strong>Social Media Optimization (SMO)</strong> services that enhance your brand’s visibility, engage your audience, and drive more traffic to your website. Our tailored SMO strategies are designed to help you leverage the power of social platforms to achieve your business goals.`,
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

// Component 
const Abbout3 = () => {
  const {
    sectionId,
    mainHeading,
    subHeading,
    contentParagraphs,
    image1,
    image2,
    buttonText,
    buttonLink,
    phoneNumber,
    phoneDisplay,
    phoneHelpText,
    callIcon,
  } = about3Data;

  return (
    <section className="about3_section" id={sectionId}>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 mt-4 mt-lg-0 order-lg-1 order-2">
            <div className="about3_img_box position-relative">
              <Image
                src={image1.src}
                alt=""
                className="img-fluid img-about-3-1 shadow"
                width={370}
                height={500}
              />
              <Image
                src={image2.src}
                alt=""
                className="img-fluid img-about-3-2 shadow"
                width={400}
                height={500}
              />
            </div>
          </div>
          <div className="col-lg-8 order-lg-2 order-1">
            <h5 className="fontWeight600 text-center text-lg-start">
              {mainHeading}
            </h5>
            <h4
              className="mt-4 fontHeading2 large_heading2 fontWeight600"
              dangerouslySetInnerHTML={{ __html: subHeading }}
            />
            <div className="about3_text_box_main">
              <div className="about3_text_box mt-2 mt-lg-5">
                {contentParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className={idx > 0 ? "mt-2" : ""}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
              <div className="about3_text_box_btn mt-4 d-flex gap-3 gap-lg-5 align-items-center">
                <Link className="btnHomeBanner about3" href={buttonLink}>
                  {buttonText}
                  <span className="bg-black">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </Link>
                <Link className="aboutBtn" href={`tel:${phoneNumber}`}>
                  <div className="about3_btn_box d-flex">
                    <div className="icon">
                      <Image src={callIcon} alt="" width={40} height={40} />
                    </div>
                    <div>
                      <p>{phoneHelpText}</p>
                      <h5 className="fontWeight600">{phoneDisplay}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abbout3;
