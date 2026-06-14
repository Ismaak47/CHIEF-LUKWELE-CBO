import React from 'react';
import { Cause } from '../types';
import { Heart, Landmark, Flame, UserCheck } from 'lucide-react';

interface CausesListProps {
  causes: Cause[];
  onDonateClick: (cause: Cause) => void;
  selectedCauseId: string | null;
}

export const CausesList: React.FC<CausesListProps> = ({
  causes,
  onDonateClick,
  selectedCauseId,
}) => {
  const filteredCauses = selectedCauseId 
    ? causes.filter(c => c.id === selectedCauseId)
    : causes;

  return (
    <div className="py-12 px-6 md:px-12 bg-neutral-50 text-zinc-800 font-sans text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-black font-mono text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            Active Campaigns
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 mt-3">
            Urgent Campaigns Needing Your Kind Support
          </h2>
          <p className="text-xs text-neutral-500 leading-normal">
            Browse our verified campaigns. Select any cause to submit custom contributions safely. Your help guarantees immediate project funding.
          </p>
        </div>

        {selectedCauseId && (
          <div className="bg-amber-50 border border-amber-200/40 rounded-xl px-4 py-2.5 text-xs text-amber-800 font-medium flex items-center justify-between gap-4 max-w-sm">
            <span>Filtering active list by your sidebar selection.</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredCauses.map((cause) => {
          const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
          return (
            <div
              key={cause.id}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col group ${
                selectedCauseId === cause.id
                  ? 'border-emerald-500 ring-2 ring-emerald-500/10 shadow-lg'
                  : 'border-neutral-200 hover:border-neutral-300 hover:shadow-md'
              }`}
            >
              {/* Image Banner */}
              <div className="relative h-48 sm:h-56 bg-zinc-100 overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 bg-emerald-600 text-white font-mono uppercase text-[10px] tracking-wider px-3 py-1 rounded-full font-bold shadow-md">
                  {cause.category}
                </span>

                {pct >= 90 && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-emerald-950 font-sans uppercase text-[10px] tracking-wider px-3 py-1 rounded-full font-black animate-pulse flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-emerald-950" /> Almost Funded
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 text-left">
                  <h3 className="font-sans font-black text-lg md:text-xl text-emerald-950 leading-snug group-hover:text-emerald-800 transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                    {cause.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-150 space-y-4">
                  
                  {/* Progress tracker */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5 font-mono text-xs">
                      <span className="font-sans font-bold text-neutral-800 text-[13px]">{pct}% Funded</span>
                      <span className="text-neutral-500 text-[11px]">
                        <strong className="text-neutral-800">${cause.raised.toLocaleString()}</strong> of ${cause.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Supporters info & CTA Grid */}
                  <div className="flex items-center justify-between pt-1 font-mono text-[11px] text-zinc-500">
                    <span className="flex items-center gap-1">
                      <UserCheck className="w-4 h-4 text-zinc-400" /> {cause.donorsCount} Backers
                    </span>
                    <button
                      onClick={() => onDonateClick(cause)}
                      className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black py-2.5 px-5 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/15 cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 text-white fill-white" />
                      Donate Now
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
