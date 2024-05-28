import Footer from "../comps/Footer";
import Header from "../comps/Header";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./custom"

import Script from "next/script";

const Layout = ({ children }) => {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [isStrickyFixed, setIsStrickyFixed] = useState(false);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //     setTimeout(() => {
  //       setCursorPosition({ x: e.clientX, y: e.clientY });
  //     }, 100);
  //   };

  //   const handleScroll = () => {
  //     const strickyScrollPos = 100;
  //     if (window.scrollY > strickyScrollPos) {
  //       setIsStrickyFixed(true);
  //     } else {
  //       setIsStrickyFixed(false);
  //     }
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="wrapper">
        <div className="cursor "></div>
        <div className="cursor"></div>
        <Header />
        {children}
        <Footer />
      </div>
      {/* <Script
        defer
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      ></Script> */}
      {/* <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
      {/* <script defer src="/assets/js/bundle.js"></script> */}
      <Script
      defer
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />
      {/* Load Bootstrap */}
      {/* <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js"
      /> */}
      <Script
      defer
      strategy="beforeInteractive"  src="/assets/js/custom.js"></Script>
   
    </>
  );
};

export default Layout;
