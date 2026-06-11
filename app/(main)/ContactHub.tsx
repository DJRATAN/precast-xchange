'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ContactHub() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ingestion execution logic goes here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 border-b-4 border-[#004aad] text-left rounded-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-4 border-[#004aad] shadow-[6px_6px_0px_#1b79ee] rounded-none overflow-hidden">

        {/* LEFT COLUMN: HERO IMAGE OVERLAY + ADRESSES TIER (Spans 5 Columns) */}
        <div className="lg:col-span-5 relative   flex flex-col justify-between p-8 md:p-10 rounded-none overflow-hidden min-h-[500px]">
          {/* Background Industrial Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/office.png"
              alt="Precast Manufacturing Floor"
              fill
              className="object-cover rounded-none"
            />
          </div> 

          {/* Top Panel Identity Branding */}
          <div className="relative z-20 space-y-2 rounded-none">
            <span className="text-[10px] font-mono font-black text-[#00bbff] uppercase tracking-[0.25em] block">
              HQ TERMINAL CHANNELS
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
              GLOBAL OFFICE HEADQUARTERS
            </h3>
            <div className="w-12 h-1 bg-[#00bbff] mt-2 rounded-none" />
          </div>

          {/* Bottom Panel Dynamic Address Matrix Stack */}
          <div className="relative z-20 space-y-8 pt-12 rounded-none">
            
            {/* USA CORPORATE TERMINAL */}
            <div className="flex gap-4 items-start rounded-none font-mono">
              <div className="bg-[#1b79ee] p-2 text-white rounded-none border border-[#00bbff] shrink-0 shadow-[2px_2px_0px_#00bbff]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1 text-white text-xs uppercase rounded-none">
                <span className="text-[#00bbff] font-black tracking-widest block text-[10px] mb-0.5">UNITED STATES ARCHITECTURE</span>
                <p className="font-black text-white">105 Maxess Road</p>
                <p className="text-white/80">Melville, NY 11747</p>
                <p className="text-[#00bbff] font-black tracking-wider mt-1 flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> (631) 452-1111
                </p>
              </div>
            </div>

            {/* CANADA REGIONAL NODE */}
            <div className="flex gap-4 items-start rounded-none font-mono">
              <div className="bg-[#1b79ee] p-2 text-white rounded-none border border-[#00bbff] shrink-0 shadow-[2px_2px_0px_#00bbff]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1 text-white text-xs uppercase rounded-none">
                <span className="text-[#00bbff] font-black tracking-widest block text-[10px] mb-0.5">CANADA DISTRIBUTION TERMINAL</span>
                <p className="font-black text-white">One Yonge Street</p>
                <p className="text-white/80">Toronto, Ontario</p>
                <p className="text-white/60">M5E 1R4, Canada</p>
                <p className="text-[#00bbff] font-black tracking-wider mt-1 flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> +1 (438) 805-9990
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE ACCESSIBILITY INGESTION FORM (Spans 7 Columns) */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-between rounded-none relative">
          
          <div className="w-full space-y-6 rounded-none">
            <div className="border-b-2 border-[#004aad]/10 pb-4 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[9px] font-mono font-black text-[#1b79ee] uppercase tracking-[0.2em] block">ROUTER SECURE CONSOLE</span>
                <h3 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-0.5">Submit Query / Intake Request</h3>
              </div>
              <div className="bg-[#004aad] text-white border border-[#00bbff] px-2.5 py-1 text-[8px] font-mono font-black tracking-widest rounded-none self-start sm:self-center flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#00bbff]" />
                <span>SECURE SSL ENTRY</span>
              </div>
            </div>

            {/* INTERACTIVE FORM ENGINE */}
            <form onSubmit={handleSubmit} className="space-y-5 rounded-none">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 rounded-none">
                {/* NAME FIELDS */}
                <div className="space-y-1.5 rounded-none">
                  <label className="text-[10px] font-black uppercase text-[#004aad] tracking-wider block">Full Name / Company Representative</label>
                  <input 
                    type="text" 
                    required
                    placeholder="ENTER FULL NAME"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-white border-2 border-[#004aad] p-3 text-[11px] font-black uppercase tracking-wider text-[#004aad] placeholder-[#004aad]/30 outline-none transition-all focus:border-[#1b79ee] focus:shadow-[0_0_10px_rgba(27,121,238,0.2)] rounded-none"
                  />
                </div>

                {/* PHONE FIELD (Crucial priority accessibility lane for older demographics) */}
                <div className="space-y-1.5 rounded-none">
                  <label className="text-[10px] font-black uppercase text-[#004aad] tracking-wider block">Contact Phone Line</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="ENTER PHONE NUMBER"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-white border-2 border-[#004aad] p-3 text-[11px] font-black uppercase tracking-wider text-[#004aad] placeholder-[#004aad]/30 outline-none transition-all focus:border-[#1b79ee] focus:shadow-[0_0_10px_rgba(27,121,238,0.2)] rounded-none"
                  />
                </div>
              </div>

              {/* EMAIL FIELD */}
              <div className="space-y-1.5 rounded-none">
                <label className="text-[10px] font-black uppercase text-[#004aad] tracking-wider block">E-Mail Address Connection Destination</label>
                <input 
                  type="email" 
                  required
                  placeholder="ENTER SECURE EMAIL ADDRESS"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border-2 border-[#004aad] p-3 text-[11px] font-black uppercase tracking-wider text-[#004aad] placeholder-[#004aad]/30 outline-none transition-all focus:border-[#1b79ee] focus:shadow-[0_0_10px_rgba(27,121,238,0.2)] rounded-none"
                />
              </div>

              {/* MESSAGE AREA */}
              <div className="space-y-1.5 rounded-none">
                <label className="text-[10px] font-black uppercase text-[#004aad] tracking-wider block">Detailed Specifications / Asset Queries</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="DESCRIBE YOUR PRECAST SPECIFICATIONS, EQUIPMENT REQUIREMENTS, MOLD INQUIRIES OR REPAIR NEST OBJECTIVES..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border-2 border-[#004aad] p-3 text-[11px] font-black uppercase tracking-wider text-[#004aad] placeholder-[#004aad]/30 outline-none transition-all focus:border-[#1b79ee] focus:shadow-[0_0_10px_rgba(27,121,238,0.2)] rounded-none resize-none"
                />
              </div>

              {/* ACTION TRIGGER BUTTON WITH SEVERE TRI-BLUE BLOOM SHADOW */}
              <div className="pt-4 rounded-none">
                <button 
                  type="submit"
                  className="w-full bg-[#004aad] border-2 border-[#004aad] text-white py-4 px-6 text-xs font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all duration-300 rounded-none outline-none shadow-[4px_4px_0px_#1b79ee] 
                             hover:bg-[#1b79ee] hover:border-[#1b79ee] hover:scale-[1.01]
                             hover:shadow-[0_0_20px_rgba(0,187,255,0.85),4px_4px_0px_#00bbff]"
                >
                  <span>Transmit Query Payload</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </form>
          </div>

          {/* TRANSMISSION ACKNOWLEDGEMENT MESSAGE LAYER */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-white/95 z-30 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 rounded-none">
              <div className="bg-[#004aad] p-4 border-2 border-[#00bbff] text-white shadow-[0_0_15px_#00bbff] mb-4 rounded-none">
                <CheckCircle2 className="w-8 h-8 text-[#00bbff]" />
              </div>
              <h4 className="text-xl font-black text-[#004aad] uppercase tracking-tight">TRANSMISSION COMPLETION</h4>
              <p className="text-[11px] font-mono font-bold text-[#1b79ee] uppercase tracking-widest mt-2 max-w-xs">
                Your data has logged cleanly. A validation team node will confirm connection options shortly.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}