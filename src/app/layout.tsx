import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "motion/react";
import Header from "@/components/Header";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Creative Lab",
  description:
    "Creative Lab — креатив индустриясындағы адамдар жиналатын тірі орта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kk"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <ThemeProvider enableSystem={false} defaultTheme="dark">
          <LazyMotion features={domAnimation}>
            <Header />
            {children}
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}
