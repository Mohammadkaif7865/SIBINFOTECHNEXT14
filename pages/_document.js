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
      image: "https://www.sibinfotech.com/assets/og/sib-infotech.png",
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
      image: "https://www.sibinfotech.com/assets/og/sib-infotech.png",
      priceRange: "₹5,000 - ₹500,000",
      telephone: "+91 92222 60000",
      email: "contact@sibinfotech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
        addressLocality: "Mumbai, Maharashtra",
        addressCountry: "India",
        postalCode: "400064",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.4",
        bestRating: "5",
        reviewCount: "200",
      },
      openingHours: ["Mon-Sat 09:30 AM - 06:30 PM"],
    };

    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="-Q-iAtEsLTCtmflxgV53RbO-8ysLaQONM_2DXszZvPk"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          />

          {/* ---------- GTM: INERT - won't run until consent = granted ---------- */}
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