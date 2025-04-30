import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const BrandBuild = () => {
  const [activeKey, setActiveKey] = useState();
  const faqData = [
    {
      question: "Keyword Relevance",
      answer: "Choosing the right keywords is critical. Your keywords must be highly relevant to your product, service, and target audience. Using specific, well-researched keywords ensures that your ads appear in front of the right people at the right time."
    },
    {
      question: "High-Quality Ad Copy and Creatives",
      answer: "Strong, compelling ad copy with a clear call-to-action (CTA) and eye-catching creatives can significantly improve click-through rates (CTR). Your ads should clearly communicate the value proposition and encourage users to take action."
    },
    {
      question: "Maintaining a Good Quality Score",
      answer: "Search engines like Google assign a Quality Score based on the relevance of your ads, keywords, and landing pages. A higher Quality Score leads to lower costs per click (CPC) and better ad placements."
    },
    {
      question: "Optimized Landing Pages",
      answer: "Your landing page experience should be seamless, fast, and aligned with your ad messaging. High-quality, user-friendly landing pages with clear CTAs improve conversion rates and enhance your Quality Score."
    },
    {
      question: "Targeted Audience Segmentation",
      answer: "Defining and targeting the right audience is crucial. Use demographics, interests, geographic locations, and device targeting to ensure your ads reach users most likely to convert."
    },
    
    {
      question: "A/B Testing and Continuous Optimization",
      answer: "Regularly test different versions of your ads, headlines, images, and landing pages. A/B testing helps identify what works best and allows you to optimize campaigns for better results."
    },
    {
      question: "Use of Ad Extensions",
      answer: "Adding ad extensions like site links, callouts, structured snippets, and call extensions can improve the visibility of your ads and provide users with more reasons to click."
    },
    {
      question: "Conversion Tracking and Analytics",
      answer: "Setting up proper conversion tracking allows you to measure success accurately. Analyzing campaign data regularly helps you identify trends, optimize underperforming ads, and maximize ROI."
    },
    
    {
      question: "Budget Management",
      answer: "Allocating budgets smartly across campaigns, monitoring spending, and adjusting bids according to performance is critical to ensure you’re getting the most value for your investment."
    },
    
  ];
  
  
  

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="heading fontWeight600 fontHeading2 text_red">
            Key Factors for Running a Highly Successful PPC Campaign 
            </h4>
           
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0  ps-3">
            <p className="title">
            Running a<strong>Pay-Per-Click (PPC)</strong>  campaign isn’t just about creating ads — it's about building a smart, targeted strategy that maximizes ROI. A successful PPC campaign requires careful planning, continuous monitoring, and smart optimization techniques. Focusing on the right elements can significantly boost your click-through rates, lower your costs, and drive more qualified leads to your business. Here are the essential factors that determine PPC success: 
               
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
