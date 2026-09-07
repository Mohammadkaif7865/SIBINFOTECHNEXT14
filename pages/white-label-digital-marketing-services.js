import React from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import WhiteLabelSeoMgt from "@/comps/WhiteLabelSeo/WhiteLabelSeoMgt";

export default function WhiteLabelDigitalMarketingServices() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sibinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Services",
        item: "https://www.sibinfotech.com/seo-company-mumbai",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "White Label SEO",
        item: "https://www.sibinfotech.com/white-label-digital-marketing-services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label Digital Marketing Services India",
    url: "https://www.sibinfotech.com/white-label-digital-marketing-services",
    description:
      "Full-service white label digital marketing for agencies. Resell SEO, PPC, Google Ads, Meta Ads, content, and social media under your brand with 100% NDA protection and white label dashboards.",
    serviceType: "White Label Digital Marketing",
    keywords:
      "white label digital marketing services india, white label digital marketing agency, digital marketing reseller program, white label PPC management, white label social media marketing",
    provider: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.sibinfotech.com/contact-us/",
    },
  };

  const metaTags = (
    <>
      <title>White Label Digital Marketing Agency India &amp; Mumbai | Reseller Services | SIB Infotech</title>
      <meta
        name="description"
        content="Partner with India's leading white label digital marketing agency in Mumbai & Delhi. Resell SEO, PPC, Google Ads, Meta Ads & Social Media with 100% NDA protection and white label dashboards."
      />
      <meta
        name="keywords"
        content="white label digital marketing agency, white label digital marketing agency india, white label digital marketing services mumbai, white label digital marketing agency mumbai, white label digital marketing services, digital marketing reseller program, white label agency partner, white label PPC management, white label SEO reseller india"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/white-label-digital-marketing-services"
      />
      <meta
        property="og:title"
        content="White Label Digital Marketing Agency India &amp; Mumbai | Reseller Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Partner with India's leading white label digital marketing agency in Mumbai & Delhi. Resell SEO, PPC, Google Ads, Meta Ads & Social Media with 100% NDA protection."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/white-label-digital-marketing-services"
      />
      <meta
        property="twitter:title"
        content="White Label Digital Marketing Agency India &amp; Mumbai | Reseller Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Partner with India's leading white label digital marketing agency in Mumbai & Delhi. Resell SEO, PPC, Google Ads, Meta Ads & Social Media with 100% NDA protection."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.webp"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <WhiteLabelSeoMgt
        heroTitle="White Label Digital Marketing Services That"
        heroTitleAccent="Scale With Your Agency"
        heroIntro="Resell SEO, Google Ads, paid social, and content under your own brand. NDA-protected, fully managed delivery from a Google Premier Partner, so your agency can sell every channel without hiring for any of them."
      >
        {/* Channel breadth is what separates this page from the SEO-only
            white label page. Keep these two pages distinct in copy. */}
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h2 className="heading fontWeight700">
                  Every Channel You Resell,{" "}
                  <span className="text_red fontWeight700">
                    Delivered Under Your Brand
                  </span>
                </h2>
                <p className="mt-3">
                  White label SEO is one service. White label digital marketing
                  is the full stack. Agencies partner with us when a client asks
                  for a channel they do not staff for — and they need it
                  delivered, reported and invoiced as their own.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              {[
                {
                  t: "White Label SEO",
                  d: "Technical audits, on-page, content and link building. Reported under your logo.",
                  href: "/white-label-seo-services",
                },
                {
                  t: "White Label Google Ads & PPC",
                  d: "Search, Shopping, Performance Max and remarketing, built and optimised by certified Premier Partner strategists.",
                  href: "/google-ads-management-services",
                },
                {
                  t: "White Label Paid Social",
                  d: "Meta, Instagram, LinkedIn and TikTok campaigns — creative testing, audience builds and full-funnel tracking.",
                  href: "/facebook-ads-management-services",
                },
                {
                  t: "White Label Content Marketing",
                  d: "Briefs, long-form articles, landing pages and thought leadership written to your client's tone of voice.",
                  href: "/content-marketing-services",
                },
                {
                  t: "White Label Web Design & Development",
                  d: "Landing pages, full builds and CRO work your clients never know were outsourced.",
                  href: "/website-designing-services",
                },
                {
                  t: "White Label AI Search Optimisation",
                  d: "Visibility inside ChatGPT, Gemini, Perplexity and AI Overviews — the channel most resellers cannot yet offer.",
                  href: "/llm-seo-services",
                },
              ].map((c, i) => (
                <div key={i} className="col-lg-4 col-md-6 mb-4">
                  <Link
                    href={c.href}
                    className="text-decoration-none d-block h-100"
                  >
                    <div className="p-4 h-100 border rounded-3">
                      <h3 className="small_heading fontWeight700">{c.t}</h3>
                      <p className="mt-2 mb-0">{c.d}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-2 mb-0">
              Only need search? Our{" "}
              <Link
                href="/white-label-seo-services"
                className="text_red fontWeight600"
              >
                white label SEO services
              </Link>{" "}
              page covers SEO-only reseller partnerships in detail.
            </p>
          </div>
        </section>
      </WhiteLabelSeoMgt>
    </CustomLayout>
  );
}
