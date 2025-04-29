import React from "react";
import Accordion from "react-bootstrap/Accordion";

const PPcServices = () => {
  return (
    <section className="bg-light">
      <div className="containerFull ">
        <div className="row ">
          
          <div className="col-lg-4">
            <h3 className="heading">
              <span className="text_red">Our PPC Management</span> Services in India
            </h3>
            <p className="customText mt-3">
              We offer expert Pay-Per-Click advertising services to help you reach your target audience quickly and cost-effectively. From Google to Yandex, we’ve got you covered.
            </p>
          </div>

         
          <div className="col-lg-8">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Google Ads Management</Accordion.Header>
                <Accordion.Body>
                  As a Google Premier Partner, we create and manage campaigns across Search, Display, YouTube, and more.
                  <ul className="mt-2">
                    <li><strong>Search Ads:</strong> Capture leads with high-intent keywords.</li>
                    <li><strong>Display Ads:</strong> Build brand awareness with visual ads.</li>
                    <li><strong>Video Ads:</strong> Reach your audience via YouTube.</li>
                    <li><strong>Shopping Ads:</strong> Showcase products directly in Google results.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Bing Ads Management</Accordion.Header>
                <Accordion.Body>
                While Google dominates search, Bing Ads offers access to a different, often more affordable audience. We help businesses expand their reach by optimizing Bing Ads campaigns for better ROI. 
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Social Media Advertising</Accordion.Header>
                <Accordion.Body>
                PPC isn’t limited to search engines. Our team also manages ads on social media platforms, including: 
                  <ul className="mt-2">
                    <li><strong>Facebook & Instagram:</strong> Target users by interests and behavior.</li>
                    <li><strong>LinkedIn:</strong> Reach decision-makers for B2B services.</li>
                    <li><strong>Twitter & Pinterest:</strong> Connect with niche audiences.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Yandex Ads Management</Accordion.Header>
                <Accordion.Body>
                If your business is targeting the Russian or CIS markets, we manage Yandex ads to reach a large, Russian-speaking audience. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPcServices;
