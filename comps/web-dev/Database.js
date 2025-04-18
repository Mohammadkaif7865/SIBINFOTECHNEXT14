import React from "react";

const Database = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6 position-relative ">
            <img
              className="image-full position-sticky"
              style={{
                top: "100px",
              }}
              src="assets/images/web-devlp-secure-database.svg"
              alt="Custom Web Application Development Company in India"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="customHeading">
              <span className="text_red">Highly Reliable, Secured</span> And{" "}
              <span className="text_red">Scalable Database Development</span>
            </h3>
            <p className="customText">
              Committed Server Management, Setup, Installation, Maintenance, and
              Security Services with Firewall Configuration and On Demand
              Backup.
            </p>
            <div className="scalable-database-box">
              <div className="front-end-box-heading">
                <div className="front-end-img-circle">
                  <img
                    src="assets/images/icons/web-devlp-img-20.svg"
                    alt="Custom Web Application Development Company in Delhi"
                  />
                </div>
                <h4 className="fontHeading">MySQL</h4>
              </div>
              <p className="customText mt-lg-0 mt-2">
                Meet the monstrous flood of cutting edge highlights like
                interest versatility, superior, information security, complete
                work process control, decreased absolute expense of possession
                and confirmation of 24X7 uptime with MySQL.
              </p>
            </div>
            <div className="scalable-database-box">
              <div className="front-end-box-heading">
                <div className="front-end-img-circle">
                  <img
                    src="assets/images/icons/web-devlp-img-23.svg"
                    alt="Custom Web Application Development Company in Mumbai"
                  />
                </div>
                <h4 className="fontHeading">Mongo DB</h4>
              </div>
              <p className="customText mt-lg-0 mt-2">
                Address new information challenges, store huge volumes of
                information, scale information base engineering effectively and
                modestly with Mongo DB, the main No SQL information base.
              </p>
            </div>
            <div className="scalable-database-box">
              <div className="front-end-box-heading">
                <div className="front-end-img-circle">
                  <img
                    src="assets/images/icons/web-devlp-img-23.svg"
                    alt="Custom Web Application Development Company in Mumbai"
                  />
                </div>
                <h4 className="fontHeading">PostgreSQL</h4>
              </div>
              <p className="customText mt-lg-0 mt-2">
                Address new information challenges, store huge volumes of
                information, scale information base engineering effectively and
                modestly with Mongo DB, the main No SQL information base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Database;
