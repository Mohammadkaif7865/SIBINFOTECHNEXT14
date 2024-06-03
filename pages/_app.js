import Head from "next/head";
import Layout from "../comps/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Layout>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sibinfotech.com/" />
          <meta
            property="og:title"
            content="Digital Marketing Company, Website Designing & Developemnt Agency in Mumbai, India"
          />
          <meta
            property="og:description"
            content="SIB Infotech is a professionally managed full service web design &amp; development company in Mumbai, India, India. Since 2005 we have been helping businesses in India, USA, UK, Canada, Australia and world over to adapt and grow in an ever changing online world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development, Digital Marketing, Search Engine Optimization (SEO), Pay Per Click (PPC), Online Reputation Management (ORM), Social Media Optimization (SMO), Internet Marketing Services, Search Engine Marketing (SEM), Conversion Rate Optimization (CRO). Custom Website Design, E-commerce Websites, UI/UX Designing, Multimedia &amp; Graphics, Mobile Application Development, and Website Maintenance to organizations of all sizes from start-ups, MNC &#x27;s to Fortune 500 companies. We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base.In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you are looking for a great looking website and a team that can follow through by delivering top rankings you have found the right company."
          />
          <meta property="og:image:type" content="webp" />
          <meta
            property="og:image"
            content="https://www.sibinfotech.com/assets/images/logo.webp"
          />
          <meta property="og:image:alt" content="SIB Infotech Logo" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@sibinfotech" />
          <meta property="twitter:creator" content="@sibinfotech" />
          <meta name="twitter:url" content=" https://www.sibinfotech.com/" />
          <meta
            name="twitter:title"
            content="Digital Marketing Company, Website Designing & Developemnt Agency in Mumbai, India"
          />
          <meta
            name="twitter:description"
            content="SIB Infotech is a professionally managed full service web design &amp; development company in Mumbai, India, India. Since 2005 we have been helping businesses in India, USA, UK, Canada, Australia and world over to adapt and grow in an ever changing online world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development, Digital Marketing, Search Engine Optimization (SEO), Pay Per Click (PPC), Online Reputation Management (ORM), Social Media Optimization (SMO), Internet Marketing Services, Search Engine Marketing (SEM), Conversion Rate Optimization (CRO). Custom Website Design, E-commerce Websites, UI/UX Designing, Multimedia &amp; Graphics, Mobile Application Development, and Website Maintenance to organizations of all sizes from start-ups, MNC &#x27;s to Fortune 500 companies. We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base.In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you are looking for a great looking website and a team that can follow through by delivering top rankings you have found the right company."
          />
          <meta
            name="twitter:image"
            content="https://www.sibinfotech.com/assets/images/logo.webp"
          />

          <link
            rel="preload"
            href="/assets/images/banner/banner-video.mp4"
            as="video/mp4"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
          />

          {/* <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          /> */}
          {/* <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          /> */}
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            rel="preload"
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />

          {/* <noscript>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
          </noscript> */}
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
          {/* dd */}
          {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  );
}

export default MyApp;
