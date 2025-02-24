import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  const benefitsList = [
    {
      title: "First Impressions",
      description: "First Impression Matters: Grab Attention Right Away.",
      icon: "impression.png", // Replace with actual URL
    },
    {
      title: "Brand Awareness",
      description: "Build Brand Recognition through Consistency.",
      icon: "video-marketing.png",
    },
    {
      title: "Efficient Communication",
      description: "Simplify Complex Messages with Visual Storytelling.",
      icon: "communication.png",
    },
    {
      title: "Trust and Credibility",
      description: "Establish reliability with polished and cohesive designs.",
      icon: "reliability.png",
    },
    {
      title: "Professional Image",
      description: "Enhance brand perception with high-quality visuals.",
      icon: "public.png",
    },
    {
      title: "Higher Conversion Rate",
      description: "Influence decisions with persuasive and engaging graphics.",
      icon: "optimization.png",
    },
    {
      title: "Creativity Kills Competition",
      description: "Stand out with unique and innovative designs.",
      icon: "creativity.png",
    },
    {
      title: "Creativity Kills Competition",
      description: "Stand out with unique and innovative designs.",
      icon: "creativity.png",
    },
  ];

  return (
    <section className="bg_gray">
      <div className="containerFull">
        <div className=" row">
          {/* <div className="col-lg-6 mt-5 mt-lg-0 px-4 px-lg-0 order-2 order-lg-1">
            <div className="w-100 h-100 img_benifits ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="/assets/images/gd-services/gd-img.jpg"
                alt=""
                width="1200"
                height="600"
              />
            </div>
          </div> */}
          <div class="col-lg-12  order-1 order-lg-2">
            <h4 className="sub_heading fontHeading fontWeight700">
              Why
              <span className="text_red"> Graphic Design </span> is Important
              for your Brand?
            </h4>

            <p className="fontWeight700 title mt-4">
              We Understand{" "}
              <span className="text_red">
                “A picture is worth a thousand words”
              </span>
            </p>
            <p className="mt-3">
              People hardly ever have time to read in today's hectic lives.
              Graphics are the most effective approach to communicate ideas
              quickly. We recognizes your concept and transforms it into an
              image that your target audience can identify with.
            </p>

            <ul className=" mt-5  gd_benifits_grid">
              {benefitsList.map((benefit, index) => (
                <li key={index} className=" item p-3">
                  <div className="d-flex justify-content-center">

                  <Image
                     src={`/assets/images/gd-services/${benefit.icon}`}
                    alt={benefit.title}
                    className=""
                    width="50"
                    height="50"
                  />
                  </div>
                  <p className="text_primary text-center mt-3 fontWeight600">{benefit.title}</p>
                  <p className=" text-center mt-2 discription">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
