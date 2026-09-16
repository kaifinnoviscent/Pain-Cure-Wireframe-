import React from 'react';
import { Award, ShieldCheck, Activity } from 'lucide-react';
import drMohsinImg from '../../assets/dr-mohsin-mohsin.png';
import { DOCTOR_PROFILE } from '../../data/clinicalData';

interface DoctorSectionProps {
  isActive?: boolean;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ isActive = true }) => {
  return (
    <section
      id="doctor"
      className="w-full bg-white scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-12 sm:py-16"
      aria-label={`The Doctor: ${DOCTOR_PROFILE.name}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-[160px_minmax(0,1fr)] xl:gap-12 2xl:gap-16 items-start">
          {/* Desktop Spacer Column matching 160px sticky chapter index */}
          <div className="hidden xl:block" aria-hidden="true" />

          {/* Section Main Content */}
          <div className="min-w-0">
            {/* Section Header */}
            <div 
              className={`flex items-center gap-4 pb-4 border-b border-slate-200/80 mb-8 sm:mb-12 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-0 opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-teal-800 uppercase">
                01 &mdash; THE DOCTOR
              </span>
              <div className="h-px bg-slate-200 flex-grow" aria-hidden="true" />
            </div>

            {/* Mobile-Only Identity Header */}
            <div 
              className={`block lg:hidden mb-6 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-[80ms] opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-1.5">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="text-lg sm:text-xl font-bold text-teal-800 leading-snug">
                {DOCTOR_PROFILE.title}
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-600 leading-snug mt-0.5">
                {DOCTOR_PROFILE.subtitle}
              </p>
            </div>

            {/* Desktop & Mobile Responsive Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
              
              {/* Portrait Column: Unobstructed, authentic photography */}
              <div 
                className={`lg:col-span-5 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                <div className="lg:sticky lg:top-36 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-card bg-slate-50 max-w-md mx-auto lg:max-w-none">
                  <img
                    src={drMohsinImg}
                    alt={`${DOCTOR_PROFILE.name}, ${DOCTOR_PROFILE.title} and ${DOCTOR_PROFILE.subtitle}`}
                    className="w-full h-[360px] sm:h-[460px] lg:h-[540px] xl:h-[580px] object-cover object-top"
                    width="600"
                    height="640"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Identity & Clinical Narrative Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* Desktop Identity Block */}
                <div 
                  className={`hidden lg:block mb-8 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[180ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.08] mb-3">
                    {DOCTOR_PROFILE.name}
                  </h2>
                  <p className="text-xl sm:text-2xl font-bold text-teal-800 leading-snug">
                    {DOCTOR_PROFILE.title}
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-slate-600 leading-snug mt-1">
                    {DOCTOR_PROFILE.subtitle}
                  </p>
                </div>

                {/* Editorial Trust Metrics — Compact 3-Column Strip on Mobile and Desktop */}
                <div 
                  className={`py-2 mb-8 sm:mb-10 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[240ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {DOCTOR_PROFILE.statistics.map((stat, idx) => (
                      <div 
                        key={stat.label} 
                        className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xs text-center sm:text-left flex flex-col justify-between"
                      >
                        <div className="hidden sm:flex items-center gap-1.5 mb-2">
                          {idx === 0 && <Award className="w-4 h-4 text-teal-700" />}
                          {idx === 1 && <Activity className="w-4 h-4 text-teal-700" />}
                          {idx === 2 && <ShieldCheck className="w-4 h-4 text-teal-700" />}
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                            {stat.label}
                          </span>
                        </div>
                        <span className="block text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-mono">
                          {stat.value}
                        </span>
                        <span className="block sm:hidden text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mt-1 leading-tight">
                          {idx === 0 ? 'Years Care' : idx === 1 ? 'Spine Surgeries' : 'Knee Surgeries'}
                        </span>
                        {stat.detail && (
                          <span className="hidden sm:block text-xs text-slate-500 mt-1.5 leading-snug font-normal">
                            {stat.detail}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Narrative: 3 Structured Editorial Paragraphs */}
                <div 
                  className={`space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-10 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[300ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  {DOCTOR_PROFILE.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Areas of Expertise: Editorial Structured List */}
                <div 
                  className={`pt-8 border-t border-slate-200/80 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[360ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase block mb-6">
                    CLINICAL EXPERTISE AREAS
                  </span>

                  <div className="divide-y divide-slate-200/80">
                    {DOCTOR_PROFILE.expertiseGroups.map((group, gIdx) => (
                      <div 
                        key={group.title} 
                        className="py-4.5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                      >
                        <div className="sm:col-span-4 flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold text-teal-700">
                            0{gIdx + 1}
                          </span>
                          <h3 className="font-mono text-xs font-bold tracking-wider text-navy-900 uppercase">
                            {group.title}
                          </h3>
                        </div>
                        <div className="sm:col-span-8">
                          <ul className="space-y-1.5">
                            {group.items.map((item, idx) => (
                              <li key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Philosophy: Editorial Statement */}
                <div 
                  className={`pt-8 mt-10 border-t border-slate-200/80 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[420ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <div className="p-6 bg-teal-50/60 border-l-4 border-teal-600 rounded-r-2xl shadow-2xs">
                    <span className="text-[11px] font-mono font-bold text-teal-800 uppercase tracking-widest block mb-2">
                      CLINICAL PHILOSOPHY
                    </span>
                    <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic max-w-3xl">
                      &ldquo;{DOCTOR_PROFILE.philosophy}&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
