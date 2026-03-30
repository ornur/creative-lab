import Image from "next/image";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const Prism = dynamic(() => import("@/components/Prism"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      <div className="absolute inset-0 z-0">
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
      </div>

      <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply" />

      <div className="absolute inset-x-0 top-0 bottom-0 z-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[60vh] w-[90vw] md:h-[70vh] md:w-[70vw] lg:w-[60vw]"
        >
          <Image
            src="/hero.webp"
            alt="Creative Lab Hero"
            fill
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 px-4 text-center"
        >
          <p className="text-xl font-medium tracking-wide text-white drop-shadow-md md:text-2xl">
            Креатив индустриясындағы адамдар жиналатын тірі орта
          </p>
        </motion.div>
      </div>
    </section>
  );
}
