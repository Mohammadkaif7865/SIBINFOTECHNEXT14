// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
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

          {/* style cdn */}

          <link
            rel="preload"
            href="/assets/images/banner/banner-video.mp4"
            as="video/mp4"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
            integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />

          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            as="style"
            // onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            as="style"
            // onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            as="style"
            // onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            />
          </noscript>
          <noscript>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            />
          </noscript>
          <noscript>
            <link
              href="https://unpkg.com/aos@2.3.1/dist/aos.css"
              rel="stylesheet"
            />
          </noscript>
          {/* end style cdn */}
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

          <Script
            defer
            // strategy="beforeInteractive"
            strategy="lazyOnload"
            src="/assets/js/custom.js"
          ></Script>
          <Script
            defer
            // strategy="beforeInteractive"
            strategy="lazyOnload"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
