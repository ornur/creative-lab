"use client";
import * as motion from "motion/react-m";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const directions = [
  {
    num: "01",
    title: "Миды жаттықтыру және креативті идеялар",
    kicker: "Шабыттан жүйеге",
    text: "Креатив - кездейсоқ келетін шабыт емес, жаттығатын жүйелі бұлшықет. Идея тапшылығынан шығып, дайын трендтердің соңынан ермей, нарықта өз трендіңді қалыптастыру алгоритмі.",
  },
  {
    num: "02",
    title: "Блог және жеке бренд философиясы",
    kicker: "Шынайылықтан тұрақты табысқа",
    text: "Камера алдында тұлға ретінде ашылып, жеке брендті тек визуал мен қаралым үшін емес, аудитория сеніміне, нақты активке және тұрақты табысқа айналдыру жолы.",
  },
  {
    num: "03",
    title: "Стратегиялық маркетинг",
    kicker: "Идеядан нәтижеге дейінгі хаосты тоқтату",
    text: "Бизнестегі, контенттегі және маркетингтегі ретсіздікті жүйелі стратегияға айналдыру. CAC, ROMI, ROI көрсеткіштерімен хаоссыз жұмыс істеу.",
  },
  {
    num: "04",
    title: "Заң және қорғаныс",
    kicker: "Тәуекелсіз шығармашылық",
    text: "Контент-мейкерлер, SMM мамандары мен видеографтар жиі жіберетін құқықтық қателіктердің алдын алу. Келісімшарт арқылы өз еңбегіңді заңды қорғау.",
  },
  {
    num: "05",
    title: "Күйзеліспен күрес",
    kicker: "Эмоционалды тұрақтылық",
    text: "AI мен жылдамдық заманында шаршамай, ішкі выгорание нүктелерін ерте анықтау. Энергияны босқа шашпай, психологиялық тепе-теңдікті сақтау заңдылықтары.",
  },
  {
    num: "06",
    title: "Команда және нетворкинг",
    kicker: "Басқару, орта, нәтиже",
    text: "Команданы бір мақсатқа жұмылдырып, процестерді жүйелеу. Өз салаңдағы эксперттермен бір толқында бас қосып, идеяны іске асыратын мықты ортаның бөлігі болу.",
  },
];

const stats = ["3 сағат", "6 негізгі бағыт", "2026 өсу фокусы"];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden px-6 pt-24 md:pt-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.28em] text-white/35 uppercase">
            Кімдерге арналған
          </p>
          <h2 className="font-heading max-w-5xl text-3xl leading-tight font-bold text-[#f97736] uppercase md:text-6xl">
            3 сағат ішінде креативті мамандар мен медиа эксперттердің өсуін
            анықтайтын концентрат
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-xl">
            Creative Lab-та 2026 жылы жеке бренд, контент, маркетинг, заң,
            команда және эмоциялық тұрақтылық бойынша негізгі бағыттарды бір
            жүйеге жинаймыз.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mb-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-center text-sm font-bold tracking-widest text-white/80 uppercase backdrop-blur-md"
            >
              {stat}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {directions.map((direction, index) => (
            <motion.div
              key={direction.num}
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.07,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <GlassCard className="group h-full border-white/12 bg-white/4.5 transition-transform duration-500 hover:-translate-y-1 hover:border-[#f97736]/45">
                <GlassCardHeader className="flex-row items-start gap-4 pb-3">
                  <Badge
                    variant="outline"
                    className="h-12 min-w-12 border-[#f97736]/55 bg-[#f97736]/10 px-3 text-xl font-bold text-[#f97736] transition-colors duration-500 group-hover:bg-[#f97736] group-hover:text-[#1f1b1a]"
                  >
                    {direction.num}
                  </Badge>
                  <div>
                    <p className="mb-2 text-xs font-bold tracking-[0.22em] text-white/35 uppercase">
                      {direction.kicker}
                    </p>
                    <GlassCardTitle className="text-xl leading-snug font-bold text-white">
                      {direction.title}
                    </GlassCardTitle>
                  </div>
                </GlassCardHeader>
                <GlassCardContent className="pt-1">
                  <div className="mb-5 h-px w-full bg-linear-to-r from-[#f97736]/70 via-white/10 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="text-sm leading-relaxed text-white/65 md:text-base">
                    {direction.text}
                  </p>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      {/* place */}
      <div className="pointer-events-none mx-auto flex h-[80vh] max-w-6xl items-center justify-center px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="text-5xl font-semibold tracking-[0.32em] text-white/70 uppercase">
            Небәрі
          </span>
          <span className="text-[10rem] font-bold text-[#f97736] italic md:text-7xl">
            70
          </span>
          <span className="text-5xl font-semibold tracking-[0.22em] text-white/60 uppercase">
            орын
          </span>
        </div>
      </div>
    </section>
  );
}
