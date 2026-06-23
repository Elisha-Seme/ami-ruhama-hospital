import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import Reveal from "../Reveal";
import { ArrowRightIcon } from "../icons";
import { site } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-4xl border border-brand-50 shadow-lift">
                <Image
                  src="/images/clinician.jpg"
                  alt="A clinician at AMI Ruhama Church Waraba Mission Hospital reviewing patient care"
                  width={750}
                  height={1000}
                  sizes="(max-width: 1024px) 80vw, 460px"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              {/* Accreditation badge */}
              <div className="absolute -right-3 top-6 rounded-2xl border border-brand-50 bg-white px-4 py-3 shadow-lift sm:-right-6">
                <p className="font-display text-lg font-bold text-brand-700">
                  Level 4
                </p>
                <p className="text-xs font-medium text-slate-500">
                  accredited facility
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="About us"
              title={
                <>
                  A faith-based hospital built around{" "}
                  <span className="text-brand-700">people</span>
                </>
              }
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                {site.name} is a faith-based {site.level.toLowerCase()} located at
                Soysambu Market in Tongaren Sub-County, Bungoma County. Affiliated
                with {site.affiliation}, we serve a community of over 80,000
                people with competent, dedicated staff who care in the spirit of
                Christian compassion.
              </p>
              <p>
                With an 18-bed capacity and round-the-clock operations, we offer
                outpatient and inpatient care, maternity, laboratory, pharmacy and
                radiology services. Everything under one roof, centred on you.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                Read our story
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

