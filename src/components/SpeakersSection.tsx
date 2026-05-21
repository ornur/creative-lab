"use client";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

const speakers = [
  {
    id: "alibi",
    src: "/person1.webp",
    link: "https://www.instagram.com/alibi.alisherr",
    name: "Әліби Әлішер",
    role: "Режиссер және продюсер",
    description:
      "Креативті ойлауды жүйелі түрде жаттықтыру техникаларымен бөліседі, тренд соңынан ермей, оны өзің жасаудың жолдарын көрсетеді және сапалы әрі тірі контент құрудың авторлық әдістерін айтады.",
  },
  {
    id: "makpal",
    src: "/person5.webp",
    link: "https://www.instagram.com/minsvel",
    name: "Мақпал Шадай",
    role: "Блог және тұлғалық даму эксперті",
    description:
      "Блогтың техникалық жағынан гөрі психологиялық және шынайылық сипатына тоқталады. Ішкі кедергілерді жеңіп, тұлға ретінде ашылу арқылы күнделікті өмірді тұрақты табысқа айналдыру өнерін талқылайды.",
  },
  {
    id: "akerke",
    src: "/person4.webp",
    link: "https://www.instagram.com/akrkees",
    name: "Ақерке Замбаева",
    role: "5 жылдық тәжірибесі бар маркетолог",
    description:
      "Бизнестегі хаосты тоқтатып, маркетинг бөлімін дұрыс құру мен стратегия жасау жолдарын, команданы тиімді басқаруды және CAC, ROMI, ROI секілді негізгі көрсеткіштерді есептеуді үйретеді.",
  },
  {
    id: "baurzhan",
    src: "/person2.webp",
    link: "https://www.instagram.com/babur.adilkhan",
    name: "Бабур Әділханұлы",
    role: "Tanu AI директоры, сертификатталған Gallup коучы",
    description:
      "Технологиялар мен жасанды интеллект заманында креатив индустриясында өз жолыңды адаспай табу, қабілеттерің мен мінезіңді тану арқылы жүйелі даму және күйзелістің алдын алу тақырыптарын қозғайды.",
  },
  {
    id: "jazira",
    src: "/person3.webp",
    link: "https://www.instagram.com/abdymarova_zhazira",
    name: "Жазира Әбдімарова",
    role: "Osmar Group негізін қалаушы, кәсіби заңгер",
    description:
      "Креатив саласындағы мамандардың операциондық жұмыстарда жіберетін құқықтық қателіктерін, тапсырыс берушімен арадағы дауларды заңмен шешуді және келісімшарттар арқылы өз еңбегін қорғау жолдарын түсіндіреді.",
  },
];

export default function SpeakersSection() {
  const mobile = useIsMobile();
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);

  const toggleSpeaker = (speakerId: string) => {
    setActiveSpeaker((current) => (current === speakerId ? null : speakerId));
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    speakerId: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSpeaker(speakerId);
    }
  };

  return (
    <section
      id="speakers"
      className="relative w-full overflow-x-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: mobile ? 0 : -20 }} // Reduced distance (30 -> 20)
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Trigger slightly before it hits view
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-heading text-4xl font-bold tracking-tight text-[#f97736] uppercase md:text-7xl">
              Спикерлер
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: mobile ? 0 : 30 }} // No horizontal animation on mobile for better readability
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:max-w-sm"
          >
            <p className="text-lg text-white/50">
              Саланың нағыз мамандары. Тәжірибесімен, нақты кейстерімен
              бөлісетін тұлғалар.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: index * 0.05, // Reduced delay for snappier feel
                duration: 0.4,
                ease: "circOut",
              }}
              // Optimization: GPU Acceleration
              style={{ willChange: "transform, opacity" }}
              className="flex justify-center"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleSpeaker(speaker.id)}
                onKeyDown={(event) => handleCardKeyDown(event, speaker.id)}
                aria-expanded={activeSpeaker === speaker.id}
                className="group relative w-full cursor-pointer overflow-hidden rounded-[15px] text-left outline-none focus-visible:ring-3 focus-visible:ring-[#f97736]/70"
              >
                <div className="relative h-100 w-full overflow-hidden rounded-[15px]">
                  <Image
                    src={speaker.src}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent" />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-[#1f1b1a]/95 via-[#1f1b1a]/50 to-transparent px-5 pt-20 pb-5">
                  <p className="text-xl font-bold text-white">{speaker.name}</p>
                  <p className="mt-1 text-sm text-[#f97736]">{speaker.role}</p>
                </div>

                <AnimatePresence>
                  {activeSpeaker === speaker.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 z-20 flex items-end bg-[#1f1b1a]/55 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full border-t border-white/15 bg-[#1f1b1a]/88 p-5 shadow-[0_-20px_60px_rgba(0,0,0,0.35)]"
                      >
                        <p className="text-xs font-bold tracking-[0.22em] text-[#f97736] uppercase">
                          {speaker.role}
                        </p>
                        <h3 className="mt-2 text-2xl leading-tight font-bold text-white">
                          {speaker.name}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                          {speaker.description}
                        </p>
                        <a
                          href={speaker.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                          className="mt-5 inline-flex rounded-full border border-[#f97736]/45 px-4 py-2 text-xs font-bold tracking-widest text-[#f97736] uppercase transition-colors hover:bg-[#f97736] hover:text-[#1f1b1a]"
                        >
                          Instagram
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
