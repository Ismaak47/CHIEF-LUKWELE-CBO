import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-emerald-950 text-neutral-300 font-sans border-t border-emerald-900">
      
      {/* Upper Footer Segment / Call out to Help */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-emerald-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
        
        {/* Branch Info & Mission */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 select-none">
            <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 fill-white text-emerald-100" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-white tracking-tight">
                Char<span className="text-amber-400">itics</span>
              </h3>
              <p className="text-[8px] font-mono tracking-widest text-[#a3b393] uppercase -mt-0.5">NGO &amp; Non Profit</p>
            </div>
          </div>
          <p className="text-xs text-[#b8cbb0] leading-relaxed">
            Leading the transformation of remote marginalized societies by ensuring key necessities: education quality, clean-water engineering, and nutritious infant supply diets.
          </p>
          <div className="space-y-2 text-xs text-[#b8cbb0] font-mono">
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              +1 (555) 019-2834
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              info@charitics.org
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              742 Evergreen Terrace, NY
            </p>
          </div>
        </div>

        {/* Resources & Sitemaps */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider font-mono text-amber-400 mb-4 select-none">
            Main Campaigns
          </h4>
          <ul className="space-y-2.5 text-xs text-[#b8cbb0]">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Safe Wells Construction</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Child Nutrition Aid</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">School Stationery Supplies</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Coastal Debris Recycling</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Sustainable Farming</a></li>
          </ul>
        </div>

        {/* Quick Utilities */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider font-mono text-amber-400 mb-4 select-none">
            Important Information
          </h4>
          <ul className="space-y-2.5 text-xs text-[#b8cbb0]">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Detailed Financial Audit</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Operational Integrity Policies</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Success Stories &amp; Reports</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Active Partner Agencies</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Careers &amp; Internships</a></li>
          </ul>
        </div>

        {/* Informative Email Sign up */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider font-mono text-amber-400 mb-4 select-none">
            Stay Up To Date
          </h4>
          <p className="text-xs text-[#b8cbb0] leading-relaxed">
            Sign up for monthly journals detailing construction achievements, budget sheets, and upcoming charity runs.
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-2 text-left">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-emerald-900 border border-emerald-800 focus:border-amber-400 rounded-xl outline-none text-white text-xs transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-650 active:scale-98 transition-all text-emerald-950 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Subscribe Today
            </button>
          </form>

          {subscribed && (
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold pt-1.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Subscription added successfully!</span>
            </div>
          )}
        </div>
      </div>

      {/* Copyright Line */}
      <div className="bg-[#052919] text-[11px] py-4 px-6 text-center text-zinc-400 select-none">
        <p>&copy; {new Date().getFullYear()} CHIEF LUKWELE CBO and Partners. Designed with precision, maintaining strict standard structures.</p>
      </div>
    </footer>
  );
};
