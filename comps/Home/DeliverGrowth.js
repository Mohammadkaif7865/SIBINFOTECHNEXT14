import React from "react";

const DeliverGrowth = () => {
  const marketingStats = [
    {
      value: "200K",
      description: "Keywords ranked on first page of Google",
    },
    {
      value: "10M+",
      description: "Cumulative website visits for clients per month",
    },
    {
      value: "7X",
      description: "Return on marketing investment",
    },
    {
      value: "140%",
      description: "More impressions in search engines",
    },
    // {
    //   value: "500%",
    //   description: "Increase in inbound leads"
    // }
  ];

  return (
    <section className="deliverGrowth">
      <div className="containerFull">
      <h4 className=" text-center large_heading2 fontHeading2 fontWeight600  fontHeading2 text_red">
      Deliver Growth
        </h4>
        <div className="row mt-5">
          {marketingStats.map((value, index) => {
            return (
              <div className="col-lg-3 pe-5">
                <div className="pe-2 item_deliver_growth">
                  <h4 className="heading fontHeading2 fontWeight600">{value.value}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeliverGrowth;
