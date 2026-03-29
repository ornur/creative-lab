"use client";
import Prism from "@/components/Prism";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const mobile = useIsMobile();
  const scale = mobile ? 1.1 : 2.8;
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={scale}
        hueShift={0}
        colorFrequency={1}
        noise={0}
        glow={1}
      />
    </div>
  );
}
