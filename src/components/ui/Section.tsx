import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Dikey ritim yoğunluğu. */
  space?: "default" | "compact" | "loose";
  as?: "section" | "div";
  "aria-labelledby"?: string;
}

const spacing: Record<NonNullable<SectionProps["space"]>, string> = {
  compact: "py-14 sm:py-20",
  default: "py-20 sm:py-28 lg:py-32",
  loose: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  children,
  className,
  id,
  space = "default",
  as: Tag = "section",
  ...rest
}: SectionProps) {
  return (
    <Tag id={id} className={cn(spacing[space], className)} {...rest}>
      {children}
    </Tag>
  );
}
