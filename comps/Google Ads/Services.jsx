import Link from "next/link";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const tabData = [
    {
      id: "section1",
      number: "01",
      title: "Search Ads (Google Search Network) ",
      heading: "Google Search Network (GSN) Campaign",
      link: "/google-search-network-campaign",
      description: [
        "The Search Network campaign is the only platform that allows your business to display text ads on the SERPs (Search Engine Result Pages).",
        " The campaign is supplemented with extensive features that include app installs, mobile app engagement, dynamic search ads, call-only or callout, and snippets.",
        " SN is a boundless place for a new Google Ads user to advertise for wide-ranging businesses along with the local business. Search Network campaigns are beneficial when:",
      ],
      points: [
        "You want your page to be #1 on Google SERPs",
        "You want to publicize on Google Maps",
      ],
    },
    {
      id: "section2",
      number: "02",
      title: "Display Ads (Google Display Network)",
      heading: "Google Display Network (GDN) Campaign",
      link: "/google-display-network-campaign",
      description: [
        "The image ads are displayed on the Google Display Network (GDN), which consists of millions of websites to show your ads.",
        " The GDN campaigns demand to setup marketing objectives that can be based on impressions, visits, engagement, and actions.",
        " The objectives you select are the basis for building your ad campaign and its success. You can use the GDN campaign:",
      ],
      points: [
        "For building the brand impression",
        "If you want to market on a definite website",
        "To craft remarketing campaigns",
      ],
    },
    {
      id: "section3",
      number: "03",
      title: "Shopping Ads (Google Shopping)",
      heading: "Google Shopping Campaign",
      link: "/google-shopping-campaign",
      description: [
        "The first step for a Google shopping campaign is to set up Google Merchant Centre.",
        " This ad campaign id is useful to showcase your products from your eCommerce store in Google Shopping.",
        " The success of the campaign depends on how you set up your eCommerce store or website, if the setup is correct and Google receives correct feeds, it does all the targeting and ad creation jobs on its own.",
        " The Google Shopping Ads campaign could only be used if you have an eCommerce store.",
      ],
      points: [],
    },
    {
      id: "section4",
      number: "04",
      title: "Video Ads (YouTube Advertising) ",
      heading: "Video YouTube Ad Campaign",
      link: "/video-youtube-ad-campaign",
      description: [
        "There are several ad formats available for video ad campaigns on Google AdWords.",
        " The options range from letting the viewer skip your ad after five seconds to a six seconds buffer ad between videos.",
        " The campaign has several features that allow you to extend your ads with shopping campaigns along with app installs.",
        " Video Ad campaign serves your business. Search Network campaigns are beneficial when:",
      ],
      points: [
        "If you want to stimulate video content",
        "If you want to create and place commercial videos on YouTube",
      ],
    },
    {
      id: "section5",
      number: "05",
      title: "App Promotion Campaigns",
      heading: "Universal App Campaign",
      link: "/universal-app-campaign",
      description: [
        "The universal app campaign advertises your application on all the Google Advertising platforms such as search, display, and video networks.",
        " It is considered to be the best platform to advertise your application also the setup is straightforward, you just need to add your app and modify the campaign objectives as per your needs.",
        " Universal app campaign could be used:",
      ],
      points: [
        "If you want to launch and boost a new or existing app",
        "If you want to drive sales through the app",
      ],
    },
    {
      id: "section6",
      number: "06",
      title: "Remarketing Campaigns ",
      heading: "Remarketing or Retargeting Campaign",
      link: "/remarketing-retargeting-campaign",
      description: [
        "The Google remarketing ads are considered to be a powerful tool for businesses as it is useful in targeting the people who have already visited your store or used your application.",
        " The remarketing campaign is in-built with exclusive features that are beneficial to reach former visitors and users.",
        " The campaign demands careful set-up as it leads to the generation of your remarketing tags and lists.",
        " The remarketing ads work only when your business has minimal one previously set up a retargeting audience list.",
      ],
      points: [],
    },
    {
      id: "section7",
      number: "07",
      title: "Performance Max Campaigns ",
      heading: "Performance Max Campaigns",
      link: "/remarketing-retargeting-campaign",
      description: [
        "Performance max campaign ensures that your ads should reach to the right audience at the right time. It is a goal oriented campaign, it make your ads ideal for driving sales, and increasing brand visibility. Performance max deliver higher ROI and better results effortlessly. It is used for: ",
      ],
      points: [
        `AI-driven campaigns for multi-channel ad placements. `,
        `Optimized bidding strategies to enhance conversions. `,
        `Asset based approach that create high performing ads.`,
      ],
    },
  ];

  return (
    <section className="bgSeo">
      <div className="containerFull">
        <div className="servicesBlock">
          <div className="d-flex justify-content-bet`ween align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between w-100">
              <h4 className="heading text-white fontWeight600 ">
                Our Google Ads Services Include:
              </h4>
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
