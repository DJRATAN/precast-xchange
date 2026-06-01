'use client'

import React, { useState } from 'react'
import { Mail, Lock, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type LoginRole = 'BUYER' | 'SELLER'

export default function MarketplaceLoginPortal() {
  const [activeTab, setActiveTab] = useState<LoginRole>('BUYER')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <main className="min-h-screen w-full flex items-center justify-center mx-auto bg-white p-6 relative">
      {/* Background Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#004aad05_1px,transparent_1px),linear-gradient(to_bottom,#004aad05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className='flex flex-col justify-between items-start gap-10'>
        <h1 className='text-lg font-black text-[#004aad] uppercase tracking-tight mt-0.5'>PrecastXchange</h1>
        <Image src={'/ecosystem-bg.png'} alt='Login Page Image'
          height={800}
          width={600}
          className='object-contain'
        />
      </div>
      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">

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
            MARKETPLACE ACCESS TERMINAL
          </p>
        </div>

        {/* UNIFIED 2-COLOR LOGIN FRAME */}
        <div className="w-full border-2 border-[#004aad] bg-white rounded-none shadow-sm flex flex-col">

          {/* TAB CONTROLLER: Switches Roles with 0px Sharp Edges */}
          <div className="flex w-full h-14 border-b-2 border-[#004aad] rounded-none">
            <button
              type="button"
              onClick={() => setActiveTab('BUYER')}
              className={`flex-1 h-full font-black text-xs uppercase tracking-wider transition-colors rounded-none ${activeTab === 'BUYER'
                ? 'bg-[#004aad] text-white'
                : 'bg-white text-[#004aad] hover:bg-[#1B79EE]/10'
                }`}
            >
              Buyer Console
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('SELLER')}
              className={`flex-1 h-full font-black text-xs uppercase tracking-wider transition-colors rounded-none border-l-2 border-[#004aad] ${activeTab === 'SELLER'
                ? 'bg-[#004aad] text-white'
                : 'bg-white text-[#004aad] hover:bg-[#1B79EE]/10'
                }`}
            >
              Seller Console
            </button>
          </div>

          {/* LOGIN INPUT CORE */}
          <form className="p-6 space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>

            {/* Dynamic Segment Header */}
            <div className="border-b border-[#1B79EE]/20 pb-2">
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest">
                {activeTab === 'BUYER' ? '• PROCUREMENT SECTOR ACCESS' : '• VENDOR PLANT ACCESS'}
              </span>
              <h3 className="text-lg font-black text-[#004aad] uppercase tracking-tight mt-0.5">
                {activeTab === 'BUYER' ? 'Buyer Identity Verification' : 'Seller Operator Login'}
              </h3>
            </div>

            {/* Field: Routing Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Account Email</label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedField === 'email' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <Mail className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="GATEWAY@COMPANY.COM"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/30 outline-none uppercase bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Field: Pass Key */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Access Security Code</label>
              <div className={`flex items-center border-2 transition-colors duration-200 rounded-none ${focusedField === 'password' ? 'border-[#1B79EE]' : 'border-[#004aad]'
                }`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white rounded-none">
                  <Lock className="w-4 h-4 text-[#004aad]" />
                </div>
                <input
                  type="password"
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] outline-none bg-transparent rounded-none"
                  required
                />
              </div>
            </div>

            {/* Remember Me / Recovery Configuration Options */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none rounded-none">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 border-2 border-[#004aad] rounded-none appearance-none checked:bg-[#1B79EE] cursor-pointer shrink-0"
                />
                <span className="text-[9px] font-bold text-[#004aad] uppercase rounded-none">
                  Keep Terminal Authenticated
                </span>
              </label>
              <button type="button" className="text-[9px] font-bold text-[#1B79EE] uppercase tracking-wider hover:underline">
                Recover Access Key
              </button>
            </div>

            {/* FORM EXECUTION TRIGGER BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#004aad] text-white py-4 flex items-center justify-center gap-3 group hover:bg-[#1B79EE] transition-all duration-300 rounded-none shadow-[4px_4px_0px_#1B79EE] border-none outline-none"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">
                {activeTab === 'BUYER' ? 'Access Buyer Dashboard' : 'Open Vendor Ledger'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </form>
        </div>

        {/* Secondary Navigation Help Link Footer */}
        <div className="mt-6 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider rounded-none">
            New to PrecastXchange?{' '}
            <Link href={'/register'}>
              <button type="button" className="text-[#1B79EE] font-black underline hover:text-[#004aad] uppercase cursor-pointer">
                Register Company Profile
              </button>
            </Link>
          </p>
        </div>

      </div>
    </main>
  )
}