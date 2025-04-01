import React from "react";

const DeliverGrowth = () => {
  const marketingStats = [
    {
      value: "135+",
      description: "Agencies growing with our white-label services",
    },
    {
      value: "72%",
      description: "Faster project turnaround compared to in-house teams",
    },
    {
      value: "50%+",
      description: "Reduction in operational costs for agencies",
    },
    {
      value: "3X",
      description: "Faster agency growth with white-label scalability ",
    },
  ];

  return (
    <section className="trusted delivier_growth_main">
      <div className="containerFull">
        <h4 className=" text-center large_heading2 fontHeading2 fontWeight600  fontHeading2 text_white">
          Measurable Growth, Proven Results
        </h4>

        <h5 className="text-white text-center mt-4">Empowering Small & Medium Agencies to Scale</h5>
        <div className="row mt-4 pt-3 deliver_growth_container">
          {marketingStats.map((value, index) => {
            return (
              <div className="col-lg-3 col-6 mb-4 item_deliver_growth_main " key={index}>
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
