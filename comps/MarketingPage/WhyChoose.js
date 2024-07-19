import React from "react";

const WhyChoose = () => {
  return (
    <section className="m_whychoose">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6 m_whychoose_left text-white ">
            <h4 className="fontHeading2 heading fontWeight700 ">
              Why Choose WhatsApp?
            </h4>
            <p className="mt-2">
              Whatsapp is the One Platform that brings together <br />{" "}
              Actionable Notifications & Customer Support!
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4 col_items">
                <h4>98%</h4>
                <p>Open Rates</p>
              </div>
              <div className="col-lg-4 col_items">
                <h4>60%</h4>
                <p> Click Rates</p>
              </div>
              <div className="col-lg-4 col_items">
                <h4>2Bn+</h4>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
