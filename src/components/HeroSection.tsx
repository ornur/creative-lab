"use client";
import Image from "next/image";
import * as motion from "motion/react-m";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-1 flex min-h-svh flex-col items-center justify-center overflow-visible from-[#1f1b1a] from-50% to-transparent md:aspect-2/0.5 md:rounded-full md:bg-radial-[at_50%_15%]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[55svh] w-screen md:h-[70vh] md:w-[70vw] md:max-w-none lg:h-[80vh] lg:w-[80vw]"
      >
        <Image
          src="/hero.webp"
          alt="Creative Lab Hero"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
