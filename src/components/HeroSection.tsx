"use client";
import Image from "next/image";
import * as motion from "motion/react-m";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-b from-[#1f1b1a] from-100% to-transparent pt-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[60vh] w-screen md:h-[70vh] md:w-[70vw] lg:h-[80vh] lg:w-[80vw]"
      >
        <Image
          src="/hero.webp"
          alt="Creative Lab Hero"
          fill
          className="mask-t-from-90% mask-b-from-80% object-contain object-center md:mask-x-from-70% md:mask-x-to-90%"
          priority
        />
      </motion.div>
    </section>
  );
}
