import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';
import { useInView } from '../hooks/useInView';

export const TestimonialsPlaceholder: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-14 sm:py-20 bg-[#F8FCFA] border-b border-teal-100/70"
      aria-label="Clinical Updates and Experiences"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Dignified Clinical Statement */}
          <div 
            className={`lg:col-span-7 transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-teal-200/80 mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
              <span className="font-mono text-xs font-extrabold tracking-widest text-teal-800 uppercase">
                Clinical Experiences
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              Patient stories coming soon.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5 max-w-2xl">
              Patient recovery accounts and clinical case documentation are being compiled for publication following clinical review. We believe in sharing authentic clinical experiences.
            </p>

            <p className="text-xs text-slate-500 font-medium pt-3 border-t border-slate-200/80">
              Clinical recovery accounts will be published here following formal review.
            </p>
          </div>

          {/* Right: Direct Social Connection */}
          <div 
            className={`lg:col-span-5 bg-white border border-teal-100 rounded-2xl p-6 sm:p-7 shadow-xs transition-all duration-500 ease-out delay-[120ms] ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <Instagram className="w-4 h-4" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Official Social Channels</span>
            </div>

            <h3 className="text-lg font-bold text-navy-900 mb-1.5">
              Connect on Instagram
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Follow the clinic for clinical updates, movement guidance, and clinic news.
            </p>

            <div className="space-y-2.5">
              {CLINIC_INFO.instagram.map((item, idx) => (
                <a
                  key={item.handle}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 bg-slate-50/50 hover:bg-teal-50/30 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] touch-target touch-press group"
                >
                  <span className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-teal-900">
                    {item.handle}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

