import dynamic from "next/dynamic";

import React from 'react'
import Navigation from '../components/Navigation';
import ExtraordinaryFooter from '../components/ExtraordinaryFooter';
import { Metadata } from 'next';
import Hero from '../components/Hero';
const CrossroadsHub      = dynamic(() => import("../components/CrossroadsHub"));

export const metadata: Metadata = {
  title: {
    default: "PrecastExchange | The Universe of Precast",
    template: "%s | PX"
  },
  description: "Precast Exchange is a marketplace for total precast",
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
    <>
      <Navigation />
      <Hero />
      <CrossroadsHub />
      {children}
      <ExtraordinaryFooter />
    </>
  );
}
