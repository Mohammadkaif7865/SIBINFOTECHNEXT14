import React from "react";

const TargetAudience = () => {
  const benefitItems = [
    {
      title: "Identify target audience",
      content:
        "Determining the target audience is a very important part of Facebook marketing because you are going to establish your brand value into their mind. We always keep a few points in mind while deciding the target audience,",
      points: [
        "What kind of hashtags they are using?",
        "Which location do they stay?",
        "Which location do they stay?"
      ]
    },
    {
      title: "Competitor content analysis",
      content:
        "We find it to be very important in the competition that we analyze and keep track that what your competitors are doing. Few below things you should always keep in mind",
      points: [
        "What kind of hashtags they are using?",
        "What kind of call to action they are using frequently?",
        "What is the engagement rate in their content?",
        "How frequently do they respond to their comments?"
      ]
    }
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row align-items-center">
          {benefitItems.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="facebook-ads-benefit-box">
                <h3 className="customHeading fontWeight800">{item.title}</h3>
                <p className="customText">{item.content}</p>
                <ul className="facebook-ads-benefit-list">
                  {item.points.map((point, idx) => (
                    <li className="customText" key={idx}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
