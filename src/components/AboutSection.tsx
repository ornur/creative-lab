import { motion } from "motion/react";

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white px-6 py-24 md:py-32 dark:bg-[#050505]"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tighter text-black uppercase md:text-7xl dark:text-white">
            Creative Lab <span className="text-[#6d6d6d]">деген не?</span>
          </h2>
          <p className="max-w-3xl text-2xl leading-snug font-medium text-black md:text-4xl dark:text-[#a0a0a0]">
            Creative Lab - бұл классикалық “мастер-класс” емес. Бұл - креатив
            индустриясындағы адамдар жиналатын тірі орта (хаб).
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={item}
            className="rounded-3xl border border-transparent bg-[#f0f0f0] p-8 dark:border-[#222] dark:bg-[#111]"
          >
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Құрғақ теория жоқ
            </h3>
          </motion.div>
          <motion.div
            variants={item}
            className="rounded-3xl border border-transparent bg-[#f0f0f0] p-8 dark:border-[#222] dark:bg-[#111]"
          >
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              “Вода” ақпарат жоқ
            </h3>
          </motion.div>
          <motion.div
            variants={item}
            className="rounded-3xl border border-transparent bg-[#f0f0f0] p-8 dark:border-[#222] dark:bg-[#111]"
          >
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Бірнәрсе зорлап сату жоқ
            </h3>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-l-4 border-black py-2 pl-6 dark:border-white"
        >
          <p className="mb-4 text-2xl font-bold text-black md:text-3xl dark:text-white">
            Тек тәжірибе, нақты кейстер және ашық әңгіме.
          </p>
          <p className="text-lg text-black/80 md:text-xl dark:text-white/70">
            Creative Lab - идея алмасатын, ой кеңейтетін және өз ортаңды табатын
            орын.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
