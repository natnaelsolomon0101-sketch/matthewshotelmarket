import type { MetadataRoute } from "next";

const SITE = "https://matthewshotelmarkets.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/#listings`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/#under-contract`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/#track-record`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#why-choose`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/#offices`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
