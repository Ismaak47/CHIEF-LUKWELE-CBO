import React, { useState } from 'react';
import { UserPlus, Sparkles, CheckSquare2 } from 'lucide-react';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Water wells construction',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Water wells construction',
        message: '',
      });
    }, 6000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="volunteer" className="py-12 px-6 md:px-12 bg-neutral-50 text-neutral-800 font-sans text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text instructions */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-black font-mono text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full text-left">
            Join The Mission
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-3 leading-tight text-left">
            Become a Vital Volunteer &amp; Lead Local Changes
          </h2>
          <p className="text-xs text-neutral-500 leading-relaxed text-left">
            We are always seeking passionate individuals, medical specialists, builders, and educational coordinators to manage our active field nodes.
          </p>

          <div className="bg-white border border-neutral-200/50 rounded-2xl p-4 space-y-3 pt-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Volunteer Guidelines:</h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Minimum age requirement is 18 years
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Minimum commitment of 5 hours per month
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Digital training modules provided for free upon approval
              </li>
            </ul>
          </div>
        </div>

        {/* Right Volunteer Form mockup */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-neutral-200/65">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-xs transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-xs transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-xs transition-colors"
                      placeholder="+1 (555) 012-3456"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Sector of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-xs transition-colors"
                    >
                      <option value="Water wells construction">Water Wells Construction</option>
                      <option value="Child nutrition aid">Child Nutrition Aid</option>
                      <option value="Under-5 medical relief">Under-5 Medical Relief</option>
                      <option value="Academic teaching">Academic Teaching</option>
                      <option value="Eco-farming & tree planting">Eco-Farming &amp; Planting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">Supporting Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-emerald-600 rounded-xl outline-none text-neutral-800 text-xs transition-colors resize-none"
                    placeholder="Tell us about yourself and why you'd like to join..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                >
                  <UserPlus className="w-4.5 h-4.5 text-white" />
                  Submit Volunteer Application
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300">
                <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full">
                  <CheckSquare2 className="w-10 h-10" />
                </div>
                <h3 className="font-sans font-bold text-xl text-emerald-950">Application Logged Successfully!</h3>
                <p className="text-zinc-500 text-xs max-w-sm leading-normal">
                  Thank you, <strong>{formData.name}</strong>. Our regional volunteer coordinator will review your application for <strong>{formData.interest}</strong> and reach out to you via <strong>{formData.email}</strong> shortly.
                </p>
                <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-[10px] font-mono animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" /> Simulated Dispatch Activated
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
