import React, { useState } from 'react';
import { Cause } from '../types';
import { Heart, Coins, CheckCircle, Share2, Sparkles } from 'lucide-react';

interface DonationsModalProps {
  cause: Cause | null;
  onClose: () => void;
}

export const DonationsModal: React.FC<DonationsModalProps> = ({ cause, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!cause) return null;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0) return;
    setSuccess(true);
  };

  const shareCause = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Campaign link copied to clipboard! Share with your community.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-100 flex flex-col my-8 animate-in zoom-in duration-200">
        
        {/* Banner */}
        <div className="relative h-32 bg-emerald-950 flex items-end">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${cause.image})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-emerald-900/50"></div>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 transition-all rounded-full p-1.5"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="relative p-6 text-white text-left">
            <span className="bg-emerald-500 text-white font-mono uppercase text-[10px] tracking-wider px-2.5 py-1 rounded-full font-bold">
              {cause.category}
            </span>
            <h3 className="font-sans font-bold text-lg mt-2 text-zinc-100 line-clamp-1">
              Support: {cause.title}
            </h3>
          </div>
        </div>

        {/* Form or Success State */}
        {!success ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[70vh] text-left">
            <h4 className="text-sm font-semibold text-neutral-800 mb-3">Choose Donation Amount</h4>
            
            <div className="grid grid-cols-4 gap-2.5 mb-4">
              {[15, 30, 50, 100].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleAmountSelect(amt)}
                  className={`py-3 rounded-xl font-bold border-2 transition-all ${
                    selectedAmount === amt
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800 scale-102'
                      : 'border-neutral-200 hover:border-neutral-300 text-zinc-700'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-bold">$</span>
              <input
                type="number"
                placeholder="Other Amount"
                value={customAmount}
                onChange={handleCustomChange}
                className="w-full pl-9 pr-4 py-3 bg-neutral-50 hover:bg-neutral-100 focus:bg-white border-2 border-dashed border-neutral-300 focus:border-emerald-500 rounded-xl outline-none font-medium text-neutral-800 transition-all"
                min="5"
              />
            </div>

            <h4 className="text-sm font-semibold text-neutral-800 mb-3">Donor Particulars</h4>
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required={!anonymous}
                  disabled={anonymous}
                  value={anonymous ? 'Anonymous Supporter' : donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-sm transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>
              
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <label className="flex items-center gap-2.5 mb-6 select-none cursor-pointer">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
              />
              <span className="text-xs text-neutral-600">Keep my donation anonymous on the public helper wall</span>
            </label>

            {/* Submit */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-98 transition-all text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-white fill-white" />
                Safely Donate ${finalAmount}
              </button>
              <button
                type="button"
                onClick={shareCause}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-4 rounded-xl flex items-center justify-center transition-all cursor-pointer"
                title="Share Campaign"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-zinc-400 mt-3 text-center">
              Processed securely via simulated payment gateway integrations. No real funds involved.
            </p>
          </form>
        ) : (
          <div className="p-8 md:p-10 text-center flex flex-col items-center">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-4 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <h3 className="font-sans font-bold text-2xl text-emerald-950 mb-2">Awesome, Thank You!</h3>
            <p className="text-neutral-600 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
              You simulated donating <strong className="text-emerald-800">${finalAmount}</strong> towards <strong>{cause.title}</strong>! Your heart keeps this community safe.
            </p>

            <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 w-full mb-6 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Donor Name:</span>
                <span className="font-semibold text-neutral-700">{anonymous ? 'Anonymous' : donorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Email:</span>
                <span className="font-semibold text-neutral-700">{donorEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Target Goal:</span>
                <span className="font-semibold text-neutral-700">${cause.goal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Simulated Receipt Status:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Approved
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-neutral-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all w-full cursor-pointer"
            >
              Back to Main Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
