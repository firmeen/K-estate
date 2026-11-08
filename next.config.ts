import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Unlike FLOW-info's static export, KESTA needs server capabilities
  // for a future authenticated owner dashboard and database.
  reactStrictMode: true,
};

export default nextConfig;
