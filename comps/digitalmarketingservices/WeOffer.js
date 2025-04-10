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
      style={{
        color: "#212529",
      }}
    >
      {title}
    </h4>
    <p className="mt-3">{content}</p>
  </div>
);

const WeOffer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Search Engine Optimization",
      content:
        "SEO helps your website get noticed on search engines like Google. By making changes to your website's content, layout, and technical stuff, you can make it easier for people to find you when they search for things related to your business. When your website shows up higher on search results, more people are likely to visit it, which means more potential customers for you!",
    },
    {
      title: "Content Marketing",
      content:
        "Content marketing involves creating and distributing valuable, relevant, and consistent content to attract and engage a target audience. Quality content helps build brand authority, drive organic traffic, and nurture relationships with potential customers. It encompasses blog posts, articles, videos, infographics, eBooks, and more.",
    },
    {
      title: "Social Media Marketing",
      content:
        "SMM focuses on leveraging social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and others to connect with the target audience, increase brand awareness, drive website traffic, and generate leads or sales. It involves both organic (unpaid) and paid strategies, including content creation, community management, and advertising.",
    },
    {
      title: "Email Marketing",
      content:
        "Email marketing remains a powerful tool for nurturing leads, maintaining customer relationships, and driving conversions. It involves sending targeted messages or newsletters to a subscriber list, delivering personalized content, promotions, updates, and recommendations. Email marketing platforms enable automation, segmentation, and tracking of campaign performance.",
    },
    {
      title: "Pay-Per-Click Advertising",
      content:
        "PPC advertising enables businesses to place targeted ads on search engines (like Google Ads) or social media platforms (like Facebook Ads) and pay a fee each time their ad is clicked. It offers immediate visibility, precise targeting options, and measurable results, making it effective for driving website traffic, generating leads, and increasing sales.",
    },
    {
      title: "Affiliate Marketing",
      content:
        "Affiliate marketing is a digital marketing service where businesses partner with affiliates to promote their products or services. Affiliates earn commissions for driving sales or leads through their marketing efforts, making it a cost-effective strategy for businesses to expand their reach and for affiliates to earn income.",
    },
    {
      title: "Influencer Marketing",
      content:
        "Influencer marketing is a digital marketing strategy where brands collaborate with individuals who have a significant following on social media to promote their products or services. Influencers create authentic content that resonates with their audience, driving engagement and increasing brand visibility. It's an effective way for brands to reach new customers and build trust through credible endorsements.",
    },
    {
      title: "Social Media Optimization",
      content:
        "Social Media Optimization (SMO) is a digital marketing approach that enhances a brand's visibility and engagement on social media platforms through organic strategies. This involves optimizing profiles, creating valuable content, engaging with followers, using relevant hashtags, and analyzing performance metrics. SMO increases brand visibility, engagement, and loyalty in a cost-effective manner.",
    },
  ];

  return (
    <section className="bgSeo" id="services">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer">
              <h5 className="small_heading fontWeight700 fontHeading text_red">
                Everything in Digital Marketing served under one roof
              </h5>
              <h4 className="sub_heading text-white fontWeight700  mt-3 fontHeading">
                We offer Best Digital Marketing Services in India
              </h4>
            </div>
          </div>
        </div>
        <div className="seoMana ">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  {/* Map over sidebar items */}
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
            <div className="col-lg-8 we_offer  ">
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

export default WeOffer;
