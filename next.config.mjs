/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // If you are serving your next app from a sub-path or need to prefix assets
  assetPrefix: 'https://www.sibinfotech.com',
  
  // If you want to serve the Next.js app from a sub-directory
  basePath: '', // e.g., '/sub-directory'

  // If you have a custom webpack configuration
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // Fixes npm packages that depend on `fs` module
  //     config.resolve.fallback.fs = false;
  //   }

  //   // Custom webpack rules or plugins here

  //   return config;
  // },

  // Additional configurations...
};

export default nextConfig;
