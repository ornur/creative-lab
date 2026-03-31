import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "motion/react";
import Header from "@/components/Header";

const benzin = localFont({
  src: [
    { path: "./font/Benzin-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Benzin-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/Benzin-Semibold.ttf", weight: "600", style: "normal" },
    { path: "./font/Benzin-Bold.ttf", weight: "700", style: "normal" },
    { path: "./font/Benzin-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
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
      className={`${benzin.variable} h-full antialiased`}
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
