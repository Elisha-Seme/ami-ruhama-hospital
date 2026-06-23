import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} â€” Compassionate, Quality Healthcare in Tongaren`,
    template: `%s Â· ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AMI Ruhama Church Waraba Mission Hospital",
    "hospital Tongaren",
    "hospital Bungoma County",
    "faith-based hospital Kenya",
    "Soysambu hospital",
    "Level 4 hospital",
    "maternity Bungoma",
    "SHA hospital",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} â€” Compassionate, Quality Healthcare`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#155d78",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organisation structured data for richer search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phonePrimary,
    email: site.contact.email,
    medicalSpecialty: [
      "Outpatient",
      "Maternity",
      "Pediatric",
      "Laboratory",
      "Pharmacy",
    ],
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLine,
      addressRegion: "Bungoma County",
      addressCountry: "KE",
    },
    isAcceptedPaymentMethod: site.insurance,
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

