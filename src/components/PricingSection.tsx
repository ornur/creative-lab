"use client";
import * as motion from "motion/react-m";
import CountUp from "@/components/CountUp";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardFooter,
} from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Brand palette: orange/white accent
// No JS-driven gradient animation to avoid DOM thrashing with CountUp

const features = [
  "Барлық спикерлерді тыңдау",
  "Нетворкинг сессиясы",
  "Сұрақ-жауап форматы",
];

export default function PricingSection() {
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
      `}</style>

      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight text-[#f97736] uppercase md:text-6xl">
            Бағалар
          </h2>
          <p className="text-lg text-white/60 md:text-xl">
            Инвестицияңыздың құны — өзіңізге деген секіріс
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="relative mx-auto max-w-lg"
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
            15 Сәуірге дейін!
          </Badge>

          <GlassCard className="relative border-[#f97736]/30 hover:border-[#f97736]/50">
            <GlassCardHeader className="pt-10 pb-2 text-center">
              <GlassCardTitle className="font-heading text-2xl tracking-widest uppercase">
                Қатысу билеті
              </GlassCardTitle>
              <GlassCardDescription className="text-base text-white/60">
                Creative Lab-қа толық кіру мүмкіндігі
              </GlassCardDescription>
            </GlassCardHeader>

            <GlassCardContent className="flex flex-col items-center gap-3 py-8">
              {/* Old price — crossed out */}
              <span className="text-2xl font-bold text-white/40 line-through">
                19 990 ₸
              </span>

              {/* New price: CountUp with pure CSS gradient — no JS conflict */}
              <div className="flex items-end gap-2">
                <span className="price-brand font-heading text-7xl leading-none font-bold tabular-nums md:text-8xl">
                  <CountUp
                    from={0}
                    to={9990}
                    duration={0.3}
                    separator=" "
                    delay={0.3}
                  />
                </span>
                <span className="price-brand pb-1 text-3xl font-bold">₸</span>
              </div>

              <p className="mt-1 text-xs tracking-widest text-white/30 uppercase">
                Ерте тіркелу бағасы
              </p>
            </GlassCardContent>

            <Separator className="bg-white/8" />

            <GlassCardContent className="pt-6 pb-2">
              <ul className="flex flex-col gap-4">
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

            <GlassCardFooter className="px-6 pt-6 pb-8">
              <a
                href="#contact"
                className="block w-full rounded-xl bg-[#f97736] py-4 text-center text-base font-bold tracking-widest text-[#1f1b1a] uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95"
              >
                Орын алу
              </a>
            </GlassCardFooter>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
