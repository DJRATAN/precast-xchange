'use client'
import { useEffect, useRef, useState } from "react";

export const ScrollProgressAnimation = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastRoundedRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollHeight > 0) {
          const percentage = (scrollTop / scrollHeight) * 100;
          const rounded = Math.round(percentage);
          if (rounded !== lastRoundedRef.current) {
            lastRoundedRef.current = rounded;
            setScrollPercentage(percentage);
          }
          const shouldShow = scrollTop > 100;
          setIsVisible(prev => prev !== shouldShow ? shouldShow : prev);
        }
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const radius = 24;
  const stroke = 3.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <>
      <style>{`
        .scroll-top-btn .scroll-top-default { display: flex; }
        .scroll-top-btn .scroll-top-arrow { display: none; }
        .scroll-top-btn:hover .scroll-top-default { display: none; }
        .scroll-top-btn:hover .scroll-top-arrow { display: flex; }
      `}</style>
      <div 
        className={`fixed bottom-110 right-10 z-[100] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ width: radius * 2, height: radius * 2 }}
          className="scroll-top-btn relative flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg height={radius * 2} width={radius * 2} className="absolute inset-0 -rotate-90 pointer-events-none">
            <circle stroke="currentColor" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} className="text-gray-200" />
            <circle stroke="currentColor" fill="transparent" strokeWidth={stroke} strokeDasharray={circumference + " " + circumference} style={{ strokeDashoffset }} strokeLinecap="round" r={normalizedRadius} cx={radius} cy={radius} className="text-[#004aad]" />
          </svg>
          
          {/* Default: percentage or checkmark (hidden on hover via CSS) */}
          <div className="scroll-top-default pointer-events-none items-center justify-center">
            {scrollPercentage >= 99 ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-blue-500">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <span className="text-[10px] font-black text-blue-600 tracking-tighter">
                {Math.round(scrollPercentage)}%
              </span>
            )}
          </div>

          {/* Hover: up arrow (shown on hover via CSS) */}
          <div className="scroll-top-arrow pointer-events-none items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-blue-500">
               <line x1="12" y1="19" x2="12" y2="5"></line>
               <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};