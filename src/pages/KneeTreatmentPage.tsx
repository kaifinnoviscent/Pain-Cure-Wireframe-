import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Activity, Stethoscope } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import kneeImg from '../assets/knee-treatment.jpg';

export const KneeTreatmentPage: React.FC = () => {
  const nonOperativeModalities = [
    'ERP / ozone',
    'IR Lamp',
    'Physiotherapy',
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
                  Category 02 • Knee Care
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                  Knee Treatment
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-8">
                  Knee care pathways encompassing non-operative modalities and operative intervention based on clinical evaluation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Consult on Knee Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#care-pathways"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-semibold px-6 py-3.5 rounded-lg border border-slate-300 transition-all duration-150 text-sm sm:text-base"
                  >
                    <span>Explore Pathways</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={kneeImg}
                    alt="Clinical knee examination session at Pain Cure clinic"
                    className="w-full h-[320px] sm:h-[420px] object-cover object-center"
                    width="600"
                    height="420"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pathways Section: Editorial separation of Non-Operative & Operative */}
        <section id="care-pathways" className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">
                Clinical Pathways
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Non-operative &amp; surgical options.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Treatment pathways are evaluated according to individual clinical assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* NON-OPERATIVE PATHWAY (7 cols, soft mint background) */}
              <div className="lg:col-span-7 bg-white border border-teal-100 rounded-2xl p-8 sm:p-12 shadow-xs">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-teal-50">
                  <Activity className="w-5 h-5 text-teal-600" />
                  <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
                    Non-Operative Care
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 tracking-tight mb-6">
                  Non-Operative Modalities
                </h3>

                <div className="space-y-4">
                  {nonOperativeModalities.map((item) => (
                    <div
                      key={item}
                      className="p-5 bg-mint-50/50 rounded-xl border border-teal-100/60 flex items-center justify-between"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-navy-900">
                        {item}
                      </h4>
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-teal-200 text-teal-800 rounded-full">
                        Non-Operative
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OPERATIVE PATHWAY (5 cols, clean white with navy accents) */}
              <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <Stethoscope className="w-5 h-5 text-navy-800" />
                    <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                      Surgical Care
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 tracking-tight mb-4">
                    Operative Pathway
                  </h3>

                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-2">
                      Operative Procedure
                    </span>
                    <h4 className="text-lg font-bold text-navy-900">
                      Unicondylar knee replacement
                    </h4>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                  >
                    <span>Discuss Knee Treatment with Our Team</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

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
