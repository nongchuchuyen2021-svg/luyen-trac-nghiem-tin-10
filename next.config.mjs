/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow an isolated preview/build without touching an existing .next cache.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [{ source: "/giua-ki-1/:path*", destination: "https://tin10-nari-giua-ki-1.my-team-3380.chatgpt.site/giua-ki-1/:path*", permanent: false }];
  },
};

export default nextConfig;
