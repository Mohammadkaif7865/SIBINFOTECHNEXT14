import Link from "next/link";
import AdsMgt from "./AdsMgt";
import HeroLinkedinMgt from "./HeroLinkedinMgt";
import Intro from "./Intro";
import Strategies from "./Strategies ";

const LinkedinAdsPage = () => {
  return (
    <>
      <HeroLinkedinMgt />

      <Intro />

      <AdsMgt />

      <Strategies />
      <section className="bgGrey">
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
      </section>
      <section class="blueBg2">
        <div class="containerFull">
          <div class="callAction">
            <h3 class="customLineHeight2">
              We as the best LinkedIn marketing agency always make it certain
              that your business is on track by meeting all the Social Media
              Marketing goals efficiently.
            </h3>
            <Link href="/contact-us">
              Speak to our linkedin marketing experts
            </Link>
          </div>
          <svg
            id="pattner"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#528af9"
              fill-opacity="1"
            ></path>{" "}
          </svg>
        </div>
      </section>
    </>
  );
};

export default LinkedinAdsPage;
