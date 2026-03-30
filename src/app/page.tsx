"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import SpeakersSection from "@/components/SpeakersSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <SpeakersSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
