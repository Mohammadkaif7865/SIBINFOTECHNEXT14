import Footer from "../comps/Footer";
import Header from "../comps/Header";

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
    </>
  );
};

export default Layout;
