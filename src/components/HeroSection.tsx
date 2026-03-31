"use client";
import Image from "next/image";
import * as motion from "motion/react-m";

export default function HeroSection() {
  return (
    <section
      id="hero"
      // Added 'overflow-hidden' to prevent any scroll leakage from the motion div
      className="relative z-1 m-0 flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-[#1f1b1a] from-50% to-transparent p-0 text-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // Changed w-screen to 100% to be safer within flex contexts
        className="relative m-0 h-screen w-full p-0 lg:h-[80vh] lg:w-[80vw]"
      >
        <Image
          src="/hero.webp"
          alt="Creative Lab Hero"
          fill
          className="object-contain"
          priority
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
