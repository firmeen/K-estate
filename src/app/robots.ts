import type { MetadataRoute } from "next";
// Preview-only project. Remove this restriction only after replacing demo data.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
