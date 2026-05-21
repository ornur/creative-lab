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
      <div className="flex w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          // Changed w-screen to 100% to be safer within flex contexts
          className="relative m-0 h-screen w-full p-0 lg:h-[80vh] lg:w-[80vw]"
        >
          <Image
            src="/poster1.webp"
            alt="Creative Lab Hero"
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="mx-auto w-full max-w-5xl px-6 pt-10 pb-20 text-left">
          <p className="text-sm font-semibold tracking-[0.25em] text-white/50 md:text-base">
            CREATIVE LAB 0.1
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#f97736] md:text-5xl">
            Қалай өтті?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/result.webp"
                alt="Creative Lab 0.1 result"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <video
                className="h-full w-full object-cover"
                src="/video.webm"
                preload="metadata"
                muted
                autoPlay
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
