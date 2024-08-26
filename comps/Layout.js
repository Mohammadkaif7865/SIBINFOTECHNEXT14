import Footer from "../comps/Footer";
import Header from "../comps/Header";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
       
      </div>
      <div className="bottom-bar1 d-lg-none">
         
         <a target="_blank" href="tel:+91-92222-60000">
           <FaPhone />
         </a>
         <a target="_blank" href="mailto:contact@sibinfotech.com">
           <IoIosMail />
         </a>
         <a target="_blank" href="">
           <FaWhatsapp />
         </a>
      
     </div>

      {/* <Script
        defer
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      /> */}

      <Script
        defer
        strategy="beforeInteractive"
        src="/assets/js/custom.js"
      ></Script>
    </>
  );
};

export default Layout;
