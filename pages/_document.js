// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.sibinfotech.com/#website",
      name: "SIB Infotech",
      alternateName: "SIB Infotech | SEO & Digital Marketing Agency",
      url: "https://www.sibinfotech.com/",
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.sibinfotech.com/#organization",
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com/",
      image: "https://www.sibinfotech.com/assets/og/sib-infotech.webp",
      serviceType:
        "Search Engine Optimization (SEO), Digital Marketing, Google Ads & PPC Management, Web Design & Development, Content Marketing, Local SEO",
      areaServed: { "@type": "Country", name: "India" },
      sameAs: [
        "https://x.com/sibinfotech/",
        "https://www.facebook.com/sibinfotech/",
        "https://www.youtube.com/user/sibinfotech",
        "https://linkedin.com/company/sibinfotech",
        "https://www.instagram.com/sibinfotech/",
        "https://www.pinterest.com/sibinfotech/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
        addressRegion: "Mumbai, Maharashtra",
        postalCode: "400064",
        addressCountry: "India",
      },
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.sibinfotech.com/#localbusiness",
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com/",
      image: "https://www.sibinfotech.com/assets/og/sib-infotech.webp",
      logo: "https://www.sibinfotech.com/assets/images/logo.webp",
      telephone: "+91-92222-60000",
      email: "contact@sibinfotech.com",
      priceRange: "Call +91-92222-60000 | contact@sibinfotech.com",
      sameAs: [
        "https://x.com/sibinfotech",
        "https://www.linkedin.com/company/sib-infotech",
        "https://www.facebook.com/sibinfotech",
        "https://www.youtube.com/user/sibinfotech",
        "https://www.instagram.com/sibinfotech",
        "https://www.pinterest.com/sibinfotech",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West, Mumbai, Maharashtra 400064",
        addressLocality: "Malad (West), Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
        postalCode: "400064",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.1018364",
        longitude: "72.887766",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 92222-60000",
        contactType: "Customer Support",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "3",
        ratingCount: "2022",
      },
    };

    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="-Q-iAtEsLTCtmflxgV53RbO-8ysLaQONM_2DXszZvPk"
          />

          {/* External Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Preload the hero heading weight (Poppins 600 latin) to speed up LCP text */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          />

          {/* FontAwesome 6.1.1 */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />

          {/* Bootstrap Icons 1.7.2 */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          />

          {/* AOS */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            media="print"
            onLoad="this.media='all'"
          />
          <script
            type="text/plain"
            data-consent="analytics"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WSSFNZR');`,
            }}
          />

          {/* ---------- JSON-LD ---------- */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />

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

          {/* ---------- Clarity: INERT ---------- */}
          <script
            type="text/plain"
            data-consent="analytics"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","semoba83rl");`,
            }}
          />
        </Head>

        <body>
          {/* GTM noscript iframe intentionally removed to avoid tracking before consent */}

          <Main />
          <NextScript />

          {/* Consent controller */}
          <script defer src="/cookie-consent.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
