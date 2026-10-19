import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

// Only the site's own pages: quiz links (/q/) are made by users, short-lived and kept out of the index.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/create", "/guides", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: SITE + p, priority: p ? 0.6 : 1 })),
    ...GUIDES.map((g) => ({ url: `${SITE}/guides/${g.slug}`, lastModified: g.date, priority: 0.8 })),
  ];
}
