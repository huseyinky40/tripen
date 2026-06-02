import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** İnce, aksanlı bir ayraç çizgisi gösterir. */
  withRule?: boolean;
}

export function Eyebrow({ children, className, withRule = false }: EyebrowProps) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3", className)}>
      {withRule && <span aria-hidden className="h-px w-8 bg-sand" />}
      {children}
    </span>
  );
}
