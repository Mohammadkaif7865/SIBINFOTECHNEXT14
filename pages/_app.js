import Head from "next/head";
import Layout from "../comps/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";
import "../styles/responsive.css";

import "../styles/blog.css";
import "../styles/chatbot.css";

// test
function MyApp({ Component, pageProps }) {
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
