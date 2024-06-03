import Header from "../comps/Header";
import Footer from "../comps/Footer";
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
     
      <Script
        defer
        
        // strategy="beforeInteractive"
        strategy="lazyOnload"
        src="/assets/js/custom.js"

      ></Script>
       <Script
        defer
        // strategy="beforeInteractive"
        strategy="lazyOnload"
    
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />
    </>
  );
};

export default Layout;
