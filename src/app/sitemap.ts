import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/hakkimizda", priority: 0.8, changeFrequency: "yearly" },
  { path: "/uretim-tasarim", priority: 0.8, changeFrequency: "yearly" },
  { path: "/koleksiyonlar", priority: 0.8, changeFrequency: "monthly" },
  { path: "/toptan-satis", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kalite", priority: 0.6, changeFrequency: "yearly" },
  { path: "/fabrika", priority: 0.7, changeFrequency: "yearly" },
  { path: "/showroom", priority: 0.7, changeFrequency: "yearly" },
  { path: "/galeri", priority: 0.6, changeFrequency: "monthly" },
  { path: "/iletisim", priority: 0.9, changeFrequency: "yearly" },
  { path: "/sss", priority: 0.6, changeFrequency: "yearly" },
  { path: "/kvkk", priority: 0.3, changeFrequency: "yearly" },
  { path: "/gizlilik", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cerez-politikasi", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
