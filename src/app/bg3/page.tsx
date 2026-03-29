import LineWaves from "@/components/LineWaves";

export default function BG3() {
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <LineWaves
        speed={0.1}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="black"
        color2="black"
        color3="black"
        enableMouseInteraction={false}
      />
    </div>
  );
}
