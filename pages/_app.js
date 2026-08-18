import Head from "next/head";
import { useEffect } from "react";
import Layout from "../comps/Layout";
import { ToastContainer } from "react-toastify";
import { trackCallClick, trackWhatsAppClick } from "../functions/analytics";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

import "../styles/blog.css";
import "../styles/chatbot.css";

// test
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest(
        'a[href^="tel:"], a[href^="https://wa.me"], a[href^="https://api.whatsapp.com"], a[href*="whatsapp.com/send"]',
      );
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.indexOf("tel:") === 0) {
        trackCallClick();
      } else if (/wa\.me|whatsapp\.com/.test(href)) {
        trackWhatsAppClick();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Layout>
      <Head>
        
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
