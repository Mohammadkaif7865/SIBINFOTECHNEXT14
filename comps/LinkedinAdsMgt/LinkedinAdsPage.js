import dynamic from 'next/dynamic';
const AdsMgt = dynamic(() => import("./AdsMgt"));
const HeroLinkedinMgt = dynamic(() => import("./HeroLinkedinMgt"));
const Intro = dynamic(() => import("./Intro"));
const Strategies = dynamic(() => import("./Strategies "));
const LinkedInAdvertising = dynamic(() => import("./LinkedInAdvertising"));


const LinkedinAdsPage = () => {
  return (
    <>
      <HeroLinkedinMgt />

      <Intro />

      <AdsMgt />

      <Strategies />
      {/* <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <ul className="instagram-list">
                <li className="customText">
                  You keep your connections engaged and updated daily
                </li>
                <li className="customText">
                  Participate in discussions regularly or weekly
                </li>
                <li className="customText">
                  Make sure to follow influencers who can prove helpful for the
                  brand
                </li>
                <li className="customText">
                  Send invites daily with a personal touch
                </li>
                <li className="customText">
                  Efficiently display the company’s information
                </li>
                <li className="customText">
                  Include your website and blog links on the posts
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3 className="customHeading">
                How <span className="text_red">LinkedIn advertising </span>helps
                your business?
              </h3>
              <p className="customText">
                LinkedIn advertising is a tool that can lead your conversions to
                the top graphs and boost sales in no time. All brand needs are a
                top-rated LinkedIn marketing company that can help your brand to
                reach the heights with its experience and expertise.
              </p>
              <p className="customText">
                SIB Infotech is among the best LinkedIn marketing company in
                India, we always assure that your brand gets the limelight it is
                meant for with our astonishing marketing services.
              </p>
              <p className="customText">
                We only do marketing that works. Any business can deal with
                efficient LinkedIn marketing if
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <LinkedInAdvertising />
  
    </>
  );
};

export default LinkedinAdsPage;
