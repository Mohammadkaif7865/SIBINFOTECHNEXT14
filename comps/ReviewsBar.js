import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const platforms = [
  {
    name: "Google",
    rating: 4.8,
    reviews: 250,
    logo: "/assets/images/logos/google.webp",
    link: "https://www.google.com/maps?ll=19.177215,72.833803&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10831579352190589026",
  },
  {
    name: "Clutch",
    rating: 4.9,
    reviews: 16,
    logo: "/assets/images/logos/clutch.webp",
    link: "https://clutch.co/profile/sib-infotech",
  },
  {
    name: "Trustpilot",
    rating: 4.8,
    reviews: 38,
    logo: "/assets/images/logos/trust-pilot.webp",
    link: "https://www.trustpilot.com/review/sibinfotech.com",
  },
  {
    name: "Justdial",
    rating: 4.6,
    reviews: 152,
    logo: "/assets/images/logos/just-dial.webp",
    link: "https://www.justdial.com/Mumbai/Sib-Infotech-Pvt-Ltd-Malad-West/022PXX22-XX22-130706120218-C2H1_BZDET?trkid=&term=&ncatid=11028380&area=&search=Showing%20Results%20for%20%22Sib%20Infotech%20Malad%20West%22%20in%20Mumbai&mncatname=Sib%20Infotech%20Malad%20West&ftterm=Sib%20Infotech%20Malad%20West&csell=&oncatid=11028380&abd_btn=&abd_heading=&isFreetext=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=",
  },
  {
    name: "GoodFirms",
    rating: 5.0,
    reviews: 1,
    logo: "/assets/images/logos/goodfirms.webp",
    link: "https://www.goodfirms.co/company/sib-infotech-digital-marketing-agency",
  },
];

const testimonials = [
  {
    text: "SIB Infotech has designed website for our company. We are very happy with outcome. They are not only professional but also putting their heart into work. We will always refer them for quality work and perfect price.",
    author: "Rupesh Maniar",
    role: "Real Value Finloan Services Pvt. Ltd.",
    platform: "Google",
    platformLogo: "/assets/images/logos/google.webp",
    img: "/assets/images/rupesh-maniar.webp",
    initials: "RM",
    color: "#4285f4",
  },
  {
    text: "The client loved the platform that the SIB Infotech team developed for them, especially the calculator function. The company appreciated the team's high level of professionalism, communication, and care on the project. They are happy and willing to work with the team again.",
    author: "Tima Elhajj",
    role: "CEO & Founder, Tima Media",
    platform: "Clutch",
    platformLogo: "/assets/images/logos/clutch.webp",
    img: "/assets/images/tima-elhajj.webp",
    initials: "TE",
    color: "#ff4f4f",
  },
  {
    text: "The platform has just launched but some of the company's old clients have already expressed their positive feedback on the new website. The company appreciates how the SIB Infotech team showed they cared for the project through their open and honest communication.",
    author: "Timothy Scafaria",
    role: "Founder, remoteUprep, LLC",
    platform: "Clutch",
    platformLogo: "/assets/images/logos/clutch.webp",
    img: "/assets/images/timothy-scafaria.webp",
    initials: "TS",
    color: "#ff4f4f",
  },
  {
    text: "Excellent SEO services. Our website traffic increased significantly within 3 months. Very professional team with transparent reporting and regular updates. Highly recommend them for any business looking to grow online.",
    author: "Priya Sharma",
    role: "Marketing Head, TechSolutions",
    platform: "Google",
    platformLogo: "/assets/images/logos/google.webp",
    img: null,
    initials: "PS",
    color: "#4285f4",
  },
  {
    text: "Outstanding Google Ads management. ROI improved by 3x in just 2 months. The team is very responsive and data-driven in their approach to paid campaigns. Great partner for performance marketing.",
    author: "Rajesh Kumar",
    role: "Director, StartupHub India",
    platform: "Trustpilot",
    platformLogo: "/assets/images/logos/trust-pilot.webp",
    img: null,
    initials: "RK",
    color: "#00b67a",
  },
  {
    text: "Best digital marketing agency in Mumbai. They handle our complete social media and SEO. Leads have increased by 180% in just 6 months. Their strategy and execution are top-notch.",
    author: "Ananya Desai",
    role: "Brand Manager, LuxeInteriors",
    platform: "Justdial",
    platformLogo: "/assets/images/logos/just-dial.webp",
    img: null,
    initials: "AD",
    color: "#f59e0b",
  },
];

