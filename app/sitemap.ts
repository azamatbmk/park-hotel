import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "/rooms", priority: 0.9 },
  { path: "/luxroom", priority: 0.8 },
  { path: "/luxroom2", priority: 0.8 },
  { path: "/luxroom3", priority: 0.8 },
  { path: "/restaurant", priority: 0.8 },
  { path: "/pool", priority: 0.8 },
  { path: "/excursions", priority: 0.7 },
  { path: "/contacts", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
