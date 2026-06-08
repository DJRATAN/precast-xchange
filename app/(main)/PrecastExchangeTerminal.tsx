'use client'

import React from 'react'
import { Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface OrderNode {
  id: string;
  type: 'BUY' | 'SELL';
  asset: string;
  quantity: string;
  rate: string;
  status: 'OPEN' | 'MATCHED';
}

export default function PrecastExchangeTerminal() {
  const activeOrders: OrderNode[] = [
    { id: "TX-9042", type: "BUY", asset: "Standard Step Molds", quantity: "12 units", rate: "Optimal Barter", status: "OPEN" },
    { id: "TX-9043", type: "SELL", asset: "Planetary Batch Mixer", quantity: "01 System", rate: "$42,500 Base", status: "MATCHED" },
    { id: "TX-9044", type: "BUY", asset: "Hollowcore Extruder Rails", quantity: "240 Linear Ft", rate: "Trade-In", status: "OPEN" },
    { id: "TX-9045", type: "SELL", asset: "Structural Tilt Tables", quantity: "04 Arrays", rate: "Lease Frame", status: "OPEN" }
  ]

  return (
    <div className="w-full bg-white border-2 border-[#004aad] p-6 rounded-none text-left">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#004aad]/10 pb-4 mb-6 gap-2 rounded-none">
        <div>
          <span className="text-[9px] font-mono font-bold text-[#1B79EE] tracking-widest uppercase">System Operations Matrix</span>
          <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight">Exchange Terminal</h3>
        </div>
        <div className="flex items-center gap-2 bg-[#004aad] text-white px-3 py-1.5 text-[9px] font-mono font-bold rounded-none">
          <Activity className="w-3 h-3 text-[#1B79EE] animate-pulse" />
          LEDGER SIGNAL: STREAMING
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-none">
        <table className="w-full border-collapse rounded-none text-left">
          <thead>
            <tr className="border-b-2 border-[#004aad] text-[10px] font-mono font-black text-[#004aad]/60 uppercase tracking-wider">
              <th className="pb-3 pl-2">Node Token</th>
              <th className="pb-3">Intent Matrix</th>
              <th className="pb-3">Asset Specification</th>
              <th className="pb-3 text-right">Volume</th>
              <th className="pb-3 pr-2 text-right">Valuation Allocation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#004aad]/10 font-mono text-[11px] font-bold text-[#004aad]">
            {activeOrders.map((order) => (
              <tr key={order.id} className="hover:bg-[#1B79EE]/5 transition-colors group">
                <td className="py-3 pl-2 text-[#1B79EE]">#{order.id}</td>
                <td className="py-3">
                  <span className={`inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-none border font-black ${
                    order.type === 'BUY' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-blue-50 border-[#1B79EE] text-[#1B79EE]'
                  }`}>
                    {order.type === 'BUY' ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                    {order.type}
                  </span>
                </td>
                <td className="py-3 uppercase tracking-tight text-sm font-sans font-black">{order.asset}</td>
                <td className="py-3 text-right font-sans">{order.quantity}</td>
                <td className="py-3 pr-2 text-right text-[#004aad]/80 group-hover:text-[#004aad] transition-colors">{order.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}