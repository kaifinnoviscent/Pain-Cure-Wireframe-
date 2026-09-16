import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import rehabImg from '../../assets/post-op-rehab.jpg';

interface PainCureSectionProps {
  isActive?: boolean;
}

export const PainCureSection: React.FC<PainCureSectionProps> = ({ isActive = true }) => {
  return (
    <section
      id="pain-cure"
      className="w-full bg-navy-950 text-white scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-12 sm:py-16"
      aria-label="Pain Cure: Orthopedic Treatment and Rehabilitation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-[160px_minmax(0,1fr)] xl:gap-12 2xl:gap-16 items-start">
          {/* Desktop Spacer Column matching 160px sticky chapter index */}
          <div className="hidden xl:block" aria-hidden="true" />

          {/* Section Main Content */}
          <div className="min-w-0">
            {/* Section Header */}
            <div 
              className={`flex items-center gap-4 pb-4 border-b border-white/15 mb-10 sm:mb-14 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-0 opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-teal-400 uppercase">
                03 &mdash; PAIN CURE
              </span>
              <div className="h-px bg-white/15 flex-grow" aria-hidden="true" />
            </div>

            {/* Narrative Block */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase block mb-3">
                INTEGRATED CARE ENVIRONMENT
              </span>

              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                Orthopedic Treatment and Rehabilitation
              </h2>
              <div 
                className={`space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[160ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                <p>
                  Pain Cure brings orthopedic treatment and rehabilitation together in one care environment.
                </p>
                <p>
                  The aim is to provide a connected pathway from clinical assessment and treatment through rehabilitation, including in-house post-operative rehabilitation.
                </p>
              </div>
            </div>

            {/* Editorial 3-Part Clinical Model Components (Replaces duplicate 3-stage cards) */}
            <div className="mb-14 sm:mb-18">
              <span 
                className={`text-xs font-mono font-extrabold tracking-widest text-teal-400 uppercase block mb-6 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[200ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                WHAT THE INTEGRATED MODEL INCLUDES
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 border-t border-white/15">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="font-mono text-xs font-bold text-teal-400">01</span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Orthopedic Care
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Treatment appropriate to clinical assessment, emphasizing conservative management whenever suitable.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="font-mono text-xs font-bold text-teal-400">02</span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Rehabilitation
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Structured physiotherapy and active rehabilitation as an integral part of the care process.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="font-mono text-xs font-bold text-teal-400">03</span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      In-House Post-Op Care
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Dedicated on-site post-operative rehabilitation supporting progressive recovery after orthopedic surgery.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-6 italic">
                Note: The appropriate clinical pathway is determined individually based on patient assessment and medical advice.
              </p>
            </div>

            {/* In-House Post-Op Rehab Feature: Editorial Focus with Clean Unobstructed Photo */}
            <div 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy-900/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/15 shadow-elevated relative overflow-hidden transition-all ${
                isActive 
                  ? 'duration-700 ease-out delay-[350ms] opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                <span className="text-xs font-mono font-extrabold tracking-widest text-teal-400 uppercase block">
                  DEDICATED IN-HOUSE SERVICE
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  In-house Post Operative Rehab
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Dedicated in-house rehabilitation facility designed to support progressive functional recovery and return to daily activities following orthopedic procedures.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
                  <div className="flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-xl p-3.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">Supervised progressive sessions</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-xl p-3.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">Return to everyday movement</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/post-operative-rehab"
                    className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 sm:px-7 py-3.5 rounded-xl shadow-md hover:shadow-card-hover transition-all duration-150 text-sm sm:text-base touch-target min-h-[48px]"
                  >
                    <span>Explore In-House Rehabilitation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Unobstructed Clinical Photograph */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 shadow-xl bg-navy-950">
                  <img
                    src={rehabImg}
                    alt="In-house post-operative rehabilitation session at Pain Cure clinic"
                    className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2.5 font-medium text-center sm:text-left">
                  In-House Post-Operative Rehabilitation Facility &bull; Mazgaon Clinic
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
