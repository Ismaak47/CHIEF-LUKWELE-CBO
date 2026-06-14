import React from 'react';
import { UpcomingEvent } from '../types';
import { Calendar, Clock, MapPin, Sparkles, CheckSquare2 } from 'lucide-react';

interface EventsSectionProps {
  events: UpcomingEvent[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const [joinedEvents, setJoinedEvents] = React.useState<string[]>([]);

  const handleJoinToggle = (id: string, title: string) => {
    if (joinedEvents.includes(id)) {
      setJoinedEvents(joinedEvents.filter(x => x !== id));
    } else {
      setJoinedEvents([...joinedEvents, id]);
      alert(`Thank you! You have successfully RSVP'd online for "${title}". We will email you the entrance pass.`);
    }
  };

  return (
    <div className="py-12 px-6 md:px-12 bg-white text-zinc-800 font-sans text-left">
      <div className="space-y-2 mb-10 max-w-xl">
        <span className="text-xs font-black font-mono text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
          Calendar Schedule
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 mt-3">
          Join Our Upcoming Campaign Events
        </h2>
        <p className="text-xs text-neutral-500 leading-normal">
          Check out our physical and digital events. RSVP online for free to receive scheduling reminders and digital entry tokens directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {events.map((ev) => {
          const isJoined = joinedEvents.includes(ev.id);
          return (
            <div
              key={ev.id}
              className="bg-neutral-50 border border-neutral-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              {/* Graphic Banner */}
              <div className="relative h-44 bg-zinc-200 overflow-hidden shrink-0">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                
                {/* Date Grid Overlay */}
                <div className="absolute bottom-4 left-4 bg-white text-emerald-950 rounded-xl p-2 px-3 text-center shadow-lg border border-neutral-100 flex items-center gap-2.5">
                  <span className="text-2xl font-black font-mono tracking-tight text-emerald-800 leading-none">{ev.date}</span>
                  <div className="border-l border-neutral-200 pl-2 text-left leading-tight">
                    <p className="text-[10px] font-black font-mono text-zinc-400 uppercase tracking-widest leading-none">{ev.month}</p>
                    <p className="text-[9px] font-sans font-medium text-neutral-500 mt-0.5">Live Campaign</p>
                  </div>
                </div>
              </div>

              {/* Data Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5">
                  <h3 className="font-sans font-black text-base text-emerald-950 leading-snug line-clamp-1">
                    {ev.title}
                  </h3>
                  
                  <div className="space-y-2 text-xs font-medium text-neutral-500">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ev.time}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">{ev.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed font-sans line-clamp-3">
                    {ev.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <button
                    onClick={() => handleJoinToggle(ev.id, ev.title)}
                    className={`w-full font-bold text-xs py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isJoined
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-neutral-900 text-white hover:bg-black active:scale-98'
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <CheckSquare2 className="w-4 h-4" /> Joined Successfully
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" /> RSVP Securely
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonials Segment Embedded inside Events */}
      <div className="mt-16 bg-[#fafafa] border border-neutral-200/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
        <div className="flex items-center gap-4 text-left">
          <div className="bg-amber-100 p-3.5 rounded-2xl text-amber-700 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-black text-emerald-950">Seeking Custom Team Collaborations?</h4>
            <p className="text-xs text-neutral-500 mt-1 max-w-lg">
              We coordinate private regional operations for corporate CSR programs or high-donor committees. Establish a dedicated node today.
            </p>
          </div>
        </div>

        <a 
          href="#volunteer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all whitespace-nowrap"
        >
          Contact Coordinator
        </a>
      </div>
    </div>
  );
};
