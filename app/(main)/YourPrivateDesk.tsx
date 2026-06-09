'use client'

import React from 'react'
import { Shield, Briefcase, FileText, Settings2 } from 'lucide-react'

export default function YourPrivateDesk() {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-none">
        
        {/* OPEN MIND PANEL: High-impact informational layout */}
        <div className="lg:col-span-4 bg-[#004aad] text-white p-6 md:p-8 flex flex-col justify-between rounded-none border-b-4 border-[#1B79EE]">
          <div className="space-y-4 rounded-none">
            <span className="text-[9px] font-mono font-bold text-[#1B79EE] bg-white px-2 py-1 tracking-widest uppercase">Open Mind Arena</span>
            <h3 className="text-2xl font-black uppercase tracking-tight leading-none">Collaborative Architecture</h3>
            <p className="text-xs font-light text-white/80 leading-relaxed">
              An unconstrained space built for processing shared inventory models, unlisted custom molds, and innovative manufacturing solutions across production nodes.
            </p>
          </div>
          <div className="pt-8 rounded-none">
            <button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#004aad] font-black uppercase text-[10px] tracking-wider py-3 px-6 w-full transition-colors rounded-none outline-none">
              Initialize Collective Session
            </button>
          </div>
        </div>

        {/* YOUR PRIVATE DESK PANEL: Dynamic user control surface modules */}
        <div className="lg:col-span-8 border-2 border-[#004aad] p-6 md:p-8 bg-white rounded-none">
          <div className="flex justify-between items-start border-b border-[#004aad]/20 pb-4 mb-6 rounded-none">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-wider block">Security Level // Authenticated Account</span>
              <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight mt-0.5">Your Private Desk</h3>
            </div>
            <div className="w-2.5 h-2.5 rounded-none bg-emerald-500 animate-pulse mt-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-none">
            
            {/* Control Matrix Module 01 */}
            <div className="border border-[#004aad]/20 p-4 rounded-none bg-white hover:border-[#1B79EE] transition-all cursor-pointer group">
              <Briefcase className="w-5 h-5 text-[#004aad] group-hover:text-[#1B79EE] mb-3 transition-colors" />
              <h5 className="text-xs font-black text-[#004aad] uppercase tracking-tight">Active Barters</h5>
              <p className="text-[10px] text-[#004aad]/60 font-mono mt-1">03 Active Assets Listed</p>
            </div>

            {/* Control Matrix Module 02 */}
            <div className="border border-[#004aad]/20 p-4 rounded-none bg-white hover:border-[#1B79EE] transition-all cursor-pointer group">
              <FileText className="w-5 h-5 text-[#004aad] group-hover:text-[#1B79EE] mb-3 transition-colors" />
              <h5 className="text-xs font-black text-[#004aad] uppercase tracking-tight">System RFQs</h5>
              <p className="text-[10px] text-[#004aad]/60 font-mono mt-1">02 Requests Incoming</p>
            </div>

            {/* Control Matrix Module 03 */}
            <div className="border border-[#004aad]/20 p-4 rounded-none bg-white hover:border-[#1B79EE] transition-all cursor-pointer group">
              <Settings2 className="w-5 h-5 text-[#004aad] group-hover:text-[#1B79EE] mb-3 transition-colors" />
              <h5 className="text-xs font-black text-[#004aad] uppercase tracking-tight">Node Topology</h5>
              <p className="text-[10px] text-[#004aad]/60 font-mono mt-1">Manage API Gateway</p>
            </div>

          </div>

          {/* Bottom Security Banner */}
          <div className="mt-6 p-3 bg-[#1B79EE]/5 border border-[#1B79EE]/20 flex items-center gap-2.5 rounded-none">
            <Shield className="w-4 h-4 text-[#1B79EE] shrink-0" />
            <span className="text-[10px] font-mono font-bold text-[#004aad]/70 uppercase tracking-tight">
              All communications and document storage vectors are fully encrypted via Supabase Auth Nodes.
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}