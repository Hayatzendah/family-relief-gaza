import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js / Turbopack developer indicator during local development.
  // It never appears in production builds.
  devIndicators: false,
};

export default nextConfig;
