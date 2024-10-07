import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "@/comps/Home/HomePage";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Home() {
  const metaTags = (
    <>
      <title>#1 Web Design, Digital Marketing & SEO Agency Mumbai, India</title>
      <meta name="description" content="SIB Infotech is your premier partner for top-rated digital marketing, SEO, and web development in Mumbai, India. Get to elevate your business and drive success." />
      <meta name="keywords" content="best website designing company in Mumbai, website designing in Mumbai, web designing company in Mumbai, re-website designing agency in Mumbai, web design Mumbai, website designing company in Mumbai, website designing services in Mumbai, Website Designing" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/" />
      <meta property="og:title" content="#1 Web Design, Digital Marketing & SEO Agency Mumbai, India" />
      <meta property="og:description" content="SIB Infotech is your premier partner for top-rated digital marketing, SEO, and web development in Mumbai, India. Get to elevate your business and drive success." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/" />
      <meta property="twitter:title" content="#1 Web Design, Digital Marketing & SEO Agency Mumbai, India" />
      <meta property="twitter:description" content="SIB Infotech is your premier partner for top-rated digital marketing, SEO, and web development in Mumbai, India. Get to elevate your business and drive success." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
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
