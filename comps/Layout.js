import Footer from "../comps/Footer";
import Header from "../comps/Header";

import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="cursor "></div>
        <div className="cursor"></div>
        <Header />
        {children}
        <Footer />
      </div>

      <Script
        defer
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />

      <Script
        defer
        strategy="beforeInteractive"
        src="/assets/js/custom.js"
      ></Script>
    </>
  );
};

export default Layout;
