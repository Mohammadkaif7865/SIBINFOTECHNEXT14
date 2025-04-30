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
      <div className="mt-4 d-lg-none" style={{ color: "#000" }}>
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
    <div className="mt-3" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);


const SidebarTabs = ({ heading, subheading, description, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bgSeo" id="services">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer">
              {heading && (
                <h5 className="small_heading fontWeight700 fontHeading text_red">
                  {heading}
                </h5>
              )}
              {subheading && (
                <h4 className="sub_heading text-white fontWeight700 mt-3 fontHeading">
                  {subheading}
                </h4>
              )}
              {description && (
                <p className="text-white mt-2">{description}</p>
              )}
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
                      onClick={setActiveTab}
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
                <TabContent
                  id={`section${activeTab + 1}`}
                  title={tabs[activeTab].title}
                  content={tabs[activeTab].content}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarTabs;
