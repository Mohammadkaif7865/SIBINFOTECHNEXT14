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
 
  ];

  return (
    <section className="trusted">
      <div className="containerFull">
        <h4 className=" text-center large_heading2 fontHeading2 fontWeight600  fontHeading2 text_white">
          Deliver Growth
        </h4>
        <div className="row mt-5 deliver_growth_container">
          {marketingStats.map((value, index) => {
            return (
              <div className="col-lg-3 item_deliver_growth_main " key={index}>
                <div className="item_deliver_growth text-center">
                  <h4 className="large_heading2 fontHeading2 fontWeight600 text-white">
                    {value.value}
                  </h4>
                  <p className="text-white-50 mt-2">{value.description}</p>
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
