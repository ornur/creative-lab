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
    <header className="fixed top-4 left-1/2 z-50 flex h-16 w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-black/10 px-4 shadow-lg backdrop-blur-md transition-colors md:px-6 dark:border-white/10 dark:bg-[#1f1b1a]">
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
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex dark:text-[#f97736]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-all duration-200 dark:hover:scale-120 dark:hover:text-[#f97736]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden rounded-full px-4 py-2 text-xs font-bold tracking-widest text-white uppercase transition-transform hover:scale-105 hover:bg-[#1f1b1a] sm:flex dark:bg-[#1f1b1a]"
        >
          <a href="#contact">Орын алу</a>
        </Button>

        {/* Mobile Burger Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden dark:text-[#f97736]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="size-6 text-[#f97736]" />
          ) : (
            <Menu className="size-6 text-[#f97736]" />
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
            className="absolute top-[calc(100%+12px)] left-0 w-full overflow-hidden rounded-2xl border border-[#1f1b1a]/10 bg-white/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-4 text-center text-lg font-medium text-[#1f1b1a]/80 transition-colors hover:bg-[#1f1b1a]/5 active:bg-[#1f1b1a]/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 px-2 pb-2">
                <Button
                  asChild
                  onClick={closeMenu}
                  className="w-full rounded-xl bg-[#1f1b1a] py-6 text-sm font-bold tracking-widest text-white uppercase"
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
