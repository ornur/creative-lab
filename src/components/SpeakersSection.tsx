"use client";
import * as motion from "motion/react-m";
import TiltedCard from "@/components/TiltedCard";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

const speakers = [
  {
    id: "person2",
    src: "/person2.webp",
    link: "https://www.instagram.com/abualiomirali",
    name: "abualiomirali",
  },
  {
    id: "person4",
    src: "/person4.webp",
    link: "https://www.instagram.com/akrkees",
    name: "akrkees",
  },
  {
    id: "person1",
    src: "/person1.webp",
    link: "https://www.instagram.com/alibi.alisherr",
    name: "alibi.alisherr",
  },
  {
    id: "person5",
    src: "/person5.webp",
    link: "https://www.instagram.com/aimanmenbirge",
    name: "aimanmenbirge",
  },
  {
    id: "person3",
    src: "/person3.webp",
    link: "https://www.instagram.com/esenbekkovich",
    name: "esenbekkovich",
  },
];

const audience = [
  { label: "Контент жасаушыларға", sub: "(видео, фото, SMM)" },
  { label: "Маркетологтарға" },
  { label: "Дизайнерлерге" },
  { label: "Продюсерлер мен режиссерларға" },
  { label: "Креатив индустрияға кіргісі келетін жастарға" },
  {
    label: 'Жалпы "өсу керек", "жаңа орта керек" деп жүрген кез келген адамға',
  },
];

export default function SpeakersSection() {
  const mobile = useIsMobile();
  return (
    <section id="speakers" className="relative w-full px-6 py-24 md:py-32 overflow-x-hidden">
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

        {/* Speakers grid with TiltedCard — no grayscale */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
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
              <a
                href={speaker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <TiltedCard
                  imageSrc={speaker.src}
                  altText={speaker.name}
                  captionText={speaker.name}
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="320px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                />
              </a>
            </motion.div>
          ))}
        </div>

        <Separator className="my-24 bg-white/10" />

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >
          <GlassCard>
            <GlassCardContent className="p-8 md:p-14">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-[#f97736] uppercase md:text-5xl">
                    Кімдерге арналған?
                  </h2>
                  <p className="text-lg font-light text-white/60">
                    Creative Lab:
                  </p>
                </div>

                <ul className="flex flex-col gap-4 text-base font-medium md:text-xl">
                  {audience.map((item, i) => (
                    <li
                      key={i}
                      className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-white">{item.label}</span>
                      {item.sub && (
                        <span className="ml-2 text-sm font-normal text-white/60">
                          {item.sub}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCardContent>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
