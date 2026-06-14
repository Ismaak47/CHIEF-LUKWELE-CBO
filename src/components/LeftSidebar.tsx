import React, { useState } from 'react';
import { Cause } from '../types';
import { Heart, Landmark, Users, HelpCircle, Flame } from 'lucide-react';

interface LeftSidebarProps {
  causes: Cause[];
  onDonateClick: (cause: Cause) => void;
  selectedCauseId: string | null;
  onCauseSelect: (id: string | null) => void;
  onPageSelect: (page: string) => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  causes,
  onDonateClick,
  selectedCauseId,
  onCauseSelect,
  onPageSelect,
}) => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'stats'>('campaigns');

  const stats = [
    { label: 'Active Water Wells', value: '18', progress: 75 },
    { label: 'Enrolled Pupils', value: '4,520', progress: 90 },
    { label: 'Recycled Ocean Debris', value: '8.4 Tons', progress: 55 },
    { label: 'Distributed Meal Supplies', value: '142,000+', progress: 85 },
  ];

  return (
    <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-neutral-50 flex flex-col font-sans shrink-0 max-h-[1000px] lg:overflow-y-auto">
      
      {/* Sidebar Mode Toggle */}
      <div className="flex border-b border-neutral-200 select-none bg-neutral-100 p-1 m-4 rounded-xl">
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'campaigns'
              ? 'bg-white text-emerald-950 shadow-sm'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Active Campaigns
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'stats'
              ? 'bg-white text-emerald-950 shadow-sm'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Key Impact Metrics
        </button>
      </div>

      {activeTab === 'campaigns' ? (
        <div className="p-4 pt-0 space-y-3.5 flex-1 overflow-y-auto text-left">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold font-mono uppercase text-zinc-400 tracking-wider">Quick Select</h3>
            <button 
              onClick={() => onCauseSelect(null)}
              className="text-[11px] text-emerald-600 font-semibold hover:underline"
            >
              Show All
            </button>
          </div>

          <div className="space-y-2.5">
            {causes.map((cause) => {
              const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
              const isSelected = selectedCauseId === cause.id;

              return (
                <div
                  key={cause.id}
                  onClick={() => onCauseSelect(isSelected ? null : cause.id)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all border text-left ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-sm'
                      : 'bg-neutral-100/50 hover:bg-white hover:shadow-sm border-transparent'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                      {cause.category}
                    </span>
                    {pct >= 90 && (
                      <span className="flex items-center gap-0.5 text-[9px] font-mono font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full animate-pulse border border-amber-200/50">
                        <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> Urgent
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-[13px] font-bold text-neural-850 line-clamp-1 mt-1 leading-snug">
                    {cause.title}
                  </h4>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] text-zinc-500 mb-1">
                      <span>{pct}% Funded</span>
                      <span className="font-mono text-neutral-700">${cause.raised.toLocaleString()} / ${cause.goal.toLocaleString()}</span>
                    </div>
                    
                    {/* Tiny Progress Tracker */}
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Immediate Help Action */}
                  <div className="mt-3 pt-2.5 border-t border-dashed border-neutral-200 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-400">{cause.donorsCount} Supporters</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDonateClick(cause);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-[10px] py-1 px-3 rounded-md transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Heart className="w-3 h-3 fill-white text-emerald-100" /> Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-4 pt-0 space-y-4 text-left">
          <div className="px-1">
            <h3 className="text-xs font-bold font-mono uppercase text-zinc-400 tracking-wider mb-2">Key Progress Indicators</h3>
            <p className="text-[11px] text-zinc-500 leading-normal mb-4">
              Our initiatives are strictly monitored through daily evaluations to verify efficiency and direct output.
            </p>
          </div>

          <div className="space-y-3.5">
            {stats.map((st, idx) => (
              <div key={idx} className="bg-white border border-neutral-200/60 rounded-xl p-3.5">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] font-medium text-neutral-500">{st.label}</span>
                  <span className="text-sm font-bold font-mono text-emerald-800">{st.value}</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-1.5">
                  <div 
                    className="bg-emerald-500 h-full rounded-full" 
                    style={{ width: `${st.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 mt-6">
            <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1">
              <Landmark className="w-3.5 h-3.5 text-amber-700" /> Operational Transparency
            </h4>
            <p className="text-[11px] text-amber-800 leading-relaxed mt-1">
              For every dollar received, 86 cents are distributed directly. Read our latest annual report certified by external compliance audits.
            </p>
            <button 
              onClick={() => onPageSelect('about')}
              className="mt-3 text-[10px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 hover:underline cursor-pointer"
            >
              View Audits &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Trust Sign segments */}
      <div className="p-4 border-t border-neutral-200 text-zinc-400 text-[11px] space-y-2 select-none bg-neutral-100/30 text-left">
        <p className="flex items-center gap-1.5">
          <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-600" /> IRS 501(c)(3) Non-Profit Registered
        </p>
        <p className="flex items-center gap-1.5 font-mono text-[10px]">
          <Users className="w-3.5 h-3.5 text-zinc-500" /> Certified by GuideStar Gold
        </p>
      </div>
    </aside>
  );
};

const CheckCircle2Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
