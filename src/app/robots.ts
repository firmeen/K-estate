import type { MetadataRoute } from "next";

// Required for the Next.js 16 static-export metadata route.
export const dynamic = "force-static";

// The site still contains fictional examples, so prevent indexing for now.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
