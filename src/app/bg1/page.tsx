import DarkVeil from "@/components/DarkVeil";

export default function BG1() {
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
    </div>
  );
}
