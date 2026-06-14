import React, { useState } from 'react';
import { Shield, Sparkles, AlertCircle, ShoppingCart } from 'lucide-react';

interface SimulatedHeaderProps {
  onViewportChange: (viewport: 'desktop' | 'tablet' | 'mobile') => void;
  activeViewport: 'desktop' | 'tablet' | 'mobile';
}

export const SimulatedHeader: React.FC<SimulatedHeaderProps> = ({
  onViewportChange,
  activeViewport,
}) => {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleBuyNow = () => {
    setPurchaseSuccess(true);
    setTimeout(() => setPurchaseSuccess(false), 4000);
  };

  return (
    <div className="bg-[#262626] text-[#b2b2b2] text-xs font-sans h-14 px-4 flex items-center justify-between border-b border-[#1b1b1b] select-none shadow-md z-50 sticky top-0 md:relative">
      {/* Envato Market Logo branding */}
      <div className="flex items-center gap-3">
        <a 
          href="https://themeforest.net/item/charitics-ngo-non-profit-html-template/56360349" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-white font-bold text-base tracking-tight flex items-center gap-1.5">
            <span className="text-[#81b441]">envato</span>
            <span className="text-gray-300 font-light text-sm">market</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-2 border-l border-zinc-700 pl-3">
          <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px] font-mono">ID: 56360349</span>
          <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/40 px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-400" /> Active License Verified
          </span>
        </div>
      </div>

      {/* Responsive Viewport Toggles (Iframe/Simulated Environment switcher) */}
      <div className="flex items-center bg-[#1e1e1e] rounded-lg p-0.5 border border-zinc-800">
        <button
          onClick={() => onViewportChange('desktop')}
          className={`px-3 py-1.5 rounded-md font-medium text-xs transition-all ${
            activeViewport === 'desktop'
              ? 'bg-[#333333] text-white shadow-sm'
              : 'hover:text-zinc-200 text-zinc-400'
          }`}
          title="Desktop view"
        >
          Desktop (100%)
        </button>
        <button
          onClick={() => onViewportChange('tablet')}
          className={`px-3 py-1.5 rounded-md font-medium text-xs transition-all ${
            activeViewport === 'tablet'
              ? 'bg-[#333333] text-white shadow-sm'
              : 'hover:text-zinc-200 text-zinc-400'
          }`}
          title="Simulate Tablet view"
        >
          Tablet (768px)
        </button>
        <button
          onClick={() => onViewportChange('mobile')}
          className={`px-3 py-1.5 rounded-md font-medium text-xs transition-all ${
            activeViewport === 'mobile'
              ? 'bg-[#333333] text-white shadow-sm'
              : 'hover:text-zinc-200 text-zinc-400'
          }`}
          title="Simulate Mobile view"
        >
          Mobile (390px)
        </button>
      </div>

      {/* Buy Button & Live Preview Marker */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block text-[#828282] text-[11px]">
          CHIEF LUKWELE CBO - NGO HTML Template
        </span>
        <div className="relative">
          <button
            onClick={handleBuyNow}
            className="bg-[#82b440] hover:bg-[#6f9c34] text-white font-semibold py-1.5 px-3.5 rounded transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Buy Now
          </button>
          
          {purchaseSuccess && (
            <div className="absolute right-0 top-10 w-96 bg-[#1a1a1a] border border-zinc-800 rounded-xl p-4 shadow-2xl z-50 text-white font-sans text-xs animate-in fade-in duration-200">
              <div className="flex gap-3">
                <div className="bg-emerald-500/20 p-2 text-emerald-400 rounded-full h-fit">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 text-sm">Purchase Simulation Successful!</h4>
                  <p className="text-zinc-400 mt-1 leading-relaxed">
                    This pixel-perfect, fully responsive client implementation of the <strong>CHIEF LUKWELE CBO Theme</strong> is hosted inside Google AI Studio. You get instantaneous offline rendering!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
