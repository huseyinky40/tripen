"use client";

import { useState, type ReactNode } from "react";
import { PlusIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: ReactNode;
}

/** Erişilebilir akordeon. Tek panel açık; klavye ve aria-expanded destekli. */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-hairline">
            <dt>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
              >
                <span className="font-display text-lg text-ink sm:text-xl">{item.q}</span>
                <PlusIcon
                  className={cn(
                    "h-5 w-5 shrink-0 text-sand-deep transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </dt>
            <dd
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div inert={!isOpen} className="max-w-2xl pb-7 pr-6 leading-relaxed text-muted">
                  {item.a}
                </div>
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
