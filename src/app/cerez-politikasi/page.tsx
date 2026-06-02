import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Çerez Politikası",
  description:
    "Tripen Tekstil çerez politikası — web sitemizde çerezlerin kullanımı hakkında bilgilendirme.",
  path: "/cerez-politikasi",
});

export default function CookiePolicyPage() {
  return <LegalPage docKey="cookies" />;
}
