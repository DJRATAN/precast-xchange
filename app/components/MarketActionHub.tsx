'use client'

import React, { useState, ChangeEvent } from 'react'
import { createBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Upload, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react'

type IntentType = 'BARTER' | 'BUY' | 'SELL' | 'TRADE' | 'LOANERS' | 'REPAIRS' | 'DONATE' | 'MANUFACTURING';
type PostType = 'POST' | 'REQUEST';

export default function MarketActionHub() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // State Management Clusters
  const [selectedIntent, setSelectedIntent] = useState<IntentType>('SELL')
  const [postType, setPostType] = useState<PostType>('POST')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)
  
  // UX State Indicators
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const intents: { id: IntentType; label: string }[] = [
    { id: 'BARTER', label: 'BARTER' },
    { id: 'BUY', label: 'BUY' },
    { id: 'SELL', label: 'SELL' },
    { id: 'TRADE', label: 'TRADE' },
    { id: 'LOANERS', label: 'LOANERS' },
    { id: 'REPAIRS', label: 'REPAIRS' },
    { id: 'DONATE', label: 'DONATE' },
    { id: 'MANUFACTURING', label: 'MANUFACTURING' },
  ]

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage(null)

    try {
      let mediaUrl = ''

      if (file) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `listings/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('precast-media')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('precast-media')
          .getPublicUrl(filePath)
          
        mediaUrl = publicUrl
      }

      const { error: insertError } = await supabase
        .from('precast_market_listings')
        .insert({
          intent: selectedIntent,
          post_type: postType,
          title: title,
          description: description,
          media_url: mediaUrl || null
        })

      if (insertError) throw insertError

      setStatusMessage({ type: 'success', text: `Transaction successfully declared as a system ${postType} node.` })
      
      setTitle('')
      setDescription('')
      setFile(null)
    } catch (error: any) {
      setStatusMessage({ type: 'error', text: error.message || 'Transmission pipeline interrupted.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 border-b-4 border-[#004aad] rounded-none text-left">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 rounded-none">
        
        {/* TOP ROW: Title Header and Menu Intents in One Row */}
        <div className="w-full space-y-4 border-b-2 border-[#004aad]/10 pb-6 rounded-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-none">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Transaction Router Matrix</span>
              <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1 rounded-none">Select Intent Category</h2>
            </div>
            <div className="text-[10px] font-mono font-bold text-[#004aad] rounded-none">
              ACTIVE NODE: <span className="text-[#1B79EE] font-black">{selectedIntent}</span>
            </div>
          </div>

          {/* ALL INTENT MENU BUTTONS FORCED TO ONE SINGLE ROW */}
          <div className="flex flex-row items-center justify-start gap-2 overflow-x-auto pb-2 rounded-none scrollbar-thin scrollbar-thumb-[#004aad]/20">
            {intents.map((intent) => (
              <button
                key={intent.id}
                type="button"
                onClick={() => {
                  setSelectedIntent(intent.id)
                  if (intent.id === 'DONATE') setPostType('POST')
                }}
                className={`whitespace-nowrap px-6 py-3 text-xs font-black uppercase tracking-wider transition-all rounded-none outline-none border-2 shrink-0 ${
                  selectedIntent === intent.id
                    ? 'bg-[#004aad] border-[#004aad] text-white shadow-[4px_4px_0px_#1B79EE]'
                    : 'bg-white border-[#004aad]/20 text-[#004aad] hover:border-[#1B79EE]'
                }`}
              >
                {intent.label}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Full Width Action Form Routing Panel */}
        <div className="w-full border-2 border-[#004aad] p-6 md:p-8 bg-white rounded-none">
          
          <div className="grid grid-cols-2 gap-2 mb-8 rounded-none max-w-md">
            <button
              type="button"
              onClick={() => setPostType('POST')}
              className={`py-3 text-xs font-black uppercase tracking-widest transition-all rounded-none border-2 ${
                postType === 'POST'
                  ? 'bg-[#1B79EE] border-[#1B79EE] text-white'
                  : 'bg-white border-[#004aad]/20 text-[#004aad] hover:border-[#004aad]'
              }`}
            >
              Declare Asset [POST]
            </button>
            <button
              type="button"
              disabled={selectedIntent === 'DONATE'}
              onClick={() => setPostType('REQUEST')}
              className={`py-3 text-xs font-black uppercase tracking-widest transition-all rounded-none border-2 disabled:opacity-30 ${
                postType === 'REQUEST'
                  ? 'bg-[#1B79EE] border-[#1B79EE] text-white'
                  : 'bg-white border-[#004aad]/20 text-[#004aad] hover:border-[#004aad]'
              }`}
            >
              Request Asset [REQUEST]
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-none">
            <div className="space-y-1 rounded-none">
              <label className="text-[10px] font-mono font-bold text-[#004aad] uppercase tracking-wider">Asset Listing Nomenclature / Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., AUTOMATED PLANETARY MIXER CORE ENGINE"
                className="w-full bg-white border-2 border-[#004aad]/20 px-4 py-3 text-xs font-bold text-[#004aad] rounded-none outline-none focus:border-[#1B79EE] placeholder-[#004aad]/40 uppercase tracking-tight"
              />
            </div>

            <div className="space-y-1 rounded-none">
              <label className="text-[10px] font-mono font-bold text-[#004aad] uppercase tracking-wider">Structural Details & Logistical Metrics</label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Specify dimensions, operational condition, mold configuration details, or spatial repair requirements..."
                className="w-full bg-white border-2 border-[#004aad]/20 px-4 py-3 text-xs font-medium text-[#004aad] rounded-none outline-none focus:border-[#1B79EE] placeholder-[#004aad]/40"
              />
            </div>

            <div className="space-y-1 rounded-none">
              <label className="text-[10px] font-mono font-bold text-[#004aad] uppercase tracking-wider">Blueprint Documentation / Video Upload</label>
              <div className="border-2 border-dashed border-[#004aad]/30 hover:border-[#1B79EE] bg-white p-4 transition-colors relative flex flex-col items-center justify-center text-center rounded-none cursor-pointer">
                <input
                  type="file"
                  accept="video/*,image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-5 h-5 text-[#1B79EE] mb-2" />
                <p className="text-[11px] font-bold text-[#004aad] uppercase tracking-tight">
                  {file ? `FILE IDENTIFIED: ${file.name.toUpperCase()}` : 'SELECT MACHINERY SPECIFICATION FILE OR VIDEO CLIP'}
                </p>
                <p className="text-[9px] text-[#004aad]/60 mt-0.5 font-mono">MAX ASSET UPLOAD METRIC LIMIT: 50MB</p>
              </div>
            </div>

            {statusMessage && (
              <div className={`p-4 border-2 flex items-center justify-between gap-3 rounded-none text-xs font-bold uppercase tracking-tight ${
                statusMessage.type === 'success' ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : 'bg-rose-50 border-rose-500 text-rose-800'
              }`}>
                <div className="flex items-center gap-3">
                  {statusMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStatusMessage(null)}
                  className="p-1 hover:bg-black/5 rounded-none transition-colors outline-none cursor-pointer flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-current" />
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#004aad] border-2 border-[#004aad] text-white py-4 px-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-all rounded-none outline-none disabled:opacity-50 flex items-center justify-center gap-2 shadow-[4px_4px_0px_#1B79EE] active:translate-y-0.5"
            >
              <span>{loading ? 'TRANSMITTING ASSET SIGNAL...' : `EXECUTE GLOBAL SYSTEM ${postType}`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}