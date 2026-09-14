import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero-rehab.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-18 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Quiet, confident typographic eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase mb-4">
              Orthopaedic Care &amp; Rehabilitation
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-6">
              Move better.{' '}
              <span className="text-teal-600 block sm:inline">Live stronger.</span>
            </h1>

            {/* Supporting Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Personalised orthopaedic treatment and rehabilitation focused on helping patients return to movement, everyday activities, and life with confidence.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-[0.99] touch-target text-sm sm:text-base text-center"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 transition-all duration-150 active:scale-[0.99] touch-target text-sm sm:text-base text-center"
              >
                <span>Explore Treatments</span>
              </Link>
            </div>

            {/* Quiet, restrained factual support line (No mini UI blocks or icon boxes) */}
            <div className="pt-6 border-t border-slate-200/80 w-full max-w-xl">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
                <span className="text-navy-900 font-semibold">Personalised assessment</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-navy-900 font-semibold">In-house post-op rehab</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-navy-900 font-semibold">Non-operative &amp; surgical pathways</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Image Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                <img
                  src={heroImg}
                  alt="Physical rehabilitation and guided mobility session at Pain Cure clinic"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center"
                  loading="eager"
                  width="600"
                  height="480"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
