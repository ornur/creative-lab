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
    <header className="absolute bottom-2 z-10 flex h-16 w-full max-w-xl items-center justify-between place-self-center rounded-2xl bg-white/80 px-4 backdrop-blur-sm dark:bg-black/80">
      <h1 className="text-xl font-bold text-black dark:text-white">
        Creative Lab
      </h1>
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeChange}
        className="text-black dark:text-white"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
    </header>
  );
}
