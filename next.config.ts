import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false, // Changed from true to false for better type safety
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true, // Changed from false to true
  // Image optimization configuration
  images: {
    domains: [
      'cdn-main.ideal.shop',
      'airmec.co.uk',
      'www.deberventilation.dk'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Remove custom webpack config for better hot reloading
  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     config.watchOptions = {
  //       ignored: ['**/*'],
  //     };
  //   }
  //   return config;
  // },
  eslint: {
    // Don't ignore ESLint errors during builds for better code quality
    ignoreDuringBuilds: false, // Changed from true to false
  },
};

export default nextConfig;
