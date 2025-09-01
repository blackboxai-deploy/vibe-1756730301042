"use client";

import React, { useState } from 'react';
import CardDetails from './CardDetails';

export default function CreditCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Card container with 3D perspective */}
      <div className="perspective-1000 group">
        <div 
          className={`
            relative w-96 h-60 cursor-pointer transition-all duration-1000 ease-out
            transform-style-preserve-3d hover:scale-105
            ${isFlipped ? 'rotate-y-180' : ''}
            shadow-2xl hover:shadow-3xl
          `}
          onClick={handleCardClick}
        >
          {/* Front of card */}
          <CardDetails />
          
          {/* Back of card */}
          <CardDetails isBack />

          {/* Enhanced shadow effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-transparent to-slate-500/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-float" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-slate-400/60 rounded-full animate-float-delayed" />
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-300/60 rounded-full animate-float-slow" />
        </div>
      </div>

      {/* Interaction hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-slate-400 text-sm font-medium animate-pulse">
          Click to flip card
        </div>
      </div>
    </div>
  );
}