import { motion } from "motion/react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex w-full items-center justify-center bg-[#f8f8f8] px-6 py-24 md:py-32 dark:bg-[#030303]"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tighter text-black uppercase md:text-6xl dark:text-white">
            Бағалар
          </h2>
          <p className="text-lg text-[#666] md:text-xl">
            Инвестицияңыздың құны - өзіңізге деген секіріс
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-lg">
          {/* Animated Background Glow */}
          <div className="absolute -inset-1 animate-pulse rounded-3xl bg-linear-to-r from-purple-600 to-pink-600 opacity-30 blur-2xl filter dark:opacity-50" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative rounded-3xl border border-[#eee] bg-white p-8 shadow-2xl md:p-12 dark:border-[#222] dark:bg-[#0f0f0f]"
          >
            {/* Tag */}
            <div className="absolute -top-4 -right-4 rotate-12 transform rounded-xl border border-black bg-[#d1ff42] px-4 py-2 text-sm font-bold text-black shadow transition-transform group-hover:rotate-6 md:-top-6 md:-right-6 md:text-base">
              15 Сәуірге дейін!
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-3xl font-bold tracking-tight text-black uppercase dark:text-white">
                Қатысу билеті
              </h3>
              <p className="mb-8 text-[#888]">
                Creative Lab-қа толық кіру мүмкіндігі
              </p>

              <div className="mb-10 flex flex-col items-center justify-center">
                <span className="mb-2 text-2xl font-bold text-red-500 line-through decoration-red-500 decoration-4 opacity-60">
                  19 990 ₸
                </span>
                <span className="text-6xl font-bold tracking-tighter text-black md:text-7xl dark:text-white">
                  9 990 ₸
                </span>
              </div>

              <ul className="mb-10 space-y-4 text-left text-[#555] dark:text-[#ccc]">
                <li className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Барлық спикерлерді тыңдау
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Нетворкинг сессиясы
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Сұрақ-жауап форматы
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full rounded-xl bg-black py-4 text-center text-lg font-bold tracking-wide text-white uppercase transition-transform hover:scale-[1.02] active:scale-95 dark:bg-white dark:text-black"
              >
                Орын алу
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
