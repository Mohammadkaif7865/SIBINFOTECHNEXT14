import Image from "next/image";
import React from "react";

const Strategy = () => {
  const seoItems = [
    {
      imgSrc: "assets/images/icons/mobile-seo-companies-in-mumbai.svg",
      alt: "mobile-seo-firm-in-india",
      title: "Do not use Pop-ups",
      description:
        "User is easily irritated with pop-ups as it is difficult to close them each time. Pop-ups can lead to high bounce rates dues to audience dissatisfaction.",
    },
    {
      imgSrc: "assets/images/icons/best-mobile-seo-company.svg",
      alt: "mobile-seo-firm-in-delhi",
      title: "Build mobile sitemaps",
      description:
        "The creation of an XML sitemap for your website’s mobile version is a mandatory step. These sitemaps keep your mobile-friendly websites separated from the desktop ones to exterminate indexing problems.",
    },
    {
      imgSrc: "assets/images/icons/best-mobile-seo-company-in-india.svg",
      alt: "mobile-seo-firm-in-mumbai",
      title: "Don't block CSS, JavaScript, or Images",
      description:
        "CSS or JavaScript contains the codes that include the information that determines if the website is mobile-friendly or not. The search crawlers need access to the scripts to rank the websites on SERPs. These scripts play an important role to ensure that the search engines fully render your website. Back a few years, some of these technologies were not supported by mobile devices so the developers considered blocking CSS, JavaScript, or images for user's convenience. Since the times have changed drastically, developers need not block these elements at present as they play a crucial role in helping search engines understand if your website is responsive and efficient or not. The web crawlers and Google bots look for these elements as to segregate websites as per audience needs.",
    },
    {
      imgSrc: "assets/images/icons/best-mobile-seo-company-in-mumbai.svg",
      alt: "mobile-seo-agency-in-india",
      title: "Optimize for Local search",
      description:
        "mobile optimization is responsible to update and maintain all the local searches on your website. The local info plays a dominant role in determining if the user finds your website when they search for the services near themselves. The audience often searches for a local business near them, the local information plays its part in such situations. If your business involves local or geographical based services or elements never ignore them to be optimized for mobile content for local searches. It includes the name of your company, address, contact details along with your city and state name in the website's metadata.",
    },
  ];

  const seoBoxes = [
    {
      icon: "assets/images/icons/mobile-seo-agency-in-india.svg",
      title: "Readability of the website content",
      description:
        "Website content is the main dish of the website's menu. We make sure that the content on your website is readable, catchy, and informative. Mobile SEO is responsible to optimize the page content in such a way that the user does not need to zoom in or out to read the content on the page.",
    },
    {
      icon: "assets/images/icons/mobile-seo-agency-in-delhi.svg",
      title: "Page load speed on mobile",
      description:
        "Studies have confirmed that 53% of the mobile website audience discard a page if it takes more than 3 seconds to load. Mobile SEO tools ensure that your website has fast loading time leading to a boost in the website rankings on the Search Engine Result Pages(SERPs).",
    },
    {
      icon: "assets/images/icons/mobile-seo-agency-in-mumbai.svg",
      title: "Page design",
      description:
        "The web browsers are attracted majorly to the websites that look attractive and are easy to navigate. Mobile optimization manages your website in such a manner that it can be used with ease by each visitor. It also makes sure that the navigation tools of the website are clean and easy-to-use creating a positive impact on the website audience.",
    },
    {
      icon: "assets/images/icons/mobile-seo-companies-in-india.svg",
      title: "Do not use Flash Player",
      description:
        "Sometimes the flash player plug-in might not be accessible on the user's mobile which means they will miss out on the major fun of the special animations and effects, one can rather consider using HTML5 for animations.",
    },
  ];
  return (
    <section className="customPadding">
      <div className="containerFull">
        <h3 className="customHeading text-center">
          How to make an Impact with a successful{" "}
          <span className="text_red">Mobile SEO</span> Strategy?
        </h3>
        <p className="customText text-center">
          The efficiency and working of your website on mobile phones are
          affected by various Mobile SEO elements. These elements or factors are
          responsible for search engine rankings, search visibility, and optimal
          user experience. SEO experts at SIB make sure that your page is
          well-optimized and no affecting key factor is left unattended. We
          follow some Best Practices for Mobile SEO which are listed below.
        </p>
        {/* <div className="row b">
          <div className="col-lg-5 img-sticky">
            <div className="p-sticky">
              <img
                className="image-full"
                src="assets/images/best-mobile-seo-company-in-delhi.svg"
                alt="best-mobile-seo-company-in-delhi"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/mobile-seo-agency-in-india.svg"
                        alt="mobile-seo-company"
                      />
                    </div>
                    <h4>Readability of the website content</h4>
                  </div>
                  <p className="customText">
                    website content is the main dish of the website's menu. We
                    make sure that the content on your website is readable,
                    catchy, and informative. Mobile SEO is responsible to
                    optimize the page content in such a way that the user does
                    not need to zoom in or out to read the content on the page.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/mobile-seo-agency-in-delhi.svg"
                        alt="mobile-seo-company-in-india"
                      />
                    </div>
                    <h4>Page load speed on mobile</h4>
                  </div>
                  <p className="customText">
                    studies have confirmed that 53% of the mobile website
                    audience discard a page if it takes more than 3 seconds to
                    load. Mobile SEO tools ensure that your website has fast
                    loading time leading to a boost in the website rankings on
                    the Search Engine Result Pages(SERPs).
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/mobile-seo-agency-in-mumbai.svg"
                        alt="mobile-seo-company-in-delhi"
                      />
                    </div>
                    <h4>Page design</h4>
                  </div>
                  <p className="customText">
                    the web browsers are attracted majorly to the websites that
                    look attractive and are easy to navigate. Mobile
                    optimization manages your website in such a manner that it
                    can be used with ease by each visitor. It also makes sure
                    that the navigation tools of the website are clean and
                    easy-to-use creating a positive impact on the website
                    audience.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/mobile-seo-companies-in-india.svg"
                        alt="mobile-seo-company-in-mumbai"
                      />
                    </div>
                    <h4>Do not use Flash Player</h4>
                  </div>
                  <p className="customText">
                    Sometimes the flash player plug-in might not be accessible
                    on the user's mobile which means they will miss out on the
                    major fun of the special animations and effects, one can
                    rather consider using HTML5 for animations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-5 img-sticky">
            <div className="p-sticky">
              <img
                className="image-full"
                src="assets/images/best-mobile-seo-company-in-delhi.svg"
                alt="best-mobile-seo-company-in-delhi"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className=" d-grid MobileSEO_Stratgy ">
              {seoBoxes.map((box, index) => (
                <div key={index} className=" off-page-seo-box ">
                  <div className="">
                    <div className="off-page-seo-box-heading">
                      <div className="img-circle">
                        <Image
                          width={50}
                          height={50}
                          quality={100}
                          src={box.icon}
                          alt={box.title}
                        />
                      </div>
                      <h4>{box.title}</h4>
                    </div>
                    <p className="customText">{box.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row mt-4">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/mobile-seo-companies-in-mumbai.svg"
                        alt="mobile-seo-firm-in-india"
                      />
                    </div>
                    <h4>Do not use Pop-ups</h4>
                  </div>
                  <p className="customText">
                    User is easily irritated with pop-ups as it is difficult to
                    close them each time. Pop-ups can lead to high bounce rates
                    dues to audience dissatisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="off-page-seo-box">
                  <div className="off-page-seo-box-heading">
                    <div className="img-circle">
                      <img
                        src="assets/images/icons/best-mobile-seo-company.svg"
                        alt="mobile-seo-firm-in-delhi"
                      />
                    </div>
                    <h4>Build mobile sitemaps</h4>
                  </div>
                  <p className="customText">
                    The creation of an XML sitemap for your website’s mobile
                    version is a mandatory step. These sitemaps keep your
                    mobile-friendly websites separated from the desktop ones to
                    exterminate indexing problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="off-page-seo-box off-page-seo-box-ex-height">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/best-mobile-seo-company-in-india.svg"
                    alt="mobile-seo-firm-in-mumbai"
                  />
                </div>
                <h4>Don't block CSS, JavaScript, or Images</h4>
              </div>
              <p className="customText">
                CSS or JavaScript contains the codes that include the
                information that determines if the website is mobile-friendly or
                not. The search crawlers need access to the scripts to rank the
                websites on SERPs. These scripts play an important role to
                ensure that the search engines fully render your website. Back a
                few years, some of these technologies were not supported by
                mobile devices so the developers considered blocking CSS,
                JavaScript, or images for user's convenience. Since the times
                have changed drastically, developers need not block these
                elements at present as they play a crucial role in helping
                search engines understand if your website is responsive and
                efficient or not. The web crawlers and Google bots look for
                these elements as to segregate websites as per audience needs.
              </p>
            </div>
            <div className="off-page-seo-box off-page-seo-box-height">
              <div className="off-page-seo-box-heading">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/best-mobile-seo-company-in-mumbai.svg"
                    alt="mobile-seo-agency-in-india"
                  />
                </div>
                <h4>Optimize for Local search</h4>
              </div>
              <p className="customText">
                mobile optimization is responsible to update and maintain all
                the local searches on your website. The local info plays a
                dominant role in determining if the user finds your website when
                they search for the services near themselves. The audience often
                searches for a local business near them, the local information
                plays its part in such situations. If your business involves
                local or geographical based services or elements never ignore
                them to be optimized for mobile content for local searches. It
                includes the name of your company, address, contact details
                along with your city and state name in the website's metadata.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="p-sticky">
              <img
                className="image-full"
                src="assets/images/best-mobile-seo-firm.svg"
                alt="best-mobile-seo-firm"
              />
            </div>
          </div>
        </div> */}
        <div className="row mt-4">
          <div className="col-lg-7">
            <div className="d-grid MBStrategy2">
              {seoItems.map((item, index) => (
                <div key={index} className="off-page-seo-box mt-4">
                  <div className="">
                    <div className="off-page-seo-box-heading">
                      <div className="img-circle">
                        <img src={item.imgSrc} alt={item.alt} />
                      </div>
                      <h4>{item.title}</h4>
                    </div>
                    <p className="customText">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="p-sticky">
              <img
                className="image-full"
                src="assets/images/best-mobile-seo-firm.svg"
                alt="best-mobile-seo-firm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