const REVIEWS_PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(testimonials.length / REVIEWS_PER_PAGE);

function ReviewsBar() {
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextPage = useCallback(() => {
    setActivePage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextPage, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextPage]);

  const handleDotClick = (i) => {
    setActivePage(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 15000);
  };

  const start = activePage * REVIEWS_PER_PAGE;
  const visibleReviews = testimonials.slice(start, start + REVIEWS_PER_PAGE);

  return (
    <section>
      <div className="containerFull">
        {/* Heading Row */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="heading fontWeight600">
              Rated 4.8 by Clients on{" "}
              <span className="text_red">Every Major Review Platform</span>
            </h2>
            <p className="customText mt-3">
              Our 4.8 average client rating is built on delivering the results
              we promise. From SEO rankings and lead generation to web
              development and paid marketing, our clients across 40+ countries
              have shared their experience publicly.
            </p>
          </div>
        </div>

        {/* Stat Box + Platform Logos */}
        <div className="row align-items-center">
          <div className="col-lg-3 text-center">
            <div className="testimonialLeftBox shadow-lg">
              <p className="large_heading3 text-white fontWeight600 text-center">
                4.8
              </p>
              <div className="starIcontesti">
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/icons/star.svg"
                  alt="4.8 Star Rating"
                />
              </div>
              <p className="title fontWeight400 mt-2 text-center text-white">
                Digital Marketing and SEO Agency Reviews about SIB Infotech
              </p>
            </div>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="row g-3">
              {platforms.map((p, i) => (
                <div className="col-lg-2 col-4 col-6" key={i}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logoTestimonial position-relative bg-white rounded p-3 d-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="glossyBorder7"></div>
                    <div className="glossyBorder8"></div>
                    <Image
                      width={200}
                      height={200}
                      src={p.logo}
                      alt={`${p.name} Reviews`}
                      className="img-fluid"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scrolling Testimonial Cards */}
        <div className="rb_carousel mt-4">
          <div className="rb_carousel_view">
            <div
              className="rb_carousel_track"
              key={activePage}
            >
              <div className="row g-4">
                {visibleReviews.map((t, i) => (
                  <div className="col-lg-6" key={`${activePage}-${i}`}>
                    <div className="customCard h-100 p-4">
                      <div className="d-flex align-items-center mb-3">
                        {t.img ? (
                          <div
                            className="rounded-circle overflow-hidden position-relative me-3"
                            style={{
                              width: "60px",
                              height: "60px",
                              background: "#c3d6fc",
                              border: "1px solid #c3d6fc",
                            }}
                          >
                            <Image
                              fill
                              quality={100}
                              className="object-fit-cover"
                              src={t.img}
                              alt={t.author}
                            />
                          </div>
                        ) : (
                          <div
                            className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "60px",
                              height: "60px",
                              minWidth: "60px",
                              background: t.color,
                              color: "#fff",
                              fontSize: "18px",
                              fontWeight: 700,
                            }}
                          >
                            {t.initials}
                          </div>
                        )}
                        <div>
                          <p className="title fontWeight600 mb-0">
                            {t.author}
                          </p>
                          <p className="small mb-0">{t.role}</p>
                        </div>
                      </div>
                      <div className="starIcontesti mb-3">
                        <Image
                          width={100}
                          height={100}
                          src="/assets/images/icons/star.svg"
                          alt="5 Star Rating"
                        />
                      </div>
                      <p className="customText">{t.text}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <p className="fontWeight500 text_red text-uppercase small mb-0">
                          Reviewed From
                        </p>
                        <Image
                          width={80}
                          height={40}
                          className="h-auto"
                          src={t.platformLogo}
                          alt={t.platform}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="rb_dots_row mt-4">
            {[...Array(TOTAL_PAGES)].map((_, i) => (
              <button
                key={i}
                className={`rb_dot_small ${i === activePage ? "rb_dot_small_active" : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to review page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsBar;
