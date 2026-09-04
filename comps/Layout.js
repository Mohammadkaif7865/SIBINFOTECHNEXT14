import Footer from "../comps/Footer";
import Header from "../comps/Header";
import ReviewsBar from "../comps/ReviewsBar";
import RelatedInsights from "../comps/RelatedInsights";
import { useRouter } from "next/router";
import Script from "next/script";

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdmin = router?.pathname?.startsWith("/admin");

  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
        {/* Renders only on service pages mapped in constants/blogLinkMap.js;
            returns null everywhere else. */}
        {!isAdmin && <RelatedInsights />}
        {!isAdmin && <ReviewsBar />}
        <Footer />
      </div>
      {!isAdmin && (
        <div className="bottom-bar1 d-lg-none">
          <a target="_blank" href="tel:+91-92222-60000">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a target="_blank" href="mailto:contact@sibinfotech.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+919222260000&text=Hi"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      )}

      {/* <Script
        defer
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      /> */}

      <Script
        defer
        strategy="afterInteractive"
        src="/assets/js/custom.js"
      ></Script>
    </>
  );
};

export default Layout;
