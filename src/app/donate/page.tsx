import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import {
  HandHeartIcon,
  PeopleIcon,
  PulseIcon,
  ShieldIcon,
  PhoneIcon,
  MailIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Support Our Mission",
  description:
    "Partner with or support AMI Ruhama Church Waraba Mission Hospital. Your giving funds free medical camps, keeps care affordable, and strengthens healthcare for the Tongaren community.",
};

const ways = [
  {
    icon: <HandHeartIcon className="h-6 w-6" />,
    title: "Make a donation",
    body: "A one-time or recurring gift helps us subsidise care, restock the pharmacy and equip our wards and laboratory.",
  },
  {
    icon: <PeopleIcon className="h-6 w-6" />,
    title: "Sponsor a medical camp",
    body: "Fund a free outreach camp so screening and treatment can reach families who cannot easily get to a hospital.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Partner as an organisation",
    body: "Churches, NGOs, health bodies and businesses can partner with us on equipment, programmes and shared goals.",
  },
  {
    icon: <PulseIcon className="h-6 w-6" />,
    title: "Give equipment or supplies",
    body: "In-kind support â€” medical equipment, consumables or pharmacy stock â€” directly strengthens patient care.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support our mission"
        title="Your support brings care to more families"
        description="As a faith-based hospital, we keep care affordable so no one is turned away. Your generosity makes that possible â€” and extends our reach across the community."
      >
        <Button href="/contact" variant="gold" size="lg">
          Talk to our team
        </Button>
      </PageHeader>

      {/* Ways to give */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Ways to help"
            title="Choose how you'd like to make a difference"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ways.map((way, i) => (
              <Reveal key={way.title} delay={(i % 2) * 90} className="h-full">
                <article className="flex h-full gap-4 rounded-3xl border border-brand-50 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    {way.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-950">
                      {way.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {way.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How to give / get in touch */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Giving details */}
            <div className="rounded-3xl border border-brand-50 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-bold text-brand-950">
                How to give
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                To make a gift or set up a partnership, please get in touch using
                the details below and our administrator will guide you through the
                next steps.
              </p>

              {/* TODO: confirm and publish official giving channels
                  (e.g. M-Pesa Paybill / Till, bank account name & number)
                  before promoting them publicly. */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-4">
                  <p className="text-sm font-semibold text-brand-800">
                    M-Pesa / Bank details
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Coming soon â€” contact us for current giving details.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-brand-50 p-3 transition hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-brand-900">
                    {site.contact.phonePrimary}
                  </span>
                </a>
                <a
                  href={`mailto:${site.contact.email}?subject=Supporting AMI Ruhama Church Waraba Mission Hospital`}
                  className="flex items-center gap-3 rounded-xl border border-brand-50 p-3 transition hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="break-all font-medium text-brand-900">
                    {site.contact.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Impact of giving */}
            <div className="flex flex-col justify-center rounded-3xl bg-brand-800 p-8 text-white shadow-soft">
              <h2 className="font-display text-xl font-bold">
                Where your support goes
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-brand-100/90">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-300" />
                  Keeping the hospital open and staffed 24 hours a day.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-300" />
                  Funding free medical camps with Soysambu Health CBO.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-300" />
                  Subsidising care so cost never stands between a family and help.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-300" />
                  Strengthening the lab, pharmacy, maternity and wards.
                </li>
              </ul>
              <p className="mt-6 border-t border-white/15 pt-5 font-display text-lg font-semibold text-gold-300">
                &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

