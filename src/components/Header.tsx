"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import * as motion from "motion/react-m";
import { AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#about", label: "Біз туралы" },
    { href: "#benefits", label: "Пайдасы" },
    { href: "#speakers", label: "Спикерлер" },
    { href: "#pricing", label: "Бағалар" },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 flex h-16 w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 shadow-lg backdrop-blur-md transition-colors md:px-6 dark:border-white/10 dark:bg-black/80">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="Creative Lab"
          width={100}
          height={24}
          className="h-auto w-auto dark:invert"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-6 text-sm font-medium text-black/60 md:flex dark:text-white/60">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden rounded-full bg-black px-4 py-2 text-xs font-bold tracking-widest text-white uppercase transition-transform hover:scale-105 hover:bg-black sm:flex dark:bg-white dark:text-black dark:hover:bg-white"
        >
          <a href="#contact">Орын алу</a>
        </Button>

        {/* Mobile Burger Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-black md:hidden dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className="size-6 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+12px)] left-0 w-full overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-black/90"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-4 text-center text-lg font-medium text-black/80 transition-colors hover:bg-black/5 active:bg-black/10 dark:text-white/80 dark:hover:bg-white/5 dark:active:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 px-2 pb-2">
                <Button
                  asChild
                  onClick={closeMenu}
                  className="w-full rounded-xl bg-black py-6 text-sm font-bold tracking-widest text-white uppercase dark:bg-white dark:text-black"
                >
                  <a href="#contact">Орын алу</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
