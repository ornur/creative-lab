import SoftAurora from "@/components/SoftAurora";

export default function BG4() {
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#e100ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction={false}
        mouseInfluence={0.25}
      />
    </div>
  );
}
