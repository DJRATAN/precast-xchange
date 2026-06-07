'use client'

import React from 'react'
import { Lightbulb, Users, HelpCircle } from 'lucide-react'

export default function OpenMindSection() {
  return (
    <div className="w-full bg-white border-b-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-6 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Public Forum Ecosystem</span>
          <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Open Mind Section</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-none">
          <div className="border-2 border-[#004aad] p-5 bg-white rounded-none shadow-[4px_4px_0px_#1B79EE]">
            <Lightbulb className="w-6 h-6 text-[#1B79EE] mb-3" />
            <h4 className="text-sm font-black text-[#004aad] uppercase mb-1">Share Concept Ideas</h4>
            <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">
              Submit custom structural precast ideas or mold adaptations before sending them to the official manufacturing pipeline.
            </p>
          </div>

          <div className="border-2 border-[#004aad]/30 p-5 bg-white rounded-none hover:border-[#1B79EE] transition-colors group">
            <Users className="w-6 h-6 text-[#004aad] group-hover:text-[#1B79EE] mb-3 transition-colors" />
            <h4 className="text-sm font-black text-[#004aad] uppercase mb-1">Community</h4>
            <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">
              Engage directly with registered multi-facility precasters to test engineering assumptions on batch calculations.
            </p>
          </div>

          <div className="border-2 border-[#004aad]/30 p-5 bg-white rounded-none hover:border-[#1B79EE] transition-colors group">
            <HelpCircle className="w-6 h-6 text-[#004aad] group-hover:text-[#1B79EE] mb-3 transition-colors" />
            <h4 className="text-sm font-black text-[#004aad] uppercase mb-1">Unlisted RFQs</h4>
            <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">
              Post unusual production problems, odd machinery breakdown issues, or request temporary engineering assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}