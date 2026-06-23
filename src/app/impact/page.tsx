import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnersStrip from "@/components/sections/PartnersStrip";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { PeopleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "Free medical camps, preventive health, and maternal & child care â€” see how AMI Ruhama Church Waraba Mission Hospital serves the Tongaren community beyond its walls.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community impact"
        title="Healthcare that reaches the whole community"
        description="Our mission does not stop at our doors. Through outreach, prevention and affordable care, we bring health to families across Tongaren."
      />

      <StatStrip />

      {/* Outreach feature */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[2.5rem] border border-brand-50 bg-gradient-to-br from-brand-800 to-brand-900 px-6 py-12 shadow-lift sm:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300">
                  <PeopleIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                  Free medical camps for our community
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-brand-100/90">
                  In partnership with{" "}
                  <span className="font-semibold text-white">
                    Soysambu Health CBO
                  </span>
                  , we run free medical camps that bring screening, consultation
                  and treatment directly to people who might otherwise go without.
                  These camps focus on early detection and preventive care for
                  conditions like hypertension and diabetes.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <p className="font-display text-4xl font-bold text-white">
                    80,000+
                  </p>
                  <p className="mt-1 text-sm text-brand-100/80">
                    people in the community we serve
                  </p>
                  <hr className="my-5 border-white/15" />
                  <p className="text-sm leading-relaxed text-brand-100/85">
                    {/* TODO: replace with confirmed outreach figures â€” e.g. camps held, patients screened â€” once available */}
                    Outreach reach and patient numbers will be published here as
                    they are confirmed.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ImpactSection />

      {/* Partners */}
      <section className="bg-sand-50 py-4">
        <Container>
          <SectionHeading
            eyebrow="Partners & supporters"
            title="The organisations standing with us"
            description="We're grateful to the partners who help us extend quality care to more families."
            align="center"
            className="pt-12"
          />
        </Container>
        <PartnersStrip />
      </section>

      <CTASection
        eyebrow="Multiply our impact"
        title="Help us reach the next family"
        description="Your partnership funds free medical camps, keeps care affordable, and strengthens healthcare for the whole community."
        primary={{ label: "Support Our Mission", href: "/donate" }}
        secondary={{ label: "Partner With Us", href: "/donate", variant: "light" }}
      />
    </>
  );
}

