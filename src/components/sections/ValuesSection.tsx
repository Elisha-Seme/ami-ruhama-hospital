import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ValueCard from "../ValueCard";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What we stand for"
          title="The values that guide our care"
          description="Every decision at AMI Ruhama is shaped by five commitments to the people we serve."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.values.map((value, i) => (
            <Reveal key={value.key} delay={i * 70} className="h-full">
              <ValueCard index={i} title={value.title} body={value.body} />
            </Reveal>
          ))}
          {/* Motto card to round out the grid */}
          <Reveal delay={site.values.length * 70} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-brand-800 p-6 text-center shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                Our motto
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-white">
                &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
