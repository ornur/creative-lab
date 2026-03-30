"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 flex h-16 w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 shadow-lg backdrop-blur-md md:px-6 dark:border-white/10 dark:bg-black/80">
      <div className="flex items-center gap-2">
        <img
          src="/logo.webp"
          alt="Creative lab"
          className="h-8 w-auto dark:invert"
        />
      </div>

      <nav className="hidden items-center gap-6 text-sm font-medium text-black/60 md:flex dark:text-white/60">
        <a
          href="#about"
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          Біз туралы
        </a>
        <a
          href="#benefits"
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          Пайдасы
        </a>
        <a
          href="#speakers"
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          Спикерлер
        </a>
        <a
          href="#pricing"
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          Бағалар
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden rounded-full bg-black px-4 py-2 text-xs font-bold tracking-widest text-white uppercase transition-transform hover:scale-105 sm:block dark:bg-white dark:text-black"
        >
          Орын алу
        </a>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThemeChange}
          className="rounded-full text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </div>
    </header>
  );
}
