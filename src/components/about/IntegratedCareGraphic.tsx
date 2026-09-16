import React from 'react';
import { ClipboardCheck, Stethoscope, Activity, ShieldCheck } from 'lucide-react';

export const IntegratedCareGraphic: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Detailed Assessment',
      subtitle: 'Diagnostic evaluation to identify contributing pain factors',
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: 'Targeted Treatment',
      subtitle: 'Conservative management or surgery when clinically indicated',
      icon: Stethoscope,
    },
    {
      num: '03',
      title: 'In-House Rehabilitation',
      subtitle: 'Supervised functional recovery and movement restoration',
      icon: Activity,
    },
  ];

  return (
    <div 
      className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8"
      aria-label="Integrated care pathway: Assessment, Treatment, and In-House Rehabilitation"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200/80">
        <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase">
          INTEGRATED CARE PATHWAY
        </span>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
          <span>Under One Roof</span>
        </div>
      </div>

      {/* Connected 3-Step Care Sequence */}
      <div className="relative space-y-6 sm:space-y-7">
        {/* Subtle connecting vertical track */}
        <div 
          className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200" 
          aria-hidden="true" 
        />

        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const isLast = idx === steps.length - 1;

          return (
            <div key={step.num} className="relative flex items-start gap-4 sm:gap-4.5 group">
              {/* Node Marker */}
              <div 
                className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isLast 
                    ? 'bg-teal-600 text-white shadow-xs' 
                    : 'bg-white border border-slate-200 text-teal-700 shadow-2xs'
                }`}
              >
                <IconComp className="w-4.5 h-4.5" />
              </div>

              {/* Text content */}
              <div className="min-w-0 pt-0.5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-teal-800">
                    STAGE {step.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance Footer */}
      <div className="pt-5 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <span>Continuous clinical oversight from initial consult through recovery.</span>
      </div>
    </div>
  );
};
