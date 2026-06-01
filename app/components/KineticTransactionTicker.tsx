'use client'

import React, { useState, useEffect } from 'react'

export default function KineticTransactionTicker() {
  const words = [
    "BARTER",
    "BUY",
    "SELL",
    "TRADE IN",
    "LEASE",
    "RENT",
    "BORROW",
    "LOANERS",
    "SURPLUS",
    "REPAIRS",
    "DONATE"
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const activeWord = words[currentWordIndex]
    
    // Set variable execution speeds for typing vs erasing
    const typingSpeed = isDeleting ? 40 : 90
    
    const handleTickerCycle = () => {
      if (!isDeleting) {
        // Add next character
        setCurrentText(activeWord.substring(0, currentText.length + 1))
        
        // If word is completely typed, hold, then switch to deleting state
        if (currentText === activeWord) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Remove last character
        setCurrentText(activeWord.substring(0, currentText.length - 1))
        
        // If word is completely erased, advance to next transaction vector
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleTickerCycle, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex])

  return (
    <div className="w-full bg-white mb-2 text-left">
      <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 select-none rounded-none">
        
        {/* Core Static Branding Title */}
        <span className="text-2xl md:text-3xl font-black tracking-widest text-[#004aad] uppercase rounded-none whitespace-nowrap">
          TRANSACTION MODE:
        </span>

        {/* Dynamic Character Typing Window Frame */}
        <div className="flex items-center   min-w-[320px]">
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-[#1B79EE] uppercase rounded-none flex items-center">
            {/* The active character string */}
            <span>{currentText}</span>
            
            {/* Sharp Digital Cursor Ticker in brand Light Blue */}
            <span className="inline-block w-1.5 h-7 bg-[#1B79EE] ml-2 animate-[pulse_0.8s_infinite] rounded-none" />
          </h1>
        </div> 

      </div>
    </div>
  )
}