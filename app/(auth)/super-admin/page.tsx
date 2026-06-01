'use client'

import React, { useState } from 'react'
import { ShieldCheck, Lock, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function SuperAdminLogin() {
  const [isFocused, setIsFocused] = useState<string | null>(null)

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white p-6">
      {/* Background Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#004aad08_1px,transparent_1px),linear-gradient(to_bottom,#004aad08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Login Terminal Container */}
      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">
        
        {/* Branding Block */}
        <div className="mb-10 text-center">
          <div className="relative w-[240px] h-[60px] mb-4">
            <Image 
              src="/PRECAST EXCHANGE LOGO.PNG" 
              alt="Precast Xchange"
              fill
              priority
              className="object-contain" 
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#1B79EE]" />
            <span className="text-[10px] font-black text-[#1B79EE] uppercase tracking-[0.2em]">Super-Admin Portal</span>
            <div className="h-px w-8 bg-[#1B79EE]" />
          </div>
        </div>

        {/* Login Form: Strictly 0px sharp edges */}
        <div className="w-full border-2 border-[#004aad] bg-white p-8 shadow-sm rounded-none">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Identity Input Group */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Ben's Terminal ID</label>
              <div className={`relative flex items-center border-2 transition-colors duration-200 ${isFocused === 'user' ? 'border-[#1B79EE]' : 'border-[#004aad]'}`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white">
                  <User className="w-4 h-4 text-[#004aad]" />
                </div>
                <input 
                  type="text" 
                  onFocus={() => setIsFocused('user')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="USERNAME"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/40 outline-none uppercase bg-transparent rounded-none"
                />
              </div>
            </div>

            {/* Security Input Group */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#004aad] uppercase tracking-wider">Access Key</label>
              <div className={`relative flex items-center border-2 transition-colors duration-200 ${isFocused === 'pass' ? 'border-[#1B79EE]' : 'border-[#004aad]'}`}>
                <div className="p-3 border-r-2 border-[#004aad] bg-white">
                  <Lock className="w-4 h-4 text-[#004aad]" />
                </div>
                <input 
                  type="password" 
                  onFocus={() => setIsFocused('pass')}
                  onBlur={() => setIsFocused(null)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-xs font-bold text-[#004aad] placeholder-[#004aad]/40 outline-none bg-transparent rounded-none"
                />
              </div>
            </div>

            {/* Remember Me / Support Row */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3 h-3 border-2 border-[#004aad] rounded-none appearance-none checked:bg-[#1B79EE] cursor-pointer" />
                <span className="text-[9px] font-bold text-[#004aad] uppercase">Secure Session</span>
              </label>
              <button type="button" className="text-[9px] font-bold text-[#1B79EE] uppercase hover:underline">Support Link</button>
            </div>

            {/* Authentication Action Button */}
            <button 
              type="submit"
              className="w-full bg-[#004aad] text-white py-4 flex items-center justify-center gap-3 group hover:bg-[#1B79EE] transition-all duration-300 rounded-none shadow-[4px_4px_0px_#1B79EE]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Authorize Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </form>
        </div>

        {/* System Footer Info */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
            Hardware Encrypted Node • PRECASTXCHANGE v4.0.0
          </p>
          <p className="text-[8px] text-slate-300 uppercase leading-none max-w-[280px]">
            Unauthorized access to this terminal is strictly prohibited and subject to cryptographic monitoring.
          </p>
        </div>

      </div>
    </main>
  )
}