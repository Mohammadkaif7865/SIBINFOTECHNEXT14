import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg_gray">
      <div className="containerFull">
        <div className=" row">
          <div className="col-lg-6 mt-5 mt-lg-0 px-4 px-lg-0 order-2 order-lg-1">
            <div className="w-100 h-100 img_benifits ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="/assets/images/gd-services/gd-img.jpg"
                alt=""
                width="1200"
                height="600"
              />
            </div>
          </div>
          <div class="col-lg-6  order-1 order-lg-2 ps-lg-5">
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

            <ul className="list_benifits_lseo mt-3 fontWeight700 ">
              <li>
                <span className="text-dark" >First Impressions </span > - <span className="text_primary">First Impression Matters:
                Grab Attention Right Away.</span>
              </li>
              <li>
                <span className="text-dark" >
                  Brand Awareness </span > - <span className="text_primary">Build Brand Recognition through Consistency.</span> 
                
              </li>
              <li>
                <span className="text-dark" >
                  Efficient Communication </span > - <span className="text_primary">Simplify Complex Messages with
                  Visual Storytelling.</span> 
                
              </li>
              <li>
                <span className="text-dark" >
                  Trust and Credibility </span > -  <span className="text_primary">Establish reliability with polished
                  and cohesive designs.</span>
                
              </li>
              <li>
                <span className="text-dark" >
                  Professional Image </span > - <span className="text_primary">Enhance brand perception with
                  high-quality visuals.</span>
                
              </li>
              <li>
                <span className="text-dark" >
                  Higher Conversion Rate </span > - <span className="text_primary">Influence decisions with persuasive
                  and engaging graphics.</span>
                
              </li>
              <li>
                <span className="text-dark" >
                  Creativity Kills Competition </span > - <span className="text_primary">Stand out with unique and
                  innovative designs.</span>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
