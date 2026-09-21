import type { MetadataRoute } from "next";

// 2024 活動已封存，lastModified 固定為活動內容最後更新日，避免每次請求變動。
// hreflang 由各頁 <head> 的 alternates.languages 提供（Next 14.1 sitemap 尚不支援 alternates）。
const BASE = "https://www.taiwandigitalfest.com/2024";
const LAST_MODIFIED = "2024-08-03";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/zh-TW`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE}/en-US`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
