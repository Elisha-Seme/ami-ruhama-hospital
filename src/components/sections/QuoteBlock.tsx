import Container from "../Container";
import { LogoMark } from "../Logo";
import { site } from "@/lib/site";

/**
 * QuoteBlock — features the leadership message (a real quote from the
 * hospital profile) and stands in as the community-trust section.
 *
 * TODO: replace / supplement with real patient & community testimonials
 * (with consent) once collected.
 */
export default function QuoteBlock() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <figure className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-brand-50 bg-white px-6 py-12 text-center shadow-soft sm:px-12">
          <div aria-hidden className="mx-auto mb-6 w-fit opacity-90">
            <LogoMark size={52} />
          </div>
          <span
            aria-hidden
            className="font-display text-6xl leading-none text-brand-100"
          >
            &ldquo;
          </span>
          <blockquote className="-mt-6">
            <p className="font-display text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
              At {site.name}, quality is our priority. Every patient is
              treated with dignity, respect and genuine care.
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="font-semibold text-brand-800">
              {site.leadership[0].name}
            </span>
            <span className="text-slate-500"> · {site.leadership[0].role}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
