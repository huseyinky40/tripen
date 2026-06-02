import type { Locale } from "@/i18n/config";

interface FlagProps {
  className?: string;
}

const base = "block h-4 w-6 shrink-0 overflow-hidden rounded-[2px]";

function TrFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9" cy="8" r="3.6" fill="#fff" />
      <circle cx="10.2" cy="8" r="2.9" fill="#E30A17" />
      <text x="13.2" y="10.4" fontSize="5" fill="#fff" fontFamily="sans-serif">
        ★
      </text>
    </svg>
  );
}

function EnFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2.2" />
    </svg>
  );
}

function RuFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <rect y="5.33" width="24" height="5.34" fill="#0039A6" />
      <rect y="10.67" width="24" height="5.33" fill="#D52B1E" />
    </svg>
  );
}

export function Flag({ locale, className }: { locale: Locale; className?: string }) {
  if (locale === "tr") return <TrFlag className={className} />;
  if (locale === "ru") return <RuFlag className={className} />;
  return <EnFlag className={className} />;
}
