import type { ReactNode } from "react";
import Container from "./Container";
import { LogoMark } from "./Logo";

/** Compact, branded page header used at the top of inner pages. */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(231,165,49,0.16),transparent_42%),radial-gradient(circle_at_85%_90%,rgba(53,172,202,0.18),transparent_45%)]"
      />
      <div aria-hidden className="absolute -right-10 -top-12 opacity-[0.07]">
        <LogoMark size={220} />
      </div>
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-2xl animate-fade-up">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span className="h-px w-6 bg-gold-300/70" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-brand-100/90">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
