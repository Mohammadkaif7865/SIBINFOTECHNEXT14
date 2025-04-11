import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "@/comps/Home/HomePage";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Home() {
  const metaTags = (
    <>
      <title>
        Top Digital Marketing Agency in Mumbai & Delhi, India | SIB Infotech
      </title>
      <meta
        name="description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai & Delhi, India, offering ROI-driven SEO, PPC, Google ads, Meta Ads, Social Media, and Web Design services."
      />
      <meta
        name="keywords"
        content="digital marketing agency India, digital marketing Mumbai, digital agency Delhi, SEO services India, PPC management Mumbai, social media marketing India, SEO company Mumbai, PPC services Delhi,  web design Mumbai, white label SEO"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/" />
      <meta
        property="og:title"
        content="Top Digital Marketing Agency in Mumbai & Delhi, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai & Delhi, India, offering ROI-driven SEO, PPC, Google ads, Meta Ads, Social Media, and Web Design services."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/" />
      <meta
        property="twitter:title"
        content="Top Digital Marketing Agency in Mumbai & Delhi, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is a trusted digital marketing agency in Mumbai & Delhi, India, offering ROI-driven SEO, PPC, Google ads, Meta Ads, Social Media, and Web Design services."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
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
