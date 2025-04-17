import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <p className="customText">
              LinkedIn is considered to be the most renowned formal social media
              platform. It is a great platform to build a career and connect
              with the people that can change your life drastically.
            </p>
            <p className="customText">
              With around 675+million members it can prove to be a great
              platform for any company to build a professional identity, access
              market knowledge, grow insight, increase opportunities and engage
              with a professional network.
            </p>
            <p className="customText">
              Market giants who have been in business for years, as well as the
              new start-ups, use LinkedIn for social media marketing. Job
              seekers find it an ideal place to hunt for jobs, and like that it
              is a great platform to advertise about your brand and its
              products.
            </p>
            <p className="customText">
              LinkedIn is said to be the top-rated platform for lead generation.
              It is useful for any business and can prove to be beneficial as it
              can grasp the connections and grow your brand through
              word-of-mouth.LinkedIn facilitates the companies and brands to
              create a company page that can establish your expertise on such a
              huge social platform. The company pages are meant to reach out to
              the other members and help
            </p>
          </div>
          <div className="col-lg-6">
            <div className="w-100   IntroImage     position-relative ">
              <Image
                fill
                quality={100}
                className="image-full imgAnimation"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/linkedin-ads-management-company-in-india.svg"
                alt="Linkedin-Ads-Management-Company-In-Delhi"
              />
            </div>
            <p className="customText">
              them to know about your business, brand as well as job
              opportunities with your company. LinkedIn helps reach the
              company’s goals that can lead to great success in a very short
              period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
