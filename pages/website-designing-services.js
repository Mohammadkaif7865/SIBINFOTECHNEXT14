import WebDesigning from "@/comps/WebsiteDesigningServices/WebDesigning";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function WebsiteDesigningServices() {
  return (
    <div>
      <Head>
        <title>
          Best Website Designing Company In India, Web Design Services Agency
          Mumbai, Delhi & New York
        </title>
        <meta
          name="description"
          content="Top Website Designing Company in India offering affordable web design and development services to help companies grow their online business. We offer WordPress Website Designing, eCommerce websites, Shopify Web Design, WooCommerce Websites, Landing Page Designing etc."
        />
        <meta
          name="keywords"
          content="web designing India, website designing Mumbai,  website design, E-Commerce website design, professional web designer, custom website designing, web design company, website design mumbai, web design company mumbai, Mumbai website design company, shopify web design, website design services in india, website design in mumbai, website designing company in mumbai, website designers in mumbai, landing page designing "
        />
      
      </Head>
      <WebDesigning />
    </div>
  );
}
