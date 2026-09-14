import React from 'react';

export const TrustStrip: React.FC = () => {
  const clinicalDisciplines = [
    { label: 'Spine Care', desc: 'Lumbar, neck & nerve' },
    { label: 'Knee Treatment', desc: 'Non-operative & operative' },
    { label: 'Hip Treatment', desc: 'Replacement & fixation' },
    { label: 'Joint Treatment', desc: 'Upper & lower limbs' },
    { label: 'Sports Injury', desc: 'In-house rehabilitation' },
    { label: 'Physiotherapy', desc: 'Therapeutic modalities' },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/70 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-start">
          {clinicalDisciplines.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col items-start ${idx > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-6' : ''}`}
            >
              <span className="text-sm font-bold text-navy-900 tracking-tight">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 mt-1 leading-snug">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
