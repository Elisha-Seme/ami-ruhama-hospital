import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Outpatient, inpatient, maternity, laboratory, pharmacy, radiology and community outreach â€” comprehensive healthcare services at AMI Ruhama Church Waraba Mission Hospital in Tongaren.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Healthcare services"
        title="Complete care, all in one place"
        description="From your first consultation to specialist follow-up, our services cover your family's health needs under one roof, day or night."
      >
        <Button href="/contact" variant="gold" size="lg">
          Contact Us
        </Button>
      </PageHeader>

      <ServicesSection background="white" />

      {/* Insurance */}
      <section className="bg-sand-50 py-14">
        <Container>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-50 bg-white px-6 py-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-display text-xl font-bold text-brand-950">
                Insurance & payment options
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                We accept the following schemes to make care affordable for every
                patient.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {site.insurance.map((ins) => (
                <span
                  key={ins}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                >
                  {ins}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Transparent pricing */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Transparent pricing"
            title="Clear, fair charges"
            description="We believe you deserve to know the cost of care up front. Below are our standard consultation fees and a sample of our laboratory tests."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl border border-brand-50 bg-white p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-lg font-bold text-brand-950">
                  Consultation & care fees
                </h3>
                <ul className="mt-5 divide-y divide-brand-50">
                  {site.fees.map((fee) => (
                    <li
                      key={fee.item}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="text-slate-600">{fee.item}</span>
                      <span className="font-semibold text-brand-800">
                        {fee.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="h-full rounded-3xl border border-brand-50 bg-white p-6 shadow-soft sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    Laboratory tests
                  </h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    28+ available
                  </span>
                </div>
                <ul className="mt-5 divide-y divide-brand-50">
                  {site.labSample.map((test) => (
                    <li
                      key={test.item}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="text-slate-600">{test.item}</span>
                      <span className="font-semibold text-brand-800">
                        {test.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2 text-xs text-slate-500">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" />
                  A full price list is available at our reception. Prices shown in
                  Kenyan Shillings (KSh) and may be subject to review.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Need care today?"
        title="Our team is ready to help"
        description="Walk in any time â€” we're open 24/7 â€” or reach out with a question about any of our services."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Support Our Mission", href: "/donate", variant: "light" }}
      />
    </>
  );
}

