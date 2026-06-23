"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle shadow/blur once the user scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change & lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <Link href="/" className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
            <Logo size={38} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand-800"
                      : "text-slate-600 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600"
            >
              <PhoneIcon className="h-4 w-4 text-care-600" />
              {site.contact.phonePrimary}
            </a>
            <Button href="/donate" variant="primary" size="md">
              Support Our Mission
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 text-brand-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <MenuIconClose /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div
          className="fixed inset-0 top-16 z-40 bg-brand-950/40"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div className="fixed inset-x-0 top-16 z-50 border-b border-brand-100 bg-white shadow-lift">
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-800"
                        : "text-slate-700 hover:bg-sand-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-brand-50 pt-4">
              <a
                href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-1 text-sm font-semibold text-brand-800"
              >
                <PhoneIcon className="h-4 w-4 text-care-600" />
                {site.contact.phonePrimary}
              </a>
              <Button href="/donate" variant="primary" size="lg" className="w-full">
                Support Our Mission
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

function MenuIconClose() {
  return <CloseIcon className="h-6 w-6" />;
}
