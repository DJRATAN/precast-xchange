"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  ShieldCheck, 
  Users, 
  Truck, 
  Building2, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

// --- Dynamic Typing Logic ---
const words = ["ENGINEERS.", "AGENCIES.", "CUSTOMERS.", "VENDORS.", "TEAM.", "ENTRY."];

export default function PegPortalDashboard() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const stakeholders = [
    {
      role: "Engineers & Architects",
      desc: "Structural Data",
      icon: <Cpu className="w-6 h-6" />,
      color: "#1B79EE",
      span: "md:col-span-2",
    },
    {
      role: "Gov. Agencies",
      desc: "Compliance & Oversight",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "#004aad",
      span: "md:col-span-1",
    },
    {
      role: "Customers",
      desc: "Project Tracking & Billing",
      icon: <Users className="w-6 h-6" />,
      color: "#1B79EE",
      span: "md:col-span-1",
    },
    {
      role: "Vendors",
      desc: "Supply Chain & Logistics",
      icon: <Truck className="w-6 h-6" />,
      color: "#004aad",
      span: "md:col-span-1",
    },
    {
      role: "Team Members",
      desc: "Internal ERP & Management",
      icon: <Building2 className="w-6 h-6" />,
      color: "#1B79EE",
      span: "md:col-span-1",
    },
  ];

  return (
    <section className="min-h-screen w-full px-10 md:px-20 py-16 bg-[#F8F9FA] flex flex-col items-center justify-center  overflow-hidden">
      
      {/* 1. DYNAMIC TYPING HEADER */}
      <div className="w-full  mb-20 text-center">
 
        
        <h1 className="text-5xl md:text-8xl font-black text-[#004aad] tracking-tighter flex flex-wrap justify-center items-center gap-x-5">
          <span>PORTAL</span>
          <span className="relative min-w-[320px] text-left inline-flex items-center">
            <span style={{ WebkitTextStroke: "2px #1B79EE", color: "transparent" }}>
              {words[index].substring(0, subIndex)}
            </span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-14 md:h-20 bg-[#1B79EE] ml-2"
            />
          </span>
        </h1>
      </div>
 
 
    </section>
  );
}