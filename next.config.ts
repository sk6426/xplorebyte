import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
};

export default nextConfig;
