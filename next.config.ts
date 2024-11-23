import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint pendant le build
  },
};

export default nextConfig;
