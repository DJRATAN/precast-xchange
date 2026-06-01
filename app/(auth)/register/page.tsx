'use client'

import React, { useState } from 'react'
import { User, Building2, Mail, Lock, ArrowRight, ShieldCheck, Layers } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type PortalView = 'BUYER' | 'SELLER'

export default function RegistrationPortal() {
  const [activeTab, setActiveTab] = useState<PortalView>('BUYER')
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white p-6 relative">
      {/* Background Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#004aad05_1px,transparent_1px),linear-gradient(to_bottom,#004aad05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">

        {/* Top Master Branding Block */}
        <div className="mb-8 text-center">
          <div className="relative w-[240px] h-[60px] mb-4 mx-auto">
            <Link href={'/'}>
              <Image
                src="/PRECAST EXCHANGE LOGO.PNG"
                alt="Precast Xchange"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-[10px] font-black text-[#1B79EE] uppercase tracking-[0.2em]">
            GLOBAL LEDGER PORTAL ONBOARDING
          </p>
        </div>

        {/* 2-COLOR REGISTRATION CARD GRID FRAME */}
        <div className="w-full border-2 border-[#004aad] bg-white rounded-none shadow-sm flex flex-col">

          {/* RAZOR SHARP TAB TOGGLE CONTROLLER (0px) */}
          <div className="flex w-full h-14 border-b-2 border-[#004aad] rounded-none">
            <button
              type="button"
              onClick={() => setActiveTab('BUYER')}
              className={`flex-1 h-full font-black text-xs uppercase tracking-wider transition-colors rounded-none ${activeTab === 'BUYER'
                ? 'bg-[#004aad] text-white'
                : 'bg-white text-[#004aad] hover:bg-[#1B79EE]/10'
                }`}
            >
              Buyer Dashboard
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('SELLER')}
              className={`flex-1 h-full font-black text-xs uppercase tracking-wider transition-colors rounded-none border-l-2 border-[#004aad] ${activeTab === 'SELLER'
                ? 'bg-[#004aad] text-white'
                : 'bg-white text-[#004aad] hover:bg-[#1B79EE]/10'
                }`}
            >
              Seller Portal
            </button>
          </div>

          {/* MASTER FORM DISPATCHER */}
          <form className="p-6 space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>

            {/* Dynamic Segment Header Indicator */}
            <div className="border-b border-[#1B79EE]/20 pb-2">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">
                {activeTab === 'BUYER' ? '• PROJECT PROCUREMENT TRACK' : '• PLANT MANUFACTURER TRACK'}
              </span>
              <h3 className="text-lg font-black text-[#004aad] uppercase tracking-tight mt-0.5">
                {activeTab === 'BUYER' ? 'Create Buyer Account' : 'Register Seller Profile'}
              </h3>
            </div>

            {/* Field Block: Company Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">
                {activeTab === 'BUYER' ? 'Corporate Firm Name' : 'Manufacturing Plant Name'}
              </label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedInput === 'company' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <Building2 className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="text"
                  onFocus={() => setFocusedInput('company')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder={activeTab === 'BUYER' ? "E.G., CIVIL INFRASTRUCTURE CORP" : "E.G., MEGA MOLD PRECAST FOUNDRY"}
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/30 outline-none uppercase bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Field Block: Contact Person */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Representative Name</label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedInput === 'name' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <User className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="text"
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="FULL OPERATOR NAME"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/30 outline-none uppercase bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Field Block: Email Identity */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Secure Routing Email</label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedInput === 'email' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <Mail className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="email"
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="COMMERCIAL@COMPANY.COM"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/30 outline-none uppercase bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Field Block: Access Password Security Key */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Ecosystem Password</label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedInput === 'password' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <Lock className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="password"
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] outline-none bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Custom Interactive Agreement System (0px) */}
            <div className="pt-2 rounded-none">
              <label className="flex items-start gap-2.5 cursor-pointer select-none rounded-none">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mt-0.5 border-2 border-[#004aad] rounded-none appearance-none checked:bg-[#1B79EE] cursor-pointer shrink-0"
                  required
                />
                <span className="text-[9px] font-bold text-[#004aad] uppercase leading-snug rounded-none">
                  I authorize registration into the decentralized PrecastXchange commercial ledger rules index.
                </span>
              </label>
            </div>

            {/* EXECUTION BUTTON MECHANIC */}
            <button
              type="submit"
              className="w-full bg-[#004aad] text-white py-4 flex items-center justify-center gap-3 group hover:bg-[#1B79EE] transition-all duration-300 rounded-none shadow-[4px_4px_0px_#1B79EE] border-none outline-none"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">
                {activeTab === 'BUYER' ? 'Initialize Procurement Profile' : 'Publish Manufacturer Ledger'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Secondary Navigation Help Link Footer */}
        <div className="mt-6 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider rounded-none">
            Already you are there{' '}
            <Link href={'/login'}>
              <button type="button" className="text-[#1B79EE] font-black underline hover:text-[#004aad] uppercase cursor-pointer">
                Login at PrecastXchange
              </button>
            </Link>
          </p>
        </div>
        {/* Global Security Node Footnote */}
        <div className="mt-6 text-center">
          <p className="text-[9px] font-bold text-[#1B79EE] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-none">
            <Layers className="w-3 h-3 animate-pulse" /> Protected Node Infrastructure Connection Active
          </p>
        </div>

      </div>
    </main>
  )
}