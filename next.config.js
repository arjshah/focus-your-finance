/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Don't fail production builds on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail production builds on type errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;