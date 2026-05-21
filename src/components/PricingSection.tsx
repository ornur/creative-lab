"use client";
import * as motion from "motion/react-m";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardFooter,
} from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";

// Brand palette: orange/white accent
// No JS-driven gradient animation to avoid DOM thrashing with CountUp

const features = [
  "Барлық спикерлерді тыңдау",
  "Нетворкинг сессиясы",
  "Сұрақ-жауап форматы",
];

const eventDetails = [
  {
    icon: CalendarDays,
    label: "Күні",
    value: "14.06.2026",
  },
  {
    icon: Clock,
    label: "Уақыты",
    value: "18:00",
  },
  {
    icon: MapPin,
    label: "Орны",
    value: "ORTA Community | Мәңгілік ел, 41/1",
  },
];

export default function PricingSection() {
  const date = new Date("2024-06-10") ? "11990" : "15990";
  return (
    <section
      id="pricing"
      className="relative flex w-full items-center justify-center px-6 py-24 md:py-32"
    >
      {/* Pure CSS brand glow — orange/white, no JS */}
      <style>{`
        @keyframes brand-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .price-brand {
          background: linear-gradient(90deg, #f97736, #ffffff, #f97736);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: brand-shift 4s ease infinite;
          will-change: background-position;
        }
        .glow-ring {
          background: conic-gradient(
            from 0deg,
            #f97736, #ffffff, #f97736
          );
          animation: brand-shift 6s linear infinite;
        }
        @media (max-width: 767px), (prefers-reduced-motion: reduce) {
          .price-brand,
          .glow-ring {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-[#f97736] uppercase md:text-6xl">
            Бағасы
          </h2>
          <p className="text-xl tracking-widest text-white/60 italic md:text-xl">
            Инвестицияңыздың құны - өзіңізге деген секіріс
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Orange glow halo — static CSS, not JS animated */}
          <div
            className="absolute -inset-3 rounded-[2.5rem] opacity-40 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, #f97736 0%, transparent 70%)",
            }}
          />

          {/* Badge OUTSIDE card so overflow:hidden doesn't clip it */}
          <Badge
            className="absolute -top-4 -right-4 z-10 rotate-12 border-0 px-3 py-1 text-sm font-bold shadow-lg md:-top-5 md:-right-5"
            style={{ background: "#f97736", color: "#1f1b1a" }}
          >
            10 Маусымға дейін!
          </Badge>

          <GlassCard className="relative border-[#f97736]/30 hover:border-[#f97736]/50">
            <GlassCardHeader className="px-6 pt-8 pb-4 md:px-8 md:pt-10">
              <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
                <div>
                  <p className="mb-3 text-xs font-bold tracking-[0.28em] text-white/35 uppercase">
                    Creative Lab 0.2
                  </p>
                  <GlassCardTitle className="font-heading text-2xl leading-tight font-bold text-[#f97736] uppercase md:text-4xl">
                    Креативті деңгейге бірге шығайық
                  </GlassCardTitle>
                  <GlassCardDescription className="mt-4 text-base leading-relaxed text-white/60">
                    Creative Lab-қа толық кіру мүмкіндігі және 2026 креатив
                    индустриясына арналған тірі тәжірибе.
                  </GlassCardDescription>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#1f1b1a]/45 p-5 text-center md:text-right">
                  <p className="mb-3 text-xs font-bold tracking-widest text-white/35 uppercase">
                    Қатысу билеті
                  </p>
                  <div className="flex items-end justify-center gap-2 md:justify-end">
                    <span className="price-brand text-6xl leading-none font-bold tabular-nums md:text-7xl">
                      <CountUp
                        from={8000}
                        to={parseInt(date)}
                        duration={1.3}
                        separator=" "
                        delay={0.6}
                      />
                    </span>
                    <span className="price-brand pb-1 text-2xl font-bold">
                      ₸
                    </span>
                  </div>
                </div>
              </div>
            </GlassCardHeader>

            <GlassCardContent className="px-6 pb-6 md:px-8">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {eventDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.42 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1f1b1a]/45 p-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f97736]/12 text-[#f97736] ring-1 ring-[#f97736]/30">
                      <detail.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-widest text-white/35 uppercase">
                        {detail.label}
                      </span>
                      <span className="mt-1 block text-sm leading-snug font-semibold text-white md:text-base">
                        {detail.value}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCardContent>

            <Separator className="bg-white/8" />

            <GlassCardContent className="px-6 pt-6 pb-2 md:px-8">
              <ul className="grid gap-4 md:grid-cols-3">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-white/70 md:text-base"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#f97736] bg-white/10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f97736"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCardContent>

            <GlassCardFooter className="px-6 pt-6 pb-8 md:px-8">
              <a
                href="#contact"
                className="block w-full rounded-xl bg-[#f97736] py-4 text-center text-base font-bold tracking-widest text-[#1f1b1a] uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95"
              >
                Орын брондау
              </a>
            </GlassCardFooter>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
