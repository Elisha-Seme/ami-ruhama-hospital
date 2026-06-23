import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { CheckIcon } from "../icons";
import { site } from "@/lib/site";

const reasons = [
  {
    title: "Always open",
    body: "Round-the-clock outpatient, inpatient and emergency care — 24 hours a day, every day of the year.",
  },
  {
    title: "Affordable & transparent",
    body: "Clear, fair pricing and NHIF accreditation, so quality care never depends on what you can afford.",
  },
  {
    title: "Comprehensive under one roof",
    body: "Consultation, lab, pharmacy, maternity and imaging in a single visit — less travel, faster answers.",
  },
  {
    title: "Compassionate, qualified team",
    body: "Dedicated clinicians and nurses who treat every patient with dignity, respect and Christian care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-4xl border border-brand-50 shadow-lift">
                <Image
                  src="/images/laboratory.jpg"
                  alt="The on-site diagnostic laboratory at AMI Ruhama Mission Hospital"
                  width={275}
                  height={183}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 rounded-2xl border border-brand-50 bg-white px-5 py-3 shadow-lift">
                <p className="font-display text-2xl font-bold text-brand-700">28+</p>
                <p className="text-xs font-medium text-slate-500">
                  laboratory tests on site
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why choose us"
              title="Quality care your family can rely on"
              description="We combine clinical excellence with genuine compassion to deliver healthcare our community trusts."
            />
            <ul className="mt-8 space-y-5">
              {reasons.map((reason, i) => (
                <Reveal key={reason.title} delay={i * 70} as="li" className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-950">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {reason.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="font-semibold text-brand-800">Insurance accepted:</span>
              {site.insurance.map((ins) => (
                <span
                  key={ins}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {ins}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
