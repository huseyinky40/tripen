import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Tasarım, üretim ve toptan giyim`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Tüm sayfalara tutarlı, markalı bir paylaşım kartı sağlar (dosya konvansiyonu).
 * ImageResponse varsayılan yazı tipiyle çalışır; bu nedenle alt metin ASCII-güvenli
 * tutulmuştur (tofu/glif sorunu olmaması için).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 28, height: 28, backgroundColor: "#b69b7d" }} />
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#6b6560" }}>
            ISTANBUL — EST. 1996
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, letterSpacing: -4 }}>
            Tripen Tekstil
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 38, color: "#6b6560" }}>
            Design · Production · Wholesale Clothing
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #d6cdbe",
            paddingTop: 28,
            fontSize: 28,
            color: "#6b6560",
          }}
        >
          <div style={{ display: "flex" }}>Domestic &amp; International Wholesale</div>
          <div style={{ display: "flex" }}>tripentekstil.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
