import React from 'react';
import { Heart, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { Cause } from '../types';

interface HeroProps {
  onDonateClick: (cause?: Cause) => void;
  onPageSelect: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDonateClick, onPageSelect }) => {
  return (
    <div className="relative bg-emerald-950 text-white font-sans overflow-hidden py-16 px-6 md:px-12 flex flex-col justify-center min-h-[550px] text-left">
      
      {/* Absolute floating graphics background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/hero-community.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/40"></div>

      {/* Decorative vector graphics grid */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl space-y-6 z-10">
        
        {/* Highlight Tag */}
        <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm rounded-full py-1.5 px-4 select-none">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-[11px] font-mono tracking-wider text-emerald-350 uppercase font-semibold">
            Urgent Call To Action: Childhood Malnutrition
          </span>
        </div>

        {/* Display Typography Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl text-zinc-100">
          Small Acts, <span className="text-amber-400 underline decoration-amber-500 decoration-wavy underline-offset-8">Huge Impacts.</span> <br />
          Empower Communities Worldwide.
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
          Through your kindness, we construct deep borehole water purification wells, deliver lifesaving infant meal rations, supply books, and rehabilitate local schools. Everything we create is transparently logged.
        </p>

        {/* Buttons CTA Grid */}
        <div className="flex flex-wrap items-center gap-4 pt-3 select-none">
          <button
            onClick={() => onDonateClick()}
            className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-emerald-950 font-black py-3.5 px-8 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 text-sm cursor-pointer"
          >
            <Heart className="w-4.5 h-4.5 text-emerald-950 fill-emerald-950" />
            Make Immediate Donation
          </button>
          
          <button
            onClick={() => onPageSelect('causes')}
            className="bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-700/60 active:scale-95 text-white font-bold py-3.5 px-7 rounded-full transition-all flex items-center gap-1.5 text-sm cursor-pointer"
          >
            Explore Campaign Causes
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Trust elements cards inside Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-emerald-900/80 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <div className="bg-emerald-900/50 p-2 rounded-lg text-amber-400 border border-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase font-sans tracking-wide">100% Monitored</h4>
              <p className="text-[10px] text-zinc-400">Funds directly vetted and certified</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-emerald-900/50 p-2 rounded-lg text-amber-400 border border-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase font-sans tracking-wide">Direct Impact</h4>
              <p className="text-[10px] text-zinc-400">Local teams lead local deliveries</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-emerald-900/50 p-2 rounded-lg text-amber-400 border border-emerald-800">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase font-sans tracking-wide">Crisis Response</h4>
              <p className="text-[10px] text-zinc-400">Immediate mobilization when needed</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
