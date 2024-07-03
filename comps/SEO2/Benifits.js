import Image from "next/image";
import React from "react";

const Benifits = () => {
  return (
    <section>
      <div className="containerFull ">
        <div className="row">
          <div className="col-lg-7">
            <div className="leftBenefits">
              <h4 className="sub_heading fontHeading fontWeight700">
                Benefits of getting the SEO Services from the Best SEO Company
                in India
              </h4>
              <p className="mt-3">
                SIB Infotech, a leading SEO company in India, offers a
                comprehensive suite of services designed to optimize your online
                presence. Through proprietary methods, meticulous keyword
                research, and insightful competitor analysis, we guarantee
                success by implementing effective SEO techniques. With a wealth
                of expertise and experience, SIB Infotech propels your brand to
                new heights, securing top rankings on major search engines and
                connecting you with a broader audience. Our commitment lies in
                making crucial website improvements that resonate with your
                target market, ensuring sustained visibility and attracting a
                steady stream of new customers.
              </p>
              <p className="mt-2">
                At SIB Infotech, we understand the dynamics of the digital
                landscape, and our tailored approach to SEO is geared towards
                delivering tangible results. Renowned for our dedication to
                excellence, we employ self-developed strategies that go beyond
                conventional methods, ensuring your brand not only stands out
                but thrives in the competitive online marketplace.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            {/* <div className="rightBenefit">
              <ul>
                <li>Increase Organic Traffic FREE</li>
                <li>Increase Leads</li>
                <li>Increase Sales</li>
                <li>Increase Conversions</li>
                <li>Increase User Engagements</li>
                <li>Increase Online Visibility</li>
                <li>Increase Search Engine Ranking</li>
                <li>Increase Domain Authority</li>
                <li>Increase Online Reputation</li>
              </ul>
            </div> */}
          <Image className="w-100 h-auto " quality={100} width={500} height={400} src={"/assets/images/seo-infographic.jpg"} alt="infographics" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
