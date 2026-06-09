'use client'

import React from 'react'
import { Layers, Terminal, Cpu, Database } from 'lucide-react'

export default function PrecastIdeaHub() {
  const softwareNodes = [
    { icon: <Layers className="w-5 h-5 text-[#1B79EE]" />, title: "MixDesign Optimizer Pro", desc: "Automated calculation arrays adjusting aggregate matrix structures for ultra-high performance concrete mixes dynamically." },
    { icon: <Terminal className="w-5 h-5 text-[#1B79EE]" />, title: "Stripping Scheduler Core", desc: "Thermal sensor pipeline integrations mapping concrete hydration heat states to execute optimal form stripping parameters." },
    { icon: <Cpu className="w-5 h-5 text-[#1B79EE]" />, title: "Logistics Router Engine", desc: "Algorithmic transportation fleet dispatch balancing flatbed weights with high-volume architectural element drop sequences." },
    { icon: <Database className="w-5 h-5 text-[#1B79EE]" />, title: "Mold Lifecycle Ledger", desc: "BIM monitoring extensions calculating steel surface fatigue constraints across thousands of structural element castings." }
  ]

  return (
    <div className="w-full bg-white border-y-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-8 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Ecosystem Tooling Directory</span>
          <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Idea Hub & Innovation Softwares</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-none">
          {softwareNodes.map((node, index) => (
            <div key={index} className="w-full border border-[#004aad]/30 bg-white p-5 flex flex-col justify-between hover:border-[#1B79EE] transition-colors duration-300 rounded-none shadow-[4px_4px_0px_#004aad]/5 hover:shadow-[4px_4px_0px_#1B79EE]">
              <div className="space-y-3 rounded-none">
                <div className="p-2 border border-[#004aad]/20 inline-block rounded-none bg-white">
                  {node.icon}
                </div>
                <h4 className="text-sm font-black text-[#004aad] uppercase tracking-tight">{node.title}</h4>
                <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">{node.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#004aad]/10 flex items-center justify-between text-[9px] font-mono font-bold text-[#1B79EE]">
                <span>SYS NODE // 0{index + 1}</span>
                <span className="cursor-pointer hover:underline">RUN APPLICATION →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}