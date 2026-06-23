import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MissionVision from "@/components/sections/MissionVision";
import ValuesSection from "@/components/sections/ValuesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AMI Ruhama Church Waraba Mission Hospital, a faith-based Level 4 hospital serving Tongaren and Bungoma County with quality healthcare.",
};

const facts = [
  "Faith-based hospital affiliated with Ami Ruhama Church",
  "Level 4 facility with an 18-bed capacity",
  "Located at Soysambu Market, Tongaren Sub-County",
  "Serving a catchment community of over 80,000 people",
  "Open 24 hours a day, 7 days a week",
  "SHIF/SHA accredited (Code 444015451)",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About AMI Ruhama"
        title="Healing the community, in faith and excellence"
        description={`${site.name} brings dignified, high-quality healthcare to the families of Tongaren â€” guided by faith and a commitment to every person we serve.`}
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="overflow-hidden rounded-4xl border border-brand-50 shadow-lift">
                  <Image
                    src="/images/clinician.jpg"
                    alt="A clinician providing care at AMI Ruhama Church Waraba Mission Hospital"
                    width={750}
                    height={1000}
                    sizes="(max-width: 1024px) 80vw, 460px"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Quality care, rooted in compassion"
              />
              <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
                <p>
                  {site.name}, formerly known as {site.formerName}, is a
                  faith-based hospital at Soysambu Market in Tongaren
                  Sub-County, Bungoma County. Affiliated with {site.affiliation},
                  the hospital was built to bring accessible, high-quality
                  healthcare to a community of over 80,000 people.
                </p>
                <p>
                  Our staff are competent, dedicated, and grounded in the spirit of
                  Christian service. Every patient is treated with dignity and
                  respect. With an 18-bed capacity and 24-hour operations, we are
                  here for the community whenever they need us.
                </p>
                <p className="font-medium text-brand-800">
                  &ldquo;{site.tagline}&rdquo; is the standard we hold ourselves
                  to every single day.
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => (
                  <li key={fact} className="flex gap-2.5 text-sm text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <MissionVision />
      <ValuesSection />
      <LeadershipSection />

      <CTASection
        eyebrow="Be part of our story"
        title="Together, we can reach more families"
        description="Whether through partnership, support or prayer, you help us carry quality care further into the community."
        primary={{ label: "Partner With Us", href: "/donate" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}

