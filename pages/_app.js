import Head from "next/head";
import Layout from "../comps/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from "react-helmet-async";


import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const path = usePathname();

  return (
    <HelmetProvider>
      <Layout>
        <Head>
          {/* new added */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Sib Infotech" />
          <meta name="publisher" content="Sib Infotech" />
          <link rel="canonical" href={`https://www.sibinfotech.com${path}`} />

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

          <noscript>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
          </noscript>
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
        </Head>
        <ToastContainer />
        <Component {...pageProps} />
        
      </Layout>
    </HelmetProvider>
  );
}

export default MyApp;
