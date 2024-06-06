import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "@/comps/Home/HomePage";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Home() {
  const metaTags = (
    <>
      <title>
        Website Designing, Development & Digital Marketing SEO Company Agency in
        Mumbai India
      </title>
      <meta
        name="keywords"
        content="best website designing company in Mumbai, website designing in Mumbai, web designing company in Mumbai, re-website designing agency in Mumbai, web design Mumbai, website designing company in Mumbai, website designing services in Mumbai, Website Designing "
      />
      <meta
        name="description"
        content="SIB is Google Partner Agency & Top Company in Mumbai for Digital Marketing, Website Designing, Mobile App Development, SEO, Google AdWords PPC Management, Web Development, Custom CRM & ERP, E-Commerce Design, Website Redesign services & a complete web solution firm in Navi Mumbai, Thane, Pune, Delhi NCR, Noida, Gurgaon, India"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/" />
      <meta
        property="og:title"
        content="Digital Marketing Company, Website Designing & Developemnt Agency in Mumbai, India"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a professionally managed full service web design &amp; development company in Mumbai, India, India. Since 2005 we have been helping businesses in India, USA, UK, Canada, Australia and world over to adapt and grow in an ever changing online world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development, Digital Marketing, Search Engine Optimization (SEO), Pay Per Click (PPC), Online Reputation Management (ORM), Social Media Optimization (SMO), Internet Marketing Services, Search Engine Marketing (SEM), Conversion Rate Optimization (CRO). Custom Website Design, E-commerce Websites, UI/UX Designing, Multimedia &amp; Graphics, Mobile Application Development, and Website Maintenance to organizations of all sizes from start-ups, MNC &#x27;s to Fortune 500 companies. We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base.In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you are looking for a great looking website and a team that can follow through by delivering top rankings you have found the right company."
      />
      <meta property="og:image:type" content="webp" />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/images/logo.webp"
      />
      <meta property="og:image:alt" content="SIB Infotech Logo" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sibinfotech" />
      <meta property="twitter:creator" content="@sibinfotech" />
      <meta name="twitter:url" content=" https://www.sibinfotech.com/" />
      <meta
        name="twitter:title"
        content="Digital Marketing Company, Website Designing & Developemnt Agency in Mumbai, India"
      />
      <meta
        name="twitter:description"
        content="SIB Infotech is a professionally managed full service web design &amp; development company in Mumbai, India, India. Since 2005 we have been helping businesses in India, USA, UK, Canada, Australia and world over to adapt and grow in an ever changing online world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development, Digital Marketing, Search Engine Optimization (SEO), Pay Per Click (PPC), Online Reputation Management (ORM), Social Media Optimization (SMO), Internet Marketing Services, Search Engine Marketing (SEM), Conversion Rate Optimization (CRO). Custom Website Design, E-commerce Websites, UI/UX Designing, Multimedia &amp; Graphics, Mobile Application Development, and Website Maintenance to organizations of all sizes from start-ups, MNC &#x27;s to Fortune 500 companies. We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base.In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you are looking for a great looking website and a team that can follow through by delivering top rankings you have found the right company."
      />
      <meta
        name="twitter:image"
        content="https://www.sibinfotech.com/assets/images/logo.webp"
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div>
        <HomePage />
      </div>
    </CustomLayout>
  );
}
