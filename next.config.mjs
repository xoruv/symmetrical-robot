/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Ensure we're using the pages directory
  experimental: {
    appDir: false,
  },
};

export default nextConfig;
