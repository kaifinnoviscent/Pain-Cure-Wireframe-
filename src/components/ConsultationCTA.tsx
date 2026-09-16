import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';
import { useInView } from '../hooks/useInView';

export const ConsultationCTA: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-white"
      aria-label="Consultation Request"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Surface */}
        <div 
          className={`rounded-2xl sm:rounded-3xl bg-[#041628] text-white p-7 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-teal-500/20 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Ambient background glow inside CTA card */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900/90 border border-teal-400/30 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
                <span className="font-mono text-xs font-extrabold tracking-widest text-teal-400 uppercase">
                  Consultation &amp; Inquiries
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4 sm:mb-6">
                Ready to take the next step?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
                Let’s discuss your condition and determine the appropriate path forward. Our team is here to guide you from thorough clinical assessment through to dedicated rehabilitation.
              </p>

              {/* Primary Action Button */}
              <div className="mb-10 sm:mb-12">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] touch-target touch-press text-sm sm:text-base min-h-[48px]"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Verified Contact Details Grid — 2 Balanced Columns */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
              <div>
                <span className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-mono text-[11px] font-bold mb-1">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Phone Inquiries</span>
                </span>
                <a 
                  href={CLINIC_INFO.phoneTel} 
                  className="text-sm sm:text-base font-bold text-white font-mono block mt-1 hover:text-teal-300 transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-mono text-[11px] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clinic Address</span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-1 leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>

              {/* Unverified Email & Timings commented out until officially confirmed
              <div>
                <span className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-mono text-[11px] font-bold mb-1">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Email Desk</span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.email}</span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-mono text-[11px] font-bold mb-1">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Timings</span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono block mt-1">{CLINIC_INFO.placeholders.timings}</span>
              </div>
              */}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

