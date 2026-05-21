"use client";

import * as motion from "motion/react-m";

const timelineItems = [
  {
    time: "15:00",
    title: "Регистрация және нетворкинг",
    description:
      "Қатысушыларды тіркеу, алғашқы кәсіби байланыстарды орнату және ресми танысу.",
  },
  {
    time: "15:10",
    title: "Кіріспе сөз: Әліби Әлішер",
    description:
      "Форумның ашылуы, Creative Lab 0.2 концепциясымен таныстыру және спикерлерді ортаға шақыру.",
  },
  {
    time: "15:30",
    title: "1-ші сөз: Мақпал Шадай",
    description:
      "Блог стратегиядан тереңірек: ішкі кедергілерді жеңіп, блогта еркін болу және күнделікті оқиғаларды тұрақты табысқа айналдыру өнері.",
  },
  {
    time: "15:55",
    title: "2-ші сөз: Ақерке Замбаева",
    description:
      "Маркетингтегі жүйелілік: хаосты тоқтату, маркетинг бөлімін дұрыс құру және CAC, ROMI, ROI көрсеткіштерімен нақты жұмыс істеу.",
  },
  {
    time: "16:15",
    title: "Кофе-брейк",
    description:
      "Еркін форматтағы талқылау, кофе үстіндегі бейресми нетворкинг және сергу уақыты.",
  },
  {
    time: "16:40",
    title: "3-ші сөз: Бауыржан Әділханұлы",
    description:
      "Өзгермелі әлемдегі өзіңді табу: AI трендтері заманында креативті жолыңды анықтау, қабілеттерді тану және выгораниемен күрес.",
  },
  {
    time: "17:05",
    title: "4-ші сөз: Жазира Әбдімарова",
    description:
      "Креативтің заңдық қорғанысы: контент-мейкерлер мен SMM мамандары жиі жіберетін құқықтық қателіктер және келісімшарттармен жұмыс істеу.",
  },
  {
    time: "18:00",
    title: "Дөңгелек үстел",
    description:
      "Барлық спикерлердің қатысуымен креативті индустрияның өзекті мәселелерін талқылау, нарық трендтерін талдау.",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative w-full overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute top-24 right-0 h-72 w-72 rounded-full bg-[#f97736]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-14 md:mb-20"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.28em] text-white/35 uppercase">
            Creative Lab 0.2
          </p>
          <h2 className="font-heading max-w-4xl text-3xl leading-tight font-bold text-[#f97736] uppercase md:text-7xl">
            Бағдарламасы & тайминг
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
            Үш сағаттық бағдарлама: тіркелу, практикалық сөздер, кофе-брейк және
            барлық спикерлермен панельдік талқылау.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-2 h-full w-px bg-[#f97736]" />

          <div className="ml-8 grid grid-cols-1 gap-4">
            {timelineItems.map((item, index) => (
              <motion.article
                key={`${item.time}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.48,
                  ease: "easeOut",
                }}
                className="group relative md:pl-14"
              >
                <div className="absolute top-7 -left-7.5 size-3 rounded-full bg-[#f97736] ring-8 ring-[#1f1b1a] transition-transform duration-300 group-hover:scale-125" />

                <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/4.5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f97736]/40 hover:bg-white/[0.07] md:grid-cols-[120px_1fr] md:p-6">
                  <div className="flex items-start">
                    <span className="rounded-full border border-[#f97736]/40 bg-[#f97736]/10 px-4 py-2 text-sm font-bold tracking-widest text-[#f97736]">
                      {item.time}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl leading-relaxed font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
