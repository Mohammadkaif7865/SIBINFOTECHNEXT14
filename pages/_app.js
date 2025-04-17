import Head from "next/head";
import Layout from "../comps/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/css/style.css";
// import "https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/css/responsive.css";

import { Inter } from "next/font/google";
// import "@/public/assets/css/style.css"; // Your global CSS

const inter = Inter({
  subsets: ["latin"], // Subset optimizations
  weight: ["400", "700"], // Define font weights
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Head>
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
        <link
          rel="preconnect"
          href="https://visa-project.blr1.cdn.digitaloceanspaces.com"
        />

        {/* ✅ CDN-hosted CSS via <link> tag */}
        <link
          rel="stylesheet"
          href="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          href="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/css/responsive.css"
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
  );
}

export default MyApp;
