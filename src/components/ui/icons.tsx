import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="24"
      height="24"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 5.5C4.5 4.7 5.2 4 6 4h2.2c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1.1L8.6 10.4a12 12 0 0 0 5 5l1.5-1.1c.3-.3.7-.4 1.1-.3l3 .8c.5.1.8.5.8 1V18c0 .8-.7 1.5-1.5 1.5C10.8 19.5 4.5 13.2 4.5 5.5Z" />
  </Base>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 20.5l1.3-4.2A8 8 0 1 1 8 19.4l-4.5 1.1Z" />
    <path d="M9 9.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.5c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.4.7 1.2 1.5 2 1.9.3.1.4.1.6-.1l.5-.6c.2-.2.3-.2.6-.1l1.4.7c.3.1.4.2.4.4 0 .6-.5 1.4-1 1.5-.5.2-1.2.3-3.2-.6-2.4-1-3.9-3.5-4-3.7-.1-.2-.9-1.3-.9-2.4 0-1.2.6-1.7.8-1.9Z" fill="currentColor" stroke="none" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="M4 7l8 5.5L20 7" />
  </Base>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12.5 10 17.5 19.5 7" />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
  </Base>
);

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 8.5H16V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.8v2.1H7.8v3h2.4V21h3v-6.6h2.4l.4-3h-2.8V9.6c0-.8.2-1.1 1.1-1.1Z" fill="currentColor" stroke="none" />
  </Base>
);

export const TelegramIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M21.5 4.4 3.7 11c-.85.32-.8 1.6.07 1.86l4.3 1.32 1.64 5.05c.2.6.95.8 1.43.4l2.4-2.0 4.2 3.1c.55.4 1.34.1 1.49-.57l3.0-14.0c.16-.78-.6-1.43-1.33-1.16Z" />
    <path d="m8.07 14.18 9.0-5.6-7.0 6.4" fill="none" />
  </Base>
);

export const AppleIcon = (p: IconProps) => (
  <Base {...p} stroke="none" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </Base>
);

export const GooglePlayIcon = (p: IconProps) => (
  <Base {...p} stroke="none" fill="currentColor">
    <path d="M3.18 23.76c.3.16.64.19.97.08l11.65-6.73-2.6-2.6-10.02 9.25zM.43 1.6A1.5 1.5 0 0 0 0 2.67v18.65c0 .42.16.82.43 1.08l.06.05 10.45-10.45v-.25L.49 1.55l-.06.05zM22.1 10.2l-2.98-1.72-2.9 2.9 2.9 2.9 3-1.73c.86-.5.86-1.85-.02-2.35zM3.18.24 14.2 6.9l-2.6 2.6L.21.24C.54.13.88.16 1.18.32L3.18.24z" />
  </Base>
);

export const GlobeIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Base>
);

export const SmartphoneIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
  </Base>
);
