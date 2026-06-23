import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import AboutIntro from "@/components/sections/AboutIntro";
import MissionVision from "@/components/sections/MissionVision";
import ValuesSection from "@/components/sections/ValuesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ImpactSection from "@/components/sections/ImpactSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import PartnersStrip from "@/components/sections/PartnersStrip";
import QuoteBlock from "@/components/sections/QuoteBlock";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <AboutIntro />
      <MissionVision />
      <ServicesSection limit={6} showCta background="white" />
      <WhyChooseUs />
      <ValuesSection />
      <ImpactSection />
      <QuoteBlock />
      <LeadershipSection />
      <PartnersStrip />
      <CTASection />
    </>
  );
}
