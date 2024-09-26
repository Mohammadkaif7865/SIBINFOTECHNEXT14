import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomePage from "@/comps/Home/HomePage";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Home() {
  const metaTags = (
    <>
      <title>Title</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
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
