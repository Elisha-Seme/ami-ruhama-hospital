import type { ReactNode } from "react";

/**
 * SectionHeading — eyebrow + title + optional description.
 * `align` controls text alignment; `tone` adapts colours for dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            isLight ? "text-gold-300" : "text-brand-600"
          }`}
        >
          <span
            className={`h-px w-6 ${isLight ? "bg-gold-300/70" : "bg-brand-400"}`}
            aria-hidden
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl ${
          isLight ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-brand-100/90" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
