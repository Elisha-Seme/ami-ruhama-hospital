import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function Footer() {
  const year = 2026; // TODO: switch to a build-time/dynamic year if preferred

  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size={40} light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200/80">
              {site.intro}
            </p>
            <p className="mt-4 text-sm font-medium text-gold-300">
              &ldquo;{site.motto}&rdquo;
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-200/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="text-brand-200/80 transition-colors hover:text-white"
                >
                  Donate / Partner
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Visit & Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-brand-200/80">
                  {site.contact.addressLine}
                  <br />
                  {site.contact.region}
                </span>
              </li>
              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-brand-200/80">
                  <a
                    href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {site.contact.phonePrimary}
                  </a>
                  {" · "}
                  <a
                    href={`tel:${site.contact.phoneSecondary.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {site.contact.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all text-brand-200/80 hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="text-brand-200/80">{site.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Accreditation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Accreditation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-200/80">
              <li>{site.level}</li>
              <li>MFL Code: {site.contact.mflCode}</li>
              <li>NHIF accredited ({site.contact.nhifCode})</li>
              <li>Affiliated with {site.affiliation}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-300/70 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-brand-300/60">
            Faith-driven care for the people of Tongaren & Bungoma County.
          </p>
        </div>
      </Container>
    </footer>
  );
}
