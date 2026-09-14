import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import physioImg from '../assets/physiotherapy.jpg';

export const PhysiotherapyPage: React.FC = () => {
  const modalities = [
    { num: '01', name: 'IFT' },
    { num: '02', name: 'TENS' },
    { num: '03', name: 'SWD / Short Wave Diathermy' },
    { num: '04', name: 'Ultrasound therapy' },
    { num: '05', name: 'Theraband' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Treatments</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 uppercase block mb-3">
                  Category 06 • Physical Modalities
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  Physiotherapy
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  Clinical physiotherapy modalities provided as part of integrated orthopaedic and rehabilitation care.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Physiotherapy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#modalities-list"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>View Modalities</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={physioImg}
                    alt="Clinical physiotherapy session at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modalities Section: Editorial Highlight of 5 Modalities with Zero Invented Descriptions */}
        <section id="modalities-list" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Modalities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Modalities Offered
              </h2>
            </div>

            {/* Editorial Stacked List with Generous Spacing */}
            <div className="bg-white border border-slate-200/90 rounded-2xl divide-y divide-slate-100 shadow-xs max-w-4xl">
              {modalities.map((item) => (
                <div key={item.num} className="p-6 sm:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-sm">
                      {item.num}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                      {item.name}
                    </h3>
                  </div>

                  <span className="hidden sm:inline-block px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                    Clinical Modality
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Consultation Section */}
        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
};
