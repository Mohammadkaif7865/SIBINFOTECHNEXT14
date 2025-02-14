import React from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioData = [
  {
    id: 1,
    title: "Creative Branding",
    image: "/assets/images/gd-services/why-choose.jpg",
    largeImage: "/assets/images/gd-services/why-choose.jpg",
  },
  {
    id: 2,
    title: "Modern UI/UX Design",
    image: "/assets/images/gd-services/why-choose.jpg",
    largeImage: "/assets/images/gd-services/why-choose.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing Graphics",
    image: "/assets/images/gd-services/why-choose.jpg",
    largeImage: "/assets/images/gd-services/why-choose.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="bg_gray">
      <div className="containerFull">
        <h4 className="sub_heading text-center fontHeading fontWeight700">
          Our Portfolio
        </h4>

        <div className="mt-5">
          <div className="row">
            {portfolioData.map((item) => (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-4 ">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Link
                      href={item.largeImage}
                      title={item.title}
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{item.title}</h4>
                      </div>
                      <Image
                        src={item.image}
                        width={450}
                        height={300}
                        className="img-responsive"
                        alt={item.title}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
