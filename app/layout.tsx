import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import EntrySystem from "./(main)/EntrySystem";
import FloatingTelemetryHub from "./(main)/FloatingTelemetryHub";

// Single font — removed Geist + Geist_Mono (3 font families was blocking render)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', // non-blocking font load
});

export const metadata: Metadata = {
  title: "Precast Xchange | Global Precast Concrete Marketplace",
  description: "The global platform bridging and connecting all precasters. Find equipment, molds, suppliers, and regional precast concrete manufacturers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <EntrySystem />
        <FloatingTelemetryHub />
        {children}
      </body>
    </html>
  );
}
