/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/search-engine-optimization-services",
        destination: "/search-engine-optimization-seo-services",
        permanent: true, // This is a 301 redirect
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true, // This is a 301 redirect
      },
      {
        source: "/index",
        destination: "/",
        permanent: true, // This is a 301 redirect
      },
      {
        source: "/php-development-services",
        destination: "/php-website-development-services ",
        permanent: true, // This is a 301 redirect
      },
      {
        source: "/mobile-seo-services-mumbai-india",
        destination: "/mobile-seo-services",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/:path*.php",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/software-development-companies-mumbai-india",
        destination: "/software-development-services",
        permanent: true,
      },
      {
        source: "/social-media-marketing-services-mumbai-india",
        destination: "/social-media-marketing-services",
        permanent: true,
      },
      {
        source: "/yahoo-store-development-mumbai-india",
        destination: "/yahoo-store-development-services",
        permanent: true,
      },
      {
        source: "/crm-software-development-solutions-companies-mumbai-india",
        destination: "/erp-crm-software-development-solutions",
        permanent: true,
      },
      {
        source: "/wordpress-website-development-services",
        destination: "/wordpess-development-services",
        permanent: true,
      },
      {
        source: "/dynamic-website-designing-services-mumbai-india",
        destination: "/dynamic-website-designing-services",
        permanent: true,
      },
      {
        source: "/xhtml-conversion-services-mumbai-india",
        destination: "/xhtml-conversion-services",
        permanent: true,
      },
      {
        source: "/corporate-website-designing-companies-mumbai-india",
        destination: "/corporate-website-designing-services",
        permanent: true,
      },
      {
        source: "/website-designing-companies-mumbai-india",
        destination: "/website-designing-services",
        permanent: true,
      },
      {
        source: "/web-development-companies-mumbai-india",
        destination: "/website-development-services",
        permanent: true,
      },
      {
        source: "/ppc-management-services-mumbai-india",
        destination: "/pay-per-click-ppc-management-services",
        permanent: true,
      },
      {
        source: "/seo-companies-mumbai-delhi-india",
        destination: "/search-engine-optimization-seo-services",
        permanent: true,
      },
      {
        source: "/wordpress-expert-mumbai-india",
        destination: "/wordpress-website-design-development-services",
        permanent: true,
      },
      {
        source: "/ecommerce-website-designing-companies-mumbai-india",
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/cms-website-designing-companies-mumbai-india",
        destination: "/cms-website-design-development-services",
        permanent: true,
      },
      {
        source: "/mobile-website-designing-services-mumbai-india",
        destination: "/mobile-website-designing-services",
        permanent: true,
      },
      {
        source: "/bootstrap-designing-services",
        destination: "/bootstrap-website-designing-services",
        permanent: true,
      },
      {
        source: "/custom-website-designing-companies-mumbai-india",
        destination: "/custom-website-designing-services",
        permanent: true,
      },
      {
        source: "/website-redesigning-services-mumbai-india",
        destination: "/website-redesigning-services",
        permanent: true,
      },
      {
        source: "/professional-website-designing-companies-mumbai-india",
        destination: "/professional-website-designing-services",
        permanent: true,
      },
      {
        source: "/flash-website-designing-services-mumbai-india",
        destination: "/flash-website-designing-services",
        permanent: true,
      },
      {
        source: "/website-maintenance-services-mumbai-india",
        destination: "/website-maintenance-services",
        permanent: true,
      },
      {
        source: "/seo-outsourcing-company-india-london-uk-usa",
        destination: "/search-engine-optimization-outsourcing-seo-services",
        permanent: true,
      },
      {
        source: "/article-submission-services-mumbai-india",
        destination: "/article-submission-services",
        permanent: true,
      },
      {
        source: "/directory-submission-services-mumbai-india",
        destination: "/directory-submission-services",
        permanent: true,
      },
      {
        source: "/forum-postings-services-mumbai-india",
        destination: "/forum-postings-services",
        permanent: true,
      },
      {
        source: "/multilingual-seo-experts-mumbai-india",
        destination: "/multilingual-seo-services",
        permanent: true,
      },
      {
        source: "/lexical-analysis-based-seo-services-mumbai-india",
        destination: "/lexical-analysis-based-lsi-seo-services",
        permanent: true,
      },
      {
        source: "/link-building-services-mumbai-india",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/regional-local-seo-services-mumbai-india",
        destination: "/regional-local-seo-services",
        permanent: true,
      },
      {
        source: "/social-bookmarking-services-mumbai-india",
        destination: "/social-bookmarking-services",
        permanent: true,
      },
      {
        source: "/press-release-submission-services-mumbai-india",
        destination: "/press-release-submission-services",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-mumbai-india",
        destination: "/digital-marketing-services",
        permanent: true,
      },
      {
        source: "/online-reputation-management-companies-mumbai-india",
        destination: "/online-reputation-management-services",
        permanent: true,
      },
      {
        source: "/reputation-repair-service",
        destination: "/online-reputation-repair-service",
        permanent: true,
      },
      {
        source: "/blog-management-services-mumbai-india",
        destination: "/blog-management-services",
        permanent: true,
      },
      {
        source: "/lead-generation-services-mumbai-india",
        destination: "/online-lead-generation-services",
        permanent: true,
      },
      {
        source: "/facebook-ads-marketing",
        destination: "/facebook-ads-management-services",
        permanent: true,
      },
      {
        source: "/php-website-development-companies-mumbai-india",
        destination: "/php-website-development-services",
        permanent: true,
      },
      {
        source: "/codeigniter-development",
        destination: "/codeigniter-cms-framework-development-services",
        permanent: true,
      },
      {
        source: "/yii-development",
        destination: "/yii-cms-framework-development-services",
        permanent: true,
      },
      {
        source: "/ruby-on-rails",
        destination: "/ruby-on-rails-cms-framework-development-services",
        permanent: true,
      },
      {
        source: "/shopify-development",
        destination: "/shopify-development-services",
        permanent: true,
      },
      {
        source: "/social-networking-website-development-companies-mumbai-india",
        destination: "/social-networking-website-development-services",
        permanent: true,
      },
      {
        source: "/drupal-cms-website-development-mumbai-india",
        destination: "/drupal-cms-framework-development-services",
        permanent: true,
      },
      {
        source: "/joomla-cms-website-development-mumbai-india",
        destination: "/joomla-cms-framework-development-services",
        permanent: true,
      },
      {
        source: "/qa-testing-services",
        destination: "/software-testing-and-quality-assurance-services",
        permanent: true,
      },
      {
        source: "/real-estate-website-development-mumbai-india",
        destination: "/real-estate-website-development-services",
        permanent: true,
      },
      {
        source: "/recruitment-website-development",
        destination: "/recruitment-website-development-services",
        permanent: true,
      },
      {
        source: "/pay-per-click-ppc-management-service",
        destination: "/pay-per-click-ppc-management-services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply HSTS to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/assets/:all*(png|jpg|jpeg|gif|webp|mp4|svg|css|js|woff2?)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sibinfotech.com",
      },
      {
        protocol: "https",
        hostname: "groupfractal.com",
      },
      {
        protocol: "https",
        hostname: "savit.in",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // assetPrefix: "https://www.sibinfotech.com",
};

export default nextConfig;
