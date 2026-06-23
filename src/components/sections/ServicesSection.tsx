import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import Button from "../Button";
import Reveal from "../Reveal";
import { ArrowRightIcon } from "../icons";
import { site } from "@/lib/site";

export default function ServicesSection({
  limit,
  showCta = false,
  background = "white",
}: {
  /** Show only the first N services (used for the home preview). */
  limit?: number;
  showCta?: boolean;
  background?: "white" | "sand";
}) {
  const services = limit ? site.services.slice(0, limit) : site.services;

  return (
    <section
      className={`py-16 sm:py-20 ${background === "sand" ? "bg-sand-50" : ""}`}
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Healthcare services"
            title="Comprehensive care, close to home"
            description="From everyday consultations to maternity and diagnostics, we bring a full range of services together under one roof."
          />
          {showCta && (
            <Button href="/services" variant="outline" className="shrink-0">
              View all services
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.key} delay={(i % 3) * 80} className="h-full">
              <ServiceCard
                title={service.title}
                summary={service.summary}
                icon={service.icon}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
