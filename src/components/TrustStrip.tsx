import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const TrustStrip: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const clinicalDisciplines = [
    { num: '01', label: 'Spine Care', desc: 'Lumbar, neck & nerve pain', slug: '/treatments/spine' },
    { num: '02', label: 'Knee Treatment', desc: 'Conservative & surgical care', slug: '/treatments/knee' },
    { num: '03', label: 'Hip Treatment', desc: 'Replacement & fracture fixation', slug: '/treatments/hip' },
    { num: '04', label: 'Joint Treatment', desc: 'Shoulder, elbow, wrist & more', slug: '/treatments/joints' },
    { num: '05', label: 'Sports Injury', desc: 'Assessment & rehabilitation', slug: '/treatments/sports-injury' },
    { num: '06', label: 'Physiotherapy', desc: 'Supervised rehab modalities', slug: '/treatments/physiotherapy' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#E6F3EF] border-b border-teal-200/90 py-5 sm:py-7"
      aria-label="Clinical Disciplines Quick Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Interactive Grid on Mobile / 6-Column Strip on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-3">
          {clinicalDisciplines.map((item, idx) => {
            const delayStyle = { transitionDelay: `${idx * 60}ms` };

            return (
              <Link
                key={item.label}
                to={item.slug}
                style={delayStyle}
                className={`group p-3 sm:p-3.5 lg:px-4 lg:py-3.5 rounded-xl bg-white hover:bg-white border border-teal-200/90 hover:border-teal-500 shadow-2xs hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] touch-target touch-press flex flex-col justify-between ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="font-mono text-[11px] sm:text-xs font-extrabold text-teal-800 tracking-wider">
                      {item.num}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-teal-900 transition-colors block tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-700 transition-colors mt-1.5 leading-tight line-clamp-1">
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


