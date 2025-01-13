import dynamic from "next/dynamic"; // For dynamic imports
import Banner from "./Banner"; // Static import for Banner

const BannerForm = dynamic(() => import("../BannerForm"));
const Introduction = dynamic(() => import("./Introduction"));
const OnPageSeoServices = dynamic(() => import("./OnPageSeoServices"));
const Benifits = dynamic(() => import("./Benifits"));
const Invest = dynamic(() => import("./Invest"));
const Optimization = dynamic(() => import("./Optimization"));
const Contact = dynamic(() => import("./Contact"));

const OnPageSeo = () => {
  return (
    <>
      <Banner />
     
      <Introduction />
    
      <OnPageSeoServices />
    
      <Benifits />
    
      <Invest />

      <Optimization />
      <Contact />
    </>
  );
};

export default OnPageSeo;
