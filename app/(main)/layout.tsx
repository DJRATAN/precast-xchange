import React from 'react'
import Navigation from '../components/Navigation';
import ExtraordinaryFooter from '../components/ExtraordinaryFooter';
import { cn } from '@/lib/utils';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import { Metadata } from 'next';
import Hero from '../components/Hero';
import CrossroadsHub from '../components/CrossroadsHub';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// UPDATED METADATA
export const metadata: Metadata = {
  title: {
    default: "PrecastXchange | The Universe of Precast",
    template: "%s | PX"
  },
  description: "Precast Xchange is a marketplace for total precast",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <Navigation />
      <Hero />
      <CrossroadsHub />
      <body className="min-h-full flex flex-col">{children}</body>
      <ExtraordinaryFooter />
    </html>
  );
}

