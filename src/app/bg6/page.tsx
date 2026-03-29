import Threads from "@/components/Threads";

export default function BG5() {
  return (
    <div className="relative h-screen w-full dark:bg-black">
      <Threads amplitude={1.5} distance={0.1} enableMouseInteraction={false} />
    </div>
  );
}
