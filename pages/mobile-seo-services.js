import React from "react";
import { Helmet } from "react-helmet-async";
// import {Link} from 'react-router-dom';
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import MobileSeo from "@/comps/MobileSeoServices/MobileSeo";

export default function MobileSeoServices() {
  return (
    <div>
      <Helmet>
        <title>
          Best Mobile SEO Agency - Top Mobile SEO Services Company in India
        </title>
        <meta
          name="keywords"
          content="Mobile SEO Services, Mobile SEO Services in India, Mobile SEO"
        />
        <meta
          name="description"
          content="Rated Best Mobile SEO company in India  our focus is in offering customized mobile search engine optimization solutions  and optimizing Mobile SEO for your website & hence our mobile SEO services are trusted best brands globally."
        />
        <link
          rel="canonical"
          href="https://www.sibinfotech.com/mobile-seo-services"
        />
      </Helmet>
      <MobileSeo />
    </div>
  );
}
