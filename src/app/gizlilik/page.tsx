import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gizlilik Politikası",
  description:
    "Tripen Tekstil gizlilik politikası — web sitemizde bilgilerinizin nasıl ele alındığı.",
  path: "/gizlilik",
});

export default function PrivacyPage() {
  return <LegalPage docKey="privacy" />;
}
