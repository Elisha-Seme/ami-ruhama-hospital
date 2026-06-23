/**
 * Lightweight inline SVG icon set (no icon-library dependency).
 * All icons inherit `currentColor` and use a 24x24 viewBox.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 3v5a4 4 0 0 0 8 0V3" />
      <path d="M4 3H3m1 0h1M12 3h-1m1 0h1" />
      <path d="M8 16a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5v-2" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 7v12M3 13h18a0 0 0 0 1 0 0v6M21 19v-6a3 3 0 0 0-3-3H9v3" />
      <circle cx="6.5" cy="10.5" r="1.5" />
    </svg>
  );
}

export function BabyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 12h.01M15 12h.01" />
      <path d="M10 16c.5.5 1.2.8 2 .8s1.5-.3 2-.8" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a3 3 0 0 0 0 6" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7-4.35-9.5-8.5C.9 8.9 2.2 5.5 5.4 5.5c1.9 0 3.1 1.1 3.8 2.2.4.6 1.2.6 1.6 0 .7-1.1 1.9-2.2 3.8-2.2 3.2 0 4.5 3.4 2.9 6C19 15.65 12 20 12 20Z" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6M10 3v6.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

export function PillIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <path d="M12 8v8" />
    </svg>
  );
}

export function ScanIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 12h3l2-5 4 12 2-5 2 3h5" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6a3 3 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function HandHeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M11 14.5 8.5 12a1.8 1.8 0 0 1 2.5-2.6l.5.5.5-.5A1.8 1.8 0 0 1 14.5 12L12 14.5a.7.7 0 0 1-1 0Z" />
      <path d="M3 13v5a2 2 0 0 0 2 2h11l4-2v-1a2 2 0 0 0-2-2h-4" />
      <path d="M3 13l2-1" />
    </svg>
  );
}

// Maps service `icon` keys (from site.ts) to components.
export const serviceIcons = {
  stethoscope: StethoscopeIcon,
  bed: BedIcon,
  baby: BabyIcon,
  heart: HeartIcon,
  flask: FlaskIcon,
  pill: PillIcon,
  scan: ScanIcon,
  pulse: PulseIcon,
  people: PeopleIcon,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
