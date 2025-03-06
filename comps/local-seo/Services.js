import Link from "next/link";
import React, { useState } from "react";

const tabData = [
  {
    id: "section1",
    number: "01",
    title: "Local SEO Audit",
    content:
      "A local SEO audit is like a health check-up for your online presence! We scan your website, Google My Business, local citations, and rankings to identify what's working and what isn't. It's all about ensuring you're in tip-top shape for local search results so you can dominate your neighborhood's digital space!",
  },
  {
    id: "section2",
    number: "02",
    title: "Local Keyword Research",
    content:
      "Want to appear when your community is searching for your services? Using local keyword research helps you pin down the phrases that customers use in your region. From ‘best pizza near me’ to ‘affordable plumbing in [your city],’ we research deep to find the perfect keywords to connect you with your ideal local customers.",
  },
  {
    id: "section3",
    number: "03",
    title: "Google My Business Optimization",
    content: `
      <p>Local businesses should always claim and optimize their business on Google My Business (GMB) listing, as it can significantly improve their online visibility, attract potential customers, and bring in incredible results.</p>
      <p className="mt-4">Think of Google My Business as your digital storefront. Optimizing GMB means making sure your business is easy to find with accurate details like opening hours, location, reviews, and regular updates to enhance credibility and drive more traffic. It's your first impression on Google and how locals find businesses like yours.</p>
    `,
  },
  {
    id: "section4",
    number: "04",
    title: "Local Citations & Directory Listings",
    content:
      `<p className="">Claiming your business on online directories is a game-changer move for enhancing online visibility and growing the business. Ensuring accurate and consistent business listings across all business directories is crucial, as incorrect or missing information can mislead potential customers and negatively impact your credibility. If your business is not listed correctly, search engines may display outdated or incorrect details, leading to missed opportunities and potential revenue loss.</p>

<p className="mt-3">We ensure that your contact information is accurate, up-to-date, and consistent across all business directories to maximize your online presence.</p>

<p className="mt-3">Local citations are sort of digital word-of-mouth! We get your business listed across top directories—like Yelp, Yellow Pages, and local chambers of commerce—to improve your credibility and local ranking. More citations = more trust, and more trust means more customers knocking on your door
      </p>`
  },
  {
    id: "section5",
    number: "05",
    title: "Local Link Building",
    content:
      "They don't just do wonders for your global SEO but also locally. And as far as local links are concerned, you're getting links from your local blogs, businesses, and news sites—not only boosting your authority but also attracting the right kind of traffic that prefers to shop in your neighborhood. Your secret weapon? Local link building for SEO dominance.",
  },
  {
    id: "section6",
    number: "06",
    title: "Local Schema Markup",
    content:
      `
      <p >
      
      Get your website to speak Google's language with local schema markup. It's the behind-the-scenes code that helps search engines understand your business better, from your address to your opening hours and even reviews. It's like sending Google a personalized roadmap that says, “Hey, I’m here, and I’m local!”

      </p>
      <p className="mt-3">
Local structured data markup is a crucial part of your website’s code. It provides search engines with important information about your business, including your products, services, and customer reviews, helping improve your online visibility and search rankings
      </p>
      `,
  },
  {
    id: "section7",
    number: "07",
    title: "Local Content Creation",
    content:
      `
      <p className="mt-3">We focus on crafting local content that directly connects with your community. Whether it's a blog post about a community event or a video featuring a neighborhood favorite, we make sure you have the right tools to connect and engage with your audience Local content isn't just used for SEO anymore; it relates to your target audience and forms a relationship within their daily routines The creation of

locally optimized content for the website enhances your website’s online visibility on the search engines and is useful for increasing click-through rates (CTR). </p>

<p className="mt-3">Optimizing URLs, title tags, and meta descriptions with location-specific keywords is essential for local SEO. These HTML elements define your webpage’s content and are the first things users see on search engine results pages (SERPs). A well-crafted title and description enhance your business's online presence and attract the right audience.</p>
      `,
  },
  {
    id: "section8",
    number: "08",
    title: "Online Review Management",
    content:
     `
     <p className="">Your online reviews are more important than you think—they are the modern word of mouth! We help you monitor, respond to and manage reviews on platforms like Google, Yelp, and Facebook. ng a positive online reputation is crucial, and we ensure your brand’s credibility remains strong by addressing feedback effectively.</p>

<p className="mt-3">84% of the potential customers buy your product based on the reviews, a business should always manage reviews about themselves. and optimize their online reputation to build trust and attract more customers.</p >
     `,
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <section className="bgSeo">
      <div className="containerFull">
        {/* Header Section */}
        <div className="servicesBlock">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="leftSer d-flex justify-content-between w-100">
              <h4 className="sub_heading text-white fontWeight700 fontHeading">
                Our Local SEO Services in India
              </h4>
              <Link className="btnAction d-none d-lg-block" href="/contact-us">
                Connect With Local SEO Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs & Content Section */}
        <div className="seoMana">
          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-lg-4">
              <div className="sidebarService stickyRow">
                <ul>
                  {tabData.map((tab) => (
                    <li
                      key={tab.id}
                      className={activeTab === tab.id ? "active" : ""}
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <div className="d-flex align-items-center">
                        <h4 className="sub_heading me-3 fontHeading fontWeight600">
                          {tab.number}
                        </h4>
                        <h3 className="small_heading fontHeading fontWeight600">
                          {tab.title}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="col-lg-8">
              <div className="rightMain stickyRight">
                {tabData.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div
                        key={tab.id}
                        className="itemSidebar scroll"
                        id={tab.id}
                      >
                        <h4 className="sub_heading fontWeight700 fontHeading">
                          {tab.title}
                        </h4>
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
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
