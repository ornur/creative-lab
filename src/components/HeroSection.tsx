"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center pt-20"
    >
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
          className="object-contain object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
