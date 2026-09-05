import React, { useState } from "react";

import Link from "next/link";

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
    <div className="mt-3">{content}</div>
  </div>
);

const WeOffer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Search Engine Optimization (SEO & AI Search)",
      content: (
        <>
          <p>
            As a Google Premier Partner recognized among the top digital marketing companies in India,
            our organic search practice delivers sustainable first-page rankings and compound traffic growth.
            We move beyond outdated keyword stuffing to build topical authority across modern search engines,
            including Google AI Overviews, SearchGPT, Perplexity, and Bing.
          </p>
          <p className="mt-2">
            Our comprehensive SEO framework combines meticulous technical audits (Core Web Vitals, crawl budget,
            schema markup), high-intent commercial keyword mapping, on-page optimization, and ethical white-hat
            link building. Whether targeting local foot traffic in Mumbai or capturing national commercial demand,
            we ensure your website outranks established competitors.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Technical SEO Audits, Semantic Keyword Clustering, AI Search Optimization (GEO), Local &amp; National SEO, High-Authority Editorial Backlinks.</li>
            <li><strong>Ideal For:</strong> B2B enterprises, eCommerce stores, and local service brands demanding recurring organic revenue.</li>
          </ul>
          <div className="mt-3">
            <Link href="/seo-company-mumbai" className="text_red fontWeight600">
              Explore Our SEO Services &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Pay-Per-Click Advertising (PPC & Google Ads)",
      content: (
        <>
          <p>
            Capture immediate high-intent customer demand with hyper-targeted paid advertising managed by
            certified Google Ads specialists. As one of India&apos;s leading digital marketing firms, our PPC management
            focuses on maximizing Return on Ad Spend (ROAS) while ruthlessly eliminating wasted ad spend.
          </p>
          <p className="mt-2">
            We architect end-to-end paid search campaigns across Google Search, Performance Max (PMax), Google Shopping,
            Display Network, and YouTube. By integrating predictive AI bidding algorithms with rigorous negative keyword
            pruning and high-converting landing page experiences, we ensure your cost-per-lead consistently decreases as campaign volume scales.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Multi-Tier Search Campaigns, Performance Max Optimization, Dynamic Remarketing, eCommerce Shopping Feeds, Conversion Rate Tracking.</li>
            <li><strong>Ideal For:</strong> Businesses seeking instant pipeline velocity, qualified lead influx, and scalable e-commerce sales.</li>
          </ul>
          <div className="mt-3">
            <Link href="/search-engine-marketing-companies-mumbai-india" className="text_red fontWeight600">
              Explore PPC &amp; Google Ads Solutions &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Social Media Marketing & Paid Social Ads",
      content: (
        <>
          <p>
            Turn social media engagement into measurable revenue. Our social media marketing team crafts data-backed
            creative campaigns across Meta (Instagram &amp; Facebook), LinkedIn, YouTube, X (Twitter), and Pinterest to
            capture audience attention and build brand equity.
          </p>
          <p className="mt-2">
            For B2B brands, we engineer high-converting LinkedIn advertising funnels targeting C-suite executives and key decision-makers.
            For D2C and consumer brands, we build scroll-stopping visual ad creatives and reels on Instagram that drive viral engagement,
            direct-to-checkout conversions, and customer retention.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Paid Meta Ad Funnels, B2B LinkedIn Lead Generation, Creative Graphic &amp; Video Production, Audience Persona Targeting, Full-Funnel Retargeting.</li>
            <li><strong>Ideal For:</strong> Direct-to-consumer brands, B2B SaaS, lifestyle, healthcare, and enterprise firms looking to dominate mindshare.</li>
          </ul>
          <div className="mt-3">
            <Link href="/social-media-marketing-services" className="text_red fontWeight600">
              Explore Social Media Marketing &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Content Marketing & Authority Strategy",
      content: (
        <>
          <p>
            Content is the foundational currency of modern digital marketing in India. Our content marketing solutions
            position your brand as the undisputed authority in your niche, building trust with prospects throughout the buyer&apos;s journey.
          </p>
          <p className="mt-2">
            We conduct in-depth customer pain-point research to produce high-value content assets: comprehensive industry guides,
            thought-leadership articles, whitepapers, case studies, conversion-focused landing pages, and educational video scripts.
            Every piece is optimized for both human engagement and search engine crawlability, establishing long-term organic authority.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Strategic Editorial Calendars, Bottom-of-Funnel Conversion Copy, Technical Whitepapers &amp; E-books, Infographics, Programmatic Content Systems.</li>
            <li><strong>Ideal For:</strong> Brands aiming to build authoritative domain authority, educate complex B2B buyers, and fuel organic lead generation.</li>
          </ul>
          <div className="mt-3">
            <Link href="/content-marketing-services" className="text_red fontWeight600">
              Explore Content Marketing Services &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Email Marketing & Marketing Automation",
      content: (
        <>
          <p>
            Maximize Customer Lifetime Value (LTV) with intelligent email marketing and omnichannel marketing automation.
            Email remains one of the highest-ROI channels in digital marketing, delivering up to $42 return for every dollar invested.
          </p>
          <p className="mt-2">
            We configure automated behavioral triggers, welcome sequences, abandoned cart recoveries, VIP re-engagement funnels,
            and personalized newsletters. By implementing advanced audience segmentation, list hygiene, and A/B split testing
            on subject lines and creative layouts, we achieve superior open and click-through rates.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Automated Customer Journey Flows, Drip Campaigns, Cart Abandonment Sequences, List Segmentation, Custom HTML Email Templates.</li>
            <li><strong>Ideal For:</strong> E-commerce stores, subscription businesses, and B2B companies nurturing long-cycle prospective clients.</li>
          </ul>
          <div className="mt-3">
            <Link href="/email-marketing-services-companies-mumbai-india" className="text_red fontWeight600">
              Explore Email Marketing Services &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Affiliate Marketing & Reseller Networks",
      content: (
        <>
          <p>
            Scale your sales footprint without upfront risk through performance-based affiliate marketing.
            As an experienced digital marketing firm in India, we establish, manage, and scale partner networks that
            only earn commissions when they deliver verified sales or leads.
          </p>
          <p className="mt-2">
            Our affiliate specialists handle publisher recruitment, commission modeling, affiliate tracking software integration,
            creative collateral distribution, and strict fraud prevention protocols to safeguard your brand reputation and affiliate margins.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Affiliate Network Setup &amp; Migration, Publisher Outreach, Commission Tier Structuring, Fraud Monitoring, Performance Audits.</li>
            <li><strong>Ideal For:</strong> E-commerce retailers, SaaS platforms, and digital product businesses seeking scalable performance channels.</li>
          </ul>
          <div className="mt-3">
            <Link href="/affiliate-marketing-services-mumbai-india" className="text_red fontWeight600">
              Explore Affiliate Marketing &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Influencer Marketing & Creator Campaigns",
      content: (
        <>
          <p>
            Harness authentic social proof and cultural resonance through strategic influencer partnerships.
            Our influencer marketing team connects your brand with vetted nano, micro, macro, and celebrity creators
            across YouTube, Instagram, and LinkedIn.
          </p>
          <p className="mt-2">
            We manage the end-to-end collaboration process: audience demographic verification, creative storytelling briefs,
            contract negotiations, FTC/ASCI compliance, and performance tracking. We ensure influencer activations align with
            your direct-response conversion funnels rather than remaining empty PR vanity exercises.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Influencer Discovery &amp; Fraud Vetting, Contract &amp; Deliverable Management, Campaign Storyboarding, ROI &amp; Engagement Reporting.</li>
            <li><strong>Ideal For:</strong> Consumer brands, lifestyle products, tech apps, and fashion/beauty labels scaling social awareness.</li>
          </ul>
          <div className="mt-3">
            <Link href="/influencer-marketing-services" className="text_red fontWeight600">
              Explore Influencer Marketing &rarr;
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Social Media Optimization (SMO) & Brand Reputation",
      content: (
        <>
          <p>
            Protect, enhance, and amplify your brand identity across digital touchpoints with integrated Social Media
            Optimization and Online Reputation Management (ORM). A stellar brand reputation is essential for converting
            search and ad visitors into lifelong customers.
          </p>
          <p className="mt-2">
            We optimize brand profiles across search and social engines, monitor sentiment in real-time, implement proactive review
            generation systems on Google Business Profile and industry review platforms, and manage crisis response strategies
            to suppress negative mentions and elevate authoritative positive assets.
          </p>
          <ul className="mt-2 ps-3">
            <li><strong>Core Deliverables:</strong> Social Profile Technical Optimization, Brand Sentiment Monitoring, Review Generation Systems, Search SERP Suppression, Crisis Communication.</li>
            <li><strong>Ideal For:</strong> High-profile executives, healthcare institutions, real estate builders, and hospitality businesses protecting their online reputation.</li>
          </ul>
          <div className="mt-3">
            <Link href="/social-media-optimization-services" className="text_red fontWeight600">
              Explore SMO &amp; Reputation Management &rarr;
            </Link>
          </div>
        </>
      ),
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
