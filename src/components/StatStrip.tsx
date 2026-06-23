import Container from "./Container";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/** A band of headline figures pulled from the hospital profile. */
export default function StatStrip() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(231,165,49,0.12),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(53,172,202,0.16),transparent_45%)]"
      />
      <Container className="relative py-12">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="text-center sm:text-left"
            >
              <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-brand-100/80">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
