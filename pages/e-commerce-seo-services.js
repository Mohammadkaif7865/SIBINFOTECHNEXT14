import React from "react";
import { Helmet } from "react-helmet-async";
// import {Link} from 'react-router-dom';
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import ECommerceSEO from "@/comps/E-CommerceSEO/ECommerceSEO";

export default function EcommerceSeoServices() {
  return (
    <div>
      <Helmet>
        <title>
          SEO Service for Ecommerce Websites, eCommerce SEO Company in Mumbai,
          India
        </title>
        <meta
          name="keywords"
          content="Search Engine Optimization, SEO, Ecommerce SEO, Ecommerce SEO Company, Ecommerce SEO Services, Ecommerce SEO Expert, Ecommerce"
        />
        <meta
          name="description"
          content="SIB Infotech specialize in eCommerce SEO Services and have been rated Top Ecommerce SEO company in India having the best e-commerce SEO website marketing experts to increase your web store's Google search traffic, increase conversion and get more sales"
        />
        <link
          rel="canonical"
          href="https://www.sibinfotech.com/e-commerce-seo-services"
        />
      </Helmet>
      <ECommerceSEO />
    </div>
  );
}
