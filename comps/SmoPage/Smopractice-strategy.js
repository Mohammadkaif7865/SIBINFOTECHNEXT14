import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = () => {
  const [activeKey, setActiveKey] = useState("");
  const faqData = [
    {
      question: "Consistent Branding Across Platforms ",
      answer: "Establish a strong, recognizable brand identity across social media channels like Facebook, Instagram, LinkedIn, and Twitter, fostering trust and brand awareness."
    },
    {
      question: "High-Quality Content Creation ",
      answer: "Produce engaging, visually appealing, and platform-specific content that captivates your target audience and encourages interaction. From images to videos, our content creation strategy is designed to maximize engagement."
    },
    {
      question: "Targeted Social Media Advertising ",
      answer: "Launch highly effective social media ad campaigns on platforms like Facebook, Instagram, and LinkedIn to precisely target your ideal audience and drive conversions."
    },
    {
      question: "Influencer Collaborations & Partnerships ",
      answer: "Partner with industry influencers to amplify your brand’s reach, enhance credibility, and create authentic content that resonates with your followers."
    },
    {
      question: "Active Audience Engagement ",
      answer: " Foster genuine connections by responding to comments, reviews, and direct messages, improving relationships and building a loyal community around your brand."
    },
    {
      question: "Leverage Trends and Hashtags  ",
      answer: "  Stay relevant and boost discoverability by leveraging trending topics and using strategic hashtags that increase visibility across social media platforms."
    },
    {
      question: "Multi-Platform Social Media Integration ",
      answer: " Ensure cohesive messaging by integrating SMO efforts across multiple platforms, including Facebook, Instagram, LinkedIn, Twitter, YouTube, and more."
    },
    {
      question: "Creative Contests, Giveaways, & Campaign",
      answer: " Engage your audience with exciting contests, giveaways, and creative campaigns that boost interaction and increase your brand’s organic reach. "
    },
   
  ];
  
  
  

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontWeight600   text_red mt-3 fontWeight600">
              Why Use
            </h4>
            <h5 className="fontWeight600 mt-3 small_heading">
            Most Effective SMO Practices & Strategies to Boost Your Social Media Marketing 
            </h5>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0  ps-3">
            <p className="title">
            Ready to elevate your brand’s social media presence? Whether you're an entrepreneur or a marketing pro, mastering <strong>Social Media Optimization (SMO)</strong> is essential for achieving online success. Here’s how our SMO services can help you take your social media marketing to the next level: 
              
               
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 pe-5 order-lg-1 order-2 mt-lg-0 mt-5">
            <div className="d-flex">
              <Image
                className="w-75 h-100 mx-auto"
                src="https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png"
                width={500}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 ">
            {/* <h4 className="brand_build_title fontWeight600  fontHeading2 text_red">
              Brand, Build, and Grow Your Business Today
            </h4> */}

            <div className=" brand_build">
              <Accordion
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
              >
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default BrandBuild;
