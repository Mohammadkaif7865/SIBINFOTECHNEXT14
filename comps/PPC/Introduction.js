import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="bottomShape">
      <div className="containerFull">
        <div className="row">
          <div className="col-md-7">
            <div className="rightPPC">
              <h2 className="customHeading">PPC Management Services</h2>
              <p className="customText">
                SIB Infotech is an innovative{" "}
                <strong>
                  digital marketing, AdWords management, remarketing
                </strong>{" "}
                and <strong>PPC management company</strong> with proven track
                record to take your PPC campaigns to the next level and provide
                you with integrated, adverting and marketing solution.
              </p>
              <p className="customText">
                <strong>Pay-per-click(PPC)</strong> advertising allows you to
                reach your target customers searching for your products and
                services online by using target keywords.
              </p>
              <p className="customText">
                Pay per click represent a model of internet marketing where an
                advertiser run an ad and he will get charged if there will be a
                click on his ad. Advertiser pay a fees every time on his ad
                whenever he will get clicked. The most popular type of pay per
                click ad is search engine advertisement.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <Image
              width={500}
              height={450}
              quality={100}
              className="w-100 h-auto rounded"
              src={"/assets/images/ppc.webp"}
              alt="PPC management company"
            />
            {/* <div className="seoAuditForm shadow">
              <h4 className="customHeading">Free Website PPC Audit</h4>
              <form action="seo-email" method="POST">
                <div className="inputAudit">
                  <input
                    name="name"
                    placeholder="Name"
                    required="required"
                    type="text"
                  />
                </div>
                <div className="inputAudit">
                  <input
                    name="email"
                    placeholder="Email"
                    required="required"
                    type="email"
                  />
                </div>
                <div className="inputAudit">
                  <input name="title" placeholder="title" type="hidden" />
                </div>
                <div className="inputAudit">
                  <input
                    name="website"
                    placeholder="Website url"
                    required="required"
                    type="text"
                  />
                </div>
                <div className="inputAudit">
                  <button name="submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
