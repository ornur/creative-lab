"use client";
import LightRays from "@/components/LightRays";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BG2() {
  const mobile = useIsMobile();
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={mobile ? 0.5 : 1}
        lightSpread={0.8}
        rayLength={9}
        followMouse={false}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={mobile ? 5 : 1.3}
        saturation={4}
      />
    </div>
  );
}
