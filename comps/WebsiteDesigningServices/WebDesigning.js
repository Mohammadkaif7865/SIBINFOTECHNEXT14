import dynamic from "next/dynamic"; 
import Banner from "./Banner"; 

// Dynamic imports for all other components
const Introduction = dynamic(() => import("./Introduction"));
const WorkWebdesign = dynamic(() => import("../WorkWebdesign"));
const WhyBest = dynamic(() => import("./WhyBest"));
const GrowBusiness = dynamic(() => import("./GrowBusiness"));
const Contact = dynamic(() => import("./Contact"));
const DesigningProcess = dynamic(() => import("./DesigningProcess"));
const Engagement = dynamic(() => import("./Engagement"));
const Industries = dynamic(() => import("./Industries"));
const Faqs = dynamic(() => import("./Faqs"));

const WebDesigning = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <WhyBest />
      <GrowBusiness />
      <section className="bg4 overflowHidden position-relative">
        <WorkWebdesign />
      </section>
      <Contact />
      <DesigningProcess />
      <Engagement />
      <Industries />
      <Faqs />
    </>
  );
};

export default WebDesigning;
