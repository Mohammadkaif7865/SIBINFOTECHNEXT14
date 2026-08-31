/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
                  {
                            "type": "host",
                            "value": "sibinfotech.com"
                  }
        ],
        destination: "https://www.sibinfotech.com/:path*",
        permanent: true,
      },
      {
        source: "/answer-engine-optimization",
        destination: "/search-ai-optimization",
        permanent: true,
      },
      {
        source: "/google-search-network-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/google-display-network-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/google-shopping-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/video-youtube-ad-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/universal-app-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/remarketing-retargeting-campaign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/search-engine-optimization-services",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/seo-packages",
        destination: "/search-engine-optimization-seo-services-packages",
        permanent: true,
      },
      {
        source: "/wordpess-development-services",
        destination: "/wordpress-website-design-development-services",
        permanent: true,
      },
      {
        source: "/regional-local-seo-services",
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/mobile-optimization-techniques-india",
        destination: "/mobile-seo-services",
        permanent: true,
      },
      {
        source: "/article-submission-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/directory-submission-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/forum-postings-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/social-bookmarking-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/press-release-submission-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/hosted-marketing-pages-services-india",
        destination: "/custom-website-development-companies-mumbai-india",
        permanent: true,
      },
      {
        source: "/zen-cart-development-companies-mumbai-india",
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/windows-mobile-application-development-services",
        destination: "/mobile-application-development-services",
        permanent: true,
      },
      {
        source: "/ecommerce-portal-development",
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/ajax-development-companies-mumbai-india",
        destination: "/javascript-development-services",
        permanent: true,
      },
      {
        source: "/yahoo-store-development-services",
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/blog/does-your-website-need-a-mobile-makeover",
        destination: "/mobile-website-designing-services",
        permanent: true,
      },
      {
        source: "/blog/tips-to-create-a-more-impactful-business-website",
        destination: "/blog/necessary-elements-of-a-great-website",
        permanent: true,
      },
      {
        source: "/blog/ppc-trends-of-2019-what-all-you-should-be-focusing-on",
        destination: "/blog/how-to-choose-the-best-ppc-agency",
        permanent: true,
      },
      {
        source: "/blog/generative-engine-optimization-guide",
        destination: "/generative-engine-optimization",
        permanent: true,
      },
      {
        source: "/blog/what-is-ai-seo-2026",
        destination: "/search-ai-optimization",
        permanent: true,
      },
      {
        source: "/blog/how-long-does-seo-take",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/blog/seo-pricing-india-2026",
        destination: "/search-engine-optimization-seo-services-packages",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/php-development-services",
        destination: "/php-website-development-services",
        permanent: true,
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
        source: "/contact.php",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/blogs.php",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/BlogCard",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/ga4-ai-assistant-traffic-tracking",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/top-seo-companies-in-mumbai-2025",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/top-seo-companies-in-mumbai-2024",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/best-seo-companies-in-mumbai",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/best-seo-company-in-mumbai",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/top-10-seo-companies-in-mumbai",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/top-10-seo-companies-in-mumbai-2026",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/best-seo-companies-in-mumbai-2026",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/seo-companies-in-mumbai",
        destination: "/blog/top-seo-companies-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/google-updated-its-core-web-vitals-and-page-experience-faqs",
        destination: "/blog/core-web-vitals-google-new-official-ranking-factor-signal",
        permanent: true,
      },
      {
        source: "/blog/what-will-your-google-ads-be-worth-in-2023",
        destination: "/pay-per-click-ppc-management-services",
        permanent: true,
      },
      {
        source: "/blog/digital-marketing-trends-you-need-to-follow-in-2023",
        destination: "/blog/social-media-trends",
        permanent: true,
      },
      {
        source: "/blog/importance-and-effectiveness-of-local-seo-by-2021",
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/blog/6-web-design-trends-in-2019",
        destination: "/website-designing-services",
        permanent: true,
      },
      {
        source: "/blog/best-ai-video-tools-for-ecommerce-2024-guide",
        destination: "/blog/best-ai-video-tools-for-ecommerce",
        permanent: true,
      },
      {
        source: "/blog/how-to-get-on-ai-overview-complete-seo-optimization-guide-for-2025",
        destination: "/blog/how-to-optimize-for-google-ai-overviews",
        permanent: true,
      },
      {
        source: "/blog/google-june-2025-core-update",
        destination: "/blog/google-core-update-recovery-guide",
        permanent: true,
      },
      {
        source: "/blog/ppc-management-pricing-2025-cost-guide-what-you-should-pay",
        destination: "/blog/ppc-management-pricing-mumbai",
        permanent: true,
      },
      {
        source: "/blog/youtube-monetization-update-july-2025",
        destination: "/blog/youtube-monetization-rules-requirements",
        permanent: true,
      },
      {
        source: "/blog/instagram-post-july-2025-update",
        destination: "/blog/instagram-seo-google-search-ranking",
        permanent: true,
      },
      {
        source: "/blog/9-innovative-ways-to-leverage-video-marketing-for-2025-and-beyond",
        destination: "/blog/video-marketing-strategies",
        permanent: true,
      },
      {
        source: "/blog/how-ai-is-transforming-digital-marketing-in-2025",
        destination: "/blog/how-ai-is-transforming-digital-marketing",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-the-best-ppc-agency-in-2025",
        destination: "/blog/how-to-choose-the-best-ppc-agency",
        permanent: true,
      },
      {
        source: "/blog/chatgpt-vs-google-bard-which-chatbot-reigns-supreme",
        destination: "/blog/chatgpt-vs-google-gemini-comparison",
        permanent: true,
      },
      {
        source: "/blog/mastering-facebook-advertising-in-2023-top-trends-and-tips-for-success",
        destination: "/blog/meta-ads-mastery-advantage-plus-guide",
        permanent: true,
      },
      {
        source: "/blog/how-google-ad-extensions-improve-your-adwords-campaign",
        destination: "/blog/google-ads-assets-extensions-guide",
        permanent: true,
      },
      {
        source: "/blog/clutch-hails-sib-infotech-as-india-leading-ppc-management-company-for-2022",
        destination: "/pay-per-click-ppc-management-services",
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
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/crm-software-development-solutions-companies-mumbai-india",
        destination: "/erp-crm-software-development-solutions",
        permanent: true,
      },
      {
        source: "/wordpress-website-development-services",
        destination: "/wordpress-website-design-development-services",
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
        destination: "/seo-company-mumbai",
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
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/directory-submission-services-mumbai-india",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/forum-postings-services-mumbai-india",
        destination: "/link-building-services",
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
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/social-bookmarking-services-mumbai-india",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/press-release-submission-services-mumbai-india",
        destination: "/link-building-services",
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
      {
        source: "/blog/benefits-of-outsourcing-ppc-management-services",
        destination: "/blog/how-to-choose-the-best-ppc-agency",
        permanent: true,
      },
      {
        source: "/blog/unlocking-success-with-ppc-management-companies-in-india",
        destination: "/blog/how-to-choose-the-best-ppc-agency",
        permanent: true,
      },
      {
        source: "/services-pay-per-click-management-services",
        destination: "/pay-per-click-ppc-management-services",
        permanent: true,
      },
      {
        source: "/social-media-optimization",
        destination: "/social-media-optimization-services",
        permanent: true,
      },
      {
        source: "/ecommerce-solutions-company-mumbai-india.php",
        destination: "/e-commerce-website-design-development-services",
        permanent: true,
      },
      {
        source: "/seo-consultancy-services-mumbai-india",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/seo-methodology-mumbai-india",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/guaranteed-top-10-search-engine-ranking-mumbai-india",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/seo-money-back-guarantee-service-india",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
      {
        source: "/search-engine-optimization-research-mumbai-india",
        destination: "/keyword-research-services-mumbai-india",
        permanent: true,
      },
      {
        source: "/blog/local-seo-what-it-is-and-why-its-important-for-your-business",
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/website-analysis-services-mumbai-india",
        destination: "/website-audit-services-mumbai-india",
        permanent: true,
      },
      {
        source: "/website-usability-report-india",
        destination: "/website-audit-services-mumbai-india",
        permanent: true,
      },
      {
        source: "/blog/seo-for-e-commerce-websites",
        destination: "/e-commerce-seo-services",
        permanent: true,
      },
      {
        source: "/blog/off-page-seo-building-your-websites-authority-and-reputation",
        destination: "/off-page-seo-services",
        permanent: true,
      },
      {
        source: "/search-engine-optimization-seo-services",
        destination: "/seo-company-mumbai",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
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
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // assetPrefix: "https://www.sibinfotech.com",
};

export default nextConfig;
