// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.sibinfotech.com/#website",
      name: "SIB Infotech",
      alternateName: [
        "SIB Infotech | SEO & Digital Marketing Agency",
        "Singh Infotech",
        "SIBZ Solutions",
        "SIB Infotech India",
        "SIB Infotech Pvt Ltd",
        "Sib Infotech",
      ],
      url: "https://www.sibinfotech.com/",
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.sibinfotech.com/#organization",
      name: "SIB Infotech",
      alternateName: [
        "Singh Infotech",
        "SIBZ Solutions",
        "SIB Infotech India",
        "SIB Infotech Pvt Ltd",
        "Sib Infotech",
        "Si Infotech",
      ],
      url: "https://www.sibinfotech.com/",
      image: "https://www.sibinfotech.com/assets/og/sib-infotech.webp",
      logo: "https://www.sibinfotech.com/assets/images/logo.webp",
      description:
        "SIB Infotech is a Google Premier Partner digital marketing agency offering SEO, PPC, Google Ads, social media marketing, web design, and web development services in Mumbai, India since 2005.",
      foundingDate: "2005",
      telephone: "+91-92222-60000",
      email: "contact@sibinfotech.com",
      serviceType:
        "Search Engine Optimization (SEO), Digital Marketing, Google Ads & PPC Management, Web Design & Development, Content Marketing, Local SEO, Social Media Marketing",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "UAE" },
      ],
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
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400064",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-92222-60000",
        contactType: "Customer Service",
        availableLanguage: ["English", "Hindi"],
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
      description:
        "SIB Infotech is a Google Premier Partner and leading digital marketing agency in Mumbai offering SEO, PPC, web design, and development services since 2005.",
      foundingDate: "2005",
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
        availableLanguage: ["English", "Hindi"],
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
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/*
            Poppins font-file preloads were removed here on purpose.
            The hard-coded gstatic hashes had gone stale: Google now serves
            different files, so the browser downloaded the preloads (~16.6 KB)
            at High priority, never used them, and then fetched the real files
            anyway. Do not re-add hard-coded gstatic URLs - they change
            whenever Google revs the font. The preconnects above are the
            durable optimisation.
          */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          />

          {/*
            Font Awesome 6.1.1 - self-hosted subset.
            Upstream ships ~255 KB of webfonts covering thousands of icons;
            this site uses 143. scripts/iconsubset/ regenerates these files.
            The CSS is byte-for-byte upstream apart from the @font-face src,
            so every utility class and icon rule behaves exactly as before.
            Re-run the scripts after adding a new icon to the markup.
          */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/assets/fonts/icons/fa-solid-900.subset.woff2"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/assets/fonts/fontawesome.subset.css" />

          {/* Bootstrap Icons - self-hosted subset (6 icons in use, was a 90 KB font). */}
          <link rel="stylesheet" href="/assets/fonts/bootstrap-icons.subset.css" />

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
