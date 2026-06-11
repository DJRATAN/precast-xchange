'use client'

import React from 'react'
import { Trophy, Home, Eye, ShieldAlert } from 'lucide-react'

export default function EventsShowcaseMatrix() {
  const nodes = [
    { icon: <Trophy className="w-5 h-5 text-[#1B79EE]" />, label: "GOLF TOURNAMENTS", detail: "Client integration classic links networks." },
    { icon: <Home className="w-5 h-5 text-[#1B79EE]" />, label: "OPEN HOUSES", detail: "Plant floor structural capability updates." },
    { icon: <Eye className="w-5 h-5 text-[#1B79EE]" />, label: "PLANT TOURS", detail: "Live batching & casting inspection arrays." },
    { icon: <ShieldAlert className="w-5 h-5 text-[#1B79EE]" />, label: "PUBLIC WORKS MEETS", detail: "Municipal civil engineering logistics forum." }
  ]

  return (
    <div className="w-full bg-white border-b-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-8 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Community Deployment Hub</span>
          <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Ecosystem Event Nodes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-none">
          {nodes.map((node, index) => (
            <div key={index} className="w-full border border-[#004aad]/30 bg-white p-5 flex flex-col justify-between hover:border-[#1B79EE] transition-colors duration-300 rounded-none shadow-[4px_4px_0px_#004aad]/5 hover:shadow-[4px_4px_0px_#1B79EE]">
              <div className="space-y-4 rounded-none">
                <div className="p-2.5 border border-[#004aad]/20 inline-block rounded-none bg-white">
                  {node.icon}
                </div>
                <div className="space-y-1 rounded-none">
                  <h4 className="text-sm font-black text-[#004aad] uppercase tracking-tight">{node.label}</h4>
                  <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">{node.detail}</p>
                </div>
              </div>
              <div className="mt-8 pt-3 border-t border-[#004aad]/10 flex items-center justify-between text-[9px] font-mono font-bold text-[#1B79EE]">
                <span>EVENT NODE // 0{index + 1}</span>
                <span className="cursor-pointer hover:underline uppercase">VIEW LOGS →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}