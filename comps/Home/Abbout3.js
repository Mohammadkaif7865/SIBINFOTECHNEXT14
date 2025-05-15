import Image from "next/image";
import Link from "next/link";
import React from "react";



// Component part
const Abbout3 = (about3Data) => {
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
            <p className="fontWeight600 small_heading text-center text-lg-start">
              {mainHeading}
            </p>
            <h2
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
                      <p className="fontWeight700 title">{phoneDisplay}</p>
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
