import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "@/comps/Home/HomePage";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SIB Infotech",
    url: "https://www.sibinfotech.com",
    logo: "https://www.sibinfotech.com/_next/image?url=%2Fassets%2Fimages%2Flogo%20(1).webp&w=1920&q=100",
    description:
      "SIB Infotech is a leading digital marketing agency in Mumbai, India, offering ROI-driven SEO, PPC, Google Ads, Meta Ads, Social Media Marketing, and Website Design services. Google Premier Partner with 850+ clients across 40+ countries.",
    foundingDate: "2005",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-92222-60000",
        contactType: "sales",
        areaServed: ["IN"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    email: "contact@sibinfotech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/sibinfotech",
      "https://www.linkedin.com/company/sibinfotech",
      "https://www.instagram.com/sibinfotech/",
      "https://twitter.com/sibinfotech",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SIB Infotech – Digital Marketing Agency in Mumbai",
    image: "https://www.sibinfotech.com/assets/og/sib-infotech.webp",
    url: "https://www.sibinfotech.com",
    telephone: "+91-92222-60000",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.177215,
      longitude: 72.833803,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Delhi" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Management" } },
      ],
    },
  };

  const metaTags = (
    <>
      <title>
        Top Digital Marketing Agency in Mumbai | SIB Infotech
      </title>
      <meta
        name="description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai, India, offering ROI-driven SEO, PPC, Google Ads, Meta Ads, Social Media, and Web Design services. Google Premier Partner. 850+ clients across 40+ countries."
      />
      <meta
        name="keywords"
        content="digital marketing agency in Mumbai, digital marketing agency Mumbai, digital marketing company Mumbai, SEO services Mumbai, PPC management Mumbai, social media marketing Mumbai, web design Mumbai, Google Ads agency Mumbai, best digital marketing agency Mumbai, digital marketing services in Mumbai, SEO company Mumbai, PPC services Mumbai, Facebook ads agency Mumbai, top digital marketing agency in India"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/" />
      <meta
        property="og:title"
        content="Top Digital Marketing Agency in Mumbai | SIB Infotech"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai, India, offering ROI-driven SEO, PPC, Google Ads, Meta Ads, Social Media, and Web Design services. Google Premier Partner. 850+ clients."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/" />
      <meta
        property="twitter:title"
        content="Top Digital Marketing Agency in Mumbai | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai, India, offering ROI-driven SEO, PPC, Google Ads, Meta Ads, Social Media, and Web Design services. Google Premier Partner."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />
      {/* item prompt */}
      <meta
        itemprop="name"
        content="Top Digital Marketing Agency in Mumbai | SIB Infotech"
      />

      <meta
        itemprop="description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai, India, offering ROI-driven SEO, PPC, Google Ads, Meta Ads, Social Media, and Web Design services. Google Premier Partner."
      />

      <meta itemprop="url" content="https://www.sibinfotech.com/" />

      <meta
        itemprop="thumbnailUrl"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp?format=1500w"
      />

      <link
        rel="image_src"
        href="https://www.sibinfotech.com/assets/og/sib-infotech.webp?format=1500w"
      />
      {/* Preload the hero LCP background image */}
      <link
        rel="preload"
        as="image"
        href="/assets/images/icons/blur-culcle-mini.webp"
        fetchpriority="high"
      />
      {/* item prompt */}
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div>
        <HomePage />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </CustomLayout>
  );
}
