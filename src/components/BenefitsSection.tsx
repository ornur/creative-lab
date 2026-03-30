import { motion } from "motion/react";

export default function BenefitsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden bg-black px-6 py-24 text-white md:py-32"
    >
      {/* Abstract Background Element */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-10 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tighter text-[#e0e0e0] uppercase md:text-6xl">
            Онда қандай пайда
            <br className="max-md:hidden" /> аласыз?
          </h2>
          <p className="text-xl text-[#888] md:text-2xl">
            Creative Lab-қа келген адам:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {/* Item 1 */}
          <motion.div variants={item} className="group">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="text-4xl text-[#333] transition-colors duration-500 group-hover:text-white">
                01
              </span>
              Пайдалы инсайттар алады
            </h3>
            <ul className="space-y-3 border-l border-[#333] pl-12 text-[#a0a0a0] transition-colors duration-500 group-hover:border-white">
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Нарықта не жұмыс істеп жатыр, не істемей жатыр
              </li>
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Қазіргі трендтер емес, шын нәтиже беретін тәжірибе
              </li>
            </ul>
          </motion.div>

          {/* Item 2 */}
          <motion.div variants={item} className="group">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="text-4xl text-[#333] transition-colors duration-500 group-hover:text-white">
                02
              </span>
              Нетворкинг
            </h3>
            <ul className="space-y-3 border-l border-[#333] pl-12 text-[#a0a0a0] transition-colors duration-500 group-hover:border-white">
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Сіз сияқты дамып жатқан адамдар
              </li>
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Болашақ серіктестер, клиенттер, команда
              </li>
            </ul>
          </motion.div>

          {/* Item 3 */}
          <motion.div variants={item} className="group">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="text-4xl text-[#333] transition-colors duration-500 group-hover:text-white">
                03
              </span>
              Жаңа көзқарас қалыптастырады
            </h3>
            <ul className="space-y-3 border-l border-[#333] pl-12 text-[#a0a0a0] transition-colors duration-500 group-hover:border-white">
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Өз салаңызға басқа ракурстан қарауды үйренесіз
              </li>
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Креатив ойлау деңгейіңіз өседі
              </li>
            </ul>
          </motion.div>

          {/* Item 4 */}
          <motion.div variants={item} className="group">
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="text-4xl text-[#333] transition-colors duration-500 group-hover:text-white">
                04
              </span>
              Тікелей сұрақ қою мүмкіндігі
            </h3>
            <ul className="space-y-3 border-l border-[#333] pl-12 text-[#a0a0a0] transition-colors duration-500 group-hover:border-white">
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                Спикерлермен еркін формат
              </li>
              <li className="relative before:absolute before:-left-8 before:text-white before:content-['•']">
                “Сахна - сұрақ - жауап” емес, диалог
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
