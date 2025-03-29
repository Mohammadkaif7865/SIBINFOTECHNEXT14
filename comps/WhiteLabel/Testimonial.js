import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderTestimonials() {
  
  const testimonials = [
    {
      userImg: "/assets/images/timothy-scafaria.jpeg",
      heading: "Platform Development for Ed-Tech Marketplace",
      content:
        "The platform has just launched, but some of the company's old clients have already expressed their positive feedback on the new website...",
      userName: "Timothy Scafaria",
      userTitle: "Founder, remoteUprep, LLC",
      reviewSource: "Clutch Logo",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
    {
      userImg: "/assets/images/rupesh-maniar.jpg",
      heading: "Website Development Agency Services Mumbai",
      content:
        "SIB Infotech has designed our website. We are very happy with the outcome...",
      userName: "Rupesh Maniar",
      userTitle: "Real Value Finloan Services Pvt. Ltd.",
      reviewSource: "Google Logo",
      reviewSourceLogo: "/assets/images/google-logo.png",
    },
    {
      userImg: "/assets/images/tima-elhajj.jpeg",
      heading: "Website Development for Media & Consulting Company",
      content:
        "The client loved the platform developed by SIB Infotech, especially the calculator function...",
      userName: "Tima Elhajj",
      userTitle: "CEO & Founder, Tima Media",
      reviewSource: "Clutch Logo",
      reviewSourceLogo: "/assets/images/clutch-logo.png",
    },
  ];

  const settings = {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-content shadow">
              <h3 className="heading">{testimonial.heading}</h3>
              <p>{testimonial.content}</p>
              <div className="testimonial-footer">
                <div className="user-info">
                  <div
                    className="user-image-wrapper"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#c3d6fc",
                      border: "1px solid #c3d6fc",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={testimonial.userImg}
                      alt={testimonial.userName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="user-details">
                    <h4>{testimonial.userName}</h4>
                    {testimonial.userTitle && <p>{testimonial.userTitle}</p>}
                  </div>
                </div>
                <div className="review-source">
                  <p>Reviewed From</p>
                  <Image
                    src={testimonial.reviewSourceLogo}
                    alt={testimonial.reviewSource}
                    width={80}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
