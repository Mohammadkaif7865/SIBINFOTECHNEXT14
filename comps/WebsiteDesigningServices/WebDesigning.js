import dynamic from "next/dynamic";
import Banner from "./Banner";

// Dynamic imports for all other components
const Introduction = dynamic(() => import("./Introduction"), { ssr: false });
const WorkWebdesign = dynamic(() => import("../WorkWebdesign"), { ssr: false });
const WhyBest = dynamic(() => import("./WhyBest"), { ssr: false });
const GrowBusiness = dynamic(() => import("./GrowBusiness"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });
const DesigningProcess = dynamic(() => import("./DesigningProcess"), {
  ssr: false,
});
const Engagement = dynamic(() => import("./Engagement"), { ssr: false });
const Industries = dynamic(() => import("./Industries"), { ssr: false });
const Faqs = dynamic(() => import("./Faqs"), { ssr: false });

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
