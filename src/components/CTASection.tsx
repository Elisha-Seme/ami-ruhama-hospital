import Container from "./Container";
import Button from "./Button";
import { LogoMark } from "./Logo";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "gold" | "outline" | "ghost" | "light";
};

/**
 * CTASection — a reusable, high-contrast call-to-action band.
 * Defaults suit a "support our mission" prompt but every part is overridable.
 */
export default function CTASection({
  eyebrow = "Join our mission",
  title = "Help us bring quality healthcare to every family.",
  description = "Your support keeps our doors open 24/7, funds free medical camps, and brings dignified care to the families of Tongaren. Partner with us, refer a patient, or give today.",
  primary = { label: "Support Our Mission", href: "/donate" },
  secondary = { label: "Contact Us", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: CTAButton;
  secondary?: CTAButton | null;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-800 px-6 py-14 text-center shadow-lift sm:px-12">
          {/* decorative */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(231,165,49,0.18),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(53,172,202,0.22),transparent_45%)]"
          />
          <div aria-hidden className="absolute -right-10 -top-10 opacity-10">
            <LogoMark size={180} />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/90 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primary.href} variant={primary.variant ?? "gold"} size="lg">
                {primary.label}
              </Button>
              {secondary && (
                <Button
                  href={secondary.href}
                  variant={secondary.variant ?? "light"}
                  size="lg"
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
