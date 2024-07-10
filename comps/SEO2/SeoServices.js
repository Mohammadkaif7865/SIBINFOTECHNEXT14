import Link from "next/link";
import React, { useState } from "react";

const SeoServices = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between w-100 ">
              <h4 className="sub_heading text-white fontWeight700 fontHeading">
                We Offer Best SEO Services in India
              </h4>
              <Link className="btnAction d-none d-lg-block" href="/contact-us">
                Connect With SEO Expert
              </Link>
            </div>
          </div>
        </div>
        <div className="seoMana">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  <li
                    className={activeTab === "section1" ? "active" : ""}
                    onClick={() => handleTabClick("section1")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        01
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        ON Page SEO 
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section2" ? "active" : ""}
                    onClick={() => handleTabClick("section2")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        02
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        OFF Page SEO 
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section3" ? "active" : ""}
                    onClick={() => handleTabClick("section3")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        03
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Local SEO 
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section4" ? "active" : ""}
                    onClick={() => handleTabClick("section4")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        04
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Technical SEO 
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section5" ? "active" : ""}
                    onClick={() => handleTabClick("section5")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        05
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        E-Commerce SEO 
                      </h3>
                    </div>
                  </li>
                  <li
                    className={activeTab === "section6" ? "active" : ""}
                    onClick={() => handleTabClick("section6")}
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="sub_heading me-3 fontHeading fontWeight600">
                        06
                      </h4>
                      <h3 className="small_heading fontHeading fontWeight600">
                        Mobile SEO 
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rightMain stickyRight">
                {activeTab === "section1" && (
                  <div className="itemSidebar scroll" id="section1">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      ON Page SEO Services
                    </h4>
                    <p className="mt-3">
                      On-page SEO is the foundation of any successful SEO
                      strategy. At SIB Infotech, we specialize in providing
                      comprehensive{" "}
                      <Link href="/on-page-seo-services">
                        <span>on-page SEO services</span>
                      </Link>{" "}
                      that help businesses achieve higher search engine
                      rankings, increased traffic, and improved user engagement.
                    </p>
                    <p className="mt-2">
                      On-page SEO is the sub-category that is useful in
                      optimizing the on-page contents of your website which
                      boosts your website ranking higher on search engines. It
                      focuses on website tools like structure, content, and
                      appearance. It includes the optimization of HTML tags and
                      images on the website of your brand.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="listItems">
                          <li>Extensive Keyword Research</li>
                          <li>Organic CTR Optimization</li>
                          <li>Content Optimization</li>
                          <li>Internal Linking Improvements</li>
                          <li>Local Schema Markup</li>
                          <li>Technical Code Audit Remediation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "section2" && (
                  <div className="itemSidebar scroll" id="section2">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      OFF Page SEO Services
                    </h4>
                    <p className="mt-3">
                      Off-page SEO is activities that are performed after the
                      websites goes live.{" "}
                      <Link href="/off-page-seo-services">
                        <span>Off-page SEO Service</span>
                      </Link>{" "}
                      deals with the external links that direct traffic to your
                      websites organically, also known as 'backlinks' This
                      category deals with regulating the backlinks on other
                      publisher's pages including blogs, which leads to building
                      a reliable spot on the search engine and the rankings are
                      set to the sky.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="listItems">
                          <li>Domain Authority Improvement</li>
                          <li>Hyper-Local Link Building</li>
                          <li>Local Listing Management</li>
                          <li>Google My Business Profile</li>
                          <li>Bing Local & Apple Maps</li>
                          <li>Competitor Profile Targeting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "section3" && (
                  <div className="itemSidebar scroll" id="section3">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Local SEO Services
                    </h4>
                    <p className="mt-3">
                      Put your business on the local map with our tailored{" "}
                      <Link href="/local-seo-services">
                        <span>Local SEO services</span>
                      </Link>
                      . We specialize in optimizing your online presence to
                      attract local customers. From optimizing Google My
                      Business profiles to ensuring accurate business
                      information across directories, we ensure that your
                      business is easily discoverable in local searches.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="listItems">
                          <li>Google My Business Post</li>
                          <li>Google My Business Audit Report</li>
                          <li>Geo Tagging Image</li>
                          <li>NAP Citation</li>
                          <li>Map Citation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "section4" && (
                  <div className="itemSidebar scroll" id="section4">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Technical SEO Services
                    </h4>
                    <p className="mt-3">
                      <Link href="/on-page-seo-services">
                        <span>Technical SEO</span>
                      </Link>{" "}
                      focuses on the website's architecture and user interface
                      that is the technical parameters that directly affect the
                      visibility. It manages the technical set up of the website
                      that is the code. Most search engines prioritize the
                      website's code when ranking it for search engines.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="listItems">
                          <li>Canonical Tag Management</li>
                          <li>Maintain Sitemap HTML & XML</li>
                          <li>Structure Data (Schema Mark-up)</li>
                          <li>Redirection 301 & 302</li>
                          <li>Site Structure Management</li>
                          <li>Server Error 5XX</li>
                          <li>Custom Error 404</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "section5" && (
                  <div className="itemSidebar scroll" id="section5">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      E-Commerce SEO Services
                    </h4>
                    <p className="mt-3">
                      Fuel your online store's success with our{" "}
                      <Link href="/e-commerce-seo-services">
                        <span>E-Commerce SEO services</span>
                      </Link>
                      . We optimize product visibility, streamline the shopping
                      experience, and boost your sales. Elevate your digital
                      presence and make your products stand out in the
                      competitive online marketplace with our tailored
                      solutions. Your success is our focus in the world of
                      e-commerce.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="listItems">
                          <li>Performing Keyword research</li>
                          <li>Improving Site Structure</li>
                          <li>Optimizing for ON-Page SEO Elements</li>
                          <li>Create Quality Content</li>
                          <li>High Quality Link Building</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "section6" && (
                  <div className="itemSidebar scroll" id="section6">
                    <h4 className="sub_heading fontWeight700 fontHeading">
                      Mobile SEO Services
                    </h4>
                    <p className="mt-3">
                      Mobile SEO is based on its name, which is meant for mobile
                      devices. At present more than 60% of Google searches are
                      done on mobile phones. This{" "}
                      <Link href="/mobile-seo-services">
                        <span>Mobile SEO service</span>
                      </Link>{" "}
                      optimizes your website on phones and makes it
                      mobile-friendly
                    </p>
                    <div className="row">
                      <div className="col-lg-7">
                        <ul className="listItems">
                          <li>Mobile First Index</li>
                          <li>
                            Implement a Mobile Friendly Website Consignment
                          </li>
                          <li>Optimize Meta Tiles & Descriptions</li>
                          <li>Optimize images for Mobile Devices</li>
                          <li>Optimize Mobile Website Speed</li>
                          <li>Improve Mobile User Experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoServices;

// import Link from "next/link";
// import React, { useState } from "react";

// const SeoServices = () => {
//   const [activeTab, setActiveTab] = useState("section1");

//   const tabData = [
//     {
//       id: "section1",
//       title: "ON Page SEO",
//       content: (
//         <>
//           <p className="mt-3">
//             On-page SEO is the foundation of any successful SEO strategy. At SIB
//             Infotech, we specialize in providing comprehensive{" "}
//             <Link href="/on-page-seo-services">
//               <span>on-page SEO services</span>
//             </Link>{" "}
//             that help businesses achieve higher search engine rankings,
//             increased traffic, and improved user engagement.
//           </p>
//           <p className="mt-2">
//             On-page SEO is the sub-category that is useful in optimizing the
//             on-page contents of your website which boosts your website ranking
//             higher on search engines. It focuses on website tools like
//             structure, content, and appearance. It includes the optimization of
//             HTML tags and images on the website of your brand.
//           </p>
//           <div className="row">
//             <div className="col-lg-6">
//               <ul className="listItems">
//                 <li>Extensive Keyword Research</li>
//                 <li>Organic CTR Optimization</li>
//                 <li>Content Optimization</li>
//                 <li>Internal Linking Improvements</li>
//                 <li>Local Schema Markup</li>
//                 <li>Technical Code Audit Remediation</li>
//               </ul>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "section2",
//       title: "OFF Page SEO",
//       content: (
//         <>
//           <p className="mt-3">
//             Off-page SEO is activities that are performed after the websites
//             goes live.{" "}
//             <Link href="/off-page-seo-services">
//               <span>Off-page SEO Service</span>
//             </Link>{" "}
//             deals with the external links that direct traffic to your websites
//             organically, also known as 'backlinks' This category deals with
//             regulating the backlinks on other publisher's pages including blogs,
//             which leads to building a reliable spot on the search engine and the
//             rankings are set to the sky.
//           </p>
//           <div className="row">
//             <div className="col-lg-6">
//               <ul className="listItems">
//                 <li>Domain Authority Improvement</li>
//                 <li>Hyper-Local Link Building</li>
//                 <li>Local Listing Management</li>
//                 <li>Google My Business Profile</li>
//                 <li>Bing Local & Apple Maps</li>
//                 <li>Competitor Profile Targeting</li>
//               </ul>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     // Add similar objects for other tabs
//   ];

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   const activeTabData = tabData.filter((tab) => tab.id === activeTab);

//   return (
//     <section className="bgSeo">
//       <div className="containerFull">
//         <div className="servicesBlock">
//           <div className="d-flex justify-content-between align-items-center flex-wrap">
//             <div className="leftSer">
//               <h4 className="sub_heading text-white fontWeight700 fontHeading">
//                 We Offer Best SEO Services in India
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="seoMana">
//           <div className="row">
//             <div className="col-lg-4 ">
//               <div className="sidebarService stickyRow">
//                 <ul>
//                   {tabData.map((tab) => (
//                     <li
//                       key={tab.id}
//                       className={activeTab === tab.id ? "active" : ""}
//                       onClick={() => handleTabClick(tab.id)}
//                     >
//                       <div className="d-flex align-items-center">
//                         <h4 className="sub_heading me-3 fontHeading fontWeight600">
//                           {tab.id.replace("section", "")}
//                         </h4>
//                         <h3 className="small_heading fontHeading fontWeight600">
//                           {tab.title}
//                         </h3>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-8 ">
//               <div className="rightMain stickyRight">
//                 {activeTabData.map((tab) => (
//                   <div
//                     key={tab.id}
//                     className={`itemSidebar scroll ${
//                       activeTab === tab.id ? "active" : ""
//                     }`}
//                     id={tab.id}
//                   >
//                     <h4 className="sub_heading fontWeight700 fontHeading">
//                       {tab.title}
//                     </h4>
//                     {tab.content}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeoServices;
