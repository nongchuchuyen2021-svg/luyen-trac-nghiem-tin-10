/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow an isolated preview/build without touching an existing .next cache.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
