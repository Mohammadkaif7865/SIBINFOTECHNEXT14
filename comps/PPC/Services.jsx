import Link from "next/link";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const tabData = [
    {
      id: "section1",
      number: "01",
      title: "Google Ads Management",
      heading: "Google Ads Management Services",
      link: "/google-ads-management",
      description: [
        "As a Google Premier Partner, we specialize in creating and managing Google Ads campaigns, ensuring your ads appear on Google Search, Display Network, YouTube, and beyond.",
        "We help you achieve a high-quality score for maximum reach at the lowest cost per click.",
        "<strong>Search Ads:</strong> Target high-intent keywords to capture leads actively looking for your offerings.",
        "<strong>Display Ads:</strong> Build brand awareness with visually engaging ads across Google’s network of websites.",
        "<strong>Video Ads:</strong> Leverage YouTube’s vast user base to connect with your audience through video.",
        "<strong>Shopping Ads:</strong> Boost e-commerce sales by showcasing your products directly on Google search results.",
      ],
      points: [
        "Full-funnel ad strategy including Search, Display, and YouTube", // Dummy
        "Optimized quality scores for cost-efficient results", // Dummy
      ],
    },
    {
      id: "section2",
      number: "02",
      title: "Bing Ads Management",
      heading: "Bing Ads Management Services",
      link: "/bing-ads-management",
      description: [
        "While Google dominates search, Bing Ads offers access to a different, often more affordable audience.",
        "We help businesses expand their reach by optimizing Bing Ads campaigns for better ROI.",
      ],
      points: [
        "Lower cost-per-click compared to Google", // Dummy
        "Reach audiences on Bing, Yahoo, and AOL networks", // Dummy
      ],
    },
    {
      id: "section3",
      number: "03",
      title: "Social Media Advertising",
      heading: "Social Media Advertising Services",
      link: "/social-media-advertising",
      description: [
        "PPC isn’t limited to search engines. Our team also manages ads on social media platforms, including:",
        "<strong>Facebook & Instagram Ads:</strong> Connect with highly targeted audiences based on interests, behaviors, and demographics.",
        "<strong>LinkedIn Ads:</strong> Perfect for B2B businesses, LinkedIn Ads help you reach decision-makers in specific industries.",
        "<strong>Twitter & Pinterest Ads:</strong> Engage with niche audiences through targeted advertising on these platforms.",
      ],
      points: [
        "Cross-platform targeting for maximum reach", // Dummy
        "Custom audience segmentation and retargeting", // Dummy
      ],
    },
    {
      id: "section4",
      number: "04",
      title: "Yandex Ads Management",
      heading: "Yandex Ads Management Services",
      link: "/yandex-ads-management",
      description: [
        "If your business is targeting the Russian or CIS markets, we manage Yandex ads to reach a large, Russian-speaking audience.",
      ],
      points: [
        "Effective targeting for Russian-speaking users", // Dummy
        "Leverage Yandex.Direct for display and search campaigns", // Dummy
      ],
    },
    {
      id: "section5",
      number: "05",
      title: "Amazon Ads",
      heading: "Amazon Ads Services",
      link: "/amazon-ads",
      description: [
        // Dummy content starts here
        "We help e-commerce brands leverage Amazon Ads to drive product visibility and conversions within the world’s largest online marketplace.",
        "From Sponsored Products to Display Ads, our strategies are optimized to increase product discoverability and sales performance.",
        "Our services cover end-to-end ad creation, optimization, and reporting to ensure strong ROI.",
        // Dummy content ends here
      ],
      points: [
        "Boost product visibility with Sponsored Ads", // Dummy
        "Drive conversions through optimized campaigns", // Dummy
      ],
    },
  ];

  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-bet`ween align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between align-items-center w-100">
              <div>
                <h4 className="heading text-white fontWeight600 ">
                  Our PPC Management Services in India
                </h4>

                <p className="mt-4  text-white">
                  At SIB Infotech we can help you reach your target audience via
                  Major Pay Per Click Platform
                </p>
              </div>

              <Link
                className="btnPrimary  d-none d-lg-block"
                href="/contact-us"
              >
                Connect With Expert
              </Link>
            </div>
          </div>
        </div>

        <div className="seoMana">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  {tabData.map(({ id, number, title }) => (
                    <li
                      key={id}
                      className={activeTab === id ? "active" : ""}
                      onClick={() => setActiveTab(id)}
                    >
                      <div className="d-flex align-items-center">
                        <h4 className="sub_heading me-3  fontWeight600">
                          {number}
                        </h4>
                        <h3 className="small_heading  fontWeight600">
                          {title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="rightMain stickyRight">
                {tabData.map(
                  ({ id, heading, description, link, points }) =>
                    activeTab === id && (
                      <div key={id} className="itemSidebar scroll" id={id}>
                        <h4 className="sub_heading fontWeight700 ">
                          {heading}
                        </h4>
                        {description.map((text, i) => (
                          <p
                            className="mt-3"
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: text,
                            }}
                          ></p>
                        ))}
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="listItems">
                              {points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
