import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import TestimonialsMgt from "@/comps/Testimonials/TestimonialsMgt";

export default function Testimonials() {
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
        name: "Client Testimonials",
        item: "https://www.sibinfotech.com/testimonials",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Client Testimonials & Reviews | SIB Infotech",
    url: "https://www.sibinfotech.com/testimonials",
    description:
      "Read verified client testimonials and reviews for SIB Infotech. Rated 5.0 stars on Google, Clutch, TrustPilot and GoodFirms for SEO, digital marketing and web development services.",
    publisher: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
  };

  const metaTags = (
    <>
      <title>Client Testimonials & Reviews | SIB Infotech</title>
      <meta
        name="description"
        content="Read verified client testimonials and reviews for SIB Infotech. Rated 5.0 stars on Google, Clutch, TrustPilot and GoodFirms for SEO, digital marketing and web development."
      />
      <meta
        name="keywords"
        content="SIB Infotech reviews, SIB Infotech testimonials, digital marketing agency reviews India, SEO agency testimonials, Clutch reviews SIB Infotech, Google reviews digital marketing agency, web development company reviews, client success stories digital marketing"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/testimonials" />
      <meta
        property="og:title"
        content="Client Testimonials & Reviews | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Read verified client testimonials and reviews for SIB Infotech. Rated 5.0 stars on Google, Clutch, TrustPilot and GoodFirms for SEO, digital marketing and web development."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/testimonials" />
      <meta
        property="twitter:title"
        content="Client Testimonials & Reviews | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Read verified client testimonials and reviews for SIB Infotech. Rated 5.0 stars on Google, Clutch, TrustPilot and GoodFirms for SEO, digital marketing and web development."
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
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <TestimonialsMgt />
    </CustomLayout>
  );
}
