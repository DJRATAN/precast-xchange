'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, HelpCircle, Heart, ArrowRight } from "lucide-react"

export default function TransactionHub() {
  const [activeTab, setActiveTab] = useState<'post' | 'request' | 'donate'>('post')

  const options = {
    post: {
      title: "Post an Asset or Form",
      description: "List new or used molds, machinery, or structural elements for sale or lease.",
      buttonText: "Create Listing",
      color: "bg-h2o-dark",
      icon: <Upload className="w-5 h-5 text-white" />
    },
    request: {
      title: "Request Custom Precast",
      description: "Submit technical specs for structural culverts, barriers, or unique trenching molds.",
      buttonText: "Submit RFP",
      color: "bg-h2o-light",
      icon: <HelpCircle className="w-5 h-5 text-white" />
    },
    donate: {
      title: "Donate Overstock / Materials",
      description: "Offload leftover concrete blocks, surplus aggregate, or aged forms for eco-credits.",
      buttonText: "List Donation",
      color: "bg-emerald-600",
      icon: <Heart className="w-5 h-5 text-white" />
    }
  }

  return (
    <div className="w-full bg-slate-50 p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm mt-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Selector Bars */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {(Object.keys(options) as Array<keyof typeof options>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 rounded-lg border text-left transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-3 ${
                activeTab === tab
                  ? 'border-h2o-light bg-white shadow-md ring-2 ring-h2o-light/20'
                  : 'border-slate-200 bg-white/60 hover:bg-white'
              }`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider block ${
                  activeTab === tab ? 'text-h2o-light' : 'text-slate-400'
                }`}>
                  Option
                </span>
                <span className="text-sm font-black text-slate-800 capitalize">{tab}</span>
              </div>
              <div className={`p-2 rounded-md ${activeTab === tab ? options[tab].color : 'bg-slate-200'}`}>
                {options[tab].icon}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Details Box */}
        <Card className="border border-slate-200 shadow-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-slate-900 font-extrabold flex items-center gap-2">
              {options[activeTab].title}
            </CardTitle>
            <CardDescription className="text-slate-500 text-sm">
              {options[activeTab].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end border-t border-slate-100 pt-6">
            <button className={`text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded flex items-center gap-2 transition-all hover:opacity-90 shadow-sm ${options[activeTab].color}`}>
              {options[activeTab].buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}