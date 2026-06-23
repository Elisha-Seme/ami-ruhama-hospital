import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { site } from "@/lib/site";
import { HeartIcon, ShieldIcon } from "../icons";

export default function MissionVision() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our purpose"
          title="Driven by mission, grounded in faith"
          description="We exist to make excellent healthcare accessible to every family in our community, regardless of who they are or where they come from."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-8 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {site.vision}
              </p>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-8 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-care-50 text-care-600">
                <HeartIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {site.mission}
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
