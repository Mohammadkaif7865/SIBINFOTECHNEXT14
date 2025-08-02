import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          />

          {/* Font Awesome */}
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />

          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          />

          <link
            rel="preload"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          />

          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WSSFNZR');`,
            }}
          />

          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.sibinfotech.com/#website",
              "name": "SIB Infotech",
              "alternateName": "SIB Infotech | SEO & Digital Marketing Agency",
              "url": "https://www.sibinfotech.com/"
            }`}
          </script>

          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.sibinfotech.com/#organization",
              "name": "SIB Infotech",
              "url": "https://www.sibinfotech.com/",
              "image": "https://www.sibinfotech.com/assets/og/sib-infotech.png",
              "sameAs": [
                "https://x.com/sibinfotech/",
                "https://www.facebook.com/sibinfotech/",
                "https://www.youtube.com/user/sibinfotech",
                "https://linkedin.com/company/sibinfotech",
                "https://www.instagram.com/sibinfotech/",
                "https://www.pinterest.com/sibinfotech/"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
                "addressRegion": "Mumbai, Maharashtra",
                "postalCode": "400064",
                "addressCountry": "India"
              }
            }`}
          </script>

          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.sibinfotech.com/#localbusiness",
              "name": "SIB Infotech",
              "url": "https://www.sibinfotech.com/",
              "image": "https://www.sibinfotech.com/assets/og/sib-infotech.png",
              "priceRange": "₹5,000 - ₹500,000",
              "telephone": "+91 92222 60000",
              "email": "contact@sibinfotech.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West",
                "addressLocality": "Mumbai, Maharashtra",
                "addressCountry": "India",
                "postalCode": "400064"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "bestRating": "5",
                "reviewCount": "200"
              },
              "openingHours": ["Mon-Sat 09:30 AM - 06:30 PM"]
            }`}
          </script>

          <Script
            id="clarity-script"
            strategy="lazyOnload"
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
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WSSFNZR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
