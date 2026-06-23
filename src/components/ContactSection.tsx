"use client";

import { useState, type FormEvent } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const details = [
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      label: "Visit us",
      lines: [site.contact.addressLine, site.contact.region],
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: "Call us",
      lines: [site.contact.phonePrimary, site.contact.phoneSecondary],
      hrefs: [
        `tel:${site.contact.phonePrimary.replace(/\s/g, "")}`,
        `tel:${site.contact.phoneSecondary.replace(/\s/g, "")}`,
      ],
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: "Email us",
      lines: [site.contact.email],
      hrefs: [`mailto:${site.contact.email}`],
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      label: "Opening hours",
      lines: [site.contact.hours],
    },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="We're here for you, day and night"
          description="Whether you need care, want to partner with us, or simply have a question, reach out. Our doors are open 24 hours a day."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Details + map */}
          <div className="space-y-8">
            <dl className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-brand-50 bg-white p-5 shadow-soft"
                >
                  <dt className="flex items-center gap-2 text-sm font-semibold text-brand-800">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      {d.icon}
                    </span>
                    {d.label}
                  </dt>
                  <dd className="mt-3 space-y-0.5 text-sm text-slate-600">
                    {d.lines.map((line, i) => (
                      <p key={line}>
                        {d.hrefs?.[i] ? (
                          <a
                            href={d.hrefs[i]}
                            className="hover:text-brand-700 hover:underline"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Google Maps embed */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-100 shadow-soft">
              <iframe
                title="AMI Ruhama Mission Hospital location"
                src="https://maps.google.com/maps?q=Soysambu+Market+Tongaren+Bungoma+Kenya&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-3xl border border-brand-50 bg-white p-6 shadow-soft sm:p-8">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MailIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Thank you for reaching out. We will get back to you as soon as
                  we can. For urgent matters, call us directly on{" "}
                  <a
                    href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                    className="font-medium text-brand-700 underline"
                  >
                    {site.contact.phonePrimary}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="font-display text-xl font-bold text-brand-950">
                  Send us a message
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" autoComplete="name" required />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-900"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-xl border border-brand-100 bg-sand-50 px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us a little about your enquiry"
                  />
                </div>
                {status === "error" && (
                  <p className="rounded-xl border border-care-100 bg-care-50 px-4 py-3 text-sm text-care-700">
                    Something went wrong. Please try again or email us directly
                    at{" "}
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="font-medium underline"
                    >
                      {site.contact.email}
                    </a>
                    .
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
                <p className="text-center text-xs text-slate-400">
                  For medical emergencies, call{" "}
                  <a
                    href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                    className="font-medium text-care-600"
                  >
                    {site.contact.phonePrimary}
                  </a>{" "}
                  or come in directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-900">
        {label}
        {required && <span className="text-care-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-brand-100 bg-sand-50 px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
