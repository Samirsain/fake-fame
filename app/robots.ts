import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Scoreboards (/s/) are private and need a key; the API and admin are not pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin", "/s/"] },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
