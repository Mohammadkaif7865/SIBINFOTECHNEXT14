import Link from "next/link";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const tabData = [
    {
      id: "section1",
      number: "01",
      title: "Search Ads (Google Search Network)",
      heading: "Search Ads (Google Search Network)",

      description: [
        "Google Search Network is the only platform that allows your business to display text ads directly on Google's Search Engine Result Pages, exactly where buyers are searching with real intent to purchase.",
        "Search campaigns come with advanced features including dynamic search ads, call-only ads, callout extensions, sitelink extensions, location extensions, and structured snippets that make your ad stand out from organic listings and competitor ads.",
        "Search Network campaigns are most effective when:",
      ],
      points: [
        "You want your business to appear at the top of Google search results",
        "You want to capture buyers actively searching for your products or services",
        "You want to advertise on Google Maps and reach local customers",
        "You need measurable results from day one",
        "You want full control over which keywords trigger your ads",
      ],
    },
    {
      id: "section2",
      number: "02",
      title: "Display Ads (Google Display Network)",
      heading: "Display Ads (Google Display Network)",

      description: [
        "Google Display Network reaches over 90% of internet users worldwide across 2 million+ websites, news platforms, blogs, Gmail inboxes, and YouTube videos. Display Ads use eye-catching banners and visuals to build brand awareness and capture attention even when users are not actively searching.",
        "These campaigns work brilliantly for top-of-funnel awareness, retargeting previous visitors, and reaching specific audiences based on interests, demographics, life events, and browsing behavior.",
        "Display Ads work best when:",
      ],
      points: [
        "You want to build brand awareness across India and globally",
        "You need to retarget website visitors who did not convert",
        "You want to target audiences based on interests and online behavior",
        "You sell visually appealing products that benefit from strong imagery",
        "You want cost-effective impressions at large scale",
      ],
    },
    {
      id: "section3",
      number: "03",
      title: "Shopping Ads (Google Shopping)",
      heading: "Shopping Ads (Google Shopping)",

      description: [
        "Google Shopping Ads put your product images, prices, and store name directly in front of buyers searching for products like yours. Unlike text ads, Shopping Ads show the actual product visually, making them one of the highest-converting ad formats for e-commerce businesses in India.",
        "These campaigns pull data directly from your product feed and display ads across Google Search, the Google Shopping tab, YouTube, and partner sites.",
        "Shopping Ads are most effective when:",
      ],
      points: [
        "You run an e-commerce business with a product catalog",
        "You want shoppers to see your products before they click",
        "You want to compete on price and value visually",
        "You sell physical products with clear images and descriptions",
        "You want to reduce cost per acquisition through product-first marketing",
      ],
    },
    {
      id: "section4",
      number: "04",
      title: "Video Ads (YouTube Advertising)",
      heading: "Video Ads (YouTube Advertising)",

      description: [
        "YouTube is the second largest search engine in the world and Google's most powerful video advertising platform. Video Ads on YouTube let businesses tell their story through skippable in-stream ads, non-skippable ads, bumper ads, and discovery ads that appear in YouTube search and recommendations.",
        "With over 500 million Indian users watching YouTube every month, YouTube Ads deliver unmatched reach for both brand-building and direct response campaigns.",
        "YouTube Ads work best when:",
      ],
      points: [
        "You want to build emotional connection with your audience",
        "You have a video that explains your product or service clearly",
        "You want to reach buyers across mobile, desktop, and smart TVs",
        "You want to target by interests, search history, and life events",
        "You need scalable awareness at low cost per view",
      ],
    },
    {
      id: "section5",
      number: "05",
      title: "App Promotion Campaigns",
      heading: "App Promotion Campaigns",

      description: [
        "App Promotion Campaigns, also called App Campaigns, help you drive app installs and in-app actions across Google Search, Google Play Store, YouTube, and the Google Display Network.",
        "Google's machine learning automatically optimizes your ad placements, bids, and creative combinations to maximize results for the actions that matter most to your business.",
        "App Promotion Campaigns are perfect when:",
      ],
      points: [
        "You have a mobile app on iOS or Android that needs more downloads",
        "You want to drive in-app purchases, sign-ups, or specific user actions",
        "You want to scale app installs without managing dozens of campaign variants",
        "You want Google to automatically optimize across multiple placements",
        "You need measurable cost per install across the full funnel",
      ],
    },
    {
      id: "section6",
      number: "06",
      title: "Remarketing Campaigns",
      heading: "Remarketing Campaigns",

      description: [
        "Remarketing brings back visitors who showed interest in your business but did not convert the first time. Whether they browsed your product pages, added items to cart, or abandoned a half-filled form, remarketing puts your brand back in front of them with targeted ads across Google Search, Display Network, YouTube, and Gmail.",
        "Remarketing campaigns deliver some of the highest ROI in Google Ads because you are targeting people who already know your brand.",
        "Remarketing works best when:",
      ],
      points: [
        "You want to recover abandoned carts and incomplete leads",
        "You want to stay top-of-mind during long buying cycles",
        "You want to upsell or cross-sell to existing customers",
        "You want lower CPC than cold targeting campaigns",
        "You need higher conversion rates from warm audiences",
      ],
    },
    {
      id: "section7",
      number: "07",
      title: "Performance Max Campaigns",
      heading: "Performance Max Campaigns",

      description: [
        "Performance Max is Google's newest campaign type that combines all Google Ads inventory into one fully automated campaign. Your ads can appear on Search, Display, YouTube, Discover, Gmail, and Google Maps, with machine learning optimizing every placement, bid, and creative combination in real time.",
        "Performance Max campaigns require strong creative assets, clear conversion goals, and a steady stream of audience signals to perform at their best.",
        "Performance Max is ideal when:",
      ],
      points: [
        "You want to maximize conversions across every Google channel from a single campaign",
        "You have multiple high-quality creative assets ready",
        "You want Google's AI to handle bidding and placement optimization",
        "You need to scale results quickly without managing seven separate campaigns",
        "You sell across multiple product lines or services",
      ],
    },
  ];

  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="row align-items-center">
            <div className="col-12 col-lg-9">
              <h2 className="heading text-white fontWeight600 mb-3 mb-lg-0">
                Our Complete Google Ads Management Services in India
              </h2>
            </div>

            <div className="col-12 col-lg-3 text-lg-end">
              <Link
                className="btnPrimary d-none d-lg-inline-block"
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
                          <p className="mt-3" key={i}>
                            {i === 0 && link ? (
                              <>
                                {text}
                                <Link href={link}>
                                  <span>
                                    {heading.replace(" Services", "")}
                                  </span>
                                </Link>
                              </>
                            ) : (
                              text
                            )}
                          </p>
                        ))}
                        <div className="row">
                          <div className="col-lg-12">
                            <ul className="listItems">
                              {points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ),
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
