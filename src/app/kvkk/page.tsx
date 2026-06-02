import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "Tripen Tekstil KVKK aydınlatma metni — kişisel verilerin işlenmesine ilişkin bilgilendirme.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return <LegalPage docKey="kvkk" />;
}
