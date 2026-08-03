import React from "react";

const CaseStudy = () => {
  return (
    <section className="py-5 bg-dark text-white bglr-case-study-bg">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="badge bg-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
              Featured Success Story
            </span>
            <h2 className="customHeading fontHeading fontWeight700 text-white mb-3">
              Case Study: Bangalore SaaS Company Achieves <span className="text-danger">285% Traffic Growth</span>
            </h2>

            <div className="mb-4">
              <h5 className="text-warning fontWeight700 mb-2">
                <i className="fa-solid fa-triangle-exclamation me-2"></i> The Challenge:
              </h5>
              <p className="text-white-80">
                A Bangalore-based business in a competitive niche was receiving minimal organic traffic despite having a professionally designed website. Key commercial keywords were ranking beyond page 3, and the Google Business Profile was incomplete.
              </p>
            </div>

            <div>
              <h5 className="text-info fontWeight700 mb-2">
                <i className="fa-solid fa-circle-check me-2"></i> SIB Infotech's Approach:
              </h5>
              <p className="text-white-80">
                SIB Infotech conducted a full technical SEO audit, rebuilt the on-page content structure around high-intent keywords, implemented LocalBusiness schema, optimised the Google Business Profile with keyword-rich descriptions and regular posts, and executed a three-month link acquisition campaign targeting Bangalore-relevant domains.
              </p>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="p-4 bg-dark-card rounded-4 border border-secondary-subtle">
              <h4 className="fontWeight700 text-white text-center mb-4">
                Verified Results After 6 Months
              </h4>
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 bg-secondary-dark rounded-3 text-center border border-secondary">
                    <div className="display-6 fw-bold text-success">+285%</div>
                    <div className="small text-white-70 mt-1">Organic Traffic Increase</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-secondary-dark rounded-3 text-center border border-secondary">
                    <div className="display-6 fw-bold text-warning">18</div>
                    <div className="small text-white-70 mt-1">Keywords on Page 1</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-secondary-dark rounded-3 text-center border border-secondary">
                    <div className="display-6 fw-bold text-info">+340%</div>
                    <div className="small text-white-70 mt-1">GBP Impressions Growth</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-secondary-dark rounded-3 text-center border border-secondary">
                    <div className="display-6 fw-bold text-danger">+190%</div>
                    <div className="small text-white-70 mt-1">Qualified Lead Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
