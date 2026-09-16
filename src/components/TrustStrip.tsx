import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Activity, Shield, Compass, Layers, Zap, HeartPulse } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const TrustStrip: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const clinicalDisciplines = [
    { num: '01', label: 'Spine Care', desc: 'Lumbar, neck & nerve pain', slug: '/treatments/spine', icon: Activity },
    { num: '02', label: 'Knee Treatment', desc: 'Conservative & surgical care', slug: '/treatments/knee', icon: Shield },
    { num: '03', label: 'Hip Treatment', desc: 'Replacement & fracture fixation', slug: '/treatments/hip', icon: Compass },
    { num: '04', label: 'Joint Treatment', desc: 'Shoulder, elbow, wrist & more', slug: '/treatments/joints', icon: Layers },
    { num: '05', label: 'Sports Injury', desc: 'Assessment & rehabilitation', slug: '/treatments/sports-injury', icon: Zap },
    { num: '06', label: 'Physiotherapy', desc: 'Supervised rehab modalities', slug: '/treatments/physiotherapy', icon: HeartPulse },
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#E6F3EF] border-b border-teal-200/90 py-6 sm:py-8"
      aria-label="Clinical Disciplines Quick Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Interactive Grid on Mobile / 6-Column Strip on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-3.5">
          {clinicalDisciplines.map((item, idx) => {
            const IconComp = item.icon;
            const delayStyle = { transitionDelay: `${idx * 50}ms` };

            return (
              <Link
                key={item.label}
                to={item.slug}
                style={delayStyle}
                className={`group p-3.5 sm:p-4 rounded-xl bg-white hover:bg-white border border-teal-200/80 hover:border-teal-400 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] touch-target touch-press flex flex-col justify-between ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100/80 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                  </div>
                  <span className="font-mono text-[10px] font-extrabold text-teal-800 tracking-wider block mb-0.5">
                    {item.num}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-teal-900 transition-colors block tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-700 transition-colors mt-2 leading-tight line-clamp-1">
                  {item.desc}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};


