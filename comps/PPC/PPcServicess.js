import React, { useState } from "react";

const SidebarItem = ({ active, onClick, index, title, content }) => (
  <li className={active ? "active" : ""} onClick={() => onClick(index)}>
    <div className="d-flex align-items-center">
      <h4 className="sub_heading me-3 fontHeading fontWeight600">
        {index < 9 ? `0${index + 1}` : index + 1}
      </h4>
      <h3 className="small_heading fontHeading fontWeight600">{title}</h3>
    </div>
    {active && (
      <div
        className="mt-4 d-lg-none"
        style={{
          color: "#000",
        }}
      >
        <TabContent
          id={`section${index + 1}`}
          title={title}
          content={content}
        />
      </div>
    )}
  </li>
);

const TabContent = ({ id, title, content }) => (
  <div className="itemSidebar scroll" id={id}>
    <h4
      className="sub_heading fontWeight700 fontHeading"
      style={{ color: "#212529" }}
    >
      {title}
    </h4>
    <div
      className="mt-3"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

const PPcServicess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Google Ads Management",
      content: `
        <p>As a Google Premier Partner, we specialize in creating and managing Google Ads campaigns, ensuring your ads appear on Google Search, Display Network, YouTube, and beyond. We help you achieve a high-quality score for maximum reach at the lowest cost per click.</p>
        <ul>
          <li><strong>Search Ads:</strong> Target high-intent keywords to capture leads actively looking for your offerings.</li>
          <li><strong>Display Ads:</strong> Build brand awareness with visually engaging ads across Google’s network of websites.</li>
          <li><strong>Video Ads:</strong> Leverage YouTube’s vast user base to connect with your audience through video.</li>
          <li><strong>Shopping Ads:</strong> Boost e-commerce sales by showcasing your products directly on Google search results.</li>
        </ul>
      `
    },
    {
      title: "Bing Ads Management",
      content: `
        <p>While Google dominates search, Bing Ads offers access to a different, often more affordable audience. We help businesses expand their reach by optimizing Bing Ads campaigns for better ROI.</p>
      `
    },
    {
      title: "Social Media Advertising",
      content: `
        <p>PPC isn’t limited to search engines. Our team also manages ads on social media platforms, including:</p>
        <ul>
          <li><strong>Facebook & Instagram Ads:</strong> Connect with highly targeted audiences based on interests, behaviors, and demographics.</li>
          <li><strong>LinkedIn Ads:</strong> Perfect for B2B businesses, LinkedIn Ads help you reach decision-makers in specific industries.</li>
          <li><strong>Twitter & Pinterest Ads:</strong> Engage with niche audiences through targeted advertising on these platforms.</li>
        </ul>
      `
    },
    {
      title: "Yandex Ads Management",
      content: `
        <p>If your business is targeting the Russian or CIS markets, we manage Yandex ads to reach a large, Russian-speaking audience.</p>
      `
    },
    {
      title: "Amazon Ads",
      content: `
        <p>We manage and optimize Amazon advertising campaigns to drive product visibility and sales.</p>
        <ul>
          <li>Keyword targeting</li>
          <li>Product display ads</li>
          <li>Sponsored brand campaigns</li>
        </ul>
        <p>We help your products reach potential customers at the point of purchase.</p>
      `
    }
  ];

  return (
    <section className="bgSeo" id="services">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer">
              <h5 className="small_heading fontWeight700 fontHeading text_red">
                Our PPC Management Services in India
              </h5>
              <h4 className="sub_heading text-white fontWeight700 mt-3 fontHeading">
                We offer Best PPC Marketing Services in India
              </h4>
            </div>
          </div>
        </div>
        <div className="seoMana">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  {tabs.map((tab, index) => (
                    <SidebarItem
                      key={index}
                      active={activeTab === index}
                      onClick={handleTabClick}
                      index={index}
                      title={tab.title}
                      content={tab.content}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-8 we_offer">
              <div className="rightMain stickyRight">
                {tabs.map((tab, index) =>
                  activeTab === index ? (
                    <TabContent
                      key={index}
                      id={`section${index + 1}`}
                      title={tab.title}
                      content={tab.content}
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPcServicess;
