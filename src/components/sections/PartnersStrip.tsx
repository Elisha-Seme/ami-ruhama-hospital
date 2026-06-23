import Container from "../Container";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

export default function PartnersStrip() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Working together for a healthier community
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {site.partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 80}>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-50 bg-white px-5 py-4 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 font-display text-sm font-bold text-brand-700">
                  {partner.name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-brand-950">
                    {partner.name}
                  </p>
                  <p className="text-xs text-slate-500">{partner.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          {/* TODO: add partner/supporter logos and any additional organisations as confirmed */}
          Interested in partnering with us?{" "}
          <a href="/donate" className="font-medium text-brand-600 hover:underline">
            Let&rsquo;s talk
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
