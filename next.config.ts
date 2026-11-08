import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// Fully static project site. Illustration photography is served directly from
// Unsplash's images CDN; no server image optimisation or API routes needed.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/K-estate" : "" },
  ...(isGitHubPages ? { basePath: "/K-estate" } : {}),
};

export default nextConfig;
