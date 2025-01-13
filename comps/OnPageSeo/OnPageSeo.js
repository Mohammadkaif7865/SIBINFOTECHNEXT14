import dynamic from "next/dynamic"; // For dynamic imports
import Banner from "./Banner"; // Static import for Banner

const Introduction = dynamic(() => import("./Introduction"), { ssr: false });
const OnPageSeoServices = dynamic(() => import("./OnPageSeoServices"), { ssr: false });
const Benifits = dynamic(() => import("./Benifits"), { ssr: false });
const Invest = dynamic(() => import("./Invest"), { ssr: false });
const Optimization = dynamic(() => import("./Optimization"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

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
