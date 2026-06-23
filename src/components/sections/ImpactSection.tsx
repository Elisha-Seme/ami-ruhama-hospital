import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ImpactCard from "../ImpactCard";
import Reveal from "../Reveal";
import {
  HandHeartIcon,
  HeartIcon,
  PeopleIcon,
  ShieldIcon,
} from "../icons";

const impacts = [
  {
    icon: <PeopleIcon className="h-6 w-6" />,
    title: "Free medical camps",
    body: "Regular outreach camps run with Soysambu Health CBO bring screening and treatment directly to the community at no cost.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Preventive health",
    body: "Screening and education for hypertension, diabetes and arthritis help families catch and manage conditions early.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Maternal & child health",
    body: "Antenatal care, child welfare clinics, immunisation and family planning support healthy mothers and thriving children.",
  },
  {
    icon: <HandHeartIcon className="h-6 w-6" />,
    title: "Affordable, faith-driven care",
    body: "As a faith-based hospital, we keep care affordable and accessible so no one is turned away from the help they need.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Community impact"
          title="Caring beyond our walls"
          description="Our mission reaches the whole community through outreach, prevention and care that puts people first."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {impacts.map((impact, i) => (
            <Reveal key={impact.title} delay={(i % 2) * 90} className="h-full">
              <ImpactCard
                icon={impact.icon}
                title={impact.title}
                body={impact.body}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
