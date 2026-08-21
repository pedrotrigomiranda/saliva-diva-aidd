import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // allowedDevOrigins: ['192.168.1.233'],
};

export default nextConfig;
