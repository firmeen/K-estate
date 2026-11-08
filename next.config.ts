import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// Public property catalogue + contact pages only: fully static, no server runtime.
// GitHub Pages project sites are hosted under /K-estate; local development stays at /.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/K-estate" : "" },
  ...(isGitHubPages ? { basePath: "/K-estate" } : {}),
};

export default nextConfig;
