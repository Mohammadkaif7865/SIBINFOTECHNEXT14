import Footer from "../comps/Footer";
import Header from "../comps/Header";

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
         <i class="fa-solid fa-phone"></i>
         </a>
         <a target="_blank" href="mailto:contact@sibinfotech.com">
         <i class="fa-solid fa-envelope"></i>
         </a>
         <a target="_blank" href="https://api.whatsapp.com/send?phone=+919222260000&text=Hi">
         <i class="fa-brands fa-whatsapp"></i>
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
