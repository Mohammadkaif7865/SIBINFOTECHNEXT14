// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSSFNZR');`,
            }}
          />
          {/* End Google Tag Manager */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "SIB Infotech",
                alternateName: "SIB Infotech | SEO & Digital Marketing Agency",
                url: "https://www.sibinfotech.com/",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
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
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
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
              }),
            }}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WSSFNZR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
