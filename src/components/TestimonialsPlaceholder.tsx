import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';

export const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Dignified & Honest Statement (Zero fake quotes/ratings) */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase mb-3">
              Clinical Experiences
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
              Patient stories coming soon.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
              Verified patient recovery accounts and clinical case documentation are being compiled for publication following clinical verification. We believe in sharing authentic, verified experiences rather than unverified endorsements.
            </p>

            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-200/80">
              Patient recovery stories will be published here following formal review.
            </p>
          </div>

          {/* Right: Direct Social Connection (Official Handles) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-2.5 text-teal-700 mb-3">
              <Instagram className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Social Channels</span>
            </div>

            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Connect on Instagram
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Follow the clinic for clinical updates, movement guidance, and clinic news.
            </p>

            <div className="space-y-3">
              {CLINIC_INFO.instagram.map((item) => (
                <a
                  key={item.handle}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-slate-200 hover:border-teal-400 bg-slate-50/50 hover:bg-white transition-all group"
                >
                  <span className="text-sm font-bold text-navy-900 group-hover:text-teal-700">
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
