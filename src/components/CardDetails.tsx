"use client";

import React from 'react';
import { caldOnlyCardData } from '@/lib/cardData';

interface CardDetailsProps {
  isBack?: boolean;
}

export default function CardDetails({ isBack = false }: CardDetailsProps) {
  if (isBack) {
    return (
      <div className="absolute inset-0 backface-hidden rotate-y-180">
        {/* Card back design */}
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-700 via-blue-800 to-slate-900 p-6 flex flex-col justify-between">
          {/* Magnetic stripe */}
          <div className="w-full h-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-md mt-4 shadow-inner" />
          
          {/* CVV area */}
          <div className="flex justify-end items-end">
            <div className="bg-white/90 px-3 py-1 rounded text-slate-900 font-mono text-sm font-bold shadow-lg">
              {caldOnlyCardData.cvv}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 backface-hidden">
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 p-6 flex flex-col justify-between relative overflow-hidden">
        
        {/* Metallic overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-300/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-300/3 via-transparent to-blue-200/5" />
        
        {/* Top section - Brand name */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-slate-200 to-blue-300 tracking-wider font-mono embossed-text">
            CALD ONLY CARD
          </h1>
          <div className="text-xs text-slate-400 mt-1 font-semibold tracking-widest">
            {caldOnlyCardData.cardType}
          </div>
        </div>

        {/* Middle section - Card number */}
        <div className="relative z-10 my-8">
          <div className="text-xl font-mono font-bold text-slate-200 tracking-wider embossed-text letter-spacing-wide">
            {caldOnlyCardData.cardNumber}
          </div>
        </div>

        {/* Bottom section - Name and expiry */}
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <div className="text-xs text-slate-400 font-semibold">CARDHOLDER NAME</div>
            <div className="text-sm font-bold text-slate-200 tracking-wider embossed-text">
              {caldOnlyCardData.cardholderName}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 font-semibold">EXPIRES</div>
            <div className="text-sm font-bold text-slate-200 font-mono embossed-text">
              {caldOnlyCardData.expiryDate}
            </div>
          </div>
        </div>

        {/* Holographic effect */}
        <div className="absolute bottom-4 right-4 w-12 h-8 bg-gradient-to-br from-blue-400/30 via-slate-300/20 to-blue-500/30 rounded border border-slate-400/30 backdrop-blur-sm" />
      </div>
    </div>
  );
}