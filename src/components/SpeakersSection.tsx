import { motion } from "motion/react";
import Image from "next/image";

export default function SpeakersSection() {
  const speakers = [
    { id: "person1", src: "/person1.webp", name: "Спикер 1" },
    { id: "person2", src: "/person2.webp", name: "Спикер 2" },
    { id: "person3", src: "/person3.webp", name: "Спикер 3" },
    { id: "person4", src: "/person4.webp", name: "Спикер 4" },
    { id: "person5", src: "/person5.webp", name: "Спикер 5" },
  ];

  return (
    <section
      id="speakers"
      className="w-full bg-white px-6 py-24 md:py-32 dark:bg-[#080808]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold tracking-tighter text-black uppercase md:text-7xl dark:text-white">
              Спикерлер
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="text-xl text-black/60 dark:text-white/60">
              Саланың нағыз мамандары. Тәжірибесімен, нақты кейстерімен
              бөлісетін тұлғалар.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-[#eee] dark:bg-[#111]"
            >
              <Image
                src={speaker.src}
                alt={speaker.name}
                fill
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Target Audience embedded block to break the grid monotony */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[2.5rem] bg-black p-10 text-white md:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold tracking-tighter text-[#f0f0f0] uppercase md:text-6xl">
                Кімдерге
                <br /> арналған?
              </h2>
              <p className="text-2xl font-light text-[#a0a0a0]">
                Creative Lab:
              </p>
            </div>

            <ul className="space-y-4 text-xl font-medium tracking-tight md:text-2xl">
              <li className="border-b border-white/20 pb-4">
                Контент жасаушыларға{" "}
                <span className="text-lg font-normal text-[#666] lg:text-xl">
                  (видео, фото, SMM)
                </span>
              </li>
              <li className="border-b border-white/20 pb-4">Маркетологтарға</li>
              <li className="border-b border-white/20 pb-4">Дизайнерлерге</li>
              <li className="border-b border-white/20 pb-4">
                Продюсерлер мен режиссерларға
              </li>
              <li className="border-b border-white/20 pb-4 text-[#ddd]">
                Креатив индустрияға кіргісі келетін жастарға
              </li>
              <li className="pt-2 text-white/80">
                Жалпы “өсу керек”, “жаңа орта керек” деп жүрген кез келген
                адамға
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
