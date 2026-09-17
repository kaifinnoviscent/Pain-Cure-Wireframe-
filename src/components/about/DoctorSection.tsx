import React from 'react';
import { Award, ShieldCheck, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import drMohsinImg from '../../assets/dr-mohsin-mohsin.png';
import { DOCTOR_PROFILE } from '../../data/clinicalData';

interface DoctorSectionProps {
  isActive?: boolean;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ isActive = true }) => {
  return (
    <section
      id="doctor"
      className="w-full bg-white scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 border-b border-slate-200/80"
      aria-label={`Clinical Leadership: ${DOCTOR_PROFILE.name}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Marker */}
        <div 
          className={`flex items-center gap-4 pb-4 border-b border-slate-200/80 mb-6 sm:mb-8 transition-all ${
            isActive 
              ? 'duration-500 ease-out delay-0 opacity-100 translate-y-0' 
              : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
          }`}
        >
          <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase">
            01 &mdash; CLINICAL LEADERSHIP &amp; FOUNDER
          </span>
          <div className="h-px bg-slate-200 flex-grow" aria-hidden="true" />
        </div>

        {/* Primary Doctor Hero / Opening Lockup: Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Prominent, High-Resolution Doctor Portrait */}
          <div 
            className={`lg:col-span-5 transition-all ${
              isActive 
                ? 'duration-600 ease-out delay-[80ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-card bg-slate-50 max-w-md mx-auto lg:max-w-none group">
              <img
                src={drMohsinImg}
                alt={`${DOCTOR_PROFILE.name}, ${DOCTOR_PROFILE.title} and ${DOCTOR_PROFILE.subtitle}`}
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] xl:h-[520px] object-cover object-top animate-hero-img-reveal"
                width="894"
                height="1024"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Clean Clinical Identifier Strip */}
              <div className="p-3 sm:p-3.5 bg-slate-50/95 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700 font-medium">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  {DOCTOR_PROFILE.name}
                </span>
                <span className="text-teal-900 font-bold bg-teal-50 px-2 py-0.5 rounded border border-teal-200 text-xs">
                  Mazgaon Clinic
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Identity, Titles, Trust Metrics & Philosophy */}
          <div 
            className={`lg:col-span-7 flex flex-col justify-center transition-all ${
              isActive 
                ? 'duration-600 ease-out delay-[160ms] opacity-100 translate-y-0' 
                : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
            }`}
          >
            {/* Identity & Specialization */}
            <div className="mb-4 sm:mb-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-2">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="text-lg sm:text-xl font-bold text-teal-800 leading-snug">
                {DOCTOR_PROFILE.title}
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-700 leading-snug mt-0.5">
                {DOCTOR_PROFILE.subtitle}
              </p>
            </div>

            {/* Editorial Trust Metrics — 3-Column Strip */}
            <div className="py-1 mb-5 sm:mb-6">
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
                {DOCTOR_PROFILE.statistics.map((stat, idx) => (
                  <div 
                    key={stat.label} 
                    className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xs text-left"
                  >
                    <div className="hidden sm:flex items-center gap-1.5 mb-1.5">
                      {idx === 0 && <Award className="w-4 h-4 text-teal-700 shrink-0" />}
                      {idx === 1 && <Activity className="w-4 h-4 text-teal-700 shrink-0" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />}
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 truncate">
                        {stat.label}
                      </span>
                    </div>
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block sm:hidden text-xs font-bold uppercase tracking-wider text-slate-700 mt-1 leading-tight">
                      {idx === 0 ? 'Experience' : idx === 1 ? 'Spine' : 'Knee'}
                    </span>
                    {stat.detail && (
                      <span className="hidden sm:block text-xs text-slate-700 mt-1 leading-snug font-normal">
                        {stat.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Introductory Bio */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5 sm:mb-6">
              {DOCTOR_PROFILE.bioParagraphs[0]}
            </p>

            {/* Clinical Philosophy Quote Block */}
            <div className="p-4 sm:p-4.5 bg-teal-50/70 border-l-4 border-teal-600 rounded-r-xl sm:rounded-r-2xl shadow-2xs mb-5 sm:mb-6">
              <span className="text-xs font-bold text-teal-900 uppercase tracking-wider block mb-1">
                CLINICAL PHILOSOPHY
              </span>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic">
                &ldquo;{DOCTOR_PROFILE.philosophy}&rdquo;
              </p>
            </div>

            {/* In-Page Quick Navigation Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#clinic-positioning"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 sm:py-3 rounded-xl shadow-xs hover:shadow-card-hover transition-all duration-150 text-sm sm:text-base touch-target min-h-[44px]"
              >
                <span>About the Clinic</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#clinical-expertise"
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-navy-900 font-semibold px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200/90 transition-colors text-sm sm:text-base touch-target min-h-[44px]"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Clinical Expertise</span>
              </a>
            </div>

          </div>
        </div>

        {/* Detailed Surgical Experience & Clinical Expertise Subsection */}
        <div 
          id="clinical-expertise" 
          className={`pt-7 sm:pt-8 mt-7 sm:mt-8 border-t border-slate-200/80 scroll-mt-28 transition-all ${
            isActive 
              ? 'duration-600 ease-out delay-[240ms] opacity-100 translate-y-0' 
              : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative: Surgical Background */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block">
                SURGICAL BACKGROUND &amp; NON-OPERATIVE FOCUS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Extensive Surgical Experience with a Conservative-First Approach
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {DOCTOR_PROFILE.bioParagraphs[1]}
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {DOCTOR_PROFILE.bioParagraphs[2]}
              </p>
            </div>

            {/* Right Grid: 3 Clinical Expertise Groups */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-4">
                AREAS OF CLINICAL EXPERTISE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {DOCTOR_PROFILE.expertiseGroups.map((group, gIdx) => (
                  <div 
                    key={group.title} 
                    className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200/80">
                        <span className="text-xs font-bold text-teal-800">
                          0{gIdx + 1}
                        </span>
                        <h4 className="text-xs font-bold tracking-wider text-navy-900 uppercase">
                          {group.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-700 leading-snug font-normal flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorSection;
