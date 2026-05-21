"use client";
import * as motion from "motion/react-m";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import { XCircle, CheckCircle2 } from "lucide-react";

const noItems = [
  {
    text: "Құрғақ теория жоқ: Гуглдан оқып алатын презентацияларды оқып бермейміз.",
    icon: XCircle,
  },
  {
    text: "'Вода' ақпарат жоқ: Сөз көп, іс жоқ деген бізге жат. Спикерлер су құймайды, нақты сөйлейді.",
    icon: XCircle,
  },
  {
    text: "Инфо-сығандық пен 'Впаривание' жоқ: Ештеңені қинап сатпаймыз",
    icon: XCircle,
  },
];

const yesItems = [
  {
    text: "Тірі кейстер: Спикерлердің тек жетістігін емес, қалай 'Fails' (қателік) жасағанын және одан қалай шыққанын естисің.",
  },
  {
    text: "Еркін формат: Галстук таққан ресмилік жоқ. Шай-кофе ішіп отырып, ашық әңгіме айтамыз.",
  },
  {
    text: "Идеялар коллаборациясы: Миыңда жүрген стартапты бүгін түнде-ақ бастап кетуің мүмкін.",
  },
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
          <h2 className="font-heading mb-6 text-4xl font-bold text-[#f97736] uppercase md:text-7xl">
            Creative Lab <span className="text-white/60 italic">деген не?</span>
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed font-normal text-white/80 md:text-3xl">
            Creative Lab - бұл сенің уақытыңды ұрлайтын, &quot;қалай табысты
            болу керек&quot; деген су ақпараттарды айтатын кезекті зеріктіретін
            мастер-класс емес. Бұл - креативті индустрияның ең ессіз, талантты
            және идеясы тасып тұрған адамдары жиналатын Тірі Орта. Қысқасы, өз
            адамдарыңның ортасы!
          </p>
        </motion.div>

        {/* "No" cards — what we don't do */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-base font-bold tracking-wide text-[#f97736]/80 uppercase"
          >
            БІЗДЕН МЫНАЛАРДЫ ТАППАЙСЫҢ
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
                <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/8">
                  {/* Left accent stripe */}
                  <div className="absolute top-0 left-0 h-1 w-full rounded-l-2xl bg-linear-to-b from-white/70 via-white/35 to-transparent" />
                  <div className="flex items-center gap-4 p-5 pl-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/15">
                      <item.icon
                        className="h-4 w-4 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-base leading-relaxed font-normal tracking-wide text-white/85 md:text-base">
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
            className="mb-6 text-center text-base font-bold tracking-wide text-[#f97736]/80 uppercase"
          >
            БІЗДЕ НЕ БАР? <br />
            (Тек қана шынайы вайб):
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
                <div className="group relative overflow-hidden rounded-2xl border border-[#f97736]/30 bg-[#f97736]/10 backdrop-blur-xl transition-all duration-300 hover:border-[#f97736]/45 hover:bg-[#f97736]/16">
                  {/* Left accent stripe */}
                  <div className="absolute top-0 left-0 h-1 w-full rounded-l-2xl bg-linear-to-b from-[#f97736]/90 via-[#f97736]/55 to-transparent" />
                  <div className="flex items-center gap-4 p-5 pl-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f97736]/20 ring-1 ring-[#f97736]/35 transition-colors group-hover:bg-[#f97736]/30">
                      <CheckCircle2
                        className="h-4 w-4 text-[#f97736]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-base leading-relaxed font-normal tracking-wide text-white/85 md:text-base">
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
              <div className="mb-6 flex flex-col gap-2">
                <p className="text-center text-xl leading-tight font-bold text-[#f97736] md:text-4xl">
                  Нетворкинг және Кофе брейк
                </p>
                <p className="text-center text-lg font-semibold text-white/70 md:text-base">
                  <span className="text-xl font-bold italic">
                    Creative Lab-қа не үшін келеді?
                  </span>
                  <br />
                  Әрине,
                  <span className="mx-2 font-bold text-[#f97736]">АДАМДАР</span>
                  үшін!
                </p>
              </div>
              <ul className="space-y-3 text-base text-white/75 md:text-xl">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97736]" />
                  <span>
                    Сенің идеяңды естігенде &quot;осы сенікі дұрыс емес&quot;
                    демейтін, қайта &quot;давай, бірге жасайық!&quot; дейтін
                    краштарды табасың.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97736]" />
                  <span>
                    Болашақ дизайнеріңді, копирайтеріңді немесе инвесторыңды
                    кездестіресің.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97736]" />
                  <span>
                    Жай ғана крутой адамдармен танысып, кругозорыңды кеңейтесің.
                  </span>
                </li>
              </ul>
            </GlassCardContent>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
