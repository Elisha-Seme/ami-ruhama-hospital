/**
 * Logo — a crisp SVG recreation of the AMI Ruhama mark:
 * a red disc with a white medical cross, underscored by a blue swoosh
 * (trust) and a gold arc (mission warmth). Scales sharply at any size.
 */
type LogoProps = {
  className?: string;
  /** Size in px of the square mark. */
  size?: number;
  showWordmark?: boolean;
  /** Use light text for dark backgrounds. */
  light?: boolean;
};

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="AMI Ruhama Mission Hospital logo"
      className={className}
    >
      {/* Red disc */}
      <circle cx="32" cy="26" r="20" className="fill-care-600" />
      {/* White medical cross */}
      <path
        d="M28.5 13h7v8.5H44v7h-8.5V37h-7v-8.5H20v-7h8.5V13Z"
        className="fill-white"
      />
      {/* Blue trust swoosh */}
      <path
        d="M6 44c10 8 22 11 26 11s16-3 26-11c-6 9-16 14-26 14S12 53 6 44Z"
        className="fill-brand-600"
      />
      {/* Gold mission arc */}
      <path
        d="M12 50c8 5 14 6 20 6s12-1 20-6c-5 6-12 9-20 9s-15-3-20-9Z"
        className="fill-gold-400"
      />
    </svg>
  );
}

export default function Logo({ size = 40, className = "", showWordmark = true, light = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[0.95rem] font-bold tracking-tight sm:text-base ${
              light ? "text-white" : "text-brand-900"
            }`}
          >
            AMI Ruhama
          </span>
          <span
            className={`text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
              light ? "text-brand-100" : "text-brand-600"
            }`}
          >
            Mission Hospital
          </span>
        </span>
      )}
    </span>
  );
}
