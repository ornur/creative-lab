"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Сәлеметсіз бе! Менің атым ${formData.name}.\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nХабарлама: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/77007280546?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="w-full border-t border-[#222] bg-[#050505] px-6 py-24 text-[#eee] md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="mb-8 inline-block h-1 w-20 bg-[#d1ff42]" />
          <h2 className="mb-6 text-5xl font-bold tracking-tighter text-white uppercase md:text-7xl">
            Өз орныңды
            <br /> алып үлгер:
          </h2>
          <p className="mb-12 text-xl font-light text-[#888] md:text-2xl">
            Тіркелу формасын толтырып, Whatsapp арқылы орныңызды бекітіңіз.
          </p>

          <div className="mt-auto flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#333] bg-[#111]">
              <svg
                className="h-6 w-6 text-[#d1ff42]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.898-9.898 0-5.448-4.45-9.897-9.898-9.897-5.448 0-9.898 4.45-9.898 9.897 0 2.071.554 3.901 1.626 5.626l-1.127 4.113 4.295-1.134v.001zm5.454-9.982c.28-.62.569-.63.834-.64.24-.01.52-.01.8-.01.28 0 .73.105 1.11.62.38.51 1.45 1.411 1.45 3.442s-1.45 3.522-1.65 3.792c-.2.27-2.6 3.963-6.3 5.563-3.7 1.6-3.7 1.07-4.4 1.07-.7 0-2.27-.92-2.58-1.801-.31-.88-.31-1.64-.22-1.8.09-.16.33-.25.75-.46.42-.21 2.47-1.22 2.85-1.36.38-.14.65-.21.93.21.28.42 1.08 1.36 1.3 1.64.22.28.44.31.86.1 4.28-2.14 5.38-4.29 5.86-5.1.48-.81.65-1.28.84-1.74z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#666] uppercase">Ватсап</p>
              <p className="text-xl font-medium text-white">+7 700 728 0546</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form
            className="rounded-3xl border border-[#222] bg-[#111] p-8 md:p-10"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium tracking-wide text-[#888] uppercase">
                  Аты-жөні
                </label>
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  className="w-full rounded-xl border border-[#333] bg-black px-4 py-3 text-white transition-colors focus:border-white focus:outline-none"
                  placeholder="Атыңыз"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#888] uppercase">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    className="w-full rounded-xl border border-[#333] bg-black px-4 py-3 text-white transition-colors focus:border-white focus:outline-none"
                    placeholder="user@gmail.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#888] uppercase">
                    Телефон
                  </label>
                  <input
                    required
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    type="tel"
                    className="w-full rounded-xl border border-[#333] bg-black px-4 py-3 text-white transition-colors focus:border-white focus:outline-none"
                    placeholder="+7 700 000 00 00"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium tracking-wide text-[#888] uppercase">
                  Хабарлама
                </label>
                <textarea
                  required
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#333] bg-black px-4 py-3 text-white transition-colors focus:border-white focus:outline-none"
                  placeholder="Сұрақтарыңыз болса..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase transition-colors duration-300 hover:bg-[#d1ff42]"
              >
                Жіберу
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
