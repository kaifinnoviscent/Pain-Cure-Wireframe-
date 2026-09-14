import React from 'react';

export const ClinicPhilosophy: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Thorough Clinical Assessment',
      desc: 'Careful clinical evaluation to understand symptoms, individual needs, and recovery goals.',
    },
    {
      num: '02',
      title: 'Balanced Clinical Pathways',
      desc: 'Recommending appropriate non-operative modalities or operative care where indicated.',
    },
    {
      num: '03',
      title: 'Integrated Rehabilitation',
      desc: 'In-house Post Operative Rehab and physical modalities to support steady recovery.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-mint-50/50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase mb-4">
              Clinic Philosophy
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-8">
              Treatment is only part of recovery.
            </h2>
            
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                At Pain Cure Ortho &amp; Rehab Clinic, orthopaedic care and rehabilitation are integrated. Treatment and in-house rehabilitation work together as part of a cohesive patient-centred approach.
              </p>
              <p>
                Whether addressing spinal discomfort, joint pain, or recovering from a procedure, our approach focuses on understanding your condition, considering appropriate non-operative or operative pathways, and guiding you steadily back to everyday activities.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Vertical List */}
          <div className="lg:col-span-6 divide-y divide-slate-200/80">
            {principles.map((p) => (
              <div key={p.num} className="py-8 first:pt-0 last:pb-0">
                <span className="text-xs font-extrabold tracking-widest text-teal-700 uppercase block mb-2">
                  {p.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
