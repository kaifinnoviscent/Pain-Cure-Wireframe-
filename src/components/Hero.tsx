import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CONSULTATION_PATH } from '../data/clinicalData';
import heroImg from '../assets/hero-rehab.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF7F4] via-[#F6FCFA] to-white pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 border-b border-teal-100/90">
      {/* Editorial atmospheric glow behind hero composition */}
      <div 
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-200/35 via-mint-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[450px] h-[350px] bg-gradient-to-tr from-teal-100/40 to-transparent rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge (Stagger 80ms) */}
            <div 
              className="animate-hero-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-white border border-teal-200 shadow-2xs mb-4 sm:mb-5"
              style={{ animationDelay: '80ms' }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase">
                Orthopaedic Care &amp; Rehabilitation
              </span>
            </div>

            {/* Main Headline (Stagger 160ms) */}
            <h1 
              className="animate-hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6"
              style={{ animationDelay: '160ms' }}
            >
              Move better.{' '}
              <span className="text-teal-600 block sm:inline">Live stronger.</span>
            </h1>

            {/* Supporting Narrative (Stagger 260ms) */}
            <p 
              className="animate-hero-fade-up text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
              style={{ animationDelay: '260ms' }}
            >
              Personalised orthopaedic treatment and rehabilitation focused on helping patients return to movement, everyday activities, and life with confidence.
            </p>

            {/* Primary & Secondary Actions (Stagger 360ms / 420ms) */}
            <div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <Link
                to={CONSULTATION_PATH}
                className="animate-hero-fade-up group inline-flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] touch-target touch-press text-base text-center min-h-[48px] focus-visible:outline-teal-600"
                style={{ animationDelay: '360ms' }}
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/treatments"
                className="animate-hero-fade-up group inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50/60 text-navy-900 font-bold px-6 py-3.5 rounded-xl border-2 border-slate-200 hover:border-teal-500 shadow-2xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] touch-target touch-press text-base text-center min-h-[48px] focus-visible:outline-teal-600"
                style={{ animationDelay: '420ms' }}
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>

            {/* Factual Support Chips (Stagger 500ms) */}
            <div 
              className="animate-hero-fade-up pt-5 border-t border-slate-200/90 w-full max-w-xl"
              style={{ animationDelay: '500ms' }}
            >
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-teal-200/90 rounded-lg shadow-2xs text-navy-900 font-semibold text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Personalised assessment
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-teal-200/90 rounded-lg shadow-2xs text-navy-900 font-semibold text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  In-house post-op rehab
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-teal-200/90 rounded-lg shadow-2xs text-navy-900 font-semibold text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  Non-operative &amp; surgical pathways
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Image Frame (Stagger 580ms) */}
          <div 
            className="animate-hero-fade-in lg:col-span-5 relative mt-2 lg:mt-0"
            style={{ animationDelay: '580ms' }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Subtle decorative framing glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-400/25 to-teal-100/40 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-teal-200/90 shadow-2xl bg-white relative ring-1 ring-teal-500/20">
                <img
                  src={heroImg}
                  alt="Physical rehabilitation and guided mobility session at Pain Cure clinic"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center animate-hero-img-reveal img-zoom-target transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                  width="600"
                  height="460"
                />

                {/* Floating Clinical Indicator */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-teal-200 rounded-xl px-4 py-3 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 shadow-xs" />
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      In-House Rehabilitation
                    </span>
                  </div>
                  <span className="text-xs font-bold text-teal-900 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                    Active Care
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


