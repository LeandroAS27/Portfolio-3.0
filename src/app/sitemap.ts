import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, { url: `${siteConfig.siteUrl}/en/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }];
}
