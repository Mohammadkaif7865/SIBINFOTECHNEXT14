import BannerSlider from "./BannerSlider";
import Blog from "./Blog";
import Faq from "./Faq";
import Madeby from "./Madeby";
import Testimonials from "./Testimonials";
// import WhatWeDo from "./WhatWeDo";
import WeStrong from "./WeStrong";
// import WhatWeDo2 from "./WhatWeDo2";
import About2 from "./About2";
import OurClients from "./OurClients";
import WhatWeDo3 from "./WhatWeDo3";
// import PartnerBadges from "./PartnerBadges";
import BrandBuild from "./BrandBuild";
import CaseStudy2 from "./CaseStudy2";
import Conversions from "./Conversions";
import Cta from "./Cta";
import PartnerBadges2 from "./PartnerBadges2";
import Pricing from "./Pricing";
import SIBPower from "./SIBPower";
import WhySIB from "./WhySIB";
// import DeliverGrowth from "./DeliverGrowth";
import Featured from "./Featured";
import Industries2 from "./Industries2";
import OurPeople from "./OurPeople";
import Tools from "./Tools";
import Abbout3 from "./Abbout3";


const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <Abbout3 />
      {/* <About2 /> */}
      {/* <BannerSlider /> */}
      {/* <TrustedSection /> */}
      <WeStrong />
      <WhatWeDo3 />
      <Cta />
      <BrandBuild />
      <WhySIB />
      
      <OurPeople />
      <SIBPower />
      <Madeby />
      <PartnerBadges2 />
      <CaseStudy2 />
      <OurClients />
      <Testimonials />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        <Tools />
      </div>
      <Industries2 />
      <Pricing />
      {/* <Map /> */}

      {/* <Counter /> */}
      {/* 
      
      
     
  
     
    
     
  
     
      
      
    
      
    */}

      {/* <Presence/> */}

      {/* <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices /> */}

      <Faq />
      <Blog />
    </>
  );
};

export default HomePage;
