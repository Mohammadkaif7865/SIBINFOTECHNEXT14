/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/search-engine-optimization-services',
        destination: '/search-engine-optimization-seo-services',
        permanent: true, // This is a 301 redirect
      },
      {
        source: '/mobile-seo-services-mumbai-india',
        destination: '/mobile-seo-services',
        permanent: true,
      },
      {
        source: '/blogs/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/software-development-companies-mumbai-india',
        destination: '/software-development-services',
        permanent: true,
      },
      {
        source: '/social-media-marketing-services-mumbai-india',
        destination: '/social-media-marketing-services',
        permanent: true,
      },
      {
        source: '/yahoo-store-development-mumbai-india',
        destination: '/yahoo-store-development-services',
        permanent: true,
      },
      {
        source: '/crm-software-development-solutions-companies-mumbai-india',
        destination: '/erp-crm-software-development-solutions',
        permanent: true,
      },
      {
        source: '/wordpress-website-development-services',
        destination: '/wordpess-development-services',
        permanent: true,
      },
      {
        source: '/dynamic-website-designing-services-mumbai-india',
        destination: '/dynamic-website-designing-services',
        permanent: true,
      },
      {
        source: '/xhtml-conversion-services-mumbai-india',
        destination: '/xhtml-conversion-services',
        permanent: true,
      },
      {
        source: '/corporate-website-designing-companies-mumbai-india',
        destination: '/corporate-website-designing-services',
        permanent: true,
      },
      {
        source: '/custom-website-designing-companies-mumbai-india',
        destination: '/custom-website-designing-services',
        permanent: true,
      },
    ];
  },
  assetPrefix: 'https://www.sibinfotech.com',
};

export default nextConfig;
