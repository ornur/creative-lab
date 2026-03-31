"use client";
import * as motion from "motion/react-m";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    num: "01",
    title: "Пайдалы инсайттар алады",
    items: [
      "Нарықта не жұмыс істеп жатыр, не істемей жатыр",
      "Қазіргі трендтер емес, шын нәтиже беретін тәжірибе",
    ],
  },
  {
    num: "02",
    title: "Нетворкинг",
    items: [
      "Сіз сияқты дамып жатқан адамдар",
      "Болашақ серіктестер, клиенттер, команда",
    ],
  },
  {
    num: "03",
    title: "Жаңа көзқарас қалыптастырады",
    items: [
      "Өз салаңызға басқа ракурстан қарауды үйренесіз",
      "Креатив ойлау деңгейіңіз өседі",
    ],
  },
  {
    num: "04",
    title: "Тікелей сұрақ қою мүмкіндігі",
    items: [
      "Спикерлермен еркін формат",
      '"Сахна - сұрақ - жауап" емес, диалог',
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight text-[#f97736] uppercase md:text-6xl">
            Онда қандай пайда аласыз?
          </h2>
          <p className="text-xl text-white/50 md:text-2xl">
            Creative Lab-қа келген адам:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="group h-full">
                <GlassCardHeader className="flex-row items-center gap-4 pb-4">
                  <Badge
                    variant="outline"
                    className="font-heading border-white/10 px-3 py-2 text-3xl font-bold text-white/20 transition-colors duration-500 group-hover:text-white/60"
                  >
                    {benefit.num}
                  </Badge>
                  <GlassCardTitle className="text-xl font-semibold">
                    {benefit.title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <ul className="flex flex-col gap-2 border-l border-white/10 pl-4 transition-colors duration-500 group-hover:border-white/30">
                    {benefit.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-white/60 md:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
