import React from "react";

const Estimate = () => {
  const benefits = [
    [
      "Influence Leads and Sales",
      "Increases customer attribution",
      "Convenient and fast",
    ],
    [
      "The most effective form of marketing",
      "Cheapest mode of advertising most",
      "Increases brand awareness & Visibility",
      "Increase website traffic.",
      "Rapid lead generation",
      "Boosts sales",
      "Highly measurable",
    ],
    [
      "Builds higher user engagement and reputation",
      "Increased mouth-to-mouth referrals",
      "Higher conversion rate",
      "Boosts SEO rankings",
      "Increase the brand loyalty.",
      "Your target audience spends a great deal of time on Facebook",
    ],
  ];

  return (
    <section className="blueBg radiudNone">
      <div className="containerFull">
        <div className="row">
          {[0, 1, 2].map((index) => (
            <div className="col-lg-4" key={index}>
              {index == 0 && (
                <h3 className="customHeading text-white">
                  Estimate requirements and set goals
                </h3>
              )}
              {index == 0 && (
                <p className="customText text-off-white">
                  determination of business objects play a very important role
                  in building an effective marketing strategy. Each objective is
                  the key point that should be achieved by the strategy to
                  assure successful Facebook marketing.
                </p>
              )}
              <ul className="fb-ads-list">
                {benefits[index].map((benefit, idx) => (
                  <li className="customText text-off-white" key={idx}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estimate;
