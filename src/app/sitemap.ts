import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const ROUTES = [
  "",
  "/services",
  "/work",
  "/work/lead-qualification",
  "/work/customer-support",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
