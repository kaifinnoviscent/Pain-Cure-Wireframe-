import React from 'react';
import drMohsinImg from '../../assets/dr-mohsin-mohsin.png';
import { DOCTOR_PROFILE } from '../../data/clinicalData';

interface DoctorSectionProps {
  isActive?: boolean;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ isActive = true }) => {
  return (
    <section
      id="doctor"
      className="w-full bg-white scroll-mt-[136px] sm:scroll-mt-[144px] xl:scroll-mt-28 py-16 sm:py-24 lg:py-32"
      aria-label={`The Doctor: ${DOCTOR_PROFILE.name}`}
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="xl:grid xl:grid-cols-[160px_minmax(0,1fr)] xl:gap-12 2xl:gap-16 items-start">
          {/* Desktop Spacer Column matching 160px sticky chapter index */}
          <div className="hidden xl:block" aria-hidden="true" />

          {/* Section Main Content */}
          <div className="min-w-0">
            {/* Section Header: Stagger 0ms */}
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

            {/* Mobile-Only Identity Header (renders before photo on mobile viewports) */}
            <div 
              className={`block lg:hidden mb-6 transition-all ${
                isActive 
                  ? 'duration-500 ease-out delay-[80ms] opacity-100 translate-y-0' 
                  : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-2">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="text-lg sm:text-xl font-bold text-teal-800 leading-snug">
                {DOCTOR_PROFILE.title}
              </p>
              <p className="text-base sm:text-lg font-semibold text-slate-600 leading-snug">
                {DOCTOR_PROFILE.subtitle}
              </p>
            </div>

            {/* Desktop & Mobile Responsive Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
              
              {/* Portrait Column: Prominent, authentic photographic presence */}
              <div 
                className={`lg:col-span-5 transition-all ${
                  isActive 
                    ? 'duration-500 ease-out delay-[100ms] opacity-100 translate-y-0' 
                    : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                }`}
              >
                <div className="lg:sticky lg:top-36 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl bg-slate-50 max-w-md mx-auto lg:max-w-none">
                  <img
                    src={drMohsinImg}
                    alt={`${DOCTOR_PROFILE.name}, ${DOCTOR_PROFILE.title} and ${DOCTOR_PROFILE.subtitle}`}
                    className="w-full h-[380px] sm:h-[480px] lg:h-[560px] xl:h-[620px] object-cover object-top"
                    width="600"
                    height="640"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Identity & Clinical Narrative Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* Desktop Identity Block (hidden on mobile, visible on lg+) */}
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
                  <p className="text-lg sm:text-xl font-semibold text-slate-600 leading-snug mt-1">
                    {DOCTOR_PROFILE.subtitle}
                  </p>
                </div>

                {/* Editorial Trust Metrics (Hairline-divided, zero dashboard cards) */}
                <div 
                  className={`py-6 sm:py-7 border-y border-slate-200/80 mb-8 sm:mb-10 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[240ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                    {DOCTOR_PROFILE.statistics.map((stat, idx) => (
                      <div 
                        key={stat.label} 
                        className={`${idx === 0 ? 'pt-0 sm:pr-4' : idx === 1 ? 'pt-4 sm:pt-0 sm:px-4 lg:px-5' : 'pt-4 sm:pt-0 sm:pl-4 lg:pl-5'}`}
                      >
                        <span className="block text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                          {stat.value}
                        </span>
                        <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mt-1.5">
                          {stat.label}
                        </span>
                        {stat.detail && (
                          <span className="block text-xs text-slate-500 mt-1 leading-normal font-normal">
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

                {/* Areas of Expertise: Grouped Editorial Categories */}
                <div 
                  className={`pt-8 border-t border-slate-200/80 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[360ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <span className="text-xs font-mono font-extrabold tracking-widest text-slate-400 uppercase block mb-6">
                    AREAS OF EXPERTISE
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                    {DOCTOR_PROFILE.expertiseGroups.map((group) => (
                      <div key={group.title} className="space-y-3">
                        <h3 className="text-xs font-mono font-bold tracking-wider text-teal-800 uppercase pb-2 border-b border-slate-200/70">
                          {group.title}
                        </h3>
                        <ul className="space-y-2.5">
                          {group.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-600/70 mt-1.5 shrink-0" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Philosophy: Restrained Concluding Editorial Statement */}
                <div 
                  className={`pt-8 mt-10 border-t border-slate-200/80 transition-all ${
                    isActive 
                      ? 'duration-500 ease-out delay-[420ms] opacity-100 translate-y-0' 
                      : 'duration-200 ease-in delay-0 opacity-0 translate-y-5'
                  }`}
                >
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic max-w-3xl">
                    &ldquo;{DOCTOR_PROFILE.philosophy}&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
