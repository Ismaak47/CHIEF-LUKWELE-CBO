import React from 'react';
import { Target, Heart, Award, CheckCircle, ShieldAlert } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-12 px-6 md:px-12 bg-white text-zinc-800 font-sans text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Dynamic Visual Blocks */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-neutral-900 text-white p-8 group">
            {/* Background image preview style */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 transition-all duration-700"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=600')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-emerald-900/60" />
            
            <div className="relative z-10 space-y-4">
              <span className="bg-amber-500 text-emerald-950 text-[10px] uppercase font-bold px-3 py-1 rounded-full font-mono">
                Est. Since 2014
              </span>
              <h3 className="text-2xl font-black leading-tight text-white">
                12 Years of Direct, Uncompromising Grassroots Help
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                CHIEF LUKWELE CBO was founded by five humanitarian aid logistics experts who saw a critical gap in remote location deployment and transparent accountability.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/15">
                <div>
                  <h4 className="text-2xl font-black font-mono text-amber-400">142+</h4>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-sans">Active Wells</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black font-mono text-amber-400">18 Countries</h4>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-sans">Direct Presence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillar Cards */}
          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60 space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-wider text-neutral-400 uppercase">Our Core Certifications</h4>
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-800">GuideStar Gold Transparency Mark</h5>
                  <p className="text-[10px] text-zinc-500">Highest certification in philanthropic data reporting</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-150 text-emerald-700 shrink-0">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-800">100% Direct Field Implementation</h5>
                  <p className="text-[10px] text-zinc-500">No intermediates. No administrative resource leaks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Story content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black font-mono text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 mt-3">
              We Stand for Transparent Humanitarian Aid Logistics.
            </h2>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Unlike massive, slow conglomerate funds, CHIEF LUKWELE CBO operates like a modern, precise logistics network. We establish robust local volunteer nodes around remote villages, purchase safe local construction materials, and inspect progress in real-time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
            <div className="border border-neutral-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2.5">
                <Target className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-bold text-neutral-800">Our Core Mission</h4>
              </div>
              <p className="text-xs text-neutral-500 leading-normal">
                To bridge the critical resource gap for marginalized villages through immediate, accountable, direct-support initiatives.
              </p>
            </div>

            <div className="border border-neutral-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-amber-500" />
                <h4 className="text-sm font-bold text-neutral-800">Our Philosophy</h4>
              </div>
              <p className="text-xs text-neutral-500 leading-normal">
                Dignity and respect first. We form deep partnerships directly with regional chiefs to respect historical traditions.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold font-mono text-neutral-400 uppercase tracking-wider">How We Secure Integrity:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-700">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Daily budget updates on blockchain ledgers
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Local engineers hired for technical projects
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                No administrative allocation exceeds 12%
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Certified annual audit reports
              </p>
            </div>
          </div>

          {/* Director quote card */}
          <div className="border-l-4 border-amber-500 bg-neutral-50 p-4 rounded-r-xl space-y-2">
            <p className="italic text-xs text-neutral-600 leading-relaxed">
              &ldquo;True philanthropy doesn't construct dependency. Real impact means rebuilding local assets and providing villagers with the engineering autonomy to thrive on their own terms.&rdquo;
            </p>
            <div>
              <h5 className="text-xs font-bold text-neutral-800">Marcus Vance</h5>
              <p className="text-[10px] font-mono text-zinc-400">Global Executive Director, CHIEF LUKWELE CBO</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
