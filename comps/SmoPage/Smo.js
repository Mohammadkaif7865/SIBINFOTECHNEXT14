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
      `In today’s digital landscape, <strong>Social Media Optimization (SMO) </strong>is more than just regular posting — it’s about building strong meaningful connections, increasing brand awareness, and driving organic traffic. With billions of users actively engaging on platforms like Facebook, Instagram, LinkedIn, and more, social media is one of the most powerful tools for brand building and customer engagement, and having a strong social media presence is essential for any business.`,
    
      `At SIB Infotech, we craft customized <strong>SMO strategies </strong>to strengthen your brand’s voice, ensuring that every post, share, and interaction contributes to measurable growth across all major social platforms.`,
    
      `Partner with SIB Infotech — your trusted <strong>Social Media Optimization (SMO)</strong> agency — and start building a stronger, more influential digital presence today!`
    ],
    
    
  image1: {
    src: "/assets/images/smo-about-1.jpg",
  },
  image2: {
    src: "/assets/images/smo-about-2.jpg",
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
