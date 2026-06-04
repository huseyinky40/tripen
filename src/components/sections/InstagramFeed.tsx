"use client";

import { createElement, useEffect, useRef } from "react";
import { messages } from "@/i18n/messages";
import { useLocale } from "@/i18n/LocaleProvider";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

const FEED_ID = "yVnlJ74oGfvk6vQ9eqVB";
const SCRIPT_SRC = "https://w.behold.so/widget.js";
const WIDGET_MAX_WIDTH = 950;
const WIDGET_BORDER_RADIUS = 5;
const WIDGET_DESKTOP_POST_ASPECT_RATIO = [9, 16] as const;
const WIDGET_MOBILE_POST_ASPECT_RATIO = [4, 5] as const;
const WIDGET_MOBILE_BREAKPOINT = "640";
const WIDGET_MOBILE_POST_COUNT = 3;

type BeholdBreakpoint = {
  borderRadius?: number;
  gap?: { x: number; y: number };
  numColumns?: number;
  numPosts?: number;
  postAspectRatio?: [number, number];
};

type BeholdWidgetSettings = {
  autoplayVideos?: boolean;
  breakpoints?: Record<string, BeholdBreakpoint>;
  constrainWidth?: boolean;
  hoverEffect?: string;
  maxWidth?: number;
  onHover?: string;
  previewVideosOnHover?: boolean;
};

type BeholdWidgetElement = HTMLElement & {
  widgetSettings?: BeholdWidgetSettings;
};

export function InstagramFeed() {
  const locale = useLocale();
  const m = messages[locale].instagramFeed;
  const widgetRef = useRef<BeholdWidgetElement | null>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = SCRIPT_SRC;
    document.head.append(s);
  }, []);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const applyTripenLayout = () => {
      const currentSettings = widget.widgetSettings;
      if (!currentSettings) return;

      const defaultBreakpoint = currentSettings.breakpoints?.default ?? {};
      const mobileBreakpoint = currentSettings.breakpoints?.[WIDGET_MOBILE_BREAKPOINT] ?? {};
      widget.widgetSettings = {
        ...currentSettings,
        autoplayVideos: true,
        constrainWidth: true,
        hoverEffect: "blur",
        maxWidth: WIDGET_MAX_WIDTH,
        onHover: "showCaption",
        previewVideosOnHover: true,
        breakpoints: {
          ...currentSettings.breakpoints,
          default: {
            ...defaultBreakpoint,
            borderRadius: WIDGET_BORDER_RADIUS,
            postAspectRatio: [...WIDGET_DESKTOP_POST_ASPECT_RATIO],
          },
          [WIDGET_MOBILE_BREAKPOINT]: {
            ...defaultBreakpoint,
            ...mobileBreakpoint,
            borderRadius: WIDGET_BORDER_RADIUS,
            gap: mobileBreakpoint.gap ?? { x: 16, y: 16 },
            numColumns: mobileBreakpoint.numColumns ?? 3,
            numPosts: mobileBreakpoint.numPosts ?? WIDGET_MOBILE_POST_COUNT,
            postAspectRatio: [...WIDGET_MOBILE_POST_ASPECT_RATIO],
          },
        },
      };

    };

    widget.addEventListener("load", applyTripenLayout);
    const retry = window.setInterval(applyTripenLayout, 500);
    const stopRetry = window.setTimeout(() => window.clearInterval(retry), 5000);

    return () => {
      widget.removeEventListener("load", applyTripenLayout);
      window.clearInterval(retry);
      window.clearTimeout(stopRetry);
    };
  }, []);

  return (
    <section className="border-t border-hairline py-16 sm:py-20">

      <Container>
        {/* Başlık */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          {/* Instagram logosu */}
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.social.instagram.handle}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              className="h-8 w-8 text-ink transition-opacity hover:opacity-60"
              aria-hidden
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.22em] text-sand-deep">
              {m.eyebrow}
            </p>
            <p className="mt-2 text-[1.05rem] text-muted">{m.lead}</p>
          </div>

          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/50 underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {site.social.instagram.handle}
          </a>
        </div>

        {/* Behold feed */}
        {createElement("behold-widget", { "feed-id": FEED_ID, ref: widgetRef })}
      </Container>
    </section>
  );
}
