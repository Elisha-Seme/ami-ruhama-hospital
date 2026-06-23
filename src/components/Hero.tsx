import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, ClockIcon, ShieldIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-gold-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(21,93,120,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-care-500" />
            Faith-based · {site.level}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-[3.4rem]">
            Compassionate care for{" "}
            <span className="relative whitespace-nowrap text-brand-700">
              every life
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-gold-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c40-5 156-5 196 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            in our community.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {site.name} is a faith-driven hospital in Soysambu, Tongaren,
            providing high-quality, affordable and accessible healthcare to over
            80,000 people every hour of every day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/services" variant="primary" size="lg">
              Explore Our Services
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              Support Our Mission
            </Button>
          </div>

          {/* Trust row */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <li className="inline-flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-brand-600" />
              Open 24 hours, every day
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-brand-600" />
              NHIF accredited
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-brand-600" />
              Affiliated with {site.affiliation}
            </li>
          </ul>
        </div>

        {/* Visual collage */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative animate-fade-up [animation-delay:120ms]">
            {/* Main framed photo */}
            <div className="relative overflow-hidden rounded-4xl border border-white/60 shadow-lift">
              <Image
                src="/images/waiting-bay.jpg"
                alt="The bright, welcoming patient waiting area at AMI Ruhama Mission Hospital"
                width={519}
                height={692}
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent" />
            </div>

            {/* Floating motto card */}
            <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-brand-50 bg-white/95 p-3 pr-4 shadow-lift backdrop-blur sm:-left-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50">
                <LogoMark size={28} />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Our promise
                </p>
                <p className="font-display text-sm font-bold text-brand-950">
                  {site.tagline}
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-brand-50 bg-white/95 px-5 py-4 shadow-lift backdrop-blur sm:-right-6">
              <p className="font-display text-3xl font-bold text-brand-700">
                80,000+
              </p>
              <p className="text-xs font-medium text-slate-500">
                people served in our region
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
