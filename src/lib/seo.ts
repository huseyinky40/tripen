import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Kanonik yol, ör. "/hakkimizda" */
  path?: string;
  keywords?: string[];
  /** Open Graph başlığı (verilmezse "<title> — Tripen Tekstil"). */
  ogTitle?: string;
}

/**
 * Sayfa-özel metadata üretir. Open Graph görseli, app/opengraph-image.tsx
 * dosya-konvansiyonundan otomatik gelir (her sayfaya tutarlı marka kartı).
 */
export function createMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogTitle,
}: PageMetaInput): Metadata {
  const fullOgTitle = ogTitle ?? `${title} — ${site.name}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullOgTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description,
    },
  };
}
