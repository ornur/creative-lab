"use client";
import { motion } from "motion/react";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import { XCircle, CheckCircle2 } from "lucide-react";

const noItems = [
  { text: "Құрғақ теория жоқ", icon: XCircle },
  { text: '"Вода" ақпарат жоқ', icon: XCircle },
  { text: "Бірнәрсе зорлап сату жоқ", icon: XCircle },
];

const yesItems = [
  { text: "Нақты тәжірибе мен кейстер" },
  { text: "Ашық әңгіме, еркін формат" },
  { text: "Идея алмасу мен жаңа ортаңды табу" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-heading mb-6 text-5xl font-bold tracking-tight text-white uppercase md:text-7xl">
            Creative Lab <span className="text-white/60 italic">деген не?</span>
          </h2>
          <p className="max-w-3xl text-2xl leading-snug font-medium text-white/80 md:text-3xl">
            Creative Lab — бұл классикалық &quot;мастер-класс&quot; емес. Бұл —
            креатив индустриясындағы адамдар жиналатын тірі орта (хаб).
          </p>
        </motion.div>

        {/* "No" cards — what we don't do */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-bold tracking-[0.2em] text-white/60 uppercase"
          >
            Бізде жоқ
          </motion.h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {noItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {/* Red card with left accent border + subtle bleed */}
                <div className="group relative overflow-hidden rounded-2xl border border-red-500/25 bg-red-500/8 backdrop-blur-xl transition-all duration-300 hover:border-red-500/45 hover:bg-red-500/12">
                  {/* Left accent stripe */}
                  <div className="absolute top-0 left-0 h-full w-[3px] rounded-l-2xl bg-linear-to-b from-red-400/80 via-red-500/50 to-transparent" />
                  <div className="flex items-center gap-4 p-5 pl-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-red-500/30 transition-colors group-hover:bg-red-500/25">
                      <item.icon
                        className="h-4 w-4 text-red-400"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-sm leading-snug font-semibold text-white/85 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="mb-8 bg-white/6" />

        {/* "Yes" card — what we DO, in green */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-bold tracking-[0.2em] text-white/60 uppercase"
          >
            Бізде бар
          </motion.h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {yesItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {/* Green card — mirrors red card structure */}
                <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-emerald-500/8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/45 hover:bg-emerald-500/12">
                  {/* Left accent stripe */}
                  <div className="absolute top-0 left-0 h-full w-[3px] rounded-l-2xl bg-linear-to-b from-emerald-400/80 via-emerald-500/50 to-transparent" />
                  <div className="flex items-center gap-4 p-5 pl-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30 transition-colors group-hover:bg-emerald-500/25">
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-400"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-sm leading-snug font-semibold text-white/85 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="mb-16 bg-white/6" />

        {/* Bottom summary card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard>
            <GlassCardContent className="p-8 md:p-12">
              <p className="font-heading mb-4 text-2xl leading-snug font-bold text-white md:text-3xl">
                Тек тәжірибе, нақты кейстер және ашық әңгіме.
              </p>
              <p className="text-lg text-white/70 md:text-xl">
                Creative Lab — идея алмасатын, ой кеңейтетін және өз ортаңды
                табатын орын.
              </p>
            </GlassCardContent>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
