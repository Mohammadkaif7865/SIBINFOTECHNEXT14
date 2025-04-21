import React from "react";
import { Image } from "react-bootstrap";

const KeyFeature = () => {
  const data = [
    {
      title: "User-Centric Design",
      description:
        "A website should prioritize user experience (UX) with an intuitive interface, easy navigation, and clear calls to action. Thoughtful UI/UX design improves engagement, simplifies interactions, and encourages visitors to convert.",
      icon: "/assets/images/icons/web-dev/customer-centricity.png",
    },
    {
      title: "SEO-Optimized Structure",
      description:
        "From the foundation up, your website should follow SEO best practices. Clean code, schema markup, and a logical site architecture help search engines understand and rank your site more effectively.",
      icon: "/assets/images/icons/web-dev/seo.png",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "With mobile-first indexing now a standard, your website must be responsive across all devices. A consistent, seamless experience on smartphones, tablets, and desktops is essential for both usability and SEO.",
      icon: "/assets/images/icons/web-dev/responsive.png",
    },
    {
      title: "Fast-Loading Pages",
      description:
        "Page speed significantly impacts user retention and search engine rankings. Optimization of images, scripts, and code ensures that your site loads quickly, keeping users engaged and reducing bounce rates.",
      icon: "/assets/images/icons/web-dev/fast-website.png",
    },
    {
      title: "Intuitive Navigation/Easy",
      description:
        "Clear and simple navigation is critical. Users should be able to find what they're looking for without confusion. Well-structured menus and internal linking improve usability and time spent on site.",
      icon: "/assets/images/icons/web-dev/navigation.png",
    },
    {
      title: "Secure & Scalable Solutions",
      description:
        "Security should never be an afterthought. Websites need secure frameworks (like HTTPS, firewalls, and anti-malware tools) and scalable architecture to grow with your business and handle increasing traffic.",
      icon: "/assets/images/icons/web-dev/verified.png",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Your site should render consistently across all major browsers — including Chrome, Firefox, Safari, and Edge — to deliver a uniform experience for all users.",
      icon: "/assets/images/icons/web-dev/cross.png",
    },
    {
      title: "Accessibility (WCAG Compliance)",
      description:
        "A good website must be inclusive. Today’s web development also needs to consider accessibility. Ensuring compliance with WCAG guidelines helps make your content accessible to users with disabilities, which also improves usability and SEO.",
      icon: "/assets/images/icons/web-dev/global-access.png",
    },
    {
      title: "Content Management System (CMS)",
      description:
        "A reliable CMS allows you to easily manage and update content without technical expertise. Platforms like WordPress, Magento, and Shopify offer flexibility and control for ongoing website maintenance.",
      icon: "/assets/images/icons/web-dev/cms-2.png",
    },
    {
      title: "Third-Party API Integration",
      description:
        "Modern websites often need to integrate with tools like CRMs, ERP systems, chatbots, and payment gateways. Choosing a platform that supports smooth API integration is crucial for business automation and scalability.",
      icon: "/assets/images/icons/web-dev/api-2.png",
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Integrate tools to track user behavior and site performance, helping you make data-driven improvements.",
      icon: "/assets/images/icons/web-dev/api-2.png",
    },
    {
      title: "Scalable Hosting & Infrastructure",
      description:
        "Choose reliable, scalable hosting to ensure speed, uptime, and growth with your website’s needs",
      icon: "/assets/images/icons/web-dev/api-2.png",
    },
  ];

  return (
    <section className="bg-black">
      <div className="containerFull">
        <h4 className="text-center large_heading  fontWeight600 text-white">
          What to Consider in Web Development: Key Features for a Successful
          Website
        </h4>

        <p className="text-center col-lg-8 mx-auto mt-3 text-white">
          When developing a website, it's essential to focus on various elements
          that contribute to its success. These key factors help ensure your
          site is user-friendly, scalable, secure, and optimized for visibility
          in search engines.
        </p>
        <div className="row mt-5  justify-content-center">
          {data.map((value, i) => {
            return (
              <div key={i} className="col-lg-3 mb-3">
                <div className="p-3">
                  <div className="text-center">
                    <div className="icon_web_key">
                      <Image width={60} height={60} src={value.icon} alt="" />
                    </div>
                  </div>
                  <h4 className="text-center mt-4 text-white small_heading fontWeight">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-center item_content_key text-white">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
