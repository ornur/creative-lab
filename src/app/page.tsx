"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import SpeakersSection from "@/components/SpeakersSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import dynamic from "next/dynamic";

const Prism = dynamic(() => import("@/components/Prism"), { ssr: false });

export default function Home() {
  return (
    <main className="z-1 flex min-h-screen flex-col">
      <HeroSection />
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        hueShift={0}
        colorFrequency={1}
        noise={0}
        glow={1}
      />
      <AboutSection />
      <BenefitsSection />
      <SpeakersSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
