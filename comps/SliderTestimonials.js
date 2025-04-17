import Image from "next/image";
import React from "react";
import Testimonials from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderTestimonials() {
  const testimonials = [
    {
      userImg: "/assets/images/timothy-scafaria.jpeg",
      heading: "Platform Development for Ed-Tech Marketplace",
      content:
        "The platform has just launched. but some of the company's old clients have already expressed their positive feedback on the new website. The company appreciates how the SIB Infotech team showed they cared for the project through their open and honest communication especially when suggesting ideas.",
      userName: "Timothy Scafaria",
      userTitle: "Founder, remoteUprep, LLC",
      reviewSource: "Clutch Logo",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
    {
      userImg: "/assets/images/rupesh-maniar.jpg",
      heading: "Website Development Agency Services Mumbai",
      content:
        "SIB Infotech has designed website for our company. We are very happy with outcome. They are not only professional but also putting their heart into work. We would have suggested changes many times added many products all they have done with smiling face. We will always refer them for quality work and perfect price.",
      userName: "Rupesh Maniar",
      userTitle: "Real Value Finloan Services Pvt. Ltd.",
      reviewSource: "Google Logo",
      reviewSourceLogo: "/assets/images/google-logo.png",
    },
    // {
    //   heading: "Website Development Agency Services Mumbai",
    //   content:
    //     "SIB Infotech is well managed company who treats each employee very politely. Its great being part of it. Never makes anybody feel burdened and provides friendly atmosphere. Highly professional company to work in. It is one of the best website development company. It is pleasure to work and write content for them.",
    //   userName: "Chetna Goel",
    //   reviewSource: "Google Logo",
    //   reviewSourceLogo: "/assets/images/google-logo.png",
    // },
    {
      userImg: "/assets/images/tima-elhajj.jpeg",
      heading: "Website Development for Media & Consulting Company",
      content:
        "The client loved the platform that the SIB Infotech team developed for them, especially the calculator function that was included. The company appreciated the team's high level of professionalism, communication, and care on the project. They are happy and willing to work with the team again.",
      userName: "Tima Elhajj",
      userTitle: "CEO & Founder, Tima Media",
      reviewSource: "Clutch Logo",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render the component
  return (
    <div>
      <Testimonials className="testimonialSlider" {...settings}>
        {/* Mapping over the testimonials array */}
        {testimonials.map((testimonial, index) => (
          <div className="itemTestimonial" key={index}>
            <div className="inneritemTestimonial position-relative shadow">
              <div className="glossyBorder4"></div>
              <div className="glossyBorder5"></div>
              <div className="glossyBorder6"></div>
              <div className="testimonialItemHeader">
                <h3 className="meduim_heading fontWeight700 fontHeading">
                  {testimonial.heading}
                </h3>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonialFooter">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="usertestimonial d-flex justify-content-between align-items-center">
                    <div
                      className="rounded-circle   overflow-hidden position-relative      me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#c3d6fc",
                        border: "1px solid #c3d6fc",
                      }}
                    >
                      {testimonial?.userImg ? (
                        <Image
                          fill
                          // width={100}
                          // height={100}
                          quality={100}
                          className=" object-fit-cover"
                          src={testimonial?.userImg}
                          alt="User Icon"
                        />
                      ) : (
                        <Image
                          width={10}
                          height={10}
                          quality={100}
                          className="b  p-3 object-fit-contain   "
                          src={"/assets/images/icons/user.png"}
                          alt="User Icon"
                        />
                      )}
                    </div>
                    <div className="nameUser ">
                      <h4 className="title   fontWeight500">
                        {testimonial.userName}
                      </h4>
                      {testimonial.userTitle && <p>{testimonial.userTitle}</p>}
                    </div>
                  </div>
                  <div className="reviewSource mt-3   w-100">
                    <p className="fontWeight500 text_red  text-uppercase">
                      Reviewed From
                    </p>
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="  h-auto"
                      src={testimonial.reviewSourceLogo}
                      alt={testimonial.reviewSource}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="qouteIcon">
                <Image
                  width={100}
                  height={100}
                  quality={100}
                  className="w-100 h-auto"
                  src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/left-quote.png"
                  alt="Quote Icon"
                />
              </div> */}
            </div>
          </div>
        ))}
      </Testimonials>
    </div>
  );
}
