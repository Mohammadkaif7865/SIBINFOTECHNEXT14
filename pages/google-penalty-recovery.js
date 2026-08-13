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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if my website has a Google penalty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your organic traffic dropped sharply (50%+) suddenly, you received a Google Search Console manual action notification, or your rankings disappeared around the time of a known Google algorithm update.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a manual penalty and an algorithmic penalty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A manual action is applied by a Google reviewer and is visible in Search Console. An algorithmic penalty is an automatic re-evaluation during a Google algorithm update such as Helpful Content or Penguin.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in penalty recovery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide free penalty diagnosis, backlink audit, content audit, link removal outreach, disavow file submission, reconsideration request (for manual actions), and post-recovery monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Google penalty recovery take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manual action recovery after a successful reconsideration request typically takes 2 to 4 weeks for Google to process. Algorithmic recovery depends on the next algorithm refresh, which can be 2 to 6 months.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
