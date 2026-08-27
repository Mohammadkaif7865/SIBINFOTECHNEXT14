import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import GooglePenaltyRecoveryMgt from "@/comps/GooglePenaltyRecovery/GooglePenaltyRecoveryMgt";

export default function GooglePenaltyRecovery() {
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
        item: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Google Penalty Recovery",
        item: "https://www.sibinfotech.com/google-penalty-recovery/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Penalty Recovery India",
    url: "https://www.sibinfotech.com/google-penalty-recovery/",
    description:
      "Expert Google penalty recovery for manual actions and algorithmic updates (Helpful Content, Penguin, Core Updates). Free penalty diagnosis, backlink audit, content audit, link removal, and disavow file submission.",
    serviceType: "Google Penalty Recovery",
    keywords:
      "Google penalty recovery India, manual penalty removal India, algorithmic penalty recovery, HCU recovery, Penguin penalty recovery, traffic drop recovery",
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
      <title>
        Google Penalty Recovery India | Algorithm Recovery | SIB Infotech
      </title>
      <meta
        name="description"
        content="Lost rankings due to a Google penalty? SIB Infotech recovers manual and algorithmic penalties. 18+ years of experience. Free penalty diagnosis. Act now."
      />
      <meta
        name="keywords"
        content="Google penalty recovery India, Google penalty recovery agency, manual penalty removal India, algorithmic penalty recovery, Google algorithm penalty, HCU recovery, Penguin penalty recovery, Google manual action, algorithmic penalty, Helpful Content Update, core algorithm update, link penalty, spam penalty, traffic drop, GSC manual action, disavow file, link audit, toxic links"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/google-penalty-recovery/"
      />
      <meta
        property="og:title"
        content="Google Penalty Recovery India | Algorithm Recovery | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Lost rankings due to a Google penalty? SIB Infotech recovers manual and algorithmic penalties. 18+ years of experience. Free penalty diagnosis. Act now."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/google-penalty-recovery/"
      />
      <meta
        property="twitter:title"
        content="Google Penalty Recovery India | Algorithm Recovery | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Lost rankings due to a Google penalty? SIB Infotech recovers manual and algorithmic penalties. 18+ years of experience. Free penalty diagnosis. Act now."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
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
      <GooglePenaltyRecoveryMgt />
    </CustomLayout>
  );
}
