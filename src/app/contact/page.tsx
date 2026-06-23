import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} in Soysambu, Tongaren — Bungoma County. Call, email or visit us. Open 24 hours, every day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="We'd love to hear from you"
        description="Have a question, need care, or want to partner with us? Reach out any time. We are here 24 hours a day."
      />
      <ContactSection />
    </>
  );
}
