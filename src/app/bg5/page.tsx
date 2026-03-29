"use client";
import { Plasma } from "@/components/Plasma";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BG5() {
  const mobile = useIsMobile();
  const scale = mobile ? 0.44 : 0.9;
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <Plasma
        color="#b19eef"
        speed={0.8}
        direction="reverse"
        scale={scale}
        opacity={1}
        mouseInteractive={false}
      />
    </div>
  );
}
