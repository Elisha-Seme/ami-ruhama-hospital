import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

/** Returns initials for an avatar fallback (no stock headshots used). */
function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function LeadershipSection() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our team"
          title="Meet the people leading our care"
          description="A dedicated team of clinicians and administrators committed to serving our community with excellence."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {site.leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col items-center rounded-3xl border border-brand-50 bg-white p-6 text-center shadow-soft">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-xl font-bold text-white shadow-soft">
                  {initials(person.name)}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-brand-950">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">
                  {person.role}
                </p>
                {person.note && !person.note.startsWith("TODO") && (
                  <p className="mt-1 text-xs text-slate-500">{person.note}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
